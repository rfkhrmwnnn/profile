"use client";
import { motion } from "framer-motion";

export default function AnimatedLogo() {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.8, ease: "easeInOut" },
    },
  };

  return (
    <div className="relative w-40 h-40 flex items-center justify-center">
      {/* Cahaya menyapu */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent blur-lg rounded-full"
        animate={{ x: ["-150%", "150%"] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* SVG Logo */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        className="w-28 h-28"
      >
        {/* Huruf R */}
        <motion.path
          d="M60 150 V50 H100 C125 50 125 90 100 90 H60 M100 90 L130 150"
          stroke="#2563EB"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          fill="none"
        />
        {/* Huruf H */}
        <motion.path
          d="M140 50 V150 M140 100 H180 M180 50 V150"
          stroke="#1E3A8A"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          fill="none"
          transition={{ delay: 0.3, duration: 1.6, ease: "easeInOut" }}
        />
      </motion.svg>
    </div>
  );
}
