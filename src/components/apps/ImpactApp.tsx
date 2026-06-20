"use client";

import { motion } from "framer-motion";
import { metrics, type Metric } from "@/lib/data";
import CountUp from "@/components/shared/CountUp";
import AppWindow from "../os/AppWindow";

export default function ImpactApp() {
  return (
    <AppWindow title="Impact" accent="#64d2ff">
      <p className="mb-1 text-[28px] font-bold tracking-tight">By the numbers</p>
      <p className="mb-6 text-[14px] text-white/55">Real outcomes from production iOS work.</p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative overflow-hidden rounded-3xl glass p-6 text-center"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(10,132,255,0.3),transparent_60%)]" />
        <div className="relative">
          <p className="text-[64px] font-bold leading-none tracking-tightest text-white">
            <CountUp value={50} />
            <span className="text-[#64d2ff]">M+</span>
          </p>
          <p className="mt-1 text-[15px] font-medium text-white/70">Monthly Active Users</p>
          <p className="text-[12px] text-white/45">powered by components I build & maintain</p>
        </div>
      </motion.div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        {metrics.slice(1).map((m, i) => (
          <MetricCard key={m.label} metric={m} index={i} />
        ))}
      </div>

      <div className="mt-6 space-y-2.5">
        {[
          "Multiple iOS features delivered to production",
          "Performance optimizations across memory & load time",
          "Crash reduction initiatives → 96% crash-free sessions",
        ].map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex items-center gap-3 rounded-2xl glass-thin px-4 py-3"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#64d2ff]/15 text-[#64d2ff]">✓</span>
            <span className="text-[13px] text-white/80">{line}</span>
          </motion.div>
        ))}
      </div>
    </AppWindow>
  );
}

function MetricCard({ metric, index }: { metric: Metric; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="relative overflow-hidden rounded-2xl glass p-4"
    >
      <div
        className="absolute -right-4 -top-4 h-16 w-16 rounded-full opacity-25 blur-xl"
        style={{ background: metric.color }}
      />
      <p className="text-[34px] font-bold leading-none tracking-tight" style={{ color: metric.color }}>
        <CountUp value={metric.value} />
        {metric.suffix}
      </p>
      <p className="mt-1.5 text-[13px] font-semibold text-white/85">{metric.label}</p>
      <p className="text-[11px] leading-tight text-white/45">{metric.detail}</p>
    </motion.div>
  );
}
