import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";

const serviceDetails = [
  {
    id: "visa",
    title: "Visa Processing & Consultation",
    color: "var(--blue)",
    bg: "var(--sky)",
    paras: [
      "At Gladgate, our primary focus is to simplify the often intricate process of obtaining visas for your international travel. We have cultivated deep expertise in visa processing and consultation services to ensure that your journey is nothing short of exceptional. Our dedicated team is here to assist you every step of the way, streamlining the visa application procedure. Whether you're planning a holiday, a business trip, or any international travel, our services are designed to cater to your specific needs — making your travel arrangements as smooth and stress-free as possible.",
      "With Gladgate, you can trust that your travel plans are in capable hands. Our commitment to excellence shines through in our unwavering dedication to customer satisfaction. We believe that every traveller deserves personalised support, which is why we offer tailored visa solutions. Our experts ensure that you have all the necessary documents and requirements in place, leaving you with peace of mind and more time to focus on your upcoming adventure. Partner with us to embark on your journeys with confidence, knowing that we are your reliable companion for all your visa-related needs.",
    ],
  },
  {
    id: "study-abroad",
    title: "Study Abroad & Admissions",
    color: "var(--teal)",
    bg: "#E6FAF8",
    paras: [
      "Gladgate extends its services beyond conventional travel arrangements to offer a unique and specialist service: study abroad and admissions processing. With a commitment to facilitating seamless educational journeys, we specialise in securing admissions to prestigious institutions in Canada, the UK, Australia, and other coveted destinations worldwide. Our comprehensive approach is tailored to meet the diverse needs of students aspiring to study abroad.",
      "We recognise that the application process can be daunting. Therefore, we provide personalised guidance and support at every step — from selecting the right institution to completing the required paperwork and navigating the student visa process. Our experienced team ensures a hassle-free experience from start to finish.",
      "With deep knowledge of the global educational landscape and extensive networks with universities and schools worldwide, we are well-equipped to handle the complexities of any admission procedure and give your application the strongest possible chance of success.",
    ],
  },
  {
    id: "flights",
    title: "Flight Ticketing",
    color: "#7C3AED",
    bg: "#F5F0FF",
    paras: [
      "Gladgate extends its expertise beyond visa services to provide a comprehensive solution for all your travel needs. We take pride in offering top-notch flight ticketing services that simplify the process of booking your flights. With a keen understanding of the intricacies of air travel, our dedicated team ensures that your journey starts with convenience and efficiency. Whether you're planning a domestic getaway, an international adventure, or a business trip, we're here to assist you in finding the best flight options to suit your preferences and budget.",
      "Our commitment to delivering outstanding customer experiences remains unwavering. We believe that every traveller deserves a stress-free booking process, and our flight ticketing services are designed to do exactly that. We offer a wide array of flight choices across all major carriers — from securing the most competitive fares to assisting with changes or cancellations. Our team is dedicated to ensuring your travel arrangements are seamless. Choose Gladgate as your trusted partner for flight ticketing and embark on every journey with confidence and ease.",
    ],
  },
  {
    id: "holidays",
    title: "Holidays & Tours",
    color: "var(--coral)",
    bg: "#FFF0EC",
    paras: [
      "At Gladgate, we understand that travel is more than just reaching a destination — it's about the experiences and memories created along the way. That's why we go above and beyond to curate meticulously planned tour packages that showcase the very best each destination has to offer. Whether you're dreaming of exploring the historic landmarks of Europe, immersing yourself in the vibrant cultures of Asia, or embarking on a wildlife adventure in Africa, we have the perfect itinerary to fulfil your wanderlust.",
      "From arranging flights and accommodations to organising sightseeing tours, activities, and culinary experiences, we handle every aspect of your journey with meticulous attention to detail. With Gladgate as your trusted travel partner, you can relax and immerse yourself in the joy of exploration, knowing that every element of your trip has been carefully considered.",
      "We have the expertise and resources to turn your travel dreams into reality. Let us inspire you to discover the wonders of the world and create memories that will last a lifetime.",
    ],
  },
  {
    id: "insurance",
    title: "Travel Insurance",
    color: "var(--yellow)",
    bg: "#FFFBEB",
    paras: [
      "Gladgate is your comprehensive travel solutions provider, offering a wide range of services to enhance your travel experience. One of our key offerings is travel insurance, designed to provide you with genuine peace of mind during your journeys. Our travel insurance services are tailored to protect you against unforeseen events, ensuring that you can travel with confidence. Whether you're planning a family holiday, a solo adventure, or a business trip, our insurance options are here to safeguard your travel plans and provide you with the support you need when you need it most.",
      "We understand that unexpected situations can arise while travelling, and that's why we're committed to helping you mitigate risk at every turn. Our team is dedicated to guiding you through the process of selecting the right travel insurance coverage to suit your specific needs. From medical emergencies to trip cancellations, our comprehensive insurance options have you fully covered. Trust Gladgate as your reliable partner for travel insurance, ensuring that you can focus entirely on enjoying your journeys while we take care of your protection.",
    ],
  },
  {
    id: "hotels",
    title: "Hotel Reservations",
    color: "var(--teal)",
    bg: "#E6FAF8",
    paras: [
      "In addition to our full suite of travel services, Gladgate takes pride in offering specialist expertise in hotel reservations, enriching your travel experience with unrivalled convenience and choice. We deeply understand that your choice of accommodation can significantly influence your overall travel satisfaction. With this in mind, we have curated an extensive portfolio of hotels designed to cater to a wide range of preferences and budgets.",
      "At Gladgate, we recognise that every traveller deserves a comfortable and memorable stay, tailored to their specific needs. Whether you seek luxurious five-star resorts, cosy boutique hotels, budget-friendly accommodations, or anything in between, our portfolio has you covered. We aim to be your trusted travel partner — streamlining the entire planning process. With our expertise across visa processing, flight ticketing, and hotel reservations, you can entrust us to handle every intricate detail, allowing you to immerse yourself fully in the joy of your journey.",
    ],
  },
];

