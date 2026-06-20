"use client";

import { motion } from "framer-motion";

function Glyph({ glyph }: { glyph: string }) {
  const common = { fill: "none", stroke: "white", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (glyph) {
    case "person":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <circle cx="12" cy="8" r="3.6" />
          <path d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6" />
        </svg>
      );
    case "timeline":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M6 3v18" />
          <circle cx="6" cy="7" r="1.6" fill="white" stroke="none" />
          <circle cx="6" cy="14" r="1.6" fill="white" stroke="none" />
          <path d="M10 7h8M10 14h6" />
        </svg>
      );
    case "grid":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <rect x="4" y="4" width="6.5" height="6.5" rx="1.6" />
          <rect x="13.5" y="4" width="6.5" height="6.5" rx="1.6" />
          <rect x="4" y="13.5" width="6.5" height="6.5" rx="1.6" />
          <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.6" />
        </svg>
      );
    case "rings":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <circle cx="12" cy="12" r="8" opacity="0.5" />
          <circle cx="12" cy="12" r="5" opacity="0.8" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );
    case "chart":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M4 19h16" />
          <rect x="6" y="11" width="3" height="6" rx="1" fill="white" stroke="none" />
          <rect x="11" y="7" width="3" height="10" rx="1" fill="white" stroke="none" />
          <rect x="16" y="13" width="3" height="4" rx="1" fill="white" stroke="none" />
        </svg>
      );
    case "trophy":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M7 4h10v4a5 5 0 0 1-10 0V4Z" />
          <path d="M7 5H4v1a3 3 0 0 0 3 3M17 5h3v1a3 3 0 0 1-3 3M12 13v3M9 20h6M10 20v-1.5h4V20" />
        </svg>
      );
    case "phone":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M6.5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A15 15 0 0 1 4.5 6a2 2 0 0 1 2-2Z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function AppIcon({
  name,
  gradient,
  glyph,
  onClick,
  index = 0,
}: {
  name: string;
  gradient: [string, string];
  glyph: string;
  onClick: () => void;
  index?: number;
}) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.4 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.15 + index * 0.04, type: "spring", stiffness: 260, damping: 18 }}
      whileTap={{ scale: 0.86 }}
      whileHover={{ y: -4 }}
      className="flex flex-col items-center gap-1.5"
    >
      <div
        className="relative flex h-[58px] w-[58px] items-center justify-center rounded-[15px] shadow-lg"
        style={{ background: `linear-gradient(145deg, ${gradient[0]}, ${gradient[1]})` }}
      >
        <div className="absolute inset-0 rounded-[15px] bg-[linear-gradient(180deg,rgba(255,255,255,0.28),transparent_55%)]" />
        <div className="h-7 w-7">
          <Glyph glyph={glyph} />
        </div>
      </div>
      <span className="text-[11px] font-medium text-white/90 drop-shadow">{name}</span>
    </motion.button>
  );
}
