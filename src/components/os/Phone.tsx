"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { IPHONE } from "@/lib/sections";

/** Display width for the sticky phone column (px) */
export const PHONE_DISPLAY_WIDTH = 280;

export default function Phone({ children, compact = false }: { children: ReactNode; compact?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [3, -3]), { stiffness: 160, damping: 22 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-4, 4]), { stiffness: 160, damping: 22 });

  const glareX = useTransform(mx, [-0.5, 0.5], [25, 75]);
  const glareY = useTransform(my, [-0.5, 0.5], [25, 75]);

  function handleMove(e: React.MouseEvent) {
    if (!compact) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function reset() {
    mx.set(0);
    my.set(0);
  }

  const displayWidth = compact ? PHONE_DISPLAY_WIDTH : Math.min(PHONE_DISPLAY_WIDTH, 320);
  const displayHeight = displayWidth / IPHONE.aspect;

  // Proportional radii from iPhone 15 Pro (55pt outer, 47pt screen at 393pt width)
  const outerRadius = (55 / IPHONE.width) * displayWidth;
  const screenRadius = (47 / IPHONE.width) * displayWidth;
  const bezel = Math.max(3, (8 / IPHONE.width) * displayWidth);

  return (
    <div
      className="relative mx-auto flex items-center justify-center"
      style={{ perspective: 1200, width: displayWidth, height: displayHeight }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      <motion.div
        ref={ref}
        style={{
          rotateX: compact ? rotateX : 0,
          rotateY: compact ? rotateY : 0,
          transformStyle: "preserve-3d",
          width: displayWidth,
          height: displayHeight,
        }}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        {/* Titanium frame */}
        <div
          className="relative h-full w-full shadow-[0_24px_80px_-12px_rgba(0,0,0,0.85)]"
          style={{
            borderRadius: outerRadius,
            padding: 2.5,
            background:
              "linear-gradient(160deg, #8e8e93 0%, #3a3a3c 12%, #636366 28%, #48484a 50%, #2c2c2e 72%, #1c1c1e 88%, #636366 100%)",
          }}
        >
          {/* Side buttons — proportional placement */}
          <div
            className="absolute rounded-l-sm bg-[#48484a]"
            style={{ left: -2.5, top: displayHeight * 0.18, width: 2.5, height: displayHeight * 0.045 }}
          />
          <div
            className="absolute rounded-l-sm bg-[#48484a]"
            style={{ left: -2.5, top: displayHeight * 0.26, width: 2.5, height: displayHeight * 0.07 }}
          />
          <div
            className="absolute rounded-l-sm bg-[#48484a]"
            style={{ left: -2.5, top: displayHeight * 0.36, width: 2.5, height: displayHeight * 0.07 }}
          />
          <div
            className="absolute rounded-r-sm bg-[#48484a]"
            style={{ right: -2.5, top: displayHeight * 0.3, width: 2.5, height: displayHeight * 0.09 }}
          />

          {/* Inner bezel */}
          <div
            className="relative h-full w-full bg-black"
            style={{ borderRadius: outerRadius - 2.5, padding: bezel }}
          >
            <div
              className="relative h-full w-full overflow-hidden bg-black"
              style={{ borderRadius: screenRadius, transform: "translateZ(1px)" }}
            >
              {children}

              <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-[60] mix-blend-overlay"
                style={{
                  background: useTransform(
                    [glareX, glareY],
                    ([x, y]) =>
                      `radial-gradient(280px circle at ${x}% ${y}%, rgba(255,255,255,0.14), transparent 65%)`,
                  ),
                }}
              />
              <div className="pointer-events-none absolute inset-x-0 top-0 z-[55] h-1/4 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent)]" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
