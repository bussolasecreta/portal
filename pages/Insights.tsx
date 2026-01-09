
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore, collection, query, orderBy, getDocs, Timestamp } from "firebase/firestore";
import { 
  Search, 
  RefreshCw, 
  Info, 
  Globe,
  BookOpen,
  Filter,
  ArrowUpRight,
  ShieldCheck,
  ChevronRight,
  LayoutGrid,
  Zap
} from 'lucide-react';
import { STRATEGIC_INSIGHTS, StrategicInsight } from '../data/insightsData';

/* ============================
   Firebase Configuration (Legacy Support)
   ============================ */
const getEnv = (key: string) => {
  // @ts-ignore
  if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env[key]) return import.meta.env[key];
  if (typeof process !== 'undefined' && process.env && process.env[key]) return process.env[key];
  return undefined;
};

const firebaseConfig = {
  apiKey: getEnv('VITE_FIREBASE_API_KEY') || getEnv('NEXT_PUBLIC_FIREBASE_API_KEY'),
  authDomain: getEnv('VITE_FIREBASE_AUTH_DOMAIN') || getEnv('NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN'),
  projectId: getEnv('VITE_FIREBASE_PROJECT_ID') || getEnv('NEXT_PUBLIC_FIREBASE_PROJECT_ID'),
  storageBucket: getEnv('VITE_FIREBASE_STORAGE_BUCKET') || getEnv('NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET'),
  messagingSenderId: getEnv('VITE_FIREBASE_MESSAGING_SENDER_ID') || getEnv('NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID'),
  appId: getEnv('VITE_FIREBASE_APP_ID') || getEnv('NEXT_PUBLIC_FIREBASE_APP_ID'),
};

const isConfigValid = !!(firebaseConfig.apiKey && firebaseConfig.projectId);
let db: any = null;
if (isConfigValid) {
  try {
    const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
    db = getFirestore(app);
  } catch (error) {
    console.error("Firebase init error:", error);
  }
}

const InsightCard: React.FC<{ insight: StrategicInsight }> = ({ insight }) => (
  <article className="group bg-white dark:bg-darkCard border border-slate-100 dark:border-slate-800 rounded-2xl p-6 md:p-7 lg:p-8 hover:shadow-2xl dark:hover:shadow-gold/5 transition-all duration-500 flex flex-col h-full border-b-4 hover:border-b-[#c5a059]">
    <div className="flex items-center justify-between mb-5 md:mb-6">
      <span className="px-2.5 py-1 bg-slate-900 dark:bg-darkSurface text-white dark:text-gold text-[7px] md:text-[8px] font-black uppercase tracking-widest rounded-md">
        {insight.category}
      </span>
      <span className="text-slate-300 dark:text-slate-700 text-[9px] md:text-[10px] font-bold">
        #{insight.id.toString().padStart(3, '0')}
      </span>
    </div>
    
    <h3 className="serif text-xl md:text-2xl font-bold mb-4 leading-tight group-hover:text-[#c5a059] dark:text-white transition-colors">
      {insight.title}
    </h3>
    
    <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base mb-6 font-light leading-relaxed">
      {insight.description}
    </p>
    
    <div className="mt-auto pt-6 border-t border-slate-50 dark:border-slate-800/50">
      <div className="bg-slate-50 dark:bg-darkSurface/60 p-4 md:p-5 rounded-xl border border-slate-100 dark:border-slate-800/40 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-[#c5a059]/30"></div>
        <h4 className="text-[8px] md:text-[9px] font-black text-[#c5a059] uppercase tracking-widest mb-2.5 flex items-center">
          <Zap size={10} className="mr-1.5 fill-[#c5a059]/20" /> Aplicação Prática
        </h4>
        <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm leading-relaxed italic">
          "{insight.example}"
        </p>
      </div>
    </div>
  </article>
);

