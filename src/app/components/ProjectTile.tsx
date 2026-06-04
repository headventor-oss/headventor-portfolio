import { Link } from 'react-router';
import { Play } from 'lucide-react';
import { motion } from 'motion/react';
import { projectImages } from '../data/projectImages';
import { ease } from '../utils/animations';

interface ProjectTileProps {
  id: string;
  name: string;
  descriptor: string;
  domain: string;
  duration: string;
  aspectRatio: '16/9' | '4/3' | '1/1' | '21/9';
  hideCaption?: boolean;
  delay?: number;
  isInView?: boolean;
}

export function ProjectTile({
  id,
  name,
  descriptor,
  domain,
  duration,
  aspectRatio,
  hideCaption = false,
  delay = 0,
  isInView = true,
}: ProjectTileProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.8, delay, ease: ease.out }}
    >
      <Link to={`/project/${id}`} className="group relative block">
        <div
          className="relative overflow-hidden rounded-lg border border-[rgba(28,26,23,0.08)] bg-[#F4EFE5] transition-all duration-500 hover:border-[rgba(28,26,23,0.15)]"
          style={{ aspectRatio }}
        >
          <img
            src={projectImages[id]}
            alt={name}
            className="absolute inset-0 h-full w-full object-cover opacity-70 transition-all duration-700 group-hover:scale-[1.025] group-hover:opacity-85"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(244,239,229,0.3)]" />

          <div
            className="absolute left-3 top-3 z-10 rounded bg-[#1C1A17] px-2 py-1"
            style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.05em', color: '#F4EFE5' }}
          >
            {id}
          </div>

          <div
            className="absolute right-3 top-3 z-10 rounded bg-[#1C1A17] px-2 py-1"
            style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.05em', color: '#F4EFE5' }}
          >
            {duration}
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(28,26,23,0.15)] bg-[rgba(244,239,229,0.85)] backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-[#B84A28] group-hover:bg-[rgba(184,74,40,0.9)]">
              <Play className="h-5 w-5 fill-[#1C1A17] text-[#1C1A17] transition-colors group-hover:fill-[#F4EFE5] group-hover:text-[#F4EFE5]" />
            </div>
          </div>

          <div
            className="absolute bottom-3 right-3 z-10 translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
            style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#B84A28' }}
          >
            View case →
          </div>
        </div>

        {!hideCaption && (
          <div className="mt-3 flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="mb-0.5" style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', lineHeight: '1.4', color: '#1C1A17' }}>
                {name}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#5C544A' }}>
                {descriptor}
              </p>
            </div>
            <div className="shrink-0 text-right" style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.02em', color: '#5C544A' }}>
              {domain}
            </div>
          </div>
        )}
      </Link>
    </motion.div>
  );
}
