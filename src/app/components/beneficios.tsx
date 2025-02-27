import { FaUsers } from "react-icons/fa";
import { LuHandCoins } from "react-icons/lu";
import { PiTractor } from "react-icons/pi";

export default function Beneficios() {
  const beneficios = [
    {
      icone: FaUsers,
      titulo: "Equipe Qualificada",
      descricao: "Equipe qualificada para atender você com o melhor serviço.",
    },
    {
      icone: LuHandCoins,
      titulo: "Preços Competitivos",
      descricao: "Cobrimos seu orçamento com preços justos e transparentes.",
    },
    {
      icone: PiTractor,
      titulo: "Compromisso",
      descricao:
        "Temos o compromisso de achar a solução ideal para sua plantação!",
    },
  ];
  return (
    <>
      <section id="beneficios" className="bg-blue-950 text-white py-8 md:py-14">
        <h2 className="font-semibold text-center text-xl md:text-2xl mb-8 md:mb-14">
          Por quê nos escolher ?
        </h2>
        <div className=" w-full mx-auto flex flex-col items-center md:justify-center md:flex-row gap-14">
          {beneficios.map((beneficio) => (
            <div className="flex flex-col items-center gap-4 max-w-[300px]">
              <beneficio.icone size={40} />
              <h3 className="font-semibold text-lg">{beneficio.titulo}</h3>
              <p className="text-sm text-center">{beneficio.descricao}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
