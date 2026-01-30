"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function CursorSpotlight() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX - window.innerWidth / 2);
      y.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  const translateX = useTransform(x, [-window.innerWidth / 2, window.innerWidth / 2], ["-50%", "50%"]);
  const translateY = useTransform(y, [-window.innerHeight / 2, window.innerHeight / 2], ["-50%", "50%"]);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 w-full h-full -z-10"
      style={{
        background: `radial-gradient(circle 250px at center, rgba(37,99,235,0.25), transparent 80%)`,
        translateX,
        translateY,
      }}
      transition={{ type: "spring", stiffness: 50, damping: 20 }}
    />
  );
}
