import { motion } from 'motion/react';
import { AnimatedHeadline } from './AnimatedHeadline';
import { ScrollReveal } from './ScrollReveal';
import { ease } from '../utils/animations';

const principles = [
  {
    title: 'AI-first delivery',
    body: 'AI is not a layer added at the end — it is integrated across engineering, analytics, and automation from day one of every engagement.',
  },
  {
    title: 'Rapid experimentation',
    body: 'We prototype fast, validate early, and kill ideas that do not work. A proof-of-concept that fails in week two costs a fraction of one that fails in production.',
  },
  {
    title: 'Reusable accelerators',
    body: 'Every engagement produces artefacts — playbooks, pipelines, components — that we carry forward. Clients benefit from what every previous client taught us.',
  },
  {
    title: 'Responsible AI by design',
    body: 'Security, privacy, and governance frameworks are embedded into every solution architecture from the start, not retrofitted after launch.',
  },
];

const engagements = [
  {
    id: '01',
    model: 'Extended resources',
    tag: 'Staff augmentation',
    body: 'We deploy Data, ML, and ERP engineers, MLOps specialists, and product and analytics talent directly into your team. You get senior practitioners who hit the ground running — no ramp-up, no handholding.',
  },
  {
    id: '02',
    model: 'Managed projects',
    tag: 'Fixed / outcome-based',
    body: 'Discovery to deployment, scoped and priced upfront. Fixed cost, outcome models, and SLA-driven quality. We carry the delivery risk so your team can focus on the business problem, not the project.',
  },
  {
    id: '03',
    model: 'GCC-as-a-service',
    tag: 'Build-operate-transfer',
    body: 'We build and operate your Global Capability Centre, then transfer it to you once it is running. Speed and control from day one, with Platform, ERP, and AI centres of excellence built in.',
  },
];

