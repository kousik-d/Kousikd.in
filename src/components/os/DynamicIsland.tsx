"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useOS } from "@/lib/store";

export default function DynamicIsland() {
  const { islandState, islandPayload } = useOS();

  const isExpanded = islandState === "notification" || islandState === "music";

  return (
    <div className="pointer-events-none absolute left-1/2 top-3 z-50 -translate-x-1/2">
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 34 }}
        className="flex items-center justify-center overflow-hidden rounded-[22px] bg-black shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
        style={{
          width: isExpanded ? 240 : islandState === "faceid" ? 130 : 116,
          height: isExpanded ? 52 : 34,
        }}
      >
        <AnimatePresence mode="wait">
          {islandState === "faceid" && (
            <motion.div
              key="faceid"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              className="flex items-center gap-2 px-3"
            >
              <div className="h-[18px] w-[18px] rounded-full bg-[#1c1c1e]" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1.4, ease: "linear" }}
                className="h-4 w-4 rounded-full border-2 border-[#0a84ff] border-t-transparent"
              />
            </motion.div>
          )}

          {isExpanded && islandPayload && (
            <motion.div
              key="notif"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className="flex w-full items-center gap-3 px-3.5"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#0a84ff] to-[#5e5ce6] text-sm">
                {islandState === "music" ? "♫" : "✦"}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[11px] font-semibold text-white">{islandPayload.title}</p>
                <p className="truncate text-[10px] text-white/55">{islandPayload.subtitle}</p>
              </div>
              {islandState === "music" && (
                <div className="flex items-end gap-[2px]">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="w-[3px] rounded-full bg-[#30d158]"
                      animate={{ height: [4, 12, 6, 14, 4] }}
                      transition={{ repeat: Infinity, duration: 1, delay: i * 0.15 }}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
