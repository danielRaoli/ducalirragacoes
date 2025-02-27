"use client";

import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { MobileNav } from "@/components/mobile-nav";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { cn } from "@/lib/utils";

export default function Header() {
  const { scrollDirection, isScrolled } = useScrollDirection();

  return (
    <header
      className={cn(
        "w-full fixed z-50 transition-all duration-300",
        scrollDirection === "down" ? "-top-32" : "top-0",
        isScrolled ? "bg-blue-950/90 backdrop-blur-sm shadow-lg" : ""
      )}
    >
      {/* Top info bar */}
      <div className="bg-blue-950 text-white justify-center py-2 px-4">
        <div className="container mx-auto flex items-center justify-between">
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
      </div>

      {/* Navigation */}
      <nav className={cn("py-4 transition-colors duration-300")}>
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
            <Link href="/blog" className="text-white hover:text-blue-200">
              blog
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
  );
}
