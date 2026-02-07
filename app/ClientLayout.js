"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CursorSpotlight from "../components/CursorSpotlight";
import PageTransitionOverlay from "../components/PageTransitionOverlay";
import LoadingIntro from "../components/LoadingIntro";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      <LoadingIntro />
      <CursorSpotlight />
      <PageTransitionOverlay />
      
      {/* Global Background */}
      <div className="fixed inset-0 -z-50 bg-background" />
      <div className="fixed inset-0 -z-40 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
      
      <Navbar />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      
      <Footer />
    </>
  );
}
