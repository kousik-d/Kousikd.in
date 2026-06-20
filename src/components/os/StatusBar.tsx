"use client";

import { useClock } from "@/lib/useClock";

export default function StatusBar({ dark = false }: { dark?: boolean }) {
  const { timeShort } = useClock();
  const color = dark ? "text-black" : "text-white";

  return (
    <div className={`relative z-30 flex items-center justify-between px-7 pt-3 text-[13px] font-semibold ${color}`}>
      <span className="tabular-nums tracking-tight">{timeShort || "9:41"}</span>
      <div className="flex items-center gap-1.5">
        {/* Signal */}
        <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor" aria-hidden>
          <rect x="0" y="7" width="3" height="4" rx="1" />
          <rect x="4.5" y="5" width="3" height="6" rx="1" />
          <rect x="9" y="2.5" width="3" height="8.5" rx="1" />
          <rect x="13.5" y="0" width="3" height="11" rx="1" />
        </svg>
        {/* Wifi */}
        <svg width="16" height="11" viewBox="0 0 16 12" fill="currentColor" aria-hidden>
          <path d="M8 2.5c2.5 0 4.8 1 6.5 2.6l-1.4 1.5A7.3 7.3 0 0 0 8 4.6 7.3 7.3 0 0 0 2.9 6.6L1.5 5.1A9.3 9.3 0 0 1 8 2.5Z" />
          <path d="M8 6.2c1.5 0 2.9.6 3.9 1.6l-1.5 1.5A3.4 3.4 0 0 0 8 8.3c-.9 0-1.7.3-2.4.9L4.1 7.8A5.4 5.4 0 0 1 8 6.2Z" />
          <circle cx="8" cy="10.4" r="1.4" />
        </svg>
        {/* Battery */}
        <div className="flex items-center gap-0.5">
          <div className="relative h-[11px] w-[23px] rounded-[3px] border border-current/40">
            <div className="absolute inset-[1.5px] right-[5px] rounded-[1px] bg-current" />
          </div>
          <div className="h-[4px] w-[1.5px] rounded-r bg-current/50" />
        </div>
      </div>
    </div>
  );
}
