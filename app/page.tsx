import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";
import StatsCounter from "@/components/StatsCounter";
import NewsletterForm from "@/components/NewsletterForm";

const services = [
  { icon: "🎓", title: "Study Abroad",      desc: "Get into your dream university abroad. We handle applications, documents, and visas end-to-end.",           color: "var(--blue)",  bg: "var(--sky)",  href: "/services#study-abroad" },
  { icon: "🛂", title: "Visa Processing",    desc: "98% approval rate. We prepare your full application so nothing gets missed.",                              color: "var(--teal)",  bg: "#E6FAF8",     href: "/services#visa" },
  { icon: "🌴", title: "Holidays & Tours",   desc: "Beach escapes, safaris, city breaks, fully planned and tailored to your budget.",                         color: "var(--coral)", bg: "#FFF0EC",     href: "/services#holidays" },
  { icon: "✈️", title: "Flight Tickets",     desc: "Best fares across every airline. Economy, business, first class, we find and book it all.",               color: "#7C3AED",      bg: "#F5F0FF",     href: "/services#flights" },
];

const testimonials = [
  { title: "Stress-Free from Start to Finish",  body: "Booking flights with Gladgate was an absolute breeze. Their team found the best deals and made everything affordable and completely stress-free. I'll never book another way.", name: "Sarah O." },
  { title: "Peace of Mind Abroad",              body: "Travelling feels so much safer with their travel insurance. They've got everything covered for unexpected events, I genuinely won't travel without it now.", name: "James A." },
  { title: "Visa Approved First Time",          body: "I was completely overwhelmed by the visa application process until I found Gladgate. Their guidance and efficiency made the whole thing seamless. Highly recommend!", name: "Chidi B." },
  { title: "Perfect Stay Every Single Time",    body: "Their hotel reservation service is incredibly reliable. I've had amazing stays at fantastic hotels every trip, all thanks to their expert recommendations and support.", name: "Funke L." },
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

const destinations = [
  { name: "Santorini", country: "Greece",       img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80", tag: "Romance" },
  { name: "Dubai",     country: "UAE",          img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80", tag: "Luxury" },
  { name: "Maldives",  country: "Indian Ocean", img: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=800&q=80", tag: "Beach" },
  { name: "Paris",     country: "France",       img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80", tag: "Culture" },
  { name: "Bali",      country: "Indonesia",    img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80", tag: "Adventure" },
  { name: "New York",  country: "USA",          img: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=800&q=80", tag: "City Break" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <HeroCarousel />

      {/* About Us */}
      <section className="section px-5 md:px-10" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center mb-24 reveal">
            <div>
              <p className="eyebrow mb-5" style={{ color: "var(--coral)" }}>About Us</p>
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "clamp(30px, 4.6vw, 50px)", color: "var(--text)", marginBottom: "24px" }}>
                Your Premier UK Travel Agency with <span style={{ color: "var(--blue)" }}>Seamless Global Operations</span>
              </h2>
              <p className="lead">
                As a leading provider of travel solutions, we specialise in simplifying the complexities of international travel. Our dedicated team of experts is committed to delivering top-notch services, including flight ticketing, hotel reservations, travel insurance, visa processing, and study abroad consultation. With over a decade of industry experience, we have established ourselves as a trusted partner for travellers worldwide. Whether you&apos;re planning a business trip, a family holiday, or the adventure of a lifetime, Gladgate has got you covered.
              </p>
              <Link href="/about" className="btn btn-blue mt-10">
                Learn More About Us
              </Link>
            </div>
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80"
                alt="Travel" className="w-full object-cover" style={{ height: "460px", borderRadius: "var(--r-lg)" }} />
              <div className="absolute bottom-4 left-4 md:-bottom-6 md:-left-6 px-6 py-4 md:px-7 md:py-5"
                style={{ backgroundColor: "var(--blue)", borderRadius: "var(--r)", fontFamily: "'Space Grotesk', sans-serif", boxShadow: "var(--shadow-lg)" }}>
                <p className="text-3xl font-extrabold text-white leading-none">10+</p>
                <p className="text-xs mt-1.5" style={{ color: "rgba(255,255,255,0.75)" }}>Years of Excellence</p>
              </div>
            </div>
          </div>

          {/* 3 feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 reveal-group">
            {[
              { icon: "🕐", title: "24/7 Support Team",       desc: "Round-the-clock assistance from our dedicated customer care team." },
              { icon: "⭐", title: "Expert Consultants",      desc: "Specialist advisors with deep knowledge of every destination and visa type." },
              { icon: "💰", title: "Best Value Guaranteed",   desc: "Competitive pricing across all services, no hidden fees, ever." },
            ].map((f) => (
              <div key={f.title} className="card-soft flex items-start gap-5 p-8">
                <span className="text-3xl flex-shrink-0">{f.icon}</span>
                <div>
                  <h3 className="mb-1.5" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "17px", color: "var(--text)" }}>{f.title}</h3>
                  <p className="text-sm" style={{ color: "var(--muted)" }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section px-5 md:px-10" style={{ backgroundColor: "var(--white)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 reveal">
            <p className="eyebrow eyebrow-center mb-5" style={{ color: "var(--coral)" }}>Our Services</p>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "clamp(30px, 4.6vw, 50px)", color: "var(--text)" }}>
              What We Offer for You
            </h2>
            <p className="lead mt-4 max-w-xl mx-auto">
              One agency, four specialisms. Whatever your journey looks like, we have you covered from start to finish.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 reveal-group">
            {services.map((s) => (
              <Link key={s.title} href={s.href} style={{ textDecoration: "none" }}>
                <div className="card-soft h-full p-8 flex flex-col gap-5">
                  <div className="w-14 h-14 flex items-center justify-center text-3xl" style={{ backgroundColor: s.bg, borderRadius: "var(--r-sm)" }}>
                    {s.icon}
                  </div>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "18px", color: "var(--text)" }}>{s.title}</h3>
                  <p className="text-sm flex-1" style={{ color: "var(--muted)" }}>{s.desc}</p>
                  <span className="text-xs font-semibold" style={{ color: s.color, fontFamily: "'Space Grotesk', sans-serif" }}>Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats counter */}
      <StatsCounter />

      {/* Visa Refusal CTA, split layout */}
      <section className="relative overflow-hidden" style={{ minHeight: "520px", display: "flex", alignItems: "center" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1800&q=80"
          alt="Visa consultation" className="absolute inset-0 w-full h-full object-cover" style={{ zIndex: 0 }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(8,15,30,0.86) 0%, rgba(8,15,30,0.55) 55%, rgba(8,15,30,0.15) 100%)", zIndex: 1 }} />
        <div className="relative max-w-6xl mx-auto px-5 md:px-10 w-full" style={{ zIndex: 2 }}>
          <div className="max-w-xl reveal">
            <p className="eyebrow mb-6" style={{ color: "var(--yellow)" }}>Visa Refusal Resolution</p>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "clamp(34px, 5.5vw, 60px)", color: "#fff", marginBottom: "22px" }}>
              UK Visa Refusal?
            </h2>
            <p className="text-base mb-10" style={{ color: "rgba(255,255,255,0.82)", fontFamily: "'Inter', sans-serif", fontWeight: 300, lineHeight: 1.8 }}>
              Have you recently received a refusal on your UK visa application within the last three months? At Gladgate, we understand the disappointment and frustration this can cause. Our specialist team offers expert assessment and guidance to determine if grounds exist to contest the Home Office&apos;s decision.
            </p>
            <Link href="/services#visa-refusal" className="btn btn-primary">
              Find Out More
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section px-5 md:px-10" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 reveal">
            <p className="eyebrow eyebrow-center mb-5" style={{ color: "var(--coral)" }}>Testimonials</p>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "clamp(30px, 4.6vw, 50px)", color: "var(--text)" }}>
              What Our Clients Say About Us
            </h2>
            <p className="lead mt-4 max-w-2xl mx-auto">
              Our clients&apos; stories highlight the ease and satisfaction they&apos;ve found in our comprehensive travel services, from flights to accommodations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 reveal-group">
            {testimonials.map((t) => (
              <div key={t.name} className="card-soft flex flex-col gap-4 p-8">
                <div style={{ color: "var(--yellow)", fontSize: "20px", lineHeight: 1, letterSpacing: "2px" }}>★★★★★</div>
                <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "15px", color: "var(--text)" }}>{t.title}</h4>
                <p className="text-sm flex-1" style={{ color: "var(--muted)", fontFamily: "'Inter', sans-serif" }}>&ldquo;{t.body}&rdquo;</p>
                <p className="text-xs font-semibold" style={{ color: "var(--blue)", fontFamily: "'Space Grotesk', sans-serif" }}>{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="section px-5 md:px-10" style={{ backgroundColor: "var(--white)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-16 gap-4 flex-wrap reveal">
            <div>
              <p className="eyebrow mb-5" style={{ color: "var(--coral)" }}>Travel Packages</p>
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "clamp(30px, 4.6vw, 50px)", color: "var(--text)" }}>
                Where Will You Go?
              </h2>
            </div>
            <Link href="/packages"
              className="text-sm font-semibold transition-opacity hover:opacity-70 flex-shrink-0"
              style={{ color: "var(--coral)", textDecoration: "none", fontFamily: "'Space Grotesk', sans-serif" }}>
              See all destinations →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 reveal-group">
            {destinations.map((d) => {
              const tag = tagColors[d.tag] ?? { bg: "#F0F0F0", color: "#666" };
              return (
                <div key={d.name} className="relative overflow-hidden group cursor-pointer" style={{ aspectRatio: "4/3", borderRadius: "var(--r)" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={d.img} alt={d.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,15,30,0.78) 0%, rgba(8,15,30,0.04) 60%)" }} />
                  <span className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: tag.bg, color: tag.color }}>{d.tag}</span>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "19px", color: "#fff" }}>{d.name}</p>
                    <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.72)" }}>{d.country}</p>
                  </div>
                  <Link href="/quote?service=holidays"
                    className="absolute bottom-5 right-5 px-4 py-1.5 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all"
                    style={{ backgroundColor: "var(--coral)", color: "#fff", textDecoration: "none" }}>
                    Enquire
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partner airlines */}
      <section className="section-tight px-5 md:px-10" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-6xl mx-auto">
          <p className="eyebrow eyebrow-center mb-5" style={{ color: "var(--coral)" }}>Our Clients</p>
          <h2 className="text-center mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "clamp(24px, 3.2vw, 36px)", color: "var(--text)" }}>
            Trusted by the World&apos;s Biggest Airlines
          </h2>
          <p className="lead text-center max-w-xl mx-auto mb-14">
            Our diverse clientele, from individual travellers to global corporations, reflects our commitment to excellence and trusted service.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 mb-12 reveal-group">
            {airlines.map((a) => (
              <span key={a.name} className="hover:opacity-100 transition-opacity cursor-default"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "15px", color: a.color, opacity: 0.55 }}>
                {a.name}
              </span>
            ))}
          </div>
          <div className="flex justify-center flex-wrap gap-4">
            {["IATA Accredited", "ABTA Member", "ATOL Protected"].map((a) => (
              <span key={a} className="px-5 py-2 rounded-full text-sm font-semibold"
                style={{ backgroundColor: "var(--sky)", color: "var(--blue)", fontFamily: "'Space Grotesk', sans-serif" }}>{a}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-tight px-5 md:px-10" style={{ backgroundColor: "var(--blue)" }}>
        <div className="max-w-xl mx-auto text-center reveal">
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "clamp(26px, 3.4vw, 40px)", color: "#fff", marginBottom: "10px" }}>
            Subscribe to Our Newsletter
          </h2>
          <p className="text-sm mb-10" style={{ color: "rgba(255,255,255,0.75)", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            Stay updated with the latest travel deals, visa tips, and destination guides.
          </p>
          <NewsletterForm />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-tight px-5 md:px-10 text-center" style={{ backgroundColor: "var(--white)" }}>
        <div className="reveal">
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "clamp(26px, 4vw, 44px)", color: "var(--text)", marginBottom: "14px", maxWidth: "640px", marginLeft: "auto", marginRight: "auto" }}>
            What type of challenge are you facing? Let&apos;s talk.
          </h2>
          <a href="mailto:hello@gladgateconsulting.com" className="block text-sm mb-10"
            style={{ color: "var(--blue)", fontFamily: "'Inter', sans-serif", textDecoration: "none" }}>
            hello@gladgateconsulting.com
          </a>
          <Link href="/quote" className="btn btn-primary">
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
