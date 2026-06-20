"use client";

import dynamic from "next/dynamic";
import ContentRail from "./ContentRail";
import ProgressRail from "./ProgressRail";
import PhoneStage from "../os/PhoneStage";
import { useSectionSync } from "@/lib/useSectionSync";
import { PHONE_DISPLAY_WIDTH } from "../os/Phone";

const ParticleField = dynamic(() => import("../three/ParticleField"), { ssr: false });

export default function Portfolio() {
  useSectionSync();

  return (
    <div className="relative min-h-screen bg-black">
      <ParticleField />
      <BackgroundLayers />
      <ProgressRail />

      {/* Tight split layout — content + phone grouped together (inspired by imkarthik.in) */}
      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-x-6 xl:gap-x-8">
          {/* Content */}
          <div className="order-2 min-w-0 lg:order-none">
            <ContentRail />
          </div>

          {/* Phone — sticky, sits close to content */}
          <div className="order-1 lg:order-none lg:sticky lg:top-0 lg:h-screen lg:pt-16 xl:pt-20">
            <div className="flex flex-col items-center pb-6 pt-8 lg:items-end lg:pb-0 lg:pt-0">
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.25em] text-white/35 lg:hidden">
                Live preview
              </p>
              <div className="relative shrink-0" style={{ width: PHONE_DISPLAY_WIDTH }}>
                <div className="pointer-events-none absolute -inset-6 -z-10 rounded-full bg-[radial-gradient(circle,rgba(94,92,230,0.16),transparent_70%)] blur-2xl" />
                <PhoneStage />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BackgroundLayers() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_30%_0%,rgba(10,132,255,0.1),transparent_45%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_70%_100%,rgba(191,90,242,0.08),transparent_45%)]" />
      <div className="pointer-events-none fixed inset-0 vignette opacity-40" />
    </>
  );
}
