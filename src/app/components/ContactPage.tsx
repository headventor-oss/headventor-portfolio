import { motion } from 'motion/react';
import { AnimatedHeadline } from './AnimatedHeadline';
import { ease } from '../utils/animations';

export function ContactPage() {
  return (
    <div id="contact" className="mx-auto max-w-[800px] px-6 pb-24 pt-16">
      <AnimatedHeadline
        as="h1"
        delay={0.05}
        style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(48px, 6vw, 72px)', lineHeight: '1.1', letterSpacing: '-0.02em', color: '#1C1A17' }}
        className="mb-12"
      >
        Let's talk about your project.
      </AnimatedHeadline>

      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.35, ease: ease.out }}
        >
          <h2 className="mb-4" style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.1em', color: '#5C544A', textTransform: 'uppercase' }}>
            Email
          </h2>
          <a
            href="mailto:info@headventor.in"
            className="block transition-colors hover:text-[#B84A28]"
            style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', color: '#1C1A17' }}
          >
            info@headventor.in
          </a>
        </motion.div>

        <motion.div
          className="border-t border-[rgba(28,26,23,0.1)] pt-12"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.48, ease: ease.out }}
        >
          <h2 className="mb-6" style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.1em', color: '#5C544A', textTransform: 'uppercase' }}>
            What to include
          </h2>
          <ul className="space-y-3" style={{ fontSize: '18px', lineHeight: '1.7', color: '#1C1A17' }}>
            {[
              "Brief description of the problem you're trying to solve",
              'What success looks like (metrics, outcomes, constraints)',
              'What data you have access to (size, format, quality)',
              'Timeline and budget expectations',
            ].map((item, i) => (
              <motion.li
                key={i}
                className="flex gap-3"
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.55 + i * 0.08, ease: ease.out }}
              >
                <span className="text-[#B84A28]">—</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="border-t border-[rgba(28,26,23,0.1)] pt-12"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.72, ease: ease.out }}
        >
          <h2 className="mb-6" style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.1em', color: '#5C544A', textTransform: 'uppercase' }}>
            Office
          </h2>
          <div className="space-y-1" style={{ fontSize: '18px', lineHeight: '1.7', color: '#1C1A17' }}>
            <p>268, 2nd Floor, 12th Main, 5th Cross</p>
            <p>HSR Layout Sector 5, Bengaluru – 560102</p>
          </div>
        </motion.div>

        <motion.div
          className="mt-16 rounded-lg border border-[rgba(28,26,23,0.1)] bg-[rgba(28,26,23,0.02)] p-8"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.88, ease: ease.out }}
        >
          <p className="mb-4" style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '20px', lineHeight: '1.5', color: '#1C1A17' }}>
            We typically respond within 24 hours. If your project is a good fit, we'll schedule a call to discuss scope and timelines.
          </p>
          <p style={{ fontSize: '16px', color: '#5C544A' }}>
            Not every project is a match for what we do. We'll tell you quickly if we think someone else would be better suited.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
