"use client";

import { motion, useMotionValue, useTransform, useAnimation } from "framer-motion";
import { useEffect } from "react";

const floatingVariants = {
  animate: {
    y: [0, -15, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function FloatingElements() {
  const controls = useAnimation();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const elements = [
    { size: 14, color: "#2563EB", top: "20%", left: "10%" },
    { size: 10, color: "#38BDF8", top: "30%", left: "80%" },
    { size: 12, color: "#1E3A8A", top: "70%", left: "20%" },
    { size: 16, color: "#3B82F6", top: "60%", left: "65%" },
    { size: 8, color: "#93C5FD", top: "40%", left: "45%" },
  ];

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden -z-10"
      animate={controls}
      style={{
        x: useTransform(mouseX, [-40, 40], [-15, 15]),
        y: useTransform(mouseY, [-40, 40], [-10, 10]),
      }}
    >
      {elements.map((el, i) => (
        <motion.div
          key={i}
          variants={floatingVariants}
          animate="animate"
          className="rounded-full mix-blend-screen"
          style={{
            position: "absolute",
            width: `${el.size * 4}px`,
            height: `${el.size * 4}px`,
            background: `radial-gradient(circle, ${el.color} 0%, transparent 70%)`,
            top: el.top,
            left: el.left,
            opacity: 0.6,
            filter: "blur(4px)",
          }}
        />
      ))}
    </motion.div>
  );
}
