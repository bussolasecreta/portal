
import React, { useState, useMemo } from 'react';
import { STORE_ITEMS } from '../constants';
import { StoreCategory } from '../types';
import { useTheme } from '../contexts/ThemeContext';
import { ShoppingCart, Info, ExternalLink, Filter, Book, Users, GraduationCap, FileText } from 'lucide-react';

const Store: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<StoreCategory | 'Tudo'>('Tudo');
  const { theme } = useTheme();

  const categories: (StoreCategory | 'Tudo')[] = ['Tudo', 'Livro', 'Ebook', 'Curso', 'Mentoria'];

  const filteredItems = useMemo(() => {
    return activeFilter === 'Tudo' 
      ? STORE_ITEMS 
      : STORE_ITEMS.filter(item => item.category === activeFilter);
  }, [activeFilter]);

  const handleActionClick = (url: string) => {
    if (url && url.startsWith('http')) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      console.log("Ação interna ou contato via link:", url);
    }
  };

  const getCategoryIcon = (category: StoreCategory) => {
    switch (category) {
      case 'Livro': return <Book size={14} />;
      case 'Ebook': return <FileText size={14} />;
      case 'Curso': return <GraduationCap size={14} />;
      case 'Mentoria': return <Users size={14} />;
      default: return null;
    }
  };

  return (
    <div className="animate-in fade-in duration-700 min-h-screen bg-white dark:bg-darkBg transition-colors duration-300">
      {/* Header Section */}
      <div className="bg-slate-950 py-24 border-b border-[#c5a059]/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-2 text-[#c5a059] mb-4">
             <ShoppingCart size={18} />
             <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Curadoria Exclusiva</span>
          </div>
          <h1 className="serif text-5xl md:text-6xl font-bold text-white mb-6">Ferramentas Intelectuais</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Expandindo sua capacidade estratégica através de conhecimento denso e mentorias de alto impacto.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16 pb-8 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center space-x-3 overflow-x-auto no-scrollbar pb-2 md:pb-0">
            <Filter size={16} className="text-slate-400 dark:text-slate-600 mr-2 shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap border ${
                  activeFilter === cat 
                  ? 'bg-slate-900 dark:bg-gold border-slate-900 dark:border-gold text-white dark:text-slate-950 shadow-lg scale-105' 
                  : 'bg-white dark:bg-darkSurface border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:border-[#c5a059] hover:text-[#c5a059]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="hidden lg:flex items-center space-x-2 text-[10px] font-bold text-slate-400 dark:text-slate-600 uppercase tracking-widest">
            <span>{filteredItems.length} Itens Encontrados</span>
          </div>
        </div>

        {/* Note Bar */}
        <div className="flex items-start space-x-4 bg-slate-50 dark:bg-darkSurface border border-slate-100 dark:border-slate-800 p-6 rounded-2xl mb-16 shadow-sm transition-colors duration-300">
          <Info className="text-[#c5a059] mt-1 shrink-0" size={20} />
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-1 text-sm">Acesso à Excelência</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Cada item desta biblioteca foi selecionado por seu poder transformador. Livros redirecionam para parceiros oficiais, enquanto Cursos e Mentorias são canais diretos de nossa rede de estrategistas.
            </p>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {filteredItems.map((item) => (
            <div key={item.id} className="group flex flex-col bg-white dark:bg-darkCard rounded-2xl p-4 border border-transparent dark:border-slate-800/50 hover:border-slate-100 dark:hover:border-gold/30 hover:shadow-xl dark:hover:shadow-gold/5 transition-all duration-500">
              <div className="relative aspect-[3/4] mb-6 overflow-hidden rounded-xl shadow-md">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                />
                <div className="absolute top-3 left-3">
                   <span className="flex items-center space-x-1.5 px-3 py-1.5 bg-white/95 dark:bg-darkBg/95 backdrop-blur shadow-sm rounded-lg text-[10px] font-black uppercase tracking-widest text-slate-900 dark:text-white border border-slate-100 dark:border-slate-800">
                      {getCategoryIcon(item.category)}
                      <span>{item.category}</span>
                   </span>
                </div>
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button 
                    onClick={() => handleActionClick(item.link)}
                    className="p-4 bg-white dark:bg-gold rounded-full text-slate-900 hover:bg-[#c5a059] dark:hover:bg-white hover:text-white dark:hover:text-slate-950 transition-all shadow-2xl"
                  >
                    <ExternalLink size={20} />
                  </button>
                </div>
              </div>
              
              <div className="flex-grow">
                <h3 className="serif text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-[#c5a059] transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs mb-4 line-clamp-3 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.price && (
                <div className="mb-4">
                  <span className="text-slate-900 dark:text-gold font-bold text-lg">{item.price}</span>
                </div>
              )}
              
              <button 
                onClick={() => handleActionClick(item.link)}
                className={`inline-flex items-center justify-center w-full py-3 rounded-lg border-2 transition-all font-bold text-xs uppercase tracking-widest ${
                  item.category === 'Mentoria' || item.category === 'Curso'
                  ? 'bg-slate-900 dark:bg-gold border-slate-900 dark:border-gold text-white dark:text-slate-950 hover:bg-[#c5a059] hover:border-[#c5a059]'
                  : 'border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white hover:border-slate-900 dark:hover:border-gold hover:bg-slate-900 dark:hover:bg-gold hover:text-white dark:hover:text-slate-950'
                }`}
              >
                {item.category === 'Mentoria' ? 'Solicitar Vaga' : (item.category === 'Curso' ? 'Matricular-se' : 'Acessar Obra')}
              </button>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-32 bg-slate-50 dark:bg-darkSurface rounded-[2rem] border-2 border-dashed border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <ShoppingCart className="mx-auto text-slate-300 dark:text-slate-700 mb-6" size={48} />
            <p className="text-slate-400 dark:text-slate-500 text-lg font-serif italic">Nenhum item disponível nesta categoria no momento.</p>
            <button 
              onClick={() => setActiveFilter('Tudo')}
              className="mt-6 text-[#c5a059] font-bold uppercase tracking-widest text-xs hover:underline"
            >
              Ver todas as categorias
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Store;