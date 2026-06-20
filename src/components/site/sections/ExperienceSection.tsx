"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import { sections } from "@/lib/sections";
import SectionShell from "./SectionShell";

const pillars = [
  { label: "iOS Component Development", icon: "📦" },
  { label: "Scalable Architecture", icon: "🏛️" },
  { label: "Release Management", icon: "🚢" },
  { label: "Analytics Implementation", icon: "📊" },
  { label: "Serving 50M+ MAUs", icon: "🌍" },
];

export default function ExperienceSection() {
  const section = sections.find((s) => s.id === "experience")!;

  return (
    <SectionShell
      section={section}
      eyebrow="02 — Experience"
      title={
        <>
          Intern → Full Time →{" "}
          <span className="text-[#30d158]">Software Engineer II</span>
        </>
      }
      subtitle="Two years of shipping production iOS components and solutions for enterprise clients at Apxor Technology Solutions."
    >
      <div className="mb-10 flex flex-wrap gap-2">
        {pillars.map((p, i) => (
          <motion.span
            key={p.label}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="inline-flex items-center gap-2 rounded-full glass-thin px-4 py-2 text-[13px] font-medium text-white/85"
          >
            <span>{p.icon}</span>
            {p.label}
          </motion.span>
        ))}
      </div>

      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <motion.article
            key={exp.role + exp.period}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-3xl glass p-6 lg:p-8"
          >
            <div
              className="absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-15 blur-2xl transition-opacity group-hover:opacity-25"
              style={{ background: exp.current ? "#30d158" : "#0a84ff" }}
            />

            <div className="relative flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-xl font-semibold text-white lg:text-2xl">{exp.role}</h3>
                <p className="mt-0.5 text-[15px] font-medium text-[#30d158]">{exp.company}</p>
                <p className="text-[13px] text-white/45">
                  {exp.period} · {exp.location}
                </p>
              </div>
              {exp.current && (
                <span className="rounded-full bg-[#30d158]/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[#30d158]">
                  Current
                </span>
              )}
            </div>

            <ul className="relative mt-6 space-y-3">
              {exp.highlights.map((h, hi) => (
                <li key={hi} className="flex gap-3 text-[15px] leading-relaxed text-white/70">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#30d158]" />
                  {h}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
