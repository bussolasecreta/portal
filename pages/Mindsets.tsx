
import React, { useState, useMemo, memo } from 'react';
import { MINDSETS_DATA, MindsetProfile } from '../data/mindsetsData';
import { useTheme } from '../contexts/ThemeContext';
import { 
  Search, 
  Brain, 
  ChevronDown, 
  Zap,
  Fingerprint,
  Trophy,
  ChevronRight,
  MessageCircle,
  Instagram,
  Copy,
  CheckCircle2,
  ShieldCheck,
  Star,
  Sparkles
} from 'lucide-react';

const MindsetCard: React.FC<{ profile: MindsetProfile }> = memo(({ profile }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const { theme } = useTheme();

  const shareText = `Decodificando o Protocolo Estratégico de ${profile.name}. Maestria instalada via @bussolasecreta.`;
  const shareUrl = window.location.href;

  const handleWhatsAppShare = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`;
    window.open(url, '_blank');
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Protocolo ${profile.name} | Bússola Secreta`,
          text: shareText,
          url: shareUrl,
        });
      } catch (err) {
        console.log('Compartilhamento cancelado');
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <div 
      className={`group relative bg-white dark:bg-darkCard transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        isExpanded 
        ? 'col-span-full z-30 shadow-[0_50px_100px_-20px_rgba(197,160,89,0.15)] rounded-[1.5rem] md:rounded-[2.5rem] border-[#c5a059] dark:border-gold ring-1 ring-[#c5a059]/30' 
        : 'hover:shadow-xl dark:hover:shadow-gold/5 border border-slate-100 dark:border-slate-800 rounded-[1.2rem] md:rounded-[1.5rem] hover:-translate-y-1'
      }`}
    >
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-full text-left transition-all duration-700 ${isExpanded ? 'p-6 md:p-14' : 'p-5 md:p-8'}`}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6">
          <div className="flex items-center space-x-4 md:space-x-6">
            <div className={`shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center transition-all duration-700 border ${
              isExpanded 
              ? 'bg-slate-950 dark:bg-gold text-[#c5a059] dark:text-slate-950 border-slate-900 dark:border-gold scale-105 md:scale-110 shadow-lg' 
              : 'bg-slate-50 dark:bg-darkSurface text-slate-300 dark:text-slate-600 border-slate-50 dark:border-slate-800 group-hover:bg-[#c5a059]/5 dark:group-hover:bg-gold/5 group-hover:text-[#c5a059] dark:group-hover:text-gold'
            }`}>
              <Fingerprint size={isExpanded ? 24 : 20} className="md:w-7 md:h-7" strokeWidth={1.5} />
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-[7px] md:text-[8px] font-black text-[#c5a059] dark:text-gold uppercase tracking-[0.2em] md:tracking-[0.3em] px-2 py-0.5 md:py-1 bg-[#c5a059]/10 dark:bg-gold/10 rounded-full border border-[#c5a059]/20 dark:border-gold/20">
                  {profile.category}
                </span>
                <span className="text-[7px] md:text-[8px] font-bold text-slate-300 dark:text-slate-600 uppercase tracking-widest">
                  Cod. {profile.id.toString().padStart(3, '0')}
                </span>
              </div>
              <h3 className={`serif text-lg md:text-3xl font-bold transition-all ${isExpanded ? 'text-slate-950 dark:text-white' : 'text-slate-800 dark:text-slate-200'}`}>
                {profile.name}
              </h3>
              <p className="text-slate-400 dark:text-slate-500 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] mt-0.5 opacity-80">
                {profile.archetype}
              </p>
            </div>
          </div>
          <div className={`hidden md:flex p-2.5 rounded-full transition-all duration-500 ${isExpanded ? 'bg-[#c5a059] dark:bg-gold text-white dark:text-slate-950 rotate-180 shadow-lg' : 'text-slate-200 dark:text-slate-700 group-hover:text-[#c5a059] dark:group-hover:text-gold'}`}>
            <ChevronDown size={24} />
          </div>
        </div>

        {!isExpanded && (
          <div className="mt-4 md:mt-8 flex items-center justify-between border-t border-slate-50 dark:border-slate-800 pt-4 md:pt-5 transition-colors">
            <p className="text-slate-500 dark:text-slate-400 text-[10px] md:text-[11px] font-light italic flex items-center line-clamp-1">
              <Zap size={10} className="mr-2 text-[#c5a059] shrink-0" /> {profile.coreIdea}
            </p>
            <span className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-[#c5a059] dark:text-gold opacity-0 md:group-hover:opacity-100 transition-all flex items-center translate-x-2 md:group-hover:translate-x-0 shrink-0 ml-4">
              Inspecionar <ChevronRight size={10} className="ml-1" />
            </span>
          </div>
        )}
      </button>

      {isExpanded && (
        <div className="px-6 md:px-14 pb-10 md:pb-14 animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
            
            {/* Intel Section */}
            <div className="lg:col-span-8 space-y-8 md:space-y-12">
              <div className="relative">
                <div className="hidden md:block absolute -left-6 top-0 w-1 h-full bg-[#c5a059]/10 dark:bg-gold/10 rounded-full"></div>
                <h4 className="text-[9px] md:text-[10px] font-black text-[#c5a059] dark:text-gold uppercase tracking-[0.3em] md:tracking-[0.4em] mb-4 md:mb-6 flex items-center">
                  <Brain size={14} className="mr-3" /> Protocolo Estratégico
                </h4>
                <p className="serif text-lg md:text-2xl text-slate-800 dark:text-gray-100 leading-relaxed font-medium">
                  {profile.strategicProtocol}
                </p>
              </div>

              {/* Box Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                <div className="bg-slate-950 dark:bg-darkSurface p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group/box transition-colors duration-300">
                  <Sparkles className="absolute top-4 right-4 text-[#c5a059]/20" size={20} />
                  <h5 className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] mb-4 md:mb-6 text-[#c5a059]">Neuro-Instalação</h5>
                  <p className="text-slate-300 dark:text-gray-300 text-xs md:text-sm font-light leading-relaxed">
                    {profile.neuralInstallation}
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-darkSurface p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] border border-slate-100 dark:border-slate-800 group/box relative overflow-hidden transition-colors duration-300">
                  <ShieldCheck className="absolute top-4 right-4 text-slate-200 dark:text-slate-800" size={20} />
                  <h5 className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] mb-4 md:mb-6 text-slate-400 dark:text-slate-500">Impacto no Tabuleiro</h5>
                  <p className="text-slate-600 dark:text-gray-400 text-xs md:text-sm font-light leading-relaxed">
                    {profile.marketImpact}
                  </p>
                </div>
              </div>

              {/* Habits Section */}
              <div className="pt-4 md:pt-8">
                <h4 className="text-[9px] md:text-[10px] font-black text-slate-950 dark:text-white uppercase tracking-[0.3em] md:tracking-[0.4em] mb-6 md:mb-8 flex items-center">
                  <Star size={14} className="mr-3 text-[#c5a059]" /> Rituais de Poder
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  {profile.habits.map((habit, i) => (
                    <div key={i} className="flex items-start space-x-3 p-4 bg-white dark:bg-darkSurface border border-slate-50 dark:border-slate-800 rounded-xl md:rounded-2xl hover:border-[#c5a059]/30 dark:hover:border-gold/30 transition-colors shadow-sm">
                      <div className="shrink-0 w-5 h-5 rounded-full bg-[#c5a059]/10 dark:bg-gold/10 flex items-center justify-center text-[#c5a059] dark:text-gold text-[9px] font-bold">
                        {i + 1}
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">{habit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Side Actions & Social */}
            <div className="lg:col-span-4 space-y-6 md:space-y-10">
              <div className="p-6 md:p-10 bg-white dark:bg-darkSurface border border-slate-100 dark:border-slate-800 rounded-[1.5rem] md:rounded-[2.5rem] shadow-sm transition-colors duration-300">
                <h5 className="text-[8px] md:text-[9px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-[0.4em] mb-6">Propagar Inteligência</h5>
                <div className="space-y-3">
                  <button 
                    onClick={handleWhatsAppShare}
                    className="w-full py-3.5 bg-[#25D366] text-white rounded-xl font-black text-[9px] uppercase tracking-[0.2em] flex items-center justify-center space-x-3 hover:opacity-90 transition-all"
                  >
                    <MessageCircle size={16} />
                    <span>WhatsApp</span>
                  </button>
                  <button 
                    onClick={handleNativeShare}
                    className="w-full py-3.5 bg-slate-950 dark:bg-darkBg text-white rounded-xl font-black text-[9px] uppercase tracking-[0.2em] flex items-center justify-center space-x-3 hover:bg-slate-800 dark:hover:bg-slate-900 transition-all border dark:border-slate-800"
                  >
                    <Instagram size={16} />
                    <span>Share / Story</span>
                  </button>
                  <button 
                    onClick={copyToClipboard}
                    className={`w-full py-3.5 rounded-xl font-black text-[9px] uppercase tracking-[0.2em] flex items-center justify-center space-x-3 border-2 transition-all ${
                      copySuccess ? 'bg-emerald-50 dark:bg-emerald-500/10 border-emerald-500 text-emerald-600' : 'bg-white dark:bg-transparent border-slate-100 dark:border-slate-800 text-slate-400 dark:text-slate-500 hover:border-[#c5a059] dark:hover:border-gold hover:text-[#c5a059] dark:hover:text-gold'
                    }`}
                  >
                    {copySuccess ? <CheckCircle2 size={16} /> : <Copy size={16} />}
                    <span>{copySuccess ? 'Copiado!' : 'Copiar Link'}</span>
                  </button>
                </div>
                <p className="mt-6 text-[7px] md:text-[8px] text-center text-slate-400 dark:text-slate-600 uppercase tracking-widest font-bold">
                  @bussolasecreta
                </p>
              </div>

              <div className="p-6 md:p-10 bg-[#c5a059]/5 dark:bg-gold/5 border border-[#c5a059]/10 dark:border-gold/10 rounded-[1.5rem] md:rounded-[2.5rem] relative overflow-hidden">
                <p className="text-slate-600 dark:text-gray-400 text-xs italic font-light leading-relaxed relative z-10">
                   "A maestria não é um evento isolado, é the system que você instala hoje para colher o amanhã."
                </p>
              </div>

              <button 
                onClick={() => setIsExpanded(false)}
                className="w-full py-4 border-2 border-slate-950 dark:border-white text-slate-950 dark:text-white rounded-xl md:rounded-2xl font-black text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] hover:bg-slate-950 dark:hover:bg-white hover:text-white dark:hover:text-slate-950 transition-all"
              >
                Encerrar Inspeção
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

const Mindsets: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('Tudo');

  const categories = ['Tudo', 'Pioneiros', 'Tecnologia', 'Finanças', 'Varejo', 'Cultura', 'LatAm', 'Nova Economia'];

  const filteredMindsets = useMemo(() => {
    return MINDSETS_DATA.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           item.coreIdea.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.archetype.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'Tudo' || item.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  return (
    <div className="animate-in fade-in duration-1000 bg-[#fafafa] dark:bg-darkBg min-h-screen pb-20 md:pb-40 transition-colors duration-300">
      {/* Header Section */}
      <section className="bg-slate-950 pt-20 md:pt-28 pb-32 md:pb-56 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] md:w-[1200px] h-[600px] md:h-[1200px] bg-[radial-gradient(circle_at_center,_#c5a059_0%,_transparent_70%)] blur-[80px] md:blur-[120px] opacity-20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 md:space-x-3 px-4 md:px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[#c5a059] text-[8px] md:text-[10px] font-black tracking-[0.3em] md:tracking-[0.5em] uppercase mb-8 md:mb-12">
            <Trophy size={12} className="md:w-3.5 md:h-3.5" />
            <span>The Council of 100 • v3.0</span>
          </div>
          <h1 className="serif text-4xl md:text-9xl font-bold text-white mb-6 md:mb-10 leading-tight md:leading-none tracking-tighter">
            Protocolo <span className="text-[#c5a059] italic">Neural.</span>
          </h1>
          <p className="text-slate-400 text-sm md:text-2xl font-light max-w-3xl mx-auto leading-relaxed mb-12 md:mb-20">
            A biblioteca definitiva de algoritmos mentais. <br className="hidden md:block" />
            <strong className="text-white">Instale o código de execução dos mestres.</strong>
          </p>

          <div className="max-w-3xl mx-auto relative group">
            <div className="relative flex items-center bg-white dark:bg-darkCard rounded-2xl md:rounded-[2rem] shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-800 p-1 md:p-2 transition-colors duration-300">
              <div className="pl-4 md:pl-6 text-slate-300 dark:text-slate-600">
                <Search size={20} className="md:w-6 md:h-6" />
              </div>
              <input 
                type="text" 
                placeholder="Pesquisar inteligência..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 md:px-6 py-4 md:py-6 bg-transparent text-slate-950 dark:text-white font-medium placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none text-base md:text-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Navigation & Results */}
      <div className="max-w-7xl mx-auto px-6 -mt-12 md:-mt-16 relative z-20">
        <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar pb-8 md:pb-12 -mx-6 px-6 md:justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl text-[8px] md:text-[10px] font-black uppercase tracking-widest transition-all border whitespace-nowrap ${
                activeCategory === cat 
                ? 'bg-slate-950 dark:bg-gold border-slate-950 dark:border-gold text-white dark:text-slate-950 shadow-xl scale-105' 
                : 'bg-white dark:bg-darkCard border-slate-100 dark:border-slate-800 text-slate-400 dark:text-slate-500 hover:border-[#c5a059] dark:hover:border-gold hover:text-[#c5a059] dark:hover:text-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredMindsets.map((profile) => (
            <MindsetCard key={profile.id} profile={profile} />
          ))}
        </div>

        {filteredMindsets.length === 0 && (
          <div className="text-center py-20 md:py-48 bg-white dark:bg-darkCard rounded-[2rem] md:rounded-[4rem] border-2 border-dashed border-slate-100 dark:border-slate-800 px-6 transition-colors duration-300">
            <Brain className="mx-auto text-slate-100 dark:text-slate-900 mb-6 md:mb-8" size={100} strokeWidth={0.5} />
            <h3 className="serif text-2xl md:text-4xl text-slate-300 dark:text-slate-700 italic mb-8">Nenhuma inteligência mapeada para este critério.</h3>
            <button 
              onClick={() => { setSearchTerm(''); setActiveCategory('Tudo'); }}
              className="px-8 md:px-12 py-4 md:py-5 bg-slate-950 dark:bg-gold text-white dark:text-slate-950 rounded-xl md:rounded-2xl font-black uppercase tracking-widest text-[10px] md:text-xs hover:bg-[#c5a059] dark:hover:bg-white transition-all"
            >
              Resetar Filtros
            </button>
          </div>
        )}
      </div>

      {/* Footer Quote */}
      <section className="max-w-4xl mx-auto px-6 py-20 md:py-48 text-center">
        <div className="w-12 md:w-16 h-px bg-[#c5a059] mx-auto mb-8 md:mb-12"></div>
        <h2 className="serif text-2xl md:text-6xl font-bold text-slate-900 dark:text-white mb-8 md:mb-12 italic leading-tight">
          "Você não sobe ao nível dos seus sonhos. <br className="hidden md:block" /> Você cai ao nível dos seus sistemas."
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
          A Bússola Secreta não é sobre motivação efêmera; é sobre a arquitetura da sua execução estratégica.
        </p>
        <div className="mt-12 md:mt-16 flex justify-center space-x-4">
           <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-[#c5a059]">@bussolasecreta</span>
        </div>
      </section>
    </div>
  );
};

export default Mindsets;
