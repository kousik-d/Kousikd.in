"use client";

import { motion } from "framer-motion";
import { metrics } from "@/lib/data";
import { sections } from "@/lib/sections";
import CountUp from "@/components/shared/CountUp";
import SectionShell from "./SectionShell";

export default function ImpactSection() {
  const section = sections.find((s) => s.id === "impact")!;

  return (
    <SectionShell
      section={section}
      eyebrow="05 — Impact"
      title={
        <>
          Real outcomes at{" "}
          <span className="text-[#64d2ff]">scale</span>
        </>
      }
      subtitle="Metrics from production iOS solutions serving millions of users daily."
    >
      {/* Hero metric */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative mb-8 overflow-hidden rounded-3xl glass p-8 text-center lg:p-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(10,132,255,0.25),transparent_60%)]" />
        <p className="relative text-6xl font-bold leading-none tracking-tightest text-white md:text-7xl lg:text-8xl">
          <CountUp value={50} />
          <span className="text-[#64d2ff]">M+</span>
        </p>
        <p className="relative mt-2 text-lg font-medium text-white/70">Monthly Active Users</p>
        <p className="relative text-[14px] text-white/45">Powered by components I build & maintain</p>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {metrics.slice(1).map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="relative overflow-hidden rounded-2xl glass p-5"
          >
            <div
              className="absolute -right-4 -top-4 h-20 w-20 rounded-full opacity-20 blur-xl"
              style={{ background: m.color }}
            />
            <p className="text-4xl font-bold tabular-nums" style={{ color: m.color }}>
              <CountUp value={m.value} />
              {m.suffix}
            </p>
            <p className="mt-1 text-[15px] font-semibold text-white/90">{m.label}</p>
            <p className="text-[13px] text-white/45">{m.detail}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 space-y-3">
        {[
          "Multiple iOS features delivered to production",
          "Performance optimizations across memory & load time",
          "Crash reduction initiatives → 96% crash-free sessions",
        ].map((line, i) => (
          <motion.div
            key={line}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex items-center gap-4 rounded-2xl glass-thin px-5 py-4"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#64d2ff]/15 text-[#64d2ff]">
              ✓
            </span>
            <span className="text-[15px] text-white/80">{line}</span>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
