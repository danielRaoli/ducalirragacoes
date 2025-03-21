import Image from "next/image";
import posts from "../../lib/posts";
import { BentoGrid, BentoCard } from "../../components/magicui/bento-grid";
import { FileTextIcon } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog sobre Irrigação - Tudo o que você precisa saber",
  description:
    "Leia nossos artigos e aprenda tudo sobre sistemas de irrigação para otimizar sua produção agrícola.",
  keywords:
    "irrigação, sistemas de irrigação, materiais de irrigação, gotejamento, aspersão, tubos de irrigação, instalação de irrigação, automação agrícola",
  authors: [
    { name: "Ducal Irrigações", url: "https://www.ducalirrigacoes.net.br" },
  ],
  openGraph: {
    title: "Blog sobre Irrigação - Tudo o que você precisa saber",
    description:
      "Leia nossos artigos e aprenda tudo sobre sistemas de irrigação para otimizar sua produção agrícola.",
    url: "https://www.ducalirrigacoes.net.br/blog",
    type: "website",
    images: [
      {
        url: "https://www.ducalirrigacoes.net.br/pivocentral.jpg",
        width: 1200,
        height: 630,
        alt: "Imagem de um sistema de irrigação",
      },
    ],
  },
};

export default function Blog() {
  return (
    <>
      <main className="w-full">
        {/* Banner Section */}
        <div className="relative w-full h-[50vh] md:h-[60vh]">
          <Image
            className="object-cover object-center"
            src="/pivocentral.jpg"
            alt="banner contendo imagem de irrigação"
            fill
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="absolute inset-0 z-40 flex items-center justify-center text-white">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center px-4">
              Aprenda Tudo Sobre Irrigações
            </h1>
          </div>
        </div>

        {/* Articles Section */}
        <section className="w-full py-10">
          <h3 className="text-blue-900 text-center text-2xl px-4 font-semibold">
            Leia Nossos Artigos
          </h3>
          <BentoGrid className="gap-4 p-4 max-w-7xl mx-auto">
            {posts.map((post, idx) => (
              <BentoCard
                key={idx}
                Icon={FileTextIcon}
                name={post.titulo}
                description={post.topicos[0].conteudo.substring(0, 100) + "..."}
                className="col-span-3 lg:col-span-1"
                href={`/blog/${post.id}`}
                cta="Ver mais"
                background={
                  <Image
                    src={post.imagem}
                    alt={post.titulo}
                    fill
                    className="absolute right-0 top-0 h-full w-full object-cover "
                  />
                }
              />
            ))}
          </BentoGrid>
        </section>
      </main>
    </>
  );
}
