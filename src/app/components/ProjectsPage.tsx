import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ProjectTile } from './ProjectTile';
import { AnimatedHeadline } from './AnimatedHeadline';
import { ease } from '../utils/animations';

const projects = [
  { id: 'HV-01', name: 'Procura',                         descriptor: 'End-to-end procurement intelligence — supplier discovery, scoring, RFI/RFQ, and contract review', domain: 'Procurement',   duration: '8 weeks' },
  { id: 'HV-02', name: 'Sales coaching platform',         descriptor: 'Voice AI that lets reps rehearse high-stakes calls before they happen',                           domain: 'Sales',          duration: '6 weeks' },
  { id: 'HV-03', name: 'Financial competitive assistant', descriptor: 'Upload any annual report and interrogate competitors\' numbers in seconds',                        domain: 'Finance',        duration: '5 weeks' },
  { id: 'HV-04', name: 'Inventory intelligence platform', descriptor: 'Seven modules answering — can we take this order, and by when?',                                  domain: 'Manufacturing',  duration: '9 weeks' },
  { id: 'HV-05', name: 'CAD parts intelligence platform', descriptor: 'AI similarity detection that finds the reusable part before a duplicate is created',               domain: 'Manufacturing',  duration: '8 weeks' },
];

export function ProjectsPage() {
  const heroRef = useRef(null);
  const row2Ref = useRef(null);
  const row3Ref = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: '-5% 0px' });
  const row2InView = useInView(row2Ref, { once: true, margin: '-8% 0px' });
  const row3InView = useInView(row3Ref, { once: true, margin: '-8% 0px' });

  return (
    <div className="mx-auto max-w-[1600px] px-6 pb-24 pt-16">
      <motion.div
        className="mb-20"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: ease.out }}
      >
        <AnimatedHeadline
          as="h1"
          delay={0.1}
          style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: '1.15', letterSpacing: '-0.02em', color: '#1C1A17' }}
          className="mb-6 max-w-4xl"
        >
          Accelerators we've built and shipped
        </AnimatedHeadline>
        <motion.p
          className="max-w-2xl text-xl leading-relaxed"
          style={{ color: '#5C544A' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.35, ease: ease.out }}
        >
          Five production AI systems across procurement, sales, finance, and manufacturing.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 gap-16">
        {/* Hero tile — HV-01 */}
        <div ref={heroRef}>
          <ProjectTile {...projects[0]} aspectRatio="16/9" isInView={heroInView} delay={0} />
        </div>

        <div className="-mt-8 h-px bg-[rgba(28,26,23,0.1)]" />

        {/* 2-up row — HV-02, HV-03 */}
        <div ref={row2Ref} className="grid grid-cols-2 gap-10">
          <ProjectTile {...projects[1]} aspectRatio="4/3" isInView={row2InView} delay={0}   />
          <ProjectTile {...projects[2]} aspectRatio="4/3" isInView={row2InView} delay={0.1} />
        </div>

        {/* HV-04, HV-05 — same 1:1 size, 3-col grid with 2 tiles */}
        <div ref={row3Ref} className="grid grid-cols-3 gap-10">
          <ProjectTile {...projects[3]} aspectRatio="1/1" hideCaption isInView={row3InView} delay={0}    />
          <ProjectTile {...projects[4]} aspectRatio="1/1" hideCaption isInView={row3InView} delay={0.08} />
        </div>
      </div>
    </div>
  );
}
