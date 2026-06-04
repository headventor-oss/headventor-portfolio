import { motion } from 'motion/react';
import { AnimatedHeadline } from '../AnimatedHeadline';
import { ease } from '../../utils/animations';

export function CTASection() {
  return (
    <section className="bg-[#1C1A17] py-24">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8% 0px' }}
          transition={{ duration: 1.0, ease: ease.out }}
        >
          <AnimatedHeadline
            as="h2"
            style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: '1.1', letterSpacing: '-0.02em', color: '#F4EFE5' }}
            className="mb-6"
          >
            Ready to ship production AI?
          </AnimatedHeadline>

          <motion.p
            className="mx-auto mb-12 max-w-2xl text-xl leading-relaxed"
            style={{ color: '#E8E3D8' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.2, ease: ease.out }}
          >
            Tell us about your problem. We'll respond within 24 hours with our honest assessment of
            whether ML can help—and what it would take to get it into production.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.35, ease: ease.out }}
          >
            <a
              href="mailto:info@headventor.in"
              className="btn-blend rounded-lg bg-[#B84A28] px-8 py-4 transition-all"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', letterSpacing: '0.02em', color: '#F4EFE5' }}
            >
              info@headventor.in →
            </a>
            <a
              href="#work"
              className="rounded-lg border border-[rgba(244,239,229,0.3)] bg-transparent px-8 py-4 transition-all hover:border-[#F4EFE5] hover:bg-[rgba(244,239,229,0.05)]"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', letterSpacing: '0.02em', color: '#F4EFE5' }}
            >
              View our work
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
