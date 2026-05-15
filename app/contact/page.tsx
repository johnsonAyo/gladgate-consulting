import Link from "next/link";

const EmailIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0057B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.554 4.122 1.523 5.854L.057 23.882a.5.5 0 0 0 .614.635l6.218-1.635A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.951 9.951 0 0 1-5.13-1.426l-.361-.214-3.754.987.998-3.656-.235-.376A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="ig" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#f09433"/>
        <stop offset="25%" stopColor="#e6683c"/>
        <stop offset="50%" stopColor="#dc2743"/>
        <stop offset="75%" stopColor="#cc2366"/>
        <stop offset="100%" stopColor="#bc1888"/>
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#ig)"/>
    <circle cx="12" cy="12" r="4.5" stroke="#fff" strokeWidth="1.8" fill="none"/>
    <circle cx="17.5" cy="6.5" r="1.2" fill="#fff"/>
  </svg>
);

const channels = [
  {
    Icon: EmailIcon,
    label: "Email Us",
    value: "hello@gladgateconsulting.com",
    href: "mailto:hello@gladgateconsulting.com",
    note: "We reply within 24 hours",
    color: "var(--blue)",
    bg: "var(--sky)",
  },
  {
    Icon: WhatsAppIcon,
    label: "WhatsApp",
    value: "+44 7700 000 000",
    href: "https://wa.me/447700000000",
    note: "Mon–Fri 9am–6pm · Sat 10am–2pm",
    color: "#25D366",
    bg: "#EDFBF2",
  },
  {
    Icon: InstagramIcon,
    label: "Instagram",
    value: "@gladgateconsulting",
    href: "https://instagram.com/gladgateconsulting",
    note: "DMs welcome — we respond fast",
    color: "#dc2743",
    bg: "#FFF0F3",
  },
];

const faqs = [
  { q: "How quickly do you respond?",          a: "Within 24 hours on weekdays. WhatsApp is fastest during business hours." },
  { q: "Do I need to pay to get a quote?",     a: "No — quotes are completely free and come with no obligation whatsoever." },
  { q: "Can you help with last-minute bookings?", a: "Yes! Call or WhatsApp us directly for urgent requests and we'll do our best." },
  { q: "Do you work with clients outside the UK?", a: "Absolutely. We work with clients globally — our travel services have no borders." },
];

export default function Contact() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 px-5 md:px-10 text-center" style={{ backgroundColor: "var(--blue)" }}>
        <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--yellow)", fontFamily: "'Poppins', sans-serif" }}>
          Get in Touch
        </p>
        <h1 className="font-extrabold text-white leading-tight" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(36px, 6vw, 64px)" }}>
          We&apos;d Love to<br />
          <span style={{ color: "var(--coral)" }}>Hear from You</span>
        </h1>
        <p className="mt-5 text-base max-w-xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
          Whether you have a question, need advice, or are ready to book — our team is ready and waiting.
        </p>
      </section>

      {/* Contact cards */}
      <div className="max-w-6xl mx-auto px-5 md:px-10 py-16">
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {channels.map((c) => (
            <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
              className="rounded-2xl px-6 py-5 flex items-center gap-5 transition-all hover:shadow-lg hover:-translate-y-0.5"
              style={{ backgroundColor: c.bg, border: "1px solid var(--border)", textDecoration: "none" }}>
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl" style={{ backgroundColor: c.color + "22" }}>
                <c.Icon />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest mb-0.5" style={{ color: c.color, fontFamily: "'Poppins', sans-serif" }}>
                  {c.label}
                </p>
                <p className="font-bold mb-0.5" style={{ fontFamily: "'Poppins', sans-serif", color: "var(--text)", fontSize: "14px", wordBreak: "break-all" }}>
                  {c.value}
                </p>
                <p className="text-xs" style={{ color: "var(--muted)" }}>{c.note}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Office hours */}
          <div className="rounded-2xl p-8" style={{ backgroundColor: "#fff", border: "1px solid var(--border)" }}>
            <h2 className="font-bold mb-6" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "22px", color: "var(--text)" }}>
              Office Hours
            </h2>
            <div className="flex flex-col gap-4">
              {[
                { day: "Monday – Friday", time: "9:00 am – 6:00 pm" },
                { day: "Saturday",        time: "10:00 am – 2:00 pm" },
                { day: "Sunday",          time: "Closed" },
              ].map((h) => (
                <div key={h.day} className="flex items-center justify-between py-3"
                  style={{ borderBottom: "1px solid var(--border)" }}>
                  <span className="text-sm font-medium" style={{ color: "var(--text)", fontFamily: "'Poppins', sans-serif" }}>{h.day}</span>
                  <span className="text-sm font-semibold" style={{ color: h.time === "Closed" ? "var(--muted)" : "var(--blue)", fontFamily: "'Poppins', sans-serif" }}>{h.time}</span>
                </div>
              ))}
            </div>
            <p className="text-xs mt-5" style={{ color: "var(--muted)" }}>All times UK (GMT/BST). Email responses guaranteed within 24 hours.</p>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="font-bold mb-6" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "22px", color: "var(--text)" }}>
              Quick Answers
            </h2>
            <div className="flex flex-col gap-4">
              {faqs.map((f) => (
                <div key={f.q} className="rounded-xl p-5" style={{ backgroundColor: "#fff", border: "1px solid var(--border)" }}>
                  <p className="text-sm font-semibold mb-1" style={{ color: "var(--text)", fontFamily: "'Poppins', sans-serif" }}>{f.q}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quote CTA */}
      <section className="mx-5 md:mx-10 mb-16 rounded-3xl overflow-hidden" style={{ backgroundColor: "var(--blue)" }}>
        <div className="px-10 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--yellow)", fontFamily: "'Poppins', sans-serif" }}>
              Ready to Go?
            </p>
            <h2 className="font-extrabold text-white leading-tight" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(28px, 4vw, 40px)" }}>
              Get your personalised<br />quote in 2 minutes
            </h2>
            <p className="mt-4 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
              Fill in our quick form and we&apos;ll come back to you with a tailored plan — no cost, no commitment.
            </p>
          </div>
          <div className="flex flex-col gap-4 md:items-end">
            <Link href="/quote"
              className="rounded-full px-10 py-4 text-sm font-semibold text-center transition-all hover:opacity-85"
              style={{ backgroundColor: "var(--coral)", color: "#fff", textDecoration: "none", fontFamily: "'Poppins', sans-serif", display: "inline-block" }}>
              Get a Free Quote →
            </Link>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>No payment required. A consultant replies within 24 hours.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