export function StudioPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 pb-24 pt-16">

      {/* Hero headline */}
      <AnimatedHeadline
        as="h1"
        delay={0.05}
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(48px, 6vw, 96px)',
          lineHeight: '1.08',
          letterSpacing: '-0.025em',
          color: '#1C1A17',
        }}
        className="mb-16 max-w-4xl"
      >
        Turning today's challenges into{' '}
        <em style={{ fontStyle: 'italic', color: '#B84A28' }}>tomorrow's</em>{' '}
        capabilities.
      </AnimatedHeadline>

      {/* Opening — drop cap */}
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_320px]">
        <div>
          <motion.div
            className="space-y-6 max-w-[62ch]"
            style={{ fontSize: '18px', lineHeight: '1.75', color: '#1C1A17' }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.38, ease: ease.out }}
          >
            <p
              className="first-letter:float-left first-letter:mr-2 first-letter:text-7xl first-letter:font-normal first-letter:leading-[0.85] first-letter:text-[#B84A28]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Headventor partners with organisations to unlock future-ready solutions —
              bridging the gap between strategy and execution so enterprises can deliver
              measurable business outcomes faster and more reliably.
            </p>

            <p>
              We are a team of engineers, data scientists, and domain specialists with deep
              expertise across Digitalization, ERP, and Data &amp; AI. We do not consult from
              a distance. We embed in your organisation, work alongside your teams, and stay
              until the system is running in production.
            </p>
          </motion.div>

          {/* Pull quote */}
          <motion.blockquote
            className="my-12 border-l-2 border-[#B84A28] py-2 pl-6 max-w-[52ch]"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: ease.out }}
          >
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '24px', lineHeight: '1.45', color: '#1C1A17' }}>
              Startup speed with enterprise-grade rigor and global delivery.
            </p>
          </motion.blockquote>

          <motion.div
            className="space-y-6 max-w-[62ch]"
            style={{ fontSize: '18px', lineHeight: '1.75', color: '#1C1A17' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.78, ease: ease.out }}
          >
            <p>
              Our mission is to accelerate organisational transformation by deploying
              forward-deployed teams with deep domain expertise — enabling rapid value
              creation and sustainable global impact. Our vision is a world where every
              enterprise can harness the power of AI and modern data infrastructure without
              years of failed pilots or bloated transformation programmes.
            </p>
          </motion.div>
        </div>

        {/* Right rail — meta */}
        <motion.aside
          className="space-y-8 pt-2"
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.55, ease: ease.out }}
        >
          <div className="border-t border-[rgba(28,26,23,0.1)] pt-6">
            <p className="mb-1" style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.08em', color: '#5C544A', textTransform: 'uppercase' }}>
              Founded
            </p>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '15px', color: '#1C1A17' }}>2024</p>
          </div>
          <div className="border-t border-[rgba(28,26,23,0.1)] pt-6">
            <p className="mb-1" style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.08em', color: '#5C544A', textTransform: 'uppercase' }}>
              Headquarters
            </p>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '15px', color: '#1C1A17' }}>Bangalore, India</p>
          </div>
          <div className="border-t border-[rgba(28,26,23,0.1)] pt-6">
            <p className="mb-1" style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.08em', color: '#5C544A', textTransform: 'uppercase' }}>
              Reach
            </p>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '15px', color: '#1C1A17' }}>India · Southeast Asia · Global</p>
          </div>
          <div className="border-t border-[rgba(28,26,23,0.1)] pt-6">
            <p className="mb-1" style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.08em', color: '#5C544A', textTransform: 'uppercase' }}>
              Practice areas
            </p>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', lineHeight: '1.7', color: '#1C1A17' }}>
              Data &amp; AI<br />
              ERP &amp; Digitalization<br />
              GCC Build-Operate-Transfer<br />
              MLOps &amp; Platform Engineering
            </p>
          </div>
          <div className="border-t border-[rgba(28,26,23,0.1)] pt-6">
            <a
              href="mailto:info@headventor.com"
              className="block transition-colors hover:text-[#B84A28]"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: '#1C1A17' }}
            >
              info@headventor.com →
            </a>
          </div>
        </motion.aside>
      </div>

      {/* Principles */}
      <ScrollReveal
        className="mt-24 border-t border-[rgba(28,26,23,0.1)] pt-16"
        threshold={0.05}
      >
        <p className="mb-12" style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.1em', color: '#5C544A', textTransform: 'uppercase' }}>
          What we stand for
        </p>

        <div className="grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2">
          {principles.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-5% 0px' }}
              transition={{ duration: 0.75, delay: i * 0.09, ease: ease.out }}
            >
              <h3 className="mb-3" style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', lineHeight: '1.3', color: '#1C1A17' }}>
                {p.title}
              </h3>
              <p className="leading-relaxed" style={{ fontSize: '16px', color: '#5C544A' }}>
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </ScrollReveal>

      {/* Engagement models */}
      <ScrollReveal
        className="mt-24 border-t border-[rgba(28,26,23,0.1)] pt-16"
        threshold={0.05}
      >
        <p className="mb-12" style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.1em', color: '#5C544A', textTransform: 'uppercase' }}>
          How we engage
        </p>

        <div className="space-y-0">
          {engagements.map((e, i) => (
            <motion.div
              key={i}
              className="grid grid-cols-[80px_1fr] gap-8 border-t border-[rgba(28,26,23,0.08)] py-10 last:border-b"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-5% 0px' }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: ease.out }}
            >
              <div className="pt-1" style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.04em', color: '#8A8175' }}>
                {e.id}
              </div>
              <div>
                <div className="mb-1 flex flex-wrap items-baseline gap-4">
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '26px', lineHeight: '1.2', color: '#1C1A17' }}>
                    {e.model}
                  </h3>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.07em', color: '#5C544A', textTransform: 'uppercase' }}>
                    {e.tag}
                  </span>
                </div>
                <p className="mt-3 max-w-[60ch] leading-relaxed" style={{ fontSize: '16px', color: '#5C544A' }}>
                  {e.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </ScrollReveal>

      {/* CTA */}
      <motion.div
        className="mt-24 border-t border-[rgba(28,26,23,0.1)] pt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.85, ease: ease.out }}
      >
        <p className="mb-6 max-w-[52ch]" style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '20px', lineHeight: '1.55', color: '#5C544A' }}>
          Ready to co-create your transformation roadmap and stand up measurable wins in 90 days?
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:info@headventor.com"
            className="btn-blend rounded-lg bg-[#1C1A17] px-8 py-4"
            style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', letterSpacing: '0.02em', color: '#F4EFE5' }}
          >
            info@headventor.com →
          </a>
          <a
            href="https://headventor.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-[rgba(28,26,23,0.2)] px-8 py-4 transition-all hover:border-[#B84A28] hover:text-[#B84A28]"
            style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', letterSpacing: '0.02em', color: '#1C1A17' }}
          >
            headventor.com
          </a>
        </div>
      </motion.div>

    </div>
  );
}
