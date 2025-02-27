import { Button } from "@/components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import Image from "next/image";

export default function Produtos() {
  return (
    <>
      <div className="bg-blue-950 w-full h-[130px]"></div>
      <main className="px-2 py-10 md:px-24 ">
        <h1 className="text-blue-950 text-center my-10 text-2xl md:text-3xl font-bold">
          Conheça Nossos Principais Produtos
        </h1>
        <div className="grid grid-cols-2 gap-2 md:gap-8 md:grid-cols-4">
          {Array.from({ length: 11 }, (_, i) => (
            <Card className="w-full  h-[250px] max-w-[300px]  md:h-[350px]">
              <CardContent className="w-full flex flex-col items-center h-full p-0">
                <div className=" relative w-full h-[70%] mb-4">
                  <Image
                    src={`/product${i + 1}.jpg`}
                    alt="imagem produto"
                    fill
                    className="rounded-t-md  object-cover object-[0%_80%] md:object-[0%_70%]"
                  />
                </div>
                <a
                  className="w-full flex justify-center"
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=5574999220117&text=Ol%C3%A1%2C%20venho%20do%20linktree!%20Gostaria%20de%20ser%20atendido!"
                >
                  <Button className="bg-blue-800 w-[80%] text-center text-white rounded-xl  hover:animate-bounce">
                    {" "}
                    Comprar Agora
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </>
  );
}
