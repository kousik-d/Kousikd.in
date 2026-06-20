"use client";

import { motion } from "framer-motion";
import { achievements } from "@/lib/data";
import { sections } from "@/lib/sections";
import SectionShell from "./SectionShell";

export default function AchievementsSection() {
  const section = sections.find((s) => s.id === "achievements")!;

  return (
    <SectionShell
      section={section}
      eyebrow="06 — Achievements"
      title={
        <>
          Milestones worth{" "}
          <span className="text-[#ffd60a]">celebrating</span>
        </>
      }
      subtitle="From internship to leading iOS components — a journey of growth and impact."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {achievements.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ scale: 1.02 }}
            className="group relative flex items-start gap-4 overflow-hidden rounded-2xl glass p-5"
          >
            <div
              className="absolute -left-6 -top-6 h-24 w-24 rounded-full opacity-15 blur-2xl transition-opacity group-hover:opacity-25"
              style={{ background: a.color }}
            />
            <div
              className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl"
              style={{ background: `${a.color}22`, boxShadow: `0 0 24px ${a.color}33` }}
            >
              {a.icon}
            </div>
            <div className="relative min-w-0">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-[16px] font-semibold text-white">{a.title}</h3>
                <span className="shrink-0 text-[11px] font-medium text-white/40">{a.date}</span>
              </div>
              <p className="mt-1 text-[14px] leading-relaxed text-white/60">{a.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
