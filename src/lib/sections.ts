import type { AppId } from "./data";
import { useOS } from "./store";

export type SectionId =
  | "hero"
  | "about"
  | "experience"
  | "projects"
  | "skills"
  | "impact"
  | "achievements"
  | "contact";

export type SectionConfig = {
  id: SectionId;
  label: string;
  appId: AppId | null;
  accent: string;
  gradient: [string, string];
};

export const sections: SectionConfig[] = [
  { id: "hero", label: "Home", appId: null, accent: "#ffffff", gradient: ["#0A84FF", "#5E5CE6"] },
  { id: "about", label: "About", appId: "about", accent: "#0A84FF", gradient: ["#0A84FF", "#5E5CE6"] },
  { id: "experience", label: "Experience", appId: "experience", accent: "#30D158", gradient: ["#30D158", "#0A84FF"] },
  { id: "projects", label: "Projects", appId: "projects", accent: "#FF9F0A", gradient: ["#FF9F0A", "#FF375F"] },
  { id: "skills", label: "Skills", appId: "skills", accent: "#FF375F", gradient: ["#FF375F", "#BF5AF2"] },
  { id: "impact", label: "Impact", appId: "impact", accent: "#64D2FF", gradient: ["#64D2FF", "#0A84FF"] },
  { id: "achievements", label: "Achievements", appId: "achievements", accent: "#FFD60A", gradient: ["#FFD60A", "#FF9F0A"] },
  { id: "contact", label: "Contact", appId: "contact", accent: "#30D158", gradient: ["#30D158", "#34C759"] },
];

/** iPhone 15 Pro logical dimensions (pt) */
export const IPHONE = {
  width: 393,
  height: 852,
  aspect: 393 / 852,
} as const;

export function scrollToSection(id: SectionId) {
  const el = document.getElementById(`section-${id}`);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  const section = sections.find((s) => s.id === id);
  useOS.getState().setActiveSection(id);
  if (section) useOS.getState().setOpenApp(section.appId);
}

export function scrollToApp(appId: AppId) {
  const section = sections.find((s) => s.appId === appId);
  if (section) scrollToSection(section.id);
}
