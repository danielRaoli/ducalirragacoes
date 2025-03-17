import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import posts from "@/lib/posts";
import Image from "next/image";
import { FileTextIcon } from "lucide-react";
export default function Artigos() {
  return (
    <>
      <section className="w-full flex flex-col md:flex-row md:items-center relative py-8 ">
        <div className="bg-blue-100 -z-10 h-full absolute w-full md:w-[75%] rounded-tr-3xl"></div>
        <div className="px-8 md:max-w-[40%]">
          <h3 className="text-xl md:text-3xl font-bold  text-blue-900 my-8 md:pl-20 text-center">
            Acompanhe nossos artigos e domine as melhores dicas e práticas da
            irrigação
          </h3>
        </div>

        <BentoGrid className="gap-4 p-4 md:w-[100%] md:pr-20">
          {posts.slice(0, 3).map((post, idx) => (
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
    </>
  );
}
