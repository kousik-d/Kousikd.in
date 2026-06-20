"use client";

import { AnimatePresence } from "framer-motion";
import { useOS } from "@/lib/store";
import StatusBar from "./StatusBar";
import DynamicIsland from "./DynamicIsland";
import ControlCenter from "./ControlCenter";
import NotificationCenter from "./NotificationCenter";
import Phone from "./Phone";
import PhoneContentMirror from "./PhoneContentMirror";
import DeveloperMode from "../devmode/DeveloperMode";

export default function PhoneStage() {
  const { controlCenterOpen, notificationCenterOpen, devMode, toggleControlCenter, toggleNotificationCenter } =
    useOS();

  return (
    <>
      <Phone compact>
        <StatusBar />
        <DynamicIsland />
        <PhoneContentMirror />

        <EdgeZone side="left" onTrigger={() => toggleNotificationCenter(true)} />
        <EdgeZone side="right" onTrigger={() => toggleControlCenter(true)} />

        <div className="absolute bottom-2 left-1/2 z-[65] h-[4px] w-[100px] -translate-x-1/2 rounded-full bg-white/50" aria-hidden />

        <AnimatePresence>
          {controlCenterOpen && <ControlCenter key="cc" />}
          {notificationCenterOpen && <NotificationCenter key="nc" />}
        </AnimatePresence>
      </Phone>

      <AnimatePresence>{devMode && <DeveloperMode key="dev" />}</AnimatePresence>
    </>
  );
}

function EdgeZone({ side, onTrigger }: { side: "left" | "right"; onTrigger: () => void }) {
  return (
    <div
      onClick={onTrigger}
      className={`absolute top-0 z-40 h-10 w-1/2 cursor-pointer ${side === "left" ? "left-0" : "right-0"}`}
      aria-label={side === "right" ? "Open Control Center" : "Open Notifications"}
    />
  );
}
