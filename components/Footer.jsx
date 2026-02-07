export default function Footer() {
  return (
    <footer className="py-8 text-center border-t border-white/5 mt-20 bg-background relative z-10 glass-premium">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Rifki Hermawan. All rights reserved.</p>
        <p className="text-sm text-gray-500">
          Built with <span className="text-primary font-medium">Next.js</span> & <span className="text-secondary font-medium">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
