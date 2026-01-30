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
    <section className="py-20 max-w-6xl mx-auto px-6">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-16"
      >
        <span className="text-gradient">Skills & Certifications</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
        {/* Skills Section */}
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-2">
            <span className="w-8 h-1 bg-primary rounded-full"/> Technical Proficiency
          </h3>
          <div className="space-y-6">
            {skills.map((skill, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-2 text-gray-300">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-primary">{skill.level}%</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="bg-gradient-to-r from-primary to-secondary h-full rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certificates Section */}
        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-2">
             <span className="w-8 h-1 bg-secondary rounded-full"/> Achievements
          </h3>
          <ul className="space-y-4">
            {certificates.map((cert, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-6 glass-card rounded-xl group hover:bg-surface/60"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-lg text-white group-hover:text-primary-light transition-colors">{cert.title}</h4>
                    <p className="text-gray-400 text-sm mt-1">{cert.issuer}</p>
                  </div>
                  <span className="bg-white/10 text-xs px-2 py-1 rounded text-gray-300 border border-white/5 whitespace-nowrap">
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
