import { IconType } from "react-icons";
import { FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa";

type CardInfo = {
  icon: IconType;
  title: string;
  content: string | string[];
};

export default function Localizacao() {
  const contactCards: CardInfo[] = [
    {
      icon: FaMapMarkerAlt,
      title: "Localização",
      content: "Av. Primeiro de Janeiro, 527 - Centro, Irecê - BA, 44900-000",
    },
    {
      icon: FaPhone,
      title: "Contato",
      content: "Telefone: 3641-5056",
    },
    {
      icon: FaClock,
      title: "Horário de Atendimento",
      content: ["SEG a SEX: 8hrs - 17:30", "SÁB: 8hrs - 12hrs"],
    },
  ];
  return (
    <>
      <section
        id="localizacao"
        className="py-16 bg-white flex flex-col space-y-8 md:space-y-0 md:flex-row  px-4 md:px-20 md:justify-center"
      >
        <div className="relative h-[400px] w-full md:w-1/2 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.4798241430626!2d-41.848809125381884!3d-11.299597328438754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x76ed4ba807b6b57%3A0x913dacc8d12470a!2zRHVjYWwgSXJyaWdhw6fDtWVz!5e0!3m2!1spt-BR!2sbr!4v1739808927401!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
        <div className="space-y-8 md:space-y-0 md:w-1/2">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-slate-800">
              Solicite um orçamento rápido{" "}
              <span className="text-blue-800">sem compromisso</span>
            </h2>
          </div>

          <div id="cards" className="space-y-4">
            {contactCards.map((card, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-gray-100 p-4 rounded-lg shadow-sm"
              >
                <card.icon className="text-blue-800 text-xl mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-800 mb-1">
                    {card.title}
                  </h3>
                  {Array.isArray(card.content) ? (
                    card.content.map((line, i) => (
                      <p key={i} className="text-gray-800">
                        {line}
                      </p>
                    ))
                  ) : (
                    <p className="text-gray-800">{card.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
