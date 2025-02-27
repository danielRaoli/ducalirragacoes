import { Button } from "@/components/ui/button";
import { InstagramLogoIcon } from "@radix-ui/react-icons";

import Image from "next/image";

import { CiFacebook, CiLocationOn } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

import { MdComputer } from "react-icons/md";

export default function Contato() {
  return (
    <>
      <main className="absolute z-50 w-screen min-h-screen pb-28 bg-gray-200">
        <div className="w-full flex flex-col items-center px-4">
          <div className=" relative border-2 border-green-800 flex justify-center items-center mx-auto my-8 bg-blue-950 rounded-full w-24 h-24">
            <Image
              src="/logo-ducal.png"
              alt="logo da ducal irrigações"
              width={80}
              height={80}
              className="rounded-full object-contain"
            />
          </div>
          <span className="text-xl font-semibold">@ducalirrigacoes</span>
          <span>Av. Primeiro de Janeiro, 527, Centro, Irecê-BA</span>
          <div className="flex gap-2 my-8 ">
            <a href="https://www.facebook.com/ducalirrigacoes/" target="_blank">
              <CiFacebook
                size={32}
                className="cursor-pointer hover:scale-110 transition-transform"
              />
            </a>
            <a href="https://www.facebook.com/ducalirrigacoes/" target="_blank">
              <InstagramLogoIcon className="cursor-pointer w-8 h-8 hover:scale-110 transition-transform" />
            </a>
          </div>

          <span className="font-semibold text-md">
            Atendimento Personalizado
          </span>
          <Button className="flex bg-blue-900 text-white rounded-full justify-between items-center hover:scale-110 transition-transform w-full md:w-1/2 lg:w-1/3  p-8 my-4">
            <FaWhatsapp className="min-w-[30px] min-h-[30px]" />
            <div className="flex gap-2 items-center ">
              <span className="text-lg">Canal de Atendimento</span>
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            </div>
            <div></div>
          </Button>

          <span className="mb-4">Links Úteis</span>

          <Button className="flex mb-2 bg-blue-900 text-white rounded-full justify-between items-center hover:scale-110 transition-transform w-full md:w-1/3 p-8 ">
            <InstagramLogoIcon className="min-w-[30px] min-h-[30px]" />
            <div className="flex gap-2 items-center ">
              <span className="text-lg">Instagram</span>
            </div>
            <div></div>
          </Button>
          <Button className="flex mb-2 bg-blue-900 text-white rounded-full justify-between items-center hover:scale-110 transition-transform w-full md:w-1/3 p-8">
            <CiLocationOn className="min-w-[30px] min-h-[30px]" />
            <div className="flex gap-2 items-center ">
              <span className="text-lg">Localização</span>
            </div>
            <div></div>
          </Button>
          <Button className="flex mb-2 bg-blue-900 text-white rounded-full justify-between items-center hover:scale-110 transition-transform w-full md:w-1/3 p-8 ">
            <CiFacebook className="min-w-[30px] min-h-[30px]" />
            <div className="flex gap-2 items-center ">
              <span className="text-lg">Facebook</span>
            </div>
            <div></div>
          </Button>
          <Button className="flex mb-2 bg-blue-900 text-white rounded-full justify-between items-center hover:scale-110 transition-transform w-full md:w-1/3 p-8 ">
            <MdComputer className="min-w-[30px] min-h-[30px]" />
            <div className="flex gap-2 items-center ">
              <span className="text-lg">Site</span>
            </div>
            <div></div>
          </Button>
        </div>
      </main>
    </>
  );
}
