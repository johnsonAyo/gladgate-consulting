import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";

const steps = [
  { n: "01", title: "Free Assessment",       desc: "Contact us with your refusal letter. Our specialists review the Home Office decision and assess whether grounds exist to challenge or re-apply." },
  { n: "02", title: "Strategy Session",      desc: "We walk you through your options, administrative review, appeal, or a strengthened re-application, and recommend the best route for your case." },
  { n: "03", title: "Case Preparation",      desc: "Our team compiles a robust file of supporting evidence, a detailed cover letter addressing the refusal reasons, and all required documentation." },
  { n: "04", title: "Submission & Follow-Up",desc: "We submit your application and monitor its progress, keeping you updated at every stage until a final decision is received." },
];

const reasons = [
  "Insufficient financial evidence",
  "Lack of strong ties to home country",
  "Gaps or inconsistencies in the application",
  "Incomplete supporting documentation",
  "Failure to demonstrate genuine visit intention",
  "Previous immigration history concerns",
];

const faqs = [
  {
    q: "How long do I have to challenge a UK visa refusal?",
    a: "For most visa types, you can request an Administrative Review within 28 days of receiving the refusal. If you are entitled to appeal, the deadline is usually 14 days (in the UK) or 28 days (outside the UK). We strongly recommend contacting us as soon as you receive your refusal letter.",
  },
  {
    q: "What is the difference between an Administrative Review and an Appeal?",
    a: "An Administrative Review is a check for case-working errors, a senior Home Office caseworker reviews whether the original decision was made correctly. An Appeal is heard by an independent immigration tribunal and considers the full merits of your case. Not all visa refusals are eligible for appeal, we will advise which route applies to you.",
  },
  {
    q: "Do you guarantee that my refusal will be overturned?",
    a: "No ethical consultant can guarantee a visa outcome. What we do guarantee is meticulous case preparation, honest advice, and the strongest possible submission on your behalf. Our track record speaks for itself, the majority of refusal cases we handle result in a successful outcome.",
  },
  {
    q: "Can I simply re-apply after a refusal?",
    a: "Yes, you can re-apply for a UK visa after a refusal. However, re-applying with the same or a weaker application is unlikely to succeed. We work with you to identify precisely why the application failed and address each concern comprehensively before re-submission.",
  },
  {
    q: "How much does the visa refusal service cost?",
    a: "Our visa refusal service is covered under our Complex / Appeal tier, starting from £600. The exact fee depends on the complexity of your case. Contact us for a free initial assessment and we will provide a transparent quote before any commitment.",
  },
];

export default function VisaRefusal() {
  return (
    <div>
      {/* Hero */}
      <section className="page-banner px-5 md:px-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="page-banner__img" src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1800&q=80" alt="" />
        <div className="page-banner__veil" />
        <div className="page-banner__inner reveal max-w-6xl mx-auto">
          <div className="max-w-xl">
            <p className="eyebrow mb-6" style={{ color: "var(--yellow)" }}>Visa Refusal Resolution</p>
            <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "clamp(40px, 6.4vw, 72px)", color: "#fff", lineHeight: 1.08, marginBottom: "22px" }}>
              UK Visa Refused?<br />We Can Help.
            </h1>
            <p className="text-lg mb-10" style={{ color: "rgba(255,255,255,0.82)", fontFamily: "'Inter', sans-serif", fontWeight: 300, lineHeight: 1.8 }}>
              A visa refusal is not the end of the road. Our specialist team reviews Home Office decisions, identifies the grounds for challenge, and builds the strongest possible case for a successful outcome.
            </p>
            <Link href="/quote?service=visa" className="btn btn-primary">
              Get a Free Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* Common refusal reasons */}
      <section className="section px-5 md:px-10" style={{ backgroundColor: "var(--white)" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <p className="eyebrow mb-5" style={{ color: "var(--coral)" }}>Why Visas Get Refused</p>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 4.2vw, 44px)", color: "var(--text)", marginBottom: "18px" }}>
              The Most Common Refusal Reasons
            </h2>
            <p className="lead mb-9">
              Most visa refusals stem from a small number of avoidable issues. Understanding the root cause is the first step to a successful outcome.
            </p>
            <ul className="flex flex-col gap-4">
              {reasons.map((r) => (
                <li key={r} className="flex items-start gap-3 text-sm" style={{ color: "var(--text)", fontFamily: "'Inter', sans-serif" }}>
                  <span className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "var(--coral)" }}>✕</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-5 p-10" style={{ backgroundColor: "var(--sky)", borderRadius: "var(--r-lg)" }}>
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "22px", color: "var(--blue)" }}>
              What Gladgate Does Differently
            </h3>
            {[
              "We read every refusal letter in full and identify the precise grounds for rejection.",
              "We advise honestly, if we don't think you have a strong case, we will tell you.",
              "We build a detailed evidence file that directly addresses every concern raised.",
              "We draft a professional cover letter arguing your case clearly and compellingly.",
              "We submit and monitor your case, keeping you informed throughout.",
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-3 text-sm" style={{ color: "var(--text)", fontFamily: "'Inter', sans-serif" }}>
                <span className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: "var(--blue)" }}>✓</span>
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section px-5 md:px-10" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="eyebrow eyebrow-center mb-5" style={{ color: "var(--coral)" }}>How It Works</p>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 4.2vw, 44px)", color: "var(--text)" }}>Our Process</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {steps.map((s) => (
              <div key={s.n} className="card-soft p-8 flex flex-col gap-4">
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "34px", color: "var(--blue)", lineHeight: 1 }}>{s.n}</p>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "16px", color: "var(--text)" }}>{s.title}</h3>
                <p className="text-sm" style={{ color: "var(--muted)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section px-5 md:px-10" style={{ backgroundColor: "var(--white)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="eyebrow eyebrow-center mb-5" style={{ color: "var(--coral)" }}>FAQ</p>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 4.2vw, 44px)", color: "var(--text)" }}>
              Your Questions Answered
            </h2>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="section-tight px-5 md:px-10 text-center" style={{ backgroundColor: "var(--blue)" }}>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "clamp(26px, 4vw, 42px)", color: "#fff", marginBottom: "14px" }}>
          Ready to fight your refusal?
        </h2>
        <p className="text-base mb-10 max-w-md mx-auto" style={{ color: "rgba(255,255,255,0.75)", fontWeight: 300 }}>
          Contact us today for a free, no-obligation assessment of your case. The sooner you act, the more options you have.
        </p>
        <Link href="/quote?service=visa" className="btn btn-primary">
          Get a Free Assessment
        </Link>
      </section>
    </div>
  );
}
