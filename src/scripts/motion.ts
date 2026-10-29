// GSAP motion layer. Loaded lazily (after the page is idle) by BaseLayout, so it never
// delays the first paint. Everything here is skipped for reduced-motion users, and is
// fully reverted before each page navigation (no leaks with the SPA router).
//
// UX rules: no scroll hijacking (native scrolling only), short durations, motion that
// supports reading (titles, depth) rather than blocking it.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

let mm: gsap.MatchMedia | undefined;

export function destroyMotion() {
  mm?.revert();
  mm = undefined;
}

export function initMotion() {
  destroyMotion();
  mm = gsap.matchMedia();

  mm.add(
    {
      motion: '(prefers-reduced-motion: no-preference)',
      desktop: '(min-width: 861px) and (pointer: fine)',
    },
    (ctx) => {
      const { motion, desktop } = ctx.conditions as { motion: boolean; desktop: boolean };
      if (!motion) return;

      // 1. Section titles: words rise out of a mask as the title scrolls in.
      //    SplitText keeps the heading readable to screen readers (aria-label on the parent).
      gsap.utils.toArray<HTMLElement>('.block__title, .life__title, .contact__title').forEach((title) => {
        SplitText.create(title, {
          type: 'words',
          mask: 'words',
          wordsClass: 'w', // masks become .w-mask (padded in global.css so descenders aren't clipped)
          autoSplit: true, // re-split when fonts load or the width changes
          onSplit: (self) =>
            gsap.from(self.words, {
              yPercent: 110,
              duration: 0.9,
              ease: 'power4.out',
              stagger: 0.05,
              scrollTrigger: { trigger: title, start: 'top 88%', once: true },
            }),
        });
      });

      // 2. Marquee reacts to scroll speed: it speeds up and leans while you scroll, then settles.
      const marquee = document.querySelector<HTMLElement>('.marquee');
      const track = marquee?.querySelector<HTMLElement>('.marquee__track');
      const loop = track?.getAnimations()[0];
      if (marquee && loop) {
        const state = { rate: 1, skew: 0 };
        const settle = gsap.quickTo(state, 'rate', { duration: 0.8, ease: 'power3.out', onUpdate: () => (loop.playbackRate = state.rate) });
        const lean = gsap.quickTo(marquee, 'skewX', { duration: 0.5, ease: 'power3.out' });
        ScrollTrigger.create({
          onUpdate: (self) => {
            const v = self.getVelocity();
            settle(1 + Math.min(Math.abs(v) / 400, 5));
            lean(gsap.utils.clamp(-6, 6, v / -300));
          },
        });
        ScrollTrigger.addEventListener('scrollEnd', () => {
          settle(1);
          lean(0);
        });
      }

      // 3. Contact panel grows into place as it arrives. It animates a CSS variable used by the
      //    separate `scale` property, so it never fights the reveal transform.
      const contact = document.querySelector<HTMLElement>('.contact');
      if (contact) {
        gsap.fromTo(
          contact,
          { '--cs': 0.92, borderRadius: 48 },
          { '--cs': 1, borderRadius: 28, ease: 'none', scrollTrigger: { trigger: contact, start: 'top bottom', end: 'top 45%', scrub: 0.6 } },
        );
      }

      // Desktop only: depth effects that rely on a large screen.
      if (!desktop) return;

      // 4. Hero scroll-out: the copy drifts up and fades, the editor floats at its own speed.
      const hero = document.querySelector<HTMLElement>('.hero');
      if (hero) {
        const st = { trigger: hero, start: 'top top', end: 'bottom top', scrub: 0.5 };
        gsap.to('.hero__copy', { yPercent: -18, opacity: 0.15, ease: 'none', scrollTrigger: st });
        gsap.to('.editor', { '--py': '-110px', ease: 'none', scrollTrigger: st });
      }

      // 5. Project cards: the big outlined title inside each visual moves at a different speed.
      gsap.utils.toArray<HTMLElement>('.card').forEach((card) => {
        gsap.fromTo(
          card.querySelector('.card__big'),
          { '--py': '30px' },
          { '--py': '-30px', ease: 'none', scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: true } },
        );
      });

      // 6. Experience: the git-log rail fills with the accent colour as you read down it.
      const log = document.querySelector<HTMLElement>('.log');
      if (log) {
        gsap.fromTo(
          log,
          { '--fill': '0%' },
          { '--fill': '100%', ease: 'none', scrollTrigger: { trigger: log, start: 'top 70%', end: 'bottom 70%', scrub: 0.4 } },
        );
      }
    },
  );
}
