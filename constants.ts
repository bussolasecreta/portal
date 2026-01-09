
import { Benefit, StoreItem, RSSItem, SaaSTool } from './types';

export const COLORS = {
  deepBlue: '#0f172a',
  subtleGold: '#c5a059',
  graphite: '#334155',
  white: '#ffffff'
};

export const LOGO_URL = 'https://i.ibb.co/fd0MtCtw/B-ssola-Secreta.png';

export const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1516738901171-8ec4fc1cbbed?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1600&auto=format&fit=crop'
];

export const BENEFITS: Benefit[] = [
  { id: 1, title: 'Clareza Estratégica', description: 'Navegue pelo caos do mercado com uma visão límpida e direcionada ao seu propósito.', icon: 'compass' },
  { id: 2, title: 'Leitura de Tendências', description: 'Antecipe o amanhã através de uma análise técnica e intuitiva das forças de inovação.', icon: 'trending-up' },
  { id: 3, title: 'Curadoria de Ideias', description: 'Filtramos o ruído para entregar apenas o que realmente gera valor intelectual e prático.', icon: 'filter' },
  { id: 4, title: 'Visão de Longo Prazo', description: 'Fuja do imediatismo. Construímos bases sólidas para decisões que perdurassem.', icon: 'anchor' },
  { id: 5, title: 'Apoio à Decisão', description: 'Dados transformados em inteligência estratégica para seus momentos cruciais.', icon: 'target' }
];

export interface GlossaryTerm {
  term: string;
  definition: string;
  whenToUse: string;
  example: string;
}

export interface GlossaryCategory {
  category: string;
  terms: GlossaryTerm[];
}

