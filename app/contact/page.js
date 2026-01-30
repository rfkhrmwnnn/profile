"use client";

import { useState } from "react";
import FadeInSection from "../../components/FadeInSection";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.target);
    const response = await fetch("https://formspree.io/2915012873463791529", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <FadeInSection>
      <section className="max-w-2xl mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold text-primary dark:text-blue-400 mb-4">
          Hubungi Saya
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Ada proyek menarik atau ingin berkolaborasi? Kirim pesan melalui formulir di bawah ini.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 text-left mt-8">
          <div>
            <label className="block text-sm font-medium mb-1">Nama</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Pesan</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-accent transition"
          >
            {status === "loading" ? "Mengirim..." : "Kirim Pesan"}
          </button>

          {status === "success" && (
            <p className="text-green-600 mt-4">✅ Pesan berhasil dikirim!</p>
          )}
          {status === "error" && (
            <p className="text-red-600 mt-4">❌ Terjadi kesalahan, coba lagi nanti.</p>
          )}
        </form>
      </section>
    </FadeInSection>
  );
}
