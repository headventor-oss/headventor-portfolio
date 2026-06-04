import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { ease } from '../utils/animations';

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  // Dot: near-instant (very stiff spring — follows cursor)
  const dotX = useSpring(mouseX, { stiffness: 5000, damping: 120, mass: 0.05 });
  const dotY = useSpring(mouseY, { stiffness: 5000, damping: 120, mass: 0.05 });

  // Ring: lagging (loose spring — trails behind)
  const ringX = useSpring(mouseX, { stiffness: 180, damping: 30, mass: 0.6 });
  const ringY = useSpring(mouseY, { stiffness: 180, damping: 30, mass: 0.6 });

  useEffect(() => {
    const isFine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isFine) return;

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as Element;
      setIsHovering(!!target.closest('a, button, [data-cursor-hover], .tile-hover'));
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
    };
  }, [mouseX, mouseY, isVisible]);

  const isFine = typeof window !== 'undefined' &&
    window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!isFine) return null;

  return (
    <>
      {/* Dot — instant */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0, left: 0,
          x: dotX, y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          width: 6,
          height: 6,
          borderRadius: '50%',
          backgroundColor: isHovering ? '#B84A28' : '#1C1A17',
          pointerEvents: 'none',
          zIndex: 10000,
          willChange: 'transform',
          opacity: isVisible ? 1 : 0,
          transition: 'background-color 0.2s, opacity 0.3s',
        }}
      />

      {/* Ring — lagging */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0, left: 0,
          x: ringX, y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          willChange: 'transform',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.3s',
        }}
        animate={{
          width:  isHovering ? 56 : 32,
          height: isHovering ? 56 : 32,
          borderColor: isHovering ? '#B84A28' : 'rgba(28,26,23,0.25)',
          backgroundColor: isHovering ? 'rgba(184,74,40,0.08)' : 'transparent',
          borderWidth: 1,
          borderStyle: 'solid',
        }}
        transition={{ duration: 0.35, ease: ease.swift }}
      />
    </>
  );
}
