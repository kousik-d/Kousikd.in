"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import AppWindow from "../os/AppWindow";

const pillars = [
  { label: "iOS Component Development", icon: "📦" },
  { label: "Scalable Architecture", icon: "🏛️" },
  { label: "Release Management", icon: "🚢" },
  { label: "Analytics Implementation", icon: "📊" },
  { label: "Serving 50M+ MAUs", icon: "🌍" },
];

export default function ExperienceApp() {
  return (
    <AppWindow title="Experience" accent="#30d158">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-[15px] leading-relaxed text-white/70"
      >
        From intern to Software Engineer II — a journey of shipping reliable, scalable iOS components at enterprise scale.
      </motion.p>

      {/* Pillars */}
      <div className="mt-5 flex flex-wrap gap-2">
        {pillars.map((p, i) => (
          <motion.div
            key={p.label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.05 }}
            className="flex items-center gap-1.5 rounded-full glass-thin px-3 py-1.5 text-[12px] font-medium text-white/85"
          >
            <span>{p.icon}</span>
            {p.label}
          </motion.div>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative mt-8 ml-2 border-l-2 border-white/10 pl-6">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.role + exp.period}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="relative pb-9 last:pb-2"
          >
            <span
              className={`absolute -left-[31px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#06070d] ${
                exp.current ? "bg-[#30d158]" : "bg-[#0a84ff]"
              }`}
            >
              {exp.current && (
                <span className="absolute h-4 w-4 animate-ping rounded-full bg-[#30d158]/60" />
              )}
            </span>

            <div className="glass rounded-2xl p-4">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-[16px] font-semibold text-white">{exp.role}</h3>
                  <p className="text-[13px] font-medium text-[#30d158]">{exp.company}</p>
                </div>
                {exp.current && (
                  <span className="shrink-0 rounded-full bg-[#30d158]/15 px-2 py-0.5 text-[10px] font-semibold text-[#30d158]">
                    NOW
                  </span>
                )}
              </div>
              <p className="mt-0.5 text-[12px] text-white/45">
                {exp.period} · {exp.location}
              </p>
              <ul className="mt-3 space-y-2">
                {exp.highlights.map((h, hi) => (
                  <li key={hi} className="flex gap-2 text-[13px] leading-snug text-white/70">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#30d158]" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </AppWindow>
  );
}
