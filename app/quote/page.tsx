"use client";

import { useState, useEffect, useMemo } from "react";

type Service = "study-abroad" | "visa" | "holidays" | "flights" | "";
type Status = "idle" | "sending" | "success" | "error";

const SERVICES = [
  { id: "study-abroad" as Service, label: "Study Abroad" },
  { id: "visa"         as Service, label: "Visa Application" },
  { id: "holidays"     as Service, label: "Holidays & Tours" },
  { id: "flights"      as Service, label: "Flight Tickets" },
];

const STUDY_TIERS   = { Starter: 225, Standard: 550, "Full Service": 1150 };
const VISA_TIERS    = { "Self-Serve": 113, Standard: 350, "Complex / Appeal": 900 };
const HOLIDAY_TIERS = { Budget: 125, Standard: 250, Bespoke: 400 };
const FLIGHT_FEES   = { Economy: 38, "Business / First": 113, "Multi-city / Group": 175 };

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "13px 16px", fontSize: "14px",
  backgroundColor: "#fff", border: "1px solid var(--border)",
  borderRadius: "10px", color: "var(--text)", outline: "none",
  fontFamily: "'Inter', sans-serif",
};

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label style={{ display: "block", fontSize: "12px", fontWeight: 600, marginBottom: "6px", color: "var(--text)", fontFamily: "'Poppins', sans-serif" }}>
        {label}
      </label>
      {children}
    </div>
  );
}

function Sel({ value, onChange, children }: { value: string; onChange: (v: string) => void; children: React.ReactNode }) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}
      style={{ ...inputStyle, appearance: "none", backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23888' strokeWidth='1.2' fill='none'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center", paddingRight: "36px" }}>
      {children}
    </select>
  );
}

function TierPicker({ tiers, selected, onSelect }: { tiers: Record<string, number>; selected: string; onSelect: (t: string) => void }) {
  return (
    <div className="grid gap-3" style={{ gridTemplateColumns: `repeat(${Math.min(Object.keys(tiers).length, 3)}, 1fr)` }}>
      {Object.entries(tiers).map(([tier, price]) => (
        <button key={tier} type="button" onClick={() => onSelect(tier === selected ? "" : tier)}
          className="p-4 text-left transition-all rounded-xl"
          style={{ border: `2px solid ${selected === tier ? "var(--blue)" : "var(--border)"}`, backgroundColor: selected === tier ? "var(--sky)" : "#fff" }}>
          <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: selected === tier ? "var(--blue)" : "var(--muted)", fontFamily: "'Poppins', sans-serif" }}>{tier}</p>
          <p className="font-bold" style={{ fontFamily: "'Poppins', sans-serif", color: "var(--text)", fontSize: "15px" }}>from £{price}</p>
        </button>
      ))}
    </div>
  );
}

