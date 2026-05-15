import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";

const destinations = [
  { name: "Santorini",  country: "Greece",       img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80", tag: "Romance" },
  { name: "Dubai",      country: "UAE",          img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80", tag: "Luxury" },
  { name: "Maldives",   country: "Indian Ocean", img: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=800&q=80", tag: "Beach" },
  { name: "Paris",      country: "France",       img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80", tag: "Culture" },
  { name: "Bali",       country: "Indonesia",    img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80", tag: "Adventure" },
  { name: "New York",   country: "USA",          img: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=800&q=80", tag: "City Break" },
];

const services = [
  { icon: "🎓", title: "Study Abroad",      desc: "Get into your dream university abroad. We handle applications, documents, and visas.", color: "#0057B8", bg: "#E8F4FD", href: "/quote?service=study-abroad" },
  { icon: "🛂", title: "Visa Applications", desc: "98% approval rate. We prepare your full application so nothing gets missed.",           color: "#00B8A9", bg: "#E6FAF8", href: "/quote?service=visa" },
  { icon: "🌴", title: "Holidays & Tours",  desc: "Beach escapes, safaris, city breaks — fully planned and tailored to your budget.",     color: "#FF5C35", bg: "#FFF0EC", href: "/quote?service=holidays" },
  { icon: "✈️", title: "Flight Tickets",    desc: "Best fares across every airline. Economy, business, first class — we book it all.",    color: "#7C3AED", bg: "#F5F0FF", href: "/quote?service=flights" },
];

const airlines = [
  { name: "British Airways",  color: "#2B5DAD" },
  { name: "Emirates",         color: "#D4213D" },
  { name: "Qatar Airways",    color: "#5C0632" },
  { name: "Lufthansa",        color: "#05164D" },
  { name: "Air France",       color: "#002157" },
  { name: "Turkish Airlines", color: "#C70A0C" },
  { name: "Virgin Atlantic",  color: "#E10A0A" },
];

const tagColors: Record<string, { bg: string; color: string }> = {
  Romance:     { bg: "#FFE4E8", color: "#E11D48" },
  Luxury:      { bg: "#FEF3C7", color: "#D97706" },
  Beach:       { bg: "#DBEAFE", color: "#1D4ED8" },
  Culture:     { bg: "#F3E8FF", color: "#7C3AED" },
  Adventure:   { bg: "#DCFCE7", color: "#16A34A" },
  "City Break":{ bg: "#FFE4D6", color: "#C2410C" },
};

export default function Home() {
  return (
    <>
      <HeroCarousel />

      {/* Services */}
      <section className="py-20 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4"
              style={{ backgroundColor: "var(--sky)", color: "var(--blue)" }}>What We Do</span>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 4vw, 42px)", color: "var(--text)" }}>
              Everything You Need to Travel
            </h2>
            <p className="mt-3 text-base max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
              One agency, four specialisms. Whatever your journey looks like, we&apos;ve got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <Link key={s.title} href={s.href} style={{ textDecoration: "none" }}>
                <div className="h-full p-6 flex flex-col gap-4 rounded-2xl transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
                  style={{ backgroundColor: "var(--white)", boxShadow: "0 4px 16px rgba(0,0,0,0.07)", border: "1px solid rgba(0,0,0,0.06)" }}>
                  <div className="w-14 h-14 flex items-center justify-center text-3xl rounded-2xl" style={{ backgroundColor: s.bg }}>
                    {s.icon}
                  </div>
                  <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "17px", color: "var(--text)" }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--muted)" }}>{s.desc}</p>
                  <span className="text-xs font-semibold" style={{ color: s.color }}>Get a quote →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4"
                style={{ backgroundColor: "var(--sky)", color: "var(--blue)" }}>Destinations</span>
              <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 4vw, 42px)", color: "var(--text)" }}>
                Where Will You Go?
              </h2>
            </div>
            <Link href="/quote?service=holidays"
              className="text-sm font-semibold transition-opacity hover:opacity-70 flex-shrink-0"
              style={{ color: "var(--coral)", textDecoration: "none" }}>
              See all destinations →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {destinations.map((d) => {
              const tag = tagColors[d.tag] ?? { bg: "#F0F0F0", color: "#666" };
              return (
                <div key={d.name} className="relative overflow-hidden rounded-2xl group cursor-pointer" style={{ aspectRatio: "4/3" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={d.img} alt={d.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 rounded-2xl" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.05) 55%)" }} />

                  <span className="absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: tag.bg, color: tag.color }}>
                    {d.tag}
                  </span>

                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "18px", color: "#fff" }}>{d.name}</p>
                    <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.7)" }}>{d.country}</p>
                  </div>

                  <Link href="/quote?service=holidays"
                    className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all"
                    style={{ backgroundColor: "var(--coral)", color: "#fff" }}>
                    Enquire
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 px-5 md:px-10 rounded-3xl mx-4 md:mx-10 mb-10"
        style={{ background: "linear-gradient(135deg, var(--sky) 0%, #EEF4FF 100%)", border: "1px solid rgba(0,87,184,0.1)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(24px, 3vw, 36px)", color: "var(--blue)" }}>
              Why Choose Gladgate?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "🏆", title: "98% Visa Success",    desc: "Our approval rate speaks for itself. We know what works." },
              { icon: "🤝", title: "Personal Consultant", desc: "A real person handles your case. No bots, no call centres." },
              { icon: "⚡", title: "Fast Turnaround",     desc: "Most applications submitted within 48 hours of your docs." },
              { icon: "💬", title: "Transparent Pricing", desc: "Clear fees upfront. No surprises, no hidden charges." },
            ].map((w) => (
              <div key={w.title} className="p-6 rounded-2xl text-center flex flex-col items-center gap-3"
                style={{ backgroundColor: "var(--white)", boxShadow: "0 4px 16px rgba(0,87,184,0.08)" }}>
                <span className="text-4xl">{w.icon}</span>
                <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "16px", color: "var(--text)" }}>{w.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-16 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-center mb-10" style={{ color: "var(--muted)" }}>
            Trusted By &amp; Working With
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-5 mb-10">
            {airlines.map((a) => (
              <span key={a.name}
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "15px", color: a.color, letterSpacing: "0.01em", opacity: 0.75 }}
                className="hover:opacity-100 transition-opacity cursor-default">
                {a.name}
              </span>
            ))}
          </div>
          <div className="flex justify-center flex-wrap gap-4">
            {["IATA Accredited", "ABTA Member", "ATOL Protected"].map((a) => (
              <span key={a} className="px-5 py-2 rounded-full text-sm font-semibold"
                style={{ backgroundColor: "var(--sky)", color: "var(--blue)" }}>{a}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden mx-4 md:mx-10 mb-16 rounded-3xl" style={{ minHeight: "400px", display: "flex", alignItems: "center" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1800&q=85"
          alt="Airplane wing over clouds" className="absolute inset-0 w-full h-full object-cover" style={{ zIndex: 0 }} />
        <div className="absolute inset-0 rounded-3xl" style={{ background: "linear-gradient(135deg, rgba(0,87,184,0.9) 0%, rgba(255,92,53,0.7) 100%)", zIndex: 1 }} />
        <div className="relative w-full text-center px-6 py-16" style={{ zIndex: 2 }}>
          <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(30px, 5vw, 56px)", color: "#fff", lineHeight: 1.15 }}>
            Ready to take off?
          </h2>
          <p className="mt-4 text-base md:text-lg max-w-md mx-auto" style={{ color: "rgba(255,255,255,0.85)" }}>
            Tell us where you want to go — we&apos;ll handle visas, flights, hotels, and everything in between.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link href="/quote"
              className="inline-block px-10 py-4 rounded-full font-bold text-sm transition-all hover:opacity-90"
              style={{ backgroundColor: "var(--yellow)", color: "var(--text)" }}>
              Get a Free Quote
            </Link>
            <Link href="/contact"
              className="inline-block px-10 py-4 rounded-full font-semibold text-sm transition-all hover:opacity-80"
              style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)" }}>
              Talk to Us First
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
