import { motion } from 'motion/react';
import { AnimatedHeadline } from '../AnimatedHeadline';
import { ease } from '../../utils/animations';

function FadeUp({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, delay, ease: ease.out }}
    >
      {children}
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-[rgba(28,26,23,0.1)] bg-[#F4EFE5]">
      <div className="mx-auto max-w-[1600px] px-6 py-24">
        <div className="flex flex-col items-center text-center space-y-8">
          <AnimatedHeadline
            as="h1"
            delay={0.1}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(48px, 6vw, 88px)',
              lineHeight: '1.05',
              letterSpacing: '-0.025em',
              color: '#1C1A17',
            }}
          >
            Production AI that{' '}
            <em style={{ fontStyle: 'italic', color: '#B84A28' }}>ships</em>
          </AnimatedHeadline>

          <FadeUp delay={0.45}>
            <p className="max-w-xl text-xl leading-relaxed" style={{ color: '#5C544A' }}>
              Start months ahead with pre-built accelerators and a team that knows exactly what needs to generate value.
            </p>
          </FadeUp>

          <FadeUp delay={0.58}>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="btn-blend rounded-lg bg-[#1C1A17] px-8 py-4"
                style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', letterSpacing: '0.02em', color: '#F4EFE5' }}
              >
                Start a project →
              </a>
              <a
                href="/projects"
                className="rounded-lg border border-[rgba(28,26,23,0.2)] bg-transparent px-8 py-4 transition-all hover:border-[#B84A28] hover:text-[#B84A28]"
                style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', letterSpacing: '0.02em', color: '#1C1A17' }}
              >
                View case studies
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
