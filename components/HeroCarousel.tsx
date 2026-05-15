"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const slides = [
  {
    img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1500&q=86",
    label: "Study, visas, holidays, flights",
    headline: "Travel plans handled with paperwork expertise.",
    sub: "From the first checklist to the final booking, Gladgate keeps your journey organised, realistic, and ready to move.",
    note: "Consultation slots available this week",
  },
  {
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1500&q=86",
    label: "Visa support",
    headline: "Clear routes through complex visa decisions.",
    sub: "Get a careful review of your circumstances, supporting documents, and submission timeline before you apply.",
    note: "Evidence review and refusal guidance",
  },
  {
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1500&q=86",
    label: "Tailored trips",
    headline: "Holidays and flights built around real budgets.",
    sub: "We compare routes, stays, cover, and travel details so your trip feels considered from door to door.",
    note: "Flights, hotels, insurance, tours",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const indexRef = useRef(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      const next = (indexRef.current + 1) % slides.length;
      indexRef.current = next;
      setCurrent(next);
    }, 5600);

    return () => window.clearInterval(id);
  }, []);

  function goTo(index: number) {
    indexRef.current = index;
    setCurrent(index);
  }

  const slide = slides[current];

  return (
    <section className="hero-shell">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{slide.label}</p>
          <h1 key={`title-${current}`}>{slide.headline}</h1>
          <p>{slide.sub}</p>
          <div className="hero-actions">
            <Link href="/quote" className="btn btn-primary">Get a free quote</Link>
            <Link href="/services" className="btn btn-outline">View services</Link>
          </div>
          <div className="hero-proof" aria-label="Gladgate proof points">
            <span><strong>10+</strong> years</span>
            <span><strong>98%</strong> visa success</span>
            <span><strong>80+</strong> countries</span>
          </div>
        </div>

        <div className="hero-media">
          {slides.map((item, index) => (
            <div key={item.img} className="hero-media__slide" style={{ opacity: index === current ? 1 : 0 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.img} alt="" />
            </div>
          ))}
          <div className="hero-media__card">
            <span>Next step</span>
            <p>{slide.note}</p>
          </div>
          <div className="hero-dots" aria-label="Hero slides">
            {slides.map((item, index) => (
              <button
                key={item.label}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Show ${item.label}`}
                aria-pressed={index === current}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
