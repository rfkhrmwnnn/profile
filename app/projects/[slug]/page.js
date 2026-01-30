import Link from "next/link";
import FadeInSection from "../../../components/FadeInSection";

const projectDetails = {
  ecommerce: {
    title: "E-Commerce Modern",
    desc: "Platform e-commerce dengan desain modern, integrasi pembayaran, dan dashboard admin.",
    tech: ["Next.js", "Tailwind", "Tripay API", "MongoDB"],
  },
  "bot-wa": {
    title: "Bot WhatsApp Otomatis",
    desc: "Bot WhatsApp yang dapat menjawab pertanyaan pelanggan, menerima pesanan, dan mencatat data otomatis.",
    tech: ["Node.js", "Express", "WhatsApp Web.js"],
  },
  absensi: {
    title: "Aplikasi Absensi QR",
    desc: "Aplikasi absensi berbasis web dengan sistem QR Scan dan laporan real-time.",
    tech: ["Vue", "supabase", "Tailwind", "QR Code API"],
  },
};

export default function ProjectDetail({ params }) {
  const project = projectDetails[params.slug];
  if (!project) return <p>Proyek tidak ditemukan.</p>;

  return (
    <FadeInSection>
      <section>
        <h1 className="text-4xl font-bold mb-4 text-primary dark:text-blue-400">{project.title}</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6">{project.desc}</p>

        <h3 className="text-lg font-semibold mb-2">Teknologi yang digunakan:</h3>
        <ul className="list-disc list-inside mb-8">
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <Link href="/projects" className="text-primary hover:underline">← Kembali ke semua proyek</Link>
      </section>
    </FadeInSection>
  );
    }
