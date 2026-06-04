import type { Variants, Transition } from 'motion/react';

// ─── Easing vocabulary (sourced from Squarespace production CSS) ──────────────
export const ease = {
  out:   [0.16, 1, 0.3, 1]   as const,   // large motion: titles, page entrance
  swift: [0.645, 0.045, 0.355, 1] as const, // micro-interactions: buttons, underlines
  swipe: [0.165, 0.84, 0.44, 1]  as const, // clip-path wipes, menu swipes
  strong:[0.23, 1, 0.32, 1]   as const,   // aggressive deceleration: fade-ins
};

// ─── Shared transitions ───────────────────────────────────────────────────────
export const t = {
  slow:   { duration: 1.0,  ease: ease.out }   as Transition,
  medium: { duration: 0.75, ease: ease.out }   as Transition,
  fast:   { duration: 0.45, ease: ease.swift } as Transition,
  wipe:   { duration: 0.55, ease: ease.swipe } as Transition,
};

// ─── Page transition variants ────────────────────────────────────────────────
export const pageVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.5, ease: ease.out, delay: 0.05 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.25, ease: ease.swift },
  },
};

// ─── Fade-up (scroll reveal baseline) ────────────────────────────────────────
export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: ease.out } },
};

export const fadeUpSlow: Variants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.1, ease: ease.out } },
};

// ─── Stagger container (parent) ───────────────────────────────────────────────
export function staggerContainer(staggerChildren = 0.1, delayChildren = 0): Variants {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren, delayChildren },
    },
  };
}

// ─── Word-split animation ─────────────────────────────────────────────────────
export const wordReveal: Variants = {
  hidden:  { y: '110%', opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.05,
      delay: i * 0.055,
      ease: ease.out,
    },
  }),
};

// ─── Clip-path curtain (for hero images on detail page) ───────────────────────
export const curtainReveal: Variants = {
  hidden:  { clipPath: 'inset(0 0 100% 0)' },
  visible: {
    clipPath: 'inset(0 0 0% 0)',
    transition: { duration: 1.05, ease: ease.swipe },
  },
};

// ─── Scale in (for cards) ─────────────────────────────────────────────────────
export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.97, y: 20 },
  visible: { opacity: 1, scale: 1,    y: 0,
    transition: { duration: 0.75, ease: ease.out } },
};
