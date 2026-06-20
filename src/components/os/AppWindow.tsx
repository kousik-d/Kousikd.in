"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useOS } from "@/lib/store";

export default function AppWindow({
  title,
  accent = "#0a84ff",
  children,
}: {
  title: string;
  accent?: string;
  children: ReactNode;
}) {
  const { setOpenApp } = useOS();

  return (
    <motion.div
      className="absolute inset-0 z-20 flex flex-col bg-[#06070d]"
      initial={{ scale: 0.18, opacity: 0, borderRadius: 48 }}
      animate={{ scale: 1, opacity: 1, borderRadius: 0 }}
      exit={{ scale: 0.18, opacity: 0, borderRadius: 48 }}
      transition={{ type: "spring", stiffness: 240, damping: 26 }}
      style={{ transformOrigin: "50% 70%" }}
    >
      {/* App tinted backdrop */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(120% 80% at 50% 0%, ${accent}22 0%, #06070d 55%)`,
        }}
      />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between px-5 pb-3 pt-14">
        <button
          onClick={() => setOpenApp(null)}
          className="flex items-center gap-1 text-[15px] font-medium"
          style={{ color: accent }}
        >
          <svg width="11" height="18" viewBox="0 0 11 18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M9 1 2 9l7 8" />
          </svg>
          Home
        </button>
        <span className="text-[15px] font-semibold text-white/90">{title}</span>
        <span className="w-12" />
      </div>

      {/* Scrollable content */}
      <div className="relative z-10 flex-1 overflow-y-auto overflow-x-hidden px-5 pb-10 thin-scroll">
        {children}
      </div>
    </motion.div>
  );
}
