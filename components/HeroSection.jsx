"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import TypingText from "./TypingText"; // Keeping this if it works well, or I can replace it.

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden pt-20">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 w-full h-full bg-background">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] animate-pulse-slow delay-1000" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
      </div>

      <div className="relative z-10 px-6 max-w-4xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm text-primary-light font-medium mb-6">
            ✨ Available for Freelance Projects
          </span>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Building Digital <span className="text-gradient">Experiences</span> <br />
            That Matter.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="h-12"
        >
           {/* If TypingText is good we keep it, otherwise just static text or generic typer */}
           <TypingText /> 
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          I am Rifki Hermawan, a Full Stack Developer specializing in building exceptional digital solutions, from e-commerce platforms to intelligent automation bots.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
        >
          <Link
            href="/projects"
            className="px-8 py-3.5 rounded-full bg-primary hover:bg-primary-dark text-white font-medium transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 text-base"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white font-medium transition-all backdrop-blur-sm text-base"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>

      {/* Decorative scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent" />
      </motion.div>
    </section>
  );
}
