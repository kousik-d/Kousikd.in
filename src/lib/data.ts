export const profile = {
  name: "Kousik Dasari",
  role: "Software Engineer II",
  subtitle: "iOS Engineer",
  location: "Hyderabad, India",
  email: "kousikdasari0475@gmail.com",
  phone: "+91 8074532780",
  linkedin: "https://linkedin.com/in/kousik-dasari",
  github: "https://github.com/kousik-d",
  resumeUrl: "/Kousik-Dasari-Resume.pdf",
  initials: "KD",
  bio: "iOS Engineer with 2+ years of experience building and optimizing mobile applications and reusable iOS components using Swift and Objective-C. I specialize in UIKit, SwiftUI, MVVM architecture, concurrency, and performance engineering — shipping scalable solutions that serve 50M+ monthly active users across enterprise-scale applications.",
  shortBio: "I build secure, scalable iOS components and solutions that quietly power apps used by millions — obsessing over performance, reliability, and the tiny details that make software feel effortless.",
};

export const journey: { year: string; title: string; detail: string }[] = [
  {
    year: "2020 – 2024",
    title: "B.Tech, Computer Science",
    detail: "Vignan's LARA Institute of Technology & Science · CGPA 8.02",
  },
  {
    year: "Jan 2024",
    title: "Joined Apxor as Associate Software Engineer",
    detail: "Started building modular iOS architecture for enterprise solutions.",
  },
  {
    year: "Sep 2025",
    title: "Promoted to Software Engineer II",
    detail: "Now leading iOS components serving 50M+ MAU.",
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  current?: boolean;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    company: "Apxor Technology Solutions",
    role: "Software Engineer II",
    period: "Sep 2025 – Present",
    location: "Hyderabad, TS",
    current: true,
    highlights: [
      "Led design & development of secure, scalable iOS components in Swift & Objective-C, supporting high-traffic enterprise apps serving 50M+ MAU.",
      "Delivered backward-compatible releases with zero client downtime while maintaining 96% crash-free sessions across millions of devices.",
      "Owned performance optimization & deep debugging with Instruments, LLDB and Xcode — cutting memory usage by 20% and improving load times by 35%.",
      "Managed full release cycles: versioning, packaging, distribution and deployment across multiple enterprise applications.",
      "Partnered with backend & product teams to ship 3 new platform capabilities, each adopted by 5+ enterprise customers within the release cycle.",
      "Contributed to CI/CD and release automation, improving build stability and reducing release time.",
    ],
  },
  {
    company: "Apxor Technology Solutions",
    role: "Associate Software Engineer",
    period: "Jan 2024 – Sep 2025",
    location: "Hyderabad, TS",
    highlights: [
      "Developed & maintained a modular iOS architecture powering high-scale enterprise apps, integrated by 20+ clients.",
      "Shipped user-facing features like Screen Explainer and Adaptive Text Scaling following Apple HIG — increasing user task completion by 18%.",
      "Applied OOP principles and MVVM to build clean, maintainable, testable codebases.",
      "Worked extensively with async programming and background execution for smooth UI under high load.",
      "Supported production deployments for enterprise customers including GCash and Sadhguru, resolving live integration & performance challenges.",
      "Supported CI/CD workflows, release management and App Store deployments with proper provisioning and signing.",
    ],
  },
];

