"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import AnimatedLogo from "./AnimatedLogo";

export default function LoadingIntro() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background text-white"
        >
          <motion.div
            className="absolute inset-0 -z-10 blur-3xl opacity-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{
              background:
                "radial-gradient(circle at center, rgba(37,99,235,0.3), transparent 70%)",
            }}
          />

          <AnimatedLogo />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-6 text-2xl font-semibold text-primary dark:text-blue-400 tracking-wide"
          >
            Rifki Hermawan
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
