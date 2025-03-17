import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";

const reviews = [
  {
    name: "Pedro",
    username: "@pedro",
    body: "Excelente! Melhor preço da região, alta variedade nos produtos e um atendimento impecável! Recomendo 100% os serviços da Ducal! Parabéns a todos da loja!",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjVFECN6Ec11OuTrDGdz1WxP4ZdWDP0_9D_wFyhjSj7O9bsNPq8RTQ=w68-h68-p-rp-mo-br100",
  },
  {
    name: "Hericles",
    username: "@hericles",
    body: "Melhores preços da região. Atendimento muito bom..",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjUhUr0hRVWkDR2HAzizFUZ6ur0QhtaXhqd0dydbNSOvPUXTLAft=w68-h68-p-rp-mo-ba3-br100",
  },
  {
    name: "Levii",
    username: "@levi",
    body: "As melhores marcas,  preços baixos, bom atendimento e várias formas de pagamento.",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjUITuPDnD6swohnvamxPFwQxIYugcLVW3DcnH7PvssFhd8XrIV5=w68-h68-p-rp-mo-br100",
  },
  {
    name: "Ettê Alves",
    username: "@ettê",
    body: "Bons preços, variedades de produtos e um excelente atendimento.",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjWFuH0TWI1YcOnc7OZr46H6io_Ttd2pss56-qYZUkx5Cm4q6HB22g=w68-h68-p-rp-mo-ba4-br100",
  },
  {
    name: "Guilsa",
    username: "@guilsa",
    body: "Ótimo atendimento e grande variedade de produtos!",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjVGqHnrcV8hgK4vr3DVI_yp0tDEw2zyxjVp-0CrwO9Rv84owYo=w68-h68-p-rp-mo-br100",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border bg-white p-4 "
      }
    >
      <div className="flex flex-row items-center gap-2">
        <Image src={img} alt="" width={50} height={50} />

        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default function Testemonials() {
  return (
    <>
      <h3 className="text-blue-900 font-bold text-xl md:text-3xl px-4 md:px-20">
        - O que Nossos Cliente Dizem
      </h3>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden  py-8">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
    </>
  );
}
