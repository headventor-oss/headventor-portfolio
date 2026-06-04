import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { AnimatedHeadline } from '../AnimatedHeadline';
import { ease, fadeUp } from '../../utils/animations';
import { ScrollReveal } from '../ScrollReveal';

const processes = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We start by understanding your problem, data, and constraints. No sales pitch—just honest conversation about whether ML can help.',
    timeline: 'Week 1',
  },
  {
    number: '02',
    title: 'Prototype',
    description: 'We build a working proof-of-concept with your actual data. You see results before committing to full development.',
    timeline: 'Weeks 2–3',
  },
  {
    number: '03',
    title: 'Production',
    description: 'We deploy the system into your infrastructure with monitoring, documentation, and handoff training for your team.',
    timeline: 'Weeks 4–12',
  },
  {
    number: '04',
    title: 'Support',
    description: 'We stick around for the first month post-launch to handle edge cases, retrain models, and ensure smooth operation.',
    timeline: 'Month 4+',
  },
];

export function ProcessSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 },
    },
  });

  return (
    <section className="border-b border-[rgba(28,26,23,0.1)] bg-[#F4EFE5] py-24">
      <div className="mx-auto max-w-[1600px] px-6">
        <motion.div
          className="mb-12 flex items-end justify-between"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8% 0px' }}
          transition={{ duration: 0.85, ease: ease.out }}
        >
          <div>
            <AnimatedHeadline
              as="h2"
              style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: '1.1', letterSpacing: '-0.02em', color: '#1C1A17' }}
              className="mb-4"
            >
              How we work
            </AnimatedHeadline>
            <p className="max-w-2xl text-xl leading-relaxed" style={{ color: '#5C544A' }}>
              Fixed-scope projects, predictable timelines, production-ready code
            </p>
          </div>

          <div className="hidden gap-3 lg:flex">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(28,26,23,0.2)] transition-all hover:border-[#B84A28] hover:text-[#B84A28]"
              style={{ color: '#1C1A17' }}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(28,26,23,0.2)] transition-all hover:border-[#B84A28] hover:text-[#B84A28]"
              style={{ color: '#1C1A17' }}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>

        <div className="overflow-hidden" ref={emblaRef}>
          <ScrollReveal
            stagger
            staggerDelay={0.1}
            className="flex gap-6"
          >
              {processes.map((process, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="min-w-0 flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)]"
                >
                  <div className="h-full rounded-xl border border-[rgba(28,26,23,0.1)] bg-white p-8">
                    <div className="mb-6 flex items-center justify-between">
                      <div
                        className="flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(184,74,40,0.1)]"
                        style={{ fontFamily: 'var(--font-mono)', fontSize: '20px', color: '#B84A28' }}
                      >
                        {process.number}
                      </div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.05em', color: '#5C544A', textTransform: 'uppercase' }}>
                        {process.timeline}
                      </div>
                    </div>
                    <h3 className="mb-3" style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', lineHeight: '1.2', color: '#1C1A17' }}>
                      {process.title}
                    </h3>
                    <p className="leading-relaxed" style={{ color: '#5C544A' }}>
                      {process.description}
                    </p>
                  </div>
                </motion.div>
              ))}
          </ScrollReveal>
        </div>

        <div className="mt-8 flex justify-center gap-3 lg:hidden">
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(28,26,23,0.2)] transition-all hover:border-[#B84A28] hover:text-[#B84A28]"
            style={{ color: '#1C1A17' }}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(28,26,23,0.2)] transition-all hover:border-[#B84A28] hover:text-[#B84A28]"
            style={{ color: '#1C1A17' }}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
