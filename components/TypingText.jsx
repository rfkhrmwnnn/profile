"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function TypingText() {
  const roles = [
    "Full Stack Developer",
    "Operator",
    "UI/UX Enthusiast",
  ];

  const [current, setCurrent] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const text = roles[current];
    const speed = isDeleting ? 50 : 100;

    const handleTyping = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting ? text.substring(0, prev.length - 1) : text.substring(0, prev.length + 1)
      );

      if (!isDeleting && displayText === text) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrent((prev) => (prev + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(handleTyping);
  }, [displayText, isDeleting, current]);

  return (
    <motion.div
      className="text-xl md:text-2xl text-gray-400 font-mono min-h-[32px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <span className="text-secondary">{">"}</span> {displayText}
      <span className="ml-1 text-primary animate-pulse">_</span>
    </motion.div>
  );
}
