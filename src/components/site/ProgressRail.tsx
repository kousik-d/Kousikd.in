"use client";

import { motion } from "framer-motion";
import { sections, scrollToSection } from "@/lib/sections";
import { useOS } from "@/lib/store";

export default function ProgressRail() {
  const activeSection = useOS((s) => s.activeSection);
  return (
    <nav
      aria-label="Section navigation"
      className="fixed left-4 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-3 lg:flex xl:left-5"
    >
      {sections.map((s) => {
        const isActive = s.id === activeSection;
        return (
          <button
            key={s.id}
            onClick={() => scrollToSection(s.id)}
            className="group relative flex items-center"
            aria-label={`Go to ${s.label}`}
            aria-current={isActive ? "true" : undefined}
          >
            <motion.span
              animate={{
                scale: isActive ? 1 : 0.6,
                backgroundColor: isActive ? s.accent : "rgba(255,255,255,0.25)",
              }}
              className="block h-2 w-2 rounded-full transition-colors"
              style={{ boxShadow: isActive ? `0 0 12px ${s.accent}88` : "none" }}
            />
            <span className="pointer-events-none absolute left-5 whitespace-nowrap rounded-lg bg-black/80 px-2.5 py-1 text-[11px] font-medium text-white/80 opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
              {s.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
