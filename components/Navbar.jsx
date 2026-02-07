"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Beranda", href: "/" },
    { name: "Proyek", href: "/projects" },
    { name: "Tentang", href: "/about" },
    { name: "Kontak", href: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-4" : "py-6"} px-4 md:px-8`}>
      <div className={`mx-auto max-w-5xl rounded-full transition-all duration-500 border border-white/5 ${scrolled ? "glass-premium bg-background/60 shadow-lg backdrop-blur-xl" : "bg-transparent border-transparent"}`}>
        <div className="px-6 py-3 flex justify-between items-center relative z-50">
          <Link href="/" className="font-heading font-bold text-2xl tracking-wider flex items-center gap-3 text-white group">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary group-hover:bg-primary-light transition-colors"></span>
            </div>
            <span className="group-hover:text-primary-light transition-colors duration-300">RIFKI</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-5 py-2 text-sm font-medium transition-colors rounded-full ${
                    isActive ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-white/10 rounded-full border border-white/5"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors focus:outline-none bg-white/5 rounded-full hover:bg-white/10"
            aria-label="Toggle menu"
          >
            {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, scale: 0.95 }}
            animate={{ opacity: 1, height: "auto", scale: 1 }}
            exit={{ opacity: 0, height: 0, scale: 0.95 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0 }}
            className="absolute top-[calc(100%+8px)] left-4 right-4 glass-premium rounded-2xl overflow-hidden md:hidden border border-white/10 shadow-2xl"
          >
            <div className="flex flex-col p-2 space-y-1">
              {links.map((link) => {
                 const isActive = pathname === link.href;
                 return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-center transition-all duration-300 ${
                      isActive 
                      ? "bg-primary/20 text-white font-semibold shadow-inner" 
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                 )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
