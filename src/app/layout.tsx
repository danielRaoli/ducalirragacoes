import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Ducal Irrigações | Materiais e Serviços de Irrigação",
  description:
    "Soluções completas em irrigação para sua lavoura ou jardim. Produtos de qualidade, instalação especializada e suporte técnico.",
  keywords:
    "irrigação, sistemas de irrigação, materiais de irrigação, gotejamento, aspersão, tubos de irrigação, instalação de irrigação, automação agrícola",
  authors: [
    { name: "Ducal Irrigações", url: "https://www.ducalirrigacoes.net.br" },
  ],
  openGraph: {
    title: "Ducal Irrigações | Materiais e Serviços de Irrigação",
    description:
      "Especialistas em sistemas de irrigação para o agronegócio e residências. Oferecemos produtos de alta qualidade e instalação profissional.",
    url: "https://www.ducalirrigacoes.net.br",
    siteName: "Ducal Irrigações",
    images: [
      {
        url: "https://www.ducalirrigacoes.net.br/logo-ducal.png",
        width: 1200,
        height: 630,
        alt: "Ducal Irrigações - Soluções para sistemas de irrigação",
      },
    ],
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ducal Irrigações | Materiais e Serviços de Irrigação",
    description:
      "Soluções completas para sistemas de irrigação. Produtos e serviços especializados para aumentar a produtividade da sua plantação.",
    images: ["https://ducalirrigacoes.net.br/imagem-de-capa.jpg"],
    creator: "@ducalirrigacoes",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ducalirrigacoes.net.br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} ${montserrat.variable} font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
