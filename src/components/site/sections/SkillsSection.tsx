"use client";

import { motion } from "framer-motion";
import { skills, skillGroups } from "@/lib/data";
import { sections } from "@/lib/sections";
import SkillRing from "@/components/shared/SkillRing";
import SectionShell from "./SectionShell";

export default function SkillsSection() {
  const section = sections.find((s) => s.id === "skills")!;

  return (
    <SectionShell
      section={section}
      eyebrow="04 — Skills"
      title={
        <>
          Close your{" "}
          <span className="text-[#ff375f]">rings</span>
        </>
      }
      subtitle="Apple-style activity rings showing proficiency across the iOS stack."
    >
      <div className="grid grid-cols-3 gap-6 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5">
        {skills.map((s, i) => (
          <SkillRing key={s.name} {...s} index={i} size="lg" />
        ))}
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {skillGroups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="rounded-2xl glass p-5"
          >
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.15em] text-white/45">{g.title}</p>
            <div className="flex flex-wrap gap-2">
              {g.items.map((it) => (
                <span key={it} className="rounded-lg bg-white/8 px-3 py-1.5 text-[13px] font-medium text-white/80">
                  {it}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
