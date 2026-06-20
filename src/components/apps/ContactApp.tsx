"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";
import AppWindow from "../os/AppWindow";

const fields = [
  {
    label: "email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    color: "#0a84ff",
    icon: "✉️",
    action: "mail",
  },
  {
    label: "phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    color: "#30d158",
    icon: "📞",
    action: "call",
  },
  {
    label: "LinkedIn",
    value: "kousik-dasari",
    href: profile.linkedin,
    color: "#0a66c2",
    icon: "in",
    action: "open",
  },
  {
    label: "GitHub",
    value: "kousik-d",
    href: profile.github,
    color: "#8e8e93",
    icon: "🐙",
    action: "open",
  },
];

export default function ContactApp() {
  return (
    <AppWindow title="Contact" accent="#30d158">
      {/* Contact poster */}
      <div className="flex flex-col items-center pb-2 text-center">
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 16 }}
          className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#30d158] to-[#0a84ff] text-3xl font-semibold shadow-[0_10px_40px_rgba(48,209,88,0.4)]"
        >
          {profile.initials}
        </motion.div>
        <h2 className="mt-3 text-[26px] font-semibold tracking-tight">{profile.name}</h2>
        <p className="text-[14px] text-white/55">{profile.role}</p>
      </div>

      {/* Quick actions */}
      <div className="mt-5 grid grid-cols-3 gap-3">
        {[
          { label: "Message", href: `mailto:${profile.email}`, icon: "💬", color: "#30d158" },
          { label: "Call", href: `tel:${profile.phone.replace(/\s/g, "")}`, icon: "📞", color: "#0a84ff" },
          { label: "Résumé", href: profile.resumeUrl, icon: "📄", color: "#ff9f0a", download: true },
        ].map((a) => (
          <motion.a
            key={a.label}
            href={a.href}
            download={a.download}
            target={a.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center gap-1.5 rounded-2xl glass py-3"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full text-lg" style={{ background: `${a.color}22` }}>
              {a.icon}
            </span>
            <span className="text-[12px] font-medium" style={{ color: a.color }}>
              {a.label}
            </span>
          </motion.a>
        ))}
      </div>

      {/* Detail list */}
      <div className="mt-5 overflow-hidden rounded-2xl glass">
        {fields.map((f, i) => (
          <motion.a
            key={f.label}
            href={f.href}
            target={f.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + i * 0.06 }}
            className="flex items-center gap-3 border-b border-white/8 px-4 py-3.5 last:border-0 active:bg-white/5"
          >
            <span
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold"
              style={{ background: `${f.color}22`, color: f.color }}
            >
              {f.icon}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[11px] uppercase tracking-wide text-white/40">{f.label}</p>
              <p className="truncate text-[15px] font-medium text-white">{f.value}</p>
            </div>
            <span style={{ color: f.color }}>›</span>
          </motion.a>
        ))}
      </div>

      <p className="mt-6 text-center text-[12px] text-white/35">
        Based in {profile.location} · Open to opportunities
      </p>
    </AppWindow>
  );
}
