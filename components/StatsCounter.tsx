"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 2500, suffix: "+", label: "Travellers supported" },
  { value: 98, suffix: "%", label: "Visa success rate" },
  { value: 80, suffix: "+", label: "Countries covered" },
  { value: 10, suffix: "+", label: "Years in travel" },
];

function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

function useCountUp(target: number, duration: number, active: boolean): number {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;

    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.round(easeOut(progress) * target));

      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [active, duration, target]);

  return count;
}

function StatItem({ value, suffix, label, active }: {
  value: number;
  suffix: string;
  label: string;
  active: boolean;
}) {
  const count = useCountUp(value, 1700, active);

  return (
    <article className="stat-item">
      <p>
        {count}
        <span>{suffix}</span>
      </p>
      <h3>{label}</h3>
    </article>
  );
}

export default function StatsCounter() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.24 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="stats-section">
      <div className="stats-section__intro">
        <p className="eyebrow">Proof in practice</p>
        <h2>Trusted travel support, measured simply.</h2>
      </div>
      <div className="stats-grid">
        {stats.map((stat) => (
          <StatItem key={stat.label} {...stat} active={active} />
        ))}
      </div>

      <style jsx global>{`
        .stats-section {
          padding: clamp(54px, 7vw, 88px) 20px;
          background: var(--blue);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          color: var(--white);
        }
        .stats-section__intro {
          max-width: 1180px;
          margin: 0 auto 28px;
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 28px;
        }
        .stats-section__intro .eyebrow {
          color: var(--yellow-lt);
          flex: 0 0 auto;
        }
        .stats-section__intro h2 {
          max-width: 560px;
          color: var(--white);
          font-size: clamp(28px, 4vw, 44px);
          text-align: right;
        }
        .stats-grid {
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 0;
          border-top: 1px solid rgba(255,250,242,0.18);
          border-bottom: 1px solid rgba(255,250,242,0.18);
        }
        .stat-item {
          min-height: 150px;
          padding: 26px 28px 24px;
          background: transparent;
          border-right: 1px solid rgba(255,250,242,0.18);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .stat-item:last-child {
          border-right: 0;
        }
        .stat-item p {
          color: var(--white);
          font-family: 'Fraunces', serif;
          font-size: clamp(42px, 5vw, 66px);
          font-weight: 750;
          line-height: 0.95;
        }
        .stat-item p span {
          color: var(--yellow-lt);
          font-size: 0.48em;
          margin-left: 2px;
        }
        .stat-item h3 {
          margin-top: 13px;
          color: rgba(255,250,242,0.76);
          font-family: 'Manrope', sans-serif;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.02em;
        }
        @media (max-width: 1024px) {
          .stats-section__intro {
            align-items: start;
            flex-direction: column;
          }
          .stats-section__intro h2 { text-align: left; }
          .stats-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .stat-item:nth-child(2) {
            border-right: 0;
          }
          .stat-item:nth-child(-n + 2) {
            border-bottom: 1px solid rgba(255,250,242,0.18);
          }
        }
        @media (max-width: 640px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
          .stat-item {
            min-height: 126px;
            border-right: 0;
            border-bottom: 1px solid rgba(255,250,242,0.18);
          }
          .stat-item:last-child {
            border-bottom: 0;
          }
        }
      `}</style>
    </section>
  );
}
