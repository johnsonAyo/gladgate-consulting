import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";
import StatsCounter from "@/components/StatsCounter";
import NewsletterForm from "@/components/NewsletterForm";

const services = [
  {
    mark: "01",
    title: "Study Abroad",
    desc: "University shortlisting, application documents, visa files, and arrival planning handled with one clear timeline.",
    href: "/services#study-abroad",
  },
  {
    mark: "02",
    title: "Visa Processing",
    desc: "A careful application review, evidence checklist, and submission plan built around your travel purpose.",
    href: "/services#visa",
  },
  {
    mark: "03",
    title: "Holidays & Tours",
    desc: "Tailored escapes, family trips, safaris, and city breaks planned around budget, dates, and comfort.",
    href: "/services#holidays",
  },
  {
    mark: "04",
    title: "Flight Tickets",
    desc: "Route options, fare comparison, baggage guidance, and booking support across economy to first class.",
    href: "/services#flights",
  },
];

const assurances = [
  { title: "A named consultant", desc: "You always know who is handling your file and what the next step is." },
  { title: "Documents checked twice", desc: "Applications are reviewed for gaps before anything is submitted." },
  { title: "Practical travel support", desc: "Flights, hotels, insurance, and itinerary details stay connected." },
];

const testimonials = [
  { title: "Stress-free from start to finish", body: "Gladgate found better flight options than I could find myself and made the whole booking feel simple.", name: "Sarah O." },
  { title: "Peace of mind abroad", body: "Their insurance and trip guidance meant I knew what was covered before I travelled. That clarity mattered.", name: "James A." },
  { title: "Visa approved first time", body: "I was overwhelmed by the paperwork. Their checklist and review made the application feel manageable.", name: "Chidi B." },
  { title: "Perfect stay every time", body: "The hotel recommendations were thoughtful, reliable, and matched the kind of trip we actually wanted.", name: "Funke L." },
];

const airlines = ["British Airways", "Emirates", "Qatar Airways", "Lufthansa", "Air France", "Turkish Airlines", "Virgin Atlantic"];

const destinations = [
  { name: "Santorini", country: "Greece", img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=900&q=80", tag: "Romance" },
  { name: "Dubai", country: "UAE", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80", tag: "Luxury" },
  { name: "Maldives", country: "Indian Ocean", img: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=900&q=80", tag: "Beach" },
  { name: "Paris", country: "France", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=80", tag: "Culture" },
  { name: "Bali", country: "Indonesia", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80", tag: "Adventure" },
  { name: "New York", country: "USA", img: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=900&q=80", tag: "City break" },
];

export default function Home() {
  return (
    <>
      <HeroCarousel />

      <section className="section warm-band px-5 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="reveal">
            <p className="eyebrow mb-5">Travel consultancy</p>
            <h2 className="display-sm max-w-xl">Journeys planned with calm, detail, and proper follow through.</h2>
          </div>
          <div className="reveal">
            <p className="lead max-w-2xl">
              Gladgate is a UK travel consultancy for travellers who want the paperwork, timing, and booking details handled by people who do this every day. We support study plans, visa applications, holidays, flights, hotel reservations, and travel insurance with one joined-up service.
            </p>
            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              {assurances.map((item) => (
                <div key={item.title} className="assurance-tile">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section px-5 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="section-heading reveal">
            <p className="eyebrow">Core services</p>
            <h2 className="display-sm">Choose the support your next trip needs.</h2>
            <p className="lead">Every enquiry starts with a short consultation, then moves into a clear action plan with documents, costs, and timing set out before you commit.</p>
          </div>
          <div className="service-rail reveal-group">
            {services.map((service) => (
              <Link key={service.title} href={service.href} className="service-row">
                <span className="service-row__mark">{service.mark}</span>
                <span className="service-row__body">
                  <strong>{service.title}</strong>
                  <span>{service.desc}</span>
                </span>
                <span className="service-row__cta">Explore</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <StatsCounter />

      <section className="visa-panel">
        <div className="visa-panel__media" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1800&q=82" alt="" />
        </div>
        <div className="visa-panel__content reveal">
          <p className="eyebrow">Visa refusal resolution</p>
          <h2 className="display-md">Recently refused a UK visa?</h2>
          <p>
            If your refusal was issued within the last three months, our specialist team can review the decision, identify possible grounds to challenge it, and explain the most practical route forward.
          </p>
          <Link href="/visa-refusal" className="btn btn-light">Review my refusal</Link>
        </div>
      </section>

      <section className="section warm-band px-5 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="section-heading reveal">
            <p className="eyebrow">Client notes</p>
            <h2 className="display-sm">Real reassurance, before and after booking.</h2>
          </div>
          <div className="testimonial-grid reveal-group">
            {testimonials.map((item) => (
              <article key={item.name} className="testimonial-card">
                <p className="rating">Rated 5/5</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <span>{item.name}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section px-5 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="destination-head reveal">
            <div>
              <p className="eyebrow">Travel packages</p>
              <h2 className="display-sm">Popular routes, shaped around you.</h2>
            </div>
            <Link href="/packages" className="text-link">See all destinations</Link>
          </div>
          <div className="destination-grid reveal-group">
            {destinations.map((item, index) => (
              <Link key={item.name} href="/quote?service=holidays" className={`destination-card destination-card--${index + 1}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.img} alt={`${item.name}, ${item.country}`} />
                <span>{item.tag}</span>
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.country}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight partner-band px-5 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="partner-band__intro reveal">
            <p className="eyebrow">Travel network</p>
            <h2>Airlines and accreditations travellers recognise.</h2>
            <p>We work across major carriers and keep protection standards visible, so clients can make travel decisions with confidence.</p>
          </div>
          <div className="airline-strip reveal-group">
            {airlines.map((airline) => <span key={airline}>{airline}</span>)}
          </div>
          <div className="credential-row">
            {["IATA Accredited", "ABTA Member", "ATOL Protected"].map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </section>

      <section className="newsletter-panel px-5 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="reveal">
            <p className="eyebrow">Travel notes</p>
            <h2 className="display-sm">Get visa tips and fare alerts without the noise.</h2>
          </div>
          <div className="reveal">
            <NewsletterForm />
          </div>
        </div>
      </section>

      <section className="section-tight final-cta px-5 md:px-10">
        <div className="mx-auto max-w-3xl text-center reveal">
          <p className="eyebrow">Start here</p>
          <h2 className="display-sm">Tell us where you want to go, and we will map the next step.</h2>
          <a href="mailto:hello@gladgateconsulting.com">hello@gladgateconsulting.com</a>
          <div className="mt-8">
            <Link href="/quote" className="btn btn-primary">Get a free quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
