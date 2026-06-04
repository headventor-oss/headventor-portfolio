import { Brain, TrendingUp, Shield, Zap, Eye, Network, BarChart3, Cpu } from 'lucide-react';
import { motion } from 'motion/react';
import { AnimatedHeadline } from '../AnimatedHeadline';
import { ScrollReveal } from '../ScrollReveal';
import { ease, scaleIn } from '../../utils/animations';

const capabilities = [
  { icon: Brain,     title: 'Computer vision',       description: 'Defect detection, quality control, and visual inspection systems' },
  { icon: TrendingUp,title: 'Forecasting',            description: 'Demand prediction, inventory optimization, and time-series modeling' },
  { icon: Shield,    title: 'Fraud detection',        description: 'Transaction monitoring, anomaly detection, and risk scoring' },
  { icon: Zap,       title: 'Predictive maintenance', description: 'IoT sensor analysis, equipment monitoring, and failure prediction' },
  { icon: Eye,       title: 'NLP & document AI',      description: 'Contract analysis, semantic search, and text extraction' },
  { icon: Network,   title: 'Recommendation engines', description: 'Personalization, content discovery, and behavioral modeling' },
  { icon: BarChart3, title: 'Churn prediction',       description: 'Customer retention, lifetime value, and behavioral analysis' },
  { icon: Cpu,       title: 'Real-time inference',    description: 'Low-latency APIs, edge deployment, and streaming pipelines' },
];

export function CapabilitiesSection() {
  return (
    <section className="border-b border-[rgba(28,26,23,0.1)] bg-[#F4EFE5] py-24">
      <div className="mx-auto max-w-[1600px] px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8% 0px' }}
          transition={{ duration: 0.85, ease: ease.out }}
        >
          <AnimatedHeadline
            as="h2"
            style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: '1.1', letterSpacing: '-0.02em', color: '#1C1A17' }}
            className="mb-4"
          >
            What we build
          </AnimatedHeadline>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed" style={{ color: '#5C544A' }}>
            Production ML systems across industries—from manufacturing floors to financial services
          </p>
        </motion.div>

        <ScrollReveal
          stagger
          staggerDelay={0.07}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <motion.div
                key={index}
                variants={scaleIn}
                className="group rounded-xl border border-[rgba(28,26,23,0.1)] bg-[rgba(255,255,255,0.5)] p-8 transition-colors hover:border-[#B84A28] hover:bg-white"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[rgba(184,74,40,0.1)] transition-colors group-hover:bg-[rgba(184,74,40,0.15)]">
                  <Icon className="h-6 w-6 text-[#B84A28]" />
                </div>
                <h3 className="mb-2" style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', lineHeight: '1.3', color: '#1C1A17' }}>
                  {capability.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#5C544A' }}>
                  {capability.description}
                </p>
              </motion.div>
            );
          })}
        </ScrollReveal>
      </div>
    </section>
  );
}
