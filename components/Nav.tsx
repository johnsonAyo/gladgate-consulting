"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Our Services" },
  { href: "/packages", label: "Travel Packages" },
  { href: "/visa-refusal", label: "Visa Refusal" },
  { href: "/contact", label: "Contact Us" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top contact bar */}
      <div className="hidden md:block" style={{ backgroundColor: "var(--blue)", color: "rgba(255,255,255,0.85)" }}>
        <div className="max-w-6xl mx-auto px-5 md:px-10 py-2 flex items-center justify-between text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
          <div className="flex items-center gap-6">
            <a href="mailto:hello@gladgateconsulting.com" className="hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none" }}>
              hello@gladgateconsulting.com
            </a>
            <a href="tel:+447700000000" className="hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none" }}>
              +44 7700 000 000
            </a>
          </div>
          <span style={{ color: "rgba(255,255,255,0.6)" }}>Mon–Fri 9am–6pm · Sat 10am–2pm</span>
        </div>
      </div>

      {/* Main nav */}
      <header className="sticky top-0 z-50 bg-white" style={{ borderBottom: "1px solid var(--border)", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
        <nav className="max-w-6xl mx-auto px-5 md:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="15" cy="15" r="13.5" stroke="#0057B8" strokeWidth="1.5"/>
                <path d="M15 1.5 C9.5 7 9.5 23 15 28.5" stroke="#0057B8" strokeWidth="1.2" fill="none"/>
                <path d="M15 1.5 C20.5 7 20.5 23 15 28.5" stroke="#0057B8" strokeWidth="1.2" fill="none"/>
                <line x1="1.5" y1="15" x2="28.5" y2="15" stroke="#0057B8" strokeWidth="1.2"/>
                <path d="M2.5 9.5 Q15 7.5 27.5 9.5" stroke="#FF5C35" strokeWidth="1.3" fill="none"/>
                <path d="M2.5 20.5 Q15 22.5 27.5 20.5" stroke="#FF5C35" strokeWidth="1.3" fill="none"/>
              </svg>
              <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "19px", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--blue)" }}>
                Glad<span style={{ color: "var(--coral)" }}>gate</span>
              </span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-6">
            {links.map(({ href, label }) => (
              <li key={href}>
                {label === "Contact Us" ? (
                  <Link href={href}
                    className="px-5 py-2.5 text-sm font-semibold transition-all hover:opacity-85 rounded-full"
                    style={{ backgroundColor: "var(--coral)", color: "#fff", fontFamily: "'Poppins', sans-serif", textDecoration: "none" }}>
                    {label}
                  </Link>
                ) : (
                  <Link href={href}
                    className="text-sm transition-opacity hover:opacity-60"
                    style={{ color: pathname === href ? "var(--blue)" : "var(--muted)", fontWeight: pathname === href ? 600 : 400, textDecoration: "none", fontFamily: "'Inter', sans-serif" }}>
                    {label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            <div className="flex flex-col gap-1.5">
              <span className="block w-6 h-0.5" style={{ backgroundColor: "var(--text)" }} />
              <span className="block w-6 h-0.5" style={{ backgroundColor: "var(--text)" }} />
              <span className="block w-4 h-0.5" style={{ backgroundColor: "var(--text)" }} />
            </div>
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden px-5 pb-5 pt-2 flex flex-col gap-4 bg-white" style={{ borderTop: "1px solid var(--border)" }}>
            {links.map(({ href, label }) => (
              <Link key={href} href={href} onClick={() => setOpen(false)}
                className="text-sm font-medium py-1"
                style={{ color: pathname === href ? "var(--blue)" : "var(--muted)", textDecoration: "none", fontFamily: "'Inter', sans-serif" }}>
                {label}
              </Link>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