export default function Quote() {
  const [service, setService] = useState<Service>("");
  const [status, setStatus] = useState<Status>("idle");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  const [sCountry, setSCountry] = useState(""); const [sLevel, setSLevel] = useState(""); const [sField, setSField] = useState("");
  const [sIntake, setSIntake] = useState(""); const [sUnis, setSUnis] = useState("1"); const [sIELTS, setSIELTS] = useState("");
  const [sTier, setSTier] = useState("");

  const [vType, setVType] = useState(""); const [vCountry, setVCountry] = useState(""); const [vNat, setVNat] = useState("");
  const [vApps, setVApps] = useState("1"); const [vDate, setVDate] = useState(""); const [vRefusal, setVRefusal] = useState("No");
  const [vTier, setVTier] = useState("");

  const [hDest, setHDest] = useState(""); const [hFrom, setHFrom] = useState(""); const [hDate1, setHDate1] = useState("");
  const [hDate2, setHDate2] = useState(""); const [hAdults, setHAdults] = useState("2"); const [hChildren, setHChildren] = useState("0");
  const [hStyle, setHStyle] = useState(""); const [hAccom, setHAccom] = useState(""); const [hTier, setHTier] = useState("");

  const [fType, setFType] = useState("Return"); const [fFrom, setFFFrom] = useState(""); const [fTo, setFTo] = useState("");
  const [fDate, setFDate] = useState(""); const [fReturn, setFReturn] = useState(""); const [fAdults, setFAdults] = useState("1");
  const [fChildren, setFChildren] = useState("0"); const [fInfants, setFInfants] = useState("0"); const [fClass, setFClass] = useState("");
  const [fTier, setFTier] = useState("");

  useEffect(() => {
    const p = new URLSearchParams(window.location.search).get("service") as Service | null;
    if (p) setService(p);
  }, []);

  const estimate = useMemo(() => {
    if (service === "study-abroad" && sTier) {
      const base = STUDY_TIERS[sTier as keyof typeof STUDY_TIERS] ?? 0;
      const add = Math.max(0, parseInt(sUnis) - 3) * 60;
      return { min: base, max: base + add };
    }
    if (service === "visa" && vTier) {
      const base = VISA_TIERS[vTier as keyof typeof VISA_TIERS] ?? 0;
      const add = Math.max(0, parseInt(vApps) - 1) * 80;
      return { min: base, max: base + add };
    }
    if (service === "holidays" && hTier) {
      const base = HOLIDAY_TIERS[hTier as keyof typeof HOLIDAY_TIERS] ?? 0;
      return { min: base, max: base + 150 };
    }
    if (service === "flights" && fTier) {
      const fee = FLIGHT_FEES[fTier as keyof typeof FLIGHT_FEES] ?? 0;
      const pax = parseInt(fAdults) + parseInt(fChildren);
      return { min: fee * pax, max: fee * pax + 50 };
    }
    return null;
  }, [service, sTier, sUnis, vTier, vApps, hTier, fTier, fAdults, fChildren]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    let details = "";
    if (service === "study-abroad") details = `Study Abroad — ${sCountry} | ${sLevel} | ${sField} | Intake: ${sIntake} | Unis: ${sUnis} | IELTS: ${sIELTS || "N/A"} | Tier: ${sTier}`;
    if (service === "visa")         details = `Visa — ${vType} to ${vCountry} | Nationality: ${vNat} | Applicants: ${vApps} | Date: ${vDate} | Refusal: ${vRefusal} | Tier: ${vTier}`;
    if (service === "holidays")     details = `Holidays — ${hDest} from ${hFrom} | ${hDate1}–${hDate2} | ${hAdults}A ${hChildren}C | ${hStyle} | ${hAccom} | Tier: ${hTier}`;
    if (service === "flights")      details = `Flights — ${fType}: ${fFrom} → ${fTo} | ${fDate}${fReturn ? `/` + fReturn : ""} | ${fAdults}A ${fChildren}C ${fInfants}I | ${fClass} | Tier: ${fTier}`;
    const fd = new FormData();
    fd.append("name", name); fd.append("email", email); fd.append("phone", phone);
    fd.append("service", service); fd.append("details", details);
    fd.append("estimate", estimate ? `£${estimate.min} – £${estimate.max}` : "N/A");
    fd.append("notes", notes);
    const res = await fetch("https://formspree.io/f/xzdolroo", { method: "POST", body: fd, headers: { Accept: "application/json" } });
    setStatus(res.ok ? "success" : "error");
  }

  if (status === "success") {
    return (
      <div className="max-w-lg mx-auto px-6 py-32 text-center">
        <h2 className="font-extrabold mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "32px", color: "var(--text)" }}>
          Enquiry Received!
        </h2>
        <p className="text-base leading-relaxed mb-2" style={{ color: "var(--muted)" }}>
          Thanks, {name}! A Gladgate consultant will review your enquiry and be in touch within 24 hours.
        </p>
        <p className="text-sm font-semibold" style={{ color: "var(--blue)", fontFamily: "'Poppins', sans-serif" }}>
          Your dream trip is one step closer.
        </p>
      </div>
    );
  }

  const sectionHead: React.CSSProperties = {
    fontSize: "13px", fontWeight: 700, fontFamily: "'Poppins', sans-serif",
    color: "var(--blue)", paddingBottom: "10px",
    borderBottom: "2px solid var(--sky)", marginBottom: "4px",
  };

  return (
    <div>
      {/* Hero */}
      <section className="py-16 px-5 md:px-10 text-center" style={{ backgroundColor: "var(--blue)" }}>
        <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--yellow)", fontFamily: "'Poppins', sans-serif" }}>
          No Obligation · Free Quote
        </p>
        <h1 className="font-extrabold text-white" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(32px, 5vw, 56px)" }}>
          Get Your Personalised Quote
        </h1>
        <p className="mt-4 text-sm max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
          Pick your service, fill in the details, and we&apos;ll send a tailored estimate within 24 hours.
        </p>
      </section>

      <div className="max-w-3xl mx-auto px-5 md:px-10 py-14">
        {/* Service selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {SERVICES.map((s) => (
            <button key={s.id} type="button" onClick={() => setService(s.id)}
              className="flex flex-col items-center gap-2 p-5 rounded-2xl text-center transition-all hover:shadow-md"
              style={{ border: `2px solid ${service === s.id ? "var(--blue)" : "var(--border)"}`, backgroundColor: service === s.id ? "var(--sky)" : "#fff" }}>
              <span className="text-xs font-semibold leading-snug" style={{ color: service === s.id ? "var(--blue)" : "var(--muted)", fontFamily: "'Poppins', sans-serif" }}>{s.label}</span>
            </button>
          ))}
        </div>

        {!service && (
          <p className="text-center text-sm py-10 rounded-2xl" style={{ color: "var(--muted)", backgroundColor: "#fff", border: "1px solid var(--border)" }}>
            Select a service above to continue
          </p>
        )}

        {service && (
          <form onSubmit={handleSubmit} className="flex flex-col gap-10">
            {/* Contact */}
            <div className="rounded-2xl p-6 flex flex-col gap-5" style={{ backgroundColor: "#fff", border: "1px solid var(--border)" }}>
              <p style={sectionHead}>Your Details</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Field label="Full Name *"><input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" style={inputStyle} /></Field>
                <Field label="Email Address *"><input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" style={inputStyle} /></Field>
              </div>
              <Field label="Phone Number"><input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+44 7700 000 000" style={inputStyle} /></Field>
            </div>

            {/* Study Abroad */}
            {service === "study-abroad" && (
              <div className="rounded-2xl p-6 flex flex-col gap-5" style={{ backgroundColor: "#fff", border: "1px solid var(--border)" }}>
                <p style={sectionHead}>Study Abroad Details</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field label="Destination Country *">
                    <Sel value={sCountry} onChange={setSCountry}>
                      <option value="">Select country</option>
                      {["United Kingdom","Canada","Australia","United States","Germany","Netherlands","Ireland","France","New Zealand","Singapore"].map(c => <option key={c}>{c}</option>)}
                    </Sel>
                  </Field>
                  <Field label="Level of Study *">
                    <Sel value={sLevel} onChange={setSLevel}>
                      <option value="">Select level</option>
                      {["Undergraduate","Postgraduate (Masters)","PhD / Doctorate","Language Course","Foundation / Pre-sessional"].map(l => <option key={l}>{l}</option>)}
                    </Sel>
                  </Field>
                  <Field label="Field / Course"><input value={sField} onChange={(e) => setSField(e.target.value)} placeholder="e.g. Computer Science, MBA" style={inputStyle} /></Field>
                  <Field label="Preferred Intake">
                    <Sel value={sIntake} onChange={setSIntake}>
                      <option value="">Select intake</option>
                      {["September 2025","January 2026","September 2026","January 2027","Flexible"].map(i => <option key={i}>{i}</option>)}
                    </Sel>
                  </Field>
                  <Field label="Universities to Apply To">
                    <Sel value={sUnis} onChange={setSUnis}>{["1","2","3","4","5","6","7","8","9","10"].map(n => <option key={n}>{n}</option>)}</Sel>
                  </Field>
                  <Field label="IELTS / English Score"><input value={sIELTS} onChange={(e) => setSIELTS(e.target.value)} placeholder="e.g. 6.5 (or Not yet taken)" style={inputStyle} /></Field>
                </div>
                <Field label="Service Tier *"><TierPicker tiers={STUDY_TIERS} selected={sTier} onSelect={setSTier} /></Field>
              </div>
            )}

            {/* Visa */}
            {service === "visa" && (
              <div className="rounded-2xl p-6 flex flex-col gap-5" style={{ backgroundColor: "#fff", border: "1px solid var(--border)" }}>
                <p style={sectionHead}>Visa Details</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field label="Visa Type *">
                    <Sel value={vType} onChange={setVType}>
                      <option value="">Select type</option>
                      {["Tourist / Visitor","Student","Work / Skilled Worker","Business","Family / Spouse","Transit","Other"].map(v => <option key={v}>{v}</option>)}
                    </Sel>
                  </Field>
                  <Field label="Destination Country *">
                    <Sel value={vCountry} onChange={setVCountry}>
                      <option value="">Select country</option>
                      {["United Kingdom","United States","Canada","Australia","Schengen (Europe)","UAE / Dubai","New Zealand","Other"].map(c => <option key={c}>{c}</option>)}
                    </Sel>
                  </Field>
                  <Field label="Your Nationality"><input value={vNat} onChange={(e) => setVNat(e.target.value)} placeholder="e.g. Nigerian" style={inputStyle} /></Field>
                  <Field label="Intended Travel Date"><input type="date" value={vDate} onChange={(e) => setVDate(e.target.value)} style={inputStyle} /></Field>
                  <Field label="Number of Applicants">
                    <Sel value={vApps} onChange={setVApps}>{["1","2","3","4","5","6+"].map(n => <option key={n}>{n}</option>)}</Sel>
                  </Field>
                  <Field label="Prior Visa Refusal?">
                    <Sel value={vRefusal} onChange={setVRefusal}>
                      <option>No</option>
                      <option>Yes — same country</option>
                      <option>Yes — different country</option>
                    </Sel>
                  </Field>
                </div>
                <Field label="Service Tier *"><TierPicker tiers={VISA_TIERS} selected={vTier} onSelect={setVTier} /></Field>
              </div>
            )}

            {/* Holidays */}
            {service === "holidays" && (
              <div className="rounded-2xl p-6 flex flex-col gap-5" style={{ backgroundColor: "#fff", border: "1px solid var(--border)" }}>
                <p style={sectionHead}>Holiday Details</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field label="Destination *"><input value={hDest} onChange={(e) => setHDest(e.target.value)} placeholder="e.g. Dubai, Maldives, Japan" style={inputStyle} /></Field>
                  <Field label="Departing From *"><input value={hFrom} onChange={(e) => setHFrom(e.target.value)} placeholder="e.g. London Heathrow" style={inputStyle} /></Field>
                  <Field label="Departure Date"><input type="date" value={hDate1} onChange={(e) => setHDate1(e.target.value)} style={inputStyle} /></Field>
                  <Field label="Return Date"><input type="date" value={hDate2} onChange={(e) => setHDate2(e.target.value)} style={inputStyle} /></Field>
                  <Field label="Adults"><Sel value={hAdults} onChange={setHAdults}>{["1","2","3","4","5","6","7","8+"].map(n => <option key={n}>{n}</option>)}</Sel></Field>
                  <Field label="Children (under 12)"><Sel value={hChildren} onChange={setHChildren}>{["0","1","2","3","4","5+"].map(n => <option key={n}>{n}</option>)}</Sel></Field>
                  <Field label="Holiday Style">
                    <Sel value={hStyle} onChange={setHStyle}>
                      <option value="">Select style</option>
                      {["Beach & Relaxation","Adventure","Cultural & Heritage","City Break","Safari","Luxury","Family","Honeymoon"].map(s => <option key={s}>{s}</option>)}
                    </Sel>
                  </Field>
                  <Field label="Accommodation">
                    <Sel value={hAccom} onChange={setHAccom}>
                      <option value="">Select preference</option>
                      {["Budget (3★)","Mid-range (4★)","Luxury (5★)","All-inclusive","Villa / Private","Flexible"].map(a => <option key={a}>{a}</option>)}
                    </Sel>
                  </Field>
                </div>
                <Field label="Package Tier *"><TierPicker tiers={HOLIDAY_TIERS} selected={hTier} onSelect={setHTier} /></Field>
              </div>
            )}

            {/* Flights */}
            {service === "flights" && (
              <div className="rounded-2xl p-6 flex flex-col gap-5" style={{ backgroundColor: "#fff", border: "1px solid var(--border)" }}>
                <p style={sectionHead}>Flight Details</p>
                <Field label="Trip Type *">
                  <div className="flex gap-2">
                    {["One-way","Return","Multi-city"].map(t => (
                      <button key={t} type="button" onClick={() => setFType(t)}
                        className="flex-1 py-3 text-xs font-semibold rounded-xl transition-all"
                        style={{ border: "2px solid", borderColor: fType === t ? "var(--blue)" : "var(--border)", backgroundColor: fType === t ? "var(--sky)" : "transparent", color: fType === t ? "var(--blue)" : "var(--muted)", fontFamily: "'Poppins', sans-serif" }}>
                        {t}
                      </button>
                    ))}
                  </div>
                </Field>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field label="From *"><input value={fFrom} onChange={(e) => setFFFrom(e.target.value)} placeholder="e.g. London Heathrow (LHR)" style={inputStyle} /></Field>
                  <Field label="To *"><input value={fTo} onChange={(e) => setFTo(e.target.value)} placeholder="e.g. Lagos (LOS)" style={inputStyle} /></Field>
                  <Field label="Departure Date *"><input type="date" value={fDate} onChange={(e) => setFDate(e.target.value)} style={inputStyle} /></Field>
                  {fType === "Return" && <Field label="Return Date"><input type="date" value={fReturn} onChange={(e) => setFReturn(e.target.value)} style={inputStyle} /></Field>}
                  <Field label="Adults"><Sel value={fAdults} onChange={setFAdults}>{["1","2","3","4","5","6","7","8","9+"].map(n => <option key={n}>{n}</option>)}</Sel></Field>
                  <Field label="Children (2–11)"><Sel value={fChildren} onChange={setFChildren}>{["0","1","2","3","4","5+"].map(n => <option key={n}>{n}</option>)}</Sel></Field>
                  <Field label="Infants (under 2)"><Sel value={fInfants} onChange={setFInfants}>{["0","1","2","3+"].map(n => <option key={n}>{n}</option>)}</Sel></Field>
                  <Field label="Cabin Class *">
                    <Sel value={fClass} onChange={setFClass}>
                      <option value="">Select class</option>
                      {["Economy","Premium Economy","Business","First Class"].map(c => <option key={c}>{c}</option>)}
                    </Sel>
                  </Field>
                </div>
                <Field label="Service Tier *"><TierPicker tiers={FLIGHT_FEES} selected={fTier} onSelect={setFTier} /></Field>
              </div>
            )}

            {/* Estimate */}
            {estimate && (
              <div className="rounded-2xl p-6 flex items-center justify-between gap-6" style={{ backgroundColor: "var(--blue)" }}>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--yellow)", fontFamily: "'Poppins', sans-serif" }}>
                    Estimated Service Fee
                  </p>
                  <p className="font-extrabold text-white" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "42px", lineHeight: 1 }}>
                    £{estimate.min}{estimate.min !== estimate.max && <span style={{ fontSize: "28px" }}> – £{estimate.max}</span>}
                  </p>
                  <p className="text-xs mt-2" style={{ color: "rgba(255,255,255,0.45)" }}>
                    Gladgate fee only — government & airline costs separate.
                  </p>
                </div>
              </div>
            )}

            {/* Notes */}
            <div className="rounded-2xl p-6 flex flex-col gap-4" style={{ backgroundColor: "#fff", border: "1px solid var(--border)" }}>
              <p style={sectionHead}>Additional Notes</p>
              <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={4}
                placeholder="Any specific requirements, questions, or details you'd like us to know..."
                style={{ ...inputStyle, resize: "vertical" }} />
            </div>

            {status === "error" && (
              <p className="text-sm text-center rounded-xl px-4 py-3" style={{ color: "#b91c1c", backgroundColor: "#fef2f2", border: "1px solid #fecaca" }}>
                Something went wrong. Please try again or contact us directly.
              </p>
            )}

            <button type="submit" disabled={status === "sending" || !name || !email}
              className="rounded-full py-5 text-sm font-bold transition-opacity hover:opacity-85 disabled:opacity-40"
              style={{ backgroundColor: "var(--coral)", color: "#fff", fontFamily: "'Poppins', sans-serif" }}>
              {status === "sending" ? "Sending…" : "Submit Enquiry →"}
            </button>

            <p className="text-xs text-center" style={{ color: "var(--muted)" }}>
              No payment required. A consultant will be in touch within 24 hours.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
