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
    desc: "Times Square, Central Park, the Brooklyn Bridge — New York is a city that never sleeps and never stops inspiring.",
    img: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=800&q=80",
    includes: ["Return flights", "Midtown hotel", "City sightseeing tour", "Broadway show", "Airport transfers"],
  },
];

export default function Packages() {
  return (
    <div>
      {/* Hero */}
      <section className="py-24 px-5 md:px-10 text-center" style={{ backgroundColor: "var(--blue)" }}>
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--yellow)", fontFamily: "'Poppins', sans-serif" }}>Travel Packages</p>
        <h1 className="font-extrabold text-white" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(36px, 6vw, 64px)", lineHeight: 1.15 }}>
          Where Will You Go?
        </h1>
        <p className="mt-5 text-base max-w-2xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.75)", fontFamily: "'Inter', sans-serif" }}>
          Hand-picked holiday packages covering beaches, culture, adventure, romance, and city breaks. All flights, hotels, and transfers included.
        </p>
      </section>

      {/* Filter hint */}
      <div className="max-w-6xl mx-auto px-5 md:px-10 pt-10 pb-2">
        <p className="text-sm" style={{ color: "var(--muted)", fontFamily: "'Inter', sans-serif" }}>
          Showing <strong style={{ color: "var(--text)" }}>6 packages</strong> — bespoke itineraries available on request.
        </p>
      </div>

      {/* Package grid */}
      <section className="py-10 px-5 md:px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {packages.map((p) => (
            <div key={p.name} className="rounded-2xl overflow-hidden flex flex-col"
              style={{ backgroundColor: "var(--white)", border: "1px solid var(--border)", boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}>
              {/* Image */}
              <div className="relative overflow-hidden" style={{ height: "210px" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                <span className="absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ backgroundColor: p.tagColor.bg, color: p.tagColor.color }}>{p.tag}</span>
                <span className="absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-full text-white"
                  style={{ backgroundColor: "rgba(0,0,0,0.55)" }}>{p.duration}</span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-3 flex-1">
                <div>
                  <p className="text-xs mb-1" style={{ color: "var(--muted)", fontFamily: "'Inter', sans-serif" }}>{p.location}</p>
                  <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "18px", color: "var(--text)" }}>{p.name}</h3>
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

                <div className="flex items-center justify-between mt-3 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                  <p className="font-bold" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "16px", color: "var(--blue)" }}>{p.price}</p>
                  <Link href="/quote?service=holidays"
                    className="px-5 py-2.5 rounded-full text-xs font-semibold transition-all hover:opacity-85"
                    style={{ backgroundColor: "var(--coral)", color: "#fff", textDecoration: "none", fontFamily: "'Poppins', sans-serif" }}>
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bespoke CTA */}
      <section className="mx-5 md:mx-10 my-16 rounded-3xl px-8 py-16 text-center" style={{ backgroundColor: "var(--blue)" }}>
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--yellow)", fontFamily: "'Poppins', sans-serif" }}>Bespoke Packages</p>
        <h2 className="font-extrabold text-white mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(24px, 4vw, 38px)" }}>
          Don&apos;t see what you&apos;re looking for?
        </h2>
        <p className="text-sm mb-8 max-w-md mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
          We build fully bespoke travel packages to any destination in the world. Tell us your dream trip and we will make it happen.
        </p>
        <Link href="/quote?service=holidays"
          className="inline-block px-10 py-4 rounded-full font-bold text-sm transition-all hover:opacity-90"
          style={{ backgroundColor: "var(--coral)", color: "#fff", textDecoration: "none", fontFamily: "'Poppins', sans-serif" }}>
          Request a Bespoke Package
        </Link>
      </section>
    </div>
  );
}
