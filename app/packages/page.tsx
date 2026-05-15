import Link from "next/link";

const packages = [
  {
    tag: "Beach",
    tagColor: { bg: "#DBEAFE", color: "#1D4ED8" },
    name: "Maldives Escape",
    location: "Maldives · Indian Ocean",
    duration: "7 nights",
    price: "From £1,850 pp",
    desc: "Overwater bungalows, pristine white sand, and crystal-clear lagoons. The ultimate beach escape, fully planned and tailored to you.",
    img: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=800&q=80",
    includes: ["Return flights", "Overwater villa", "Airport transfers", "Daily breakfast", "Snorkelling excursion"],
  },
  {
    tag: "Culture",
    tagColor: { bg: "#F3E8FF", color: "#7C3AED" },
    name: "Tokyo Discovery",
    location: "Japan · Asia",
    duration: "10 nights",
    price: "From £2,100 pp",
    desc: "Ancient temples meet neon-lit streets. Explore Tokyo, Kyoto, and Osaka on a fully guided cultural immersion.",
    img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80",
    includes: ["Return flights", "4-star hotels", "JR Rail Pass", "Guided city tours", "Airport transfers"],
  },
  {
    tag: "Luxury",
    tagColor: { bg: "#FEF3C7", color: "#D97706" },
    name: "Dubai Luxury Break",
    location: "UAE · Middle East",
    duration: "5 nights",
    price: "From £1,450 pp",
    desc: "Desert safaris, rooftop dining, and world-class shopping. The ultimate luxury city break in the heart of Dubai.",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    includes: ["Return flights", "5-star hotel", "Desert safari", "Burj Khalifa visit", "Airport transfers"],
  },
  {
    tag: "Romance",
    tagColor: { bg: "#FFE4E8", color: "#E11D48" },
    name: "Santorini Retreat",
    location: "Greece · Europe",
    duration: "6 nights",
    price: "From £1,650 pp",
    desc: "Sunset caldera views, whitewashed cliffs, and Aegean Sea dining. Perfect for honeymoons and romantic getaways.",
    img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
    includes: ["Return flights", "Boutique hotel", "Wine tasting tour", "Sunset cruise", "Airport transfers"],
  },
  {
    tag: "Adventure",
    tagColor: { bg: "#DCFCE7", color: "#16A34A" },
    name: "Bali Adventure",
    location: "Indonesia · Asia",
    duration: "9 nights",
    price: "From £1,200 pp",
    desc: "Lush rice terraces, sacred temples, world-class surf, and vibrant nightlife. Bali has something for every kind of adventurer.",
    img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    includes: ["Return flights", "Villa accommodation", "Temple tours", "Surfing lesson", "Airport transfers"],
  },
  {
    tag: "City Break",
    tagColor: { bg: "#FFE4D6", color: "#C2410C" },
    name: "New York City Break",
    location: "USA · North America",
    duration: "5 nights",
    price: "From £1,350 pp",
    desc: "Times Square, Central Park, the Brooklyn Bridge, New York is a city that never sleeps and never stops inspiring.",
    img: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=800&q=80",
    includes: ["Return flights", "Midtown hotel", "City sightseeing tour", "Broadway show", "Airport transfers"],
  },
];

export default function Packages() {
  return (
    <div>
      {/* Hero */}
      <section className="page-banner px-5 md:px-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="page-banner__img" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80" alt="" />
        <div className="page-banner__veil" />
        <div className="page-banner__inner reveal max-w-6xl mx-auto">
          <p className="eyebrow mb-6" style={{ color: "var(--yellow)" }}>Travel Packages</p>
          <h1 className="text-white" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "clamp(40px, 6.4vw, 72px)", lineHeight: 1.08 }}>
            Where Will You Go?
          </h1>
          <p className="mt-5 text-lg max-w-2xl" style={{ color: "rgba(255,255,255,0.78)", fontFamily: "'Inter', sans-serif", fontWeight: 300, lineHeight: 1.8 }}>
            Hand-picked holiday packages covering beaches, culture, adventure, romance, and city breaks. All flights, hotels, and transfers included.
          </p>
        </div>
      </section>

      {/* Filter hint */}
      <div className="max-w-6xl mx-auto px-5 md:px-10 pt-16 pb-2">
        <p className="text-sm" style={{ color: "var(--muted)", fontFamily: "'Inter', sans-serif" }}>
          Showing <strong style={{ color: "var(--text)" }}>6 packages</strong>, bespoke itineraries available on request.
        </p>
      </div>

      {/* Package grid */}
      <section className="pt-10 pb-4 px-5 md:px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((p) => (
            <div key={p.name} className="card-soft overflow-hidden flex flex-col">
              {/* Image */}
              <div className="relative overflow-hidden" style={{ height: "220px" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                <span className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ backgroundColor: p.tagColor.bg, color: p.tagColor.color }}>{p.tag}</span>
                <span className="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full text-white"
                  style={{ backgroundColor: "rgba(8,15,30,0.55)", backdropFilter: "blur(4px)" }}>{p.duration}</span>
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col gap-3 flex-1">
                <div>
                  <p className="text-xs mb-1" style={{ color: "var(--muted)", fontFamily: "'Inter', sans-serif" }}>{p.location}</p>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "18px", color: "var(--text)" }}>{p.name}</h3>
                </div>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--muted)" }}>{p.desc}</p>

                {/* Includes */}
                <ul className="flex flex-col gap-1.5">
                  {p.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs" style={{ color: "var(--text)" }}>
                      <span style={{ color: "var(--blue)", fontWeight: 700 }}>✓</span> {item}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between mt-3 pt-5" style={{ borderTop: "1px solid rgba(15,23,42,0.08)" }}>
                  <p className="font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "16px", color: "var(--blue)" }}>{p.price}</p>
                  <Link href="/quote?service=holidays"
                    className="px-6 py-3 rounded-full text-xs font-semibold transition-all hover:-translate-y-0.5"
                    style={{ backgroundColor: "var(--coral)", color: "#fff", textDecoration: "none", fontFamily: "'Space Grotesk', sans-serif", boxShadow: "0 12px 24px -12px rgba(255,92,53,0.6)" }}>
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bespoke CTA */}
      <section className="mx-5 md:mx-10 my-24 px-8 py-20 text-center" style={{ backgroundColor: "var(--blue)", borderRadius: "var(--r-lg)" }}>
        <p className="eyebrow eyebrow-center mb-6" style={{ color: "var(--yellow)" }}>Bespoke Packages</p>
        <h2 className="font-extrabold text-white mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(26px, 4vw, 44px)" }}>
          Don&apos;t see what you&apos;re looking for?
        </h2>
        <p className="text-base mb-10 max-w-md mx-auto" style={{ color: "rgba(255,255,255,0.75)", fontWeight: 300, lineHeight: 1.8 }}>
          We build fully bespoke travel packages to any destination in the world. Tell us your dream trip and we will make it happen.
        </p>
        <Link href="/quote?service=holidays" className="btn btn-primary">
          Request a Bespoke Package
        </Link>
      </section>
    </div>
  );
}
