"use client";

import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/8 py-12">
      <div className="flex w-full max-w-xl flex-col items-center justify-between gap-6 px-1 text-center sm:max-w-2xl lg:max-w-none lg:flex-row lg:pl-14 lg:pr-2 lg:text-left xl:pl-16">
        <div>
          <p className="text-lg font-semibold text-white">{profile.name}</p>
          <p className="text-[14px] text-white/45">
            {profile.role} · {profile.location}
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {[
            { label: "GitHub", href: profile.github },
            { label: "LinkedIn", href: profile.linkedin },
            { label: "Email", href: `mailto:${profile.email}` },
            { label: "Résumé", href: profile.resumeUrl },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              download={link.label === "Résumé" ? true : undefined}
              className="text-[13px] font-medium text-white/40 transition-colors hover:text-white/80"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-[12px] text-white/30">
          © {new Date().getFullYear()} · Crafted with Swift-level precision
        </p>
      </div>
    </footer>
  );
}
