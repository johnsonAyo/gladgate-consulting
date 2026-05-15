"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/packages", label: "Packages" },
  { href: "/visa-refusal", label: "Visa Refusal" },
  { href: "/contact", label: "Contact" },
];

function LogoMark() {
  return (
    <span className="nav-logo" aria-label="Gladgate">
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="17" cy="17" r="15" stroke="currentColor" strokeWidth="1.4" />
        <path d="M17 2C11.8 8.4 11.8 25.6 17 32" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <path d="M17 2C22.2 8.4 22.2 25.6 17 32" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <path d="M3 17H31" stroke="currentColor" strokeWidth="1.2" />
        <path d="M5 10.8C12.8 8.7 21.2 8.7 29 10.8" stroke="var(--coral)" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M5 23.2C12.8 25.3 21.2 25.3 29 23.2" stroke="var(--coral)" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
      <span>Gladgate</span>
    </span>
  );
}

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-wrap">
      <div className="nav-contact">
        <div>
          <a href="mailto:hello@gladgateconsulting.com">hello@gladgateconsulting.com</a>
          <a href="tel:+447700000000">+44 7700 000 000</a>
        </div>
        <span>Monday to Friday 9am to 6pm, Saturday 10am to 2pm</span>
      </div>

      <nav className="main-nav" aria-label="Main navigation">
        <Link href="/" className="nav-brand" onClick={() => setOpen(false)}>
          <LogoMark />
        </Link>

        <ul className="nav-links">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} data-active={pathname === href}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/quote" className="nav-quote">Free quote</Link>

        <button className="nav-toggle" type="button" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu" aria-expanded={open}>
          <span />
          <span />
          <span />
        </button>
      </nav>

      {open && (
        <div className="mobile-menu">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} data-active={pathname === href}>
              {label}
            </Link>
          ))}
          <Link href="/quote" onClick={() => setOpen(false)} className="mobile-menu__quote">Get a free quote</Link>
        </div>
      )}
    </header>
  );
}
