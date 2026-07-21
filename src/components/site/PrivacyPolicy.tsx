"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";
import Footer from "./Footer";

const EASE = [0.16, 1, 0.3, 1] as const;

type PolicySection = {
  id: string;
  title: string;
  accent: string;
  body: string[];
};

const sections: PolicySection[] = [
  {
    id: "information-we-collect",
    title: "Information We Collect",
    accent: "#0a84ff",
    body: [
      "Across Time does not collect, transmit, or sell any personal information.",
      "All alarms and app preferences are stored locally on your device.",
    ],
  },
  {
    id: "notifications",
    title: "Notifications",
    accent: "#30d158",
    body: [
      "The app requests notification permission solely to deliver alarms and reminders that you create.",
      "Notification permission can be revoked at any time from iOS Settings.",
    ],
  },
  {
    id: "location",
    title: "Location",
    accent: "#ff9f0a",
    body: [
      "Across Time does not access your GPS location.",
      "When selecting a time zone, you manually choose a city from the built-in list.",
    ],
  },
  {
    id: "analytics",
    title: "Analytics",
    accent: "#bf5af2",
    body: ["Across Time does not use third-party analytics services."],
  },
  {
    id: "advertising",
    title: "Advertising",
    accent: "#ff375f",
    body: ["Across Time does not display advertisements."],
  },
  {
    id: "data-sharing",
    title: "Data Sharing",
    accent: "#64d2ff",
    body: [
      "We do not sell, rent, or share your personal information with third parties.",
    ],
  },
  {
    id: "data-security",
    title: "Data Security",
    accent: "#5e5ce6",
    body: [
      "Since your data remains on your device, no personal information is stored on external servers.",
    ],
  },
  {
    id: "childrens-privacy",
    title: "Children's Privacy",
    accent: "#ffd60a",
    body: ["Across Time does not knowingly collect information from children."],
  },
  {
    id: "changes",
    title: "Changes",
    accent: "#ff453a",
    body: ["This Privacy Policy may be updated periodically."],
  },
];

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