export type Project = {
  id: string;
  name: string;
  tagline: string;
  category: string;
  icon: string;
  accent: string;
  coverImage: string;
  screenshots: string[];
  status?: "shipped" | "in-progress";
  description: string;
  tech: string[];
  architecture: string;
  challenges: string[];
  impact: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    id: "hbt",
    name: "HBT",
    tagline: "Habit tracker with Live Activities & Widgets",
    category: "Health & Fitness",
    icon: "✓",
    accent: "#34C759",
    status: "in-progress",
    coverImage: "/projects/hbt/cover.svg",
    screenshots: [
      "/projects/hbt/screenshot-home.svg",
      "/projects/hbt/screenshot-live-activity.svg",
      "/projects/hbt/screenshot-widget.svg",
    ],
    description:
      "A native iOS habit tracker built with SwiftUI — designed to keep daily routines front and center through Live Activities on the Lock Screen and Dynamic Island, plus Home Screen and Lock Screen widgets for at-a-glance progress.",
    tech: ["Swift", "SwiftUI", "ActivityKit", "WidgetKit", "App Intents", "SwiftData"],
    architecture:
      "SwiftUI + MVVM with SwiftData for local persistence. ActivityKit drives real-time Live Activities for active habits. WidgetKit extensions share data via App Groups and TimelineProvider for fresh widget snapshots.",
    challenges: [
      "Keeping Live Activity state in sync with in-app habit completion.",
      "Designing widget layouts that work across small, medium, and large families.",
      "Efficient background refresh without draining battery.",
    ],
    impact: [
      "Always-visible habit progress on Lock Screen",
      "Widget-first glanceable UX",
      "Native iOS 17+ feature showcase",
    ],
    link: "https://github.com/kousik-d",
  },
  {
    id: "across-alarm",
    name: "Across Alarm",
    tagline: "Wake up to any timezone, anywhere",
    category: "Utilities",
    icon: "⏰",
    accent: "#FF7E5F",
    coverImage: "/projects/across-alarm/cover.svg",
    screenshots: ["/projects/across-alarm/screenshot.svg"],
    description:
      "A cross-timezone alarm app that lets users schedule alarms based on the local time of any city worldwide — perfect for remote teams, travelers and night owls.",
    tech: ["Swift", "SwiftUI", "Core Location", "UserNotifications", "MVVM"],
    architecture:
      "SwiftUI + MVVM with a dedicated scheduling engine built on Date, Calendar and TimeZone APIs. Core Location drives location-aware experiences while UserNotifications handles permission-compliant local triggers.",
    challenges: [
      "Accurate timezone conversion across DST boundaries and regions.",
      "Reliable alarm triggering despite iOS background execution limits.",
      "Permission-compliant notification scheduling.",
    ],
    impact: [
      "Reliable cross-region alarm triggering",
      "Clean, scalable SwiftUI state management",
      "Location-aware UX",
    ],
    link: "https://github.com/kousik-d",
  },
  {
    id: "senkoui",
    name: "SenkoUI",
    tagline: "An open-source UI toolkit for iOS",
    category: "Developer Tools",
    icon: "🧩",
    accent: "#6D5BFF",
    coverImage: "/projects/senkoui/cover.svg",
    screenshots: ["/projects/senkoui/screenshot.svg"],
    description:
      "An open-source UI component library for iOS featuring reusable SwiftUI and UIKit components distributed through Swift Package Manager — built for production use.",
    tech: ["SwiftUI", "UIKit", "Swift Package Manager", "POP"],
    architecture:
      "Modular Swift packages with protocol-oriented design. Customizable components — auto-scrolling carousels, adaptive image loaders and configurable building blocks — exposed through developer-friendly, composable APIs.",
    challenges: [
      "Designing APIs flexible enough for production yet simple to adopt.",
      "Bridging SwiftUI and UIKit cleanly within one package.",
      "Performance optimization for image-heavy components.",
    ],
    impact: [
      "Reusable, documented components",
      "Faster integration for adopters",
      "Maintainable, modular package structure",
    ],
    link: "https://github.com/kousik-d",
  },
];

export type Skill = { name: string; level: number; color: string };

export const skills: Skill[] = [
  { name: "Swift", level: 95, color: "#FF6B35" },
  { name: "SwiftUI", level: 92, color: "#0A84FF" },
  { name: "UIKit", level: 94, color: "#30D158" },
  { name: "Objective-C", level: 85, color: "#FF453A" },
  { name: "Combine", level: 88, color: "#BF5AF2" },
  { name: "Concurrency", level: 90, color: "#FFD60A" },
  { name: "GraphQL", level: 78, color: "#FF2D92" },
  { name: "System Design", level: 86, color: "#64D2FF" },
  { name: "Mobile Architecture", level: 91, color: "#5E5CE6" },
];

