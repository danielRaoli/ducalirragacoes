import Image from "next/image";
import { FaRegCircleCheck } from "react-icons/fa6";

export default function Produtos() {
  const produtos = [
    "Tubos",
    "Bomba Centrífuga",
    "Fita Gotejadora",
    "Bomba Submersa",
    "Placa Solar",
  ];
  return (
    <>
      <section
        id="produtos"
        className="py-16 flex flex-col md:flex-row px-4 md:px-20"
      >
        <div className="relative h-[400px] w-full md:w-1/2">
          <Image
            src="/produtos.png"
            alt="Produtos Ducal"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
            Trabalhamos com <span className="text-blue-800">diversos</span>{" "}
            tipos de <span className="text-blue-800">produtos</span>
          </h2>
          <div className="space-y-3">
            {produtos.map((produto, index) => (
              <div key={index} className="flex items-center gap-2">
                <FaRegCircleCheck className="text-blue-800" size={20} />
                <span className="text-gray-700">{produto}</span>
              </div>
            ))}
          </div>
          <button className="mt-8 bg-blue-950 text-white px-8 py-3 rounded-md hover:bg-blue-900 transition-colors">
            Ver Mais
          </button>
        </div>
      </section>
    </>
  );
}
