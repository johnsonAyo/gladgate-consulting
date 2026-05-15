import Link from "next/link";

const values = [
  { title: "Integrity",     desc: "We are transparent and honest in everything we do — from pricing to the advice we give on your application." },
  { title: "Excellence",    desc: "We hold ourselves to the highest standard in every service we deliver, every document we prepare, every client we serve." },
  { title: "Personalised",  desc: "No two travellers are the same. We tailor every solution to your specific circumstances, goals, and timeline." },
  { title: "Reliability",   desc: "When we say we will handle it, we mean it. You can count on us to deliver — on time, every time." },
];

const team = [
  { name: "Amara J.",  role: "Founder & Lead Consultant",    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80" },
  { name: "Daniel O.", role: "Visa Processing Specialist",   img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" },
  { name: "Grace K.",  role: "Study Abroad Advisor",         img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=400&q=80" },
  { name: "Tom B.",    role: "Flight & Holidays Coordinator", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" },
];

const milestones = [
  { year: "2015", text: "Gladgate founded with a single mission: make international travel accessible to everyone." },
  { year: "2017", text: "Expanded into study abroad and university admissions, helping students reach top institutions worldwide." },
  { year: "2019", text: "Launched dedicated visa refusal resolution service with a 94% successful contestation rate." },
  { year: "2022", text: "Crossed 2,000 happy travellers and expanded to serve clients across 80+ countries." },
  { year: "2024", text: "Achieved IATA accreditation and ATOL protection — cementing our status as a fully regulated UK travel agency." },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="py-24 px-5 md:px-10 text-center" style={{ backgroundColor: "var(--blue)" }}>
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--yellow)", fontFamily: "'Poppins', sans-serif" }}>About Us</p>
        <h1 className="font-extrabold text-white" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(36px, 6vw, 64px)", lineHeight: 1.15 }}>
          Who We Are
        </h1>
        <p className="mt-5 text-base max-w-2xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.75)", fontFamily: "'Inter', sans-serif" }}>
          Gladgate is a UK-based travel agency with over a decade of experience helping people study, travel, and explore the world — without the stress.
        </p>
      </section>

      {/* Story */}
      <section className="py-20 px-5 md:px-10" style={{ backgroundColor: "var(--white)" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--coral)", fontFamily: "'Poppins', sans-serif" }}>Our Story</p>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(26px, 4vw, 40px)", color: "var(--text)", lineHeight: 1.2, marginBottom: "20px" }}>
              Nigeria&apos;s Premier Travel Consultancy with <span style={{ color: "var(--blue)" }}>Seamless Global Operations</span>
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted)", fontFamily: "'Inter', sans-serif" }}>
              Gladgate was founded in 2015 with a simple belief: international travel should be accessible, not stressful. What started as a small visa consultation practice has grown into a full-service travel agency trusted by thousands of travellers across the UK and beyond.
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted)", fontFamily: "'Inter', sans-serif" }}>
              Our team brings together specialists in visa processing, study abroad admissions, flight ticketing, holiday planning, and travel insurance — giving every client a dedicated expert for every need.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)", fontFamily: "'Inter', sans-serif" }}>
              Whether you are a first-time traveller or a seasoned explorer, we treat every enquiry with the same level of care, attention, and commitment to getting the best possible outcome.
            </p>
          </div>
          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80"
              alt="Our team" className="w-full rounded-3xl object-cover" style={{ height: "440px" }} />
            <div className="absolute -bottom-5 -right-5 px-6 py-4 rounded-2xl shadow-xl"
              style={{ backgroundColor: "var(--coral)", fontFamily: "'Poppins', sans-serif" }}>
              <p className="text-2xl font-extrabold text-white leading-none">2,500+</p>
              <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.8)" }}>Happy Travellers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-5 md:px-10" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--coral)", fontFamily: "'Poppins', sans-serif" }}>What Drives Us</p>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(26px, 4vw, 40px)", color: "var(--text)" }}>Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="p-7 rounded-2xl flex flex-col gap-3"
                style={{ backgroundColor: "var(--white)", border: "1px solid var(--border)", boxShadow: "0 4px 16px rgba(0,0,0,0.05)" }}>
                <div className="w-10 h-1 rounded-full" style={{ backgroundColor: "var(--blue)" }} />
                <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "17px", color: "var(--text)" }}>{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-5 md:px-10" style={{ backgroundColor: "var(--white)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--coral)", fontFamily: "'Poppins', sans-serif" }}>Our Journey</p>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(26px, 4vw, 40px)", color: "var(--text)" }}>A Decade of Growth</h2>
          </div>
          <div className="flex flex-col gap-0">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-6 items-start">
                {/* Line + dot */}
                <div className="flex flex-col items-center flex-shrink-0" style={{ width: "48px" }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs text-white flex-shrink-0"
                    style={{ backgroundColor: "var(--blue)", fontFamily: "'Poppins', sans-serif" }}>
                    {m.year.slice(2)}
                  </div>
                  {i < milestones.length - 1 && <div className="w-0.5 flex-1 my-1" style={{ backgroundColor: "var(--border)", minHeight: "40px" }} />}
                </div>
                <div className="pb-10">
                  <p className="text-xs font-semibold mb-1" style={{ color: "var(--blue)", fontFamily: "'Poppins', sans-serif" }}>{m.year}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{m.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-5 md:px-10" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--coral)", fontFamily: "'Poppins', sans-serif" }}>The People</p>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(26px, 4vw, 40px)", color: "var(--text)" }}>Meet Our Team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((t) => (
              <div key={t.name} className="rounded-2xl overflow-hidden" style={{ backgroundColor: "var(--white)", border: "1px solid var(--border)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={t.img} alt={t.name} className="w-full object-cover" style={{ height: "220px" }} />
                <div className="p-5">
                  <p className="font-bold" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "16px", color: "var(--text)" }}>{t.name}</p>
                  <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-5 md:px-10 text-center" style={{ backgroundColor: "var(--blue)" }}>
        <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(24px, 4vw, 38px)", color: "#fff", marginBottom: "12px" }}>
          Ready to start your journey?
        </h2>
        <p className="text-sm mb-8 max-w-md mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
          Talk to one of our consultants today — no obligation, no pressure.
        </p>
        <Link href="/quote"
          className="inline-block px-10 py-4 rounded-full font-bold text-sm transition-all hover:opacity-90"
          style={{ backgroundColor: "var(--coral)", color: "#fff", textDecoration: "none", fontFamily: "'Poppins', sans-serif" }}>
          Get a Free Quote
        </Link>
      </section>
    </div>
  );
}
