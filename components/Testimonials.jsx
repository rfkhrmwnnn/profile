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
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
        What Client Says
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="glass-card p-8 rounded-2xl flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity" />
              <img 
                src={t.avatar} 
                alt={t.name} 
                className="relative w-20 h-20 rounded-full border-2 border-white/20 object-cover" 
              />
            </div>
            
            <p className="text-gray-300 italic mb-6 leading-relaxed">"{t.quote}"</p>
            
            <div className="mt-auto">
              <h4 className="font-bold text-lg text-white">{t.name}</h4>
              <p className="text-sm text-primary-light font-medium">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
