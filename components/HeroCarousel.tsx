"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const slides = [
  {
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1800&q=85",
    tagline: "10 Years of Experience",
    headline: "Unlock Global Adventures Through Our Visa & Passport Services.",
    sub: "",
  },
  {
    img: "https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=1800&q=85",
    tagline: "",
    headline: "Visa Refusal Resolution.",
    sub: "We offer expert assistance to contest your UK visa refusal.",
  },
  {
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=85",
    tagline: "",
    headline: "Seamless Visa Services.",
    sub: "Simplifying global travel with hassle-free visa processing.",
  },
  {
    img: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1800&q=85",
    tagline: "",
    headline: "Your Dream Trip Starts Here.",
    sub: "Study abroad, holidays, and flights — handled from start to finish.",
  },
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

  const slide = slides[current];

  return (
    <section className="relative overflow-hidden" style={{ minHeight: "92vh", display: "flex", alignItems: "center" }}>
      {/* Slides */}
      {slides.map((s, i) => (
        <div key={i} className="absolute inset-0" style={{ opacity: i === current ? 1 : 0, transition: "opacity 1s ease-in-out", zIndex: i === current ? 1 : 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={s.img} alt="" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.15) 100%)", zIndex: 2 }} />

      {/* Content */}
      <div className="relative w-full max-w-6xl mx-auto px-5 md:px-10" style={{ zIndex: 3 }}>
        <div className="max-w-2xl">
          {slide.tagline && (
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-5"
              style={{ backgroundColor: "var(--yellow)", color: "#000", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.05em" }}>
              {slide.tagline}
            </span>
          )}
          <h1 key={current} style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(36px, 6vw, 70px)", lineHeight: 1.12, color: "#fff", animation: "fadeUp 0.6s ease" }}>
            {slide.headline}
          </h1>
          {slide.sub && (
            <p className="mt-5 text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.82)", maxWidth: "520px", fontFamily: "'Inter', sans-serif" }}>
              {slide.sub}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-3 mt-10">
            <Link href="/quote"
              className="inline-block px-9 py-4 font-bold text-sm rounded-full text-center transition-all hover:opacity-90"
              style={{ backgroundColor: "var(--coral)", color: "#fff", fontFamily: "'Poppins', sans-serif" }}>
              Get a Free Quote
            </Link>
            <Link href="/services"
              className="inline-block px-9 py-4 font-semibold text-sm rounded-full text-center transition-all hover:opacity-80"
              style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "#fff", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.35)", fontFamily: "'Poppins', sans-serif" }}>
              Our Services
            </Link>
          </div>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute flex items-center gap-2" style={{ bottom: "32px", left: "50%", transform: "translateX(-50%)", zIndex: 4 }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`}
            style={{ width: i === current ? "28px" : "8px", height: "8px", borderRadius: "999px", backgroundColor: i === current ? "#fff" : "rgba(255,255,255,0.4)", border: "none", cursor: "pointer", padding: 0, transition: "all 0.4s ease" }} />
        ))}
      </div>

      <style>{`@keyframes fadeUp { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }`}</style>
    </section>
  );
}
