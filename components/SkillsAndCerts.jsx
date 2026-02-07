"use client";

import { motion } from "framer-motion";

export default function SkillsAndCerts() {
  const skills = [
    { name: "Next.js", level: 90 },
    { name: "React.js", level: 85 },
    { name: "Tailwind CSS", level: 92 },
    { name: "Node.js", level: 80 },
    { name: "Firebase", level: 75 },
    { name: "UI/UX Design", level: 85 },
  ];

  const certificates = [
    { title: "Front-End Web Development", issuer: "Dicoding Indonesia", year: "2023" },
    { title: "JavaScript Programming Mastery", issuer: "FreeCodeCamp", year: "2022" },
    { title: "React Advanced Development", issuer: "Udemy", year: "2024" },
  ];

  return (
    <section className="py-24 max-w-6xl mx-auto px-6 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="text-gradient-premium">Skills & Certifications</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Continuous learning and mastery of modern web technologies.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Skills Section */}
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="space-y-8"
        >
          <h3 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/20 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
              </svg>
            </span>
            Technical Proficiency
          </h3>
          
          <div className="space-y-6">
            {skills.map((skill, i) => (
              <div key={i} className="group">
                <div className="flex justify-between text-sm mb-2 text-gray-300 group-hover:text-white transition-colors">
                  <span className="font-medium tracking-wide">{skill.name}</span>
                  <span className="text-primary font-mono">{skill.level}%</span>
                </div>
                <div className="w-full bg-surface-light rounded-full h-2.5 overflow-hidden border border-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
                    className="bg-gradient-to-r from-primary to-secondary h-full rounded-full relative"
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse-slow" />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certificates Section */}
        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="space-y-8"
        >
          <h3 className="text-2xl font-bold text-white flex items-center gap-3">
             <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-secondary/20 text-secondary">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                 <path fillRule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.753 6.753 0 006.138 5.6 6.73 6.73 0 002.743 1.346A6.707 6.707 0 019.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 00-2.25 2.25c0 .414.336.75.75.75h14.25c.414 0 .75-.336.75-.75a2.25 2.25 0 00-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 01-1.612-3.125 6.73 6.73 0 002.743-1.347 6.753 6.753 0 006.139-5.6.75.75 0 00-.585-.858 47.077 47.077 0 00-3.07-.543V2.62a.75.75 0 00-.658-.744 49.22 49.22 0 00-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 00-.657.744zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 013.16 5.337a45.6 45.6 0 012.006-.343v.256zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 01-2.863 3.207 6.72 6.72 0 00.857-3.294z" clipRule="evenodd" />
               </svg>
             </span>
             Achievements
          </h3>
          <ul className="grid gap-4">
            {certificates.map((cert, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="p-5 glass-card rounded-xl group hover:border-primary/30 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3 group-hover:bg-primary/10 transition-all duration-500" />
                
                <div className="flex justify-between items-start gap-4 relative z-10">
                  <div>
                    <h4 className="font-bold text-lg text-white group-hover:text-primary-light transition-colors">{cert.title}</h4>
                    <p className="text-gray-400 text-sm mt-1 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      {cert.issuer}
                    </p>
                  </div>
                  <span className="bg-surface-light text-xs font-mono px-2.5 py-1 rounded-md text-gray-300 border border-white/5 whitespace-nowrap group-hover:border-primary/20 transition-colors">
                    {cert.year}
                  </span>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
