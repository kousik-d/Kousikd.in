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
      "LinkBin does not require an account and does not collect personal information.",
      "When you save a link using the LinkBin Share Extension, the URL is stored locally on your device so that you can access it later.",
    ],
  },
  {
    id: "how-your-data-is-stored",
    title: "How Your Data Is Stored",
    accent: "#30d158",
    body: [
      "Saved links are stored locally on your device using Apple's SwiftData framework.",
      "The LinkBin app and its Share Extension use Apple's App Groups technology to access the same local data store.",
      "Your saved links are not uploaded to a LinkBin server.",
    ],
  },
  {
    id: "data-sharing",
    title: "Data Sharing",
    accent: "#64d2ff",
    body: [
      "LinkBin does not sell, rent, or share your saved links or personal information with third parties.",
    ],
  },
  {
    id: "analytics-and-tracking",
    title: "Analytics and Tracking",
    accent: "#bf5af2",
    body: [
      "LinkBin does not use third-party analytics, advertising SDKs, or tracking technologies.",
    ],
  },
  {
    id: "third-party-websites",
    title: "Third-Party Websites",
    accent: "#ff9f0a",
    body: [
      "When you open a saved link, LinkBin may launch Safari, Chrome, or another browser selected by you.",
      "Any information you provide to those websites is governed by their respective privacy policies.",
    ],
  },
  {
    id: "data-deletion",
    title: "Data Deletion",
    accent: "#5e5ce6",
    body: [
      "You can delete individual saved links from the LinkBin app.",
      "You can also delete all saved links from Settings.",
      "Deleting the LinkBin app will also remove its locally stored application data according to Apple's normal app deletion behavior.",
    ],
  },
  {
    id: "childrens-privacy",
    title: "Children's Privacy",
    accent: "#ffd60a",
    body: [
      "LinkBin does not knowingly collect personal information from children or any other users.",
    ],
  },
  {
    id: "changes",
    title: "Changes to This Privacy Policy",
    accent: "#ff453a",
    body: [
      "This Privacy Policy may be updated from time to time. Any changes will be reflected on this page with an updated effective date.",
    ],
  },
];

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

export default function LinkBinPrivacyPolicy() {
  return (
    <div className="relative min-h-screen bg-black">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_30%_0%,rgba(10,132,255,0.1),transparent_45%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_70%_100%,rgba(191,90,242,0.08),transparent_45%)]" />
      <div className="vignette pointer-events-none fixed inset-0 opacity-40" />

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
          <motion.header
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <p
              className="mb-3 text-[12px] font-semibold uppercase tracking-[0.25em]"
              style={{ color: "#0a84ff" }}
            >
              LinkBin
            </p>
            <h1 className="text-4xl font-bold tracking-tightest text-white md:text-5xl lg:text-[3.25rem] lg:leading-[1.05]">
              <span className="text-gradient">LinkBin Privacy Policy</span>
            </h1>
            <p className="mt-4 text-[14px] font-medium text-white/45">
              Effective Date: August 17, 2026
            </p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              LinkBin is designed with privacy in mind. Your saved links stay on your device.
            </p>
          </motion.header>

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
                  href="https://kousikd.in/linkbin/privacy"
                  className="font-medium text-[#0a84ff] underline-offset-4 transition-colors hover:text-[#4faaff] hover:underline"
                >
                  https://kousikd.in/linkbin/privacy
                </a>
                .
              </p>
            </motion.section>

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
