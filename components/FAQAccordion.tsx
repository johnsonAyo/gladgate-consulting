"use client";

import { useState } from "react";

interface FAQItem {
  q: string;
  a: string | string[];
}

interface FAQAccordionProps {
  items: FAQItem[];
}

function FAQCard({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      style={{
        background: "var(--white)",
        borderRadius: "16px",
        border: "1px solid var(--border)",
        marginBottom: "12px",
        overflow: "hidden",
      }}
    >
      {/* Question row */}
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 24px",
          cursor: "pointer",
          background: "transparent",
          border: "none",
          textAlign: "left",
          gap: "16px",
        }}
      >
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
            fontSize: "15px",
            color: "var(--text)",
            flex: 1,
          }}
        >
          {item.q}
        </span>

        <span
          aria-hidden="true"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: "20px",
            color: "var(--blue)",
            lineHeight: 1,
            flexShrink: 0,
            userSelect: "none",
          }}
        >
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {/* Answer */}
      <div
        style={{
          maxHeight: isOpen ? "500px" : "0",
          overflow: "hidden",
          transition: "max-height 0.35s ease",
        }}
      >
        <div style={{ padding: "0 24px 20px" }}>
          {Array.isArray(item.a) ? (
            <ul
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                color: "var(--muted)",
                lineHeight: 1.7,
                paddingLeft: "20px",
                margin: 0,
              }}
            >
              {item.a.map((point, i) => (
                <li key={i} style={{ marginBottom: i < item.a.length - 1 ? "6px" : 0 }}>
                  {point}
                </li>
              ))}
            </ul>
          ) : (
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                color: "var(--muted)",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              {item.a}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div>
      {items.map((item, i) => (
        <FAQCard
          key={i}
          item={item}
          isOpen={openIndex === i}
          onToggle={() => handleToggle(i)}
        />
      ))}
    </div>
  );
}
