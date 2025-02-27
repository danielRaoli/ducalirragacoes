export type Topico = {
    subtitulo: string;
    conteudo: string;
  };
  
  export type Post = {
    id: number,
    imagem: string;
    titulo: string;
    topicos: Topico[];
  };
  
  const posts: Post[] = [
    {
      id:1,
        imagem: "/gotejamento.jpg",
      titulo: "Irrigação por Gotejamento: Eficiência e Sustentabilidade",
      topicos: [
        {
          subtitulo: "Introdução ao sistema de gotejamento",
          conteudo: "A irrigação por gotejamento é uma técnica que fornece água diretamente às raízes das plantas através de tubos e emissores. Essa abordagem minimiza o desperdício de água e melhora a eficiência no uso dos recursos hídricos."
        },
        {
          subtitulo: "Benefícios da irrigação por gotejamento",
          conteudo: "Além da economia de água, essa técnica reduz a proliferação de ervas daninhas, melhora a absorção de nutrientes e permite um controle preciso da umidade do solo."
        },
        {
          subtitulo: "Implementação e manutenção",
          conteudo: "Para implementar um sistema de gotejamento eficaz, é necessário um bom planejamento da rede de distribuição, escolha de emissores adequados e manutenção regular para evitar entupimentos."
        }
      ]
    },
    {
      id:2,
      imagem: "/pivocentral.jpg",
      titulo: "Irrigação por Pivô Central: Quando Usar?",
      topicos: [
        {
          subtitulo: "O que é um sistema de pivô central?",
          conteudo: "Esse sistema utiliza uma estrutura rotativa para distribuir água de maneira uniforme em grandes áreas agrícolas, tornando-se uma opção eficiente para culturas extensivas."
        },
        {
          subtitulo: "Vantagens e desafios",
          conteudo: "O pivô central proporciona economia de mão de obra e água, mas pode demandar altos investimentos iniciais e requer um suprimento de energia constante."
        },
        {
          subtitulo: "Melhores práticas na operação do pivô",
          conteudo: "Para otimizar o desempenho do sistema, é essencial monitorar regularmente os bicos emissores, evitar excessos de irrigação e adotar tecnologias de automação."
        }
      ]
    },
    {
      id:3,
        imagem: "/sulco.jpg",
      titulo: "Irrigação por Sulco: Tradição e Eficiência",
      topicos: [
        {
          subtitulo: "O que é irrigação por sulco?",
          conteudo: "A irrigação por sulco consiste na distribuição de água em pequenos canais ao longo das fileiras de cultivo, sendo um método tradicional e amplamente utilizado em diversas culturas."
        },
        {
          subtitulo: "Vantagens e desvantagens",
          conteudo: "Esse sistema apresenta baixo custo de implementação, porém pode causar erosão do solo e desperdício de água caso não seja bem manejado."
        },
        {
          subtitulo: "Como otimizar o uso do sistema?",
          conteudo: "Para maximizar a eficiência, é recomendável nivelar o terreno, controlar os fluxos de água e utilizar sensores de umidade."
        }
      ]
    },
    {
      id:4,
        imagem: "/aspersao.webp",
      titulo: "Irrigação por Aspersão: Versatilidade no Campo",
      topicos: [
        {
          subtitulo: "Funcionamento da irrigação por aspersão",
          conteudo: "A aspersão imita a chuva natural, distribuindo água sobre as plantas através de aspersores. Esse método pode ser usado em diversas culturas e tipos de solo."
        },
        {
          subtitulo: "Benefícios do sistema",
          conteudo: "Proporciona uma distribuição uniforme da água e pode ser automatizado, reduzindo a necessidade de mão de obra intensa."
        },
        {
          subtitulo: "Cuidados e manutenção",
          conteudo: "É fundamental verificar regularmente os aspersores para evitar entupimentos e ajustar a pressão para otimizar a cobertura."
        }
      ]
    },
    {
        id:5,
        imagem: "/nebulizacao.jpg",
        titulo: "Irrigação por Nebulização: Controle de Umidade em Estufas",
        topicos: [
          {
            subtitulo: "O que é a irrigação por nebulização?",
            conteudo: "Esse sistema utiliza pequenos emissores para criar uma névoa fina, garantindo umidade controlada para estufas e viveiros."
          },
          {
            subtitulo: "Benefícios",
            conteudo: "Proporciona um ambiente ideal para germinação e enraizamento de mudas, além de reduzir o estresse hídrico das plantas."
          },
          {
            subtitulo: "Cuidados na aplicação",
            conteudo: "É essencial monitorar a umidade para evitar excesso de água e proliferação de fungos."
          }
        ]
      },
      {
        id:6,
        imagem: "/capilaridade.jpg",
        titulo: "Irrigação por Capilaridade: Uso Eficiente da Umidade do Solo",
        topicos: [
          {
            subtitulo: "Como funciona?",
            conteudo: "A irrigação por capilaridade utiliza reservatórios subterrâneos ou materiais absorventes para distribuir água gradualmente às raízes."
          },
          {
            subtitulo: "Vantagens",
            conteudo: "Evita desperdício de água, reduz a necessidade de rega frequente e mantém o solo sempre úmido."
          },
          {
            subtitulo: "Quando utilizar?",
            conteudo: "Ideal para hortas caseiras, vasos e cultivos em ambientes fechados."
          }
        ]
      },
      {
        id:7,
        imagem: "/superficie.png",
        titulo: "Irrigação de Superfície Inundada: Estratégia para Culturas Específicas",
        topicos: [
          {
            subtitulo: "O que é irrigação de superfície inundada?",
            conteudo: "Esse método consiste em manter uma lâmina de água sobre o solo, sendo amplamente utilizado no cultivo de arroz."
          },
          {
            subtitulo: "Principais características",
            conteudo: "Controla ervas daninhas, mantém o solo constantemente hidratado e melhora a absorção de nutrientes."
          },
          {
            subtitulo: "Cuidados na aplicação",
            conteudo: "Necessário um controle rigoroso do nível da água para evitar desperdício e erosão do solo."
          }
        ]
      },
      {
        id:8,
        imagem: "/automacao.jpeg",
        titulo: "Irrigação Automatizada: Eficiência com Tecnologia",
        topicos: [
          {
            subtitulo: "O que é irrigação automatizada?",
            conteudo: "A automação utiliza sensores e sistemas programáveis para otimizar a irrigação de acordo com as necessidades das plantas."
          },
          {
            subtitulo: "Vantagens",
            conteudo: "Economia de água, redução de custos operacionais e melhor controle sobre a umidade do solo."
          },
          {
            subtitulo: "Tecnologias utilizadas",
            conteudo: "Sensores de umidade, irrigação controlada por aplicativos e integração com inteligência artificial."
          }
        ]
      },
      {
        id:9,
        imagem: "/filtro.jpg",
        titulo: "Filtros de Irrigação: Proteção Contra Impurezas",
        topicos: [
          {
            subtitulo: "Importância dos filtros",
            conteudo: "Os filtros evitam o entupimento dos emissores e garantem maior durabilidade do sistema de irrigação."
          },
          {
            subtitulo: "Tipos de filtros",
            conteudo: "Os principais tipos são filtros de tela, areia e disco, cada um adequado para diferentes condições de água."
          },
          {
            subtitulo: "Manutenção",
            conteudo: "É essencial realizar limpezas periódicas para evitar acúmulo de sujeira e garantir o bom funcionamento."
          }
        ]
      },
      {
        id:10,
        imagem: "/tubos.jpg",
        titulo: "Tubos Gotejadores: Eficiência na Distribuição de Água",
        topicos: [
          {
            subtitulo: "O que são tubos gotejadores?",
            conteudo: "São tubos com pequenos orifícios que liberam água de forma controlada diretamente na raiz das plantas."
          },
          {
            subtitulo: "Benefícios",
            conteudo: "Reduzem o desperdício de água, evitam erosão do solo e promovem um crescimento uniforme das plantas."
          },
          {
            subtitulo: "Onde usar?",
            conteudo: "Ideais para hortas, fruticultura e culturas que exigem irrigação localizada."
          }
        ]
      },
      {
        id:11,
        imagem: "/valvula.jpg",
        titulo: "Válvulas Solenoides: Controle Automático da Irrigação",
        topicos: [
          {
            subtitulo: "O que são válvulas solenoides?",
            conteudo: "São dispositivos eletromecânicos que controlam o fluxo de água em sistemas automatizados de irrigação."
          },
          {
            subtitulo: "Vantagens",
            conteudo: "Permitem programação eficiente da irrigação, evitando desperdícios e otimizando o consumo de água."
          },
          {
            subtitulo: "Manutenção",
            conteudo: "Requer verificação periódica para evitar falhas no funcionamento e garantir sua durabilidade."
          }
        ]
      },
      {
        id:12,
        imagem: "/sensor.webp",
        titulo: "Sensores de Umidade: Tecnologia para Uso Sustentável da Água",
        topicos: [
          {
            subtitulo: "O que são sensores de umidade?",
            conteudo: "Dispositivos que medem a umidade do solo em tempo real, auxiliando na decisão de quando irrigar."
          },
          {
            subtitulo: "Benefícios",
            conteudo: "Reduzem o consumo de água, evitam irrigação excessiva e melhoram a eficiência da produção agrícola."
          },
          {
            subtitulo: "Integração com sistemas automatizados",
            conteudo: "Podem ser conectados a controladores de irrigação para uma gestão ainda mais eficiente."
          }
        ]
      }
    
  ];
  

  export function getById(id: number): Post | null{
    return posts.find(p => p.id === id) ?? null
  }

  export default posts;
  
  