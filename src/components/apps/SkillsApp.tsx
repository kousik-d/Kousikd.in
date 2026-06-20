"use client";

import { motion } from "framer-motion";
import { skills, skillGroups } from "@/lib/data";
import SkillRing from "@/components/shared/SkillRing";
import AppWindow from "../os/AppWindow";

export default function SkillsApp() {
  return (
    <AppWindow title="Skills" accent="#ff375f">
      <p className="mb-1 text-[28px] font-bold tracking-tight">Activity</p>
      <p className="mb-6 text-[14px] text-white/55">Close your rings — proficiency at a glance.</p>

      <div className="grid grid-cols-3 gap-x-3 gap-y-6">
        {skills.map((s, i) => (
          <SkillRing key={s.name} {...s} index={i} size="sm" />
        ))}
      </div>

      <div className="mt-10 space-y-4">
        {skillGroups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="rounded-2xl glass p-4"
          >
            <p className="mb-2.5 text-[12px] font-semibold uppercase tracking-[0.15em] text-white/45">{g.title}</p>
            <div className="flex flex-wrap gap-2">
              {g.items.map((it) => (
                <span key={it} className="rounded-lg bg-white/8 px-2.5 py-1 text-[12px] font-medium text-white/80">
                  {it}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </AppWindow>
  );
}
