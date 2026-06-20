"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import type { SectionConfig } from "@/lib/sections";

export default function SectionShell({
  section,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  section: SectionConfig;
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={`section-${section.id}`}
      className="relative scroll-mt-8 py-20 sm:py-24 lg:py-28"
      aria-labelledby={`heading-${section.id}`}
    >
      {/* Section accent glow */}
      <div
        className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full opacity-20 blur-3xl"
        style={{ background: `radial-gradient(circle, ${section.accent}, transparent 70%)` }}
      />

      <div className="relative w-full max-w-xl px-1 sm:max-w-2xl lg:max-w-none lg:pl-14 lg:pr-2 xl:pl-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p
            className="mb-3 text-[12px] font-semibold uppercase tracking-[0.25em]"
            style={{ color: section.accent }}
          >
            {eyebrow}
          </p>
          <h2
            id={`heading-${section.id}`}
            className="text-4xl font-bold tracking-tightest text-white md:text-5xl lg:text-[3.25rem] lg:leading-[1.05]"
          >
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/55">{subtitle}</p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