export const skillGroups: { title: string; items: string[] }[] = [
  { title: "Languages", items: ["Swift", "Objective-C", "Kotlin"] },
  {
    title: "iOS Frameworks",
    items: ["UIKit", "SwiftUI", "Core Data", "SwiftData", "Core Animation", "Keychain"],
  },
  {
    title: "Architecture",
    items: ["MVVM", "MVVM-C", "Modular", "Clean Architecture", "DI", "SOLID"],
  },
  {
    title: "Concurrency",
    items: ["Async / Await", "Combine", "GCD"],
  },
  {
    title: "Testing & Debug",
    items: ["XCTest", "XCUITest", "Instruments", "LLDB", "Crash Analysis"],
  },
  {
    title: "Deployment",
    items: ["App Store Connect", "TestFlight", "Release Management", "CI/CD"],
  },
];

export type Metric = {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  detail: string;
  color: string;
};

export const metrics: Metric[] = [
  { value: 50, suffix: "M+", label: "Monthly Active Users", detail: "Powered by components I build & maintain", color: "#0A84FF" },
  { value: 96, suffix: "%", label: "Crash-Free Sessions", detail: "Across millions of devices", color: "#30D158" },
  { value: 35, suffix: "%", label: "Faster Load Times", detail: "Through performance engineering", color: "#FFD60A" },
  { value: 20, suffix: "%", label: "Memory Reduced", detail: "Via deep profiling & optimization", color: "#BF5AF2" },
  { value: 20, suffix: "+", label: "Enterprise Clients", detail: "Integrating our modular iOS solutions", color: "#FF9F0A" },
  { value: 3, suffix: "", label: "Platform Capabilities", detail: "New features shipped to production", color: "#FF453A" },
];

export type Achievement = {
  title: string;
  detail: string;
  date: string;
  icon: string;
  color: string;
};

export const achievements: Achievement[] = [
  {
    title: "Internship Completed",
    detail: "Kicked off my iOS career building real, production-grade component features.",
    date: "2024",
    icon: "🎓",
    color: "#0A84FF",
  },
  {
    title: "Full-Time Conversion",
    detail: "Converted to Associate Software Engineer at Apxor.",
    date: "Jan 2024",
    icon: "💼",
    color: "#30D158",
  },
  {
    title: "Promotion to SE II",
    detail: "Recognized for leading scalable iOS components serving 50M+ MAU.",
    date: "Sep 2025",
    icon: "🚀",
    color: "#BF5AF2",
  },
  {
    title: "WWDC Community",
    detail: "Active participation in the Apple developer & WWDC community.",
    date: "Ongoing",
    icon: "🍎",
    color: "#FF9F0A",
  },
  {
    title: "Technical Presentations",
    detail: "Authored docs, sample implementations & integration guides to drive adoption.",
    date: "2025",
    icon: "🎤",
    color: "#FF453A",
  },
  {
    title: "Open Source",
    detail: "Building SenkoUI — an open-source SwiftUI/UIKit component library.",
    date: "Ongoing",
    icon: "⭐️",
    color: "#FFD60A",
  },
];

export type AppId =
  | "about"
  | "experience"
  | "projects"
  | "skills"
  | "impact"
  | "achievements"
  | "contact";

export const apps: {
  id: AppId;
  name: string;
  gradient: [string, string];
  glyph: string;
}[] = [
  { id: "about", name: "About Me", gradient: ["#0A84FF", "#5E5CE6"], glyph: "person" },
  { id: "experience", name: "Experience", gradient: ["#30D158", "#0A84FF"], glyph: "timeline" },
  { id: "projects", name: "Projects", gradient: ["#FF9F0A", "#FF375F"], glyph: "grid" },
  { id: "skills", name: "Skills", gradient: ["#FF375F", "#BF5AF2"], glyph: "rings" },
  { id: "impact", name: "Impact", gradient: ["#64D2FF", "#0A84FF"], glyph: "chart" },
  { id: "achievements", name: "Achievements", gradient: ["#FFD60A", "#FF9F0A"], glyph: "trophy" },
  { id: "contact", name: "Contact", gradient: ["#30D158", "#34C759"], glyph: "phone" },
];
