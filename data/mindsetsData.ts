
export interface MindsetProfile {
  id: number;
  name: string;
  archetype: string;
  category: 'Pioneiros' | 'Tecnologia' | 'Finanças' | 'Varejo' | 'Cultura' | 'Impacto' | 'LatAm' | 'Nova Economia';
  coreIdea: string;
  strategicProtocol: string;
  neuralInstallation: string;
  marketImpact: string;
  keyHabit: string;
  habits: string[]; // Lista de 5 hábitos específicos
}

export const MINDSETS_DATA: MindsetProfile[] = [
  {
    id: 1,
    name: 'Henry Ford',
    archetype: 'O Engenheiro de Escala',
    category: 'Pioneiros',
    coreIdea: 'Fluxo Contínuo e Padronização Radical',
    strategicProtocol: 'Desconstrução do processo produtivo em átomos de execução. Ford não criou o carro, ele criou a máquina que cria o carro. O segredo é a redução da dependência do talento individual através da perfeição do sistema operacional.',
    neuralInstallation: 'Pare de gerenciar pessoas e comece a desenhar fluxos. Se uma tarefa exige um gênio para ser feita, seu sistema é falho. A escala é diretamente proporcional à simplicidade da tarefa básica.',
    marketImpact: 'Democratização do transporte e invenção da jornada de trabalho moderna. Criou o maior mercado consumidor do mundo ao transformar funcionários em clientes.',
    keyHabit: 'Eliminação de movimentos desnecessários.',
    habits: [
      'Análise diária de segundos perdidos no fluxo de trabalho.',
      'Padronização absoluta: apenas uma cor, um modelo, um processo.',
      'Verticalização extrema: controle da mina de ferro ao pneu final.',
      'Reinvestimento maciço de lucros em tecnologia de automação.',
      'Manutenção de ambientes de trabalho limpos e ultra-organizados.'
    ]
  },
  {
    id: 2,
    name: 'John D. Rockefeller',
    archetype: 'O Estrategista de Monopólio',
    category: 'Pioneiros',
    coreIdea: 'Eficiência de Margem e Integração Vertical',
    strategicProtocol: 'Domínio absoluto da cadeia logística. Rockefeller percebeu que o lucro não está na extração, mas no controle do gargalo (refino e transporte). Ele utilizou a escala para negociar descontos impossíveis, esmagando a concorrência via eficiência de custos.',
    neuralInstallation: 'Monitore cada gota de desperdício. Em larga escala, 0,01% de economia em uma lata de solda significa milhões no caixa. A riqueza real é construída nas margens que os outros ignoram.',
    marketImpact: 'Estabeleceu o padrão da infraestrutura energética global. Foi o primeiro bilionário da história, provando que o controle do ecossistema é superior ao controle do produto.',
    keyHabit: 'Vigilância contábil microscópica.',
    habits: [
      'Documentação de cada centavo gasto desde os 16 anos (Ledger A).',
      'Neutralidade emocional absoluta em negociações hostis.',
      'Uso de subprodutos: nada é jogado fora, tudo vira um novo SKU.',
      'Alavancagem de dados logísticos para prever movimentos de mercado.',
      'Isolamento diário para reflexão sobre grandes jogadas de capital.'
    ]
  },
  {
    id: 11,
    name: 'Steve Jobs',
    archetype: 'O Esteta Radical',
    category: 'Tecnologia',
    coreIdea: 'Intersecção entre Artes Liberais e Tecnologia',
    strategicProtocol: 'Curadoria como estratégia de defesa. Jobs não buscava o que o cliente queria, mas o que o cliente ainda não sabia que precisava. O foco não é a tecnologia, mas o significado emocional do objeto. O "Não" é a sua ferramenta mais poderosa.',
    neuralInstallation: 'Remova tudo o que for supérfluo até que reste apenas o essencial e o belo. A simplicidade é a sofisticação máxima porque exige um esforço intelectual hercúleo para ser atingida.',
    marketImpact: 'Redefiniu o comportamento humano através do design. Transformou ferramentas de cálculo em símbolos de status e extensões do corpo humano.',
    keyHabit: 'Iteração obsessiva do design.',
    habits: [
      'Caminhadas de 2 horas para processamento de ideias complexas.',
      'Dizer "Não" a 10 ideias excelentes para focar em uma extraordinária.',
      'Revisão microscópica do packaging: a experiência começa na caixa.',
      'Exigência de perfeição em partes que o cliente nunca verá.',
      'Contratação baseada em paixão e alinhamento estético/técnico.'
    ]
  },
  {
    id: 17,
    name: 'Elon Musk',
    archetype: 'O Primeiro Princípio',
    category: 'Tecnologia',
    coreIdea: 'Raciocínio Baseado nas Leis da Física',
    strategicProtocol: 'Aniquilação da analogia. Musk decompõe problemas complexos na matéria-prima básica (custo do ferro, custo do silício) e reconstrói do zero. Se a física permite, o resto é apenas uma questão de capital, engenharia e tempo.',
    neuralInstallation: 'Abandone o "sempre foi feito assim". O consenso é o túmulo da inovação. Se o seu objetivo é 10x maior que o da concorrência, você não compete, você coloniza um novo território.',
    marketImpact: 'Quebra do monopólio espacial e revolução da frota automotiva mundial. Aceleração forçada da transição energética global via software e hardware integrados.',
    keyHabit: 'Otimização de tempo em blocos de 5 minutos.',
    habits: [
      'Questionar cada requisito legal ou técnico como se fosse falso.',
      'Trabalho de 100 horas semanais em fases críticas de lançamento.',
      'Eliminação imediata de reuniões sem valor agregado claro.',
      'Feedback loop ultra-rápido: falhe hoje, corrija hoje.',
      'Leitura multidisciplinar profunda (física, IA, propulsão).'
    ]
  },
  {
    id: 21,
    name: 'Warren Buffett',
    archetype: 'O Oráculo da Paciência',
    category: 'Finanças',
    coreIdea: 'Fosso Competitivo (Moat) e Juros Compostos',
    strategicProtocol: 'Alocação de capital em ativos com vantagens competitivas inexpugnáveis. O objetivo não é prever o preço de amanhã, mas ser dono do fluxo de caixa de daqui a 30 anos. A paciência é a maior alavanca financeira que existe.',
    neuralInstallation: 'O mercado é uma máquina de transferir dinheiro dos impacientes para os pacientes. Se você não está disposto a segurar um ativo por 10 anos, não o segure por 10 minutos.',
    marketImpact: 'Definição do padrão-ouro para o investimento em valor. Provou que a simplicidade de pensamento e a disciplina emocional superam algoritmos complexos de curto prazo.',
    keyHabit: 'Leitura técnica extensiva.',
    habits: [
      'Leitura de 500 páginas de relatórios anuais por dia.',
      'Viver em uma "Bolha de Foco": evitar notícias de curto prazo.',
      'Recusar 99% das propostas que chegam à sua mesa.',
      'Investir apenas no que entende perfeitamente (Circle of Competence).',
      'Manter a calma absoluta quando o mercado entra em pânico.'
    ]
  },
  {
    id: 30,
    name: 'Naval Ravikant',
    archetype: 'O Estrategista da Alavancagem',
    category: 'Nova Economia',
    coreIdea: 'Alavancagem Sem Permissão (Código e Mídia)',
    strategicProtocol: 'Construção de ativos que trabalham enquanto você dorme. A riqueza moderna não vem de vender horas, mas de deter capital, código ou mídia. Busque conhecimento específico: aquilo que parece jogo para você, mas trabalho para os outros.',
    neuralInstallation: 'Torne-se o melhor do mundo no que você faz, até que você seja o único. A sorte é o resíduo do design. Alavanque seu julgamento para ganhar com a cabeça, não com os músculos.',
    marketImpact: 'Democratização do acesso ao capital anjo e disseminação da filosofia de "Riqueza Digital". Mudou a percepção de trabalho para uma busca por soberania pessoal.',
    keyHabit: 'Meditação e auto-observação profunda.',
    habits: [
      'Priorizar lealdade sobre velocidade em parcerias de longo prazo.',
      'Priorizar o aprendizado de fundamentos sobre notícias do dia.',
      'Dormir 8 horas e focar em decisões de alta qualidade.',
      'Leitura constante de ciência, filosofia e microeconomia.',
      'Dizer a verdade radicalmente para evitar custos de memória.'
    ]
  },
  // NOVOS 100 PERFIS ADICIONADOS ABAIXO
  {
    id: 31,
    name: 'Bill Gates',
    archetype: 'O Mestre dos Padrões',
    category: 'Tecnologia',
    coreIdea: 'Dominância de Plataforma e Efeito de Rede',
    strategicProtocol: 'Criação de um padrão universal (SO) onde todos os outros desenvolvedores precisam construir seus produtos. O controle da infraestrutura de software garante o pedágio sobre toda a economia digital.',
    neuralInstallation: 'Não venda o produto, venda a plataforma. Quem controla o sistema operacional da indústria controla a margem de lucro de todos os players que operam nela.',
    marketImpact: 'Digitalização completa do ambiente de trabalho global e criação do monopólio de software mais resiliente da história.',
    keyHabit: 'Think Weeks (Semanas de Isolamento)',
    habits: [
      'Leitura de um livro por dia durante semanas de retiro.',
      'Uso de rigor matemático para análise de filantropia.',
      'Foco obsessivo em segurança e estabilidade do código.',
      'Mapeamento de tendências de hardware com 10 anos de antecedência.',
      'Escrita de memorandos técnicos para alinhamento de visão.'
    ]
  },
  {
    id: 32,
    name: 'Jeff Bezos',
    archetype: 'O Arquiteto do "Dia 1"',
    category: 'Nova Economia',
    coreIdea: 'Customer Obsession e Infraestrutura Logística',
    strategicProtocol: 'Aposta em coisas que NÃO mudam em 10 anos: clientes sempre quererão preços baixos e entrega rápida. Reinvestimento total da margem em infraestrutura para criar uma barreira de entrada intransponível.',
    neuralInstallation: 'Esteja sempre no "Dia 1". No momento em que você entra no "Dia 2", o declínio começa. A obsessão pelo cliente é a única proteção real contra a obsolescência tecnológica.',
    marketImpact: 'Destruição e redefinição do varejo global e criação do ecossistema de nuvem (AWS) que sustenta a internet moderna.',
    keyHabit: 'Escrita de memorandos de 6 páginas.',
    habits: [
      'Proibição de PowerPoint em reuniões executivas.',
      'A regra das "Duas Pizzas": times pequenos para manter agilidade.',
      'Foco em métricas de longo prazo, ignorando a volatilidade trimestral.',
      'Caminhadas matinais para decisões de alta complexidade.',
      'Decisões "Tipo 1" e "Tipo 2": velocidade vs reversibilidade.'
    ]
  },
  {
    id: 33,
    name: 'Mark Zuckerberg',
    archetype: 'O Conector Social',
    category: 'Nova Economia',
    coreIdea: 'Moat Social e Efeito de Rede Massivo',
    strategicProtocol: 'Capturar o grafo social da humanidade. O valor da rede cresce exponencialmente com o número de usuários, tornando a saída do sistema um custo social proibitivo para o indivíduo.',
    neuralInstallation: 'Mova-se rápido e quebre coisas. A velocidade de iteração é mais importante que a perfeição inicial. Capture a atenção primeiro, monetize a infraestrutura depois.',
    marketImpact: 'Centralização da comunicação humana e da publicidade digital em escala planetária.',
    keyHabit: 'Desafios anuais de aprendizado pessoal.',
    habits: [
      'Foco total na retenção de usuários como métrica primária.',
      'Aquisição agressiva de competidores (Instagram/WhatsApp).',
      'Cultura de "Hackathon" constante para inovação interna.',
      'Uso de dados comportamentais para otimização de feed.',
      'Simplificação radical da interface de usuário.'
    ]
  },
  {
    id: 34,
    name: 'Larry Page',
    archetype: 'O Indexador Universal',
    category: 'Tecnologia',
    coreIdea: 'Organização da Informação Global',
    strategicProtocol: 'A monetização da curiosidade humana. Através de algoritmos de relevância, o Google tornou-se o porteiro da internet, controlando o fluxo de atenção e intenção de compra mundial.',
    neuralInstallation: 'Pense 10x (Moonshots). Melhorar algo em 10% é difícil, melhorar em 10x obriga você a repensar o problema desde os fundamentos físicos.',
    marketImpact: 'Acesso instantâneo ao conhecimento humano e criação da máquina de publicidade mais eficiente da história.',
    keyHabit: 'Questionamento de "Por que isso não pode ser maior?".',
    habits: [
      'Foco em resolver problemas de escala que afetam bilhões.',
      'Reuniões focadas em dados, não em opiniões.',
      'Incentivo ao "20% time" para projetos experimentais.',
      'Obsessão por velocidade de carregamento (latência zero).',
      'Leitura de patentes técnicas para antecipar rupturas.'
    ]
  },
  {
    id: 35,
    name: 'Jensen Huang',
    archetype: 'O Visionário do Processamento',
    category: 'Tecnologia',
    coreIdea: 'Computação Acelerada e IA Generativa',
    strategicProtocol: 'Aposta na arquitetura antes do mercado existir. Huang antecipou que a computação paralela (GPUs) seria o motor da Inteligência Artificial décadas antes da explosão do mercado.',
    neuralInstallation: 'A agilidade não é sobre velocidade de pernas, mas sobre a velocidade de percepção do sinal de mercado. Construa a base que todos precisarão usar no futuro.',
    marketImpact: 'Motorização da revolução da IA e transformação da NVIDIA no centro nevrálgico do hardware moderno.',
    keyHabit: 'Cultura de execução na "velocidade da luz".',
    habits: [
      'Comunicação direta e horizontal com engenheiros de base.',
      'Eliminação de hierarquias desnecessárias para acelerar chips.',
      'Aposta massiva em P&D, mesmo em ciclos de baixa.',
      'Uso de IA interna para otimizar o design de novos processadores.',
      'Foco em ecossistemas de software (CUDA) para travar o hardware.'
    ]
  },
  {
    id: 36,
    name: 'Bernard Arnault',
    archetype: 'O Guardião do Desejo',
    category: 'Varejo',
    coreIdea: 'Luxo Atemporal e Heritage',
    strategicProtocol: 'Aquisição de marcas com alma histórica e revitalização criativa. No luxo, o preço é uma ferramenta de branding, não uma barreira de entrada. O controle total da distribuição garante a exclusividade.',
    neuralInstallation: 'Combine herança com modernidade. O lucro real está no controle do desejo, não apenas na venda de produtos. Se o objeto é eterno, a margem é infinita.',
    marketImpact: 'Consolidação do mercado de luxo global e criação do maior conglomerado de bens de luxo do mundo (LVMH).',
    keyHabit: 'Visitas semanais às lojas de varejo.',
    habits: [
      'Inspeção microscópica da qualidade do acabamento nas fábricas.',
      'Curadoria pessoal de diretores criativos para cada maison.',
      'Manutenção de uma reserva de capital para aquisições oportunas.',
      'Foco na narrativa da marca acima de métricas de venda curta.',
      'Proteção ferrenha da exclusividade e proibição de descontos.'
    ]
  },
  {
    id: 37,
    name: 'Amancio Ortega',
    archetype: 'O Mestre da Logística Rápida',
    category: 'Varejo',
    coreIdea: 'Fast Fashion e Feedback-to-Shelf',
    strategicProtocol: 'Inversão do modelo tradicional de moda. Ortega não dita a moda; ele ouve o que o cliente quer hoje e coloca na prateleira em 15 dias através de uma cadeia de suprimentos verticalizada e ultra-ágil.',
    neuralInstallation: 'A moda é perecível como peixe. Se não girar rápido, apodrece no estoque. O segredo é a velocidade de resposta ao desejo do cliente, não a previsão de tendências.',
    marketImpact: 'Democratização do design de moda e redefinição do ciclo de produção têxtil mundial via Zara/Inditex.',
    keyHabit: 'Observação direta do comportamento de consumo nas lojas.',
    habits: [
      'Almoço diário com os funcionários no refeitório comum.',
      'Foco total em evitar grandes estoques (just-in-time).',
      'Investimento zero em publicidade tradicional; a vitrine é o anúncio.',
      'Centralização da logística na Espanha para controle total.',
      'Iteração de design baseada no feedback real de vendas do dia.'
    ]
  },
  {
    id: 38,
    name: 'Sam Walton',
    archetype: 'O Titã da Eficiência de Massa',
    category: 'Varejo',
    coreIdea: 'Liderança em Custos e Escala Humana',
    strategicProtocol: 'Transferência de economia para o cliente. Walton percebeu que a escala logística permite esmagar preços e, ao fazer isso, você domina o volume do mercado. O lucro vem do giro, não da margem alta unitária.',
    neuralInstallation: 'Seja um falcão nos custos para poder ser uma pomba nos preços. Cada centavo que você economiza na operação é uma arma para ganhar o cliente.',
    marketImpact: 'Transformação do varejo americano e criação do maior empregador privado do mundo (Walmart).',
    keyHabit: 'Visitas frequentes a concorrentes com gravador na mão.',
    habits: [
      'Aprender algo novo com cada funcionário de loja visitado.',
      'Manutenção de um estilo de vida frugal para dar o exemplo.',
      'Foco em cidades pequenas onde a competição era inexistente.',
      'Uso de tecnologia de satélite (nos anos 80) para gerir estoque.',
      'Reuniões de sábado de manhã para alinhar toda a liderança.'
    ]
  },
  {
    id: 39,
    name: 'Ray Kroc',
    archetype: 'O Mestre da Repetibilidade',
    category: 'Pioneiros',
    coreIdea: 'Sistematização de Processos e Franquia Imobiliária',
    strategicProtocol: 'O McDonald\'s não vende hambúrgueres; ele vende um sistema de replicação impecável. Kroc transformou a cozinha em uma linha de montagem industrial e a empresa em uma potência imobiliária que controla o terreno de seus franqueados.',
    neuralInstallation: 'Se você não pode descrever o seu negócio como um sistema repetível por qualquer pessoa, você não tem uma empresa, você tem um emprego de luxo.',
    marketImpact: 'Nascimento da indústria de fast-food global e do modelo de franquia moderna.',
    keyHabit: 'Limpeza obsessiva do estacionamento das lojas.',
    habits: [
      'Padronização de cada movimento do chapeiro via manual.',
      'Foco em parcerias de longo prazo com fornecedores de confiança.',
      'Atenção aos detalhes que o cliente percebe subconscientemente.',
      'Seleção rigorosa de franqueados com mentalidade operacional.',
      'Aposta no treinamento massivo via Hamburger University.'
    ]
  },
  {
    id: 40,
    name: 'Walt Disney',
    archetype: 'O Engenheiro de Sonhos',
    category: 'Pioneiros',
    coreIdea: 'Imagineering e Storytelling Multi-Canal',
    strategicProtocol: 'O filme é apenas o início. Disney criou um ecossistema onde a narrativa flui das telas para os parques, para os produtos e para as casas, capturando o valor emocional em cada ponto de contato.',
    neuralInstallation: 'O impossível é apenas uma questão de engenharia e persistência. Se você pode sonhar o sistema, você pode construir a máquina que o torna real.',
    marketImpact: 'Criação da maior potência de entretenimento familiar do mundo e redefinição da experiência turística.',
    keyHabit: 'Storyboarding visual para cada ideia complexa.',
    habits: [
      'Uso de três salas: Sala do Sonhador, do Realista e do Crítico.',
      'Obsessão pela limpeza e "showmanship" nos parques.',
      'Inovação tecnológica constante (som, cor, animação).',
      'Controle absoluto da propriedade intelectual (IP).',
      'Caminhadas anônimas pelos parques para ver a experiência do cliente.'
    ]
  },
  {
    id: 41,
    name: 'Thomas Edison',
    archetype: 'O Industrial da Inovação',
    category: 'Pioneiros',
    coreIdea: 'Pesquisa e Desenvolvimento Sistematizados',
    strategicProtocol: 'A invenção como processo industrial. Edison criou o primeiro laboratório de pesquisa moderno (Menlo Park), transformando a "inspiração" em uma linha de produção de patentes e produtos comercializáveis.',
    neuralInstallation: 'O gênio é 1% inspiração e 99% transpiração. O fracasso não é um erro, é apenas uma coleta de dados sobre o que não funciona. Itere até o sucesso.',
    marketImpact: 'Eletrificação das cidades e nascimento da indústria fonográfica e cinematográfica.',
    keyHabit: 'Trabalho em ciclos de 20 horas.',
    habits: [
      'Documentação exaustiva de cada experimento fracassado.',
      'Sono polifásico: cochilos curtos para manter a mente ativa.',
      'Foco apenas em invenções que possuíam utilidade comercial.',
      'Construção de ecossistemas (lâmpada + rede elétrica).',
      'Contratação de especialistas multidisciplinares para o lab.'
    ]
  },
  {
    id: 42,
    name: 'Andrew Carnegie',
    archetype: 'O Titã da Eficiência de Custo',
    category: 'Pioneiros',
    coreIdea: 'Produção em Escala e Substituição de Capital',
    strategicProtocol: 'Redução drástica do custo unitário através da tecnologia. Carnegie foi o primeiro a adotar o processo Bessemer de aço, esmagando competidores através da eficiência industrial e integração vertical total.',
    neuralInstallation: 'Assista os centavos e os dólares cuidarão de si mesmos. No aço ou no software, quem tem o menor custo de produção dita as regras do mercado.',
    marketImpact: 'Construção da base de aço das cidades modernas e ferrovias americanas.',
    keyHabit: 'Foco total em uma única tarefa por vez.',
    habits: [
      'Cerque-se de pessoas mais inteligentes que você.',
      'Investimento maciço na tecnologia mais moderna disponível.',
      'Atenção obsessiva aos custos de transporte e logística.',
      'Filantropia estratégica para perpetuar o nome e a visão.',
      'Manutenção de uma rotina de escrita e correspondência intelectual.'
    ]
  },
  {
    id: 43,
    name: 'J.P. Morgan',
    archetype: 'O Arquiteto do Capital',
    category: 'Pioneiros',
    coreIdea: 'Consolidação e Ordem Industrial',
    strategicProtocol: 'Eliminação da competição destrutiva através da fusão. Morgan "morganizou" indústrias caóticas (ferrovias, aço) para criar monopólios estáveis e eficientes que garantiam o retorno do capital investido.',
    neuralInstallation: 'O capital deve servir à ordem. A estabilidade de mercado é mais lucrativa do que a guerra de preços. Organize o caos para extrair valor.',
    marketImpact: 'Criação da primeira empresa de um bilhão de dólares (US Steel) e estabilização do sistema financeiro americano.',
    keyHabit: 'Análise fria de balanços antes de qualquer palavra.',
    habits: [
      'Reputação como ativo principal: "O caráter vem antes do ouro".',
      'Liderança através da presença física em momentos de crise.',
      'Visão macro das indústrias em vez de foco micro operacional.',
      'Uso de parcerias de confiança para expandir o alcance do capital.',
      'Isolamento tático para reflexão profunda sobre riscos sistêmicos.'
    ]
  },
  {
    id: 44,
    name: 'Coco Chanel',
    archetype: 'A Disruptora Estética',
    category: 'Pioneiros',
    coreIdea: 'Libertação pelo Design e Branding Pessoal',
    strategicProtocol: 'Simplificação radical do luxo. Chanel removeu o supérfluo para permitir o movimento e a funcionalidade, transformando o guarda-roupa feminino em um símbolo de independência e elegância moderna.',
    neuralInstallation: 'Para ser insubstituível, você deve ser sempre diferente. A simplicidade não é pobreza, é a sofisticação máxima alcançada através da remoção do ruído.',
    marketImpact: 'Redefinição do mercado de luxo e criação da marca de moda mais icônica do mundo.',
    keyHabit: 'Atenção obsessiva ao corte e caimento.',
    habits: [
      'Dizer "Não" ao que é apenas moda passageira.',
      'Uso estratégico de fragrâncias para ancorar a marca (Chanel Nº 5).',
      'Manutenção da soberania sobre o próprio nome e criações.',
      'Observação da rua para inspirar o luxo do atelier.',
      'Trabalho manual constante para manter a conexão com a técnica.'
    ]
  },
  {
    id: 45,
    name: 'Richard Branson',
    archetype: 'O Aventureiro da Marca',
    category: 'Cultura',
    coreIdea: 'Diferenciação via Experiência e Foco no Funcionário',
    strategicProtocol: 'Entrar em mercados estagnados (música, aviação) e mudar as regras através de diversão, audácia e foco total na felicidade de quem entrega o serviço. A marca Virgin é o selo de qualidade emocional.',
    neuralInstallation: 'Clientes não vêm em primeiro lugar. Funcionários vêm em primeiro lugar. Se você cuidar do seu time, eles cuidarão dos seus clientes e os lucros virão naturalmente.',
    marketImpact: 'Disrupção de múltiplos setores e criação de um dos maiores grupos empresariais diversificados do mundo.',
    keyHabit: 'Anotar cada reclamação de cliente em cadernos físicos.',
    habits: [
      'Delegar responsabilidade para empoderar lideranças locais.',
      'Uso de marketing de guerrilha e recordes mundiais para branding.',
      'Dizer "Sim" para oportunidades e descobrir como fazer depois.',
      'Manutenção de uma cultura de informalidade e acesso direto.',
      'Foco em resolver dores óbvias que as grandes empresas ignoram.'
    ]
  },
  {
    id: 46,
    name: 'Jay-Z (Shawn Carter)',
    archetype: 'O Alquimista da Marca Pessoal',
    category: 'Cultura',
    coreIdea: 'Business-Man como Ecossistema e Verticalização de Influência',
    strategicProtocol: 'Transformar talento em autoridade. Jay-Z não apenas faz rap; ele é o dono da marca de champagne, da agência de talentos e da plataforma de streaming, capturando o valor total da cultura que ele mesmo cria.',
    neuralInstallation: 'Eu não sou um empresário; eu sou o próprio negócio. Cada movimento seu deve fortalecer sua marca pessoal, que é o guarda-chuva de todos os seus ativos.',
    marketImpact: 'Pioneirismo no hip-hop como plataforma para construção de impérios multibilionários.',
    keyHabit: 'Parcerias estratégicas onde ele detém o equity.',
    habits: [
      'Paciência estratégica: não entrar em negócios apenas por dinheiro.',
      'Curadoria extrema de quem tem acesso ao seu círculo íntimo.',
      'Uso de storytelling lírico para elevar o valor percebido da marca.',
      'Verticalização total: ser dono da produção, distribuição e venda.',
      'Monitoramento constante da cultura de rua para prever tendências.'
    ]
  },
  {
    id: 47,
    name: 'Rihanna (Robyn Fenty)',
    archetype: 'A Disruptora da Inclusão',
    category: 'Varejo',
    coreIdea: 'Inclusividade como Estratégia de Diferenciação',
    strategicProtocol: 'Atender mercados ignorados pela arrogância do luxo tradicional. Ao lançar 40 tons de base, Rihanna não apenas vendeu maquiagem; ela validou a existência de bilhões de consumidores, gerando uma lealdade imbatível.',
    neuralInstallation: 'Veja onde os tradicionais estão sendo preguiçosos ou preconceituosos. Ali reside o mercado mais lucrativo e fiel do futuro.',
    marketImpact: 'Redefinição total das indústrias de beleza e lingerie através do "Efeito Fenty".',
    keyHabit: 'Uso estratégico de mídias sociais para feedback direto.',
    habits: [
      'Controle criativo total sobre cada detalhe do produto.',
      'Diferenciação via "Inclusão Radical" em todas as campanhas.',
      'Uso da própria imagem como prova de conceito e estilo.',
      'Lançamentos "drop" para gerar escassez e urgência.',
      'Expansão lateral para categorias complementares (pele, corpo).'
    ]
  },
  {
    id: 48,
    name: 'Reed Hastings',
    archetype: 'O Estrategista de Algoritmo',
    category: 'Nova Economia',
    coreIdea: 'Liberdade e Densidade de Talento',
    strategicProtocol: 'Elimine a burocracia e pague o topo do mercado. A Netflix não gere pessoas; ela gere contexto. Ao ter os melhores engenheiros e criativos, a empresa pode pivotar e inovar mais rápido que qualquer canal de TV.',
    neuralInstallation: 'Cancele a burocracia. Se você tem os melhores talentos, dê a eles contexto, não controle. O excesso de processos é o que as empresas usam para gerir pessoas medíocres.',
    marketImpact: 'Destruição do varejo físico de vídeo e liderança absoluta na era do streaming global.',
    keyHabit: 'Questionar constantemente se a empresa opera no "Day 1".',
    habits: [
      'Incentivo à verdade radical e feedback transparente imediato.',
      'Eliminação de políticas de férias e gastos formais (confiança).',
      'Pagar o maior salário do mercado para cada função crítica.',
      'Uso massivo de dados para decidir quais produções financiar.',
      'Cultura de "Keeper Test": você lutaria para manter esse funcionário?'
    ]
  },
  {
    id: 49,
    name: 'Sam Altman',
    archetype: 'O Arquiteto da Inteligência Artificial',
    category: 'Nova Economia',
    coreIdea: 'Escala de Inteligência e Aceleração Exponencial',
    strategicProtocol: 'Aceleração massiva do desenvolvimento de IA através de concentração de talentos e capital. Altman entende que quem controlar a Inteligência Geral Artificial (AGI) controlará a infraestrutura básica de toda a economia futura.',
    neuralInstallation: 'Estamos construindo a ferramenta mais poderosa da história. Posicione-se para ser a infraestrutura da inteligência absoluta. Se você controla o motor da mente, você controla o destino da matéria.',
    marketImpact: 'Aceleração do horizonte da Singularidade Tecnológica e redefinição do trabalho humano via OpenAI.',
    keyHabit: 'Otimização radical do tempo e foco em tecnologias de 20 anos.',
    habits: [
      'Manutenção de uma rede de contatos com os maiores gênios vivos.',
      'Leitura multidisciplinar para entender impactos sistêmicos da IA.',
      'Apostas ousadas em energia (fusão) para sustentar a computação.',
      'Escrita de ensaios curtos para clareza de pensamento estratégico.',
      'Uso de meditação para manter a calma em ambientes de hipercrescimento.'
    ]
  },
  {
    id: 50,
    name: 'Satya Nadella',
    archetype: 'O Arquiteto da Empatia Corporativa',
    category: 'Tecnologia',
    coreIdea: 'Pivot Cultural de Produtos para Plataformas de Nuvem',
    strategicProtocol: 'Transformação da Microsoft de uma empresa fechada e agressiva para uma plataforma aberta e colaborativa. Nadella percebeu que a nuvem e a IA são os novos oceanos azuis e que a cooperação vence a competição cega.',
    neuralInstallation: 'Troque o "Sabe-Tudo" pelo "Aprende-Tudo". A agilidade mental da sua equipe é o limite real da sua empresa. A cultura come a estratégia no café da manhã.',
    marketImpact: 'Revitalização histórica da Microsoft, tornando-a novamente uma das empresas mais valiosas do mundo.',
    keyHabit: 'Leitura de poesia e filosofia para expandir o pensamento.',
    habits: [
      'Escuta ativa em todas as reuniões com engenheiros.',
      'Foco em parcerias improváveis (Linux, Apple, Google).',
      'Eliminação de silos internos para criar um "One Microsoft".',
      'Uso de empatia como ferramenta de design de produto.',
      'Monitoramento constante de métricas de uso em nuvem.'
    ]
  },
  {
    id: 51,
    name: 'Tim Cook',
    archetype: 'O Mestre da Cadeia de Suprimentos',
    category: 'Tecnologia',
    coreIdea: 'Eficiência Operacional Extrema e Margens de Hardware',
    strategicProtocol: 'Controle absoluto do fluxo físico mundial. Cook transformou a Apple em uma máquina de margem ao dominar a logística, garantindo que o estoque gire como se fosse perecível e que o design seja fabricado com perfeição em escala de milhões.',
    neuralInstallation: 'O inventário é o mal. Gire o estoque como se ele fosse derreter amanhã. A eficiência invisível na operação é o que paga os bilhões do design visível.',
    marketImpact: 'Transformação da Apple na primeira empresa de 3 trilhões de dólares através de execução impecável.',
    keyHabit: 'Início da jornada às 4h com análise de métricas operacionais.',
    habits: [
      'Vigilância microscópica sobre custos de componentes.',
      'Paciência estratégica em novos mercados (entrar tarde e melhor).',
      'Proteção ferrenha da privacidade como diferencial de marca.',
      'Gestão de fornecedores através de parcerias de longo prazo.',
      'Foco em serviços recorrentes para fidelizar o ecossistema.'
    ]
  },
  {
    id: 52,
    name: 'Michael Dell',
    archetype: 'O Logístico Direto',
    category: 'Tecnologia',
    coreIdea: 'Venda Direta ao Consumidor e Customização em Massa',
    strategicProtocol: 'Elimine o intermediário e o estoque. Dell revolucionou a indústria ao fabricar computadores apenas após o pedido, recebendo o dinheiro antes de comprar os componentes, garantindo um ciclo de caixa imbatível.',
    neuralInstallation: 'A eficiência operacional é a melhor defesa competitiva. Se você pode entregar mais rápido e mais barato eliminando o desperdício, você ganha o mercado.',
    marketImpact: 'Comoditização do hardware e redefinição da logística de computação corporativa.',
    keyHabit: 'Foco implacável em métricas de giro de estoque.',
    habits: [
      'Ouvir o cliente diretamente sem filtros de distribuidores.',
      'Reinvestimento em tecnologia de infraestrutura de dados.',
      'Paciência para recomprar a própria empresa e fechá-la para pivotar.',
      'Cultura de austeridade e foco em margens operacionais.',
      'Monitoramento em tempo real da cadeia de suprimentos global.'
    ]
  },
  {
    id: 53,
    name: 'Larry Ellison',
    archetype: 'O Guerreiro do Banco de Dados',
    category: 'Tecnologia',
    coreIdea: 'Dominância de Dados Corporativos e Vendas Agressivas',
    strategicProtocol: 'Seja a infraestrutura crítica da empresa. Ellison construiu a Oracle para ser o cérebro onde as maiores corporações do mundo guardam seus dados, tornando a troca de fornecedor um risco operacional inaceitável (lock-in).',
    neuralInstallation: 'Quem controla os dados, controla a verdade da empresa. Torne-se tão essencial que o custo de sair do seu sistema seja maior que o lucro de ficar.',
    marketImpact: 'Criação da base tecnológica para a gestão empresarial moderna via bancos de dados relacionais.',
    keyHabit: 'Competitividade extrema em todas as áreas da vida.',
    habits: [
      'Contratação de vendedores agressivos com mentalidade de caça.',
      'Aquisição sistemática de competidores para expandir portfólio.',
      'Aposta precoce em tecnologias de nuvem e automação.',
      'Uso de marketing direto contra competidores (ex: SAP, IBM).',
      'Foco em contratos de longo prazo e suporte recorrente.'
    ]
  },
  {
    id: 54,
    name: 'Marc Benioff',
    archetype: 'O Evangelista do Cloud',
    category: 'Tecnologia',
    coreIdea: 'Software como Serviço (SaaS) e Propósito Social',
    strategicProtocol: 'Morte ao software tradicional. Benioff destruiu o modelo de instalação local ao vender assinaturas na nuvem, enquanto integrava o modelo 1-1-1 (1% tempo, 1% produto, 1% equity) para filantropia, criando uma marca com alma.',
    neuralInstallation: 'O negócio do negócio é melhorar o mundo. Lucro e propósito são o mesmo motor. Se você serve ao cliente e à sociedade, sua marca torna-se inabalável.',
    marketImpact: 'Pioneirismo total no modelo SaaS e transformação do CRM na ferramenta central de vendas mundial.',
    keyHabit: 'Prática diária de meditação e "Ohana" (Família).',
    habits: [
      'Incentivo à cultura de feedback honesto em todos os níveis.',
      'Uso de eventos massivos (Dreamforce) para criar comunidade.',
      'Foco em métricas de sucesso do cliente acima de vendas brutas.',
      'Aquisição de plataformas de colaboração (Slack) para o ecossistema.',
      'Advocacia política por causas sociais e ambientais.'
    ]
  },
  {
    id: 55,
    name: 'Jack Ma',
    archetype: 'O Conector Digital',
    category: 'Tecnologia',
    coreIdea: 'Ecossistema de Pequenos Negócios e Escala Chinesa',
    strategicProtocol: 'Criar a infraestrutura para que outros prosperem. Ma não construiu uma loja; ele construiu o mercado, o sistema de pagamento e a logística para que milhões de pequenos empreendedores pudessem vender para o mundo.',
    neuralInstallation: 'Se você ajudar as pessoas a ganharem dinheiro, você ficará rico como consequência. O ecossistema é sempre mais forte do que a empresa isolada.',
    marketImpact: 'Digitalização massiva do comércio na China e criação de uma das maiores potências de e-commerce do mundo (Alibaba).',
    keyHabit: 'Storytelling inspirador focado no longo prazo (102 anos).',
    habits: [
      'Contratação de pessoas com inteligência emocional e resiliência.',
      'Manutenção da mentalidade de "crocodilo no Rio Yangtzé" contra tubarões.',
      'Foco total na experiência do usuário de baixa renda e mobile.',
      'Criação de rituais de cultura fortes e lúdicos para os funcionários.',
      'Uso de parcerias com o governo para expansão de infraestrutura.'
    ]
  },
  {
    id: 56,
    name: 'Ray Dalio',
    archetype: 'O Engenheiro de Princípios',
    category: 'Finanças',
    coreIdea: 'Verdade Radical e Meritocracia de Ideias',
    strategicProtocol: 'A vida e os mercados como máquinas. Dalio sistematizou cada decisão em algoritmos e princípios, eliminando o ego e o viés emocional para permitir que as melhores ideias vençam, independentemente da hierarquia.',
    neuralInstallation: 'Dor + Reflexão = Progresso. Identifique o erro no seu sistema mental, documente o princípio para corrigi-lo e nunca mais repita o mesmo erro. O ego é o maior inimigo do seu lucro.',
    marketImpact: 'Criação do maior fundo hedge do mundo (Bridgewater) e sistematização da análise macroeconômica.',
    keyHabit: 'Meditação Transcendental diária.',
    habits: [
      'Gravação e transcrição de todas as reuniões internas.',
      'Uso de "Dots" (aplicativo de feedback em tempo real).',
      'Escrita constante de princípios para cada situação da vida.',
      'Diversificação radical de ativos para proteção contra o incerto.',
      'Estudo profundo da história para prever ciclos econômicos.'
    ]
  },
  {
    id: 57,
    name: 'George Soros',
    archetype: 'O Especulador Reflexivo',
    category: 'Finanças',
    coreIdea: 'Teoria da Reflexividade e Apostas Macro',
    strategicProtocol: 'Identifique quando o mercado está mentindo para si mesmo. Soros entende que as percepções dos investidores alteram a realidade econômica, criando bolhas que ele explora através de apostas massivas e assimétricas.',
    neuralInstallation: 'Não se trata de estar certo ou errado, mas de quanto dinheiro você ganha quando está certo e quanto perde quando está errado. Aproveite o caos gerado pela irracionalidade alheia.',
    marketImpact: 'Ficou famoso como "O Homem que Quebrou o Banco da Inglaterra" e definiu a macro-especulação moderna.',
    keyHabit: 'Atenção aos sinais físicos de estresse como alerta.',
    habits: [
      'Busca por falhas lógicas no consenso do mercado.',
      'Filantropia política para promover "Sociedades Abertas".',
      'Capacidade de mudar de opinião instantaneamente diante de novos dados.',
      'Uso de alavancagem apenas quando a assimetria é óbvia.',
      'Manutenção de um diário de teses de investimento detalhado.'
    ]
  },
  {
    id: 58,
    name: 'Charlie Munger',
    archetype: 'O Polímata Pragmático',
    category: 'Finanças',
    coreIdea: 'Treliça de Modelos Mentais e Inversão',
    strategicProtocol: 'Não tente ser brilhante; tente apenas não ser estúpido. Munger utiliza conceitos de física, biologia e psicologia para filtrar investimentos, focando em evitar erros fatais e em comprar negócios extraordinários a preços justos.',
    neuralInstallation: 'Inverta, sempre inverta. Quer saber como ter sucesso? Descubra como fracassar e evite esses caminhos obsessivamente. Domine as grandes ideias de todas as disciplinas.',
    marketImpact: 'Arquitetura intelectual por trás do sucesso da Berkshire Hathaway ao lado de Buffett.',
    keyHabit: 'Leitura constante e multitemática.',
    habits: [
      'Identificação de "Lollapalooza Effects" (vieses combinados).',
      'Paciência extrema: esperar anos por uma única oportunidade.',
      'Dizer a verdade de forma curta e ácida.',
      'Foco em ética e reputação acima de ganhos de curto prazo.',
      'Simplificação de problemas complexos em perguntas básicas.'
    ]
  },
  {
    id: 59,
    name: 'Peter Thiel',
    archetype: 'O Contrário Estratégico',
    category: 'Finanças',
    coreIdea: 'De Zero a Um e Monopólio Criativo',
    strategicProtocol: 'A competição é para perdedores. O objetivo de qualquer estratégia superior é ser um monopólio em um mercado que você mesmo criou. Busque segredos que ninguém mais conhece e construa o futuro a partir deles.',
    neuralInstallation: 'Qual verdade importante você conhece que quase ninguém concorda com você? Aí reside o seu potencial de lucro real e a sua vantagem competitiva inimitável.',
    marketImpact: 'Fundação do PayPal, Palantir e primeiro investidor do Facebook, definindo a cultura de risco do Vale do Silício.',
    keyHabit: 'Questionamento sistemático de consensos.',
    habits: [
      'Investimento apenas em fundadores com visões de longo prazo.',
      'Foco em tecnologia que substitui processos políticos ineficientes.',
      'Diferenciação radical: não faça o que todos estão fazendo.',
      'Manutenção de uma rede de talentos de elite (PayPal Mafia).',
      'Leitura de filosofia clássica para entender o comportamento das massas.'
    ]
  },
  {
    id: 60,
    name: 'Jorge Paulo Lemann',
    archetype: 'O Conquistador de Eficiência',
    category: 'LatAm',
    coreIdea: 'Sonho Grande e Meritocracia Radical',
    strategicProtocol: 'Custo é como unha: tem que cortar sempre. Lemann compra empresas maduras, corta gorduras ineficientes e instala uma cultura de donos e resultados, onde os melhores talentos são recompensados com equity.',
    neuralInstallation: 'Ter um sonho grande dá o mesmo trabalho que ter um sonho pequeno. Mire no topo, contrate pessoas melhores que você e dê a elas uma fatia do negócio.',
    marketImpact: 'Criação do maior império de cervejas do mundo (AB InBev) e redefinição da gestão corporativa brasileira.',
    keyHabit: 'Foco obsessivo em recrutamento e cultura.',
    habits: [
      'Manutenção de um estilo de vida simples e focado no trabalho.',
      'Corte sistemático de custos não essenciais anualmente.',
      'Parceria de longo prazo com sócios de confiança total.',
      'Reinvestimento contínuo de lucros em novas aquisições.',
      'Uso de metas agressivas para esticar a capacidade do time.'
    ]
  },
  {
    id: 61,
    name: 'Flávio Augusto da Silva',
    archetype: 'O Visionário do Protagonismo',
    category: 'LatAm',
    coreIdea: 'Equity e Mentalidade de Dono',
    strategicProtocol: 'Venda a visão, construa o ativo. Flávio foca em negócios que geram valor recorrente e equity, utilizando a força de vendas como o motor principal de crescimento e expansão internacional.',
    neuralInstallation: 'Saia do fluxo comum. Você não fica rico com salário, fica rico com ativos. Se você não sabe vender sua ideia, você não tem um negócio, tem um desejo.',
    marketImpact: 'Popularização do empreendedorismo de alto impacto e criação da WiseUp e do Orlando City.',
    keyHabit: 'Produção constante de conteúdo educativo.',
    habits: [
      'Foco total em vendas como o oxigênio do negócio.',
      'Capacidade de enxergar oportunidades em mercados saturados.',
      'Execução rápida: do rascunho à prática em tempo recorde.',
      'Manutenção da soberania sobre a própria imagem e marca.',
      'Uso do esporte e educação como veículos de transformação.'
    ]
  },
  {
    id: 62,
    name: 'David Vélez',
    archetype: 'O Desafiador de Sistemas',
    category: 'LatAm',
    coreIdea: 'Simplificação de Fricção Financeira',
    strategicProtocol: 'Ataque onde o incumbente é arrogante e ineficiente. Vélez usou a tecnologia para remover as taxas e a burocracia dos grandes bancos, focando em um design centrado no usuário e em um suporte humanizado.',
    neuralInstallation: 'O foco no cliente é a única proteção real contra os gigantes. Se o sistema é odiado, a simplicidade e a transparência são as suas maiores armas competitivas.',
    marketImpact: 'Bancarização digital massiva na América Latina e criação do Nubank, o maior banco digital do mundo.',
    keyHabit: 'Foco total no design e utilidade do produto.',
    habits: [
      'Contratação de talentos de nível global para o Brasil.',
      'Obsessão por métricas de satisfação do cliente (NPS).',
      'Cultura de transparência radical com investidores e time.',
      'Paciência para queimar caixa em busca de market share.',
      'Uso de tecnologia de dados para prevenção de riscos de crédito.'
    ]
  },
  {
    id: 63,
    name: 'Cristina Junqueira',
    archetype: 'A Arquiteta da Experiência',
    category: 'LatAm',
    coreIdea: 'Empatia Escalonável e Suporte como Marketing',
    strategicProtocol: 'Transformar o suporte ao cliente em uma ferramenta de fidelização imbatível. Cristina entende que em um setor odiado como o bancário, tratar o cliente como humano é o maior diferencial disruptivo possível.',
    neuralInstallation: 'Resolva a dor real do seu cliente com empatia. Se você ganha a confiança dele no momento da crise, você tem um cliente para o resto da vida.',
    marketImpact: 'Redefinição do atendimento ao cliente no setor financeiro brasileiro e co-fundação do Nubank.',
    keyHabit: 'Proximidade constante com o feedback dos usuários.',
    habits: [
      'Advocacia interna pela simplicidade do aplicativo.',
      'Gestão focada em diversidade e inclusão como motor de inovação.',
      'Uso de branding emocional para conectar a marca ao usuário.',
      'Monitoramento diário de métricas de suporte e NPS.',
      'Presença ativa em redes sociais para humanizar a instituição.'
    ]
  },
  {
    id: 64,
    name: 'Masayoshi Son',
    archetype: 'O Visionário da Singularidade',
    category: 'Finanças',
    coreIdea: 'Aposta Massiva em Inteligência Artificial e Conectividade',
    strategicProtocol: 'Invista no futuro com um horizonte de 300 anos. Son utiliza o SoftBank Vision Fund para injetar capital massivo em empresas que dominam ecossistemas tecnológicos, visando o momento da Singularidade.',
    neuralInstallation: 'Não tenha medo da escala. Se a visão é grande o suficiente, o capital virá. Aposte nos fundadores que querem mudar o curso da humanidade.',
    marketImpact: 'Criação do maior fundo de investimento tecnológico do mundo e aceleração do ecossistema de startups global.',
    keyHabit: 'Visualização de cenários futuros de longuíssimo prazo.',
    habits: [
      'Tomada de decisão baseada em intuição aliada a dados massivos.',
      'Capacidade de perdoar o fracasso se a ambição for alta.',
      'Foco em empresas que possuem efeito de rede óbvio.',
      'Uso de parcerias com soberanias nacionais (ex: Arábia Saudita).',
      'Monitoramento constante da convergência tecnológica.'
    ]
  },
  {
    id: 65,
    name: 'Larry Ellison',
    archetype: 'O Samurai do Software',
    category: 'Tecnologia',
    coreIdea: 'Engenharia de Performance e Vendas de Elite',
    strategicProtocol: 'Seja o mais rápido e o mais confiável. Ellison construiu a Oracle focando em performance bruta de banco de dados, sabendo que no mundo corporativo, a perda de dados é a morte. Ele utiliza vendas agressivas para dominar o território.',
    neuralInstallation: 'A excelência técnica é a sua melhor armadura, mas a força de vendas é a sua melhor espada. Vença através da superioridade do produto e da agressividade comercial.',
    marketImpact: 'Dominância dos bancos de dados nas maiores empresas do mundo e pioneirismo em sistemas empresariais.',
    keyHabit: 'Treinamento físico rigoroso e competividade náutica.',
    habits: [
      'Foco em segurança de dados como prioridade absoluta.',
      'Aquisição de empresas estratégicas para fechar o ecossistema.',
      'Uso de benchmarking público para humilhar concorrentes.',
      'Investimento massivo em infraestrutura de hardware própria.',
      'Manutenção de uma cultura de alta performance e meritocracia.'
    ]
  },
  {
    id: 66,
    name: 'James Dyson',
    archetype: 'O Engenheiro da Persistência',
    category: 'Tecnologia',
    coreIdea: 'Inovação via Tentativa e Erro (5.127 Protótipos)',
    strategicProtocol: 'Resolva o que os outros aceitam como "normal". Dyson focou na ineficiência do saco de aspirador e iterou milhares de vezes até criar a tecnologia ciclônica, provando que o design funcional vence a marca tradicional.',
    neuralInstallation: 'O fracasso é o combustível da invenção. Não pare no protótipo 1.000 se a dor do cliente ainda existe. A perfeição técnica exige uma teimosia quase irracional.',
    marketImpact: 'Revolução nos eletrodomésticos e criação de uma marca sinônimo de engenharia de ponta.',
    keyHabit: 'Trabalho manual no chão de fábrica.',
    habits: [
      'Obsessão por design funcional e estética industrial.',
      'Proteção ferrenha de patentes globais.',
      'Investimento total de lucros em novos centros de pesquisa.',
      'Contratação de jovens engenheiros sem "vícios" de mercado.',
      'Monitoramento microscópico do fluxo de ar e eficiência energética.'
    ]
  },
  {
    id: 67,
    name: 'Michael Bloomberg',
    archetype: 'O Estrategista dos Dados',
    category: 'Tecnologia',
    coreIdea: 'Informação como Infraestrutura Decisória',
    strategicProtocol: 'Controle o fluxo de dados que os tomadores de decisão usam. O Terminal Bloomberg tornou-se indispensável porque oferece velocidade e profundidade que ninguém mais consegue replicar, criando um monopólio de utilidade.',
    neuralInstallation: 'Seja a ferramenta pela qual o dinheiro flui. Quem detém os dados em tempo real, detém o tempo e a confiança dos decisores do mundo.',
    marketImpact: 'Transformação do mercado financeiro global e criação de um império de mídia e dados imbatível.',
    keyHabit: 'Foco total em dados quantificáveis.',
    habits: [
      'Cultura de transparência e escritórios em conceito aberto.',
      'Obsessão por atendimento ao cliente 24/7.',
      'Uso de filantropia para resolver problemas baseados em evidências.',
      'Manutenção da neutralidade política na marca de dados.',
      'Reinvestimento contínuo em rede de dados e hardware proprietário.'
    ]
  },
  {
    id: 68,
    name: 'Ralph Lauren',
    archetype: 'O Arquiteto do Estilo de Vida',
    category: 'Varejo',
    coreIdea: 'Storytelling Aspiracional e Branding de Sonho',
    strategicProtocol: 'Venda o sonho, não o tecido. Lauren não criou roupas; ele criou um estilo de vida (Polo) que evoca aristocracia, esporte e tradição, permitindo que o consumidor compre uma identidade através da marca.',
    neuralInstallation: 'O design é o veículo, mas a aspiração é o combustível. Se você vende uma visão de quem o cliente quer ser, o preço torna-se secundário à conexão emocional.',
    marketImpact: 'Criação da moda americana clássica e redefinição do lifestyle branding global.',
    keyHabit: 'Curadoria visual constante de ambientes e imagens.',
    habits: [
      'Atenção obsessiva à narrativa de cada coleção.',
      'Verticalização da marca de acessórios a decoração.',
      'Uso da própria vida como o benchmark do estilo da marca.',
      'Proteção da consistência visual ao longo de décadas.',
      'Foco em lojas próprias como "templos" da marca.'
    ]
  },
  {
    id: 69,
    name: 'Giorgio Armani',
    archetype: 'O Mestre da Elegância Silenciosa',
    category: 'Varejo',
    coreIdea: 'Minimalismo e Desconstrução do Formalismo',
    strategicProtocol: 'Remova a rigidez. Armani revolucionou a moda ao desconstruir o terno, criando uma silhueta fluida e confortável que se tornou o padrão do luxo moderno e discreto.',
    neuralInstallation: 'O luxo real é confortável e discreto. Se você simplifica a vida do seu cliente através de um design impecável, você se torna o padrão de bom gosto dele.',
    marketImpact: 'Definição do estilo "Made in Italy" e criação de um império de luxo independente.',
    keyHabit: 'Controle total sobre cada detalhe administrativo e criativo.',
    habits: [
      'Foco em tons neutros e tecidos de alta qualidade.',
      'Expansão para hotéis e design de interiores para totalizar a marca.',
      'Manutenção da independência financeira total.',
      'Uso estratégico de celebridades em tapetes vermelhos.',
      'Vigilância constante sobre a imagem de marca em todo o mundo.'
    ]
  },
  {
    id: 70,
    name: 'Miuccia Prada',
    archetype: 'A Intelectual da Moda',
    category: 'Varejo',
    coreIdea: 'Luxo Subversivo e Arte como Vanguarda',
    strategicProtocol: 'Desafie o conceito de beleza. Prada utiliza a moda como uma plataforma intelectual, misturando "o feio e o chique" para atrair um consumidor culto que busca se diferenciar do luxo óbvio.',
    neuralInstallation: 'A inteligência é o novo luxo. Se você desafia o seu cliente intelectualmente, você cria uma barreira de marca que os concorrentes puramente estéticos não podem cruzar.',
    marketImpact: 'Transformação da Prada de uma loja de couro em um farol cultural e de vanguarda mundial.',
    keyHabit: 'Leitura profunda de arte contemporânea e filosofia.',
    habits: [
      'Inovação via materiais não convencionais (ex: nylon no luxo).',
      'Uso da Fundação Prada como veículo de autoridade cultural.',
      'Colaboração com arquitetos de elite para design de lojas.',
      'Manutenção de um mistério em torno da própria personalidade.',
      'Capacidade de prever mudanças sociais antes de virarem moda.'
    ]
  },
  {
    id: 71,
    name: 'Tadashi Yanai',
    archetype: 'O Industrial do Básico',
    category: 'Varejo',
    coreIdea: 'Tecnologia de Tecido e Eficiência Japonesa',
    strategicProtocol: 'Roupas como ferramentas, não como moda. Yanai construiu a Uniqlo focando em tecnologia têxtil (Heattech, Airism) e design básico de alta qualidade, servindo a todos, independentemente de tendências passageiras.',
    neuralInstallation: 'A utilidade é o maior diferencial competitivo no longo prazo. Se o seu produto resolve uma necessidade básica com superioridade técnica, o mercado é o mundo inteiro.',
    marketImpact: 'Criação do império Fast Retailing e redefinição do vestuário funcional global.',
    keyHabit: 'Leitura e aplicação rigorosa de manuais de gestão.',
    habits: [
      'Cultura de limpeza e organização impecável nas lojas.',
      'Foco em poucas SKUs com altíssimo volume de produção.',
      'Investimento massivo em inovação de fibra têxtil.',
      'Gestão baseada em princípios de eficiência e cortesia.',
      'Ambição de ser o número 1 do mundo através de disciplina.'
    ]
  },
  {
    id: 72,
    name: 'Dietrich Mateschitz',
    archetype: 'O Mestre do Marketing de Conteúdo',
    category: 'Varejo',
    coreIdea: 'Criação de Categoria e Propriedade de Mídia',
    strategicProtocol: 'Não venda a bebida, venda a adrenalina. Mateschitz não criou uma fábrica; ele criou uma marca de energia (Red Bull) e investiu em esportes radicais para ser o dono do conteúdo, tornando o produto físico apenas o subproduto do estilo de vida.',
    neuralInstallation: 'Seja o dono da plataforma de conteúdo do seu nicho. Se você controla a emoção associada à atividade, a venda do produto torna-se uma consequência orgânica.',
    marketImpact: 'Criação da categoria de bebidas energéticas e revolução no marketing esportivo mundial.',
    keyHabit: 'Busca constante por atletas e eventos extremos.',
    habits: [
      'Investimento agressivo em equipes de Fórmula 1 e futebol.',
      'Manutenção de um mistério pessoal total.',
      'Controle absoluto sobre a qualidade e tom da marca.',
      'Uso de amostragem massiva em eventos universitários.',
      'Visão de marca como uma empresa de mídia que vende latas.'
    ]
  },
  {
    id: 73,
    name: 'Sara Blakely',
    archetype: 'A Disruptora da Solução Prática',
    category: 'Varejo',
    coreIdea: 'Inovação via Experiência Própria e Storytelling Real',
    strategicProtocol: 'Resolva a sua própria dor. Blakely criou a Spanx cortando o pé de uma meia-calça para se sentir melhor em uma roupa, e utilizou a vulnerabilidade e o humor para vender uma solução que a indústria masculina ignorava.',
    neuralInstallation: 'Sua maior vantagem competitiva é a sua própria experiência como consumidor. Se você resolve o seu problema de forma genial, existem milhões de pessoas com a mesma dor esperando por você.',
    marketImpact: 'Criação de uma nova categoria de vestuário e transformação em bilionária através de capital próprio (bootstrapping).',
    keyHabit: 'Visualização positiva e humor diário.',
    habits: [
      'Dizer "Sim" para o que te assusta comercialmente.',
      'Manutenção de 100% do equity por décadas.',
      'Uso de falhas passadas como lições em reuniões de time.',
      'Foco total no feedback direto das consumidoras.',
      'Criação de embalagens disruptivas para o varejo tradicional.'
    ]
  },
  {
    id: 74,
    name: 'Melanie Perkins',
    archetype: 'A Democratizadora do Design',
    category: 'Nova Economia',
    coreIdea: 'Simplicidade Radical e Freemium Global',
    strategicProtocol: 'Remova a barreira técnica. O Canva permitiu que qualquer pessoa criasse designs profissionais sem precisar dominar softwares complexos, capturando o mercado através de uma plataforma web intuitiva e colaborativa.',
    neuralInstallation: 'A tecnologia deve ser invisível. O seu produto só é bem-sucedido se ele empodera o usuário a fazer o que antes era reservado aos especialistas.',
    marketImpact: 'Redefinição da criação visual mundial e criação de uma das startups mais valiosas da Austrália.',
    keyHabit: 'Foco em metas gigantes (Crazy Big Goals).',
    habits: [
      'Obsessão por simplificar fluxos de usuário.',
      'Cultura de celebração e feedback em tempo real.',
      'Uso de feedback da comunidade para novos recursos.',
      'Manutenção de uma visão de 10 anos para o ecossistema.',
      'Investimento em bibliotecas de ativos gratuitos para atrair tráfego.'
    ]
  },
  {
    id: 75,
    name: 'Eric Yuan',
    archetype: 'O Estrategista da Fricção Zero',
    category: 'Nova Economia',
    coreIdea: 'Felicidade do Usuário e Estabilidade Técnica',
    strategicProtocol: 'Funciona. Simplesmente funciona. Yuan focou obsessivamente na latência e na facilidade de conexão (1 clique) do Zoom, sabendo que em vídeo, a estabilidade é a única métrica que importa para a confiança corporativa.',
    neuralInstallation: 'A felicidade do cliente nasce da ausência de atrito. Se o seu produto remove o estresse de uma tarefa diária, você se torna o padrão de produtividade dele.',
    marketImpact: 'Dominância das comunicações em vídeo e transformação da forma como o mundo trabalha remotamente.',
    keyHabit: 'Ler cada feedback negativo de cliente.',
    habits: [
      'Cultura de "Entregar Felicidade" como métrica interna.',
      'Foco total na engenharia de rede e redução de dados.',
      'Transparência radical em crises de segurança.',
      'Manutenção de uma estrutura de custos enxuta.',
      'Uso do próprio produto como laboratório de testes constante.'
    ]
  },
  {
    id: 76,
    name: 'Pavel Durov',
    archetype: 'O Arquiteto da Privacidade',
    category: 'Nova Economia',
    coreIdea: 'Segurança de Dados e Independência Política',
    strategicProtocol: 'Construa uma fortaleza. Durov criou o Telegram focando em criptografia e liberdade de expressão, posicionando o serviço como o refúgio contra a vigilância estatal e o monopólio das big techs.',
    neuralInstallation: 'A privacidade é o ativo mais valioso do século XXI. Se você protege a soberania do dado do seu usuário, você ganha a lealdade dele para além da funcionalidade.',
    marketImpact: 'Criação de uma rede de comunicação global resiliente a censura e governança descentralizada.',
    keyHabit: 'Estilo de vida minimalista e nômade digital.',
    habits: [
      'Recusa em aceitar investimentos que comprometam a visão.',
      'Foco em velocidade de entrega de novos recursos técnicos.',
      'Manutenção de uma equipe de engenheiros de elite ultra-pequena.',
      'Uso de desafios públicos para testar a segurança do sistema.',
      'Desprendimento total de posses físicas para manter a liberdade.'
    ]
  },
  {
    id: 77,
    name: 'Gabe Newell',
    archetype: 'O Estrategista de Plataforma Digital',
    category: 'Cultura',
    coreIdea: 'Ecossistema de Jogos e Distribuição Digital',
    strategicProtocol: 'Resolva a pirataria através do serviço. O Steam tornou-se o monopólio da distribuição de jogos ao oferecer uma experiência de compra e comunidade tão superior que pagar tornou-se mais vantajoso que baixar ilegalmente.',
    neuralInstallation: 'O valor está na plataforma, não apenas no conteúdo. Se você controla a loja e a biblioteca do seu usuário, você detém o ecossistema inteiro.',
    marketImpact: 'Transformação da indústria de jogos para o modelo digital e criação da Valve.',
    keyHabit: 'Estrutura organizacional horizontal (sem chefes).',
    habits: [
      'Foco em métricas de satisfação da comunidade.',
      'Paciência extrema para lançamentos: "Só quando estiver pronto".',
      'Uso de dados de vendas para promoções agressivas.',
      'Incentivo à criação de mods e conteúdo por usuários.',
      'Monitoramento constante da latência de servidores globais.'
    ]
  },
  {
    id: 78,
    name: 'James Cameron',
    archetype: 'O Engenheiro do Épico',
    category: 'Cultura',
    coreIdea: 'Inovação Tecnológica para Storytelling de Escala',
    strategicProtocol: 'Se a tecnologia não existe, invente-a. Cameron não apenas dirige filmes; ele desenvolve novos sistemas de câmera e captura de movimento para permitir visões que o cinema tradicional considerava impossíveis.',
    neuralInstallation: 'A escala exige inovação técnica. Se você quer entregar uma experiência sem precedentes, você deve ser o dono das ferramentas que a produzem.',
    marketImpact: 'Criação dos maiores blockbusters da história e revolução nos efeitos visuais mundiais.',
    keyHabit: 'Exploração física extrema para inspiração.',
    habits: [
      'Obsessão por detalhes técnicos de física e engenharia.',
      'Gestão de equipe com rigor militar e foco na perfeição.',
      'Uso de tecnologia subaquática para expandir fronteiras.',
      'Escrita e roteirização focadas em arquétipos universais.',
      'Paciência de décadas para esperar a tecnologia maturar.'
    ]
  },
  {
    id: 79,
    name: 'Anna Wintour',
    archetype: 'A Guardiã do Gosto',
    category: 'Cultura',
    coreIdea: 'Curadoria de Autoridade e Poder de Mídia',
    strategicProtocol: 'Defina o que é relevante. Através da Vogue, Wintour exerce um poder de "gatekeeper" que decide quem sobe e quem desce no mundo da moda, transformando a curadoria em uma arma política e comercial.',
    neuralInstallation: 'A autoridade nasce da consistência e da coragem de decidir o que é bom. Se você dita o padrão de excelência, o mercado inteiro gravita em torno da sua opinião.',
    marketImpact: 'Consolidação da indústria da moda moderna e influência absoluta sobre o consumo de luxo.',
    keyHabit: 'Rotina matinal rigorosa e pontualidade extrema.',
    habits: [
      'Decisões rápidas baseadas em instinto treinado por décadas.',
      'Manutenção de uma imagem de marca pessoal inabalável.',
      'Uso estratégico de eventos (Met Gala) para networking de elite.',
      'Foco total na qualidade visual e narrativa da revista.',
      'Habilidade de conectar talentos criativos com capital financeiro.'
    ]
  },
  {
    id: 80,
    name: 'Martha Stewart',
    archetype: 'A Mestra da Domesticidade Industrial',
    category: 'Varejo',
    coreIdea: 'Branding de Lifestyle e Autoridade de Categoria',
    strategicProtocol: 'Transforme o cotidiano em uma marca aspiracional. Martha sistematizou a arte de viver bem, criando um império onde a sua marca pessoal é o selo de aprovação para tudo, da culinária à decoração.',
    neuralInstallation: 'A perfeição nos detalhes gera confiança. Se você ensina o seu cliente a viver melhor, você se torna uma parte essencial da identidade dele.',
    marketImpact: 'Criação da categoria de lifestyle moderno e prova de resiliência de marca pessoal após crises.',
    keyHabit: 'Atenção microscópica a cada detalhe da casa.',
    habits: [
      'Produção massiva de conteúdo educativo multicanal.',
      'Verticalização de produtos licenciados em grandes varejistas.',
      'Manutenção de uma rotina de trabalho incansável.',
      'Capacidade de se reinventar e conectar com novas gerações.',
      'Uso da própria casa como laboratório vivo para a marca.'
    ]
  },
  {
    id: 81,
    name: 'Whitney Wolfe Herd',
    archetype: 'A Arquiteta do Empoderamento Social',
    category: 'Nova Economia',
    coreIdea: 'Inversão de Dinâmica Social e Segurança de Rede',
    strategicProtocol: 'Mude as regras do jogo. Ao permitir que apenas as mulheres deem o primeiro passo no Bumble, Whitney não criou apenas um app de namoro, ela criou um ambiente de rede mais seguro e respeitoso, capturando um nicho de mercado ignorado.',
    neuralInstallation: 'A proteção do usuário é o melhor diferencial de marca. Se você altera a dinâmica de poder a favor do elo mais vulnerável, você cria uma comunidade leal e inquebrável.',
    marketImpact: 'Redefinição das interações sociais digitais e IPO histórico como a mulher mais jovem a abrir capital.',
    keyHabit: 'Foco em cultura organizacional inclusiva.',
    habits: [
      'Uso de feedback de segurança para novas funcionalidades.',
      'Marketing focado em valores de gentileza e respeito.',
      'Paciência para construir marca antes de monetizar agressivamente.',
      'Expansão lateral para amizade e negócios (BFF/Bizz).',
      'Presença ativa em debates sobre ética e tecnologia.'
    ]
  },
  {
    id: 82,
    name: 'Vitalik Buterin',
    archetype: 'O Arquiteto da Descentralização',
    category: 'Nova Economia',
    coreIdea: 'Contratos Inteligentes e Computação Global',
    strategicProtocol: 'Construa a infraestrutura da confiança. Com o Ethereum, Buterin criou um computador mundial descentralizado que permite que qualquer pessoa crie aplicações sem intermediários, mudando a lógica do capital global.',
    neuralInstallation: 'O futuro é descentralizado. Se você fornece as ferramentas para que a sociedade se organize sem depender de autoridades centrais, você cria o novo sistema operacional da humanidade.',
    marketImpact: 'Nascimento da economia DeFi, NFTs e redefinição da governança digital mundial.',
    keyHabit: 'Escrita técnica profunda e pública.',
    habits: [
      'Minimalismo total e foco absoluto no código.',
      'Colaboração aberta com a comunidade global de desenvolvedores.',
      'Manutenção da integridade ética acima do lucro pessoal.',
      'Viagens constantes para entender ecossistemas locais.',
      'Uso de blogs para explicar conceitos complexos de forma clara.'
    ]
  },
  {
    id: 83,
    name: 'Brian Chesky',
    archetype: 'O Estrategista da Confiança',
    category: 'Nova Economia',
    coreIdea: 'Economia Compartilhada e Design de Experiência',
    strategicProtocol: 'Venda a sensação de pertencer. O Airbnb não aluga quartos; ele vende a possibilidade de "viver como um local", utilizando o design e sistemas de reputação para criar confiança entre estranhos em escala global.',
    neuralInstallation: 'O design não é como o produto parece, é como ele funciona para criar confiança. Se você remove o medo da transação, você abre mercados que antes eram impossíveis.',
    marketImpact: 'Disrupção total da indústria hoteleira mundial e redefinição do conceito de propriedade.',
    keyHabit: 'Desenho manual de jornadas de usuário.',
    habits: [
      'Hospedar-se em Airbnbs constantemente para testar o produto.',
      'Foco em storytelling visual de alta qualidade.',
      'Uso de crises para reforçar os valores da marca.',
      'Manutenção de uma cultura focada em design e criatividade.',
      'Criação de novos serviços (Experiências) para o ecossistema.'
    ]
  },
  {
    id: 84,
    name: 'Luiza Trajano',
    archetype: 'A Estrategista do Varejo Humano',
    category: 'LatAm',
    coreIdea: 'Omnicanalidade e Cultura de Pertencimento',
    strategicProtocol: 'Pessoas primeiro, tecnologia depois. Luiza transformou o Magazine Luiza em uma potência digital mantendo o calor humano das lojas físicas e criando um ecossistema onde o vendedor é o influenciador da sua própria comunidade.',
    neuralInstallation: 'A tecnologia é um meio para servir as pessoas. Se você mantém a cultura de atendimento e respeito, a digitalização apenas amplia o seu alcance, não mata a sua alma.',
    marketImpact: 'Transformação digital exemplar no varejo brasileiro e liderança em causas sociais e empresariais.',
    keyHabit: 'Ouvir diretamente os vendedores e clientes no chão de loja.',
    habits: [
      'Incentivo constante à educação e diversidade no time.',
      'Uso de rituais de cultura para manter o propósito da empresa.',
      'Decisões rápidas focadas na adaptação tecnológica.',
      'Advocacia por políticas de crédito acessíveis.',
      'Presença constante em fóruns de discussão de varejo e sociedade.'
    ]
  },
  {
    id: 85,
    name: 'André Esteves',
    archetype: 'O Estrategista de Capital',
    category: 'LatAm',
    coreIdea: 'Meritocracia e Parceria (Partnership)',
    strategicProtocol: 'O talento é o único ativo real. No BTG Pactual, Esteves instalou um modelo de parceria onde os melhores tornam-se donos, garantindo um alinhamento total de interesses e uma agressividade intelectual imbatível no mercado financeiro.',
    neuralInstallation: 'Atraia as mentes mais brilhantes e dê a elas uma razão real para lutarem pelo negócio. O equity é a ferramenta de retenção mais poderosa que existe para a elite intelectual.',
    marketImpact: 'Consolidação do maior banco de investimento da América Latina e redefinição da cultura bancária brasileira.',
    keyHabit: 'Networking de alto nível e análise macro constante.',
    habits: [
      'Manutenção de uma cultura de trabalho intenso e foco em lucro.',
      'Seleção rigorosa de sócios baseada em performance e confiança.',
      'Uso de tecnologia para expandir o banco para o varejo digital.',
      'Monitoramento constante do cenário político e econômico.',
      'Paciência para esperar ciclos de mercado favoráveis para M&A.'
    ]
  },
  {
    id: 86,
    name: 'Guilherme Benchimol',
    archetype: 'O Educador do Investimento',
    category: 'LatAm',
    coreIdea: 'Desintermediação Bancária e Rede de Assessores',
    strategicProtocol: 'Eduque para vender. A XP não começou como banco, começou como escolinha. Ao ensinar as pessoas a investirem melhor que nos grandes bancos, Benchimol criou um exército de assessores que conquistou a custódia do país.',
    neuralInstallation: 'Se você ensina o seu cliente a ganhar dinheiro, ele nunca mais sairá do seu ecossistema. A educação é a melhor estratégia de vendas de longo prazo.',
    marketImpact: 'Redefinição do mercado de capitais brasileiro e democratização do acesso a investimentos.',
    keyHabit: 'Caminhadas diárias para reflexão e estratégia.',
    habits: [
      'Obsessão por cultura e metas de crescimento agressivas.',
      'Uso de eventos massivos (Expert) para consolidar a marca.',
      'Foco total na experiência do assessor de investimento.',
      'Aposta em tecnologia para escala de atendimento.',
      'Manutenção da resiliência diante de crises de mercado.'
    ]
  },
  {
    id: 87,
    name: 'Marcos Galperin',
    archetype: 'O Conquistador do E-commerce Latino',
    category: 'LatAm',
    coreIdea: 'Logística Própria e Ecossistema de Pagamentos',
    strategicProtocol: 'Resolva a infraestrutura. O Mercado Livre venceu porque Galperin não apenas criou o site; ele criou o Mercado Pago para resolver a falta de cartões e o Mercado Envios para resolver o caos dos correios latinos.',
    neuralInstallation: 'Vença onde os outros desistem pela dificuldade física. Se você resolve a logística e o pagamento em um continente caótico, você se torna o dono do comércio desse continente.',
    marketImpact: 'Criação da empresa mais valiosa da América Latina e liderança absoluta no varejo digital regional.',
    keyHabit: 'Foco total na execução e redução de erros operacionais.',
    habits: [
      'Manutenção da cultura de startup mesmo com milhares de funcionários.',
      'Investimento massivo em frotas próprias de aviões e caminhões.',
      'Inovação constante em serviços financeiros (crédito, cripto).',
      'Paciência estratégica para dominar o mercado brasileiro.',
      'Monitoramento diário de métricas de entrega e reclamações.'
    ]
  },
  {
    id: 88,
    name: 'Daniel Ek',
    archetype: 'O Estrategista do Fluxo Digital',
    category: 'Nova Economia',
    coreIdea: 'Acesso sobre Propriedade e Algoritmo de Curadoria',
    strategicProtocol: 'O pirata regenerado. O Spotify venceu a pirataria ao oferecer uma experiência de streaming tão fluida e uma curadoria tão personalizada que pagar tornou-se mais conveniente do que baixar músicas ilegalmente.',
    neuralInstallation: 'As pessoas não querem a posse, querem o acesso e a descoberta. Se o seu algoritmo conhece o gosto do usuário melhor que ele mesmo, você detém o tempo dele.',
    marketImpact: 'Salvou a indústria fonográfica mundial e redefiniu o consumo de áudio via streaming e podcasts.',
    keyHabit: 'Escuta diária de novas músicas e podcasts.',
    habits: [
      'Foco total na engenharia de recomendação.',
      'Paciência para negociar com grandes gravadoras por anos.',
      'Expansão agressiva para o mercado de podcasts e áudio-livros.',
      'Manutenção de uma cultura de engenharia ágil (Spotify Model).',
      'Uso de dados para criar experiências de marketing virais (Wrapped).'
    ]
  },
  {
    id: 89,
    name: 'Tobias Lütke',
    archetype: 'O Arquiteto do Comércio Independente',
    category: 'Nova Economia',
    coreIdea: 'Ferramentas para o Pequeno Gigante',
    strategicProtocol: 'Arme os rebeldes. O Shopify fornece a infraestrutura de classe mundial da Amazon para que qualquer marca pequena possa vender direto ao consumidor, mantendo o controle sobre seus dados e clientes.',
    neuralInstallation: 'Seja a picareta na corrida do ouro. Se você fornece a infraestrutura para que outros construam seus impérios, seu sucesso é garantido pelo volume da rede.',
    marketImpact: 'Criação de um dos maiores ecossistemas de e-commerce do mundo e resistência ao monopólio da Amazon.',
    keyHabit: 'Programação constante e leitura técnica.',
    habits: [
      'Obsessão por reduzir a complexidade técnica para o lojista.',
      'Foco em parcerias e apps de terceiros para o ecossistema.',
      'Cultura de aprendizado constante e curiosidade intelectual.',
      'Manutenção de uma visão de longo prazo para o comércio global.',
      'Uso do próprio software para vender seus próprios hobbies.'
    ]
  },
  {
    id: 90,
    name: 'Alexandr Wang',
    archetype: 'O Minerador de Dados para IA',
    category: 'Nova Economia',
    coreIdea: 'Infraestrutura de Dados Etiquetados',
    strategicProtocol: 'A IA precisa de olhos. A Scale AI tornou-se o unicórnio essencial ao fornecer o serviço de etiquetagem de dados de alta precisão que permite que os modelos de IA das grandes empresas realmente aprendam.',
    neuralInstallation: 'O ouro da IA são os dados limpos. Se você controla o gargalo da preparação da inteligência, você se torna o parceiro indispensável de todos os gigantes tecnológicos.',
    marketImpact: 'Aceleração de projetos de carros autônomos e modelos de linguagem globais.',
    keyHabit: 'Trabalho focado e isolado em problemas matemáticos.',
    habits: [
      'Recrutamento dos melhores engenheiros de computação do mundo.',
      'Uso de processos rigorosos de controle de qualidade de dados.',
      'Foco total na escala industrial de serviços de etiquetagem.',
      'Monitoramento constante das necessidades dos labs de IA.',
      'Manutenção da agilidade diante de mudanças rápidas no setor.'
    ]
  },
  {
    id: 91,
    name: 'Palmer Luckey',
    archetype: 'O Defensor Tecnológico',
    category: 'Tecnologia',
    coreIdea: 'Hardware de Defesa e Realidade Virtual',
    strategicProtocol: 'Tecnologia de ponta para a segurança nacional. Luckey fundou a Anduril para trazer a velocidade do Vale do Silício para a indústria de defesa, utilizando IA e hardware autônomo para proteger fronteiras e ativos.',
    neuralInstallation: 'A inovação deve servir à soberania. Se você aplica a agilidade de software a problemas de hardware físico crítico, você quebra monopólios estatais ineficientes.',
    marketImpact: 'Redefinição da indústria de defesa americana e pioneirismo na Realidade Virtual via Oculus.',
    keyHabit: 'Construção manual de protótipos em garagem.',
    habits: [
      'Desprezo pela burocracia governamental tradicional.',
      'Foco em autonomia e inteligência artificial embarcada.',
      'Cultura de transparência e patriotismo técnico.',
      'Investimento massivo em P&D de longo prazo.',
      'Manutenção de uma independência política e intelectual ferrenha.'
    ]
  },
  {
    id: 92,
    name: 'Akio Morita',
    archetype: 'O Embaixador da Qualidade Japonesa',
    category: 'Pioneiros',
    coreIdea: 'Miniaturização e Portabilidade do Estilo de Vida',
    strategicProtocol: 'Coloque o som no seu bolso. Morita não perguntou se os clientes queriam um Walkman; ele observou que as pessoas queriam música em movimento e criou a tecnologia para permitir isso, mudando a cultura global.',
    neuralInstallation: 'Não pergunte ao cliente o que ele quer; mostre a ele o que ele ainda não sabe que deseja. A inovação real cria comportamentos, não apenas segue pedidos.',
    marketImpact: 'Globalização da marca Sony e transformação da percepção dos produtos japoneses para alta qualidade.',
    keyHabit: 'Trânsito constante entre culturas Oriental e Ocidental.',
    habits: [
      'Foco obsessivo no design compacto e funcional.',
      'Branding agressivo e global da marca Sony.',
      'Atenção aos detalhes de marketing e embalagem.',
      'Cultura de inovação sem medo de canibalizar os próprios produtos.',
      'Relacionamento direto com artistas e criadores de conteúdo.'
    ]
  },
  {
    id: 93,
    name: 'Soichiro Honda',
    archetype: 'O Engenheiro da Liberdade',
    category: 'Pioneiros',
    coreIdea: 'Motores Eficientes para as Massas',
    strategicProtocol: 'A perfeição mecânica acima de tudo. Honda focou na engenharia de motores de alta performance e baixo custo, utilizando as corridas como laboratório de testes para entregar confiabilidade absoluta ao consumidor comum.',
    neuralInstallation: 'O sucesso é 99% fracasso. Se você domina a técnica até os seus limites físicos, a qualidade do seu produto torna-se a sua melhor estratégia de vendas.',
    marketImpact: 'Motorização do Japão e domínio mundial do mercado de motocicletas e motores.',
    keyHabit: 'Estar pessoalmente na linha de produção todos os dias.',
    habits: [
      'Incentivo total ao questionamento da autoridade técnica.',
      'Uso de competições esportivas para motivar o time de engenharia.',
      'Foco total em economia de combustível e eficiência.',
      'Manutenção de uma cultura de humildade e aprendizado constante.',
      'Recusa em aceitar investimentos que tirassem o controle técnico.'
    ]
  },
  {
    id: 94,
    name: 'Enzo Ferrari',
    archetype: 'O Comandante da Paixão',
    category: 'Pioneiros',
    coreIdea: 'Exclusividade e Performance de Corrida',
    strategicProtocol: 'Eu vendo motores; o resto do carro eu dou de graça. Ferrari construiu uma marca onde a performance nas pistas é o único marketing necessário, criando uma aura de exclusividade que torna cada carro um objeto de desejo eterno.',
    neuralInstallation: 'A escassez é a mãe do valor de luxo. Se você vence no domingo, você vende na segunda. A paixão pela excelência técnica é o ímã que atrai os bilionários do mundo.',
    marketImpact: 'Criação da marca de automóveis mais valiosa e desejada do planeta.',
    keyHabit: 'Monitoramento pessoal de cada treino na pista de Maranello.',
    habits: [
      'Controle absoluto sobre quem pode comprar os seus carros.',
      'Foco total na inovação do motor V12 como o coração da marca.',
      'Uso da rivalidade como motor de desenvolvimento técnico.',
      'Manutenção de uma imagem de autoridade inquestionável.',
      'Lealdade extrema aos seus mecânicos e engenheiros de base.'
    ]
  },
  {
    id: 95,
    name: 'Karl Lagerfeld',
    archetype: 'O Operário do Luxo',
    category: 'Varejo',
    coreIdea: 'Revenção de Marca e Estética Contínua',
    strategicProtocol: 'O luxo deve ser renovado a cada seis meses. Lagerfeld assumiu a Chanel e a Fendi e as manteve relevantes por décadas através de uma disciplina de trabalho brutal e uma capacidade camaleônica de ler o espírito do tempo (Zeitgeist).',
    neuralInstallation: 'Não olhe para o passado; use-o como trampolim para o amanhã. A disciplina de execução constante é o que separa o artista amador do mestre industrial do luxo.',
    marketImpact: 'Revitalização da Chanel e definição do papel do diretor criativo moderno.',
    keyHabit: 'Leitura e desenho diário de madrugada.',
    habits: [
      'Manutenção de uma imagem pessoal icônica e imutável.',
      'Consumo massivo de cultura, livros e notícias mundiais.',
      'Execução rápida: centenas de designs por coleção.',
      'Capacidade de gerir múltiplas marcas de luxo simultaneamente.',
      'Uso de fotografia e artes visuais para controlar a imagem da marca.'
    ]
  },
  {
    id: 96,
    name: 'Anna Huffington',
    archetype: 'A Estrategista da Atenção Digital',
    category: 'Cultura',
    coreIdea: 'Agregação de Conteúdo e Bem-Estar Corporativo',
    strategicProtocol: 'Seja a voz do debate. Com o Huffington Post, Arianna provou que a curadoria e a agregação de vozes diversas superam o modelo de jornalismo fechado, capturando a atenção digital através da escala de conteúdo.',
    neuralInstallation: 'A atenção é o novo petróleo. Se você fornece uma plataforma para que a sociedade discuta seus problemas, você se torna o centro da influência cultural.',
    marketImpact: 'Redefinição do jornalismo digital e criação de um novo movimento de bem-estar corporativo (Thrive Global).',
    keyHabit: 'Priorização absoluta do sono e desconexão.',
    habits: [
      'Uso de storytelling pessoal para humanizar causas globais.',
      'Networking agressivo com líderes de pensamento mundial.',
      'Foco em métricas de engajamento e compartilhamento social.',
      'Capacidade de pivotar a carreira de política para mídia para bem-estar.',
      'Advocacia pelo fim da cultura do esgotamento (burnout).'
    ]
  },
  {
    id: 97,
    name: 'Brian Acton & Jan Koum',
    archetype: 'Os Estrategistas da Simplicidade Extrema',
    category: 'Nova Economia',
    coreIdea: 'Comunicação sem Fricção e Sem Anúncios',
    strategicProtocol: 'No Games, No Ads, No Gimmicks. O WhatsApp venceu porque focou exclusivamente na velocidade e confiabilidade da mensagem, removendo todas as distrações e garantindo que o app funcionasse em qualquer rede do mundo.',
    neuralInstallation: 'A utilidade pura é a melhor estratégia de retenção. Se o seu produto é essencial para a comunicação básica do ser humano, você não precisa de marketing; o usuário fará o marketing por você.',
    marketImpact: 'Destruição do mercado de SMS mundial e criação da maior rede de comunicação privada da história.',
    keyHabit: 'Foco total no código e remoção de recursos inúteis.',
    habits: [
      'Recusa em coletar dados de usuários por princípios éticos.',
      'Manutenção de uma equipe técnica mínima para bilhões de usuários.',
      'Obsessão pela estabilidade do servidor em países em desenvolvimento.',
      'Foco em criptografia ponta-a-ponta como padrão inegociável.',
      'Cultura de silêncio e execução discreta até a venda bilionária.'
    ]
  },
  {
    id: 98,
    name: 'Shigeru Miyamoto',
    archetype: 'O Mestre da Diversão Sistematizada',
    category: 'Cultura',
    coreIdea: 'Jogabilidade Centrada na Alegria e Intuição',
    strategicProtocol: 'O jogo deve ser intuitivo antes de ser visual. Miyamoto criou franquias (Mario, Zelda) focando na mecânica do "prazer de se movimentar", garantindo que a experiência do usuário seja recompensadora desde o primeiro segundo.',
    neuralInstallation: 'O design centrado no humano começa pela emoção da descoberta. Se você faz o seu cliente se sentir inteligente e capaz, você criou um fã para toda a vida.',
    marketImpact: 'Salvou a indústria de games nos anos 80 e definiu o padrão de qualidade e criatividade da Nintendo.',
    keyHabit: 'Observação de hobbies simples para criar mecânicas de jogo.',
    habits: [
      'Uso de analogias do mundo real para explicar conceitos técnicos.',
      'Paciência extrema: "Um jogo atrasado é eventualmente bom; um jogo apressado é ruim para sempre".',
      'Foco na família e na experiência multigeracional.',
      'Incentivo à simplicidade e remoção de menus complexos.',
      'Iteração constante do design através do playtest pessoal.'
    ]
  },
  {
    id: 99,
    name: 'James Cameron',
    archetype: 'O Explorador Tecnológico',
    category: 'Cultura',
    coreIdea: 'Engenharia de Imersão e Escala Visual',
    strategicProtocol: 'Se a ferramenta não existe, construa o laboratório para criá-la. Cameron funde a engenharia naval e óptica com o cinema para permitir que o espectador "entre" em mundos inexistentes, elevando o valor percebido da obra para níveis globais.',
    neuralInstallation: 'A visão sem execução técnica é apenas um sonho. Se você quer dominar o tabuleiro cultural, você deve ser o dono das máquinas que projetam a realidade.',
    marketImpact: 'Revolução nos efeitos visuais 3D e criação de recordes de bilheteria inalcançáveis.',
    keyHabit: 'Mergulhos de exploração profunda para inspiração técnica.',
    habits: [
      'Liderança de campo: estar presente em cada teste de hardware.',
      'Foco em roteiros com temas universais de ecologia e sobrevivência.',
      'Obsessão pela precisão física dos efeitos especiais.',
      'Manutenção de uma equipe técnica de elite de longa data.',
      'Uso do cinema como plataforma de advocacia ambiental.'
    ]
  },
  {
    id: 100,
    name: 'Alexandre Costa',
    archetype: 'O Mestre do Chocolate Democrático',
    category: 'LatAm',
    coreIdea: 'Varejo de Presente e Verticalização do Cacau',
    strategicProtocol: 'Chocolate não é comida, é presente. Alê Costa transformou a Cacau Show em uma potência ao ocupar o espaço entre o supermercado barato e o luxo inacessível, controlando desde a fazenda de cacau até a loja no shopping.',
    neuralInstallation: 'Domine o meio do mercado com qualidade superior e preço justo. Se você controla a matéria-prima e o ponto de venda, sua margem é protegida e sua marca é onipresente.',
    marketImpact: 'Criação da maior rede de chocolates finos do mundo e revitalização da produção de cacau brasileira.',
    keyHabit: 'Visitas constantes às lojas e contato com franqueados.',
    habits: [
      'Inovação constante em sabores e embalagens para datas sazonais.',
      'Uso de storytelling pessoal para engajar o time de vendas.',
      'Aposta em tecnologia de automação fabril alemã.',
      'Foco total em expansão via franquias para capilaridade rápida.',
      'Criação de parques e experiências temáticas para a marca.'
    ]
  },
  {
    id: 101,
    name: 'Abilio Diniz',
    archetype: 'O Estrategista da Gestão de Crise',
    category: 'LatAm',
    coreIdea: 'Disciplina Operacional e Resiliência Física',
    strategicProtocol: 'Sobreviva e prospere. Abilio transformou o Pão de Açúcar através de uma disciplina de custos férrea e uma capacidade de negociação implacável, provando que a saúde do líder dita o ritmo da saúde da empresa.',
    neuralInstallation: 'A gestão é um esporte de alta performance. Se você não tem disciplina com seu corpo e sua mente, você não terá disciplina com seu caixa. Seja o exemplo de resiliência do seu time.',
    marketImpact: 'Criação do maior grupo de varejo alimentar do Brasil e influência decisiva na governança corporativa nacional.',
    keyHabit: 'Rotina de exercícios físicos de alta intensidade.',
    habits: [
      'Foco em governança e sucessão profissionalizada.',
      'Capacidade de formar alianças estratégicas mundiais (ex: Casino).',
      'Uso de reuniões de conselho para desafiar cada métrica de custo.',
      'Leitura constante sobre gestão e liderança espiritual.',
      'Manutenção de uma rede de influência política e empresarial de elite.'
    ]
  },
  {
    id: 102,
    name: 'Salim Mattar',
    archetype: 'O Mestre da Eficiência em Frotas',
    category: 'LatAm',
    coreIdea: 'Logística de Ativos e Excelência no Atendimento',
    strategicProtocol: 'O segredo não é alugar carros, é gerir o ciclo de vida do ativo. Mattar construiu a Localiza focando na compra e venda estratégica de frotas e em um padrão de atendimento que transformou commodity em serviço premium.',
    neuralInstallation: 'Entenda o ciclo do seu ativo. O lucro real muitas vezes está no back-end (venda do usado) e não apenas no front-end (serviço). A excelência operacional é o seu maior marketing.',
    marketImpact: 'Criação da maior locadora de veículos da América Latina e benchmark global de eficiência logística.',
    keyHabit: 'Vigilância extrema sobre o NPS e reclamações de clientes.',
    habits: [
      'Cultura de meritocracia e "fome" por resultados no time.',
      'Investimento massivo em tecnologia de gestão de frota.',
      'Foco em expansão via franquias para dominar o território nacional.',
      'Uso de escala para negociar compras bilionárias com montadoras.',
      'Manutenção de uma disciplina financeira de baixo endividamento.'
    ]
  },
  {
    id: 103,
    name: 'Abilio Diniz',
    archetype: 'O Estrategista da Gestão e Disciplina',
    category: 'LatAm',
    coreIdea: 'Governança Corporativa e Eficiência Operacional',
    strategicProtocol: 'Sistematização da gestão em larga escala. Abilio uniu a disciplina do esporte com o rigor dos números para transformar o Pão de Açúcar em uma máquina de varejo, focando em governança e na formação de sucessores de elite.',
    neuralInstallation: 'A empresa é o reflexo do líder. Se você quer uma organização de alta performance, você deve ser o benchmark de disciplina, saúde e foco. Gestão é execução constante.',
    marketImpact: 'Liderança absoluta do varejo alimentar no Brasil e modernização da governança nas empresas nacionais.',
    keyHabit: 'Treino físico diário e meditação.',
    habits: [
      'Foco em corte de custos e eficiência operacional contínua.',
      'Uso de mentoria para desenvolver a próxima geração de líderes.',
      'Capacidade de negociação agressiva em fusões e aquisições.',
      'Manutenção de uma visão estratégica de longo prazo para o setor.',
      'Presença ativa em conselhos administrativos para influenciar a estratégia.'
    ]
  },
  {
    id: 104,
    name: 'Roberto Medina',
    archetype: 'O Estrategista da Experiência de Marca',
    category: 'LatAm',
    coreIdea: 'Marketing de Espetáculo e Branding de Conteúdo',
    strategicProtocol: 'Não venda ingressos, venda um sonho de liberdade. Medina criou o Rock in Rio como uma plataforma de comunicação para marcas, utilizando a música como o ímã para gerar uma experiência de marca inesquecível e global.',
    neuralInstallation: 'O evento é o marketing. Se você cria uma experiência que muda a vida do seu cliente por alguns dias, a sua marca torna-se parte da biografia emocional dele.',
    marketImpact: 'Criação do maior festival de música e entretenimento do mundo e internacionalização de marca brasileira.',
    keyHabit: 'Visualização criativa e desenho de cenários de larga escala.',
    habits: [
      'Foco total na experiência do cliente (limpeza, som, segurança).',
      'Parcerias estratégicas com grandes patrocinadores mundiais.',
      'Uso de mídias de massa para gerar urgência e desejo.',
      'Expansão da marca para diferentes territórios (Lisboa, Madrid, Vegas).',
      'Manutenção da curiosidade constante por novas tendências de consumo.'
    ]
  },
  {
    id: 105,
    name: 'Carlos Slim Helú',
    archetype: 'O Mestre da Eficiência Operacional',
    category: 'LatAm',
    coreIdea: 'Monopólio de Infraestrutura e Austeridade de Custos',
    strategicProtocol: 'Controle o essencial. Slim adquiriu ativos de infraestrutura (telecomunicações) ineficientes e aplicou uma disciplina de custos brutal, transformando-os em máquinas de geração de caixa que financiam a expansão do seu império.',
    neuralInstallation: 'A riqueza é construída na austeridade operacional. Se você controla a infraestrutura pela qual todos precisam passar, e o faz com o menor custo possível, você é o dono do jogo.',
    marketImpact: 'Domínio das telecomunicações na América Latina e transformação em um dos homens mais ricos do mundo.',
    keyHabit: 'Análise detalhada de custos em cadernos simples.',
    habits: [
      'Reinvestimento contínuo de lucros em setores críticos.',
      'Manutenção de um estilo de vida simples e longe de ostentação.',
      'Foco em adquirir ativos subvalorizados em tempos de crise.',
      'Gestão familiar direta dos negócios estratégicos.',
      'Uso de filantropia focada em saúde e educação para base da pirâmide.'
    ]
  },
  {
    id: 106,
    name: 'Marcos Galperin',
    archetype: 'O Visionário da Logística Latino-Americana',
    category: 'LatAm',
    coreIdea: 'Ecossistema Digital de Comércio e Pagamentos',
    strategicProtocol: 'Resolva a dor do território. Galperin entendeu que para o e-commerce vencer na América Latina, ele precisava resolver a falta de cartões de crédito e o caos logístico, criando o Mercado Pago e Envios.',
    neuralInstallation: 'O seu negócio só cresce se você resolve os gargalos do seu ambiente. Se a infraestrutura é ruim, construa a sua própria e você terá o monopólio da conveniência.',
    marketImpact: 'Criação do maior marketplace da América Latina e liderança absoluta no varejo digital regional.',
    keyHabit: 'Foco na inovação tecnológica e agilidade de execução.',
    habits: [
      'Cultura de startup mantida em escala corporativa.',
      'Foco total na redução da fricção de compra para o usuário.',
      'Investimento massivo em centros de distribuição próprios.',
      'Uso de dados para oferta de crédito para desbancarizados.',
      'Aposta em parcerias para entrega "no mesmo dia".'
    ]
  }
];
