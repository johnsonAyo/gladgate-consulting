"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 2500, suffix: "+", label: "Happy Travellers" },
  { value: 98, suffix: "%", label: "Visa Success Rate" },
  { value: 80, suffix: "+", label: "Countries Covered" },
  { value: 10, suffix: " Yrs", label: "Experience" },
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
      const eased = easeOut(progress);
      setCount(Math.round(eased * target));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [active, target, duration]);

  return count;
}

function StatItem({
  value,
  suffix,
  label,
  active,
  isLast,
}: {
  value: number;
  suffix: string;
  label: string;
  active: boolean;
  isLast: boolean;
}) {
  const count = useCountUp(value, 1800, active);

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "0 24px",
      }}
    >
      {/* Divider on right (desktop only) */}
      {!isLast && (
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            right: 0,
            top: "10%",
            height: "80%",
            width: "1px",
            background: "rgba(255,255,255,0.15)",
            display: "none",
          }}
          className="stat-divider"
        />
      )}

      <p
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 800,
          fontSize: "clamp(40px, 6vw, 64px)",
          lineHeight: 1,
          color: "var(--white)",
          margin: 0,
        }}
      >
        {count}
        <span style={{ color: "var(--yellow)" }}>{suffix}</span>
      </p>

      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "14px",
          color: "rgba(255,255,255,0.7)",
          marginTop: "10px",
          marginBottom: 0,
        }}
      >
        {label}
      </p>
    </div>
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
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @media (min-width: 768px) {
          .stat-divider {
            display: block !important;
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        style={{
          width: "100%",
          paddingTop: "64px",
          paddingBottom: "64px",
          background: "var(--blue)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            paddingLeft: "24px",
            paddingRight: "24px",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "48px 0",
          }}
          className="stats-grid"
        >
          <style>{`
            @media (min-width: 768px) {
              .stats-grid {
                grid-template-columns: repeat(4, 1fr) !important;
                gap: 0 !important;
              }
            }
          `}</style>

          {stats.map((stat, i) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              active={active}
              isLast={i === stats.length - 1}
            />
          ))}
        </div>
      </section>
    </>
  );
}
