"use client";

import type { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  profile,
  journey,
  experiences,
  projects,
  skills,
  metrics,
  achievements,
} from "@/lib/data";
import { sections, type SectionId } from "@/lib/sections";
import { useOS } from "@/lib/store";
import CountUp from "@/components/shared/CountUp";
import SkillRing from "@/components/shared/SkillRing";
import { ProjectImage } from "@/components/shared/ProjectCover";

export default function PhoneContentMirror() {
  const activeSection = useOS((s) => s.activeSection);
  const section = sections.find((s) => s.id === activeSection)!;

  return (
    <div className="absolute inset-0 flex flex-col overflow-hidden bg-[#06070d]">
      {/* Wallpaper tint per section */}
      <div
        className="absolute inset-0 transition-colors duration-700"
        style={{
          background: `radial-gradient(120% 80% at 50% 0%, ${section.accent}18 0%, #06070d 55%)`,
        }}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden px-4 pb-8 pt-14 no-scrollbar"
        >
          {PREVIEWS[activeSection]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

const PREVIEWS: Record<SectionId, ReactNode> = {
  hero: <HeroPreview />,
  about: <AboutPreview />,
  experience: <ExperiencePreview />,
  projects: <ProjectsPreview />,
  skills: <SkillsPreview />,
  impact: <ImpactPreview />,
  achievements: <AchievementsPreview />,
  contact: <ContactPreview />,
};

function HeroPreview() {
  const section = sections[0];
  return (
    <>
      <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/8 px-3 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-[#30d158]" />
        <span className="text-[10px] font-medium text-white/70">Open to opportunities</span>
      </div>
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#64d2ff]">iOS Software Engineer</p>
      <h1 className="mt-2 text-[26px] font-bold leading-[1.05] tracking-tight">
        <span className="text-white">{profile.name.split(" ")[0]}</span>
        <br />
        <span
          className="bg-clip-text text-transparent"
          style={{ backgroundImage: `linear-gradient(135deg, ${section.gradient[0]}, ${section.gradient[1]})` }}
        >
          {profile.name.split(" ")[1]}
        </span>
      </h1>
      <p className="mt-3 text-[12px] leading-relaxed text-white/55">{profile.shortBio}</p>
      <div className="mt-5 grid grid-cols-3 gap-2">
        {[
          { value: 50, suffix: "M+", label: "MAU" },
          { value: 96, suffix: "%", label: "Crash-free" },
          { value: 20, suffix: "+", label: "Clients" },
        ].map((m) => (
          <div key={m.label} className="rounded-xl bg-white/6 px-2 py-2 text-center">
            <p className="text-[15px] font-bold tabular-nums">
              <CountUp value={m.value} />
              <span className="text-[#64d2ff]">{m.suffix}</span>
            </p>
            <p className="text-[9px] text-white/40">{m.label}</p>
          </div>
        ))}
      </div>
      <div className="mt-5 flex flex-col gap-2">
        <div className="rounded-xl bg-gradient-to-r from-[#0a84ff] to-[#5e5ce6] py-2.5 text-center text-[12px] font-semibold">
          Download Résumé
        </div>
        <div className="rounded-xl bg-white/8 py-2.5 text-center text-[12px] font-semibold text-white/80">
          Get in touch
        </div>
      </div>
    </>
  );
}

function AboutPreview() {
  return (
    <>
      <SectionLabel accent="#0a84ff">01 — About</SectionLabel>
      <h2 className="text-[20px] font-bold leading-tight tracking-tight">Building iOS at enterprise scale</h2>
      <div className="mt-4 flex flex-col items-center rounded-2xl bg-white/6 p-4 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#0a84ff] to-[#5e5ce6] text-xl font-semibold">
          {profile.initials}
        </div>
        <p className="mt-2 text-[14px] font-semibold">{profile.name}</p>
        <p className="text-[11px] text-[#64d2ff]">{profile.role}</p>
      </div>
      <p className="mt-4 text-[11px] leading-relaxed text-white/60">{profile.bio.slice(0, 180)}…</p>
      <div className="mt-4 space-y-3">
        {journey.map((j) => (
          <div key={j.title} className="border-l-2 border-[#0a84ff]/40 pl-3">
            <p className="text-[9px] font-semibold uppercase text-[#0a84ff]">{j.year}</p>
            <p className="text-[12px] font-semibold text-white">{j.title}</p>
          </div>
        ))}
      </div>
    </>
  );
}

function ExperiencePreview() {
  const exp = experiences[0];
  return (
    <>
      <SectionLabel accent="#30d158">02 — Experience</SectionLabel>
      <h2 className="text-[20px] font-bold leading-tight">Software Engineer II</h2>
      <div className="mt-4 rounded-2xl bg-white/6 p-3">
        <div className="flex items-center justify-between">
          <p className="text-[13px] font-semibold text-[#30d158]">{exp.company}</p>
          <span className="rounded-full bg-[#30d158]/15 px-2 py-0.5 text-[8px] font-bold text-[#30d158]">NOW</span>
        </div>
        <p className="text-[10px] text-white/45">{exp.period}</p>
        <ul className="mt-3 space-y-2">
          {exp.highlights.slice(0, 3).map((h) => (
            <li key={h.slice(0, 30)} className="flex gap-2 text-[10px] leading-snug text-white/65">
              <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-[#30d158]" />
              {h}
            </li>
          ))}
        </ul>
      </div>
      {experiences[1] && (
        <div className="mt-3 rounded-2xl bg-white/4 p-3">
          <p className="text-[12px] font-semibold">{experiences[1].role}</p>
          <p className="text-[10px] text-white/45">{experiences[1].period}</p>
        </div>
      )}
    </>
  );
}

function ProjectsPreview() {
  return (
    <>
      <SectionLabel accent="#ff9f0a">03 — Projects</SectionLabel>
      <h2 className="text-[20px] font-bold leading-tight">Featured</h2>
      <div className="mt-4 space-y-3">
        {projects.map((p) => (
          <div key={p.id} className="overflow-hidden rounded-2xl bg-white/6">
            <div className="relative h-20 w-full bg-black/40">
              <ProjectImage src={p.coverImage} alt={p.name} fill className="object-cover object-center" />
              {p.status === "in-progress" && (
                <span className="absolute left-2 top-2 rounded-full bg-black/50 px-2 py-0.5 text-[8px] font-bold uppercase" style={{ color: p.accent }}>
                  WIP
                </span>
              )}
            </div>
            <div className="p-3">
              <p className="text-[13px] font-semibold">{p.name}</p>
              <p className="text-[10px] text-white/50">{p.tagline}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function SkillsPreview() {
  return (
    <>
      <SectionLabel accent="#ff375f">04 — Skills</SectionLabel>
      <h2 className="text-[20px] font-bold leading-tight">Activity Rings</h2>
      <div className="mt-4 grid grid-cols-3 gap-3">
        {skills.slice(0, 6).map((s, i) => (
          <SkillRing key={s.name} {...s} index={i} size="sm" />
        ))}
      </div>
    </>
  );
}

function ImpactPreview() {
  return (
    <>
      <SectionLabel accent="#64d2ff">05 — Impact</SectionLabel>
      <div className="mt-2 rounded-2xl bg-white/6 p-4 text-center">
        <p className="text-[36px] font-bold leading-none">
          <CountUp value={50} />
          <span className="text-[#64d2ff]">M+</span>
        </p>
        <p className="mt-1 text-[11px] text-white/60">Monthly Active Users</p>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {metrics.slice(1, 5).map((m) => (
          <div key={m.label} className="rounded-xl bg-white/6 p-2.5">
            <p className="text-[18px] font-bold tabular-nums" style={{ color: m.color }}>
              <CountUp value={m.value} />
              {m.suffix}
            </p>
            <p className="text-[9px] text-white/50">{m.label}</p>
          </div>
        ))}
      </div>
    </>
  );
}

function AchievementsPreview() {
  return (
    <>
      <SectionLabel accent="#ffd60a">06 — Achievements</SectionLabel>
      <h2 className="text-[20px] font-bold leading-tight">Milestones</h2>
      <div className="mt-4 space-y-2">
        {achievements.slice(0, 4).map((a) => (
          <div key={a.title} className="flex items-center gap-3 rounded-xl bg-white/6 p-2.5">
            <span className="text-lg">{a.icon}</span>
            <div>
              <p className="text-[11px] font-semibold">{a.title}</p>
              <p className="text-[9px] text-white/45">{a.date}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function ContactPreview() {
  return (
    <>
      <SectionLabel accent="#30d158">07 — Contact</SectionLabel>
      <div className="mt-2 flex flex-col items-center text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#30d158] to-[#0a84ff] text-xl font-semibold">
          {profile.initials}
        </div>
        <p className="mt-2 text-[16px] font-semibold">{profile.name}</p>
        <p className="text-[11px] text-white/50">{profile.role}</p>
      </div>
      <div className="mt-4 space-y-1 overflow-hidden rounded-2xl bg-white/6">
        {[
          { label: "Email", value: profile.email, icon: "✉️" },
          { label: "LinkedIn", value: "kousik-dasari", icon: "in" },
          { label: "GitHub", value: "kousik-d", icon: "🐙" },
        ].map((c) => (
          <div key={c.label} className="flex items-center gap-3 border-b border-white/6 px-3 py-2.5 last:border-0">
            <span className="text-sm">{c.icon}</span>
            <div>
              <p className="text-[9px] uppercase text-white/40">{c.label}</p>
              <p className="text-[11px] font-medium">{c.value}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function SectionLabel({ accent, children }: { accent: string; children: React.ReactNode }) {
  return (
    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em]" style={{ color: accent }}>
      {children}
    </p>
  );
}
