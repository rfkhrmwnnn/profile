import ProjectCard from "../../components/ProjectCard";
import FadeInSection from "../../components/FadeInSection";

const projects = [
  {
    title: "E-Commerce Modern",
    desc: "Platform e-commerce dengan integrasi pembayaran dan dashboard admin.",
    slug: "ecommerce",
  },
  {
    title: "Bot WhatsApp",
    desc: "Bot WA untuk otomatisasi pesan dan manajemen pelanggan.",
    slug: "bot-wa",
  },
  {
    title: "Aplikasi Absensi",
    desc: "Aplikasi absensi berbasis web dengan sistem QR dan laporan real-time.",
    slug: "absensi",
  },
];

export default function Projects() {
  return (
    <FadeInSection>
      <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A selection of my recent work, featuring web applications, automation bots, and more.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="h-64 sm:h-80">
               <ProjectCard {...p} />
            </div>
          ))}
        </div>
      </section>
    </FadeInSection>
  );
}
