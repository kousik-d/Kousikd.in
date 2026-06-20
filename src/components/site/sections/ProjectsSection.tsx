"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type Project } from "@/lib/data";
import { sections } from "@/lib/sections";
import ProjectCover, { ProjectImage } from "@/components/shared/ProjectCover";
import SectionShell from "./SectionShell";

export default function ProjectsSection() {
  const section = sections.find((s) => s.id === "projects")!;
  const [active, setActive] = useState<Project | null>(null);

  return (
    <SectionShell
      section={section}
      eyebrow="03 — Projects"
      title={
        <>
          App Store–quality{" "}
          <span className="text-[#ff9f0a]">side projects</span>
        </>
      }
      subtitle="Production-minded apps and open-source tools built with Swift and SwiftUI."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.button
            key={p.id}
            onClick={() => setActive(p)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="group overflow-hidden rounded-3xl text-left glass transition-shadow hover:shadow-[0_20px_60px_-20px_rgba(255,159,10,0.25)]"
          >
            <ProjectCover
              src={p.coverImage}
              alt={`${p.name} preview`}
              accent={p.accent}
              icon={p.icon}
              category={p.category}
              badge={p.status === "in-progress" ? "In Progress" : undefined}
              className="h-44"
            />
            <div className="p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-white">{p.name}</h3>
                  <p className="mt-0.5 text-[14px] text-white/55">{p.tagline}</p>
                </div>
                <span
                  className="shrink-0 rounded-full px-3 py-1 text-[12px] font-bold"
                  style={{
                    background: p.status === "in-progress" ? `${p.accent}22` : "rgba(255,255,255,0.1)",
                    color: p.status === "in-progress" ? p.accent : "#ff9f0a",
                  }}
                >
                  {p.status === "in-progress" ? "WIP" : "GET"}
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.slice(0, 4).map((t) => (
                  <span key={t} className="rounded-lg bg-white/8 px-2 py-0.5 text-[11px] font-medium text-white/70">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </SectionShell>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [shot, setShot] = useState(0);
  const gallery = project.screenshots.length > 0 ? project.screenshots : [project.coverImage];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-[#0c0d16] thin-scroll shadow-2xl"
      >
        <div className="relative">
          <div className="relative h-52 w-full overflow-hidden bg-black/40">
            <ProjectImage
              src={gallery[shot]}
              alt={`${project.name} screenshot ${shot + 1}`}
              fill
              className="object-cover object-top"
            />
            {project.status === "in-progress" && (
              <span className="absolute left-4 top-4 rounded-full bg-black/50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur" style={{ color: project.accent }}>
                In Progress
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur"
            aria-label="Close"
          >
            ✕
          </button>
          {gallery.length > 1 && (
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
              {gallery.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setShot(i)}
                  className={`h-1.5 rounded-full transition-all ${i === shot ? "w-6 bg-white" : "w-1.5 bg-white/40"}`}
                  aria-label={`Screenshot ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-bold">{project.name}</h3>
          <p className="text-white/55">{project.tagline}</p>
          <p className="mt-4 text-[15px] leading-relaxed text-white/75">{project.description}</p>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-1 rounded-full glass px-4 py-2 text-[13px] font-semibold"
              style={{ color: project.accent }}
            >
              View on GitHub →
            </a>
          )}

          {gallery.length > 1 && (
            <div className="mt-6">
              <h4 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/40">Screenshots</h4>
              <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
                {gallery.map((src, i) => (
                  <button
                    key={src}
                    onClick={() => setShot(i)}
                    className={`relative h-24 w-14 shrink-0 overflow-hidden rounded-xl border-2 transition-colors ${i === shot ? "border-white" : "border-transparent opacity-60"}`}
                  >
                    <ProjectImage src={src} alt="" fill className="object-cover object-top" />
                  </button>
                ))}
              </div>
            </div>
          )}

          <Block title="Architecture">{project.architecture}</Block>
          <Block title="Challenges">
            <ul className="space-y-2">
              {project.challenges.map((c) => (
                <li key={c} className="flex gap-2 text-[14px] text-white/70">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: project.accent }} />
                  {c}
                </li>
              ))}
            </ul>
          </Block>
          <Block title="Impact">
            <div className="grid gap-2">
              {project.impact.map((im) => (
                <div key={im} className="rounded-xl glass-thin px-3 py-2 text-[13px] text-white/80">
                  ✓ {im}
                </div>
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
      <h4 className="mb-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/40">{title}</h4>
      <div className="text-[14px] leading-relaxed text-white/75">{children}</div>
    </div>
  );
}
