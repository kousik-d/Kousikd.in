"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { apps, profile } from "@/lib/data";
import { scrollToApp } from "@/lib/sections";
import { useOS } from "@/lib/store";
import AppIcon from "./AppIcon";

export default function HomeScreen() {
  const { setOpenApp, setDevMode } = useOS();
  const taps = useRef<number[]>([]);

  function handleAppleTap() {
    const now = Date.now();
    taps.current = [...taps.current.filter((t) => now - t < 800), now];
    if (taps.current.length >= 3) {
      taps.current = [];
      setDevMode(true);
    }
  }

  function handleAppClick(appId: typeof apps[number]["id"]) {
    setOpenApp(appId);
    scrollToApp(appId);
  }

  return (
    <motion.div
      className="absolute inset-0 z-10 flex flex-col"
      initial={{ opacity: 0, scale: 1.08 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(130%_100%_at_50%_0%,#243b8f_0%,#10173a_42%,#05060f_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_15%_85%,rgba(48,209,88,0.18),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_90%_20%,rgba(255,55,95,0.16),transparent)]" />

      <div className="relative flex flex-1 flex-col px-6 pt-20 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-7 text-center"
        >
          <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-white/50">Welcome to my world</p>
          <h1 className="mt-1 text-[22px] font-semibold tracking-tight text-white">{profile.name}</h1>
        </motion.div>

        <div className="grid grid-cols-4 gap-x-4 gap-y-6">
          {apps.map((app, i) => (
            <AppIcon
              key={app.id}
              name={app.name}
              gradient={app.gradient}
              glyph={app.glyph}
              index={i}
              onClick={() => handleAppClick(app.id)}
            />
          ))}
        </div>

        <div className="flex-1" />

        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/35" />
          </div>
          <button
            onClick={handleAppleTap}
            className="text-white/30 transition-colors hover:text-white/60"
            aria-label="Apple"
            title="Triple-tap for Developer Mode"
          >
            <AppleLogo />
          </button>
        </div>
      </div>

      <div className="relative mx-4 mb-3 grid grid-cols-4 gap-4 rounded-[28px] glass px-4 py-3">
        <DockLink href={`mailto:${profile.email}`} label="Mail" gradient={["#1e90ff", "#0a84ff"]} glyph="✉️" />
        <DockLink href={profile.github} label="GitHub" gradient={["#3a3a3c", "#1c1c1e"]} glyph="🐙" />
        <DockLink href={profile.linkedin} label="LinkedIn" gradient={["#0a66c2", "#0a84ff"]} glyph="in" />
        <DockLink href={profile.resumeUrl} label="Resume" gradient={["#ff9f0a", "#ff375f"]} glyph="📄" download />
      </div>
    </motion.div>
  );
}

function DockLink({
  href,
  label,
  gradient,
  glyph,
  download,
}: {
  href: string;
  label: string;
  gradient: [string, string];
  glyph: string;
  download?: boolean;
}) {
  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      download={download}
      whileTap={{ scale: 0.86 }}
      whileHover={{ y: -4 }}
      className="flex flex-col items-center"
      aria-label={label}
    >
      <div
        className="flex h-[52px] w-[52px] items-center justify-center rounded-[14px] text-lg font-bold shadow-lg"
        style={{ background: `linear-gradient(145deg, ${gradient[0]}, ${gradient[1]})` }}
      >
        {glyph}
      </div>
    </motion.a>
  );
}

function AppleLogo() {
  return (
    <svg width="18" height="22" viewBox="0 0 24 28" fill="currentColor" aria-hidden>
      <path d="M17.5 14.9c0-3 2.4-4.4 2.5-4.5-1.4-2-3.5-2.3-4.2-2.3-1.8-.2-3.5 1-4.4 1-.9 0-2.3-1-3.8-1-1.9 0-3.7 1.1-4.7 2.9-2 3.5-.5 8.7 1.4 11.5.9 1.4 2 2.9 3.5 2.9 1.4-.1 1.9-.9 3.6-.9 1.7 0 2.2.9 3.7.9 1.5 0 2.5-1.4 3.4-2.8 1.1-1.6 1.5-3.1 1.5-3.2-.1 0-2.9-1.1-3-4.4ZM14.7 6.2c.8-1 1.3-2.3 1.2-3.7-1.1.1-2.5.8-3.3 1.7-.7.8-1.4 2.2-1.2 3.5 1.3.1 2.5-.6 3.3-1.5Z" />
    </svg>
  );
}
