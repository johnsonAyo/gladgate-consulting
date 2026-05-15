"use client";

import { useState, useEffect } from "react";

type Palette = {
  id: string;
  name: string;
  vars: Record<string, string>;
};

const palettes: Palette[] = [
  {
    id: "ocean-blue",
    name: "Ocean Blue",
    vars: {
      "--blue":     "#0057B8",
      "--blue-lt":  "#1A73E8",
      "--sky":      "#E8F4FD",
      "--coral":    "#FF5C35",
      "--coral-lt": "#FF8060",
      "--yellow":   "#FFB800",
      "--yellow-lt":"#FFD455",
      "--teal":     "#00B8A9",
      "--bg":       "#F5F8FF",
      "--text":     "#0F172A",
      "--muted":    "#64748B",
      "--border":   "#CBD5E1",
    },
  },
  {
    id: "forest-amber",
    name: "Forest & Amber",
    vars: {
      "--blue":     "#166534",
      "--blue-lt":  "#16A34A",
      "--sky":      "#DCFCE7",
      "--coral":    "#D97706",
      "--coral-lt": "#F59E0B",
      "--yellow":   "#FCD34D",
      "--yellow-lt":"#FDE68A",
      "--teal":     "#0891B2",
      "--bg":       "#F0FDF4",
      "--text":     "#052E16",
      "--muted":    "#4B7A5A",
      "--border":   "#BBF7D0",
    },
  },
  {
    id: "slate-teal",
    name: "Slate & Teal",
    vars: {
      "--blue":     "#0F766E",
      "--blue-lt":  "#0D9488",
      "--sky":      "#CCFBF1",
      "--coral":    "#7C3AED",
      "--coral-lt": "#8B5CF6",
      "--yellow":   "#FBBF24",
      "--yellow-lt":"#FCD34D",
      "--teal":     "#0369A1",
      "--bg":       "#F0FDFA",
      "--text":     "#042F2E",
      "--muted":    "#4A7A74",
      "--border":   "#99F6E4",
    },
  },
];

function applyPalette(palette: Palette) {
  const root = document.documentElement;
  Object.entries(palette.vars).forEach(([key, val]) => {
    root.style.setProperty(key, val);
  });
}

export default function PaletteSwitcher() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("slate-teal");

  useEffect(() => {
    const saved = localStorage.getItem("gladgate-palette");
    if (saved) {
      const p = palettes.find((p) => p.id === saved);
      if (p) { applyPalette(p); setActive(p.id); }
    }
  }, []);

  function select(p: Palette) {
    applyPalette(p);
    setActive(p.id);
    localStorage.setItem("gladgate-palette", p.id);
    setOpen(false);
  }

  const current = palettes.find((p) => p.id === active)!;

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-2">
      {/* Panel */}
      {open && (
        <div className="shadow-2xl overflow-hidden" style={{ backgroundColor: "#fff", border: "1px solid #E0E0E0", width: "230px", borderRadius: "16px" }}>
          <p className="text-xs font-semibold tracking-widest uppercase px-4 pt-4 pb-3"
            style={{ color: "#888", borderBottom: "1px solid #f0f0f0", fontFamily: "'Space Grotesk', sans-serif" }}>
            Choose a Theme
          </p>
          {palettes.map((p) => (
            <button key={p.id} onClick={() => select(p)}
              className="flex items-center gap-3 px-4 py-3 w-full text-left transition-all hover:bg-gray-50"
              style={{ backgroundColor: active === p.id ? "#F8F8F8" : "transparent" }}>
              {/* Swatches */}
              <div className="flex gap-1 flex-shrink-0">
                <span className="w-5 h-5 rounded-full border border-white shadow-sm" style={{ backgroundColor: p.vars["--blue"] }} />
                <span className="w-5 h-5 rounded-full border border-white shadow-sm" style={{ backgroundColor: p.vars["--coral"] }} />
                <span className="w-5 h-5 rounded-full border border-white shadow-sm" style={{ backgroundColor: p.vars["--yellow"] }} />
              </div>
              <span className="text-xs font-medium flex-1" style={{ color: "#333", fontFamily: "'Space Grotesk', sans-serif" }}>
                {p.name}
              </span>
              {active === p.id && (
                <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: p.vars["--blue"] }}>
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path d="M1.5 4L3.2 5.7L6.5 2.3" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Toggle button */}
      <button onClick={() => setOpen(!open)}
        className="flex items-center gap-2.5 px-4 py-2.5 shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5"
        style={{ backgroundColor: current.vars["--blue"], color: "#fff", fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", borderRadius: "999px" }}>
        <span style={{ display: "inline-flex", gap: "3px" }}>
          {[current.vars["--blue"], current.vars["--coral"], current.vars["--yellow"]].map((c, i) => (
            <span key={i} className="w-2.5 h-2.5 rounded-full border border-white/30" style={{ backgroundColor: c }} />
          ))}
        </span>
        {open ? "Close" : "Theme"}
      </button>
    </div>
  );
}
