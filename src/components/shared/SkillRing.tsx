"use client";

import { motion } from "framer-motion";

export default function SkillRing({
  name,
  level,
  color,
  index = 0,
  size = "md",
}: {
  name: string;
  level: number;
  color: string;
  index?: number;
  size?: "sm" | "md" | "lg";
}) {
  const r = size === "lg" ? 38 : size === "sm" ? 24 : 30;
  const dim = size === "lg" ? 96 : size === "sm" ? 64 : 76;
  const c = 2 * Math.PI * r;
  const offset = c - (level / 100) * c;
  const fontSize = size === "lg" ? "text-lg" : size === "sm" ? "text-xs" : "text-[15px]";
  const labelSize = size === "lg" ? "text-xs" : size === "sm" ? "text-[10px]" : "text-[11px]";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="flex flex-col items-center"
    >
      <div className="relative" style={{ width: dim, height: dim }}>
        <svg className="h-full w-full -rotate-90" viewBox={`0 0 ${dim} ${dim}`}>
          <circle
            cx={dim / 2}
            cy={dim / 2}
            r={r}
            fill="none"
            stroke={color}
            strokeOpacity="0.18"
            strokeWidth={size === "lg" ? 10 : 8}
          />
          <motion.circle
            cx={dim / 2}
            cy={dim / 2}
            r={r}
            fill="none"
            stroke={color}
            strokeWidth={size === "lg" ? 10 : 8}
            strokeLinecap="round"
            strokeDasharray={c}
            initial={{ strokeDashoffset: c }}
            whileInView={{ strokeDashoffset: offset }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + index * 0.06, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ filter: `drop-shadow(0 0 6px ${color}88)` }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`font-bold tabular-nums ${fontSize}`} style={{ color }}>
            {level}
          </span>
        </div>
      </div>
      <span className={`mt-1.5 text-center font-medium leading-tight text-white/80 ${labelSize}`}>{name}</span>
    </motion.div>
  );
}
