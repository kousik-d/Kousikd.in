"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

function isSvg(src: string) {
  return src.endsWith(".svg");
}

/** Renders public-folder images; uses native img for SVGs (Next/Image blocks them by default). */
export function ProjectImage({
  src,
  alt,
  className,
  sizes,
  fill,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  fill?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // #region agent log
    fetch("http://127.0.0.1:7844/ingest/2559dac3-9b02-4ba7-9c60-2a28b2365040", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "b92b2a" },
      body: JSON.stringify({
        sessionId: "b92b2a",
        hypothesisId: "H1-H4",
        location: "ProjectCover.tsx:ProjectImage:mount",
        message: "ProjectImage mounted",
        data: { src, isSvg: isSvg(src), fill, origin: typeof window !== "undefined" ? window.location.origin : "ssr" },
        timestamp: Date.now(),
      }),
    }).catch(() => {});

    fetch(src, { method: "HEAD" })
      .then((res) => {
        fetch("http://127.0.0.1:7844/ingest/2559dac3-9b02-4ba7-9c60-2a28b2365040", {
          method: "POST",
          headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "b92b2a" },
          body: JSON.stringify({
            sessionId: "b92b2a",
            hypothesisId: "H1",
            location: "ProjectCover.tsx:ProjectImage:head",
            message: "HEAD request result",
            data: { src, status: res.status, ok: res.ok, contentType: res.headers.get("content-type") },
            timestamp: Date.now(),
          }),
        }).catch(() => {});
      })
      .catch((err) => {
        fetch("http://127.0.0.1:7844/ingest/2559dac3-9b02-4ba7-9c60-2a28b2365040", {
          method: "POST",
          headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "b92b2a" },
          body: JSON.stringify({
            sessionId: "b92b2a",
            hypothesisId: "H1",
            location: "ProjectCover.tsx:ProjectImage:head-error",
            message: "HEAD request failed",
            data: { src, error: String(err) },
            timestamp: Date.now(),
          }),
        }).catch(() => {});
      });
    // #endregion
  }, [src, fill]);

  useEffect(() => {
    if (!containerRef.current?.parentElement) return;
    const parent = containerRef.current.parentElement;
    const rect = parent.getBoundingClientRect();
    // #region agent log
    fetch("http://127.0.0.1:7844/ingest/2559dac3-9b02-4ba7-9c60-2a28b2365040", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "b92b2a" },
      body: JSON.stringify({
        sessionId: "b92b2a",
        hypothesisId: "H3",
        location: "ProjectCover.tsx:ProjectImage:layout",
        message: "Parent container dimensions",
        data: { src, width: rect.width, height: rect.height },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion
  }, [src]);

  if (isSvg(src)) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        ref={containerRef as React.RefObject<HTMLImageElement>}
        src={src}
        alt={alt}
        className={cn(fill && "absolute inset-0 h-full w-full", className)}
        onLoad={() => {
          // #region agent log
          fetch("http://127.0.0.1:7844/ingest/2559dac3-9b02-4ba7-9c60-2a28b2365040", {
            method: "POST",
            headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "b92b2a" },
            body: JSON.stringify({
              sessionId: "b92b2a",
              hypothesisId: "H2",
              location: "ProjectCover.tsx:ProjectImage:onLoad",
              message: "SVG img loaded successfully",
              data: { src },
              timestamp: Date.now(),
            }),
          }).catch(() => {});
          // #endregion
        }}
        onError={(e) => {
          const target = e.currentTarget;
          // #region agent log
          fetch("http://127.0.0.1:7844/ingest/2559dac3-9b02-4ba7-9c60-2a28b2365040", {
            method: "POST",
            headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "b92b2a" },
            body: JSON.stringify({
              sessionId: "b92b2a",
              hypothesisId: "H2",
              location: "ProjectCover.tsx:ProjectImage:onError",
              message: "SVG img failed to load",
              data: { src, currentSrc: target.currentSrc, naturalWidth: target.naturalWidth },
              timestamp: Date.now(),
            }),
          }).catch(() => {});
          // #endregion
        }}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      className={className}
      sizes={sizes ?? "(max-width: 768px) 100vw, 400px"}
      onLoad={() => {
        // #region agent log
        fetch("http://127.0.0.1:7844/ingest/2559dac3-9b02-4ba7-9c60-2a28b2365040", {
          method: "POST",
          headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "b92b2a" },
          body: JSON.stringify({
            sessionId: "b92b2a",
            hypothesisId: "H4",
            location: "ProjectCover.tsx:NextImage:onLoad",
            message: "Next/Image loaded",
            data: { src },
            timestamp: Date.now(),
          }),
        }).catch(() => {});
        // #endregion
      }}
      onError={() => {
        // #region agent log
        fetch("http://127.0.0.1:7844/ingest/2559dac3-9b02-4ba7-9c60-2a28b2365040", {
          method: "POST",
          headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "b92b2a" },
          body: JSON.stringify({
            sessionId: "b92b2a",
            hypothesisId: "H4",
            location: "ProjectCover.tsx:NextImage:onError",
            message: "Next/Image failed",
            data: { src },
            timestamp: Date.now(),
          }),
        }).catch(() => {});
        // #endregion
      }}
    />
  );
}

export default function ProjectCover({
  src,
  alt,
  accent,
  icon,
  category,
  className,
  badge,
}: {
  src: string;
  alt: string;
  accent: string;
  icon?: string;
  category?: string;
  className?: string;
  badge?: string;
}) {
  return (
    <div className={cn("relative w-full overflow-hidden bg-black/40", className)}>
      <ProjectImage
        src={src}
        alt={alt}
        fill
        className="object-cover object-center"
      />
      <div
        className="pointer-events-none absolute inset-0 mix-blend-multiply opacity-20"
        style={{ background: `linear-gradient(135deg, ${accent}, transparent)` }}
      />
      {category && (
        <span className="absolute right-4 top-4 z-10 rounded-full bg-black/40 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur">
          {category}
        </span>
      )}
      {badge && (
        <span
          className="absolute left-4 top-4 z-10 rounded-full bg-black/40 px-3 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur"
          style={{ color: accent }}
        >
          {badge}
        </span>
      )}
      {icon && !isSvg(src) && (
        <span className="absolute bottom-4 left-5 z-10 text-4xl drop-shadow-lg md:text-5xl">{icon}</span>
      )}
    </div>
  );
}
