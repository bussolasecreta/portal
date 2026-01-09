
import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { 
  MessageSquareText, 
  Target, 
  Users, 
  Zap, 
  ShieldCheck, 
  Lightbulb, 
  ChevronDown, 
  Brain,
  Scale,
  TrendingUp,
  Cpu,
  ArrowRight,
  Fingerprint,
  Workflow,
  Network,
  Info,
  Layers,
  Handshake,
  Briefcase,
  Eye,
  ListTree,
  CheckCircle2,
  Shuffle,
  Heart,
  Maximize,
  Infinity,
  Wand2,
  BarChart3,
  Component,
  MousePointer2,
  PieChart,
  Search,
  Trophy
} from 'lucide-react';

interface NLPTechnique {
  id: string;
  title: string;
  definition: string;
  objective: string;
  application: string;
  example: string;
  icon: React.ReactNode;
}

const TECHNIQUES: NLPTechnique[] = [
  {
    id: 'rapport',
    title: 'Calibração e Rapport Estratégico',
    icon: <Users size={20} />,
    definition: 'Sincronização neurofisiológica avançada. Não se trata de imitação, mas de alinhamento de ritmos biológicos, tonais e linguísticos para criar um ambiente de segurança psicológica instantânea.',
    objective: 'Estabelecer uma ponte de confiança técnica que minimize a fricção crítica em negociações complexas.',
    application: 'Fusões, aquisições e gestão de conflitos em conselhos administrativos.',
    example: 'Durante uma negociação de M&A, o estrategista calibra o tempo de resposta e a densidade vocabular do interlocutor, reduzindo a percepção de ameaça e acelerando o consenso.'
  },
  {
    id: 'anchoring',
    title: 'Gestão de Estados (Ancoragem)',
    icon: <Zap size={20} />,
    definition: 'Criação de gatilhos neurológicos para acesso deliberado a recursos internos de alta performance.',
    objective: 'Garantir que o tomador de decisão opere a partir de um estado de clareza e frieza, mesmo sob extrema pressão externa.',
    application: 'Gestão de crises, rodadas de captação (Pitch) e apresentações de resultados críticos.',
    example: 'Um CEO utiliza uma âncora cinestésica ancorada em sucessos passados para entrar em um "Estado de Fluxo" segundos antes de uma coletiva de imprensa sobre uma crise reputacional.'
  },
  {
    id: 'reframing',
    title: 'Sleight of Mouth (Reenquadramento Verbal)',
    icon: <MessageSquareText size={20} />,
    definition: 'Framework linguístico para desconstruir crenças limitantes e objeções através da lógica circular e mudança de foco de percepção.',
    objective: 'Expandir o mapa mental do interlocutor, removendo bloqueios que impedem o progresso de uma parceria estratégica.',
    application: 'Vendas de alto ticket, gestão de mudanças organizacionais e reversão de resistências em conselhos.',
    example: 'Ao ouvir "O custo é proibitivo", o líder aplica um reenquadramento de intenção: "Sua preocupação com o custo reflete seu compromisso com a margem; é precisamente por isso que investir em eficiência agora protege seu lucro de amanhã".'
  },
  {
    id: 'metaprograms',
    title: 'Profiling de Metaprogramas',
    icon: <Cpu size={20} />,
    definition: 'Identificação dos filtros operacionais invisíveis que determinam como uma pessoa processa dados (Ex: Foco em Opções vs Procedimentos).',
    objective: 'Predizer o comportamento decisório e adaptar a comunicação para o "software mental" específico do receptor.',
    application: 'Contratação de C-Level, formação de times de alta performance e marketing de precisão.',
    example: 'Identificar um CFO com perfil de "Afastamento de Risco" e apresentar uma proposta focada em prevenção de perdas em vez de focar apenas em potencial de ganhos.'
  },
  {
    id: 'meta-model',
    title: 'Modelo de Precisão Linguística',
    icon: <Target size={20} />,
    definition: 'Instrumento cirúrgico para identificar omissões, generalizações e distorções na comunicação executiva.',
    objective: 'Recuperar informações perdidas e eliminar ambiguidades que geram erros operacionais de alto custo.',
    application: 'Briefings estratégicos, auditorias de processos e alinhamento de metas anuais.',
    example: 'O consultor desafia a frase "Todos estão insatisfeitos" perguntando "Quem especificamente?" e "Insatisfeitos com qual aspecto do projeto?", transformando ruído em dados acionáveis.'
  },
  {
    id: 'tote',
    title: 'Modelagem T.O.T.E. de Performance',
    icon: <Workflow size={20} />,
    definition: 'Teste-Operação-Teste-Saída. O framework que decodifica a estrutura estratégica de qualquer competência humana excepcional.',
    objective: 'Extrair "receitas" de success de top performers e instalá-las na cultura organizacional.',
    application: 'Desenvolvimento de metodologias proprietárias e treinamento de sucessores.',
    example: 'A empresa modela a estratégia mental do seu melhor vendedor, descobrindo os gatilhos específicos que ele usa, e treina o restante da equipe para replicar o mesmo padrão.'
  },
  {
    id: 'pacing-leading',
    title: 'Pacing & Leading Estratégico',
    icon: <Handshake size={20} />,
    definition: 'Técnica de acompanhamento e condução onde você primeiro valida a realidade atual do interlocutor para depois sugerir uma mudança de direção.',
    objective: 'STRATEGIC TOOLSET - Reduzir a resistência psicológica a novas ideias e mudanças de rumo estratégico.',
    application: 'Gestão de mudanças, negociações sindicais e alinhamento de visão com fundadores.',
    example: 'Um consultor valida as dificuldades financeiras da empresa (Pacing) para ganhar autoridade moral e sugerir um corte drástico de custos (Leading) sem gerar revolta.'
  },
  {
    id: 'chunking',
    title: 'Chunking (Hierarquia de Abstração)',
    icon: <Layers size={20} />,
    definition: 'Movimentação deliberada entre o macro (Chunk up - visão geral) e o micro (Chunk down - detalhes técnicos) durante uma comunicação.',
    objective: 'STRATEGIC TOOLSET - Encontrar pontos de concordância em níveis superiores e clareza operacional em níveis inferiores.',
    application: 'Resolução de impasses táticos, planejamento estratégico e apresentações para o conselho.',
    example: 'Quando dois diretores divergem sobre o fornecedor, o líder faz o "Chunk Up" para o objetivo comum: "Ambos queremos a melhor margem para o Q4, correto?". Uma vez acordado, voltam ao detalhe técnico.'
  },
  {
    id: 'perceptual-positions',
    title: 'Posições Perceptivas de Decisão',
    icon: <Eye size={20} />,
    definition: 'Framework mental para analisar uma situação sob três óticas: o próprio eu, o interlocutor (cliente/concorrente) e um observador neutro.',
    objective: 'STRATEGIC TOOLSET - Gerar empatia técnica e antecipar movimentos adversários com precisão analítica.',
    application: 'Simulação de negociações complexas, resolução de conflitos e design de experiência do cliente.',
    example: 'Antes de um pitch bilionário, o founder se imagina na cadeira do investidor (2ª posição) para identificar quais medos ocultos podem travar o aporte de capital.'
  },
  {
    id: 'future-pacing',
    title: 'Ponte ao Futuro (Future Pacing)',
    icon: <TrendingUp size={20} />,
    definition: 'Ensaio mental guiado que projeta a aplicação bem-sucedida de uma decisão no cenário futuro, identificando antecipadamente possíveis falhas.',
    objective: 'STRATEGIC TOOLSET - Consolidar o compromisso com a execução e realizar uma pré-autopsia de riscos.',
    application: 'Fechamento de vendas enterprise, implementação de novos sistemas e onboardings executivos.',
    example: 'Ao assinar o contrato, o account manager pede que o cliente descreva como será a operação daqui a 6 meses, ancorando os benefícios e detectando gargalos de implementação.'
  },
  {
    id: 'logical-levels',
    title: 'Níveis Lógicos de Alinhamento',
    icon: <ListTree size={20} />,
    definition: 'Análise sistêmica que separa Ambiente, Comportamento, Capacidade, Valores, Identidade e Missão organizacional.',
    objective: 'STRATEGIC TOOLSET - Identificar em qual nível uma barreira estratégica está ocorrendo para aplicar a correção correta.',
    application: 'Diagnóstico de cultura corporativa, reposicionamento de marca e gestão de talentos.',
    example: 'A empresa tenta mudar o comportamento (vender mais), mas o problema está no nível de Identidade (o time não se vê como consultores, apenas como tiradores de pedido).'
  },
  {
    id: 'presuppositions',
    title: 'Linguagem de Pressuposição',
    icon: <MessageSquareText size={20} />,
    definition: 'Estruturação verbal onde a aceitação de uma ideia central é necessária para que a frase faça sentido gramatical.',
    objective: 'STRATEGIC TOOLSET - Direcionar o foco do interlocutor para a solução e o progresso, ignorando o impasse.',
    application: 'Liderança inspiracional, redação de memorandos estratégicos e gestão de reuniões críticas.',
    example: 'Em vez de perguntar "Se vamos aprovar o projeto", o CEO diz: "Como vocês pretendem alocar os recursos assim que o projeto for aprovado hoje?", pressupondo a aprovação.'
  },
  {
    id: 'agreement-frame',
    title: 'Agreement Frame (Moldura de Acordo)',
    icon: <CheckCircle2 size={20} />,
    definition: 'Uso estratégico das palavras "Eu aprecio...", "Eu respeito..." e "Eu concordo..." seguidas de "E..." em vez de "Mas...".',
    objective: 'STRATEGIC TOOLSET - Manter o fluxo de ideias aberto e dissolver a polarização em discussões acaloradas.',
    application: 'Gestão de stakeholders, negociações de boardroom e gestão de feedback.',
    example: 'Ao ouvir uma crítica, o diretor responde: "Eu respeito sua preocupação com o orçamento E por isso gostaria de mostrar como essa inovação reduzirá custos operacionais no longo prazo".'
  },
  {
    id: 'utilization',
    title: 'Utilização Estratégica de Resistência',
    icon: <Shuffle size={20} />,
    definition: 'Integrar a resistência do interlocutor ou o erro do sistema como parte do processo de solução ou argumento de venda.',
    objective: 'STRATEGIC TOOLSET - Neutralizar objeções hostis transformando-as em matéria-prima para o fechamento.',
    application: 'Vendas consultivas agressivas, gestão de crises de marca e negociações diplomáticas.',
    example: 'O cliente diz: "Vocês são muito caros". O estrategista utiliza: "É precisamente por termos o maior valor agregado que atendemos clientes que não podem se dar ao luxo de falhar".'
  },
  {
    id: 'pattern-interrupt',
    title: 'Interrupção de Padrão Decisório',
    icon: <Zap size={20} />,
    definition: 'Quebra súbita de um comportamento automático ou repetitivo para redirecionar o pensamento consciente para uma nova possibilidade.',
    objective: 'STRATEGIC TOOLSET - Desbloquear impasses mentais e quebrar "scripts" de defesa de concorrentes ou negociadores.',
    application: 'Negociações travadas, sessões de brainstorming e gestão de estados emocionais de grupos.',
    example: 'Durante uma discussão circular e improdutiva, o moderador levanta-se bruscamente, faz uma piada técnica ou muda o layout da sala para resetar a dinâmica do grupo.'
  },
  {
    id: 'submodalities',
    title: 'Mapeamento de Submodalidades',
    icon: <Fingerprint size={20} />,
    definition: 'Identificação das características finas de como o cérebro representa internamente uma decisão (brilho, tamanho, som, localização mental).',
    objective: 'STRATEGIC TOOLSET - Codificar o "processo de compra" interno do cliente para espelhar a apresentação da oferta.',
    application: 'Marketing de alto impacto, profiling de investidores e autogestão de performance.',
    example: 'O vendedor nota que o cliente visualiza decisões importantes sempre como algo "grande e à direita". He posiciona o material gráfico exatamente nessa direção física.'
  },
  {
    id: 'values-elicitation',
    title: 'Elicitação de Drivers de Valor',
    icon: <Heart size={20} />,
    definition: 'Sequência de perguntas específicas para descobrir o que realmente motiva a decisão de um executivo por trás do discurso lógico.',
    objective: 'STRATEGIC TOOLSET - Alinhar a proposta comercial com as necessidades psicológicas profundas do decisor.',
    application: 'Hiring de C-Level, parcerias de longo prazo e vendas de luxo/alto ticket.',
    example: 'Ao perguntar "O que é importante para você em um software?", o estrategista vai além do "preço" e descobre que o driver real é "Status de inovação perante a matriz".'
  },
  {
    id: 'spatial-anchoring',
    title: 'Ancoragem Espacial de Autoridade',
    icon: <Maximize size={20} />,
    definition: 'Associação deliberada de diferentes áreas físicas de uma sala ou palco com diferentes estados mentais ou fases de um projeto.',
    objective: 'STRATEGIC TOOLSET - Gerenciar a percepção do público sobre competência, inovação e rigor técnico sem palavras.',
    application: 'Keynotes para acionistas, workshops de liderança e gestão de reuniões de board.',
    example: 'O CEO sempre apresenta as dificuldades no lado esquerdo do palco e caminha para o lado direito ao falar do futuro, ancorando visualmente o progresso.'
  },
  {
    id: 'contrast-frame',
    title: 'Contrast Frame (Moldura de Valor)',
    icon: <Scale size={20} />,
    definition: 'Apresentação de uma opção extrema para servir de âncora comparativa, fazendo a opção desejada parecer altamente razoável.',
    objective: 'STRATEGIC TOOLSET - Facilitar a aprovação de orçamentos e a escolha de caminhos estratégicos específicos.',
    application: 'Precificação de serviços, propostas de investimentos e negociações salariais.',
    example: 'Apresentar primeiro o custo de "não fazer nada" (risco total de R$ 10M) antes de apresentar o investimento em segurança (R$ 200k).'
  },
  {
    id: 'ecology-check',
    title: 'Check de Ecologia Estratégica',
    icon: <ShieldCheck size={20} />,
    definition: 'Fase de validação onde se avalia se a solução proposta causa danos colaterais em outras partes do ecossistema empresarial.',
    objective: 'STRATEGIC TOOLSET - Garantir a sustentabilidade da decisão e evitar a "Lei das Consequências Não Intencionais".',
    application: 'M&A, mudanças de política de bônus e lançamentos de novos produtos.',
    example: 'Antes de aprovar o bônus agressivo para vendas, o board checa se isso vai sobrecarregar o suporte ao cliente a ponto de destruir o Brand Equity.'
  },
  {
    id: 'double-bind',
    title: 'Double Bind (Duplo Vínculo) Executivo',
    icon: <Network size={20} />,
    definition: 'Oferecer duas escolhas onde ambas levam ao resultado desejado pela estratégia, dando ao outro a percepção de autonomia.',
    objective: 'STRATEGIC TOOLSET - Acelerar o fechamento de compromissos e reduzir o ciclo de venda ou decisão.',
    application: 'Agendamento de reuniões críticas, fechamento de contratos e delegação de tarefas.',
    example: 'O negociador pergunta: "Você prefere que implementemos a fase piloto agora em Outubro ou prefere ir direto para o rollout global em Janeiro?", garantindo o projeto de qualquer forma.'
  },
  {
    id: 'sensory-calibration',
    title: 'Calibração Sensorial Adaptativa',
    icon: <Briefcase size={20} />,
    definition: 'Leitura microscópica de microexpressões, tom de voz e respiração para identificar hesitação oculta ou concordância real.',
    objective: 'STRATEGIC TOOLSET - Saber o momento exato de pedir o fechamento ou recuar em uma argumentação.',
    application: 'Interrogatórios corporativos, entrevistas de seleção e negociações B2B de alto volume.',
    example: 'O líder percebe uma mudança sutil na respiração do investidor ao falar de riscos legais e, imediatamente, foca sua fala em mitigar essa dúvida específica.'
  },
  {
    id: 'meta-state',
    title: 'Meta-Estados de Resiliência',
    icon: <Infinity size={20} />,
    definition: 'A capacidade de ter um "estado sobre um estado" (ex: estar calmo sobre o fato de estar sob pressão).',
    objective: 'STRATEGIC TOOLSET - Manter a sanidade analítica e a autoridade em ambientes de caos e crise aguda.',
    application: 'Gerenciamento de crises reputacionais, demissões em massa e falhas de infraestrutura.',
    example: 'Um CFO mantém o estado de "curiosidade estratégica" sobre o prejuízo trimestral, evitando o pânico emocional e focando na correção de rota.'
  },
  {
    id: 'intentionality-frame',
    title: 'Moldura de Intencionalidade Oculta',
    icon: <Target size={20} />,
    definition: 'Separar o comportamento negativo observado de uma pessoa da intenção positiva que ela possa ter para o negócio.',
    objective: 'STRATEGIC TOOLSET - Transformar opositores em aliados, validando suas preocupações fundamentais.',
    application: 'Gestão de conflitos entre sócios, reuniões de sindicato e feedback de performance.',
    example: 'O CEO diz ao diretor rebelde: "Eu percebo sua agressividade no conselho como um profundo compromisso em não deixarmos o lucro cair. Como podemos usar essa energia para melhorar a operação?".'
  },
  {
    id: 'relevance-signaling',
    title: 'Sinalização de Relevância Cognitiva',
    icon: <Lightbulb size={20} />,
    definition: 'Uso de gatilhos de atenção específicos (novidade, perigo, benefício imediato) para furar o bloqueio de "ruído" dos executivos.',
    objective: 'STRATEGIC TOOLSET - Garantir que sua mensagem seja processada em ambientes com excesso de informação.',
    application: 'Assunto de e-mails críticos, manchetes de relatórios e abertura de apresentações.',
    example: 'Em vez de "Relatório Mensal", o título do memorando é: "Os 3 Gaps que podem comprometer 15% da margem do próximo mês".'
  },
  {
    id: 'milton-model-business',
    title: 'Linguagem Milmética para Liderança',
    icon: <Wand2 size={20} />,
    definition: 'Uso de linguagem deliberadamente vaga para permitir que uma grande massa de funcionários projete seus próprios valores no objetivo comum.',
    objective: 'STRATEGIC TOOLSET - Gerar alinhamento de massa em torno de uma visão corporativa sem gerar objeções específicas.',
    application: 'Discursos de Town Hall, redação de "Missão e Valores" e campanhas de cultura interna.',
    example: 'O CEO declara: "Estamos construindo uma empresa que valoriza o esforço de cada um e busca a excelência em todos os toques". Cada funcionário define "esforço" e "excelência" à sua maneira, gerando união.'
  }
];