const faqs = [
  {
    q: "What documents do I need to apply for a visa?",
    a: [
      "A valid international passport with at least 6 months remaining before expiry",
      "Completed visa application form",
      "Passport-sized photographs to the destination country's specification",
      "Proof of travel (flight itinerary or booking confirmation)",
      "Proof of accommodation (hotel booking or host letter)",
      "Travel insurance covering the duration of your stay",
    ],
  },
  {
    q: "Do I need to provide a bank statement?",
    a: "Yes — we typically require 6 months of bank statements. Don't worry if the balance isn't high. What matters is a clear financial history. If funds are lower than expected, we can demonstrate alternative means such as a sponsor, a recently liquidated investment, or other legitimate sources of funding. Our consultants will advise you on how best to present your financial position.",
  },
  {
    q: "What other essential documents may be required?",
    a: [
      "Employment letter or proof of self-employment",
      "6 months of payslips",
      "Work ID card",
      "CAC or business registration documents (if self-employed)",
      "Marriage certificate (if applicable)",
      "Birth certificates for children included in the application",
    ],
  },
  {
    q: "What if I don't have all the required documents?",
    a: "Rest assured — we understand that each individual's circumstances vary, and there is almost always an alternative way to present your situation. Our team of professionals is dedicated to navigating documentation challenges and tailoring the process to your specific needs. When you engage our services, we will listen carefully, assess your documents, and identify exactly what is needed based on your personal circumstances. Your successful application is our priority.",
  },
  {
    q: "Do you guarantee visa approval?",
    a: "While we cannot guarantee visa approval — no consultant ethically can — our track record stems from our meticulous attention to detail and thorough case preparation. In the unfortunate event of a refusal, we are here to assist at no additional service charge. We will carefully analyse the refusal reasons, provide guidance on re-application, and advise on how to strengthen your next submission. A refusal does not reflect negligence on our part; embassies occasionally implement restrictive measures without specifying reasons.",
  },
  {
    q: "How do you approach UK visa eligibility?",
    a: "At Gladgate, we prioritise transparency and integrity in everything we do. If a client is found to be ineligible for a UK visa, we will not proceed with the application. However, our commitment to helping clients remains unwavering — we will provide detailed guidance on the steps and requirements needed to become eligible. It is essential to note that not everyone will meet the current eligibility criteria, and even for those who do, a visa is never guaranteed. We will always give you honest, accurate advice so you can make fully informed decisions.",
  },
];

