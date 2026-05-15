"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const root = document.documentElement;
    const getTargets = () =>
      Array.from(document.querySelectorAll<HTMLElement>(".reveal, .reveal-group"));

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Activate the JS-gated hidden state. Without this class the content is
    // fully visible by default, so a JS failure can never hide content.
    root.classList.add("has-reveal");

    const targets = getTargets();

    if (prefersReduced) {
      targets.forEach((el) => el.classList.add("is-in"));
      return () => root.classList.remove("has-reveal");
    }

    const reveal = (el: Element) => el.classList.add("is-in");

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal(entry.target);
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
    );

    targets.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92) {
        reveal(el); // already in view on load
      } else {
        io.observe(el);
      }
    });

    // Failsafe: if anything is still hidden after a few seconds (observer
    // never fired, edge-case layout, etc.), force everything visible.
    const failsafe = window.setTimeout(() => {
      getTargets().forEach(reveal);
    }, 3000);

    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
      root.classList.remove("has-reveal");
    };
  }, [pathname]);

  return null;
}
