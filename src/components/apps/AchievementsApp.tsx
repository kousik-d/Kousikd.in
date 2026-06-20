"use client";

import { motion } from "framer-motion";
import { achievements } from "@/lib/data";
import AppWindow from "../os/AppWindow";

export default function AchievementsApp() {
  return (
    <AppWindow title="Achievements" accent="#ffd60a">
      <p className="mb-1 text-[28px] font-bold tracking-tight">Milestones</p>
      <p className="mb-6 text-[14px] text-white/55">Moments worth celebrating.</p>

      <div className="space-y-3">
        {achievements.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ delay: i * 0.06, type: "spring", stiffness: 200, damping: 20 }}
            whileHover={{ scale: 1.02 }}
            className="relative flex items-center gap-4 overflow-hidden rounded-2xl glass p-4"
          >
            <div
              className="absolute -left-6 -top-6 h-20 w-20 rounded-full opacity-20 blur-xl"
              style={{ background: a.color }}
            />
            <div
              className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-2xl"
              style={{ background: `${a.color}22`, boxShadow: `0 0 20px ${a.color}33` }}
            >
              {a.icon}
            </div>
            <div className="relative min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-[15px] font-semibold text-white">{a.title}</h3>
                <span className="shrink-0 text-[11px] font-medium text-white/40">{a.date}</span>
              </div>
              <p className="text-[13px] leading-snug text-white/60">{a.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </AppWindow>
  );
}
