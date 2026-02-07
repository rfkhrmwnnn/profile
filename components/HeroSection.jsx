"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import TypingText from "./TypingText";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[100dvh] text-center overflow-hidden pt-20">
      
      {/* Premium Dynamic Background */}
      <div className="absolute inset-0 w-full h-full bg-background overflow-hidden">
        {/* Aurora Effects */}
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-aurora mix-blend-screen" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] animate-aurora delay-1000 mix-blend-screen" />
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[100px] animate-pulse-slow" />
        
        {/* Grid & Noise */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.4]" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay" />
      </div>

      <div className="relative z-10 px-4 sm:px-6 max-w-5xl mx-auto flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm text-primary-light font-medium mb-8 hover:bg-white/10 transition-colors cursor-default shadow-lg shadow-primary/5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for Freelance Projects
          </span>
          
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight text-white mb-6 leading-[1.1]">
            Building Digital <br />
            <span className="text-gradient-premium relative inline-block">
              Experiences
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-50" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C2.00025 6.99997 90.5002 0.499971 298.002 1.49997" stroke="currentColor" strokeWidth="3"/></svg>
            </span> <br />
            That Matter.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="h-8 md:h-12 flex items-center justify-center"
        >
           <TypingText /> 
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed text-balance"
        >
          I am Rifki Hermawan, a Full Stack Developer specializing in building exceptional digital solutions, from e-commerce platforms to intelligent automation bots.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 w-full sm:w-auto"
        >
          <Link
            href="/projects"
            className="group relative px-8 py-4 rounded-full bg-primary text-white font-semibold text-lg transition-all shadow-[0_0_40px_-10px_rgba(99,102,241,0.5)] hover:shadow-[0_0_60px_-15px_rgba(99,102,241,0.6)] hover:-translate-y-1 w-full sm:w-auto text-center overflow-hidden"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine" />
            View Projects
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-surface-light border border-white/5 hover:bg-surface text-gray-300 hover:text-white font-medium transition-all hover:-translate-y-1 w-full sm:w-auto text-center"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>

      {/* Modern Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] text-gray-500 uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-[20px] h-[32px] rounded-full border border-white/10 flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