export const BUSINESS_GLOSSARY: GlossaryCategory[] = [
  {
    category: 'Estratégia & Gestão',
    terms: [
      {
        term: 'SWOT',
        definition: 'Ferramenta clássica de planejamento estratégico que analisa Forças, Fraquezas (interno), Oportunidades e Ameaças (externo).',
        whenToUse: 'No início de qualquer planejamento ou ao avaliar a viabilidade de um novo projeto.',
        example: 'Uma startup usa a SWOT para entender que sua tecnologia é forte (Força), mas sua marca ainda é desconhecida (Fraqueza).'
      },
      {
        term: 'OKRs',
        definition: 'Objectives and Key Results. Metodologia de gestão que foca em objetivos ambiciosos medidos por resultados-chave quantificáveis.',
        whenToUse: 'Para alinhar o foco de toda a empresa e garantir que todos trabalhem para o mesmo propósito.',
        example: 'Objetivo: Ser o líder de mercado. KR: Atingir 1 milhão de usuários ativos até dezembro.'
      },
      {
        term: 'Blue Ocean',
        definition: 'Estratégia de buscar mercados inexplorados (oceanos azuis) onde a concorrência é irrelevante, em vez de competir em mercados saturados (oceanos vermelhos).',
        whenToUse: 'Ao buscar inovação de valor e fugir da guerra de preços.',
        example: 'O Cirque du Soleil criou um novo mercado que mistura teatro e circo, fugindo da concorrência dos circos tradicionais.'
      },
      {
        term: 'Porter\'s 5 Forces',
        definition: 'Modelo analítico para entender a atratividade de uma indústria com base em 5 forças competitivas.',
        whenToUse: 'Para decidir entrar em um novo mercado ou entender sua posição competitiva atual.',
        example: 'Analisar o poder de negociação dos fornecedores em uma indústria de semicondutores.'
      }
    ]
  },
  {
    category: 'Finanças & Métricas',
    terms: [
      {
        term: 'EBITDA',
        definition: 'Lucro antes de juros, impostos, depreciação e amortização. Mede a capacidade de geração de caixa operacional puro.',
        whenToUse: 'Para comparar a eficiência operacional entre empresas, ignorando custos financeiros e contábeis.',
        example: 'Avaliar se uma fábrica é lucrativa na produção antes de considerar seus empréstimos bancários.'
      },
      {
        term: 'ROI',
        definition: 'Return on Investment. Relação entre o dinheiro ganho ou perdido através de um investimento e o montante investido.',
        whenToUse: 'Em qualquer decisão que envolva alocação de capital.',
        example: 'Se você gastou R$ 100 em anúncios e vendeu R$ 300, seu ROI é de 200%.'
      },
      {
        term: 'CAC',
        definition: 'Customer Acquisition Cost. A soma de todos os gastos em marketing e vendas dividida pelo número de novos clientes.',
        whenToUse: 'Para avaliar a saúde financeira e a eficiência do crescimento de um negócio.',
        example: 'Se gastamos R$ 10.000 para atrair 100 clientes, o CAC é R$ 100 por cliente.'
      },
      {
        term: 'LTV',
        definition: 'Lifetime Value. Valor total que um cliente gera para a empresa durante todo o tempo em que permanece como cliente.',
        whenToUse: 'Para saber quanto podemos gastar para adquirir um cliente (CAC < LTV).',
        example: 'Um assinante de streaming que paga R$ 50/mês e fica 24 meses tem um LTV de R$ 1.200.'
      }
    ]
  },
  {
    category: 'Marketing & Vendas',
    terms: [
      {
        term: 'Inbound Marketing',
        definition: 'Estratégia de marketing focada em atrair clientes através de conteúdo relevante e valor agregado, em vez de anúncios interruptivos.',
        whenToUse: 'Para construir autoridade e reduzir o CAC no longo prazo.',
        example: 'Publicar artigos técnicos no blog para atrair gerentes de TI interessados em cloud storage.'
      },
      {
        term: 'Growth Hacking',
        definition: 'Processo de experimentação rápida em canais de marketing e desenvolvimento de produto para encontrar a forma mais eficiente de crescer.',
        whenToUse: 'Especialmente em startups com recursos limitados que precisam de crescimento exponencial.',
        example: 'O Dropbox oferecendo espaço extra para quem convidasse amigos para a plataforma.'
      },
      {
        term: 'Brand Equity',
        definition: 'O valor comercial que deriva da percepção do consumidor sobre o nome de uma marca, em vez do produto em si.',
        whenToUse: 'Ao planejar posicionamento de marca premium e fidelização.',
        example: 'Um consumidor que paga mais por um café apenas por ser da marca Starbucks.'
      }
    ]
  },
  {
    category: 'Liderança & Pessoas',
    terms: [
      {
        term: 'Soft Skills',
        definition: 'Habilidades interpessoais e traços de personalidade, como empatia, liderança e comunicação.',
        whenToUse: 'Na contratação e desenvolvimento de lideranças e equipes colaborativas.',
        example: 'Um gestor que resolve conflitos de equipe usando escuta ativa e negociação.'
      },
      {
        term: 'Cultura Organizacional',
        definition: 'O conjunto de valores, crenças e comportamentos que determinam como os funcionários de uma empresa interagem e trabalham.',
        whenToUse: 'Para garantir o alinhamento de propósito e a retenção de talentos.',
        example: 'A cultura de "liberdade com responsabilidade" amplamente difundida na Netflix.'
      },
      {
        term: 'Turnover',
        definition: 'Índice de rotatividade de funcionários. Relação entre contratações e demissões.',
        whenToUse: 'Para medir a satisfação interna e a eficiência dos processos de RH.',
        example: 'Uma empresa com turnover alto geralmente tem problemas de gestão ou clima organizacional.'
      }
    ]
  },
  {
    category: 'Produto & Inovação',
    terms: [
      {
        term: 'MVP',
        definition: 'Minimum Viable Product. Versão mais simples de um produto com recursos suficientes para validar uma ideia com clientes reais.',
        whenToUse: 'Antes de investir grandes somas em um desenvolvimento completo.',
        example: 'Lançar um app que só faz uma função principal para ver se as pessoas realmente a usam.'
      },
      {
        term: 'Design Thinking',
        definition: 'Abordagem centrada no ser humano para inovação que integra as necessidades das pessoas e os requisitos para o sucesso do negócio.',
        whenToUse: 'Para resolver problemas complexos e criar produtos que os usuários realmente desejam.',
        example: 'Observar clientes em um banco para redesenhar o totem de autoatendimento.'
      },
      {
        term: 'Product-Market Fit',
        definition: 'O estágio em que um produto satisfaz uma demanda forte do mercado e os clientes começam a comprá-lo organicamente.',
        whenToUse: 'Para saber o momento certo de acelerar os investimentos em escala.',
        example: 'Quando um novo jogo se torna viral e as vendas não param de crescer sem investimento em marketing.'
      }
    ]
  },
  {
    category: 'Tecnologia & Digital',
    terms: [
      {
        term: 'SaaS',
        definition: 'Software as a Service. Modelo de distribuição de software onde as aplicações são hospedadas na nuvem e acessadas via assinatura.',
        whenToUse: 'Para oferecer produtos de tecnologia com receita recorrente e escalabilidade rápida.',
        example: 'Adobe Creative Cloud ou Microsoft 365.'
      },
      {
        term: 'Big Data',
        definition: 'Conjuntos de dados extremamente grandes que podem ser analisados computacionalmente para revelar padrões e tendências.',
        whenToUse: 'Para decisões baseadas em volumes massivos de comportamento de usuário ou mercado.',
        example: 'Algoritmos de recomendação do YouTube analisando bilhões de visualizações para sugerir vídeos.'
      },
      {
        term: 'Blockchain',
        definition: 'Sistema de registro distribuído e imutável que garante a segurança e transparência de transações sem necessidade de intermediários.',
        whenToUse: 'Em finanças, contratos inteligentes e rastreabilidade de cadeias de suprimentos.',
        example: 'O uso de redes para transacionar Bitcoin de forma segura e descentralizada.'
      }
    ]
  },
  {
    category: 'Governança & Risco',
    terms: [
      {
        term: 'ESG',
        definition: 'Environmental, Social and Governance. Critérios usados para medir a sustentabilidade e o impacto ético de um investimento.',
        whenToUse: 'Para atrair investimentos institucionais e melhorar a reputação corporativa.',
        example: 'Uma empresa que reduz emissões de carbono e tem conselho administrativo diverso.'
      },
      {
        term: 'Compliance',
        definition: 'O ato de estar em conformidade com leis, regulamentos internos e padrões éticos.',
        whenToUse: 'Para mitigar riscos legais e operacionais críticos.',
        example: 'Auditorias internas para garantir que não existam práticas de corrupção ou lavagem de dinheiro.'
      },
      {
        term: 'Stakeholders',
        definition: 'Todas as partes interessadas em um negócio: acionistas, funcionários, clientes, fornecedores e a comunidade.',
        whenToUse: 'Ao tomar decisões estratégicas que impactam além do lucro imediato.',
        example: 'Considerar o impacto de fechar uma fábrica na economia da cidade onde ela reside.'
      }
    ]
  },
  {
    category: 'Modelos Mentais',
    terms: [
      {
        term: 'Antifragilidade',
        definition: 'Conceito de Nassim Taleb sobre sistemas que não apenas resistem ao estresse, mas na verdade melhoram com ele.',
        whenToUse: 'Ao construir negócios resilientes em ambientes de alta incerteza.',
        example: 'O sistema imunológico humano ou uma rede descentralizada que se fortalece após um ataque.'
      },
      {
        term: 'Skin in the Game',
        definition: 'Ter um risco pessoal (financeiro ou emocional) no resultado de uma decisão.',
        whenToUse: 'Para alinhar interesses entre gestores e investidores.',
        example: 'Um CEO que investe todo o seu patrimônio na própria empresa.'
      },
      {
        term: 'First Principles',
        definition: 'Técnica de raciocínio de quebrar problemas complexos em seus elementos básicos e construir a partir daí.',
        whenToUse: 'Para inovar de forma radical em indústrias estagnadas.',
        example: 'Elon Musk reconstruindo foguetes analisando o custo bruto da matéria-prima em vez de comprar foguetes prontos.'
      }
    ]
  }
];