export default function PrivacyPolicy() {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Background layers — matched to the site's ambient gradients */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_30%_0%,rgba(10,132,255,0.1),transparent_45%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_70%_100%,rgba(191,90,242,0.08),transparent_45%)]" />
      <div className="vignette pointer-events-none fixed inset-0 opacity-40" />

      {/* Top bar — lightweight navigation back to the portfolio */}
      <header className="sticky top-0 z-20">
        <div className="glass-dark border-b border-white/8">
          <nav
            aria-label="Primary"
            className="mx-auto flex w-full max-w-3xl items-center justify-between px-5 py-3.5 sm:px-6"
          >
            <Link
              href="/"
              className="group flex items-center gap-2 text-[14px] font-medium text-white/70 transition-colors hover:text-white"
            >
              <span aria-hidden className="transition-transform group-hover:-translate-x-0.5">
                ‹
              </span>
              {profile.name}
            </Link>
            <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white/35">
              Legal
            </span>
          </nav>
        </div>
      </header>

      <main className="relative z-10 mx-auto w-full max-w-3xl px-5 pb-8 pt-14 sm:px-6 sm:pt-20">
        <article>
          {/* Hero */}
          <motion.header
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <p
              className="mb-3 text-[12px] font-semibold uppercase tracking-[0.25em]"
              style={{ color: "#0a84ff" }}
            >
              Across Time – Beyond Time
            </p>
            <h1 className="text-4xl font-bold tracking-tightest text-white md:text-5xl lg:text-[3.25rem] lg:leading-[1.05]">
              <span className="text-gradient">Privacy Policy</span>
            </h1>
            <p className="mt-4 text-[14px] font-medium text-white/45">
              Effective Date: July 2026
            </p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              Across Time (&ldquo;the App&rdquo;) is developed by {profile.name}. Your
              privacy is important to us. This Privacy Policy explains how the app handles
              your information.
            </p>
          </motion.header>

          {/* Policy sections */}
          <div className="mt-12 space-y-5">
            {sections.map((section, i) => (
              <motion.section
                key={section.id}
                id={section.id}
                aria-labelledby={`heading-${section.id}`}
                initial={reveal.initial}
                whileInView={reveal.whileInView}
                viewport={reveal.viewport}
                transition={{ duration: 0.55, delay: Math.min(i, 4) * 0.04, ease: EASE }}
                className="relative overflow-hidden rounded-3xl glass-thin p-6 sm:p-8"
              >
                <span
                  aria-hidden
                  className="absolute left-0 top-0 h-full w-1"
                  style={{ background: section.accent }}
                />
                <h2
                  id={`heading-${section.id}`}
                  className="flex items-center gap-3 text-xl font-semibold text-white sm:text-2xl"
                >
                  <span
                    aria-hidden
                    className="inline-block h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{ background: section.accent }}
                  />
                  {section.title}
                </h2>
                <div className="mt-4 space-y-3">
                  {section.body.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-[15px] leading-relaxed text-white/70 sm:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.section>
            ))}

            {/* Changes — continued: canonical URL callout */}
            <motion.section
              aria-labelledby="heading-latest-version"
              initial={reveal.initial}
              whileInView={reveal.whileInView}
              viewport={reveal.viewport}
              transition={{ duration: 0.55, ease: EASE }}
              className="rounded-3xl glass-thin p-6 sm:p-8"
            >
              <h2
                id="heading-latest-version"
                className="text-[13px] font-semibold uppercase tracking-[0.15em] text-white/40"
              >
                Latest Version
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-white/70 sm:text-base">
                The latest version will always be available at{" "}
                <a
                  href="https://kousik.in/privacy"
                  className="font-medium text-[#0a84ff] underline-offset-4 transition-colors hover:text-[#4faaff] hover:underline"
                >
                  https://kousik.in/privacy
                </a>
                .
              </p>
            </motion.section>

            {/* Contact card */}
            <motion.section
              aria-labelledby="heading-contact"
              initial={reveal.initial}
              whileInView={reveal.whileInView}
              viewport={reveal.viewport}
              transition={{ duration: 0.55, ease: EASE }}
              className="overflow-hidden rounded-3xl glass"
            >
              <div className="border-b border-white/8 px-6 py-5 sm:px-8">
                <h2
                  id="heading-contact"
                  className="flex items-center gap-3 text-xl font-semibold text-white sm:text-2xl"
                >
                  <span
                    aria-hidden
                    className="inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-[#30d158]"
                  />
                  Contact
                </h2>
              </div>
              <dl>
                <div className="flex items-center gap-4 border-b border-white/8 px-6 py-5 sm:px-8">
                  <dt className="w-24 shrink-0 text-[11px] uppercase tracking-wide text-white/40">
                    Developer
                  </dt>
                  <dd className="text-[16px] font-medium text-white">{profile.name}</dd>
                </div>
                <div className="flex items-center gap-4 border-b border-white/8 px-6 py-5 sm:px-8">
                  <dt className="w-24 shrink-0 text-[11px] uppercase tracking-wide text-white/40">
                    Website
                  </dt>
                  <dd className="min-w-0 truncate text-[16px] font-medium">
                    <a
                      href="https://kousik.in"
                      className="text-white transition-colors hover:text-[#0a84ff]"
                    >
                      https://kousik.in
                    </a>
                  </dd>
                </div>
                <div className="flex items-center gap-4 px-6 py-5 sm:px-8">
                  <dt className="w-24 shrink-0 text-[11px] uppercase tracking-wide text-white/40">
                    Email
                  </dt>
                  <dd className="min-w-0 truncate text-[16px] font-medium">
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-white transition-colors hover:text-[#30d158]"
                    >
                      {profile.email}
                    </a>
                  </dd>
                </div>
              </dl>
            </motion.section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
