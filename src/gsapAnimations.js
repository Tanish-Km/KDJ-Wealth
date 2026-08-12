/**
 * gsapAnimations.js — Central GSAP & ScrollTrigger Motion Engine for KDJ Wealth
 *
 * Sophisticated, high-performance animations respecting prefers-reduced-motion.
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugin once
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const isMobile = () => window.innerWidth < 768;
const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ── Numeric Counter Animation ── */
function animateCounters() {
  if (prefersReducedMotion()) return;

  const elements = document.querySelectorAll('.hero__stat-number');
  elements.forEach((el) => {
    const text = el.textContent.trim();
    const match = text.match(/([\d.]+)/);
    if (!match) return;
    const target = parseFloat(match[1]);
    const prefix = text.slice(0, text.indexOf(match[1]));
    const suffix = text.slice(text.indexOf(match[1]) + match[1].length);

    const obj = { val: 0 };
    gsap.to(obj, {
      val: target,
      duration: 2.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        once: true,
      },
      onUpdate() {
        const v = target % 1 !== 0 ? obj.val.toFixed(1) : Math.floor(obj.val);
        el.textContent = `${prefix}${v}${suffix}`;
      },
    });
  });
}

/* ── Hero Entrance Timeline ── */
function animateHero() {
  if (prefersReducedMotion()) return;

  const heroEl = document.querySelector('.hero');
  if (!heroEl) return;

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  tl.fromTo('.header', { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 })
    .fromTo('.hero__badge', { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.4')
    .fromTo('.hero__title', { opacity: 0, y: 35 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.4')
    .fromTo('.hero__gold-line', { scaleX: 0, opacity: 0 }, { scaleX: 1, opacity: 1, duration: 0.6 }, '-=0.4')
    .fromTo('.hero__subtitle', { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.4')
    .fromTo('.hero__actions', { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.4')
    .fromTo('.hero__stats', { opacity: 0, y: 35, scale: 0.96 }, { opacity: 1, y: 0, scale: 1, duration: 0.8 }, '-=0.4')
    .fromTo('.hero__trust-footer', { opacity: 0 }, { opacity: 1, duration: 0.6 }, '-=0.3');

  // Subtle depth parallax on scroll for hero background
  if (!isMobile()) {
    gsap.to('.hero', {
      backgroundPositionY: '50%',
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 0.5,
      },
    });
  }
}

/* ── WhyChoose — 5-Card Pinned Storytelling Stage ── */
function animateWhyChoose() {
  if (prefersReducedMotion()) return;

  const section = document.querySelector('.why-choose');
  if (!section) return;

  const cards = section.querySelectorAll('.why-choose__story-card-wrapper');
  if (cards.length === 0 || isMobile()) return;

  // Initial state setup
  cards.forEach((card, idx) => {
    if (idx === 0) {
      card.classList.add('why-choose__story-card-wrapper--active');
    } else {
      card.classList.remove('why-choose__story-card-wrapper--active');
    }
  });

  const totalSteps = cards.length;

  ScrollTrigger.create({
    trigger: section,
    start: 'top 40px',
    end: `+=${totalSteps * 350}`,
    pin: true,
    pinSpacing: true,
    scrub: 0.5,
    onUpdate: (self) => {
      const progress = self.progress;
      const currentStep = Math.min(
        totalSteps - 1,
        Math.floor(progress * totalSteps)
      );

      // Update card wrapper classes
      cards.forEach((card, i) => {
        card.classList.remove(
          'why-choose__story-card-wrapper--active',
          'why-choose__story-card-wrapper--passed',
          'why-choose__story-card-wrapper--upcoming'
        );
        if (i === currentStep) {
          card.classList.add('why-choose__story-card-wrapper--active');
        } else if (i < currentStep) {
          card.classList.add('why-choose__story-card-wrapper--passed');
        } else {
          card.classList.add('why-choose__story-card-wrapper--upcoming');
        }
      });

      // Update progress indicator counter text
      const counterEl = section.querySelector('.why-choose__progress-counter');
      if (counterEl) {
        counterEl.textContent = `${currentStep + 1} / ${totalSteps}`;
      }

      // Update progress step indicators
      const stepEls = section.querySelectorAll('.why-choose__progress-step');
      stepEls.forEach((el, i) => {
        if (i <= currentStep) {
          el.classList.add('why-choose__progress-step--active');
        } else {
          el.classList.remove('why-choose__progress-step--active');
        }
      });
    },
  });
}

/* ── 16 Services Stage Pinned Storytelling ── */
function animateServiceCards() {
  if (prefersReducedMotion()) return;

  const section = document.querySelector('.explore-vines');
  if (!section) return;

  const cardWrappers = section.querySelectorAll('.explore-vines__card-wrapper');
  if (cardWrappers.length === 0 || isMobile()) return;

  const totalServices = cardWrappers.length;

  ScrollTrigger.create({
    trigger: section,
    start: 'top 40px',
    end: `+=${totalServices * 220}`,
    pin: true,
    pinSpacing: true,
    scrub: 0.4,
    onUpdate: (self) => {
      const progress = self.progress;
      const currentStep = Math.min(
        totalServices - 1,
        Math.floor(progress * totalServices)
      );

      // Update card wrapper classes
      cardWrappers.forEach((card, i) => {
        card.classList.remove(
          'explore-vines__card-wrapper--active',
          'explore-vines__card-wrapper--passed',
          'explore-vines__card-wrapper--upcoming'
        );
        if (i === currentStep) {
          card.classList.add('explore-vines__card-wrapper--active');
        } else if (i < currentStep) {
          card.classList.add('explore-vines__card-wrapper--passed');
        } else {
          card.classList.add('explore-vines__card-wrapper--upcoming');
        }
      });

      // Update progress counter text
      const counterEl = section.querySelector('.explore-vines__progress-counter');
      if (counterEl) {
        counterEl.textContent = `${String(currentStep + 1).padStart(2, '0')} / ${totalServices}`;
      }

      // Update progress fill bar
      const fillEl = section.querySelector('.explore-vines__progress-fill');
      if (fillEl) {
        fillEl.style.width = `${((currentStep + 1) / totalServices) * 100}%`;
      }
    },
  });
}

/* ── SVG Path Stroke Drawings & General Section Reveals ── */
function animateSections() {
  if (prefersReducedMotion()) return;

  // Section titles reveal
  gsap.utils.toArray('.section-title, .section-header h2').forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      }
    );
  });

  // SVG Path animation when entering view
  gsap.utils.toArray('.feature-card__icon svg, .vine-card__horizon svg').forEach((svg) => {
    gsap.fromTo(
      svg,
      { scale: 0.8, opacity: 0.7 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: 'back.out(1.5)',
        scrollTrigger: { trigger: svg, start: 'top 90%', once: true },
      }
    );
  });
}

/* ── Modal Opening Animation ── */
export function animateBlogModalOpen(modalEl) {
  if (prefersReducedMotion()) {
    gsap.set(modalEl, { opacity: 1, scale: 1, y: 0 });
    return;
  }
  gsap.fromTo(
    modalEl,
    { opacity: 0, scale: 0.97, y: 24 },
    { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: 'power2.out' }
  );
}

/* ── Modal Closing Animation ── */
export function animateBlogModalClose(modalEl, onComplete) {
  if (prefersReducedMotion()) {
    onComplete();
    return;
  }
  gsap.to(modalEl, {
    opacity: 0,
    scale: 0.97,
    y: 16,
    duration: 0.3,
    ease: 'power2.in',
    onComplete,
  });
}

/* ── Master GSAP Initializer ── */
export function initGSAP() {
  if (typeof window === 'undefined') return;

  // Kill old ScrollTriggers on route changes
  ScrollTrigger.getAll().forEach((t) => t.kill());

  if (prefersReducedMotion()) {
    console.info('prefers-reduced-motion is active. High motion animations bypassed.');
    return;
  }

  requestAnimationFrame(() => {
    animateHero();
    animateCounters();
    animateWhyChoose();
    animateServiceCards();
    animateSections();
  });
}

export function refreshGSAP() {
  ScrollTrigger.refresh();
}
