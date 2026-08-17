"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";
import Footer from "./Footer";

const EASE = [0.16, 1, 0.3, 1] as const;

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

const faqs: { id: string; question: string; answer: string }[] = [
  {
    id: "save-link",
    question: "How do I save a link?",
    answer:
      "Open the link in Safari or another app, tap the Share button, and select LinkBin. The link will automatically be saved.",
  },
  {
    id: "where-stored",
    question: "Where are my saved links stored?",
    answer:
      "Your links are stored locally on your device. LinkBin does not upload your saved links to a server.",
  },
  {
    id: "open-link",
    question: "How do I open a saved link?",
    answer:
      "Tap the saved link. LinkBin will open it using the browser selected in Settings.",
  },
  {
    id: "chrome",
    question: "Can I use Chrome instead of Safari?",
    answer:
      'Yes. Open LinkBin Settings and choose Safari or Chrome under "Open Links". If Chrome is not installed, LinkBin will fall back to Safari.',
  },
  {
    id: "copy-link",
    question: "How do I copy a link?",
    answer: "Long-press any saved link and LinkBin will copy the URL to your clipboard.",
  },
  {
    id: "delete-link",
    question: "How do I delete a link?",
    answer: "Use the delete action provided for the saved link.",
  },
  {
    id: "delete-all",
    question: "How do I delete all links?",
    answer: "Open Settings → Storage → Clear All Links.",
  },
  {
    id: "account",
    question: "Does LinkBin require an account?",
    answer: "No. LinkBin does not require an account or sign-in.",
  },
  {
    id: "tracking",
    question: "Does LinkBin track me?",
    answer: "No. LinkBin does not use analytics, advertising, or tracking.",
  },
  {
    id: "share-extension",
    question: "My LinkBin Share Extension isn't appearing. What should I do?",
    answer:
      "Make sure LinkBin is installed and try opening the Share Sheet again. If LinkBin still doesn't appear, restart the app and try again.",
  },
];

export default function LinkBinSupport() {
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
              Support
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
            <div className="mb-5 flex items-center gap-4">
              <span
                aria-hidden
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl glass"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(10,132,255,0.9), rgba(94,92,230,0.9))",
                }}
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
              </span>
              <p
                className="text-[12px] font-semibold uppercase tracking-[0.25em]"
                style={{ color: "#0a84ff" }}
              >
                LinkBin
              </p>
            </div>
            <h1 className="text-4xl font-bold tracking-tightest text-white md:text-5xl lg:text-[3.25rem] lg:leading-[1.05]">
              <span className="text-gradient">LinkBin Support</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              Need help with LinkBin? Find answers to common questions below.
            </p>
          </motion.header>

          <div className="mt-12 space-y-5">
            <motion.section
              id="faq"
              aria-labelledby="heading-faq"
              initial={reveal.initial}
              whileInView={reveal.whileInView}
              viewport={reveal.viewport}
              transition={{ duration: 0.55, ease: EASE }}
              className="overflow-hidden rounded-3xl glass"
            >
              <div className="border-b border-white/8 px-6 py-5 sm:px-8">
                <h2
                  id="heading-faq"
                  className="flex items-center gap-3 text-xl font-semibold text-white sm:text-2xl"
                >
                  <span
                    aria-hidden
                    className="inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-[#bf5af2]"
                  />
                  Frequently Asked Questions
                </h2>
              </div>
              <dl>
                {faqs.map((faq) => (
                  <div
                    key={faq.id}
                    className="border-b border-white/8 px-6 py-5 sm:px-8"
                  >
                    <dt className="text-[16px] font-semibold text-white">
                      {faq.question}
                    </dt>
                    <dd className="mt-2 text-[15px] leading-relaxed text-white/70 sm:text-base">
                      {faq.answer}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="px-6 py-5 sm:px-8">
                <Link
                  href="/linkbin/privacy"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-[14px] font-semibold text-white/85 transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white"
                >
                  Read the Privacy Policy
                  <span aria-hidden className="transition-transform">
                    →
                  </span>
                </Link>
              </div>
            </motion.section>

            <motion.section
              id="contact"
              aria-labelledby="heading-contact"
              initial={reveal.initial}
              whileInView={reveal.whileInView}
              viewport={reveal.viewport}
              transition={{ duration: 0.55, ease: EASE }}
              className="relative overflow-hidden rounded-3xl glass-thin p-6 sm:p-8"
            >
              <span
                aria-hidden
                className="absolute left-0 top-0 h-full w-1"
                style={{ background: "#0a84ff" }}
              />
              <h2
                id="heading-contact"
                className="flex items-center gap-3 text-xl font-semibold text-white sm:text-2xl"
              >
                <span
                  aria-hidden
                  className="inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-[#0a84ff]"
                />
                Still need help?
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-white/70 sm:text-base">
                For additional support, contact us at{" "}
                <a
                  href={`mailto:${profile.email}`}
                  className="font-medium text-[#0a84ff] underline-offset-4 transition-colors hover:text-[#4faaff] hover:underline"
                >
                  {profile.email}
                </a>
                .
              </p>
            </motion.section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
