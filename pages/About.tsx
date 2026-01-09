
import React from 'react';
import { Compass, ShieldCheck, Zap, BookOpen, Target, Award, Eye, History } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700 bg-white dark:bg-darkBg transition-colors duration-300">
      {/* Hero Header */}
      <section className="bg-slate-950 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-500 via-transparent to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/20 text-[#c5a059] text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
            <History size={12} />
            <span>Desde 2026</span>
          </div>
          <h1 className="serif text-5xl md:text-7xl font-bold text-white mb-6">O Farol da Estratégia</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
            Navegamos pela complexidade para entregar a clareza necessária aos arquitetos do futuro.
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="serif text-4xl font-bold text-slate-900 dark:text-white transition-colors">A Gênese da Visão</h2>
            <div className="space-y-6 text-slate-600 dark:text-slate-400 text-lg leading-relaxed transition-colors">
              <p>
                A <strong>Bússola Secreta</strong> foi concebida em <strong>2026</strong> sob uma premissa fundamental: no auge da era da informação, o maior ativo não é o dado, mas o discernimento.
              </p>
              <p>
                Nascemos para servir como um porto seguro para líderes, estrategistas e visionários que buscam fugir da superfície. Nossa estrutura foi desenhada para atuar como um filtro intelectual, destilando tendências globais em diretrizes acionáveis e sofisticadas.
              </p>
              <p>
                Acreditamos que a estratégia real é uma forma de arte técnica. Ela exige a frieza dos números e o calor da intuição. Na Bússola Secreta, unificamos esses mundos.
              </p>
            </div>
            
            <div className="flex items-center space-x-6 pt-4">
               <div className="flex flex-col">
                  <span className="serif text-3xl font-bold text-slate-900 dark:text-gold">100%</span>
                  <span className="text-xs text-slate-400 dark:text-slate-600 uppercase tracking-widest font-bold transition-colors">Foco Estratégico</span>
               </div>
               <div className="w-px h-12 bg-slate-100 dark:bg-slate-800 transition-colors"></div>
               <div className="flex flex-col">
                  <span className="serif text-3xl font-bold text-slate-900 dark:text-gold">∞</span>
                  <span className="text-xs text-slate-400 dark:text-slate-600 uppercase tracking-widest font-bold transition-colors">Visão de Futuro</span>
               </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-slate-50 dark:bg-darkSurface rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 p-12 flex items-center justify-center transition-colors">
               <Compass size={300} className="text-[#c5a059] opacity-20 animate-[spin_120s_linear_infinite]" />
               <div className="absolute inset-0 flex items-center justify-center p-12">
                  <div className="bg-white dark:bg-darkCard p-10 rounded-2xl shadow-2xl border border-slate-50 dark:border-slate-800 max-w-sm text-center transition-colors">
                     <Eye className="mx-auto text-[#c5a059] mb-6" size={48} />
                     <h3 className="serif text-2xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">Ver além do óbvio.</h3>
                     <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed transition-colors">
                        Nossa metodologia "Deep Horizon" permite identificar correntes de mercado antes que elas se tornem marés globais.
                     </p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="bg-slate-50 dark:bg-darkSurface py-24 border-y border-slate-100 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="serif text-4xl font-bold text-slate-900 dark:text-white mb-4">Nossos Pilares Inegociáveis</h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">Fundamentos que sustentam cada insight e decisão que entregamos.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Target className="text-[#c5a059]" />, title: 'Precisão Analítica', desc: 'Dados sem contexto são apenas ruído. Transformamos números em inteligência competitiva.' },
              { icon: <ShieldCheck className="text-[#c5a059]" />, title: 'Integridade Intelectual', desc: 'Nossa independência é sua maior garantia. Curadoria livre de conflitos de interesse.' },
              { icon: <Zap className="text-[#c5a059]" />, title: 'Execução Ágil', desc: 'Estratégia sem ação é alucinação. Focamos no que é pragmaticamente possível.' }
            ].map((pillar, i) => (
              <div key={i} className="bg-white dark:bg-darkCard p-10 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-xl dark:hover:shadow-gold/5 transition-all">
                <div className="mb-6">{pillar.icon}</div>
                <h4 className="serif text-xl font-bold text-slate-900 dark:text-white mb-4">{pillar.title}</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote & Future */}
      <section className="py-32 bg-slate-950 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <Award className="mx-auto text-[#c5a059] mb-8" size={48} />
          <h2 className="serif text-3xl md:text-5xl text-white mb-12 italic leading-tight">
            "Não buscamos prever o futuro, mas sim posicionar as ferramentas para que você possa ditá-lo."
          </h2>
          <div className="flex flex-col items-center">
            <div className="w-16 h-px bg-[#c5a059] mb-6"></div>
            <p className="text-slate-500 font-bold uppercase tracking-[0.4em] text-[10px]">
              Equipe Estratégica • Bússola Secreta
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;