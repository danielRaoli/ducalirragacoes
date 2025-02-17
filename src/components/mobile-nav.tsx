import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu size={24} className="text-white md:hidden" />
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] bg-white z-50">
        <div className="flex flex-col gap-4 mt-8">
          <Link
            href="/"
            className="text-lg font-medium text-blue-950 hover:text-blue-600 transition-colors"
          >
            Início
          </Link>
          <Link
            href="/sobre"
            className="text-lg font-medium text-blue-950 hover:text-blue-600 transition-colors"
          >
            Sobre
          </Link>
          <Link
            href="/produtos"
            className="text-lg font-medium text-blue-950 hover:text-blue-600 transition-colors"
          >
            Produtos
          </Link>
          <Link
            href="/contato"
            className="text-lg font-medium text-blue-950 hover:text-blue-600 transition-colors"
          >
            Contato
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
