"use client";

import { motion } from "framer-motion";
import { useOS } from "@/lib/store";
import { useClock } from "@/lib/useClock";

export default function NotificationCenter() {
  const { notifications, toggleNotificationCenter } = useOS();
  const { time, date } = useClock();

  return (
    <motion.div
      className="absolute inset-0 z-[70]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ type: "spring", stiffness: 280, damping: 32 }}
        className="absolute inset-0 bg-black/55 backdrop-blur-2xl"
      >
        <div className="flex h-full flex-col px-4 pt-16" onClick={() => toggleNotificationCenter(false)}>
          {/* Clock header */}
          <div className="mb-6 text-center">
            <p className="text-[15px] font-medium text-white/75">{date}</p>
            <p className="text-[68px] font-semibold leading-none tracking-tightest text-white tabular-nums">
              {time || "9:41 AM"}
            </p>
          </div>

          <div className="space-y-2.5 overflow-y-auto thin-scroll" onClick={(e) => e.stopPropagation()}>
            {notifications.map((n, i) => (
              <motion.div
                key={n.id}
                initial={{ opacity: 0, y: -16, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.1 + i * 0.07 }}
                className="flex gap-3 rounded-3xl glass-dark p-3.5"
              >
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg"
                  style={{ background: `${n.color}33` }}
                >
                  {n.icon}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-[13px] font-semibold text-white">{n.app}</p>
                    <span className="text-[11px] text-white/40">now</span>
                  </div>
                  <p className="text-[13px] font-medium text-white/90">{n.title}</p>
                  <p className="text-[13px] leading-snug text-white/60">{n.body}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex-1" />
          <p className="pb-6 text-center text-[12px] text-white/40">Tap anywhere to close</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
