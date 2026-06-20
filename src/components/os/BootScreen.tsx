"use client";

import { motion } from "framer-motion";

export default function BootScreen() {
  return (
    <motion.div
      className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.svg
        width="58"
        height="70"
        viewBox="0 0 24 28"
        fill="white"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        aria-hidden
      >
        <path d="M17.5 14.9c0-3 2.4-4.4 2.5-4.5-1.4-2-3.5-2.3-4.2-2.3-1.8-.2-3.5 1-4.4 1-.9 0-2.3-1-3.8-1-1.9 0-3.7 1.1-4.7 2.9-2 3.5-.5 8.7 1.4 11.5.9 1.4 2 2.9 3.5 2.9 1.4-.1 1.9-.9 3.6-.9 1.7 0 2.2.9 3.7.9 1.5 0 2.5-1.4 3.4-2.8 1.1-1.6 1.5-3.1 1.5-3.2-.1 0-2.9-1.1-3-4.4ZM14.7 6.2c.8-1 1.3-2.3 1.2-3.7-1.1.1-2.5.8-3.3 1.7-.7.8-1.4 2.2-1.2 3.5 1.3.1 2.5-.6 3.3-1.5Z" />
      </motion.svg>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-24 h-[3px] w-32 overflow-hidden rounded-full bg-white/15"
      >
        <motion.div
          className="h-full bg-white"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.4, delay: 0.8, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
}
