"use client";

export default function NewsletterForm() {
  return (
    <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
      <input type="email" placeholder="Enter your email address"
        className="flex-1 rounded-full px-5 py-3.5 text-sm outline-none"
        style={{ border: "2px solid rgba(255,255,255,0.2)", backgroundColor: "rgba(255,255,255,0.1)", color: "#fff", fontFamily: "'Inter', sans-serif" }} />
      <button type="submit"
        className="rounded-full px-7 py-3.5 text-sm font-bold transition-all hover:opacity-90 flex-shrink-0"
        style={{ backgroundColor: "var(--yellow)", color: "var(--text)", fontFamily: "'Space Grotesk', sans-serif" }}>
        Subscribe
      </button>
    </form>
  );
}
