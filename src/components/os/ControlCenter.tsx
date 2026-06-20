"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useOS } from "@/lib/store";

export default function ControlCenter() {
  const { toggleControlCenter, setDevMode } = useOS();
  const [toggles, setToggles] = useState({ wifi: true, bt: true, focus: false, airplane: false });
  const [brightness, setBrightness] = useState(80);

  return (
    <motion.div
      className="absolute inset-0 z-[70]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-xl"
        onClick={() => toggleControlCenter(false)}
      />
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -30, opacity: 0 }}
        transition={{ type: "spring", stiffness: 320, damping: 30 }}
        className="absolute inset-x-3 top-14 grid grid-cols-4 gap-3"
      >
        {/* Connectivity cluster */}
        <div className="col-span-2 grid grid-cols-2 gap-3 rounded-3xl glass-dark p-3">
          <Toggle label="Airplane" icon="✈️" on={toggles.airplane} color="#ff9f0a" onClick={() => setToggles((t) => ({ ...t, airplane: !t.airplane }))} />
          <Toggle label="AirDrop" icon="📡" on color="#0a84ff" onClick={() => {}} />
          <Toggle label="Wi-Fi" icon="📶" on={toggles.wifi} color="#0a84ff" onClick={() => setToggles((t) => ({ ...t, wifi: !t.wifi }))} />
          <Toggle label="Bluetooth" icon="🔵" on={toggles.bt} color="#0a84ff" onClick={() => setToggles((t) => ({ ...t, bt: !t.bt }))} />
        </div>

        {/* Music */}
        <div className="col-span-2 flex flex-col justify-center rounded-3xl glass-dark p-4">
          <p className="text-[13px] font-semibold text-white">Now Building</p>
          <p className="truncate text-[11px] text-white/55">v2.4.0 · Xcode · Ready</p>
          <div className="mt-2 flex items-center gap-3 text-white">
            <span>⏮</span>
            <span className="text-lg">⏸</span>
            <span>⏭</span>
          </div>
        </div>

        {/* Focus */}
        <Tile className="col-span-2" onClick={() => setToggles((t) => ({ ...t, focus: !t.focus }))}>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full" style={{ background: toggles.focus ? "#bf5af2" : "rgba(255,255,255,0.12)" }}>
              🌙
            </span>
            <div>
              <p className="text-[13px] font-semibold text-white">Focus</p>
              <p className="text-[11px] text-white/50">{toggles.focus ? "On" : "Off"}</p>
            </div>
          </div>
        </Tile>

        {/* Brightness slider */}
        <div className="col-span-1 flex justify-center rounded-3xl glass-dark p-2">
          <Slider value={brightness} onChange={setBrightness} icon="☀️" />
        </div>

        {/* Dev mode tile */}
        <Tile className="col-span-1" onClick={() => { setDevMode(true); toggleControlCenter(false); }}>
          <div className="flex h-full flex-col items-center justify-center gap-1">
            <span className="text-xl">🧪</span>
            <p className="text-center text-[10px] font-semibold leading-tight text-white">Developer<br />Mode</p>
          </div>
        </Tile>
      </motion.div>
    </motion.div>
  );
}

function Toggle({ label, icon, on, color, onClick }: { label: string; icon: string; on: boolean; color: string; onClick: () => void }) {
  return (
    <button onClick={onClick} className="flex items-center gap-2">
      <span
        className="flex h-9 w-9 items-center justify-center rounded-full text-sm transition-colors"
        style={{ background: on ? color : "rgba(255,255,255,0.12)" }}
      >
        {icon}
      </span>
      <span className="text-left text-[10px] font-medium leading-tight text-white/80">{label}</span>
    </button>
  );
}

function Tile({ children, className = "", onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) {
  return (
    <motion.button whileTap={{ scale: 0.96 }} onClick={onClick} className={`rounded-3xl glass-dark p-3 text-left ${className}`}>
      {children}
    </motion.button>
  );
}

function Slider({ value, onChange, icon }: { value: number; onChange: (v: number) => void; icon: string }) {
  return (
    <div
      className="relative flex h-32 w-14 cursor-pointer flex-col-reverse items-center justify-start overflow-hidden rounded-2xl bg-white/10"
      onClick={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const v = Math.round((1 - (e.clientY - rect.top) / rect.height) * 100);
        onChange(Math.max(5, Math.min(100, v)));
      }}
    >
      <div className="absolute bottom-0 w-full bg-white" style={{ height: `${value}%` }} />
      <span className="absolute bottom-2 text-sm mix-blend-difference">{icon}</span>
    </div>
  );
}
