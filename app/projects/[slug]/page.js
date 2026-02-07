"use client";

import Link from "next/link";
import FadeInSection from "../../../components/FadeInSection";
import { ArrowLeftIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

const projectDetails = {
  ecommerce: {
    title: "E-Commerce Modern",
    desc: "Platform e-commerce dengan desain modern, integrasi pembayaran, dan dashboard admin.",
    tech: ["Next.js", "Tailwind", "Tripay API", "MongoDB"],
    link: "https://e-commerce.rfkhrmwn.com",
    previewType: "website"
  },
  "bot-wa": {
    title: "Bot WhatsApp Otomatis",
    desc: "Bot WhatsApp yang dapat menjawab pertanyaan pelanggan, menerima pesanan, dan mencatat data otomatis.",
    tech: ["Node.js", "Express", "WhatsApp Web.js"],
    previewType: "bot"
  },
  absensi: {
    title: "Aplikasi Absensi QR",
    desc: "Aplikasi absensi berbasis web dengan sistem QR Scan dan laporan real-time.",
    tech: ["Vue", "supabase", "Tailwind", "QR Code API"],
    link: "https://absen.ikmi.tech",
    previewType: "website"
  },
};

export default function ProjectDetail({ params }) {
  const project = projectDetails[params.slug];
  
  if (!project) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl font-bold text-gray-400 mb-4">Proyek tidak ditemukan</h2>
        <Link href="/projects" className="text-primary hover:text-primary-light transition-colors">
          Kembali ke daftar proyek
        </Link>
      </div>
    );
  }

  return (
    <FadeInSection>
      <section className="pt-24 pb-20 max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <Link href="/projects" className="inline-flex items-center text-gray-400 hover:text-white transition-colors gap-2 mb-8 group">
            <ArrowLeftIcon className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Kembali ke semua proyek
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
            {project.title}
          </h1>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {project.tech.map((t) => (
              <span key={t} className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary-light text-sm font-medium">
                {t}
              </span>
            ))}
          </div>

          <p className="text-gray-300 text-lg leading-relaxed mb-10 border-l-4 border-primary pl-6">
            {project.desc}
          </p>

          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors"
            >
              <GlobeAltIcon className="w-5 h-5" />
              Kunjungi {project.previewType === 'bot' ? 'Dokumentasi' : 'Website'}
            </a>
          )}
        </div>
      </section>
    </FadeInSection>
  );
}