const Insights: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('Todos');
  
  const categories = ['Todos', 'Estratégia', 'Liderança', 'Operações', 'Tecnologia', 'Finanças', 'Inovação'];

  const filteredInsights = useMemo(() => {
    return STRATEGIC_INSIGHTS.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            item.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'Todos' || item.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  return (
    <div className="animate-in fade-in duration-700 min-h-screen bg-white dark:bg-darkBg pb-24 transition-colors duration-300">
      {/* Hero Header - Responsividade Otimizada */}
      <div className="bg-slate-950 text-white pt-20 md:pt-32 pb-28 md:pb-44 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 md:w-1/3 h-full opacity-10 pointer-events-none">
          <Globe size={450} className="absolute -right-24 -top-24 text-[#c5a059]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-3 text-[#c5a059] mb-6 md:mb-8">
              <span className="w-8 md:w-12 h-px bg-[#c5a059]" />
              <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em]">Institutional Intelligence</span>
            </div>
            <h1 className="serif text-3xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight">
              Strategic <span className="text-[#c5a059] italic">Insights</span>
            </h1>
            <p className="text-slate-400 text-sm md:text-lg lg:text-xl font-light leading-relaxed max-w-2xl">
              Repositório institucional de inteligência estratégica para lideranças. Um guia técnico para a navegação em ambientes de alta incerteza.
            </p>
          </div>
        </div>
      </div>

      {/* Repository Controls - Melhor visibilidade em Notebooks */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 -mt-12 md:-mt-20 relative z-20">
        <div className="bg-white dark:bg-darkCard rounded-2xl md:rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-slate-800 p-5 md:p-8 lg:p-10 transition-colors duration-300">
          <div className="flex flex-col lg:flex-row gap-6 lg:items-center justify-between mb-8">
            <div className="relative w-full max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 dark:text-slate-600" size={18} />
              <input 
                type="text" 
                placeholder="Filtrar por tema ou palavra-chave..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 md:py-4 bg-slate-50 dark:bg-darkSurface border-none rounded-xl text-xs md:text-sm dark:text-gray-200 focus:ring-2 focus:ring-[#c5a059]/20 transition-all shadow-inner"
              />
            </div>
            <div className="flex items-center justify-between md:justify-end space-x-4">
               <div className="flex items-center space-x-2 text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  <LayoutGrid size={14} />
                  <span>{filteredInsights.length} Unidades de Inteligência</span>
               </div>
            </div>
          </div>

          <div className="flex items-center space-x-3 overflow-x-auto pb-2 no-scrollbar scroll-smooth snap-x snap-mandatory">
            <Filter size={14} className="text-[#c5a059] shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 md:px-5 py-2 md:py-2.5 rounded-full text-[8px] md:text-[9px] font-black uppercase tracking-widest border transition-all whitespace-nowrap snap-start ${
                  activeCategory === cat 
                  ? 'bg-slate-950 dark:bg-gold border-slate-950 dark:border-gold text-white dark:text-slate-950 shadow-lg scale-105' 
                  : 'bg-white dark:bg-darkSurface border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:border-[#c5a059] hover:text-[#c5a059]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid Area - Otimizado para 1, 2 e 3 colunas */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mt-12 md:mt-20 lg:mt-24">
        {filteredInsights.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {filteredInsights.map(insight => (
              <InsightCard key={insight.id} insight={insight} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 md:py-32 bg-slate-50 dark:bg-darkSurface rounded-3xl border border-dashed border-slate-200 dark:border-slate-800 mx-4">
            <BookOpen className="mx-auto text-slate-200 dark:text-slate-800 mb-6" size={64} strokeWidth={1} />
            <h3 className="serif text-xl md:text-2xl text-slate-400 dark:text-slate-600 italic px-6">Nenhum insight estratégico encontrado para esta busca.</h3>
            <button 
              onClick={() => { setSearchTerm(''); setActiveCategory('Todos'); }}
              className="mt-8 px-8 py-3 bg-slate-900 dark:bg-gold text-white dark:text-slate-950 rounded-xl text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] shadow-xl"
            >
              Resetar Repositório
            </button>
          </div>
        )}
      </div>

      {/* Bottom Governance Section */}
      <section className="max-w-4xl mx-auto px-6 mt-24 md:mt-32 text-center">
        <div className="inline-flex items-center space-x-2 text-slate-300 dark:text-slate-700 mb-6">
          <ShieldCheck size={20} md:size={24} />
          <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em]">Protocolo de Governança Intelectual</span>
        </div>
        <p className="text-slate-400 dark:text-slate-500 text-[10px] md:text-xs lg:text-sm font-light leading-relaxed px-4">
          Cada insight neste repositório é validado por nossa unidade de inteligência estratégica. O conteúdo é atualizado trimestralmente para refletir as mudanças nas dinâmicas de poder e mercado global.
        </p>
      </section>
    </div>
  );
};

export default Insights;
