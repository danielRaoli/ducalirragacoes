import HeroSection from "./components/hero-section";
import Beneficios from "./components/beneficios";
import Produtos from "./components/produtos";
import Valores from "./components/valores";
import Localizacao from "./components/localizacao";
import Artigos from "./components/artigos";
import ProdutosPopulares from "./components/produtos-populares";
import Testemonials from "./components/testemonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Beneficios />
      <Produtos />
      <ProdutosPopulares />
      <Valores />
      <Localizacao />
      <Testemonials />
      <Artigos />
    </>
  );
}
