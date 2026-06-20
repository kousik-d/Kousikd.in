"use client";

import { motion } from "framer-motion";
import { profile, journey, skillGroups } from "@/lib/data";
import { sections } from "@/lib/sections";
import SectionShell from "./SectionShell";

export default function AboutSection() {
  const section = sections.find((s) => s.id === "about")!;

  return (
    <SectionShell
      section={section}
      eyebrow="01 — About"
      title={
        <>
          Building iOS at{" "}
          <span className="text-[#0a84ff]">enterprise scale</span>
        </>
      }
      subtitle={profile.bio}
    >
      <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
        {/* Profile card */}
        <motion.div
          whileHover={{ y: -4 }}
          className="relative overflow-hidden rounded-3xl glass p-6 text-center"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(10,132,255,0.2),transparent_60%)]" />
          <div className="relative mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-[#0a84ff] to-[#5e5ce6] text-4xl font-semibold shadow-[0_10px_40px_rgba(10,132,255,0.4)]">
            {profile.initials}
          </div>
          <h3 className="relative mt-4 text-xl font-semibold">{profile.name}</h3>
          <p className="relative text-[14px] font-medium text-[#64d2ff]">{profile.role}</p>
          <p className="relative mt-1 text-[13px] text-white/45">{profile.location}</p>
          <a
            href={profile.resumeUrl}
            download
            className="relative mt-5 inline-block rounded-xl bg-white/10 px-5 py-2 text-[13px] font-semibold transition-colors hover:bg-white/15"
          >
            Résumé ↓
          </a>
        </motion.div>

        <div className="space-y-8">
          {/* Journey timeline */}
          <div>
            <h3 className="mb-4 text-[13px] font-semibold uppercase tracking-[0.15em] text-white/40">
              Career Journey
            </h3>
            <div className="relative ml-2 border-l border-white/10 pl-6">
              {journey.map((j, i) => (
                <motion.div
                  key={j.title}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="relative pb-6 last:pb-0"
                >
                  <span className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full border-2 border-[#0a84ff] bg-[#04060d]" />
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-[#0a84ff]">{j.year}</p>
                  <p className="text-[16px] font-semibold text-white">{j.title}</p>
                  <p className="text-[14px] text-white/55">{j.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tech stack preview */}
          <div>
            <h3 className="mb-4 text-[13px] font-semibold uppercase tracking-[0.15em] text-white/40">
              Core Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroups.flatMap((g) => g.items).slice(0, 16).map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.02 }}
                  className="rounded-full glass-thin px-3.5 py-1.5 text-[13px] font-medium text-white/80"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
