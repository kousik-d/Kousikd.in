import { create } from "zustand";
import type { AppId } from "./data";
import type { SectionId } from "./sections";

export type Notification = {
  id: string;
  app: string;
  title: string;
  body: string;
  icon: string;
  color: string;
};

type OSState = {
  phase: "boot" | "locked" | "unlocking" | "home";
  openApp: AppId | null;
  activeSection: SectionId;
  controlCenterOpen: boolean;
  notificationCenterOpen: boolean;
  devMode: boolean;
  islandState: "idle" | "faceid" | "notification" | "music";
  islandPayload: { title: string; subtitle: string } | null;
  notifications: Notification[];

  setPhase: (p: OSState["phase"]) => void;
  unlock: () => void;
  lock: () => void;
  setOpenApp: (a: AppId | null) => void;
  setActiveSection: (id: SectionId) => void;
  toggleControlCenter: (v?: boolean) => void;
  toggleNotificationCenter: (v?: boolean) => void;
  setDevMode: (v: boolean) => void;
  setIsland: (s: OSState["islandState"], payload?: { title: string; subtitle: string }) => void;
};

export const useOS = create<OSState>((set) => ({
  phase: "home",
  openApp: null,
  activeSection: "hero",
  controlCenterOpen: false,
  notificationCenterOpen: false,
  devMode: false,
  islandState: "idle",
  islandPayload: null,
  notifications: [
    {
      id: "n1",
      app: "Mail",
      title: "Recruiter",
      body: "Loved your portfolio — can we chat this week?",
      icon: "✉️",
      color: "#0A84FF",
    },
    {
      id: "n2",
      app: "App Store",
      title: "SenkoUI",
      body: "Your open-source package has new stars ⭐️",
      icon: "🧩",
      color: "#6D5BFF",
    },
    {
      id: "n3",
      app: "Xcode Cloud",
      title: "Build Succeeded",
      body: "v2.4.0 · 96% crash-free · ready to ship 🚀",
      icon: "🔨",
      color: "#30D158",
    },
  ],

  setPhase: (phase) => set({ phase }),
  unlock: () => set({ phase: "unlocking" }),
  lock: () => set({ phase: "locked", openApp: null, controlCenterOpen: false, notificationCenterOpen: false }),
  setOpenApp: (openApp) => set({ openApp }),
  setActiveSection: (activeSection) => set({ activeSection }),
  toggleControlCenter: (v) =>
    set((s) => ({ controlCenterOpen: v ?? !s.controlCenterOpen, notificationCenterOpen: false })),
  toggleNotificationCenter: (v) =>
    set((s) => ({ notificationCenterOpen: v ?? !s.notificationCenterOpen, controlCenterOpen: false })),
  setDevMode: (devMode) => set({ devMode }),
  setIsland: (islandState, islandPayload) => set({ islandState, islandPayload: islandPayload ?? null }),
}));
