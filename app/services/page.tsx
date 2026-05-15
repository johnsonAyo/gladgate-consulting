import Link from "next/link";

const services = [
  {
    title: "Study Abroad",
    tagline: "From application to arrival — we've got you.",
    desc: "We guide you every step of the way: university shortlisting, personal statements, applications, and student visa strategy. Your dream campus is closer than you think.",
    includes: [
      "University shortlisting (up to 10 options)",
      "Personal statement & SOP drafting",
      "Application submission & tracking",
      "Pre-visa guidance & document review",
      "Accommodation and arrival support",
    ],
    tiers: [
      { name: "Starter",      price: "£150 – £300",     desc: "Shortlisting & consultation" },
      { name: "Standard",     price: "£400 – £700",     desc: "Applications + document review" },
      { name: "Full Service", price: "£800 – £1,500",   desc: "End-to-end with visa strategy" },
    ],
    color: "var(--blue)",
    bg: "var(--sky)",
    href: "/quote?service=study-abroad",
  },
  {
    title: "Visa Applications",
    tagline: "98% approval rate. Your application, our expertise.",
    desc: "Tourist, student, work, family — we prepare thorough, well-evidenced applications for the strongest possible outcome across all major countries and visa types.",
    includes: [
      "Eligibility assessment",
      "Document checklist & verification",
      "Cover letter & supporting statement",
      "Application form completion",
      "Priority processing & appeal support",
    ],
    tiers: [
      { name: "Self-Serve",       price: "£75 – £150",    desc: "Guidance & checklist only" },
      { name: "Standard",         price: "£200 – £500",   desc: "Full preparation & submission" },
      { name: "Complex / Appeal", price: "£600 – £1,200+",desc: "Refusals, appeals & complex cases" },
    ],
    color: "var(--coral)",
    bg: "#FFF4F1",
    href: "/quote?service=visa",
  },
  {
    title: "Holidays & Tours",
    tagline: "Tailor-made escapes. Wherever you dream of going.",
    desc: "Beach resorts, cultural city breaks, adventure safaris, romantic getaways — we design personalised itineraries so every detail is taken care of before you even pack.",
    includes: [
      "Personalised itinerary design",
      "Hotel & resort bookings",
      "Guided tour arrangements",
      "Airport transfers & logistics",
      "Travel insurance advisory",
    ],
    tiers: [
      { name: "Budget",   price: "£50 – £200",  desc: "Planning & booking (3–7 nights)" },
      { name: "Standard", price: "£150 – £350", desc: "Full package with itinerary" },
      { name: "Bespoke",  price: "£300 – £500+",desc: "Luxury, private & extended tours" },
    ],
    color: "var(--teal)",
    bg: "#E8FAF8",
    href: "/quote?service=holidays",
  },
  {
    title: "Flight Tickets",
    tagline: "Best fare. Every route. Every airline.",
    desc: "We search across all major carriers to find competitive fares — economy through first class, simple returns or complex multi-city routes. Group and family bookings welcome.",
    includes: [
      "Fare comparison across all airlines",
      "One-way, return & multi-city routing",
      "Economy, business & first class",
      "Group & family bookings",
      "Date flexibility & upgrade advisory",
    ],
    tiers: [
      { name: "Economy",            price: "£25 – £50 / ticket", desc: "Service fee per ticket" },
      { name: "Business / First",   price: "£75 – £150 / ticket",desc: "Service fee per ticket" },
      { name: "Multi-city / Group", price: "£100 – £250 flat",   desc: "Flat fee per booking" },
    ],
    color: "var(--yellow)",
    bg: "#FFFBEB",
    href: "/quote?service=flights",
  },
];

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 px-5 md:px-10 text-center" style={{ backgroundColor: "var(--blue)" }}>
        <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--yellow)", fontFamily: "'Poppins', sans-serif" }}>
          What We Do
        </p>
        <h1 className="font-extrabold text-white leading-tight" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(36px, 6vw, 64px)" }}>
          Everything You Need,<br />
          <span style={{ color: "var(--yellow)" }}>All in One Place</span>
        </h1>
        <p className="mt-5 text-base max-w-xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'Inter', sans-serif" }}>
          Four services, one team, zero stress. Transparent pricing, dedicated consultants, and a 98% success rate you can count on.
        </p>
      </section>

      {/* Services */}
      <div className="max-w-6xl mx-auto px-5 md:px-10 py-16 flex flex-col gap-8">
        {services.map((s, i) => (
          <div key={s.title} className="rounded-2xl overflow-hidden shadow-sm" style={{ backgroundColor: "#fff", border: "1px solid var(--border)" }}>
            <div className="grid md:grid-cols-5">
              {/* Left */}
              <div className="flex flex-col justify-between p-8 md:p-10 md:col-span-2" style={{ backgroundColor: s.bg }}>
                <div>
                  <div className="w-10 h-1.5 rounded-full mb-5" style={{ backgroundColor: s.color }} />
                  <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: s.color, fontFamily: "'Poppins', sans-serif" }}>
                    Service {["I", "II", "III", "IV"][i]}
                  </p>
                  <h2 className="font-extrabold leading-tight mb-3" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(22px, 3vw, 30px)", color: "var(--text)" }}>
                    {s.title}
                  </h2>
                  <p className="text-sm font-semibold mb-4" style={{ color: s.color, fontFamily: "'Poppins', sans-serif" }}>{s.tagline}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{s.desc}</p>
                </div>
                <ul className="flex flex-col gap-2 mt-6">
                  {s.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "var(--text)" }}>
                      <span style={{ color: s.color, fontWeight: 700, flexShrink: 0 }}>+</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: tiers + CTA */}
              <div className="flex flex-col gap-4 p-8 md:p-10 md:col-span-3">
                <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--muted)", fontFamily: "'Poppins', sans-serif" }}>
                  Service Tiers
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {s.tiers.map((t) => (
                    <div key={t.name} className="flex items-center justify-between gap-4 rounded-xl px-5 py-4"
                      style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)" }}>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide mb-0.5" style={{ color: s.color, fontFamily: "'Poppins', sans-serif" }}>
                          {t.name}
                        </p>
                        <p className="text-xs" style={{ color: "var(--muted)" }}>{t.desc}</p>
                      </div>
                      <p className="font-bold text-right" style={{ fontFamily: "'Poppins', sans-serif", color: "var(--text)", fontSize: "15px", whiteSpace: "nowrap" }}>
                        {t.price}
                      </p>
                    </div>
                  ))}
                </div>
                <Link href={s.href}
                  className="mt-4 rounded-full px-8 py-4 text-sm font-semibold text-center transition-all hover:opacity-85"
                  style={{ backgroundColor: s.color, color: s.color === "var(--yellow)" ? "var(--text)" : "#fff", textDecoration: "none", fontFamily: "'Poppins', sans-serif", display: "block" }}>
                  Get a Quote for {s.title} →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <section className="mx-5 md:mx-10 mb-16 rounded-3xl px-8 py-16 text-center" style={{ backgroundColor: "var(--blue)" }}>
        <p className="text-2xl font-extrabold text-white mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
          Not sure which service you need?
        </p>
        <p className="text-sm mb-8 max-w-md mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
          Drop us a message and a consultant will help you figure out the best option — no obligation, no pressure.
        </p>
        <Link href="/contact"
          className="inline-block rounded-full px-10 py-4 text-sm font-semibold transition-all hover:opacity-85"
          style={{ backgroundColor: "var(--coral)", color: "#fff", textDecoration: "none", fontFamily: "'Poppins', sans-serif" }}>
          Talk to Us
        </Link>
      </section>
    </div>
  );
}