export const SAAS_TOOLS: SaaSTool[] = [
  {
    id: 1,
    name: 'Sextante Digital',
    tagline: 'Market Intelligence & Digital Scanning',
    description: 'Uma plataforma avançada de monitoramento que rastreia movimentos de mercado, sinais competitivos e tendências tecnológicas em tempo real.',
    benefits: [
      'Varredura automatizada de competidores',
      'Alertas de tendências emergentes',
      'Dashboards de inteligência comercial',
      'Relatórios de gaps de mercado'
    ],
    url: 'https://sextantedigital.bussolasecreta.com',
    icon: 'activity'
  },
  {
    id: 2,
    name: 'Logbook',
    tagline: 'Strategic Decision Frameworks',
    description: 'O repositório definitivo para documentar sua jornada estratégica. Utilize frameworks de classe mundial para estruturar e validar suas decisões.',
    benefits: [
      'Biblioteca de Frameworks (Blue Ocean, SWOT, 5 Forces)',
      'Histórico imutável de decisões críticas',
      'Análise de viabilidade integrada',
      'Colaboração estratégica para times'
    ],
    url: 'https://logbook.bussolasecreta.com',
    icon: 'layout'
  }
];

export const STORE_ITEMS: StoreItem[] = [
  { 
    id: 1, 
    title: 'Estratégia do Oceano Azul', 
    description: 'Como criar novos mercados e tornar a concorrência irrelevante através da inovação.', 
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop', 
    link: 'https://amzn.to/3EXAMPLE1',
    category: 'Livro'
  },
  { 
    id: 2, 
    title: 'Mentoria Exclusiva: Horizonte 2026', 
    description: 'Acompanhamento individual para estruturação de novos modelos de negócios escaláveis.', 
    image: 'https://images.unsplash.com/photo-1521791136364-798a7bc0d262?q=80&w=600&auto=format&fit=crop', 
    link: '#contact',
    category: 'Mentoria',
    price: 'Sob Consulta'
  },
  { 
    id: 3, 
    title: 'Good Strategy Bad Strategy', 
    description: 'A diferença entre planos vazios e estratégias reais que geram resultados extraordinários.', 
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=600&auto=format&fit=crop', 
    link: 'https://amzn.to/3EXAMPLE2',
    category: 'Livro'
  },
  { 
    id: 4, 
    title: 'Masterclass: Arquitetura de Valor', 
    description: 'Curso intensivo sobre como precificar e posicionar produtos de alto valor agregado.', 
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop', 
    link: '#enroll',
    category: 'Curso',
    price: 'R$ 1.497,00'
  }
];

export const RSS_FEEDS = [
  { name: 'HBR News', url: 'https://hbr.org/rss/business-innovation' },
  { name: 'MIT Review', url: 'https://sloanreview.mit.edu/feed/' },
  { name: 'McKinsey', url: 'https://www.mckinsey.com/insights/rss' }
];

export const CURATED_INSIGHTS: RSSItem[] = [
  {
    title: "O Futuro da Estratégia Corporativa pós-2025",
    pubDate: "2026-01-05T10:00:00Z",
    link: "https://hbr.org/2024/09/the-future-of-strategy-is-now",
    guid: "curated-1",
    author: "HBR Authors",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
    description: "Análise profunda sobre como a IA generativa está forçando empresas a repensarem seus modelos de planejamento plurianual.",
    source: "HBR Analysis"
  }
];

export const EXTERNAL_TOOLS = [
  { name: 'Sextante Digital', url: 'https://sextantedigital.bussolasecreta.com' },
  { name: 'Logbook', url: 'https://logbook.bussolasecreta.com' }
];
