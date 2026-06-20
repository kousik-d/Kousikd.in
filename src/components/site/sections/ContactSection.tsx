"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";
import { sections } from "@/lib/sections";
import SectionShell from "./SectionShell";

const contacts = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: "✉️", color: "#0a84ff" },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}`, icon: "📞", color: "#30d158" },
  { label: "LinkedIn", value: "kousik-dasari", href: profile.linkedin, icon: "in", color: "#0a66c2" },
  { label: "GitHub", value: "kousik-d", href: profile.github, icon: "🐙", color: "#8e8e93" },
];

export default function ContactSection() {
  const section = sections.find((s) => s.id === "contact")!;

  return (
    <SectionShell
      section={section}
      eyebrow="07 — Contact"
      title={
        <>
          Let&apos;s build something{" "}
          <span className="text-[#30d158]">great</span>
        </>
      }
      subtitle="Open to iOS engineering roles, component work, and interesting mobile projects."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
        <div className="overflow-hidden rounded-3xl glass">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex items-center gap-4 border-b border-white/8 px-6 py-5 last:border-0 transition-colors hover:bg-white/5"
            >
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                style={{ background: `${c.color}22`, color: c.color }}
              >
                {c.icon}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] uppercase tracking-wide text-white/40">{c.label}</p>
                <p className="truncate text-[16px] font-medium text-white">{c.value}</p>
              </div>
              <span style={{ color: c.color }}>›</span>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center rounded-3xl glass p-8 text-center"
        >
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#30d158] to-[#0a84ff] text-3xl font-semibold shadow-[0_10px_40px_rgba(48,209,88,0.35)]">
            {profile.initials}
          </div>
          <h3 className="mt-4 text-xl font-semibold">{profile.name}</h3>
          <p className="text-[14px] text-white/55">{profile.role}</p>
          <p className="mt-1 text-[13px] text-white/40">{profile.location}</p>
          <a
            href={profile.resumeUrl}
            download
            className="mt-6 w-full rounded-2xl bg-gradient-to-r from-[#30d158] to-[#0a84ff] py-3 text-[14px] font-semibold"
          >
            Download Résumé
          </a>
        </motion.div>
      </div>
    </SectionShell>
  );
}