export default function Services() {
  return (
    <div>
      {/* Page header */}
      <section className="py-20 px-5 md:px-10 text-center" style={{ backgroundColor: "var(--blue)" }}>
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--yellow)", fontFamily: "'Poppins', sans-serif" }}>What We Do</p>
        <h1 className="font-extrabold text-white" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(36px, 6vw, 64px)" }}>
          Our Services
        </h1>
        <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.75)", fontFamily: "'Inter', sans-serif" }}>
          What We Offer for You
        </p>
      </section>

      {/* Detailed service blocks */}
      <div className="max-w-5xl mx-auto px-5 md:px-10 py-16 flex flex-col gap-6">
        {serviceDetails.map((s, i) => (
          <div key={s.id} id={s.id} className="rounded-2xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
            {/* Colour header bar */}
            <div className="px-8 py-6 flex items-center gap-4" style={{ backgroundColor: s.bg, borderBottom: "1px solid var(--border)" }}>
              <div className="w-1 h-10 rounded-full flex-shrink-0" style={{ backgroundColor: s.color }} />
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest mb-0.5" style={{ color: s.color, fontFamily: "'Poppins', sans-serif" }}>
                  Service {["I","II","III","IV","V","VI"][i]}
                </p>
                <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(20px, 3vw, 26px)", color: "var(--text)" }}>
                  {s.title}
                </h2>
              </div>
            </div>
            {/* Body paragraphs */}
            <div className="px-8 py-7 flex flex-col gap-4" style={{ backgroundColor: "var(--white)" }}>
              {s.paras.map((p, pi) => (
                <p key={pi} className="text-sm leading-relaxed" style={{ color: "var(--muted)", fontFamily: "'Inter', sans-serif" }}>{p}</p>
              ))}
              <div className="mt-2">
                <Link href={`/quote?service=${s.id}`}
                  className="inline-block px-7 py-3 rounded-full text-sm font-semibold transition-all hover:opacity-85"
                  style={{ backgroundColor: s.color, color: s.color === "var(--yellow)" ? "var(--text)" : "#fff", textDecoration: "none", fontFamily: "'Poppins', sans-serif" }}>
                  Get a Quote →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <section className="py-16 px-5 md:px-10" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--coral)", fontFamily: "'Poppins', sans-serif" }}>FAQ</p>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(26px, 4vw, 38px)", color: "var(--text)" }}>
              Frequently Asked Questions
            </h2>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-5 md:px-10 text-center" style={{ backgroundColor: "var(--white)" }}>
        <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(24px, 4vw, 38px)", color: "var(--text)", marginBottom: "12px" }}>
          What type of challenge are you facing? Let&apos;s talk.
        </h2>
        <a href="mailto:hello@gladgateconsulting.com" className="block text-sm mb-8"
          style={{ color: "var(--blue)", fontFamily: "'Inter', sans-serif", textDecoration: "none" }}>
          hello@gladgateconsulting.com
        </a>
        <Link href="/quote"
          className="inline-block px-10 py-4 rounded-full font-bold text-sm transition-all hover:opacity-90"
          style={{ backgroundColor: "var(--coral)", color: "#fff", textDecoration: "none", fontFamily: "'Poppins', sans-serif" }}>
          Get a Free Quote
        </Link>
      </section>
    </div>
  );
}
