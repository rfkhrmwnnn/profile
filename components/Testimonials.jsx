export default function Testimonials() {
  const testimonials = [
    {
      name: "Andi Setiawan",
      role: "CEO PT Digital Nusantara",
      quote: "Rifki membangun sistem e-commerce kami dengan cepat dan hasilnya luar biasa!",
      avatar: "https://i.pravatar.cc/100?img=11",
    },
    {
      name: "Sinta Dewi",
      role: "HR Manager",
      quote: "Aplikasi absensi buatan Rifki sangat mempermudah manajemen kehadiran tim kami.",
      avatar: "https://i.pravatar.cc/100?img=32",
    },
    {
      name: "Rama Aditya",
      role: "Founder Chatify",
      quote: "Bot WhatsApp-nya keren! Integrasi otomatis dan stabil.",
      avatar: "https://i.pravatar.cc/100?img=22",
    },
  ];

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto relative z-10">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white">
        What Client Says
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="glass-premium p-8 rounded-3xl flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-500 border border-white/5 hover:border-white/10"
          >
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <img 
                src={t.avatar} 
                alt={t.name} 
                className="relative w-20 h-20 rounded-full border-2 border-white/20 object-cover shadow-lg" 
              />
            </div>
            
            <p className="text-gray-300 italic mb-6 leading-relaxed relative">
              <span className="text-4xl text-primary/20 absolute -top-4 -left-2 font-serif">"</span>
              {t.quote}
              <span className="text-4xl text-primary/20 absolute -bottom-8 -right-2 font-serif">"</span>
            </p>
            
            <div className="mt-auto">
              <h4 className="font-bold text-lg text-white group-hover:text-primary-light transition-colors">{t.name}</h4>
              <p className="text-sm text-gray-500 font-medium">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
