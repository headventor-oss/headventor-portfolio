import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import type { Variants } from 'motion/react';
import { fadeUp, staggerContainer } from '../utils/animations';

interface ScrollRevealProps {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  threshold?: number;
  stagger?: boolean;
  staggerDelay?: number;
}

export function ScrollReveal({
  children,
  variants = fadeUp,
  className,
  style,
  delay = 0,
  threshold = 0.08,
  stagger = false,
  staggerDelay = 0.09,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-8% 0px' });

  const containerVariants = stagger ? staggerContainer(staggerDelay) : undefined;

  if (stagger) {
    return (
      <motion.div
        ref={ref}
        className={className}
        style={style}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      custom={delay}
      transition={delay ? { ...variants.visible?.transition as object, delay } : undefined}
    >
      {children}
    </motion.div>
  );
}

// Convenience: a single stagger item (used inside ScrollReveal stagger container)
export function StaggerItem({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div className={className} style={style} variants={fadeUp}>
      {children}
    </motion.div>
  );
}
