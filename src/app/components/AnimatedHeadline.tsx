import React, { useRef, useMemo } from 'react';
import { motion, useInView } from 'motion/react';
import { ease } from '../utils/animations';

type Token =
  | { type: 'word';    content: React.ReactNode; index: number }
  | { type: 'element'; content: React.ReactElement; index: number }
  | { type: 'space' };

function buildTokens(children: React.ReactNode): Token[] {
  const tokens: Token[] = [];
  let wordIndex = 0;

  React.Children.forEach(children, child => {
    if (typeof child === 'string') {
      const parts = child.split(/(\s+)/);
      parts.forEach(part => {
        if (/^\s+$/.test(part)) {
          tokens.push({ type: 'space' });
        } else if (part.trim()) {
          tokens.push({ type: 'word', content: part, index: wordIndex++ });
        }
      });
    } else if (React.isValidElement(child)) {
      tokens.push({ type: 'element', content: child, index: wordIndex++ });
    }
  });

  return tokens;
}

interface AnimatedHeadlineProps {
  children: React.ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  stagger?: number;
  /** inView threshold — 0 triggers immediately as element enters viewport */
  threshold?: number;
}

export function AnimatedHeadline({
  children,
  as: Tag = 'h1',
  className,
  style,
  delay = 0,
  stagger = 0.055,
  threshold = 0.1,
}: AnimatedHeadlineProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, {
    once: true,
    margin: '-5% 0px',
  });

  const tokens = useMemo(() => buildTokens(children), [children]);

  return (
    // @ts-expect-error — dynamic tag
    <Tag ref={ref} className={className} style={style}>
      {tokens.map((token, i) => {
        if (token.type === 'space') {
          return <span key={`sp-${i}`} style={{ display: 'inline-block', width: '0.3em' }} />;
        }

        const wordDelay = delay + (token.type === 'element' || token.type === 'word' ? token.index * stagger : 0);
        const inner = token.type === 'element'
          ? React.cloneElement(token.content)
          : token.content;

        return (
          <span
            key={`w-${i}`}
            style={{
              display: 'inline-block',
              overflow: 'hidden',
              verticalAlign: 'bottom',
              paddingBottom: '0.06em',
              marginBottom: '-0.06em',
            }}
          >
            <motion.span
              style={{ display: 'inline-block', willChange: 'transform' }}
              initial={{ y: '110%', opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{
                duration: 1.05,
                delay: wordDelay,
                ease: ease.out,
              }}
            >
              {inner}
            </motion.span>
          </span>
        );
      })}
    </Tag>
  );
}
