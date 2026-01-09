
import React, { useState, useMemo, useEffect, memo } from 'react';
import { GlossaryTerm } from '../constants';
import { COMPREHENSIVE_GLOSSARY } from '../data/glossaryData';
import { useTheme } from '../contexts/ThemeContext';
import { 
  Search, 
  BookMarked, 
  ChevronDown, 
  Compass, 
  CheckCircle2, 
  Lightbulb, 
  Info, 
  ArrowRight,
  Hash,
  ListFilter
} from 'lucide-react';

const GlossaryCard: React.FC<{ 
  item: GlossaryTerm; 
  categoryName: string;
  isExpanded: boolean; 
  onToggle: () => void 
}> = memo(({ item, categoryName, isExpanded, onToggle }) => {
  return (
    <div 
      className={`group bg-white dark:bg-darkCard rounded-xl border transition-all duration-500 overflow-hidden flex flex-col ${
        isExpanded 
        ? 'border-[#c5a059] dark:border-gold shadow-2xl dark:shadow-gold/10 ring-1 ring-[#c5a059]/20' 
        : 'border-slate-100 dark:border-slate-800 hover:border-slate-300 dark:hover:border-gold/50 hover:shadow-md'
      }`}
    >
      <button 
        onClick={onToggle}
        className="w-full p-5 text-left flex items-start justify-between gap-3"
      >
        <div className="flex flex-col">
          <span className="text-[7px] md:text-[8px] font-black text-[#c5a059] dark:text-gold uppercase tracking-[0.2em] mb-1.5 opacity-70">
            {categoryName}
          </span>
          <h3 className={`text-base md:text-lg font-bold leading-tight transition-colors ${isExpanded ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-200 group-hover:text-[#c5a059] dark:group-hover:text-gold'}`}>
            {item.term}
          </h3>
          {!isExpanded && (
            <p className="text-slate-400 dark:text-slate-500 text-[10px] md:text-[11px] mt-1.5 font-light line-clamp-1 italic">
              {item.definition.substring(0, 50)}...
            </p>
          )}
        </div>
        <div className={`mt-1 p-1 rounded-md transition-colors ${isExpanded ? 'bg-[#c5a059]/10 dark:bg-gold/10 text-[#c5a059] dark:text-gold' : 'text-slate-200 dark:text-slate-700 group-hover:text-slate-400'}`}>
          <ChevronDown size={18} className={`transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`} />
        </div>
      </button>

      {isExpanded && (
        <div className="border-t border-slate-50 dark:border-slate-800 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="p-5 md:p-6 space-y-6 bg-slate-50/30 dark:bg-darkSurface/30">
            <div className="relative">
              <div className="text-slate-700 dark:text-gray-300 text-sm md:text-base leading-relaxed font-light bg-white dark:bg-darkSurface p-4 md:p-5 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
                <span className="font-black text-slate-950 dark:text-white block mb-3 text-[9px] md:text-[10px] uppercase tracking-widest flex items-center">
                  <Info size={14} className="mr-2 text-[#c5a059]" /> Definição Técnica
                </span>
                {item.definition}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="space-y-3">
                <h4 className="text-[9px] md:text-[10px] font-black text-slate-950 dark:text-white uppercase tracking-[0.2em] flex items-center">
                  <CheckCircle2 size={14} className="mr-2 text-[#c5a059]" /> Aplicação Estratégica
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm leading-relaxed pl-4 border-l-2 border-slate-200 dark:border-slate-800">
                  {item.whenToUse}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-[9px] md:text-[10px] font-black text-slate-950 dark:text-white uppercase tracking-[0.2em] flex items-center">
                  <Lightbulb size={14} className="mr-2 text-[#c5a059]" /> Caso Prático
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm leading-relaxed pl-4 border-l-2 border-slate-200 dark:border-slate-800 italic">
                  {item.example}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

const Glossary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedTerm, setExpandedTerm] = useState<string | null>(null);
  const [activeNavCategory, setActiveNavCategory] = useState<string | null>(null);
  const { theme } = useTheme();

  const filteredGlossary = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    if (!term) return COMPREHENSIVE_GLOSSARY;

    return COMPREHENSIVE_GLOSSARY.map(cat => ({
      ...cat,
      terms: cat.terms.filter(item => 
        item.term.toLowerCase().includes(term) ||
        item.definition.toLowerCase().includes(term)
      )
    })).filter(cat => cat.terms.length > 0);
  }, [searchTerm]);

  const scrollToSection = (id: string) => {
    setActiveNavCategory(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNavCategory(entry.target.id);
          }
        });
      },
      { threshold: 0.1, rootMargin: "-20% 0px -70% 0px" }
    );

    COMPREHENSIVE_GLOSSARY.forEach((cat) => {
      const el = document.getElementById(cat.category);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="animate-in fade-in duration-1000 bg-[#fdfdfd] dark:bg-darkBg min-h-screen pb-20 md:pb-32 transition-colors duration-300">
      {/* Dynamic Header */}
      <section className="bg-slate-950 pt-20 md:pt-32 pb-32 md:pb-40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#c5a059]/10 blur-[60px] md:blur-[100px] rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#c5a059] text-[8px] md:text-[9px] font-black tracking-[0.3em] md:tracking-[0.4em] uppercase mb-8">
            <Compass size={12} className="md:w-3.5 md:h-3.5" />
            <span>Biblioteca Técnica de Comando</span>
          </div>
          <h1 className="serif text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Glossário <span className="text-[#c5a059] italic">Executivo</span>
          </h1>
          <p className="text-slate-400 text-sm md:text-lg font-light max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed">
            Navegue por conceitos fundamentais da estratégia moderna. Uma ferramenta de precisão para mentes que decidem.
          </p>

          <div className="max-w-2xl mx-auto relative">
            <div className="relative flex items-center bg-white dark:bg-darkCard rounded-xl md:rounded-2xl shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-800 transition-colors duration-300">
              <div className="pl-4 md:pl-6 text-slate-300 dark:text-slate-600">
                <Search size={18} className="md:w-5 md:h-5" />
              </div>
              <input 
                type="text" 
                placeholder="Busque termos ou siglas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 md:px-5 py-5 md:py-8 bg-transparent text-slate-950 dark:text-white font-medium placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none text-base"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-8 md:gap-12 mt-8 md:mt-20">
        
        {/* Sidebar Nav */}
        <aside className="lg:w-72 shrink-0">
          <div className="lg:sticky lg:top-24 space-y-6">
            <div className="hidden lg:block">
              <div className="flex items-center space-x-2 text-slate-400 dark:text-slate-600 mb-6 px-1">
                <ListFilter size={14} className="text-[#c5a059]" />
                <span className="text-[10px] font-black uppercase tracking-widest">Índice Estratégico</span>
              </div>
              <nav className="space-y-1">
                {COMPREHENSIVE_GLOSSARY.map((cat) => (
                  <button
                    key={cat.category}
                    onClick={() => scrollToSection(cat.category)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-[11px] font-bold uppercase tracking-widest transition-all ${
                      activeNavCategory === cat.category 
                      ? 'bg-slate-900 dark:bg-gold text-white dark:text-slate-950 shadow-lg translate-x-1' 
                      : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-darkCard hover:text-slate-900 dark:hover:text-gold'
                    }`}
                  >
                    {cat.category}
                  </button>
                ))}
              </nav>
            </div>

            {/* Mobile Horizontal Nav */}
            <div className="lg:hidden flex items-center space-x-3 overflow-x-auto no-scrollbar pb-6 -mx-6 px-6 border-b border-slate-100 dark:border-slate-800">
              {COMPREHENSIVE_GLOSSARY.map((cat) => (
                <button
                  key={cat.category}
                  onClick={() => scrollToSection(cat.category)}
                  className={`shrink-0 px-5 py-3 rounded-xl text-[9px] font-black uppercase tracking-widest border transition-all ${
                    activeNavCategory === cat.category 
                    ? 'bg-slate-950 dark:bg-gold border-slate-950 dark:border-gold text-white dark:text-slate-950 shadow-md' 
                    : 'bg-white dark:bg-darkCard border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400'
                  }`}
                >
                  {cat.category}
                </button>
              ))}
            </div>

            <div className="hidden md:block bg-slate-50 dark:bg-darkSurface rounded-2xl p-6 border border-slate-100 dark:border-slate-800 transition-colors">
              <div className="flex items-center space-x-2 text-slate-900 dark:text-white mb-3">
                <Hash size={14} className="text-[#c5a059]" />
                <span className="text-[10px] font-black uppercase tracking-widest">Estatísticas</span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-slate-400 dark:text-slate-500 uppercase font-medium">Total de Termos</span>
                  <span className="text-xs font-bold text-slate-900 dark:text-gold">240</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-slate-400 dark:text-slate-500 uppercase font-medium">Categorias</span>
                  <span className="text-xs font-bold text-slate-900 dark:text-gold">8</span>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <div className="flex-grow">
          {filteredGlossary.length > 0 ? (
            <div className="space-y-16 md:space-y-24">
              {filteredGlossary.map((cat) => (
                <section key={cat.category} id={cat.category} className="scroll-mt-28 md:scroll-mt-32">
                  <div className="flex items-center justify-between mb-6 md:mb-8 border-b border-slate-100 dark:border-slate-800 pb-4 md:pb-6 transition-colors">
                    <h2 className="serif text-2xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
                      {cat.category}
                    </h2>
                    <span className="text-[8px] md:text-[10px] font-black text-slate-300 dark:text-slate-700 uppercase tracking-widest">
                      {cat.terms.length} itens
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    {cat.terms.map((item) => (
                      <GlossaryCard 
                        key={item.term} 
                        item={item} 
                        categoryName={cat.category}
                        isExpanded={expandedTerm === item.term}
                        onToggle={() => setExpandedTerm(expandedTerm === item.term ? null : item.term)}
                      />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 md:py-32 bg-white dark:bg-darkCard rounded-2xl md:rounded-3xl border-2 border-dashed border-slate-100 dark:border-slate-800 px-6 transition-colors">
              <BookMarked className="mx-auto text-slate-100 dark:text-slate-900 mb-6" size={80} strokeWidth={1} />
              <h3 className="serif text-xl md:text-2xl text-slate-400 dark:text-slate-600 italic mb-6">Nenhum termo encontrado para sua busca.</h3>
              <button 
                onClick={() => setSearchTerm('')}
                className="px-8 md:px-10 py-4 bg-slate-950 dark:bg-gold text-white dark:text-slate-950 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-[#c5a059] transition-all"
              >
                Resetar Filtros
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Glossary;
