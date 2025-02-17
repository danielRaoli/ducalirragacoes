import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { MobileNav } from "@/components/mobile-nav";

export default function Header() {
  return (
    <>
      <header className="w-full fixed z-50">
        {/* Top info bar */}
        <div className="bg-blue-950 text-white flex justify-center items-center py-2 px-4">
          <p className="text-sm hidden md:block">
            Av. Primeiro de Janeiro, 527 - Centro, Irecê - BA, 44900-000
          </p>
          <div className="flex justify-center gap-4 ml-auto">
            <Link
              href="https://wa.me/5574999999999"
              target="_blank"
              className="hover:text-blue-200"
            >
              <FaWhatsapp size={20} />
            </Link>
            <Link
              href="https://instagram.com/ducalirrigacoes"
              target="_blank"
              className="hover:text-blue-200"
            >
              <FaInstagram size={20} />
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <nav className="bg-transparent py-4">
          <div className="container mx-auto flex justify-between items-center px-4">
            <Link href="/">
              <Image
                src="/logo-ducal.png"
                alt="Ducal Irrigações"
                width={80}
                height={26}
                className="object-contain"
              />
            </Link>

            <div className="hidden md:flex gap-8">
              <Link href="/" className="text-white hover:text-blue-200">
                Início
              </Link>
              <Link href="/sobre" className="text-white hover:text-blue-200">
                Sobre
              </Link>
              <Link href="/produtos" className="text-white hover:text-blue-200">
                Produtos
              </Link>
              <Link href="/contato" className="text-white hover:text-blue-200">
                Contato
              </Link>
            </div>

            {/* Mobile Navigation */}
            <MobileNav />
          </div>
        </nav>
      </header>
    </>
  );
}
