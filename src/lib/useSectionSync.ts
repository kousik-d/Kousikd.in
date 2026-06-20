"use client";

import { useEffect, useRef } from "react";
import { useOS } from "./store";
import { sections, type SectionId } from "./sections";

export function useSectionSync() {
  const setActiveSection = useOS((s) => s.setActiveSection);
  const setOpenApp = useOS((s) => s.setOpenApp);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length === 0) return;

        const id = visible[0].target.id.replace("section-", "") as SectionId;
        const section = sections.find((s) => s.id === id);
        if (!section) return;

        setActiveSection(id);
        setOpenApp(section.appId);
      },
      {
        root: null,
        rootMargin: "-38% 0px -38% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(`section-${id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [setActiveSection, setOpenApp]);
}