const NLP: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const { theme } = useTheme();

  return (
    <div className="animate-in fade-in duration-1000 bg-[#fdfdfd] dark:bg-darkBg min-h-screen transition-colors duration-300">
      {/* Executive Header */}
      <section className="bg-slate-950 pt-20 md:pt-24 pb-32 md:pb-40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-[#c5a059]/10 blur-[100px] md:blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#c5a059] text-[8px] md:text-[9px] font-black tracking-[0.3em] md:tracking-[0.4em] uppercase mb-6 md:mb-8">
              <Brain size={14} />
              <span>Cognitive Engineering Unit</span>
            </div>
            <h1 className="serif text-4xl md:text-8xl font-bold text-white mb-6 md:mb-8 leading-tight tracking-tight">
              PNL para <span className="text-[#c5a059] italic">Negócios</span>
            </h1>
            <p className="text-slate-400 text-base md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
              Neurociência aplicada à comunicação de precisão, arquitetura de decisões e liderança estratégica de alto impacto.
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Value Proposition */}
      <section className="max-w-7xl mx-auto px-6 py-24 -mt-16 md:-mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-white dark:bg-darkCard p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-xl md:shadow-2xl border border-slate-100 dark:border-slate-800 group hover:border-[#c5a059] transition-all">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-50 dark:bg-darkSurface text-[#c5a059] rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:bg-[#c5a059] group-hover:text-white transition-all">
              <TrendingUp size={24} className="md:w-7 md:h-7" />
            </div>
            <h3 className="serif text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3 md:mb-4">Clareza Estratégica</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-light">
              Elimine o ruído subjetivo. A PNL fornece frameworks para processar a realidade com precisão cirúrgica, permitindo decisões baseadas em padrões, não em suposições.
            </p>
          </div>
          <div className="bg-white dark:bg-darkCard p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-xl md:shadow-2xl border border-slate-100 dark:border-slate-800 group hover:border-[#c5a059] transition-all">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-50 dark:bg-darkSurface text-[#c5a059] rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:bg-[#c5a059] group-hover:text-white transition-all">
              <Network size={24} className="md:w-7 md:h-7" />
            </div>
            <h3 className="serif text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3 md:mb-4">Cultura de Excelência</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-light">
              Decodifique o sucesso. Utilize a modelagem de comportamento para transformar talentos individuais em processos organizacionais replicáveis e escaláveis.
            </p>
          </div>
          <div className="bg-white dark:bg-darkCard p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-xl md:shadow-2xl border border-slate-100 dark:border-slate-800 group hover:border-[#c5a059] transition-all">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-50 dark:bg-darkSurface text-[#c5a059] rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:bg-[#c5a059] group-hover:text-white transition-all">
              <Handshake size={24} className="md:w-7 md:h-7" />
            </div>
            <h3 className="serif text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3 md:mb-4">Influência Ética</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-light">
              Negociação é a arte de gerir o foco. Aprenda a alinhar interesses complexos e construir parcerias baseadas em integridade e ganhos mútuos sustentáveis.
            </p>
          </div>
        </div>
      </section>

      {/* Applications Domain */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-32 transition-colors duration-300">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
          <div className="w-full md:w-1/2">
            <div className="inline-flex items-center space-x-2 text-[#c5a059] mb-4 md:mb-6">
              <Layers size={18} />
              <span className="text-[10px] font-black uppercase tracking-widest">Domínios de Poder</span>
            </div>
            <h2 className="serif text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 md:mb-8 leading-tight">Para que a PNL é usada em <span className="text-[#c5a059] italic">Negócios Modernos</span></h2>
            <div className="space-y-5 md:space-y-6">
              {[
                { title: 'Liderança Consciente', desc: 'Instalar visões, alinhar valores do time e gerir o clima organizacional através da linguagem.' },
                { title: 'Negociação B2B', desc: 'Leitura de microexpressões, calibração de sinais de compra e reversão de objeções críticas.' },
                { title: 'Gestão de Conflitos', desc: 'Diferenciar fatos de interpretações e encontrar pontos de convergência em cenários de alta tensão.' },
                { title: 'Arquitetura de Vendas', desc: 'Utilizar gatilhos hipnóticos sutis e ancoragem de preço para maximizar o valor percebido da oferta.' }
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#c5a059] shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-gray-100 text-sm md:text-base mb-1">{item.title}</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-slate-50 dark:bg-darkSurface rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 border border-slate-100 dark:border-slate-800 transition-colors duration-300">
            <div className="flex flex-col items-center text-center">
              <Fingerprint size={60} className="text-[#c5a059] opacity-20 mb-6 md:mb-8 md:w-20 md:h-20" />
              <h3 className="serif text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">A Digital do Comando</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base font-light leading-relaxed mb-8">
                Cada executivo possui uma estratégia mental única para decidir. A PNL permite que você mapeie essa "digital cognitiva" para influenciar de forma precisa e ética.
              </p>
              <div className="w-full h-px bg-slate-200 dark:bg-slate-800 mb-8" />
              <div className="grid grid-cols-3 gap-2 md:gap-4 w-full">
                 <div className="text-center">
                    <p className="text-base md:text-xl font-bold text-slate-900 dark:text-gold">70%</p>
                    <p className="text-[7px] md:text-[8px] uppercase tracking-widest text-slate-400 dark:text-slate-500 font-bold">Linguagem Não-Verbal</p>
                 </div>
                 <div className="text-center">
                    <p className="text-base md:text-xl font-bold text-slate-900 dark:text-gold">100ms</p>
                    <p className="text-[7px] md:text-[8px] uppercase tracking-widest text-slate-400 dark:text-slate-500 font-bold">Confiança Instantânea</p>
                 </div>
                 <div className="text-center">
                    <p className="text-base md:text-xl font-bold text-slate-900 dark:text-gold">14</p>
                    <p className="text-[7px] md:text-[8px] uppercase tracking-widest text-slate-400 dark:text-slate-500 font-bold">Padrões Estruturais</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Techniques Master Grid */}
      <section className="bg-white dark:bg-darkBg py-20 md:py-32 border-y border-slate-100 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="serif text-3xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4 md:mb-6">Instrumentos de Precisão</h2>
            <p className="text-slate-400 dark:text-slate-500 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.4em]">O Kit de Ferramentas do Estrategista</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {TECHNIQUES.map((tech) => (
              <div 
                key={tech.id}
                className={`group bg-white dark:bg-darkCard rounded-2xl md:rounded-3xl border transition-all duration-700 overflow-hidden ${
                  expandedId === tech.id 
                  ? 'border-[#c5a059] dark:border-gold shadow-2xl dark:shadow-gold/10 ring-1 ring-[#c5a059]/20 dark:ring-gold/20' 
                  : 'border-slate-100 dark:border-slate-800 hover:border-slate-300 dark:hover:border-gold hover:shadow-lg'
                }`}
              >
                <button 
                  onClick={() => setExpandedId(expandedId === tech.id ? null : tech.id)}
                  className="w-full p-6 md:p-10 text-left flex items-start justify-between gap-4 md:gap-8"
                >
                  <div className="flex items-start space-x-4 md:space-x-8">
                    <div className={`shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center transition-all duration-500 ${
                      expandedId === tech.id ? 'bg-slate-950 dark:bg-gold text-[#c5a059] dark:text-slate-950 rotate-6 md:rotate-12 scale-105 md:scale-110' : 'bg-slate-50 dark:bg-darkSurface text-slate-400 dark:text-slate-500 group-hover:bg-[#c5a059]/10 dark:group-hover:bg-gold/10 group-hover:text-[#c5a059] dark:group-hover:text-gold'
                    }`}>
                      {tech.icon}
                    </div>
                    <div>
                      <h3 className={`text-lg md:text-2xl font-bold leading-tight transition-colors ${expandedId === tech.id ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300 group-hover:text-[#c5a059] dark:group-hover:text-gold'}`}>
                        {tech.title}
                      </h3>
                      <p className="text-slate-400 dark:text-slate-500 text-[8px] md:text-[10px] mt-1.5 md:mt-2 uppercase tracking-widest font-black opacity-60">Strategic Toolset</p>
                    </div>
                  </div>
                  <div className={`mt-2 p-1.5 md:p-2 rounded-full transition-all duration-500 ${expandedId === tech.id ? 'bg-[#c5a059]/10 dark:bg-gold/10 text-[#c5a059] dark:text-gold rotate-180' : 'text-slate-200 dark:text-slate-800'}`}>
                    <ChevronDown size={20} className="md:w-6 md:h-6" />
                  </div>
                </button>

                {expandedId === tech.id && (
                  <div className="px-6 md:px-10 pb-8 md:pb-10 space-y-8 md:space-y-10 animate-in fade-in slide-in-from-top-4 duration-700">
                    <div className="bg-slate-50 dark:bg-darkSurface rounded-xl md:rounded-[2rem] p-6 md:p-8 border border-slate-100 dark:border-slate-800 relative">
                       <div className="absolute top-4 left-4">
                          <Info size={16} className="text-[#c5a059]" />
                       </div>
                      <p className="text-slate-700 dark:text-gray-300 text-sm md:text-base leading-relaxed font-light pl-6">
                        {tech.definition}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
                      <div className="space-y-3">
                        <h4 className="text-[10px] md:text-[11px] font-black text-slate-950 dark:text-white uppercase tracking-[0.2em] flex items-center">
                          <Target size={14} className="mr-2 text-[#c5a059]" /> Objetivo
                        </h4>
                        <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed pl-4 md:pl-5 border-l border-slate-100 dark:border-slate-800">
                          {tech.objective}
                        </p>
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-[10px] md:text-[11px] font-black text-slate-950 dark:text-white uppercase tracking-[0.2em] flex items-center">
                          <Briefcase size={14} className="mr-2 text-[#c5a059]" /> Aplicação
                        </h4>
                        <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed pl-4 md:pl-5 border-l border-slate-100 dark:border-slate-800">
                          {tech.application}
                        </p>
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-[10px] md:text-[11px] font-black text-slate-950 dark:text-white uppercase tracking-[0.2em] flex items-center">
                          <ShieldCheck size={14} className="mr-2 text-[#c5a059]" /> Exemplo Real
                        </h4>
                        <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed pl-4 md:pl-5 border-l border-slate-100 dark:border-slate-800 italic">
                          {tech.example}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ethics & Governança */}
      <section className="max-w-4xl mx-auto px-6 py-24 md:py-40 text-center">
        <ShieldCheck className="mx-auto text-[#c5a059] mb-6 md:mb-8" size={64} strokeWidth={1} />
        <h2 className="serif text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 md:mb-8 leading-tight">O Código da Influência</h2>
        <p className="text-slate-500 dark:text-slate-400 text-base md:text-xl font-light leading-relaxed mb-12 md:mb-16">
          A PNL no portal Bússola Secreta é tratada com <strong>Ecologia Estratégica</strong>. Influenciar sem integridade é manipulação temporária; influenciar com propósito é liderança sustentável.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-left">
           <div className="bg-slate-950 dark:bg-darkCard p-8 md:p-10 rounded-2xl md:rounded-[2.5rem] text-white">
              <span className="text-[9px] md:text-[10px] font-black text-[#c5a059] uppercase tracking-widest mb-4 block">Princípio de Uso</span>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-light">
                Expandir as opções do interlocutor. A verdadeira influência gera clareza para que a melhor decisão seja tomada por ambas as partes.
              </p>
           </div>
           <div className="bg-slate-50 dark:bg-darkSurface p-8 md:p-10 rounded-2xl md:rounded-[2.5rem] border border-slate-100 dark:border-slate-800">
              <span className="text-[9px] md:text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4 block">Limite Ético</span>
              <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm leading-relaxed font-light">
                Ocultar riscos reais ou fabricar escassez inexistente invalida o uso de qualquer técnica estratégica e corrói o Brand Equity da organização.
              </p>
           </div>
        </div>
      </section>

      {/* Final Textual Closing */}
      <section className="bg-slate-950 py-20 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="serif text-3xl md:text-6xl font-bold text-white mb-6 md:mb-10 leading-tight">Comande o <br className="hidden md:block" /> seu <span className="text-[#c5a059] italic">Tabuleiro Mental.</span></h2>
          <p className="text-slate-400 text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed">
            A maestria técnica é a diferença entre reagir passivamente ao mercado e ditar o ritmo da estratégia global.
          </p>
        </div>
      </section>
    </div>
  );
};

export default NLP;
