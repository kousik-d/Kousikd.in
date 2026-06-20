"use client";

import { motion } from "framer-motion";
import { profile, journey, skillGroups } from "@/lib/data";
import AppWindow from "../os/AppWindow";

export default function AboutApp() {
  return (
    <AppWindow title="About Me" accent="#0a84ff">
      {/* Hero */}
      <div className="flex flex-col items-center text-center">
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 16 }}
          className="relative flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-[#0a84ff] to-[#5e5ce6] text-4xl font-semibold shadow-[0_10px_40px_rgba(10,132,255,0.45)]"
        >
          {profile.initials}
          <span className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#06070d] bg-[#30d158] text-sm">
            👋
          </span>
        </motion.div>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight">{profile.name}</h2>
        <p className="text-[15px] font-medium text-[#64d2ff]">{profile.role}</p>
        <p className="text-[13px] text-white/55">{profile.location}</p>
      </div>

      <Section title="Bio" delay={0.05}>
        <p className="text-[15px] leading-relaxed text-white/75">{profile.bio}</p>
      </Section>

      <Section title="Career Journey" delay={0.1}>
        <div className="relative ml-2 border-l border-white/10 pl-5">
          {journey.map((j, i) => (
            <motion.div
              key={j.title}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative pb-5 last:pb-0"
            >
              <span className="absolute -left-[26px] top-1 h-3 w-3 rounded-full border-2 border-[#0a84ff] bg-[#06070d]" />
              <p className="text-[11px] font-semibold uppercase tracking-wide text-[#0a84ff]">{j.year}</p>
              <p className="text-[15px] font-semibold text-white">{j.title}</p>
              <p className="text-[13px] text-white/55">{j.detail}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="Technologies" delay={0.15}>
        <div className="flex flex-wrap gap-2">
          {skillGroups.flatMap((g) => g.items).map((t, i) => (
            <motion.span
              key={t + i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.02 }}
              className="rounded-full glass-thin px-3 py-1.5 text-[12px] font-medium text-white/80"
            >
              {t}
            </motion.span>
          ))}
        </div>
      </Section>

      <motion.a
        href={profile.resumeUrl}
        download
        whileTap={{ scale: 0.97 }}
        className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#0a84ff] to-[#5e5ce6] py-3.5 text-[15px] font-semibold shadow-lg"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
        </svg>
        Download Résumé
      </motion.a>
    </AppWindow>
  );
}

function Section({ title, children, delay = 0 }: { title: string; children: React.ReactNode; delay?: number }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 + delay, duration: 0.5 }}
      className="mt-8"
    >
      <h3 className="mb-3 text-[13px] font-semibold uppercase tracking-[0.15em] text-white/45">{title}</h3>
      {children}
    </motion.section>
  );
}
