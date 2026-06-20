"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type Project } from "@/lib/data";
import ProjectCover, { ProjectImage } from "@/components/shared/ProjectCover";
import AppWindow from "../os/AppWindow";

export default function ProjectsApp() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <AppWindow title="Projects" accent="#ff9f0a">
      <p className="mb-1 text-[28px] font-bold tracking-tight">Featured</p>
      <p className="mb-5 text-[14px] text-white/55">Apps & open-source I&apos;ve crafted.</p>

      <div className="space-y-4">
        {projects.map((p, i) => (
          <motion.button
            key={p.id}
            layoutId={`card-${p.id}`}
            onClick={() => setActive(p)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            whileTap={{ scale: 0.98 }}
            className="block w-full overflow-hidden rounded-3xl text-left glass"
          >
            <ProjectCover
              src={p.coverImage}
              alt={p.name}
              accent={p.accent}
              icon={p.icon}
              category={p.category}
              badge={p.status === "in-progress" ? "WIP" : undefined}
              className="h-32"
            />
            <div className="flex items-center justify-between gap-3 p-4">
              <div className="min-w-0">
                <h3 className="truncate text-[16px] font-semibold">{p.name}</h3>
                <p className="truncate text-[13px] text-white/55">{p.tagline}</p>
              </div>
              <span
                className="shrink-0 rounded-full px-4 py-1.5 text-[13px] font-semibold"
                style={{
                  background: p.status === "in-progress" ? `${p.accent}22` : "rgba(255,255,255,0.12)",
                  color: p.status === "in-progress" ? p.accent : "#ff9f0a",
                }}
              >
                {p.status === "in-progress" ? "WIP" : "GET"}
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && <ProjectDetail project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </AppWindow>
  );
}

function ProjectDetail({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-30 flex items-end justify-center"
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        layoutId={`card-${project.id}`}
        className="relative z-10 max-h-[88%] w-full overflow-y-auto rounded-t-[2rem] bg-[#0c0d16] thin-scroll"
      >
        <div className="relative h-44 w-full overflow-hidden bg-black/40">
          <ProjectImage src={project.coverImage} alt={project.name} fill className="object-cover object-center" />
          <button
            onClick={onClose}
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="p-5">
          <h2 className="text-2xl font-bold tracking-tight">{project.name}</h2>
          <p className="text-[14px] text-white/55">{project.tagline}</p>
          <p className="mt-3 text-[14px] leading-relaxed text-white/75">{project.description}</p>

          {project.screenshots.length > 0 && (
            <div className="mt-4 flex gap-2 overflow-x-auto no-scrollbar">
              {project.screenshots.map((src) => (
                <div key={src} className="relative h-28 w-16 shrink-0 overflow-hidden rounded-xl">
                  <ProjectImage src={src} alt="" fill className="object-cover object-top" />
                </div>
              ))}
            </div>
          )}

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white/12 px-4 py-2 text-[13px] font-semibold"
              style={{ color: project.accent }}
            >
              View on GitHub →
            </a>
          )}

          <Block title="Tech Stack">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="rounded-lg glass-thin px-2.5 py-1 text-[12px] font-medium text-white/80">
                  {t}
                </span>
              ))}
            </div>
          </Block>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-6">
      <h3 className="mb-2 text-[12px] font-semibold uppercase tracking-[0.15em] text-white/40">{title}</h3>
      {children}
    </div>
  );
}
