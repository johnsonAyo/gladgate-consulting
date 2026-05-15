import Link from "next/link";

const values = [
  { title: "Integrity",     desc: "We are transparent and honest in everything we do, from pricing to the advice we give on your application." },
  { title: "Excellence",    desc: "We hold ourselves to the highest standard in every service we deliver, every document we prepare, every client we serve." },
  { title: "Personalised",  desc: "No two travellers are the same. We tailor every solution to your specific circumstances, goals, and timeline." },
  { title: "Reliability",   desc: "When we say we will handle it, we mean it. You can count on us to deliver, on time, every time." },
];


const milestones = [
  { year: "2015", text: "Gladgate founded with a single mission: make international travel accessible to everyone." },
  { year: "2017", text: "Expanded into study abroad and university admissions, helping students reach top institutions worldwide." },
  { year: "2019", text: "Launched dedicated visa refusal resolution service with a 94% successful contestation rate." },
  { year: "2022", text: "Crossed 2,000 happy travellers and expanded to serve clients across 80+ countries." },
  { year: "2024", text: "Achieved IATA accreditation and ATOL protection, cementing our status as a fully regulated UK travel agency." },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="page-banner px-5 md:px-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="page-banner__img" src="https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=1800&q=80" alt="" />
        <div className="page-banner__veil" />
        <div className="page-banner__inner reveal max-w-6xl mx-auto">
          <p className="eyebrow mb-6" style={{ color: "var(--yellow)" }}>About Us</p>
          <h1 className="text-white" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "clamp(40px, 6.4vw, 72px)", lineHeight: 1.08 }}>
            Who We Are
          </h1>
          <p className="mt-5 text-lg max-w-2xl" style={{ color: "rgba(255,255,255,0.78)", fontFamily: "'Inter', sans-serif", fontWeight: 300, lineHeight: 1.8 }}>
            Gladgate is a UK-based travel agency with over a decade of experience helping people study, travel, and explore the world, without the stress.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section px-5 md:px-10" style={{ backgroundColor: "var(--white)" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <p className="eyebrow mb-5" style={{ color: "var(--coral)" }}>Our Story</p>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 4.2vw, 44px)", color: "var(--text)", marginBottom: "24px" }}>
              The UK&apos;s Premier Travel Agency with <span style={{ color: "var(--blue)" }}>Seamless Global Operations</span>
            </h2>
            <p className="lead mb-5">
              Gladgate was founded in 2015 with a simple belief: international travel should be accessible, not stressful. What started as a small visa consultation practice has grown into a full-service travel agency trusted by thousands of travellers across the UK and beyond.
            </p>
            <p className="lead mb-5">
              Our team brings together specialists in visa processing, study abroad admissions, flight ticketing, holiday planning, and travel insurance, giving every client a dedicated expert for every need.
            </p>
            <p className="lead">
              Whether you are a first-time traveller or a seasoned explorer, we treat every enquiry with the same level of care, attention, and commitment to getting the best possible outcome.
            </p>
          </div>
          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80"
              alt="Our team" className="w-full object-cover" style={{ height: "480px", borderRadius: "var(--r-lg)" }} />
            <div className="absolute bottom-4 right-4 md:-bottom-6 md:-right-6 px-6 py-4 md:px-7 md:py-5"
              style={{ backgroundColor: "var(--coral)", borderRadius: "var(--r)", fontFamily: "'Space Grotesk', sans-serif", boxShadow: "var(--shadow-lg)" }}>
              <p className="text-3xl font-extrabold text-white leading-none">2,500+</p>
              <p className="text-xs mt-1.5" style={{ color: "rgba(255,255,255,0.85)" }}>Happy Travellers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section px-5 md:px-10" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="eyebrow eyebrow-center mb-5" style={{ color: "var(--coral)" }}>What Drives Us</p>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 4.2vw, 44px)", color: "var(--text)" }}>Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {values.map((v) => (
              <div key={v.title} className="card-soft p-8 flex flex-col gap-4">
                <div className="w-10 h-1 rounded-full" style={{ backgroundColor: "var(--blue)" }} />
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "17px", color: "var(--text)" }}>{v.title}</h3>
                <p className="text-sm" style={{ color: "var(--muted)" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section px-5 md:px-10" style={{ backgroundColor: "var(--white)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-20">
            <p className="eyebrow eyebrow-center mb-5" style={{ color: "var(--coral)" }}>Our Journey</p>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 4.2vw, 44px)", color: "var(--text)" }}>A Decade of Growth</h2>
          </div>
          <div className="flex flex-col gap-0">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-6 items-start">
                {/* Line + dot */}
                <div className="flex flex-col items-center flex-shrink-0" style={{ width: "48px" }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs text-white flex-shrink-0"
                    style={{ backgroundColor: "var(--blue)", fontFamily: "'Space Grotesk', sans-serif" }}>
                    {m.year.slice(2)}
                  </div>
                  {i < milestones.length - 1 && <div className="w-0.5 flex-1 my-1" style={{ backgroundColor: "var(--border)", minHeight: "40px" }} />}
                </div>
                <div className="pb-10">
                  <p className="text-xs font-semibold mb-1" style={{ color: "var(--blue)", fontFamily: "'Space Grotesk', sans-serif" }}>{m.year}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{m.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-tight px-5 md:px-10" style={{ backgroundColor: "var(--blue)" }}>
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <h2 className="display-sm" style={{ color: "var(--white)" }}>
            Ready to start your journey?
          </h2>
          <p className="lead mt-5 max-w-lg" style={{ color: "rgba(255,250,242,0.76)" }}>
            Talk to one of our consultants today, with no obligation and no pressure.
          </p>
          <Link href="/quote" className="btn btn-light mt-9">
            Get a free quote
          </Link>
        </div>
      </section>
    </div>
  );
}
