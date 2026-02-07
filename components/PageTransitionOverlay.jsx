"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransitionOverlay() {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed inset-0 z-[999] bg-gradient-to-br from-primary/80 to-accent/80 pointer-events-none"
      />
    </AnimatePresence>
  );
}
