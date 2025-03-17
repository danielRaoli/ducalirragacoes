import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

const products = [
  {
    name: "Cabos Elétricos",
    image: "/cabo.webp",
    notes: 500,
  },
  {
    name: "Placa Solar",
    image: "/placasolar.webp",
    notes: 720,
  },
  {
    name: "Micro Aspersor",
    image: "/microaspersor.webp",
    notes: 400,
  },
  {
    name: "Tubos",
    image: "/tubos.webp",
    notes: 630,
  },
  {
    name: "Fita Gotejadora",
    image: "/fita.webp",
    notes: 450,
  },
];

export default function ProdutosPopulares() {
  return (
    <>
      <section className="px-4 pb-8 md:px-20">
        <h3 className="text-blue-900 text-xl md:text-3xl font-bold mb-8">
          - Nossos Campeões de Vendas
        </h3>
        <Carousel className="w-full">
          <CarouselContent className="w-full h-auto ">
            {products.map((product) => (
              <CarouselItem
                key={product.name}
                className="md:basis-1/3 lg:basis-1/5"
              >
                <Card className="min-h-[350px] w-full">
                  <div className="h-[240px] w-full relative">
                    <Image
                      src={product.image}
                      alt="Imagem do produto da ducal"
                      fill
                      className="object-cover rounded-t-md"
                    />
                    <Heart className="absolute top-2 right-2 text-blue-900" />
                  </div>
                  <div className="w-full pt-2 flex flex-col items-center">
                    <p>{product.name}</p>
                    <div className="flex w-full justify-center">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <FaStar className="text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-400 text-center text-md">
                      {" "}
                      ({product.notes} avaliações)
                    </p>
                    <Link
                      className="bg-blue-900 text-white rounded-md p-2 w-[80%] text-center my-2"
                      href={`https://api.whatsapp.com/send?phone=557499220117&text=Olá tenho interesse no produto ${product.name}`}
                    >
                      Comprar Agora
                    </Link>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </>
  );
}
