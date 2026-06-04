import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AnimatedHeadline } from '../AnimatedHeadline';
import { ease } from '../../utils/animations';

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Most projects run 6–12 weeks from kickoff to production deployment. This includes data exploration, model development, integration, and handoff. We can scope a project more precisely after reviewing your data and requirements.",
  },
  {
    question: "What if we don't have labeled data?",
    answer: "We can work with unlabeled data using semi-supervised learning, or help you design an efficient labeling strategy. For some problems (anomaly detection, clustering), labels aren't required at all. We'll assess your data situation during discovery and recommend the best approach.",
  },
  {
    question: "Do you work with existing ML teams?",
    answer: "Yes. We often augment in-house teams on specific projects—bringing specialized domain expertise, extra capacity, or deployment know-how. We're comfortable working alongside your data scientists and engineers.",
  },
  {
    question: "What happens after you deploy?",
    answer: "We provide one month of post-launch support to handle retraining, edge cases, and performance tuning. We also deliver documentation, training for your team, and monitoring dashboards. The goal is for you to own and maintain the system independently.",
  },
  {
    question: "What tech stack do you use?",
    answer: "We prefer boring, proven tools: PyTorch or TensorFlow for modeling, FastAPI or Django for serving, PostgreSQL or Redis for data, and Docker for deployment. We match the stack to your existing infrastructure rather than forcing you to adopt new tools.",
  },
  {
    question: "How do you price projects?",
    answer: "Fixed-price contracts based on scope. After the discovery phase, we'll provide a quote covering development, deployment, and one month of support. No hourly billing, no scope creep, no surprises. Typical projects range from ₹15–40 lakh depending on complexity.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="border-b border-[rgba(28,26,23,0.1)] bg-[#F4EFE5] py-24">
      <div className="mx-auto max-w-[900px] px-6">
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
            Frequently asked questions
          </AnimatedHeadline>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-5% 0px' }}
                transition={{ duration: 0.6, delay: index * 0.06, ease: ease.out }}
                className="overflow-hidden rounded-xl border border-[rgba(28,26,23,0.1)] bg-white"
                style={{ borderColor: isOpen ? 'rgba(184,74,40,0.3)' : undefined, transition: 'border-color 0.3s ease' }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-[rgba(184,74,40,0.02)]"
                >
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', lineHeight: '1.3', color: '#1C1A17' }}>
                    {faq.question}
                  </span>
                  <div className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[rgba(184,74,40,0.1)]">
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: ease.swift }}
                    >
                      {isOpen
                        ? <Minus className="h-4 w-4 text-[#B84A28]" />
                        : <Plus  className="h-4 w-4 text-[#B84A28]" />
                      }
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: ease.swift }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="border-t border-[rgba(28,26,23,0.05)] px-6 pb-6 pt-4">
                        <p className="leading-relaxed" style={{ color: '#5C544A' }}>
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
