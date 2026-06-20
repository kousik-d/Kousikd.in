"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useClock } from "@/lib/useClock";
import { useOS } from "@/lib/store";
import { profile } from "@/lib/data";

export default function LockScreen() {
  const { time, date } = useClock();
  const { unlock, setIsland } = useOS();
  const [scanning, setScanning] = useState(false);
  const [authed, setAuthed] = useState(false);

  function beginUnlock() {
    if (scanning || authed) return;
    setScanning(true);
    setIsland("faceid");
    setTimeout(() => {
      setAuthed(true);
      setScanning(false);
      setIsland("idle");
    }, 1500);
    setTimeout(() => unlock(), 2100);
  }

  return (
    <motion.div
      className="absolute inset-0 z-40 overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04, filter: "blur(8px)" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Wallpaper */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_-10%,#1b2a5e_0%,#0a0a1f_45%,#000_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(80%_50%_at_80%_90%,rgba(191,90,242,0.25),transparent)]" />

      <div className="relative flex h-full flex-col px-6 pb-6 pt-16">
        {/* Clock */}
        <div className="mt-6 text-center">
          <p className="text-[15px] font-medium text-white/80">{date}</p>
          <p className="mt-1 text-[78px] font-semibold leading-none tracking-tightest text-white drop-shadow-lg tabular-nums">
            {time || "9:41 AM"}
          </p>
        </div>

        {/* Identity widget */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="glass mx-auto mt-10 w-full max-w-[300px] rounded-3xl px-5 py-4 text-center"
        >
          <p className="text-[22px] font-semibold tracking-tight text-white">{profile.name}</p>
          <p className="mt-0.5 text-[15px] font-medium text-[#64d2ff]">{profile.role}</p>
          <p className="text-[13px] text-white/60">{profile.subtitle}</p>
        </motion.div>

        <div className="flex-1" />

        {/* Face ID lock */}
        <div className="flex flex-col items-center gap-5">
          <motion.button
            onClick={beginUnlock}
            whileTap={{ scale: 0.9 }}
            className="relative flex h-16 w-16 items-center justify-center rounded-full"
            aria-label="Unlock with Face ID"
          >
            <AnimatePresence mode="wait">
              {authed ? (
                <motion.div
                  key="open"
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-[#30d158]"
                >
                  <LockIcon open />
                </motion.div>
              ) : scanning ? (
                <motion.div
                  key="scan"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="relative"
                >
                  <FaceScan />
                </motion.div>
              ) : (
                <motion.div key="closed" exit={{ opacity: 0 }} className="text-white">
                  <LockIcon />
                  <span className="absolute -inset-2 animate-[pulse-ring_2s_ease-out_infinite] rounded-full border border-white/30" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Swipe up hint */}
          <SwipeUp onTrigger={beginUnlock} disabled={scanning || authed} />
        </div>
      </div>
    </motion.div>
  );
}

function LockIcon({ open = false }: { open?: boolean }) {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      {open ? (
        <path d="M12 2a5 5 0 0 0-5 5v1H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2H9V7a3 3 0 0 1 6 0 1 1 0 1 0 2 0 5 5 0 0 0-5-5Z" />
      ) : (
        <path d="M12 2a5 5 0 0 0-5 5v1H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5Zm3 6H9V7a3 3 0 0 1 6 0v1Z" />
      )}
    </svg>
  );
}

function FaceScan() {
  return (
    <div className="relative flex h-14 w-14 items-center justify-center">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0a84ff" strokeWidth="1.6" aria-hidden>
        <path d="M3 8V5a2 2 0 0 1 2-2h3M16 3h3a2 2 0 0 1 2 2v3M21 16v3a2 2 0 0 1-2 2h-3M8 21H5a2 2 0 0 1-2-2v-3" strokeLinecap="round" />
        <circle cx="9" cy="10" r="0.6" fill="#0a84ff" />
        <circle cx="15" cy="10" r="0.6" fill="#0a84ff" />
        <path d="M10 15c.7.6 1.3.6 2 .6s1.3 0 2-.6" strokeLinecap="round" />
      </svg>
      <motion.div
        className="absolute left-1 right-1 h-[2px] rounded bg-[#0a84ff] shadow-[0_0_8px_#0a84ff]"
        animate={{ top: ["18%", "78%", "18%"] }}
        transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
      />
    </div>
  );
}

function SwipeUp({ onTrigger, disabled }: { onTrigger: () => void; disabled: boolean }) {
  return (
    <motion.div
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      dragElastic={0.4}
      onDragEnd={(_, info) => {
        if (info.offset.y < -40 && !disabled) onTrigger();
      }}
      className="flex cursor-grab flex-col items-center gap-2 pb-1 active:cursor-grabbing"
    >
      <motion.p
        animate={{ opacity: [0.4, 1, 0.4], y: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="text-[13px] font-medium text-white/70"
      >
        Swipe up to open
      </motion.p>
      <div className="h-[5px] w-32 rounded-full bg-white/60" />
    </motion.div>
  );
}
