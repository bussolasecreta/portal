
import React, { useState, useEffect, memo } from 'react';
import { BENEFITS, SAAS_TOOLS, HERO_IMAGES } from '../constants';
import { Page } from '../types';
import Carousel from '../components/Carousel';
import SaaSCarousel from '../components/SaaSCarousel';
import NewsCarousel from '../components/NewsCarousel';
import { ArrowRight, Compass, Rocket, Newspaper, Brain, MessageSquareText, Shield, Zap, Target, Activity, Globe, TrendingUp, Sparkles, LayoutGrid, Clock } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const SIGNALS = [
  "MARKET VOLATILITY: LOW", "GEOPOLITICAL RISK: ELEVATED", "TECH ADOPTION: ACCELERATING", 
  "STRATEGIC CLARITY: MANDATORY", "AI INTEGRATION: CRITICAL", "CAPITAL FLOWS: SHIFTING",
  "GLOBAL INTELLIGENCE: ACTIVE", "NEURAL PROTOCOLS: UPDATED"
];

const INSIGHT_PROMOS = [
  { 
    title: "100 Unidades de Inteligência", 
    desc: "Um repositório técnico denso, categorizado para cobrir todos os pilares da governança corporativa moderna.",
    icon: <LayoutGrid size={24} />
  },
  { 
    title: "Arquitetura de Decisão", 
    desc: "Transformamos conceitos teóricos em protocolos acionáveis para líderes em ambientes de alta pressão.",
    icon: <Target size={24} />
  },
  { 
    title: "Casos de Aplicação Real", 
    desc: "Cada insight é acompanhado de exemplos práticos de mercado, facilitando a visualização do ROI estratégico.",
    icon: <Zap size={24} />
  },
  { 
    title: "Curadoria Executiva", 
    desc: "Filtramos o ruído global para entregar apenas os sinais que realmente movem as engrenagens do seu negócio.",
    icon: <Shield size={24} />
  }
];

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [currentPromoIndex, setCurrentPromoIndex] = useState(0);

  useEffect(() => {
    const heroTimer = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000); 
    
    const promoTimer = setInterval(() => {
      setCurrentPromoIndex((prev) => (prev + 1) % INSIGHT_PROMOS.length);
    }, 4500);

    return () => {
      clearInterval(heroTimer);
      clearInterval(promoTimer);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent, page: Page) => {
    e.preventDefault();
    onNavigate(page);
  };

  return (
    <div className="animate-in fade-in duration-700 bg-white dark:bg-darkBg overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] md:min-h-[95vh] flex items-center bg-slate-950 overflow-hidden">
        
        {/* Animated Background Carousel */}
        <div className="absolute inset-0 z-0">
          {HERO_IMAGES.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-[3000ms] ease-in-out ${
                idx === currentHeroIndex ? 'opacity-50' : 'opacity-0'
              }`}
            >
              <img 
                src={img} 
                alt="" 
                className="w-full h-full object-cover grayscale-[20%] brightness-[0.4] scale-105" 
                loading={idx === 0 ? "eager" : "lazy"}
                decoding="async"
              />
            </div>
          ))}
          
          {/* Decorative Spinning Compass Background */}
          <div className="absolute top-1/2 right-[-10%] md:right-[5%] -translate-y-1/2 opacity-10 pointer-events-none z-10">
            <Compass 
              size={600} 
              strokeWidth={0.5} 
              className="text-[#c5a059] animate-[spin_160s_linear_infinite]" 
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent z-20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-20"></div>
        </div>

        {/* Content Container */}
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 w-full relative z-40 py-12 md:py-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/20 text-[#c5a059] text-[9px] md:text-xs font-black tracking-[0.4em] uppercase mb-6 md:mb-10 animate-in slide-in-from-bottom duration-1000">
              <span className="w-2 h-2 rounded-full bg-[#c5a059] animate-pulse"></span>
              <span>Posicionamento Estratégico</span>
            </div>
            
            <h1 className="serif text-3xl md:text-6xl lg:text-8xl font-bold text-white mb-6 md:mb-10 leading-tight animate-in slide-in-from-bottom duration-1000 delay-100">
              Seu guia <span className="text-[#c5a059] italic">intelectual</span> no caos dos negócios.
            </h1>
            
            <p className="text-base md:text-2xl text-slate-300 mb-10 md:mb-14 leading-relaxed max-w-2xl animate-in slide-in-from-bottom duration-1000 delay-200 font-light">
              A Bússola Secreta oferece clareza estratégica, leitura de mercado e curadoria de ideias para líderes que buscam decisões inteligentes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 animate-in slide-in-from-bottom duration-1000 delay-300">
              <button 
                onClick={(e) => handleNavClick(e, Page.INSIGHTS)}
                className="inline-flex items-center justify-center px-10 py-4 md:px-12 md:py-5 rounded-xl bg-[#c5a059] text-slate-950 font-black text-[10px] md:text-xs uppercase tracking-[0.3em] hover:bg-white transition-all shadow-2xl shadow-[#c5a059]/20 group cursor-pointer"
              >
                Explore os Insights
                <ArrowRight className="ml-3 md:ml-4 transform group-hover:translate-x-1 transition-transform" size={18} />
              </button>
              <button 
                onClick={(e) => handleNavClick(e, Page.ABOUT)}
                className="inline-flex items-center justify-center px-10 py-4 md:px-12 md:py-5 rounded-xl bg-white/5 text-white font-black text-[10px] md:text-xs uppercase tracking-[0.3em] border border-white/10 hover:bg-white/10 transition-all cursor-pointer"
              >
                Nossa Visão
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white dark:from-darkBg via-white/20 dark:via-darkBg/20 to-transparent z-30 pointer-events-none transition-colors duration-300"></div>
      </section>

      {/* Global Signal Ticker */}
      <div className="bg-slate-950 border-y border-white/5 py-4 overflow-hidden whitespace-nowrap relative z-50">
        <div className="flex animate-[scroll_40s_linear_infinite] space-x-12">
          {[...SIGNALS, ...SIGNALS].map((signal, i) => (
            <div key={i} className="flex items-center space-x-4">
              <Activity size={10} className="text-[#c5a059]" />
              <span className="text-white/40 text-[9px] font-black uppercase tracking-[0.3em]">{signal}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Strategic Command Dashboard */}
      <section className="relative z-50 py-20 md:py-32 max-w-[1600px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          
          {/* Main Module: Insights (Big Feature) */}
          <div 
            onClick={(e) => handleNavClick(e, Page.INSIGHTS)}
            className="lg:col-span-7 group bg-slate-950 rounded-[2.5rem] p-10 md:p-16 text-white overflow-hidden relative transition-all duration-700 cursor-pointer hover:shadow-2xl hover:shadow-[#c5a059]/10"
          >
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
              <Globe size={400} className="absolute -right-20 -top-20 text-[#c5a059]" />
            </div>
            <div className="relative z-10">
              <div className="mb-10 flex items-center space-x-4">
                <div className="p-4 bg-[#c5a059]/10 rounded-2xl">
                  <Newspaper className="text-[#c5a059]" size={32} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#c5a059]">Intelligence Terminal</span>
              </div>
              <h2 className="serif text-4xl md:text-7xl font-bold mb-6 leading-none">Global <span className="text-[#c5a059] italic">Intelligence.</span></h2>
              <p className="text-slate-400 text-lg md:text-2xl font-light max-w-xl mb-12 leading-relaxed">
                Acompanhamento em tempo real dos sinais que movem as engrenagens da economia global.
              </p>
              <div className="flex items-center space-x-12">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold serif text-white">24/7</span>
                  <span className="text-[8px] uppercase tracking-widest text-slate-500 font-black">Scan Ativo</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold serif text-white">42</span>
                  <span className="text-[8px] uppercase tracking-widest text-slate-500 font-black">Fontes Elite</span>
                </div>
                <button className="ml-auto w-12 h-12 bg-[#c5a059] rounded-full flex items-center justify-center text-slate-950 transform group-hover:scale-110 transition-all">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Secondary Modules Stack */}
          <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8">
            {/* Mindsets */}
            <div 
              onClick={(e) => handleNavClick(e, Page.MINDSETS)}
              className="flex-1 group bg-white dark:bg-darkCard border border-slate-100 dark:border-slate-800 rounded-[2.5rem] p-10 transition-all duration-500 cursor-pointer hover:border-[#c5a059] dark:hover:border-gold hover:shadow-xl dark:hover:shadow-gold/5"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="p-3 bg-slate-50 dark:bg-darkSurface rounded-xl group-hover:bg-[#c5a059]/10 transition-colors">
                  <Brain className="text-[#c5a059]" size={24} />
                </div>
                <span className="serif text-4xl text-slate-50 dark:text-darkSurface font-black">02</span>
              </div>
              <h3 className="serif text-3xl font-bold text-slate-900 dark:text-white mb-3">Mentalidades</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-light mb-6">A biblioteca de algoritmos mentais dos maiores estrategistas da história.</p>
              <div className="flex items-center text-[9px] font-black uppercase tracking-widest text-[#c5a059] group-hover:translate-x-2 transition-transform">
                <span>Explorar Mentalidades</span>
                <ArrowRight size={14} className="ml-2" />
              </div>
            </div>

            {/* NLP */}
            <div 
              onClick={(e) => handleNavClick(e, Page.NLP)}
              className="flex-1 group bg-white dark:bg-darkCard border border-slate-100 dark:border-slate-800 rounded-[2.5rem] p-10 transition-all duration-500 cursor-pointer hover:border-[#c5a059] dark:hover:border-gold hover:shadow-xl dark:hover:shadow-gold/5"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="p-3 bg-slate-50 dark:bg-darkSurface rounded-xl group-hover:bg-[#c5a059]/10 transition-colors">
                  <MessageSquareText className="text-[#c5a059]" size={24} />
                </div>
                <span className="serif text-4xl text-slate-50 dark:text-darkSurface font-black">03</span>
              </div>
              <h3 className="serif text-3xl font-bold text-slate-900 dark:text-white mb-3">PNL para Negócios</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-light mb-6">Engenharia de influência e precisão linguística aplicada a negociações complexas.</p>
              <div className="flex items-center text-[9px] font-black uppercase tracking-widest text-[#c5a059] group-hover:translate-x-2 transition-transform">
                <span>PNL para Negócios</span>
                <ArrowRight size={14} className="ml-2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Pillars Grid */}
      <section className="py-24 md:py-48 bg-slate-50 dark:bg-darkSurface relative overflow-hidden transition-colors duration-300">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 md:mb-32">
            <div className="inline-flex items-center space-x-3 text-[#c5a059] mb-6">
              <Shield size={20} />
              <span className="text-[10px] font-black uppercase tracking-[0.5em]">The Strategic Framework</span>
            </div>
            <h2 className="serif text-4xl md:text-7xl font-bold text-slate-900 dark:text-white leading-tight mb-8">
              Arquitetura de <span className="text-[#c5a059] italic">Decisão.</span>
            </h2>
            <div className="w-24 h-1 bg-[#c5a059] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { 
                icon: <Compass size={40} />, 
                title: 'Clareza Estratégica', 
                desc: 'Navegação precisa em ambientes de alta volatilidade e incerteza.',
                features: ['Mapeamento de Riscos', 'Direcionamento de Longo Prazo']
              },
              { 
                icon: <Zap size={40} />, 
                title: 'Agilidade de Resposta', 
                desc: 'Redução do tempo entre o sinal de mercado e a execução tática.',
                features: ['Decisões Tipo 1 e 2', 'Iteração Rápida']
              },
              { 
                icon: <Target size={40} />, 
                title: 'Foco de Impacto', 
                desc: 'Alocação de energia intelectual nos 20% das forças que geram 80% do resultado.',
                features: ['Otimização de Recursos', 'Priorização Radical']
              }
            ].map((pillar, i) => (
              <div key={i} className="bg-white dark:bg-darkCard p-10 md:p-14 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl dark:hover:shadow-gold/5 transition-all duration-700 group">
                <div className="text-slate-200 dark:text-slate-700 group-hover:text-[#c5a059] transition-colors mb-10 transform group-hover:scale-110 duration-500 origin-left">
                  {pillar.icon}
                </div>
                <h4 className="serif text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6">{pillar.title}</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base font-light leading-relaxed mb-10">{pillar.desc}</p>
                <div className="space-y-3">
                  {pillar.features.map((f, j) => (
                    <div key={j} className="flex items-center space-x-3 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                      <div className="w-1 h-1 rounded-full bg-[#c5a059]"></div>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SaaS Tools Section */}
      <section className="py-20 md:py-32 bg-white dark:bg-darkBg overflow-hidden relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center space-x-3 text-[#c5a059] mb-4 md:mb-6">
                <Rocket size={20} className="md:w-6 md:h-6" />
                <span className="text-[9px] md:text-xs font-black uppercase tracking-[0.4em]">Inteligência Aplicada</span>
              </div>
              <h2 className="serif text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
                Ferramentas de Propulsão
              </h2>
              {/* Nota de habilitação futura */}
              <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-xl bg-slate-950 dark:bg-gold/10 border border-[#c5a059]/30 text-[#c5a059] animate-pulse">
                <Clock size={14} className="shrink-0" />
                <span className="text-[10px] font-black uppercase tracking-widest italic">Módulo em fase de homologação • Habilitado em breve</span>
              </div>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-base md:text-xl max-w-xs font-light italic border-l-2 md:border-l-3 border-[#c5a059] pl-6 md:pl-8">
              Sistemas desenhados para materializar a visão e acelerar a execução.
            </p>
          </div>
          
          <SaaSCarousel tools={SAAS_TOOLS} />
        </div>
      </section>

      {/* Strategic Insights Feature Section (Rotating Content) */}
      <section className="py-20 md:py-36 bg-slate-50 dark:bg-darkSurface overflow-hidden relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* Rotating Info Block */}
            <div className="relative h-[350px] md:h-[420px]">
              {INSIGHT_PROMOS.map((promo, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                    idx === currentPromoIndex 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
                  }`}
                >
                  <div className="bg-white dark:bg-darkCard p-8 md:p-12 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-2xl h-full flex flex-col justify-center">
                    <div className="w-14 h-14 bg-slate-950 dark:bg-gold rounded-2xl flex items-center justify-center text-[#c5a059] dark:text-slate-950 mb-8 shadow-lg">
                      {promo.icon}
                    </div>
                    <h3 className="serif text-2xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                      {promo.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-base md:text-xl font-light leading-relaxed">
                      {promo.desc}
                    </p>
                  </div>
                </div>
              ))}
              
              {/* Progress Indicators */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex space-x-3">
                {INSIGHT_PROMOS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPromoIndex(i)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      i === currentPromoIndex ? 'w-8 bg-[#c5a059]' : 'w-2 bg-slate-300 dark:bg-slate-700'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Static Content and Call to Action */}
            <div className="text-left">
              <div className="inline-flex items-center space-x-3 text-[#c5a059] mb-6">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <Sparkles size={20} />
                <span className="text-[10px] font-black uppercase tracking-[0.5em]">Intelligence Unit</span>
              </div>
              <h2 className="serif text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-8 leading-tight tracking-tight">
                Strategic <span className="text-[#c5a059] italic">Insights.</span>
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm md:text-lg font-light leading-relaxed mb-12">
                Navegue por nosso repositório denso de inteligência estratégica. Filtramos o ruído do mercado para entregar sinais técnicos e algoritmos de decisão testados.
              </p>
              
              <button 
                onClick={() => onNavigate(Page.INSIGHTS)}
                className="group inline-flex items-center justify-center px-10 py-5 rounded-xl bg-slate-950 dark:bg-gold text-white dark:text-slate-950 font-black text-[10px] md:text-xs uppercase tracking-[0.3em] hover:shadow-2xl transition-all shadow-xl"
              >
                <span>Acessar Repositório Full</span>
                <ArrowRight size={16} className="ml-3 transform group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
};

export default Home;
