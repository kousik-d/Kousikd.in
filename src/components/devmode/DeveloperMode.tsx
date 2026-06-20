"use client";

import { motion } from "framer-motion";
import { useOS } from "@/lib/store";

export default function DeveloperMode() {
  const { setDevMode } = useOS();

  return (
    <motion.div
      className="fixed inset-0 z-[100] overflow-y-auto bg-[#04060d] thin-scroll"
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Grid backdrop */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(10,132,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(10,132,255,0.4) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(94,92,230,0.25),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-5 py-8 md:px-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.span
              animate={{ boxShadow: ["0 0 0 0 rgba(48,209,88,0.6)", "0 0 0 8px rgba(48,209,88,0)"] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="h-2.5 w-2.5 rounded-full bg-[#30d158]"
            />
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#30d158]">Developer Mode</p>
              <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Engineering Dashboard</h1>
            </div>
          </div>
          <button
            onClick={() => setDevMode(false)}
            className="rounded-full glass px-4 py-2 text-[13px] font-semibold text-white/80 transition-colors hover:text-white"
          >
            ✕ Exit
          </button>
        </div>

        <p className="mt-2 max-w-2xl font-mono text-[13px] text-white/45">
          A behind-the-scenes look at how I architect, ship and monitor iOS solutions at scale.
        </p>

        {/* Live stat bar */}
        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          {[
            { k: "uptime", v: "99.98%", c: "#30d158" },
            { k: "p95_latency", v: "42ms", c: "#0a84ff" },
            { k: "crash_free", v: "96.0%", c: "#ffd60a" },
            { k: "active_modules", v: "20+", c: "#bf5af2" },
          ].map((s, i) => (
            <motion.div
              key={s.k}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl glass p-4"
            >
              <p className="font-mono text-[11px] text-white/40">{s.k}</p>
              <p className="text-2xl font-bold tabular-nums" style={{ color: s.c }}>{s.v}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <Panel title="Mobile Architecture" subtitle="Modular, clean, testable">
            <ArchitectureDiagram />
          </Panel>
          <Panel title="Component Lifecycle" subtitle="Init → Config → Runtime → Teardown">
            <ComponentLifecycle />
          </Panel>
          <Panel title="CI / CD Flow" subtitle="Commit to App Store">
            <CICDFlow />
          </Panel>
          <Panel title="Analytics Pipeline" subtitle="Event → Ingest → Insight">
            <AnalyticsPipeline />
          </Panel>
          <Panel title="Performance Monitoring" subtitle="Realtime telemetry" wide>
            <PerfChart />
          </Panel>
        </div>

        <p className="mt-8 text-center font-mono text-[11px] text-white/30">
          // crafted by Kousik Dasari — tap Exit to return to the home screen
        </p>
      </div>
    </motion.div>
  );
}

function Panel({ title, subtitle, children, wide }: { title: string; subtitle: string; children: React.ReactNode; wide?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`rounded-3xl glass p-5 ${wide ? "lg:col-span-2" : ""}`}
    >
      <div className="mb-4 flex items-baseline justify-between">
        <h2 className="text-[16px] font-semibold text-white">{title}</h2>
        <span className="font-mono text-[11px] text-white/40">{subtitle}</span>
      </div>
      {children}
    </motion.div>
  );
}

function Node({ label, color = "#0a84ff" }: { label: string; color?: string }) {
  return (
    <div
      className="rounded-xl border px-3 py-2 text-center text-[12px] font-medium text-white"
      style={{ borderColor: `${color}66`, background: `${color}1a` }}
    >
      {label}
    </div>
  );
}

function ArchitectureDiagram() {
  return (
    <div className="space-y-2.5 font-mono">
      <Node label="UI Layer · SwiftUI / UIKit" color="#0a84ff" />
      <Arrow />
      <Node label="ViewModel · MVVM-C" color="#5e5ce6" />
      <Arrow />
      <div className="grid grid-cols-2 gap-2.5">
        <Node label="Domain · Use Cases" color="#bf5af2" />
        <Node label="DI Container" color="#bf5af2" />
      </div>
      <Arrow />
      <div className="grid grid-cols-3 gap-2.5">
        <Node label="Network" color="#30d158" />
        <Node label="Cache" color="#30d158" />
        <Node label="Keychain" color="#30d158" />
      </div>
    </div>
  );
}

function Arrow() {
  return <div className="mx-auto h-4 w-px bg-gradient-to-b from-white/40 to-transparent" />;
}

function ComponentLifecycle() {
  const steps = ["initialize()", "configure(apiKey)", "track(event)", "flush()", "teardown()"];
  return (
    <div className="space-y-3">
      {steps.map((s, i) => (
        <motion.div
          key={s}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="flex items-center gap-3"
        >
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0a84ff]/20 font-mono text-[12px] text-[#0a84ff]">
            {i + 1}
          </span>
          <code className="flex-1 rounded-lg bg-white/5 px-3 py-1.5 font-mono text-[12px] text-[#64d2ff]">{s}</code>
        </motion.div>
      ))}
    </div>
  );
}

function CICDFlow() {
  const stages = [
    { label: "Commit", icon: "⌨️", color: "#8e8e93" },
    { label: "Build", icon: "🔨", color: "#0a84ff" },
    { label: "Test", icon: "🧪", color: "#bf5af2" },
    { label: "Sign", icon: "🔏", color: "#ff9f0a" },
    { label: "TestFlight", icon: "✈️", color: "#30d158" },
    { label: "App Store", icon: "🚀", color: "#ff375f" },
  ];
  return (
    <div className="flex flex-wrap items-center gap-2">
      {stages.map((s, i) => (
        <div key={s.label} className="flex items-center gap-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex flex-col items-center gap-1 rounded-xl px-3 py-2"
            style={{ background: `${s.color}1a`, border: `1px solid ${s.color}55` }}
          >
            <span>{s.icon}</span>
            <span className="font-mono text-[10px] text-white/80">{s.label}</span>
          </motion.div>
          {i < stages.length - 1 && <span className="text-white/30">→</span>}
        </div>
      ))}
    </div>
  );
}

function AnalyticsPipeline() {
  const stages = ["Event Capture", "Batching & Queue", "Secure Upload", "Stream Ingest", "Dashboards"];
  return (
    <div className="relative">
      <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-[#64d2ff] to-[#0a84ff]" />
      <div className="space-y-3.5">
        {stages.map((s, i) => (
          <motion.div
            key={s}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-3"
          >
            <span className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-[#04060d] ring-2 ring-[#64d2ff]">
              <span className="h-2 w-2 rounded-full bg-[#64d2ff]" />
            </span>
            <span className="text-[13px] text-white/80">{s}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function PerfChart() {
  const bars = [62, 48, 75, 40, 88, 55, 70, 45, 92, 60, 78, 50, 84, 66];
  return (
    <div>
      <div className="flex h-40 items-end gap-2">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04, type: "spring", stiffness: 120, damping: 14 }}
            className="flex-1 rounded-t-md"
            style={{
              background: `linear-gradient(180deg, #64d2ff, #0a84ff)`,
              boxShadow: "0 0 12px rgba(10,132,255,0.4)",
            }}
          />
        ))}
      </div>
      <div className="mt-3 flex justify-between font-mono text-[10px] text-white/40">
        <span>CPU · Memory · FPS · Net (last 14 samples)</span>
        <span className="text-[#30d158]">▲ stable</span>
      </div>
    </div>
  );
}
