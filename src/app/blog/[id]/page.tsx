// app/blog/[id]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getById } from "../../../lib/posts"; // Ajuste o caminho conforme necessário

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = getById(Number(id));

  if (!post) {
    notFound();
  }

  return (
    <main className="w-full py-10">
      <div className="w-full bg-blue-950 h-[120px]"></div>
      <Link className="mx-10 text-blue-700" href="/blog">
        - Voltar para artigos
      </Link>
      <h1 className="text-blue-950 font-bold text-3xl my-10 text-center md:text-4xl">
        {post.titulo}
      </h1>
      <div className="w-[85%] md:w-[50%] mx-auto h-[400px] flex justify-center relative">
        <Image
          src={post.imagem}
          alt="imagem sobre artigo de irrigação"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-4 p-4 py-10 md:px-40">
        {post.topicos.map((topico, index) => (
          <div key={index}>
            <h2 className="text-blue-800 font-semibold text-xl md:text-2xl">
              {topico.subtitulo}
            </h2>
            <p className="text-slate-950">{topico.conteudo}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
