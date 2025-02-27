import Image from "next/image";
import posts from "../../lib/posts";
import { BentoGrid, BentoCard } from "../../components/magicui/bento-grid";
import { FileTextIcon } from "lucide-react";
export default function Blog() {
  return (
    <>
      <main className="w-full">
        {/* Banner Section */}
        <div className="relative w-full h-[50vh] md:h-[60vh]">
          <Image
            className="object-cover object-center"
            src="/irrigacaoimage.jpg"
            alt="banner contendo imagem de irrigação"
            fill
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <div className="absolute inset-0 z-50 flex items-center justify-center text-white">
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
