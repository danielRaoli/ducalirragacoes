import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const navigation = [
    { name: "Início", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Produtos", href: "/produtos" },
    { name: "Contato", href: "/contato" },
  ];

  const social = [
    {
      name: "Instagram",
      href: "https://instagram.com/ducalirrigacoes",
      icon: FaInstagram,
    },
    {
      name: "WhatsApp",
      href: "https://api.whatsapp.com/send?phone=5574999220117&text=Ol%C3%A1%2C%vim%20do%20site!%20Gostaria%20de%20ser%20atendido!",
      icon: FaWhatsapp,
    },
  ];

  return (
    <footer className="bg-blue-950 text-white flex flex-col items-center py-12  px-4 md:px-20 w-full">
      <div className="flex flex-col md:flex-row  justify-around gap-8 w-full">
        {/* Logo e Descrição */}
        <div className="space-y-4">
          <Image
            src="/logo-ducal.png"
            alt="Ducal Irrigações"
            width={150}
            height={50}
            className="object-contain"
          />
          <p className="text-gray-300 text-sm max-w-md">
            Lorem ipsum dolor sit amet consectetur. Tellus id tempus eu arcu et
            senectus pellentesque maecenas ac. Pellentesque tortor posuere
            faucibus vitae molestie risus.
          </p>
        </div>

        {/* Navegação */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Navegação</h3>
          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contato</h3>
          <div className="space-y-2">
            {social.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target="_blank"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Política de Privacidade */}
      <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
        <p className="max-w-4xl mx-auto">
          POLÍTICA DE PRIVACIDADE: A Política de Privacidade foi elaborada em
          conformidade com a Lei Federal n. 12.965 de 23 de abril de 2014 (Marco
          Civil da Internet), com a Lei Federal n. 13.709, de 14 de agosto de
          2018 (Lei de Proteção de Dados Pessoais) e com o Regulamento UE n.
          2016/679 de 27 de abril de 2016 (Regulamento Geral Europeu de Proteção
          de Dados Pessoais - RGDP), pode ser lida na íntegra clicando{" "}
          <Link href="/privacidade" className="text-blue-400 hover:underline">
            aqui
          </Link>
          .
        </p>
      </div>

      {/* Desenvolvido por */}
      <div className="mt-8 text-center text-sm text-gray-400 flex ">
        <p>
          Desenvolvido por{" "}
          <Link
            href="https://brotherscompany.com.br"
            target="_blank"
            className="text-white font-semibold"
          >
            Brothers Company
          </Link>
        </p>
        <Image
          src={"/logobc.png"}
          alt="logo brother company, desenvolvedora do site"
          width={20}
          height={20}
        />
      </div>
    </footer>
  );
}
