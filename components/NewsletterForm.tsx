"use client";

export default function NewsletterForm() {
  return (
    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="newsletter-email">Email address</label>
      <div>
        <input id="newsletter-email" type="email" placeholder="you@example.com" />
        <button type="submit">Subscribe</button>
      </div>
      <p>Monthly travel notes, visa reminders, and carefully selected fare alerts.</p>

      <style jsx>{`
        .newsletter-form {
          display: grid;
          gap: 12px;
        }
        label {
          color: rgba(255,250,242,0.72);
          font-size: 12px;
          font-weight: 800;
        }
        div {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 10px;
          padding: 8px;
          border: 1px solid rgba(255,250,242,0.18);
          border-radius: 999px;
          background: rgba(255,250,242,0.08);
        }
        input {
          min-width: 0;
          height: 48px;
          padding: 0 18px;
          border: 0;
          border-radius: 999px;
          outline: 0;
          background: transparent;
          color: var(--white);
        }
        input:focus {
          background: rgba(255,250,242,0.08);
        }
        button {
          min-height: 48px;
          padding: 0 20px;
          border-radius: 999px;
          background: var(--yellow-lt);
          color: var(--blue);
          cursor: pointer;
          font-weight: 900;
          transition: transform 0.25s var(--ease), background-color 0.25s var(--ease);
        }
        button:hover {
          transform: translateY(-1px);
          background: var(--white);
        }
        p {
          color: rgba(255,250,242,0.62);
          font-size: 13px;
          line-height: 1.6;
        }
        @media (max-width: 560px) {
          div {
            grid-template-columns: 1fr;
            border-radius: 18px;
          }
        }
      `}</style>
    </form>
  );
}
