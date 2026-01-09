
import { GlossaryCategory } from '../constants';

export const COMPREHENSIVE_GLOSSARY: GlossaryCategory[] = [
  {
    category: 'Estratégia & Gestão',
    terms: [
      { 
        term: 'Matriz SWOT (FOFA)', 
        definition: 'Framework clássico de planejamento que mapeia Forças e Fraquezas (ambiente interno) contra Oportunidades e Ameaças (ambiente externo). É o ponto de partida para qualquer diagnóstico estratégico sério.', 
        whenToUse: 'No início de ciclos de planejamento anual ou antes de entrar em novos mercados para entender se a organização tem os recursos necessários para vencer.', 
        example: 'Uma varejista identifica que tem logística eficiente (Força), mas sistema de TI defasado (Fraqueza). Vê no crescimento do e-commerce uma Oportunidade, mas no aumento do dólar uma Ameaça aos custos.' 
      },
      { 
        term: 'OKRs (Objectives & Key Results)', 
        definition: 'Metodologia de gestão de metas focada em alinhar toda a organização em torno de objetivos ambiciosos e resultados-chave mensuráveis, geralmente em ciclos trimestrais.', 
        whenToUse: 'Quando a empresa precisa de foco radical, transparência e agilidade na execução, fugindo das métricas de vaidade.', 
        example: 'Objetivo: Tornar-se a plataforma de viagens preferida. KR: Atingir um NPS de 85 e reduzir o tempo de checkout para menos de 2 minutos.' 
      },
      { 
        term: 'Estratégia do Oceano Azul', 
        definition: 'Conceito de criar um novo espaço de mercado inexplorado onde a concorrência é irrelevante, através da inovação de valor que reduz custos e aumenta o valor percebido.', 
        whenToUse: 'Ao enfrentar mercados hiper-competitivos com margens esmagadas, buscando diferenciação radical.', 
        example: 'O Cirque du Soleil eliminou animais (custo alto) e focou em drama e arte (valor alto), criando um híbrido entre circo e teatro que não existia.' 
      },
      { 
        term: 'As 5 Forças de Porter', 
        definition: 'Modelo analítico que avalia a atratividade de uma indústria com base em cinco pressões: rivalidade entre concorrentes, poder de fornecedores, poder de compradores, ameaça de substitutos e novos entrantes.', 
        whenToUse: 'Para decidir se vale a pena investir em um novo setor ou para entender como proteger suas margens de lucro contra pressões externas.', 
        example: 'Uma fabricante de aviões sabe que o poder de compradores é alto (poucas cias aéreas), mas a ameaça de novos entrantes é baixa devido ao altíssimo investimento necessário.' 
      },
      { 
        term: 'Balanced Scorecard (BSC)', 
        definition: 'Sistema de gestão estratégica que equilibra indicadores financeiros tradicionais com medidas de desempenho em três outras perspectivas: clientes, processos internos e aprendizado/crescimento.', 
        whenToUse: 'Quando a diretoria percebe que focar apenas em lucro está prejudicando a saúde de longo prazo da empresa ou a satisfação dos clientes.', 
        example: 'Um banco usa o BSC para garantir que, além das metas de empréstimos (financeiro), os gerentes também foquem em tempo de espera na fila (processos).' 
      },
      { 
        term: 'Matriz BCG', 
        definition: 'Ferramenta de análise de portfólio que classifica produtos ou serviços em quatro categorias (Estrela, Vaca Leiteira, Interrogação e Abacaxi) com base em crescimento de mercado e participação.', 
        whenToUse: 'Para decidir onde alocar investimentos, quais produtos manter e quais descontinuar para manter o fluxo de caixa saudável.', 
        example: 'A Apple trata o iPhone como sua "Vaca Leiteira" (gera caixa estável) para financiar o Vision Pro, que ainda é uma "Interrogação" (alto potencial, mas mercado incipiente).' 
      },
      { 
        term: 'PESTEL', 
        definition: 'Framework que analisa os fatores Políticos, Econômicos, Sociais, Tecnológicos, Ecológicos e Legais que impactam um negócio.', 
        whenToUse: 'Em análises macroambientais de longo prazo, especialmente útil para expansões internacionais.', 
        example: 'Uma empresa de energia solar analisa o fator Legal (subsídios do governo) e Ecológico (pressão por ESG) antes de expandir para a Europa.' 
      },
      { 
        term: 'Cadeia de Valor', 
        definition: 'Conjunto de atividades que uma organização realiza para criar valor para seus clientes, desde a logística de entrada até o serviço pós-venda.', 
        whenToUse: 'Para identificar onde estão os gargalos de eficiência e quais partes da operação são os verdadeiros diferenciais competitivos.', 
        example: 'A logística de entrega rápida da Amazon é a parte central de sua cadeia de valor que gera a vantagem competitiva "conveniência".' 
      },
      { 
        term: 'VRIO', 
        definition: 'Modelo para avaliar os recursos internos de uma empresa: Valioso, Raro, Inimitável e Organizado para capturar valor.', 
        whenToUse: 'Para entender se uma vantagem competitiva é sustentável no longo prazo ou apenas temporária.', 
        example: 'A receita da Coca-Cola é valiosa e rara, mas o seu verdadeiro trunfo VRIO é o sistema de distribuição global organizado.' 
      },
      { 
        term: 'Competências Essenciais (Core Competencies)', 
        definition: 'Recursos ou habilidades únicas que fornecem o valor central da empresa para os clientes e são difíceis de copiar.', 
        whenToUse: 'Ao decidir o que terceirizar e o que manter "dentro de casa". O core business nunca deve ser terceirizado.', 
        example: 'A competência essencial da Disney é o Storytelling. Ela pode terceirizar a fabricação de brinquedos, mas nunca a escrita de roteiros.' 
      },
      { 
        term: 'Hoshin Kanri', 
        definition: 'Metodologia japonesa de desdobramento estratégico que garante que a visão da alta gestão seja traduzida em ações práticas em todos os níveis da empresa.', 
        whenToUse: 'Em organizações grandes onde a comunicação da estratégia se perde entre o board e o chão de fábrica.', 
        example: 'A Toyota usa Hoshin Kanri para garantir que a meta de "Zero Defeitos" seja entendida por quem aperta o parafuso na linha de montagem.' 
      },
      { 
        term: 'Matriz de Ansoff', 
        definition: 'Ferramenta de planejamento de crescimento que oferece quatro estratégias: Penetração de Mercado, Desenvolvimento de Mercado, Desenvolvimento de Produto e Diversificação.', 
        whenToUse: 'Ao buscar novos horizontes de faturamento para decidir o nível de risco que a empresa está disposta a assumir.', 
        example: 'Uma padaria local que começa a vender congelados para supermercados está fazendo "Desenvolvimento de Mercado".' 
      },
      { 
        term: 'Agilidade Organizacional', 
        definition: 'Capacidade de uma empresa de sentir, agir e adaptar-se rapidamente às mudanças do ambiente externo sem perder sua eficiência operacional.', 
        whenToUse: 'Em mercados voláteis (VUCA/BANI) onde o planejamento rígido de 5 anos se torna obsoleto rapidamente.', 
        example: 'Empresas de moda como a Zara que conseguem detectar tendências nas ruas e colocar nas lojas em apenas duas semanas.' 
      },
      { 
        term: 'Gerenciamento de Processos (BPM)', 
        definition: 'Abordagem sistemática para tornar os fluxos de trabalho de uma organização mais eficientes e adaptáveis por meio da modelagem e automação.', 
        whenToUse: 'Quando a empresa cresce e as tarefas começam a ser feitas "de qualquer jeito", gerando desperdícios e falta de padrão.', 
        example: 'Mapear todo o processo de abertura de conta em um banco para reduzir o tempo de 5 dias para 10 minutos via app.' 
      },
      { 
        term: 'Gestão de Crises', 
        definition: 'Conjunto de estratégias e protocolos projetados para ajudar uma organização a lidar com um evento negativo súbito e significativo.', 
        whenToUse: 'Imediato, após falhas de segurança, escândalos éticos ou desastres naturais que afetam a operação ou imagem.', 
        example: 'Uma empresa de alimentos que faz o recall preventivo imediato de um lote suspeito para preservar a confiança da marca.' 
      },
      { 
        term: 'Inovação de Ruptura (Disruption)', 
        definition: 'Processo pelo qual um produto ou serviço começa em aplicações simples na base de um mercado e depois sobe implacavelmente, deslocando concorrentes estabelecidos.', 
        whenToUse: 'Ao analisar ameaças de startups "low-end" ou ao tentar criar um novo mercado simplificando algo complexo.', 
        example: 'A fotografia digital interrompeu a Kodak porque, embora inicialmente tivesse qualidade pior, oferecia conveniência superior.' 
      },
      { 
        term: 'MBO (Management by Objectives)', 
        definition: 'Sistema onde gerentes e subordinados definem metas juntos e as utilizam como base para avaliação de desempenho.', 
        whenToUse: 'Para aumentar o engajamento através da participação direta dos colaboradores na definição de seus próprios KPIs.', 
        example: 'Um vendedor que concorda com o gerente que sua meta será crescer 15% na região Sul, em vez de apenas receber a meta de cima.' 
      },
      { 
        term: 'Matriz de Poder/Interesse', 
        definition: 'Ferramenta de gestão de Stakeholders que classifica os interessados em um projeto para decidir o nível de comunicação necessário com cada um.', 
        whenToUse: 'Em projetos complexos com muitos envolvidos (governo, sindicatos, vizinhos, investidores).', 
        example: 'Informar a prefeitura sobre uma obra (alto poder), mas apenas monitorar grupos de discussão de redes sociais (baixo poder).' 
      },
      { 
        term: 'Modelo de 7S da McKinsey', 
        definition: 'Framework que analisa sete elementos internos (Estratégia, Estrutura, Sistemas, Valores Compartilhados, Estilo, Equipe e Habilidades) para verificar a eficácia organizacional.', 
        whenToUse: 'Durante reestruturações ou fusões para garantir que a cultura e os sistemas estão alinhados com a nova estratégia.', 
        example: 'Perceber que a nova estratégia de "Inovação" não funcionará se o Estilo de liderança for autoritário e punitivo ao erro.' 
      },
      { 
        term: 'Benchmarking', 
        definition: 'Processo contínuo de comparação dos produtos, serviços ou processos de uma empresa com os dos líderes do mercado.', 
        whenToUse: 'Para identificar "gaps" de performance e adotar as melhores práticas do setor.', 
        example: 'Uma cia aérea que estuda os processos de pit-stop da Fórmula 1 para reduzir o tempo de troca de passageiros no portão.' 
      },
      { 
        term: 'Kaizen', 
        definition: 'Filosofia japonesa de "melhoria contínua" que envolve todos os funcionários, desde o CEO até os operários, em pequenas mudanças graduais.', 
        whenToUse: 'Para criar uma cultura de eficiência e eliminação de desperdícios no dia a dia da operação.', 
        example: 'Um operário que sugere mudar a posição de uma ferramenta para economizar 3 segundos por peça produzida.' 
      },
      { 
        term: 'Liderança Situacional', 
        definition: 'Estilo de liderança que propõe que o líder deve ajustar seu comportamento (direção ou suporte) de acordo com o nível de prontidão do liderado.', 
        whenToUse: 'Para gerir equipes diversas, onde alguns precisam de ordens claras e outros apenas de delegação total.', 
        example: 'Ser diretivo com um estagiário novo, mas apenas dar autonomia para o gerente sênior que já domina o setor.' 
      },
      { 
        term: 'Outsourcing Estratégico', 
        definition: 'Prática de contratar terceiros para realizar atividades que não são centrais para a vantagem competitiva da empresa.', 
        whenToUse: 'Para reduzir custos fixos e focar a energia da organização no que ela faz de melhor.', 
        example: 'Um escritório de advocacia que contrata uma empresa externa para cuidar da limpeza e segurança, focando apenas no Direito.' 
      },
      { 
        term: 'Planejamento de Cenários', 
        definition: 'Método estratégico para imaginar diferentes futuros possíveis (Otimista, Pessimista, Realista) e preparar planos para cada um.', 
        whenToUse: 'Em tempos de alta incerteza econômica ou política, onde o "plano único" é perigoso.', 
        example: 'A Shell nos anos 70 que preparou cenários para uma crise do petróleo e saiu fortalecida quando o preço disparou.' 
      },
      { 
        term: 'Pensamento Sistêmico', 
        definition: 'Capacidade de ver a organização como um todo interconectado, onde uma mudança em uma parte afeta inevitavelmente as outras.', 
        whenToUse: 'Para evitar resolver um problema em um setor (ex: vendas) criando um maior em outro (ex: produção/estoque).', 
        example: 'Entender que baixar o preço para bater meta de vendas pode quebrar o fluxo de caixa se a margem não for respeitada.' 
      },
      { 
        term: 'Reengenharia de Processos', 
        definition: 'Repensar e redesenhar radicalmente os processos de negócios para obter melhorias drásticas em custos, qualidade e velocidade.', 
        whenToUse: 'Quando ajustes marginais (Kaizen) não são mais suficientes e a empresa precisa de uma transformação completa para sobreviver.', 
        example: 'Substituir todo o departamento de compras manuais por um sistema de leilão reverso automatizado via IA.' 
      },
      { 
        term: 'Teoria das Restrições (TOC)', 
        definition: 'Metodologia que foca em identificar o "gargalo" (o elo mais fraco) de um sistema e otimizá-lo, pois a produtividade total é limitada por ele.', 
        whenToUse: 'Para aumentar a produção de uma fábrica ou fluxo de serviço sem necessariamente gastar mais dinheiro.', 
        example: 'Perceber que não adianta contratar mais vendedores se a fábrica já está operando no limite de produção.' 
      },
      { 
        term: 'Valor Compartilhado', 
        definition: 'Políticas e práticas operacionais que aumentam a competitividade de uma empresa e, ao mesmo tempo, melhoram as condições sociais e econômicas nas comunidades onde atua.', 
        whenToUse: 'Para alinhar o sucesso do negócio com o progresso social, indo além da filantropia básica.', 
        example: 'A Nestlé que treina pequenos produtores de cacau para serem mais produtivos, garantindo matéria-prima de qualidade e vida digna ao campo.' 
      },
      { 
        term: 'ZBB (Zero-Based Budgeting)', 
        definition: 'Método de orçamento onde cada novo período começa do "zero", e cada despesa deve ser justificada do ponto de vista estratégico, em vez de apenas ajustar o orçamento do ano anterior.', 
        whenToUse: 'Quando a empresa precisa cortar custos profundamente e eliminar gorduras acumuladas historicamente.', 
        example: 'Uma multinacional que exige que cada departamento justifique até as viagens em classe econômica em vez de apenas manter o bônus de viagem do ano passado.' 
      },
      { 
        term: 'Governança Corporativa', 
        definition: 'Conjunto de regras e processos que determinam como uma empresa é dirigida e monitorada, visando equilibrar os interesses de acionistas e diretoria.', 
        whenToUse: 'Essencial antes de abrir capital (IPO) ou ao buscar investimentos externos para garantir transparência e evitar fraudes.', 
        example: 'Criar um conselho administrativo independente para fiscalizar as decisões do fundador e proteger os acionistas minoritários.' 
      }
    ]
  },
  {
    category: 'Finanças & Métricas',
    terms: [
      { 
        term: 'EBITDA (LAJIDA)', 
        definition: 'Métrica que mostra o lucro da empresa antes de descontar juros, impostos, depreciação e amortização. Indica o potencial bruto de geração de caixa.', 
        whenToUse: 'Para comparar a eficiência operacional entre empresas, ignorando decisões contábeis e de estrutura de capital.', 
        example: 'Duas padarias podem ter o mesmo EBITDA operacional, mas uma lucra menos por ter um empréstimo bancário caro para pagar.' 
      },
      { 
        term: 'Burn Rate', 
        definition: 'Velocidade com que uma empresa (geralmente startups) consome seu capital disponível para cobrir despesas antes de se tornar lucrativa.', 
        whenToUse: 'Para monitorar a saúde financeira de negócios em estágio inicial e saber quando será necessária uma nova rodada de investimento.', 
        example: 'Uma startup tem R$ 1 milhão no banco e gasta R$ 100 mil por mês além do que ganha. O seu burn rate é R$ 100k/mês.' 
      },
      { 
        term: 'Runway', 
        definition: 'O tempo que uma empresa tem antes de ficar sem dinheiro, calculado dividindo o saldo em caixa pelo burn rate mensal.', 
        whenToUse: 'Para decisões críticas de corte de custos ou urgência na busca por investidores.', 
        example: 'Se a startup do exemplo anterior tem R$ 1 milhão e queima R$ 100 mil/mês, o seu runway é de 10 meses.' 
      },
      { 
        term: 'Valuation', 
        definition: 'Processo de estimar o valor financeiro de uma empresa, utilizando métodos como Fluxo de Caixa Descontado (DCF) ou múltiplos de mercado.', 
        whenToUse: 'Em processos de venda da empresa, entrada de novos sócios ou rodadas de investimento.', 
        example: 'Investidores avaliam que uma fintech vale R$ 50 milhões com base no crescimento acelerado de sua base de usuários.' 
      },
      { 
        term: 'LTV (Lifetime Value)', 
        definition: 'Valor total que um cliente gera para o negócio durante todo o tempo em que permanece como cliente ativo.', 
        whenToUse: 'Para decidir quanto se pode gastar para adquirir um novo cliente. O segredo é ter LTV muito maior que o CAC.', 
        example: 'Um assinante de academia paga R$ 100/mês e fica, em média, 12 meses. O seu LTV bruto é de R$ 1.200.' 
      },
      { 
        term: 'CAC (Custo de Aquisição de Cliente)', 
        definition: 'A soma de todos os investimentos em Marketing e Vendas dividida pelo número de novos clientes adquiridos no período.', 
        whenToUse: 'Para medir a eficiência dos canais de vendas. Se o CAC for maior que o lucro do cliente, o negócio é insustentável.', 
        example: 'Se você gasta R$ 5.000 em anúncios e traz 50 clientes, seu CAC é de R$ 100.' 
      },
      { 
        term: 'Churn Rate', 
        definition: 'Taxa de cancelamento ou perda de clientes em um determinado período. É o inimigo número um de empresas de assinatura.', 
        whenToUse: 'Para medir a satisfação do cliente e a qualidade do produto. Churn alto indica que o balde está furado.', 
        example: 'Uma operadora de celular que começa o mês com 1000 clientes e termina perdendo 20 tem um churn de 2%.' 
      },
      { 
        term: 'Margem Bruta', 
        definition: 'Percentual de lucro que sobra após subtrair os custos diretos de produção (COGS) da receita total.', 
        whenToUse: 'Para entender se o custo de fabricar o produto está adequado. Margem bruta baixa sugere problemas de eficiência fabril.', 
        example: 'Um sapato vendido a R$ 200 que custa R$ 80 para ser feito tem uma margem bruta de 60% (R$ 120).' 
      },
      { 
        term: 'Margem Líquida', 
        definition: 'O lucro final que sobra para a empresa após todas as despesas (operacionais, impostos e financeiras) serem pagas.', 
        whenToUse: 'Para medir a lucratividade real do negócio para os sócios.', 
        example: 'Uma empresa que fatura R$ 1 milhão e, após pagar tudo, sobra R$ 100 mil no caixa, tem margem líquida de 10%.' 
      },
      { 
        term: 'WACC (Custo Médio Ponderado de Capital)', 
        definition: 'Taxa média que uma empresa paga para financiar suas operações, ponderada entre capital próprio (sócios) e capital de terceiros (bancos).', 
        whenToUse: 'Como taxa mínima de retorno (pedágio) para aceitar novos projetos de investimento.', 
        example: 'Se o WACC é 12%, qualquer projeto que renda apenas 8% deve ser rejeitado pois destrói valor.' 
      },
      { 
        term: 'Capex (Capital Expenditure)', 
        definition: 'Investimento em bens de capital ou ativos físicos, como máquinas, prédios ou tecnologia, que duram mais de um ano.', 
        whenToUse: 'Ao planejar expansão de infraestrutura ou modernização da fábrica.', 
        example: 'Uma logística que compra 20 caminhões novos está fazendo um investimento em Capex.' 
      },
      { 
        term: 'Opex (Operational Expenditure)', 
        definition: 'Gastos contínuos e operacionais necessários para manter o negócio funcionando no dia a dia.', 
        whenToUse: 'Na gestão de custos fixos e eficiência mensal.', 
        example: 'O pagamento de salários, aluguel da sede e contas de luz são despesas de Opex.' 
      },
      { 
        term: 'Fluxo de Caixa Livre (FCF)', 
        definition: 'Dinheiro que sobra para a empresa após pagar todas as despesas operacionais e os investimentos necessários em Capex.', 
        whenToUse: 'Para medir a capacidade real de pagar dividendos aos acionistas ou quitar dívidas sem comprometer o futuro.', 
        example: 'Empresas maduras focam em maximizar o FCF para recomprar ações ou remunerar sócios.' 
      },
      { 
        term: 'Ponto de Equilíbrio (Breakeven)', 
        definition: 'Momento em que o volume de vendas é suficiente para cobrir todos os custos fixos e variáveis, resultando em lucro zero.', 
        whenToUse: 'No planejamento de viabilidade de novos negócios ou unidades.', 
        example: 'Um restaurante sabe que precisa vender 400 pratos por mês apenas para pagar o aluguel e funcionários.' 
      },
      { 
        term: 'GMV (Gross Merchandise Value)', 
        definition: 'Valor total de vendas de mercadorias processadas por uma plataforma (comum em marketplaces). Não é a receita da empresa.', 
        whenToUse: 'Para medir o tamanho e a força de um ecossistema de vendas digital.', 
        example: 'O Mercado Livre reporta bilhões em GMV, mas sua receita real é apenas a comissão (take rate) sobre esse valor.' 
      },
      { 
        term: 'Take Rate', 
        definition: 'Percentual de comissão que uma plataforma ou marketplace cobra por cada transação realizada em seu ambiente.', 
        whenToUse: 'Para definir o modelo de monetização de plataformas intermediárias.', 
        example: 'A App Store cobra um take rate de 30% sobre a venda de aplicativos dos desenvolvedores.' 
      },
      { 
        term: 'ARR (Annual Recurring Revenue)', 
        definition: 'Receita recorrente que uma empresa espera receber em um ano, métrica vital para modelos de assinatura (SaaS).', 
        whenToUse: 'Para projetar crescimento e estabilidade de faturamento de longo prazo.', 
        example: 'Se um software tem R$ 100k em mensalidades este mês, o seu ARR projetado é de R$ 1,2 milhão.' 
      },
      { 
        term: 'MRR (Monthly Recurring Revenue)', 
        definition: 'Versão mensal do ARR. É o oxigênio de negócios que funcionam por assinatura.', 
        whenToUse: 'Para acompanhamento detalhado da evolução do faturamento mês a mês.', 
        example: 'Aumentar o MRR em 5% ao mês é uma meta comum para equipes de vendas de software.' 
      },
      { 
        term: 'DRE (Demonstração do Resultado do Exercício)', 
        definition: 'Relatório contábil que confronta receitas e despesas para mostrar se a empresa deu lucro ou prejuízo em um período.', 
        whenToUse: 'Mensalmente, para prestar contas aos sócios e fisco sobre a saúde contábil.', 
        example: 'O contador apresenta a DRE para mostrar que, apesar de muito caixa, a empresa teve prejuízo contábil devido à depreciação.' 
      },
      { 
        term: 'Capital de Giro', 
        definition: 'Diferença entre os ativos circulantes (dinheiro que entra) e os passivos circulantes (dinheiro que sai no curto prazo). É o fôlego diário.', 
        whenToUse: 'Para garantir que a empresa não quebre por falta de liquidez, mesmo sendo lucrativa no papel.', 
        example: 'Um varejista que vende a prazo mas paga fornecedores à vista precisa de muito capital de giro para aguentar o descasamento.' 
      },
      { 
        term: 'Liquidez Corrente', 
        definition: 'Índice que mede a capacidade da empresa de pagar suas dívidas de curto prazo usando o que tem a receber no mesmo período.', 
        whenToUse: 'Para análise de solvência e risco de crédito por bancos.', 
        example: 'Um índice de 1.5 significa que para cada R$ 1 que a empresa deve, ela tem R$ 1,50 para receber.' 
      },
      { 
        term: 'Solvência', 
        definition: 'Capacidade de uma empresa de cumprir suas obrigações financeiras de longo prazo.', 
        whenToUse: 'Na análise de sustentabilidade do negócio ao longo de anos.', 
        example: 'Uma empresa solvente tem ativos totais maiores que suas dívidas totais acumuladas.' 
      },
      { 
        term: 'Alavancagem', 
        definition: 'Uso de recursos de terceiros (empréstimos) para financiar a expansão de um negócio, visando aumentar o retorno sobre o capital próprio.', 
        whenToUse: 'Quando o custo da dívida é menor do que o retorno que o projeto financiado vai gerar.', 
        example: 'Pegar R$ 1M a 10% ao ano para abrir uma loja que rende 25% de lucro ao ano é uma alavancagem inteligente.' 
      },
      { 
        term: 'Custo de Oportunidade', 
        definition: 'O valor do qual se abre mão ao escolher uma opção em detrimento de outra. Representa o benefício da "segunda melhor opção".', 
        whenToUse: 'Em toda decisão de investimento. Investir na empresa A significa não poder investir o mesmo dinheiro na empresa B.', 
        example: 'Se você deixa R$ 100k parados na conta em vez de aplicar no Tesouro a 12%, seu custo de oportunidade é de R$ 12k/ano.' 
      },
      { 
        term: 'ROI (Retorno sobre Investimento)', 
        definition: 'Relação entre o ganho financeiro obtido e o montante de dinheiro investido em um projeto ou ação específica.', 
        whenToUse: 'Para priorizar projetos. Deve-se focar nos de maior ROI e menor tempo de retorno (Payback).', 
        example: 'Gastar R$ 10k em uma máquina que economiza R$ 2k por mês gera um retorno rápido e alto ROI.' 
      },
      { 
        term: 'ROA (Retorno sobre Ativos)', 
        definition: 'Mede a eficiência da empresa em gerar lucro a partir de seus ativos totais (máquinas, estoque, prédios).', 
        whenToUse: 'Para indústrias pesadas compararem quão bem estão usando sua estrutura física.', 
        example: 'Uma fábrica eficiente gera muito lucro com poucas máquinas (ROA alto).' 
      },
      { 
        term: 'ROE (Retorno sobre Patrimônio Líquido)', 
        definition: 'Mede o lucro gerado em relação ao capital que os sócios investiram. É o principal indicador para o acionista.', 
        whenToUse: 'Para avaliar se vale a pena manter o dinheiro na empresa ou investir em outra coisa.', 
        example: 'Um ROE de 20% significa que os donos ganharam 20 centavos para cada real investido no negócio.' 
      },
      { 
        term: 'Payback', 
        definition: 'Tempo necessário para que o lucro acumulado de um investimento iguale o valor investido inicialmente.', 
        whenToUse: 'Para medir o risco de liquidez de um projeto. Quanto mais rápido o payback, menor o risco de perda.', 
        example: 'Se uma placa solar custa R$ 15k e economiza R$ 300/mês, o payback é de 50 meses.' 
      },
      { 
        term: 'NPV (VPL - Valor Presente Líquido)', 
        definition: 'Cálculo que traz todos os lucros futuros de um projeto para o valor de hoje, descontando a taxa de juros (WACC).', 
        whenToUse: 'A regra de ouro da finança: se o VPL é positivo, o projeto cria valor e deve ser aceito.', 
        example: 'Um projeto que promete R$ 1M em 5 anos vale menos de R$ 1M hoje devido à inflação e juros.' 
      },
      { 
        term: 'IRR (TIR - Taxa Interna de Retorno)', 
        definition: 'A taxa de desconto que faz o VPL de um projeto ser igual a zero. Representa a rentabilidade intrínseca do projeto.', 
        whenToUse: 'Para comparar a rentabilidade de projetos de diferentes tamanhos ou durações.', 
        example: 'Se a TIR do projeto é 20% e a Selic está 10%, o projeto é altamente atrativo.' 
      }
    ]
  },
  {
    category: 'Marketing & Vendas',
    terms: [
      { term: 'Inbound Marketing', definition: 'Atração de clientes por conteúdo relevante.', whenToUse: 'Autoridade e redução de CAC longo prazo.', example: 'Blog com dicas técnicas.' },
      { term: 'Outbound Marketing', definition: 'Abordagem ativa e direta de prospectos.', whenToUse: 'Vendas complexas B2B.', example: 'Cold calls e anúncios diretos.' },
      { term: 'Growth Hacking', definition: 'Experimentos rápidos para crescimento acelerado.', whenToUse: 'Startups em fase de escala.', example: 'Botão de indicação do Dropbox.' },
      { term: 'SEO (Search Engine Optimization)', definition: 'Otimização para aparecer organicamente no Google.', whenToUse: 'Gerar tráfego constante sem custo por clique.', example: 'Estar no topo para "melhor software ERP".' },
      { term: 'Lead Scoring', definition: 'Pontuação de potenciais clientes por interesse e perfil.', whenToUse: 'Priorizar contatos para o time de vendas.', example: 'Lead que baixou 3 ebooks ganha mais pontos.' },
      { term: 'Social Proof (Prova Social)', definition: 'Uso de depoimentos e números para gerar confiança.', whenToUse: 'Páginas de vendas para converter dúvidas em compras.', example: "Usado por 5000 empresas." },
      { term: 'Product-Market Fit', definition: 'Momento em que o produto satisfaz uma forte demanda real.', whenToUse: 'Antes de gastar milhões em marketing.', example: 'Pessoas começam a recomendar o app sozinhas.' },
      { term: 'Brand Equity', definition: 'O valor comercial que vem da percepção da marca.', whenToUse: 'Para cobrar preços premium acima da média.', example: 'Pagar mais por um café da Starbucks.' },
      { term: 'Funil de Vendas (Pipeline)', definition: 'Representação visual da jornada do cliente da descoberta ao fechamento.', whenToUse: 'Gerenciar produtividade do time de vendas.', example: 'Saber quantos leads estão na fase de proposta.' },
      { term: 'Churn Rate', definition: 'Percentual de clientes que cancelam o serviço.', whenToUse: 'Monitorar satisfação e retenção.', example: 'Perder 3% da base de assinantes por mês.' },
      { term: 'Conversão', definition: 'Ação desejada realizada pelo usuário (ex: compra, cadastro).', whenToUse: 'Medir eficácia de anúncios e sites.', example: '1000 visitas geraram 20 vendas (2% de conversão).' },
      { term: 'Account-Based Marketing (ABM)', definition: 'Estratégia focada em contas específicas de alto valor.', whenToUse: 'Vendas B2B para grandes corporações (Enterprise).', example: 'Campanha de anúncios só para diretores da Vale.' },
      { term: 'CTR (Click-Through Rate)', definition: 'Taxa de cliques em relação às impressões do anúncio.', whenToUse: 'Avaliar atratividade de criativos e textos.', example: 'Anúncio visto por 100 pessoas e clicado por 5 (5% CTR).' },
      { term: 'CPC (Custo por Clique)', definition: 'Valor pago cada vez que alguém clica no seu anúncio.', whenToUse: 'Controle de orçamento de mídia paga.', example: 'Gastar R$ 1,50 por cada visita ao site.' },
      { term: 'Persona', definition: 'Personagem fictício que representa seu cliente ideal.', whenToUse: 'Humanizar a comunicação e direcionar o marketing.', example: 'Carlos, 45 anos, dono de pequena indústria.' },
      { term: 'Customer Success (Sucesso do Cliente)', definition: 'Estratégia para garantir que o cliente alcance o resultado esperado.', whenToUse: 'Reter clientes e gerar vendas extras (upsell).', example: 'Acompanhamento mensal para o cliente usar todo o software.' },
      { term: 'Upselling', definition: 'Técnica de vender uma versão mais cara ou superior.', whenToUse: 'Aumentar o ticket médio da venda.', example: 'Oferecer o plano Premium em vez do Basic.' },
      { term: 'Cross-selling', definition: 'Venda de produtos complementares ao principal.', whenToUse: 'Aumentar a profundidade do relacionamento com o cliente.', example: 'Oferecer seguro de vida para quem abriu conta corrente.' },
      { term: 'NPS (Net Promoter Score)', definition: 'Métrica de lealdade: "O quanto você recomendaria a empresa?".', whenToUse: 'Termômetro geral da satisfação da base.', example: 'Notas 9 e 10 são promotores, 0 a 6 são detratores.' },
      { term: 'Branding', definition: 'Gestão da marca e sua percepção no mercado.', whenToUse: 'Diferenciação competitiva de longo prazo.', example: 'Construir imagem de marca inovadora e cool.' },
      { term: 'Omnichannel', definition: 'Integração total de canais físicos e digitais.', whenToUse: 'Experiência de compra sem fricção.', example: 'Comprar no site e trocar na loja física.' },
      { term: 'Copywriting', definition: 'Escrita persuasiva focada em conversão.', whenToUse: 'Anúncios, landing pages e emails de vendas.', example: 'Título que gera urgência e curiosidade.' },
      { term: 'Remarketing', definition: 'Exibir anúncios para quem já visitou seu site.', whenToUse: 'Recuperar carrinhos abandonados e manter a marca na mente.', example: 'Ver o tênis que você olhou ontem em todos os sites hoje.' },
      { term: 'Market Share', definition: 'Fatia de mercado dominada pela empresa.', whenToUse: 'Medir dominância em relação aos concorrentes.', example: 'Ter 40% de todas as vendas de cerveja no país.' },
      { term: 'Posicionamento', definition: 'Lugar único que a marca ocupa na mente do consumidor.', whenToUse: 'Evitar ser visto como "mais um" no mercado.', example: 'Volvo é posicionada como "Segurança".' },
      { term: 'MQL (Marketing Qualified Lead)', definition: 'Potencial cliente que demonstrou interesse real via marketing.', whenToUse: 'Filtrar quem deve ir para o time de pré-vendas.', example: 'Usuário que assistiu a um webinar técnico.' },
      { term: 'SQL (Sales Qualified Lead)', definition: 'Lead que já foi validado pelo comercial como pronto para compra.', whenToUse: 'Focar a energia dos vendedores fechadores.', example: 'Lead que agendou uma demonstração do produto.' },
      { term: 'CRM (Customer Relationship Management)', definition: 'Software e estratégia de gestão do relacionamento com o cliente.', whenToUse: 'Não perder histórico de conversas e oportunidades de vendas.', example: 'Usar o Salesforce para gerir 100 vendedores.' },
      { term: 'Freemium', definition: 'Modelo de negócio com versão grátis e recursos pagos.', whenToUse: 'Aquisição massiva de usuários em tecnologia.', example: 'Spotify ou LinkedIn.' },
      { term: 'Lead Magnet (Isca Digital)', definition: 'Conteúdo gratuito oferecido em troca do contato do lead.', whenToUse: 'Construir lista de contatos qualificados.', example: 'Planilha de gestão financeira grátis.' }
    ]
  },
  {
    category: 'Liderança & Pessoas',
    terms: [
      { term: 'Segurança Psicológica', definition: 'Crença de que ninguém será punido ou humilhado por admitir erros ou dar ideias.', whenToUse: 'Fomentar inovação e evitar acidentes operacionais graves.', example: 'Equipe do Google que admite falhas no código abertamente.' },
      { term: 'Soft Skills', definition: 'Habilidades comportamentais e sociais (empatia, comunicação, resiliência).', whenToUse: 'Contratação e promoção para cargos de liderança.', example: 'Gerente que sabe mediar conflitos entre áreas.' },
      { term: 'Turnover (Rotatividade)', definition: 'Taxa de entrada e saída de funcionários da empresa.', whenToUse: 'Monitorar saúde da cultura e custo de reposição de talentos.', example: 'Perder 20% do time de TI em um único semestre.' },
      { term: 'Liderança Servidora', definition: 'Filosofia onde o líder foca em servir às necessidades do time acima das suas.', whenToUse: 'Criar ambientes de alta confiança e colaboração.', example: 'CEO que pergunta "O que eu posso tirar do seu caminho hoje?".' },
      { term: 'Onboarding', definition: 'Processo de integração de novos colaboradores na cultura e função.', whenToUse: 'Reduzir tempo de rampa e aumentar retenção inicial.', example: 'Semana de treinamento sobre valores e sistemas na entrada.' },
      { term: 'Offboarding', definition: 'Processo de desligamento estruturado de um funcionário.', whenToUse: 'Manter a marca empregadora e coletar feedbacks reais.', example: 'Entrevista de saída para entender por que o talento saiu.' },
      { term: 'Feedforward', definition: 'Foco em sugestões para o futuro em vez de críticas ao passado.', whenToUse: 'Desenvolvimento de competências sem gerar postura defensiva.', example: "Para a próxima reunião, tente focar mais nos dados." },
      { term: 'Matriz Nine Box', definition: 'Ferramenta de avaliação que cruza Desempenho Atual com Potencial Futuro.', whenToUse: 'Planejamento de sucessão e bônus meritocráticos.', example: 'Identificar os "Top Talents" que devem ser promovidos.' },
      { term: 'Employer Branding', definition: 'Estratégias para tornar a empresa um lugar desejado para trabalhar.', whenToUse: 'Atrair talentos de elite sem precisar pagar salários exorbitantes.', example: 'Página de carreira que mostra o dia a dia real do time.' },
      { term: 'Feedback 360 Graus', definition: 'Avaliação onde o funcionário recebe retorno de chefes, pares e subordinados.', whenToUse: 'Ter uma visão imparcial e holística do comportamento do líder.', example: 'Gerente descobre que o time o vê como centralizador.' },
      { term: 'Burnout', definition: 'Síndrome de esgotamento profissional por estresse crônico.', whenToUse: 'Prevenção de saúde mental e perda de produtividade.', example: 'Funcionário que perde a motivação e produtividade por excesso de carga.' },
      { term: 'Employee Experience (EX)', definition: 'Toda a jornada do colaborador dentro da empresa.', whenToUse: 'Aumentar o engajamento e a produtividade orgânica.', example: 'Processo de férias simples, equipamentos bons e cultura clara.' },
      { term: 'Liderança Situacional', definition: 'Ajuste do estilo de liderança conforme a maturidade do liderado.', whenToUse: 'Gerir times heterogêneos com juniores e seniores.', example: 'Ser diretivo com o estagiário e delegador com o especialista.' },
      { term: 'OKR de Pessoas', definition: 'Metas focadas no desenvolvimento humano (clima, treinamento, diversidade).', whenToUse: 'Garantir que o RH não seja apenas operacional.', example: 'Aumentar em 20% a nota de clima organizacional.' },
      { term: 'E-NPS (Employee NPS)', definition: 'Métrica: "Você recomendaria trabalhar aqui para um amigo?".', whenToUse: 'Medir o nível de lealdade e orgulho de pertencimento.', example: 'Notas altas indicam baixa chance de debandada para a concorrência.' },
      { term: 'Quiet Quitting (Desistência Silenciosa)', definition: 'Fazer apenas o mínimo necessário sem se envolver emocionalmente.', whenToUse: 'Detectar desengajamento antes que se torne um pedido de demissão.', example: 'Funcionário que para de dar ideias e só cumpre o horário.' },
      { term: 'Upskilling', definition: 'Treinamento para melhorar as habilidades na função atual.', whenToUse: 'Manter a competitividade técnica do time.', example: 'Curso de IA para o time de redação.' },
      { term: 'Reskilling', definition: 'Treinamento para mudar de função ou aprender algo totalmente novo.', whenToUse: 'Aproveitar talentos internos em áreas que estão crescendo.', example: 'Vendedor que é treinado para virar Customer Success.' },
      { term: 'Lifelong Learning', definition: 'Educação contínua ao longo de toda a vida profissional.', whenToUse: 'Cultura organizacional em tempos de mudanças rápidas.', example: 'Empresa que dá bônus para quem conclui cursos livres.' },
      { term: 'Microgestão', definition: 'Controle excessivo de detalhes mínimos das tarefas dos subordinados.', whenToUse: 'A ser evitado, pois mata a autonomia e motivação.', example: 'Chefe que exige ser copiado em cada email interno.' },
      { term: 'Accountability (Responsabilização)', definition: 'Cultura de assumir a responsabilidade pelas ações e resultados.', whenToUse: 'Eliminar a cultura da desculpa e do "apontar dedos".', example: 'Líder que admite o erro do projeto sem culpar o estagiário.' },
      { term: 'Diversidade & Inclusão (D&I)', definition: 'Estratégia para ter times plurais (gênero, raça, idade, etc) e inclusivos.', whenToUse: 'Gerar inovação e refletir a diversidade do mercado consumidor.', example: 'Conselho administrativo com 50% de mulheres.' },
      { term: 'Inteligência Emocional', definition: 'Capacidade de reconhecer e gerir as próprias emoções e as dos outros.', whenToUse: 'Gestão de crises e liderança de pessoas sob pressão.', example: 'Líder que não explode quando um prazo é perdido.' },
      { term: 'High Performance Teams', definition: 'Equipes que operam com foco total, alta confiança e resultados consistentes.', whenToUse: 'Projetos estratégicos de alta complexidade.', example: 'Esquadrões de elite em tech ou consultoria estratégica.' },
      { term: 'Coaching Executivo', definition: 'Processo de desenvolvimento focado em competências de alta gestão.', whenToUse: 'Preparar diretores para novos desafios ou mudanças de cargo.', example: 'Diretor financeiro que aprende a ser mais inspirador.' },
      { term: 'Mentoria', definition: 'Transferência de experiência de alguém sênior para alguém júnior.', whenToUse: 'Acelerar o desenvolvimento de jovens talentos.', example: 'CEO mentorando os novos trainees da empresa.' },
      { term: 'Cultura Organizacional', definition: 'O "sistema operacional" invisível: como as coisas são feitas aqui.', whenToUse: 'Alinhar comportamentos sem necessidade de regras escritas.', example: 'Cultura de "liberdade com responsabilidade" da Netflix.' },
      { term: 'Talent Pool (Banco de Talentos)', definition: 'Grupo de pessoas mapeadas para futuras oportunidades.', whenToUse: 'Reduzir tempo de contratação em vagas críticas.', example: 'Manter contato com bons candidatos que não passaram em processos anteriores.' },
      { term: 'Planos de Sucessão', definition: 'Estratégia para identificar quem assume cargos chave caso alguém saia.', whenToUse: 'Mitigar risco de descontinuidade do negócio.', example: 'Ter 3 nomes prontos para assumir a diretoria comercial.' },
      { term: 'Salário Emocional', definition: 'Benefícios não financeiros (flexibilidade, propósito, ambiente).', whenToUse: 'Reter talentos em mercados onde a guerra de salários é alta.', example: 'Poder trabalhar de qualquer lugar do mundo.' }
    ]
  },
  {
    category: 'Produto & Inovação',
    terms: [
      { term: 'MVP (Produto Mínimo Viável)', definition: 'Versão mais simples de um produto que permite validar uma ideia com o menor esforço.', whenToUse: 'Testar hipóteses antes de investir em desenvolvimento completo.', example: 'Lançar um app que só tem a função principal para ver se usam.' },
      { term: 'Agile (Agilidade)', definition: 'Mentalidade focada em entregas incrementais, colaboração e resposta rápida a mudanças.', whenToUse: 'Desenvolvimento de software e projetos em ambientes incertos.', example: 'Entregar melhorias no site a cada 15 dias em vez de 1 vez por ano.' },
      { term: 'Scrum', definition: 'Framework ágil que organiza o trabalho em ciclos curtos chamados Sprints.', whenToUse: 'Equipes de tecnologia que precisam de previsibilidade e melhoria contínua.', example: 'Reuniões diárias de 15 minutos para alinhar o time.' },
      { term: 'Kanban', definition: 'Sistema visual para gerir o fluxo de trabalho e evitar sobrecarga.', whenToUse: 'Processos repetitivos de serviço ou suporte.', example: 'Colunas de "Para Fazer", "Fazendo" e "Feito".' },
      { term: 'Design Thinking', definition: 'Abordagem centrada no ser humano para resolver problemas complexos.', whenToUse: 'Criar produtos que os usuários realmente desejam e precisam.', example: 'Observar clientes no banco para redesenhar o caixa eletrônico.' },
      { term: 'UX (User Experience)', definition: 'Toda a percepção e resposta de uma pessoa ao usar um produto ou serviço.', whenToUse: 'Diferenciação competitiva através da facilidade de uso.', example: 'Comprar com apenas 1 clique gera uma ótima UX.' },
      { term: 'UI (User Interface)', definition: 'A parte visual e interativa com a qual o usuário tem contato (telas, botões).', whenToUse: 'Tornar o produto esteticamente agradável e funcional.', example: 'Escolha de cores e fontes que facilitam a leitura no app.' },
      { term: 'Pivot (Pivotar)', definition: 'Mudança estratégica de rumo quando o modelo de negócio atual não funciona.', whenToUse: 'Quando os dados mostram que o mercado quer outra coisa.', example: 'Instagram começou como app de check-in e virou fotos.' },
      { term: 'Product Roadmap', definition: 'Roteiro visual que mostra a evolução planejada do produto no tempo.', whenToUse: 'Alinhar expectativas de investidores, clientes e time técnico.', example: 'No Q1 faremos o login, no Q2 o checkout.' },
      { term: 'Time to Market', definition: 'Tempo decorrido desde a ideia inicial até o lançamento comercial.', whenToUse: 'Bater a concorrência em setores de inovação rápida.', example: 'Lançar a vacina antes das outras farmacêuticas.' },
      { term: 'Inovação Incremental', definition: 'Pequenas melhorias em produtos ou processos existentes.', whenToUse: 'Manter a competitividade e margem de produtos maduros.', example: 'Nova câmera no modelo seguinte do smartphone.' },
      { term: 'Inovação Radical', definition: 'Criação de produtos totalmente novos que mudam o mercado.', whenToUse: 'Busca por liderança absoluta e novos oceanos azuis.', example: 'O lançamento do primeiro iPhone.' },
      { term: 'Product-Led Growth (PLG)', definition: 'Estratégia onde o próprio produto é o principal motor de vendas e retenção.', whenToUse: 'Crescer sem precisar de um time gigante de vendedores.', example: 'Zoom ou Slack, que as pessoas começam a usar sozinhas.' },
      { term: 'Backlog', definition: 'Lista priorizada de tarefas e recursos que o produto precisa ter.', whenToUse: 'Organizar o trabalho futuro do time de desenvolvimento.', example: "Ainda faltam 50 itens para o app estar completo." },
      { term: 'User Story (História do Usuário)', definition: 'Descrição simples de um recurso sob a perspectiva do usuário final.', whenToUse: 'Garantir que o desenvolvedor entenda o valor para o cliente.', example: 'Como cliente, eu quero pagar via PIX para ser mais rápido.' },
      { term: 'Jobs to be Done (JTBD)', definition: 'Teoria que foca no "trabalho" que o cliente contrata o produto para fazer.', whenToUse: 'Entender a verdadeira motivação de compra além do óbvio.', example: 'As pessoas não compram furadeira, compram um quadro na parede.' },
      { term: 'Scalability (Escalabilidade)', definition: 'Capacidade do produto de crescer sem aumentar os custos na mesma proporção.', whenToUse: 'Criar modelos de negócio de alto lucro.', example: 'Software que atende 1 ou 1 milhão de clientes com o mesmo código.' },
      { term: 'Product Discovery', definition: 'Processo de entender o que deve ser construído através de pesquisas e testes.', whenToUse: 'Reduzir o risco de construir algo que ninguém quer comprar.', example: 'Entrevistar 20 clientes antes de codar uma nova função.' },
      { term: 'Minimum Loveable Product (MLP)', definition: 'Versão simples do produto que não é apenas funcional, mas que os usuários amam.', whenToUse: 'Diferenciar-se em mercados onde o funcional já é commodity.', example: 'App de banco que é tão bonito que dá prazer de usar.' },
      { term: 'Feature Creep', definition: 'Excesso de funcionalidades que torna o produto complexo e confuso.', whenToUse: 'A ser evitado para manter o foco e a facilidade de uso.', example: 'Controle remoto de TV com 80 botões que ninguém usa.' },
      { term: 'Product Lifecycle', definition: 'Fases do produto: Introdução, Crescimento, Maturidade e Declínio.', whenToUse: 'Decidir investimentos de marketing e atualizações técnicas.', example: 'TVs de plasma estão na fase de declínio final.' },
      { term: 'Inovação Aberta (Open Innovation)', definition: 'Uso de ideias externas (startups, universidades) para acelerar a inovação interna.', whenToUse: 'Grandes empresas que não conseguem inovar sozinhas.', example: 'Natura que lança desafios para startups criarem novas embalagens.' },
      { term: 'Design System', definition: 'Coleção de padrões e componentes reutilizáveis para design e código.', whenToUse: 'Garantir consistência visual e velocidade de desenvolvimento.', example: 'Botões e menus que são iguais em todo o site do banco.' },
      { term: 'A/B Testing', definition: 'Comparação de duas versões para ver qual performa melhor.', whenToUse: 'Otimizar conversão e usabilidade baseada em dados reais.', example: 'Botão vermelho converteu 10% mais que o verde.' },
      { term: 'Sprint Review', definition: 'Reunião ao final da Sprint para demonstrar o que foi construído.', whenToUse: 'Colher feedback rápido dos stakeholders.', example: 'Mostrar a nova tela de busca para o diretor comercial.' },
      { term: 'Growth Loop', definition: 'Sistemas onde o uso do produto gera novos usuários automaticamente.', whenToUse: 'Crescimento exponencial sustentável.', example: 'Receber convite para reunião no Zoom obriga a baixar o Zoom.' },
      { term: 'Modularização', definition: 'Dividir o produto em partes independentes que se conectam.', whenToUse: 'Facilitar manutenção e atualizações rápidas.', example: 'Carros que usam o mesmo chassi para modelos diferentes.' },
      { term: 'Propósito Massivo Transformador (MTP)', definition: 'Visão ambiciosa que foca em resolver um grande problema global.', whenToUse: 'Engajar times de inovação e atrair talentos visionários.', example: 'SpaceX: Tornar a vida multiplanetária.' },
      { term: 'Value Proposition Canvas', definition: 'Ferramenta para alinhar o produto com as dores e ganhos do cliente.', whenToUse: 'Definição de marketing e desenvolvimento de novos recursos.', example: 'App de entrega foca na dor "fome imediata" e ganho "comodidade".' },
      { term: 'Dívida Técnica', definition: 'Custo implícito de escolher uma solução rápida agora em vez de uma melhor.', whenToUse: 'Monitorar a saúde do código e estabilidade do sistema.', example: 'Código mal feito para lançar no prazo que trava o sistema depois.' }
    ]
  },
  {
    category: 'Tecnologia & Digital',
    terms: [
      { term: 'SaaS (Software as a Service)', definition: 'Modelo onde o software é acessado via nuvem por assinatura.', whenToUse: 'Acesso democrático a tecnologia sem instalação local.', example: 'Netflix ou Salesforce.' },
      { term: 'IA Generativa', definition: 'Inteligência Artificial capaz de criar novos conteúdos (texto, imagem, código).', whenToUse: 'Aumentar produtividade criativa e automação de atendimento.', example: 'ChatGPT ou Midjourney.' },
      { term: 'Cloud Computing (Nuvem)', definition: 'Entrega de serviços de computação (servidores, banco de dados) via Internet.', whenToUse: 'Escalabilidade rápida sem precisar comprar hardware caro.', example: 'AWS (Amazon Web Services).' },
      { term: 'Big Data', definition: 'Volumes massivos de dados que não podem ser processados por métodos tradicionais.', whenToUse: 'Identificar padrões de comportamento de milhões de usuários.', example: 'Netflix sugerindo filmes baseada em bilhões de visualizações.' },
      { term: 'Blockchain', definition: 'Registro distribuído e imutável que garante segurança e transparência.', whenToUse: 'Transações financeiras, contratos inteligentes e rastreabilidade.', example: 'Bitcoin ou rastreamento de gado na cadeia produtiva.' },
      { term: 'IoT (Internet das Coisas)', definition: 'Rede de objetos físicos conectados que coletam e trocam dados.', whenToUse: 'Monitoramento industrial e cidades inteligentes.', example: 'Sensores em máquinas que avisam quando vão quebrar.' },
      { term: 'API (Application Programming Interface)', definition: 'Conjunto de regras que permite que dois softwares conversem entre si.', whenToUse: 'Integrar sistemas diferentes (ex: checkout de loja com banco).', example: 'Pagar com PIX dentro de um app de delivery.' },
      { term: 'Machine Learning (Aprendizado de Máquina)', definition: 'Subcampo da IA que permite que sistemas aprendam com dados.', whenToUse: 'Previsão de vendas e detecção de fraudes em tempo real.', example: 'Banco que bloqueia cartão por "gasto suspeito".' },
      { term: 'Cybersecurity', definition: 'Práticas de proteção de sistemas e dados contra ataques digitais.', whenToUse: 'Proteção de ativos críticos e privacidade de clientes.', example: 'Uso de criptografia e autenticação em dois fatores.' },
      { term: 'DevOps', definition: 'Cultura que une desenvolvimento e operações para entregas rápidas e estáveis.', whenToUse: 'Empresas de tech que precisam atualizar sistemas diariamente.', example: 'O time que programa é o mesmo que garante que o site não caia.' },
      { term: 'Edge Computing', definition: 'Processamento de dados perto de onde eles são gerados (na borda).', whenToUse: 'Aplicações que exigem latência zero (ex: carros autônomos).', example: 'Processar o sensor de freio no carro, não na nuvem lenta.' },
      { term: 'Microserviços', definition: 'Arquitetura que divide um sistema grande em pequenos serviços independentes.', whenToUse: 'Facilitar a manutenção e escala de softwares gigantes.', example: 'O sistema de busca da loja é independente do sistema de pagamentos.' },
      { term: 'No-code / Low-code', definition: 'Plataformas que permitem criar apps com pouco ou nenhum código.', whenToUse: 'Validar ideias rapidamente ou criar ferramentas internas baratas.', example: 'Criar um fluxo de aprovação de férias no Bubble ou Airtable.' },
      { term: 'RPA (Automação Robótica de Processos)', definition: 'Software que imita ações humanas em sistemas digitais para tarefas repetitivas.', whenToUse: 'Reduzir erros humanos em tarefas de preenchimento de dados.', example: 'Robô que lê faturas em PDF e digita no ERP da empresa.' },
      { term: 'Visão Computacional', definition: 'IA que permite que computadores "entendam" imagens e vídeos.', whenToUse: 'Controle de qualidade industrial e segurança por câmeras.', example: 'Câmera que identifica peça com defeito na linha de montagem.' },
      { term: 'Deep Learning', definition: 'Redes neurais profundas que imitam o funcionamento do cérebro humano.', whenToUse: 'Problemas complexos como tradução de voz e direção autônoma.', example: 'Google Tradutor entendendo sotaques diferentes.' },
      { term: 'Omnichannel Digital', definition: 'Integração de todos os pontos de contato digitais do cliente.', whenToUse: 'Oferecer suporte contínuo via WhatsApp, Site e Email.', example: 'Começar o atendimento no chat e terminar no telefone sem repetir dados.' },
      { term: 'Digital Twin (Gêmeo Digital)', definition: 'Cópia virtual idêntica de um objeto ou processo físico.', whenToUse: 'Testar mudanças em fábricas ou aviões antes de fazê-las na vida real.', example: 'Simular o fluxo de ar em uma turbina digital.' },
      { term: '5G', definition: 'Quinta geração de redes móveis, com altíssima velocidade e baixa latência.', whenToUse: 'Viabilizar IoT massivo e cirurgias remotas.', example: 'Baixar um filme 4K em segundos no celular.' },
      { term: 'Soberania de Dados', definition: 'Conceito de que os dados estão sujeitos às leis do país onde são gerados.', whenToUse: 'Conformidade legal internacional (ex: LGPD no Brasil).', example: 'Hospedar dados de brasileiros em servidores no Brasil.' },
      { term: 'Transformação Digital', definition: 'Uso da tecnologia para mudar radicalmente como a empresa gera valor.', whenToUse: 'Sobrevivência de empresas tradicionais na era digital.', example: 'Magazine Luiza deixando de ser loja física para ser plataforma.' },
      { term: 'NLP (Processamento de Linguagem Natural)', definition: 'Área da IA focada na interação entre computadores e linguagem humana.', whenToUse: 'Chatbots inteligentes e análise de sentimento de redes sociais.', example: 'Saber se os tweets sobre a marca são positivos ou negativos.' },
      { term: 'Criptografia', definition: 'Embaralhamento de dados para que apenas o destinatário correto os leia.', whenToUse: 'Segurança de transações bancárias e mensagens privadas.', example: 'Cadeado verde na barra do navegador (HTTPS).' },
      { term: 'Baixa Latência', definition: 'Tempo mínimo de resposta em uma rede digital.', whenToUse: 'Mercado financeiro (HFT) e jogos online competitivos.', example: 'Executar uma ordem de compra de ação em milissegundos.' },
      { term: 'PaaS (Platform as a Service)', definition: 'Plataforma que fornece infraestrutura e ferramentas para criar apps.', whenToUse: 'Times de desenvolvimento que não querem gerir servidores.', example: 'Google App Engine ou Heroku.' },
      { term: 'IaaS (Infrastructure as a Service)', definition: 'Aluguel de servidores e storage puro na nuvem.', whenToUse: 'Controle total sobre a configuração da infraestrutura.', example: 'Amazon EC2.' },
      { term: 'Open Source (Código Aberto)', definition: 'Software cujo código é público e pode ser modificado por qualquer um.', whenToUse: 'Reduzir custos de licença e evitar "lock-in" de fornecedor.', example: 'Sistema operacional Linux ou navegador Firefox.' },
      { term: 'Data Mining (Mineração de Dados)', definition: 'Processo de descobrir padrões em grandes conjuntos de dados.', whenToUse: 'Descobrir correlações de vendas inesperadas.', example: 'Achar que quem compra fralda na sexta também compra cerveja.' },
      { term: 'UX Writing', definition: 'Escrita focada em guiar o usuário dentro de interfaces digitais.', whenToUse: 'Reduzir erros de preenchimento e frustração em apps.', example: 'Mensagem de erro amigável que explica como resolver o problema.' },
      { term: 'Realidade Aumentada (AR)', definition: 'Sobreposição de informações digitais ao mundo físico real.', whenToUse: 'Manutenção industrial remota e visualização de produtos.', example: 'Ver como o sofá novo ficaria na sua sala via câmera do celular.' }
    ]
  },
  {
    category: 'Governança, Risco & Compliance',
    terms: [
      { term: 'Compliance', definition: 'Estar em conformidade com leis, regulamentos e normas internas.', whenToUse: 'Prevenir crimes financeiros e garantir a ética corporativa.', example: 'Treinamento anticorrupção para todos os diretores.' },
      { term: 'ESG (Environmental, Social, Governance)', definition: 'Critérios de sustentabilidade ambiental, social e de governança.', whenToUse: 'Atrair investidores institucionais e melhorar a reputação.', example: 'Meta de lixo zero na fábrica e conselho administrativo diverso.' },
      { term: 'Stakeholders', definition: 'Todas as partes interessadas que afetam ou são afetadas pelo negócio.', whenToUse: 'Tomada de decisão estratégica equilibrada.', example: 'Acionistas, funcionários, vizinhos da fábrica e governo.' },
      { term: 'Gestão de Riscos', definition: 'Identificação, avaliação e mitigação de eventos que podem prejudicar a empresa.', whenToUse: 'Evitar desastres financeiros ou operacionais inesperados.', example: 'Ter um seguro contra ataques hackers ou incêndios.' },
      { term: 'LGPD (Lei Geral de Proteção de Dados)', definition: 'Lei brasileira que regula o tratamento de dados pessoais de clientes e funcionários.', whenToUse: 'Evitar multas milionárias e proteger a privacidade do usuário.', example: 'Pedir consentimento antes de enviar newsletter de vendas.' },
      { term: 'Auditoria Interna', definition: 'Verificação independente de processos e contas para garantir a honestidade.', whenToUse: 'Detectar fraudes ou erros operacionais antes que se tornem graves.', example: 'Conferência surpresa do estoque e fluxo de caixa.' },
      { term: 'Ética Corporativa', definition: 'Conjunto de valores morais que guiam a conduta da empresa e seus membros.', whenToUse: 'Construir confiança de longo prazo com clientes e parceiros.', example: 'Não aceitar presentes de fornecedores em processos de licitação.' },
      { term: 'Conselho de Administração', definition: 'Grupo eleito pelos acionistas para supervisionar a diretoria executiva.', whenToUse: 'Separar quem executa de quem monitora a estratégia.', example: 'Conselho que veta a compra de uma empresa por achá-la arriscada.' },
      { term: 'Transparência (Accountability)', definition: 'Dever de informar claramente as ações e resultados para as partes interessadas.', whenToUse: 'Manter a credibilidade perante o mercado financeiro.', example: 'Publicar relatórios trimestrais de lucro e prejuízo abertamente.' },
      { term: 'Whistleblowing (Canal de Denúncias)', definition: 'Canal anônimo para que funcionários relatem irregularidades.', whenToUse: 'Detectar assédio, corrupção ou roubos internamente.', example: 'Linha direta externa para denúncias de má conduta ética.' },
      { term: 'Due Diligence (Diligência Prévia)', definition: 'Investigação profunda de uma empresa antes de uma fusão ou compra.', whenToUse: 'Evitar comprar "esqueletos no armário" ou passivos ocultos.', example: 'Auditoria jurídica completa antes de assinar contrato de M&A.' },
      { term: 'Conflito de Interesses', definition: 'Situação onde o interesse pessoal de um colaborador colide com o da empresa.', whenToUse: 'Garantir decisões imparciais e puramente profissionais.', example: 'Diretor de compras não pode contratar a empresa da sua própria esposa.' },
      { term: 'Responsabilidade Social Corporativa (CSR)', definition: 'Ações voluntárias da empresa para o bem-estar da comunidade.', whenToUse: 'Gerar impacto positivo local e melhorar o clima organizacional.', example: 'Projeto de educação tecnológica para jovens da periferia.' },
      { term: 'Plano de Continuidade de Negócios (BCP)', definition: 'Estratégia para manter a operação funcionando durante um desastre.', whenToUse: 'Garantir que a empresa não pare se o prédio pegar fogo.', example: 'Servidores espelhados em cidades diferentes.' },
      { term: 'Fiduciary Duty (Dever Fiduciário)', definition: 'Obrigação legal de agir no melhor interesse financeiro de outra pessoa.', whenToUse: 'Gestores de fundos e administradores de patrimônio alheio.', example: 'O gestor do fundo de pensão não pode investir em alto risco por conta própria.' },
      { term: 'KYC (Know Your Customer)', definition: 'Processo de verificação da identidade dos clientes para evitar lavagem de dinheiro.', whenToUse: 'Bancos, corretoras e fintechs em conformidade com o Banco Central.', example: 'Exigir foto do RG e selfie para abrir conta digital.' },
      { term: 'Segregação de Funções', definition: 'Dividir tarefas críticas entre pessoas diferentes para evitar fraudes.', whenToUse: 'Controle interno em departamentos financeiros.', example: 'Quem aprova o pagamento não pode ser quem faz o cadastro do fornecedor.' },
      { term: 'Cultura de Compliance', definition: 'Ambiente onde todos valorizam fazer o certo, não apenas seguir regras.', whenToUse: 'Reduzir custos com fiscalização e multas.', example: 'Funcionário que recusa suborno sem precisar consultar o manual.' },
      { term: 'Passivo Contingente', definition: 'Dívida potencial que depende de um evento futuro (ex: processo judicial).', whenToUse: 'Provisionar dinheiro para possíveis perdas na justiça.', example: 'Separar R$ 1M no balanço para um processo trabalhista em curso.' },
      { term: 'Anti-Bribery (Anticorrupção)', definition: 'Políticas específicas contra o suborno de agentes públicos ou privados.', whenToUse: 'Operar em mercados internacionais com leis rígidas (ex: FCPA).', example: 'Recusar "facilitação" para conseguir alvará de construção.' },
      { term: 'Gestão de Reputação', definition: 'Monitoramento e influência sobre como a marca é vista pelo público.', whenToUse: 'Proteger o valor de mercado contra crises de imagem.', example: 'Resposta rápida e honesta a críticas pesadas nas redes sociais.' },
      { term: 'Marco Regulatório', definition: 'Conjunto de leis que regem um setor específico da economia.', whenToUse: 'Análise de viabilidade de negócios em setores regulados.', example: 'Seguir as normas da ANATEL para vender serviços de internet.' },
      { term: 'Board Advisory', definition: 'Conselho consultivo de especialistas para apoiar a diretoria.', whenToUse: 'Empresas familiares que precisam de visão profissional externa.', example: 'Contratar um ex-CEO sênior para aconselhar o herdeiro novo.' },
      { term: 'Acordo de Acionistas', definition: 'Contrato que regula a relação e os direitos entre os donos da empresa.', whenToUse: 'Prevenir brigas judiciais e definir regras de saída de sócios.', example: 'Cláusula que define quem tem preferência na compra de ações.' },
      { term: 'Sustentabilidade Financeira', definition: 'Capacidade de gerar lucro e caixa constantes ao longo do tempo.', whenToUse: 'Diferenciar crescimento artificial (queima de caixa) de lucro real.', example: 'Startup que foca em breakeven em vez de apenas novos aportes.' },
      { term: 'Risco Sistêmico', definition: 'Risco de colapso de um mercado inteiro ou sistema financeiro.', whenToUse: 'Análise macroeconômica e proteção de portfólio.', example: 'Quebra do Lehman Brothers em 2008 afetando todos os bancos.' },
      { term: 'Auditoria de Terceiros', definition: 'Verificar se os fornecedores seguem as mesmas normas éticas da empresa.', whenToUse: 'Evitar ser cúmplice de trabalho escravo ou crimes ambientais na cadeia.', example: 'Grife que audita as oficinas de costura que a atendem.' },
      { term: 'ISO 31000', definition: 'Norma internacional que estabelece diretrizes para a gestão de riscos.', whenToUse: 'Padronizar a forma como a empresa trata incertezas.', example: 'Seguir o passo-a-passo da ISO para mapear riscos da nova filial.' },
      { term: 'Código de Conduta', definition: 'Documento que resume as regras de comportamento esperadas pela empresa.', whenToUse: 'Dar clareza aos colaboradores sobre o que é permitido ou não.', example: 'Regras sobre uso de redes sociais e vestimenta no escritório.' },
      { term: 'Prevenção à Lavagem de Dinheiro (PLD)', definition: 'Sistemas para identificar dinheiro de origem ilícita no sistema financeiro.', whenToUse: 'Obrigatório para instituições financeiras e imobiliárias.', example: 'Comunicar ao COAF transações em espécie acima de R$ 50 mil.' }
    ]
  },
  {
    category: 'Modelos Mentais',
    terms: [
      { term: 'Antifragilidade', definition: 'Sistemas que não apenas resistem ao caos, mas ficam melhores com ele.', whenToUse: 'Construir empresas resilientes a crises.', example: 'O sistema imunológico ou uma rede de franquias descentralizada.' },
      { term: 'Skin in the Game', definition: 'Ter um risco pessoal real no resultado de uma decisão.', whenToUse: 'Avaliar a confiabilidade de conselhos e opiniões.', example: 'O piloto está no avião; se cair, ele morre com os passageiros.' },
      { term: 'First Principles (Primeiros Princípios)', definition: 'Decompor problemas complexos nos seus elementos básicos e construir a partir daí.', whenToUse: 'Inovação radical onde o passado não serve de guia.', example: 'Elon Musk reconstruindo foguetes pelo custo da matéria-prima.' },
      { term: 'Navalha de Occam', definition: 'Entre duas explicações, a mais simples costuma ser a correta.', whenToUse: 'Diagnóstico de problemas e tomada de decisão ágil.', example: 'Se o site caiu, verifique a internet antes de achar que foi hackeado.' },
      { term: 'Princípio de Pareto (80/20)', definition: '80% dos resultados vêm de 20% dos esforços ou causas.', whenToUse: 'Priorização de tempo, clientes e recursos.', example: '20% dos clientes costumam gerar 80% do lucro total.' },
      { term: 'Círculo de Competência', definition: 'Saber exatamente o que você domina e o que você ignora.', whenToUse: 'Investimentos e novas frentes de negócio para evitar erros fatais.', example: 'Buffett não investe em tech porque não entende como o lucro é gerado.' },
      { term: 'Pensamento de Segunda Ordem', definition: 'Considerar as consequências das consequências de uma ação.', whenToUse: 'Políticas públicas e grandes decisões corporativas.', example: 'Dar bônus por vendas pode gerar vendas ruins que quebram o suporte.' },
      { term: 'Inversão', definition: 'Pensar como evitar o fracasso em vez de como atingir o sucesso.', whenToUse: 'Prever riscos e "furos" em planos estratégicos.', example: 'Como posso garantir que esse projeto seja um desastre total?' },
      { term: 'Viés de Confirmação', definition: 'Tendência de buscar apenas informações que confirmam o que já acreditamos.', whenToUse: 'A ser evitado em reuniões de diretoria para não ignorar riscos.', example: 'Ler apenas jornais que concordam com sua visão política.' },
      { term: 'Viés de Sobrevivência', definition: 'Focar apenas nos casos de sucesso e ignorar os fracassos invisíveis.', whenToUse: 'Análise de mercado e benchmarking para não copiar o erro.', example: 'Copiar a estratégia da Apple sem ver as mil empresas que tentaram e quebraram.' },
      { term: 'Efeito Lindy', definition: 'A expectativa de vida de algo não perecível aumenta com cada dia que sobrevive.', whenToUse: 'Escolher tecnologias e ideias duradouras.', example: 'Um livro que está sendo lido há 50 anos provavelmente será lido por mais 50.' },
      { term: 'Navalha de Hanlon', definition: 'Nunca atribua à maldade o que pode ser explicado pela burrice ou descuido.', whenToUse: 'Gestão de conflitos interpessoais e feedback.', example: 'Achar que o colega te ignorou por mal, quando ele apenas não viu o email.' },
      { term: 'Mapa vs Território', definition: 'A representação da realidade (plano/gráfico) nunca é a própria realidade.', whenToUse: 'Execução estratégica: o plano vai mudar quando o cliente reclamar.', example: 'O plano de negócios previa lucro, mas o cliente real não gostou da cor.' },
      { term: 'Falácia do Custo Irrecuperável', definition: 'Continuar investindo em algo ruim apenas porque já gastou muito dinheiro.', whenToUse: 'Decidir quando cancelar projetos ou fechar filiais deficitárias.', example: 'Ficar no cinema vendo um filme chato só porque pagou o ingresso.' },
      { term: 'Margem de Segurança', definition: 'Diferença entre o valor real e o preço pago, ou entre a capacidade e o uso.', whenToUse: 'Engenharia, finanças e prazos de projetos.', example: 'Uma ponte que suporta 10 toneladas mas permite apenas 5.' },
      { term: 'Ergodicidade', definition: 'Diferença entre a média do grupo e a média do indivíduo ao longo do tempo.', whenToUse: 'Análise de riscos catastróficos que podem te tirar do jogo.', example: 'Se 100 pessoas jogam roleta russa uma vez, a média é boa. Se 1 joga 100 vezes, ele morre.' },
      { term: 'Opcionalidade', definition: 'Ter o direito, mas não a obrigação, de agir conforme as circunstâncias mudam.', whenToUse: 'Estratégia de inovação: muitos experimentos pequenos com risco baixo.', example: 'Testar 10 ideias de produtos; se uma der certo, o ganho é infinito.' },
      { term: 'Ciclo de Feedback (Loops)', definition: 'Sistemas onde o resultado de uma ação volta para influenciar a própria ação.', whenToUse: 'Entender crescimento viral ou espirais de morte de empresas.', example: 'Mais usuários trazem mais dados, que melhoram o produto, que traz mais usuários.' },
      { term: 'Lei das Consequências Não Intencionais', definition: 'Ações complexas sempre geram resultados imprevistos, muitas vezes negativos.', whenToUse: 'Mudanças em sistemas de incentivos ou novas leis.', example: 'Pagar por cobra morta na Índia fez as pessoas criarem cobras em casa.' },
      { term: 'Efeito de Rede', definition: 'O valor de um produto aumenta conforme o número de usuários cresce.', whenToUse: 'Plataformas digitais e redes sociais.', example: 'O WhatsApp só tem valor porque seus amigos também estão lá.' },
      { term: 'Regressão à Média', definition: 'Eventos extremos tendem a ser seguidos por eventos mais próximos da média.', whenToUse: 'Não superestimar um único mês de vendas recorde.', example: 'O time que jogou muito bem hoje provavelmente jogará pior amanhã.' },
      { term: 'Sistemas 1 e 2 (Kahneman)', definition: 'O pensamento rápido/intuitivo (1) vs o pensamento lento/lógico (2).', whenToUse: 'Marketing e tomada de decisão sob estresse.', example: 'Comprar chocolate no caixa é Sistema 1; escolher imóvel é Sistema 2.' },
      { term: 'Teoria dos Jogos', definition: 'Estudo de modelos matemáticos de interação estratégica entre decisores.', whenToUse: 'Guerra de preços e negociações complexas.', example: 'Dilema do prisioneiro aplicado a empresas de telefonia.' },
      { term: 'Equilíbrio de Nash', definition: 'Situação onde nenhum jogador ganha nada mudando sua estratégia sozinho.', whenToUse: 'Entender a estabilidade de mercados saturados.', example: 'Postos de gasolina na mesma esquina com preços quase iguais.' },
      { term: 'Custo de Transação', definition: 'Custo envolvido em fazer uma troca econômica (tempo, busca, burocracia).', whenToUse: 'Decidir se faz sentido criar uma plataforma intermediária.', example: 'O Uber reduziu o custo de transação de achar e pagar um motorista.' },
      { term: 'Tragédia dos Comuns', definition: 'Indivíduos agindo de forma racional esgotam um recurso compartilhado limitado.', whenToUse: 'Gestão ambiental e recursos compartilhados em escritórios.', example: 'Todo mundo pesca o máximo possível até acabar o peixe do lago.' },
      { term: 'Emergência', definition: 'Comportamentos complexos que surgem da interação de regras simples.', whenToUse: 'Cultura organizacional e dinâmicas de mercado.', example: 'Milhões de pássaros voando juntos sem um líder central.' },
      { term: 'Fragilidade de Estresse Único', definition: 'Um sistema que quebra totalmente se uma única parte específica falhar.', whenToUse: 'Identificar "pontos únicos de falha" na operação.', example: 'Empresa que depende de um único fornecedor chinês exclusivo.' },
      { term: 'Janela de Overton', definition: 'O intervalo de ideias toleradas no discurso público em um determinado momento.', whenToUse: 'Comunicação e lançamento de produtos disruptivos.', example: 'Carros elétricos eram "loucura" em 1990 e hoje são a norma.' },
      { term: 'Escassez vs Abundância', definition: 'A mentalidade de que o sucesso de um exige a derrota de outro vs todos podem ganhar.', whenToUse: 'Cultura de parcerias e liderança de times criativos.', example: 'Compartilhar conhecimento para fazer o mercado inteiro crescer.' }
    ]
  }
];
