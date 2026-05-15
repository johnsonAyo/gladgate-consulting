import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import PaletteSwitcher from "@/components/PaletteSwitcher";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gladgate | Travel Experts",
  description: "Study abroad, visa applications, holidays, tours, and flight bookings, all handled by Gladgate.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col overflow-x-hidden" style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
        <Nav />
        <ScrollReveal />
        <main className="flex-1">{children}</main>
        <PaletteSwitcher />

        <footer className="overflow-hidden" style={{ backgroundColor: "var(--blue)", color: "#fff" }}>
          <div className="max-w-6xl mx-auto px-5 md:px-10 py-20 grid grid-cols-1 md:grid-cols-4 gap-14">

            {/* Col 1, Brand + contact */}
            <div className="md:col-span-1 flex flex-col gap-4">
              <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                <svg width="26" height="26" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="15" cy="15" r="13.5" stroke="#fff" strokeWidth="1.5"/>
                  <path d="M15 1.5 C9.5 7 9.5 23 15 28.5" stroke="#fff" strokeWidth="1.2" fill="none"/>
                  <path d="M15 1.5 C20.5 7 20.5 23 15 28.5" stroke="#fff" strokeWidth="1.2" fill="none"/>
                  <line x1="1.5" y1="15" x2="28.5" y2="15" stroke="#fff" strokeWidth="1.2"/>
                  <path d="M2.5 9.5 Q15 7.5 27.5 9.5" stroke="#FFB800" strokeWidth="1.3" fill="none"/>
                  <path d="M2.5 20.5 Q15 22.5 27.5 20.5" stroke="#FFB800" strokeWidth="1.3" fill="none"/>
                </svg>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "20px", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  Glad<span style={{ color: "var(--yellow)" }}>gate</span>
                </p>
              </span>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                Your trusted travel experts. Study abroad, visas, dream holidays, and flights. We make every journey seamless and exciting.
              </p>
              <div className="flex flex-col gap-2 mt-2">
                <a href="tel:+447700000000" className="text-sm hover:opacity-70 transition-opacity" style={{ color: "rgba(255,255,255,0.65)", textDecoration: "none" }}>+44 7700 000 000</a>
                <a href="mailto:hello@gladgateconsulting.com" className="text-sm hover:opacity-70 transition-opacity" style={{ color: "rgba(255,255,255,0.65)", textDecoration: "none" }}>hello@gladgateconsulting.com</a>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>Mon–Fri 9am–6pm · Sat 10am–2pm</p>
              </div>
            </div>

            {/* Col 2, Quick Links */}
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "var(--yellow)", fontFamily: "'Space Grotesk', sans-serif" }}>Quick Links</p>
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact Us" },
                { href: "/packages", label: "Travel Packages" },
                { href: "/visa-refusal", label: "Visa Refusal" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="text-sm hover:opacity-70 transition-opacity" style={{ color: "rgba(255,255,255,0.65)", textDecoration: "none" }}>{l.label}</Link>
              ))}
            </div>

            {/* Col 3, Our Services */}
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "var(--yellow)", fontFamily: "'Space Grotesk', sans-serif" }}>Our Services</p>
              {[
                { href: "/services#visa", label: "Visa Processing" },
                { href: "/services#study-abroad", label: "Study Abroad" },
                { href: "/services#flights", label: "Flight Ticketing" },
                { href: "/services#holidays", label: "Holidays & Tours" },
                { href: "/services#insurance", label: "Travel Insurance" },
                { href: "/services#hotels", label: "Hotel Reservations" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="text-sm hover:opacity-70 transition-opacity" style={{ color: "rgba(255,255,255,0.65)", textDecoration: "none" }}>{l.label}</Link>
              ))}
            </div>

            {/* Col 4, Need Help */}
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "var(--yellow)", fontFamily: "'Space Grotesk', sans-serif" }}>Need Help?</p>
              {[
                { href: "/services#faq", label: "FAQs" },
                { href: "/contact", label: "Contact Us" },
                { href: "/visa-refusal", label: "Visa Refusal" },
                { href: "/quote", label: "Get a Quote" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="text-sm hover:opacity-70 transition-opacity" style={{ color: "rgba(255,255,255,0.65)", textDecoration: "none" }}>{l.label}</Link>
              ))}
              <div className="mt-3 flex flex-wrap gap-2">
                {["IATA Accredited", "ABTA Member", "ATOL Protected"].map((a) => (
                  <span key={a} className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.8)" }}>{a}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-5 md:px-10 py-6 text-center text-xs flex items-center justify-between flex-wrap gap-3"
            style={{ borderTop: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.4)" }}>
            <span>© {new Date().getFullYear()} Gladgate. All rights reserved.</span>
            <span>IATA Accredited · ABTA Member · ATOL Protected</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
