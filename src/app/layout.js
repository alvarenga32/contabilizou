import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: "Contabilizou: A maior contabilidade online do Brasil",
  description: "Tenha uma contabilidade online completa, prática e segura a partir de R$195/mês. Conheça a Contabilizou, o contador online que cuida de tudo para você!",
  keywords: "contabilidade online, abrir empresa gratis, abrir cnpj, trocar de contador, contabilizou",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
