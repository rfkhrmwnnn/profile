import Image from "next/image";
import FadeInSection from "../../components/FadeInSection";

export const metadata = {
  title: "Tentang Saya | Rifki Hermawan",
  description:
    "Profil lengkap Rifki Hermawan — Full Stack Developer, Automation Expert, dan UI/UX Enthusiast.",
};

export default function About() {
  return (
    <FadeInSection>
      <section className="max-w-4xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center gap-10 py-16">
        {/* Foto Profil */}
        <div className="flex-shrink-0 relative w-48 h-48 md:w-64 md:h-64">
          <Image
            src="https://files.catbox.moe/bw54gb.jpg"
            alt="Foto Profil Rifki Hermawan"
            width={256}
            height={256}
            className="rounded-full shadow-lg border-4 border-primary object-cover hover:scale-105 transition-transform duration-500 ease-out"
            priority
          />
          <div className="absolute inset-0 rounded-full bg-blue-500 opacity-20 blur-2xl animate-pulse -z-10"></div>
        </div>

        {/* Deskripsi Diri */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-primary dark:text-blue-400">
            Tentang Saya
          </h1>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Halo! Saya <span className="font-semibold">Rifki Hermawan</span>, seorang
            <span className="text-primary font-semibold">
              {" "}
              Full Stack Developer{" "}
            </span>
            dengan fokus pada pembuatan aplikasi web modern, sistem otomatisasi, dan
            desain antarmuka premium yang responsif.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Saya telah mengerjakan berbagai proyek seperti
            <span className="font-medium"> platform e-commerce</span>,
            <span className="font-medium"> bot WhatsApp cerdas</span>, dan
            <span className="font-medium"> aplikasi absensi berbasis web</span>.
            Tujuan saya adalah membangun solusi digital yang efisien, estetis, dan memberikan pengalaman pengguna terbaik.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Di luar pemrograman, saya juga suka mempelajari UI/UX Design, AI automation,
            dan eksplorasi teknologi web terbaru. 🌐✨
          </p>

          {/* Tombol CTA */}
          <div className="pt-4">
            <a
              href="/contact"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg shadow hover:bg-accent transition-all duration-300"
            >
              Hubungi Saya
            </a>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}
