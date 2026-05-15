"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/quote", label: "Get a Quote" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white" style={{ borderBottom: "1px solid var(--border)", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
      <nav className="max-w-6xl mx-auto px-5 md:px-10 h-16 flex items-center justify-between">
        <Link href="/" style={{ textDecoration: "none" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
            {/* Globe mark */}
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="15" cy="15" r="13.5" stroke="#0057B8" strokeWidth="1.5"/>
              <path d="M15 1.5 C9.5 7 9.5 23 15 28.5" stroke="#0057B8" strokeWidth="1.2" fill="none"/>
              <path d="M15 1.5 C20.5 7 20.5 23 15 28.5" stroke="#0057B8" strokeWidth="1.2" fill="none"/>
              <line x1="1.5" y1="15" x2="28.5" y2="15" stroke="#0057B8" strokeWidth="1.2"/>
              <path d="M2.5 9.5 Q15 7.5 27.5 9.5" stroke="#FF5C35" strokeWidth="1.3" fill="none"/>
              <path d="M2.5 20.5 Q15 22.5 27.5 20.5" stroke="#FF5C35" strokeWidth="1.3" fill="none"/>
            </svg>
            {/* Wordmark */}
            <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "19px", letterSpacing: "0.06em", textTransform: "uppercase", color: "#0057B8" }}>
              Glad<span style={{ color: "#FF5C35" }}>gate</span>
            </span>
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              {label === "Get a Quote" ? (
                <Link href={href}
                  className="px-5 py-2.5 text-sm font-600 transition-all hover:opacity-85 rounded-full"
                  style={{ backgroundColor: "var(--coral)", color: "#fff", fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}>
                  {label}
                </Link>
              ) : (
                <Link href={href}
                  className="text-sm font-500 transition-opacity hover:opacity-60"
                  style={{ color: pathname === href ? "var(--blue)" : "var(--muted)", fontWeight: pathname === href ? 600 : 400, textDecoration: "none" }}>
                  {label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          <div className="flex flex-col gap-1.5">
            <span className="block w-6 h-0.5" style={{ backgroundColor: "var(--text)" }} />
            <span className="block w-6 h-0.5" style={{ backgroundColor: "var(--text)" }} />
            <span className="block w-4 h-0.5" style={{ backgroundColor: "var(--text)" }} />
          </div>
        </button>
      </nav>

      {open && (
        <div className="md:hidden px-5 pb-5 pt-1 flex flex-col gap-4 bg-white">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}
              className="text-sm font-medium"
              style={{ color: pathname === href ? "var(--blue)" : "var(--muted)", textDecoration: "none" }}>
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
