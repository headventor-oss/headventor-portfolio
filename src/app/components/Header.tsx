import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { motion } from 'motion/react';
import { ease } from '../utils/animations';

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onEnter = () => { el.style.animation = 'navLinkIn 0.5s cubic-bezier(0.645,0.045,0.355,1) forwards'; };
    const onLeave = () => { el.style.animation = 'navLinkOut 0.5s cubic-bezier(0.645,0.045,0.355,1) forwards'; };
    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <Link
      ref={ref}
      to={to}
      className="nav-link-animated px-2 py-1 transition-colors hover:text-[#B84A28]"
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 'clamp(12px, 1.5vw, 15px)',
        letterSpacing: '0.01em',
        paddingBottom: '4px',
      }}
    >
      {children}
    </Link>
  );
}

export function Header() {
  const location = useLocation();
  const isDetailPage = location.pathname.startsWith('/project/');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      className="sticky top-0 z-50 px-4 py-3"
      style={{
        backgroundColor: 'rgba(244,239,229,0.88)',
        backdropFilter: 'blur(12px) saturate(1.2)',
        WebkitBackdropFilter: 'blur(12px) saturate(1.2)',
        borderBottom: `1px solid ${scrolled ? 'rgba(28,26,23,0.12)' : 'transparent'}`,
        transition: 'border-color 0.5s ease',
      }}
      initial={{ y: -56, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.85, ease: ease.out }}
    >
      {/* Mobile: logo top, nav below. Desktop: single row */}
      <div className="mx-auto max-w-[1600px]">
        {/* Desktop row */}
        <div className="hidden sm:flex items-center justify-between relative">
          <Link to="/" className="flex items-center shrink-0">
            <img
              src="/images/headventor-logo.png"
              alt="Headventor"
              style={{
                height: 'clamp(28px, 3.5vw, 48px)',
                width: 'auto',
                mixBlendMode: 'multiply',
                transition: 'opacity 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            />
          </Link>

          <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex items-center gap-1">
              <NavLink to="/">Home</NavLink>
              <span style={{ color: '#5C544A' }}>·</span>
              <NavLink to="/projects">Work</NavLink>
              <span style={{ color: '#5C544A' }}>·</span>
              <NavLink to="/studio">Studio</NavLink>
              <span style={{ color: '#5C544A' }}>·</span>
              <NavLink to="/contact">Contact</NavLink>
            </div>
          </nav>

          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            {isDetailPage && (
              <Link to="/" className="flex items-center gap-2 transition-colors hover:text-[#B84A28]">
                ← Back
              </Link>
            )}
          </div>
        </div>

        {/* Mobile: logo + nav stacked */}
        <div className="flex sm:hidden flex-col items-center gap-2">
          <Link to="/" className="flex items-center">
            <img
              src="/images/headventor-logo.png"
              alt="Headventor"
              style={{ height: '32px', width: 'auto', mixBlendMode: 'multiply' }}
            />
          </Link>
          <nav>
            <div className="flex items-center gap-1 flex-wrap justify-center">
              <NavLink to="/">Home</NavLink>
              <span style={{ color: '#5C544A' }}>·</span>
              <NavLink to="/projects">Work</NavLink>
              <span style={{ color: '#5C544A' }}>·</span>
              <NavLink to="/studio">Studio</NavLink>
              <span style={{ color: '#5C544A' }}>·</span>
              <NavLink to="/contact">Contact</NavLink>
            </div>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
