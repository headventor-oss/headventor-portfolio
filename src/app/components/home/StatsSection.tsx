import { useEffect, useRef, useState } from 'react';
import { useInView } from 'motion/react';
import { ScrollReveal, StaggerItem } from '../ScrollReveal';

function useCountUp(target: string, isInView: boolean) {
  const [display, setDisplay] = useState('0');
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!isInView) return;

    // Parse prefix/suffix and numeric value
    const match = target.match(/^([^0-9]*)([0-9.,]+)([^0-9]*)$/);
    if (!match) { setDisplay(target); return; }

    const [, prefix, numStr, suffix] = match;
    const end = parseFloat(numStr.replace(',', ''));
    const duration = 1400;
    const start = performance.now();

    const step = (now: number) => {
      const elapsed = Math.min(now - start, duration);
      // ease-out-expo
      const t = elapsed / duration;
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      const current = eased * end;

      // Preserve decimal places from original
      const decimals = (numStr.includes('.') ? numStr.split('.')[1].length : 0);
      const formatted = decimals > 0
        ? current.toFixed(decimals)
        : Math.round(current).toString();

      setDisplay(`${prefix}${formatted}${suffix}`);

      if (elapsed < duration) rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isInView, target]);

  return display;
}

function StatItem({ value, label }: { value: string; label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-5% 0px' });
  const display = useCountUp(value, isInView);

  return (
    <div ref={ref} className="text-center">
      <div
        className="mb-2"
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(40px, 5vw, 64px)',
          lineHeight: '1',
          color: '#1C1A17',
        }}
      >
        {display}
      </div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', letterSpacing: '0.02em', color: '#5C544A' }}>
        {label}
      </div>
    </div>
  );
}

export function StatsSection() {
  const stats = [
    { value: '15+', label: 'Accelerators' },
    { value: 'High', label: 'Average model accuracy' },
    { value: '~2wks', label: 'POC development' },
  ];

  return (
    <section className="border-b border-[rgba(28,26,23,0.1)] bg-[#F4EFE5] py-16">
      <div className="mx-auto max-w-[1600px] px-6">
        <ScrollReveal stagger staggerDelay={0.1} className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <StaggerItem key={index}>
              <StatItem value={stat.value} label={stat.label} />
            </StaggerItem>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
