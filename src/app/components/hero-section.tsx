import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen">
      <Image
        src="/herobanner.png"
        alt="Hero Banner"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      <div className="absolute inset-0 flex flex-col justify-center items-start px-4  py-20 md:px-20">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-6xl font-bold text-white mb-4">
            Ducal Irrigações - Soluções em
            <br />
            irrigações para todos.
          </h1>
          <p className="text-xl text-white mb-8">
            Oferecemos soluções de alta qualidade, com o melhor atendimento!
          </p>
          <Link
            href={"/contato"}
            className="bg-blue-900 text-white px-8 py-3 rounded-md hover:bg-blue-950 transition-colors"
          >
            Saiba Mais
          </Link>
        </div>
      </div>
    </div>
  );
}
