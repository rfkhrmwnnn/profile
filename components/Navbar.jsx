"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Beranda", href: "/" },
    { name: "Proyek", href: "/projects" },
    { name: "Tentang", href: "/about" },
    { name: "Kontak", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 inset-x-0 z-50 transition-all duration-300">
      <div className="glass mx-auto max-w-5xl mt-6 rounded-full px-6 py-3 flex justify-between items-center">
        <Link href="/" className="font-heading font-bold text-xl text-white tracking-wider flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-slow"/>
          RIFKI
        </Link>
        
        <div className="flex items-center space-x-1">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${
                  isActive ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
