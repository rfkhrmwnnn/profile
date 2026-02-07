import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata = {
  title: "Rifki Hermawan | Portfolio",
  description: "Portofolio profesional Rifki Hermawan — E-commerce, Bot WhatsApp, dan Aplikasi Absensi.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning className={`${inter.variable} ${outfit.variable}`}>
      <body className="relative overflow-x-hidden transition-colors duration-300 bg-background text-gray-200 antialiased selection:bg-primary selection:text-white">
        <ClientLayout>
            {children}
        </ClientLayout>
      </body>
    </html>
  );
}
