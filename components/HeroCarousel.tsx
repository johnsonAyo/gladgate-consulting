"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const slides = [
  { img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1800&q=85" },
  { img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=85" },
  { img: "https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=1800&q=85" },
  { img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1800&q=85" },
  { img: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1800&q=85" },
];

const stats = [
  { n: "2,500+", label: "Happy Travellers" },
  { n: "98%",    label: "Visa Success Rate" },
  { n: "80+",    label: "Countries" },
  { n: "10 Yrs", label: "Experience" },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const indexRef = useRef(0);

  useEffect(() => {
    const id = setInterval(() => {
      const next = (indexRef.current + 1) % slides.length;
      indexRef.current = next;
      setCurrent(next);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  function goTo(i: number) {
    indexRef.current = i;
    setCurrent(i);
  }

  return (
    <section className="relative overflow-hidden" style={{ minHeight: "90vh", display: "flex", alignItems: "center" }}>
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0"
          style={{
            opacity: i === current ? 1 : 0,
            transition: "opacity 1s ease-in-out",
            zIndex: i === current ? 1 : 0,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={slide.img} alt="" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,87,184,0.82) 0%, rgba(0,87,184,0.3) 55%, rgba(0,0,0,0.2) 100%)", zIndex: 2 }} />

      {/* Content */}
      <div className="relative w-full max-w-6xl mx-auto px-5 md:px-10 py-24 md:py-0" style={{ zIndex: 3 }}>
        <div className="max-w-2xl">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold mb-6"
            style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "#fff", backdropFilter: "blur(8px)", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.05em" }}>
            Your Trusted Travel Experts Since 2015
          </span>

          <h1 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(40px, 7vw, 78px)", lineHeight: 1.1, color: "#fff" }}>
            Your Dream Trip<br />
            <span style={{ color: "var(--yellow)" }}>Starts Here.</span>
          </h1>
          <p className="mt-5 text-base md:text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.8)", maxWidth: "480px", fontFamily: "'Inter', sans-serif" }}>
            Study abroad, visas, holidays, tours, and flights — we handle every detail so you can focus on the adventure.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-10">
            <Link href="/quote"
              className="inline-block px-8 py-4 font-bold text-sm rounded-full text-center transition-all hover:opacity-90"
              style={{ backgroundColor: "var(--coral)", color: "#fff", fontFamily: "'Poppins', sans-serif" }}>
              Get a Free Quote
            </Link>
            <Link href="/services"
              className="inline-block px-8 py-4 font-semibold text-sm rounded-full text-center transition-all hover:opacity-80"
              style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "#fff", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.3)", fontFamily: "'Poppins', sans-serif" }}>
              Explore Services
            </Link>
          </div>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute flex items-center gap-2" style={{ bottom: "88px", left: "50%", transform: "translateX(-50%)", zIndex: 4 }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`}
            style={{
              width: i === current ? "28px" : "8px",
              height: "8px",
              borderRadius: "999px",
              backgroundColor: i === current ? "#fff" : "rgba(255,255,255,0.4)",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "all 0.4s ease",
            }}
          />
        ))}
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-6 px-8 py-4 rounded-2xl"
        style={{ zIndex: 4, backgroundColor: "rgba(255,255,255,0.12)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.2)" }}>
        {stats.map((s, i) => (
          <div key={s.label} className="flex items-center gap-2"
            style={{ paddingRight: i < stats.length - 1 ? "24px" : 0, borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.2)" : "none" }}>
            <div>
              <p className="text-sm font-bold text-white leading-none" style={{ fontFamily: "'Poppins', sans-serif" }}>{s.n}</p>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Inter', sans-serif" }}>{s.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
