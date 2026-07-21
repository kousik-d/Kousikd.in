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

const supportChannels: { label: string; accent: string; subject: string }[] = [
  { label: "General Support", accent: "#0a84ff", subject: "Across Time — General Support" },
  { label: "Bug Reports", accent: "#ff453a", subject: "Across Time — Bug Report" },
  { label: "Feature Requests", accent: "#30d158", subject: "Across Time — Feature Request" },
];

const faqs: { id: string; question: string; answer: string }[] = [
  {
    id: "time-zone",
    question: "How do I change the time zone of an alarm?",
    answer:
      "Open the alarm editor and select the desired city or time zone before saving.",
  },
  {
    id: "didnt-ring",
    question: "Why didn't my alarm ring?",
    answer:
      "Ensure notifications are enabled for Across Time and that Focus Mode or Silent Mode isn't preventing alerts.",
  },
  {
    id: "offline",
    question: "Can I use the app offline?",
    answer: "Yes. Alarm scheduling works without an internet connection.",
  },
  {
    id: "privacy",
    question: "Does Across Time collect my personal information?",
    answer: "No. Across Time does not collect or sell personal information.",
  },
];

const reportFields: { label: string; accent: string }[] = [
  { label: "Device model", accent: "#0a84ff" },
  { label: "iOS version", accent: "#30d158" },
  { label: "App version", accent: "#ff9f0a" },
  { label: "Steps to reproduce", accent: "#bf5af2" },
];

const mailto = (subject: string) =>
  `mailto:${profile.email}?subject=${encodeURIComponent(subject)}`;

export default function Support() {
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
              Support
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
            <div className="mb-5 flex items-center gap-4">
              <span
                aria-hidden
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl glass"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(10,132,255,0.9), rgba(94,92,230,0.9))",
                }}
              >
                {/* Subtle clock illustration — echoes the app's cross-timezone alarm theme */}
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
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3.5 2" />
                </svg>
              </span>
              <p
                className="text-[12px] font-semibold uppercase tracking-[0.25em]"
                style={{ color: "#0a84ff" }}
              >
                Across Time – Beyond Time
              </p>
            </div>
            <h1 className="text-4xl font-bold tracking-tightest text-white md:text-5xl lg:text-[3.25rem] lg:leading-[1.05]">
              <span className="text-gradient">Across Time Support</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              Need help with Across Time – Beyond Time? We&rsquo;re here to help.
            </p>
          </motion.header>

          <div className="mt-12 space-y-5">
            {/* Contact Support */}
            <motion.section
              id="contact-support"
              aria-labelledby="heading-contact-support"
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
                id="heading-contact-support"
                className="flex items-center gap-3 text-xl font-semibold text-white sm:text-2xl"
              >
                <span
                  aria-hidden
                  className="inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-[#0a84ff]"
                />
                Contact Support
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-white/70 sm:text-base">
                Have a question, found a bug, or want to suggest a feature? We&rsquo;d
                love to hear from you.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                {supportChannels.map((channel) => (
                  <li key={channel.label}>
                    <a
                      href={mailto(channel.subject)}
                      className="group flex h-full flex-col gap-2 rounded-2xl border border-white/8 bg-white/5 p-4 transition-colors hover:border-white/20 hover:bg-white/8"
                    >
                      <span
                        aria-hidden
                        className="inline-block h-2 w-2 rounded-full"
                        style={{ background: channel.accent }}
                      />
                      <span className="text-[14px] font-medium text-white/85 group-hover:text-white">
                        {channel.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={mailto("Across Time — Support")}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0a84ff] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#3b9dff]"
              >
                <span aria-hidden>✉</span>
                Email {profile.email}
              </a>
            </motion.section>

            {/* Frequently Asked Questions */}
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
                  href="/privacy"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-[14px] font-semibold text-white/85 transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white"
                >
                  Read the Privacy Policy
                  <span aria-hidden className="transition-transform">
                    →
                  </span>
                </Link>
              </div>
            </motion.section>

            {/* Response Time */}
            <motion.section
              id="response-time"
              aria-labelledby="heading-response-time"
              initial={reveal.initial}
              whileInView={reveal.whileInView}
              viewport={reveal.viewport}
              transition={{ duration: 0.55, ease: EASE }}
              className="relative overflow-hidden rounded-3xl glass-thin p-6 sm:p-8"
            >
              <span
                aria-hidden
                className="absolute left-0 top-0 h-full w-1"
                style={{ background: "#30d158" }}
              />
              <h2
                id="heading-response-time"
                className="text-[13px] font-semibold uppercase tracking-[0.15em] text-white/40"
              >
                Response Time
              </h2>
              <p className="mt-3 flex items-baseline gap-2 text-[15px] leading-relaxed text-white/70 sm:text-base">
                <span
                  aria-hidden
                  className="inline-block h-2 w-2 shrink-0 translate-y-[-1px] rounded-full bg-[#30d158]"
                />
                Typical response time:{" "}
                <span className="font-semibold text-white">
                  within 1–2 business days.
                </span>
              </p>
            </motion.section>

            {/* Report an Issue */}
            <motion.section
              id="report-an-issue"
              aria-labelledby="heading-report-an-issue"
              initial={reveal.initial}
              whileInView={reveal.whileInView}
              viewport={reveal.viewport}
              transition={{ duration: 0.55, ease: EASE }}
              className="relative overflow-hidden rounded-3xl glass-thin p-6 sm:p-8"
            >
              <span
                aria-hidden
                className="absolute left-0 top-0 h-full w-1"
                style={{ background: "#ff9f0a" }}
              />
              <h2
                id="heading-report-an-issue"
                className="flex items-center gap-3 text-xl font-semibold text-white sm:text-2xl"
              >
                <span
                  aria-hidden
                  className="inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-[#ff9f0a]"
                />
                Report an Issue
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-white/70 sm:text-base">
                To help us resolve your issue quickly, please include the following
                details:
              </p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {reportFields.map((field) => (
                  <li
                    key={field.label}
                    className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-[15px] text-white/80"
                  >
                    <span
                      aria-hidden
                      className="inline-block h-2 w-2 shrink-0 rounded-full"
                      style={{ background: field.accent }}
                    />
                    {field.label}
                  </li>
                ))}
              </ul>
              <a
                href={mailto("Across Time — Bug Report")}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-[14px] font-semibold text-white/85 transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white"
              >
                Send a bug report
                <span aria-hidden>→</span>
              </a>
            </motion.section>

            {/* About the App */}
            <motion.section
              id="about-the-app"
              aria-labelledby="heading-about-the-app"
              initial={reveal.initial}
              whileInView={reveal.whileInView}
              viewport={reveal.viewport}
              transition={{ duration: 0.55, ease: EASE }}
              className="relative overflow-hidden rounded-3xl glass-thin p-6 sm:p-8"
            >
              <span
                aria-hidden
                className="absolute left-0 top-0 h-full w-1"
                style={{ background: "#64d2ff" }}
              />
              <h2
                id="heading-about-the-app"
                className="flex items-center gap-3 text-xl font-semibold text-white sm:text-2xl"
              >
                <span
                  aria-hidden
                  className="inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-[#64d2ff]"
                />
                About the App
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-white/70 sm:text-base">
                Across Time – Beyond Time helps users create alarms across different
                time zones, making global meetings, travel, and international
                communication effortless.
              </p>
            </motion.section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
