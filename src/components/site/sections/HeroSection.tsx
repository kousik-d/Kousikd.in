"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";
import { sections } from "@/lib/sections";
import CountUp from "@/components/shared/CountUp";

export default function HeroSection() {
  const section = sections[0];

  return (
    <section
      id="section-hero"
      className="relative flex min-h-[70vh] scroll-mt-8 items-center py-20 sm:py-24 lg:min-h-screen lg:py-28"
    >
      <div
        className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, #0a84ff, transparent 70%)" }}
      />

      <div className="relative w-full max-w-xl px-1 sm:max-w-2xl lg:max-w-lg lg:pl-14 lg:pr-0 xl:pl-16 xl:max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Availability badge */}
          <div className="mb-8 inline-flex items-center gap-2.5 rounded-full glass px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#30d158] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#30d158]" />
            </span>
            <span className="text-[13px] font-medium text-white/75">Open to opportunities</span>
          </div>

          <p className="text-[13px] font-semibold uppercase tracking-[0.3em] text-[#64d2ff]">
            iOS Software Engineer
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tightest md:text-6xl lg:text-7xl xl:text-[5.5rem] xl:leading-[0.95]">
            <span className="text-gradient">{profile.name.split(" ")[0]}</span>
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(135deg, ${section.gradient[0]}, ${section.gradient[1]})`,
              }}
            >
              {profile.name.split(" ")[1]}
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-xl leading-relaxed text-white/60 md:text-2xl">
            {profile.shortBio}
          </p>

          {/* Metric chips */}
          <div className="mt-10 flex flex-wrap gap-3">
            {[
              { value: 50, suffix: "M+", label: "MAU served" },
              { value: 96, suffix: "%", label: "Crash-free" },
              { value: 20, suffix: "+", label: "Enterprise clients" },
            ].map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="rounded-2xl glass px-5 py-3"
              >
                <p className="text-2xl font-bold tabular-nums text-white">
                  <CountUp value={m.value} />
                  <span className="text-[#64d2ff]">{m.suffix}</span>
                </p>
                <p className="text-[12px] font-medium text-white/45">{m.label}</p>
              </motion.div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-4">
            <motion.a
              href={profile.resumeUrl}
              download
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#0a84ff] to-[#5e5ce6] px-7 py-3.5 text-[15px] font-semibold shadow-[0_8px_32px_rgba(10,132,255,0.35)]"
            >
              Download Résumé
            </motion.a>
            <motion.a
              href={`mailto:${profile.email}`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-2xl glass px-7 py-3.5 text-[15px] font-semibold text-white/90"
            >
              Get in touch
            </motion.a>
          </div>

          {/* Social links */}
          <div className="mt-8 flex items-center gap-6">
            {[
              { label: "GitHub", href: profile.github },
              { label: "LinkedIn", href: profile.linkedin },
              { label: profile.email, href: `mailto:${profile.email}` },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="text-[13px] font-medium text-white/40 transition-colors hover:text-white/80"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 hidden items-center gap-3 text-white/35 lg:flex"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="h-8 w-[1px] bg-gradient-to-b from-transparent via-white/40 to-transparent"
          />
          <span className="text-[12px] font-medium uppercase tracking-[0.2em]">Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  );
}
