import { useRef } from 'react';
import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { AnimatedHeadline } from '../AnimatedHeadline';
import { ease } from '../../utils/animations';

const featuredProjects = [
  {
    id: 'HV-01',
    name: 'Procura',
    industry: 'Procurement',
    metric: '2–3 weeks → 1 session',
    description: 'End-to-end procurement intelligence — supplier discovery, scoring, RFI/RFQ generation, and AI contract review',
    image: '/images/hv-01-tile.png',
  },
  {
    id: 'HV-02',
    name: 'Sales coaching platform',
    industry: 'Sales',
    metric: 'On-demand rehearsal',
    description: 'Voice AI that lets reps rehearse high-stakes calls before they happen',
    image: '/images/hv-02-tile.png',
  },
  {
    id: 'HV-03',
    name: 'Financial competitive assistant',
    industry: 'Finance',
    metric: 'Cited answers in seconds',
    description: 'Upload any annual report and interrogate competitors\' numbers instantly',
    image: '/images/hv-03-tile.png',
  },
  {
    id: 'HV-05',
    name: 'CAD parts intelligence platform',
    industry: 'Manufacturing',
    metric: 'Duplicate parts eliminated',
    description: 'AI similarity detection that finds the reusable part before a duplicate is created',
    image: '/images/hv-05-tile.png',
  },
];

function ProjectTile({
  project,
  index,
  isInView,
}: {
  project: (typeof featuredProjects)[0];
  index: number;
  isInView: boolean;
}) {
  const isFeatured = index === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: ease.out }}
      className={isFeatured ? 'md:col-span-2' : ''}
    >
      <Link
        to={`/project/${project.id}`}
        className="group relative block overflow-hidden rounded-xl"
        style={{ aspectRatio: isFeatured ? '16/9' : '4/5' }}
      >
        {/* Image */}
        <img
          src={project.image}
          alt={project.name}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />

        {/* Gradient — strong at bottom, subtle at top */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(16,14,12,0.92) 0%, rgba(16,14,12,0.55) 35%, rgba(16,14,12,0.1) 65%, transparent 100%)',
          }}
        />

        {/* Top row: ID */}
        <div className="absolute left-5 top-5">
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              letterSpacing: '0.08em',
              color: 'rgba(244,239,229,0.7)',
            }}
          >
            {project.id}
          </span>
        </div>

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          {/* Industry + metric row */}
          <div className="mb-3 flex items-center justify-between">
            <span
              className="rounded-sm px-2 py-0.5"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: '0.07em',
                color: 'rgba(244,239,229,0.75)',
                textTransform: 'uppercase',
                border: '1px solid rgba(244,239,229,0.2)',
              }}
            >
              {project.industry}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: '#D4835A',
                letterSpacing: '0.02em',
              }}
            >
              {project.metric}
            </span>
          </div>

          {/* Title */}
          <h3
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: isFeatured ? 'clamp(24px, 2.5vw, 34px)' : '20px',
              lineHeight: '1.2',
              letterSpacing: '-0.01em',
              color: '#F4EFE5',
              marginBottom: '8px',
            }}
          >
            {project.name}
          </h3>

          {/* Description */}
          <p
            style={{
              fontSize: '13px',
              lineHeight: '1.55',
              color: 'rgba(244,239,229,0.65)',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical' as const,
              overflow: 'hidden',
            }}
          >
            {project.description}
          </p>

          {/* View link — slides up on hover */}
          <div
            className="mt-3 flex items-center gap-1.5 transition-all duration-300 translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.04em',
              color: '#D4835A',
            }}
          >
            View case study
            <ArrowUpRight className="h-3 w-3" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function WorkSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-8% 0px' });

  return (
    <section id="work" className="border-b border-[rgba(28,26,23,0.1)] bg-[#F4EFE5] py-24">
      <div className="mx-auto max-w-[1600px] px-6">
        <motion.div
          className="mb-16 flex items-end justify-between"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8% 0px' }}
          transition={{ duration: 0.85, ease: ease.out }}
        >
          <div>
            <AnimatedHeadline
              as="h2"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(40px, 5vw, 64px)',
                lineHeight: '1.1',
                letterSpacing: '-0.02em',
                color: '#1C1A17',
              }}
              className="mb-4"
            >
              Featured work
            </AnimatedHeadline>
            <p className="max-w-2xl text-xl leading-relaxed" style={{ color: '#5C544A' }}>
              Production systems serving enterprises across industries
            </p>
          </div>

          <Link
            to="/projects"
            className="hidden items-center gap-2 rounded-lg border border-[rgba(28,26,23,0.2)] px-6 py-3 transition-all hover:border-[#B84A28] hover:text-[#B84A28] lg:flex"
            style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: '#1C1A17' }}
          >
            View all projects
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>

        {/* Grid: featured tile spans 2 cols, 3 smaller tiles beside/below */}
        <div
          ref={ref}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {featuredProjects.map((project, index) => (
            <ProjectTile
              key={project.id}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        <div className="mt-8 flex justify-center lg:hidden">
          <Link
            to="/projects"
            className="flex items-center gap-2 rounded-lg border border-[rgba(28,26,23,0.2)] px-6 py-3 transition-all hover:border-[#B84A28] hover:text-[#B84A28]"
            style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: '#1C1A17' }}
          >
            View all projects
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
