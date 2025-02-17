import HeroSection from "./components/hero-section";
import Beneficios from "./components/beneficios";
import Produtos from "./components/produtos";
import Valores from "./components/valores";
import Localizacao from "./components/localizacao";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Beneficios />
      <Produtos />
      <Valores />
      <Localizacao />
    </>
  );
}
