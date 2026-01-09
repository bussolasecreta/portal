
import React, { useState, useEffect, memo } from 'react';
import { Page } from '../types';
import { LOGO_URL, EXTERNAL_TOOLS } from '../constants';
import { useTheme } from '../contexts/ThemeContext';
import { Menu, X, ArrowRight, ExternalLink, ChevronDown, Brain, BookMarked, MessageSquareText, Newspaper, Moon, Sun, Clock } from 'lucide-react';

interface HeaderProps {
  activePage: Page;
  onNavigate: (page: Page, params?: string) => void;
}

const NAVIGATION_INSTRUMENTS = [
  { label: 'Insights Estratégicos', value: Page.INSIGHTS, icon: <Newspaper size={14} /> },
  { label: 'Mentalidades', value: Page.MINDSETS, icon: <Brain size={14} /> },
  { label: 'Glossário de Negócios', value: Page.GLOSSARY, icon: <BookMarked size={14} /> },
  { label: 'PNL para Negócios', value: Page.NLP, icon: <MessageSquareText size={14} /> },
];

const Header: React.FC<HeaderProps> = memo(({ activePage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [isInstrumentsOpen, setIsInstrumentsOpen] = useState(false);
  const [showHomologationModal, setShowHomologationModal] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    if (isMenuOpen || showHomologationModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen, showHomologationModal]);

  const handleNavClick = (e: React.MouseEvent, page: Page, params?: string) => {
    e.preventDefault();
    onNavigate(page, params);
    setIsMenuOpen(false);
    setIsToolsOpen(false);
    setIsInstrumentsOpen(false);
  };

  const handleToolClick = (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    setShowHomologationModal(true);
    setIsMenuOpen(false);
    setIsToolsOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[150] h-16 transition-all duration-300 border-b ${
        isMenuOpen 
          ? 'bg-slate-950 border-white/10' 
          : 'bg-white/90 dark:bg-darkBg/90 backdrop-blur-md border-slate-100 dark:border-slate-800'
      }`}>
        <div className="max-w-[1600px] mx-auto px-6 h-full flex items-center justify-between">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, Page.HOME)}
            className="flex items-center space-x-3 relative z-[210]"
          >
            <img 
              src={LOGO_URL} 
              alt="Bússola Secreta" 
              className={`h-12 w-auto object-contain transition-all ${isMenuOpen || theme === 'dark' ? 'brightness-125' : ''}`} 
              decoding="async"
            />
            <span className={`serif font-bold lg:text-xl tracking-tighter transition-colors ${isMenuOpen ? 'text-white' : 'text-slate-900 dark:text-white'}`}>Bússola Secreta</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, Page.HOME)}
              className={`text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] lg:tracking-[0.3em] transition-colors hover:text-[#c5a059] ${
                activePage === Page.HOME ? 'text-[#c5a059]' : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              Início
            </a>

            <div 
              className="relative group"
              onMouseEnter={() => setIsInstrumentsOpen(true)}
              onMouseLeave={() => setIsInstrumentsOpen(false)}
            >
              <button className="flex items-center space-x-1 text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] lg:tracking-[0.3em] text-slate-500 dark:text-slate-400 group-hover:text-[#c5a059] transition-colors py-5">
                <span>Instrumentos</span>
                <ChevronDown size={12} className={`transition-transform duration-300 ${isInstrumentsOpen ? 'rotate-180 text-[#c5a059]' : ''}`} />
              </button>
              
              {isInstrumentsOpen && (
                <div className="absolute top-full left-0 w-64 bg-white dark:bg-darkCard border border-slate-100 dark:border-slate-800 shadow-xl rounded-xl py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  {NAVIGATION_INSTRUMENTS.map((item) => (
                    <a
                      key={item.value}
                      href={`#${item.value}`}
                      onClick={(e) => handleNavClick(e, item.value)}
                      className={`flex items-center space-x-3 px-5 py-3.5 text-[10px] font-black uppercase tracking-widest transition-colors border-b border-slate-50 dark:border-slate-800 last:border-none ${
                        activePage === item.value 
                        ? 'text-[#c5a059] bg-slate-50 dark:bg-slate-800/50' 
                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-[#c5a059]'
                      }`}
                    >
                      <span className="opacity-60">{item.icon}</span>
                      <span>{item.label}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#store"
              onClick={(e) => handleNavClick(e, Page.STORE)}
              className={`text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] lg:tracking-[0.3em] transition-colors hover:text-[#c5a059] ${
                activePage === Page.STORE ? 'text-[#c5a059]' : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              Loja
            </a>
            
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, Page.ABOUT)}
              className={`text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] lg:tracking-[0.3em] transition-colors hover:text-[#c5a059] ${
                activePage === Page.ABOUT ? 'text-[#c5a059]' : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              Visão
            </a>

            <div 
              className="relative group"
              onMouseEnter={() => setIsToolsOpen(true)}
              onMouseLeave={() => setIsToolsOpen(false)}
            >
              <button className="flex items-center space-x-1 text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] lg:tracking-[0.3em] text-slate-500 dark:text-slate-400 group-hover:text-[#c5a059] transition-colors py-5">
                <span>Ferramentas</span>
                <ChevronDown size={12} className={`transition-transform duration-300 ${isToolsOpen ? 'rotate-180 text-[#c5a059]' : ''}`} />
              </button>
              {isToolsOpen && (
                <div className="absolute top-full right-0 w-56 bg-white dark:bg-darkCard border border-slate-100 dark:border-slate-800 shadow-xl rounded-xl py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  {EXTERNAL_TOOLS.map((tool) => (
                    <a
                      key={tool.name}
                      href={tool.url}
                      onClick={(e) => handleToolClick(e, tool.url)}
                      className="flex items-center justify-between px-5 py-3.5 text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-[#c5a059] transition-colors border-b border-slate-50 dark:border-slate-800 last:border-none"
                    >
                      {tool.name}
                      <ExternalLink size={12} className="opacity-40" />
                    </a>
                  ))}
                </div>
              )}
            </div>

            <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-all flex items-center justify-center"
              aria-label="Alternar Tema"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </nav>

          {/* Mobile Toggle Button */}
          <div className="flex items-center space-x-3 md:hidden relative z-[210]">
            {!isMenuOpen && (
              <button 
                onClick={toggleTheme}
                className="p-2 text-slate-950 dark:text-white transition-colors"
                aria-label="Alternar Tema"
              >
                {theme === 'light' ? <Moon size={22} /> : <Sun size={22} />}
              </button>
            )}
            <button
              className={`p-2 transition-colors ${isMenuOpen ? 'text-[#c5a059]' : 'text-slate-950 dark:text-white'}`}
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
                setIsToolsOpen(false);
                setIsInstrumentsOpen(false);
              }}
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU OVERLAY */}
        <div 
          className={`fixed inset-0 z-[200] bg-slate-950 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] md:hidden ${
            isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-y-[-20px]'
          }`}
        >
          <div className="flex flex-col h-full pt-24 pb-12 px-8 overflow-y-auto no-scrollbar">
            <nav className="flex flex-col">
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, Page.HOME)}
                className="flex items-center justify-between py-6 border-b border-white/5"
              >
                <span className={`text-[12px] font-black uppercase tracking-[0.3em] ${activePage === Page.HOME ? 'text-[#c5a059]' : 'text-white/90'}`}>Início</span>
                <ArrowRight size={16} className={activePage === Page.HOME ? 'text-[#c5a059]' : 'text-white/10'} />
              </a>

              <div className="flex flex-col border-b border-white/5">
                <button 
                  onClick={() => setIsInstrumentsOpen(!isInstrumentsOpen)}
                  className="flex items-center justify-between py-6 w-full text-left"
                >
                  <span className={`text-[12px] font-black uppercase tracking-[0.3em] ${isInstrumentsOpen ? 'text-[#c5a059]' : 'text-white/90'}`}>
                    Instrumentos
                  </span>
                  <ChevronDown size={18} className={`transition-transform duration-300 ${isInstrumentsOpen ? 'rotate-180 text-[#c5a059]' : 'text-white/20'}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isInstrumentsOpen ? 'max-h-[1000px] mb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="flex flex-col space-y-2 pl-4">
                    {NAVIGATION_INSTRUMENTS.map((item) => (
                      <a
                        key={item.value}
                        href={`#${item.value}`}
                        onClick={(e) => handleNavClick(e, item.value)}
                        className={`flex items-center space-x-4 p-4 rounded-xl text-[10px] font-bold tracking-widest transition-all ${
                          activePage === item.value 
                          ? 'text-[#c5a059] bg-white/10' 
                          : 'text-white/60 bg-white/5'
                        }`}
                      >
                        <span className="opacity-40">{item.icon}</span>
                        <span>{item.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <a
                href="#store"
                onClick={(e) => handleNavClick(e, Page.STORE)}
                className="flex items-center justify-between py-6 border-b border-white/5"
              >
                <span className={`text-[12px] font-black uppercase tracking-[0.3em] ${activePage === Page.STORE ? 'text-[#c5a059]' : 'text-white/90'}`}>Loja</span>
                <ArrowRight size={16} className={activePage === Page.STORE ? 'text-[#c5a059]' : 'text-white/10'} />
              </a>

              <a
                href="#about"
                onClick={(e) => handleNavClick(e, Page.ABOUT)}
                className="flex items-center justify-between py-6 border-b border-white/5"
              >
                <span className={`text-[12px] font-black uppercase tracking-[0.3em] ${activePage === Page.ABOUT ? 'text-[#c5a059]' : 'text-white/90'}`}>Visão</span>
                <ArrowRight size={16} className={activePage === Page.ABOUT ? 'text-[#c5a059]' : 'text-white/10'} />
              </a>

              <div className="flex flex-col border-b border-white/5">
                <button onClick={() => setIsToolsOpen(!isToolsOpen)} className="flex items-center justify-between py-6 w-full text-left">
                  <span className={`text-[12px] font-black uppercase tracking-[0.3em] ${isToolsOpen ? 'text-[#c5a059]' : 'text-white/90'}`}>Ferramentas</span>
                  <ChevronDown size={18} className={`transition-transform duration-300 ${isToolsOpen ? 'rotate-180 text-[#c5a059]' : 'text-white/20'}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isToolsOpen ? 'max-h-[500px] mb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="flex flex-col space-y-2 pl-4">
                    {EXTERNAL_TOOLS.map((tool) => (
                      <a
                        key={tool.name}
                        href={tool.url}
                        onClick={(e) => handleToolClick(e, tool.url)}
                        className="flex items-center justify-between p-4 bg-white/5 rounded-xl text-[10px] font-bold text-white/60 tracking-widest"
                      >
                        <span>{tool.name}</span>
                        <ExternalLink size={12} className="opacity-30" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </nav>
            <div className="mt-auto pt-10 text-center">
               <p className="text-[9px] font-bold text-white/20 uppercase tracking-[0.4em]">© 2026 Bússola Secreta</p>
            </div>
          </div>
        </div>
      </header>

      {/* Homologation Modal - Moved to global scope of component and boosted Z-index */}
      {showHomologationModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-6">
          <div 
            className="absolute inset-0 bg-slate-950/95 backdrop-blur-md animate-in fade-in duration-300"
            onClick={() => setShowHomologationModal(false)}
          />
          <div className="relative bg-white dark:bg-darkCard rounded-[2.5rem] p-10 md:p-14 max-w-lg w-full border border-slate-100 dark:border-slate-800 shadow-[0_0_50px_rgba(0,0,0,0.5)] animate-in zoom-in-95 duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#c5a059]/10 rounded-2xl flex items-center justify-center text-[#c5a059] mb-8">
                <Clock size={48} className="animate-pulse" />
              </div>
              <h2 className="serif text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">Acesso em Homologação</h2>
              <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg font-light leading-relaxed mb-10">
                Este instrumento de inteligência estratégica está atualmente em fase final de homologação técnica. O acesso será habilitado em breve para parceiros e usuários selecionados.
              </p>
              <button 
                onClick={() => setShowHomologationModal(false)}
                className="w-full py-5 bg-slate-900 dark:bg-gold text-white dark:text-slate-950 rounded-xl font-black text-[11px] md:text-xs uppercase tracking-[0.3em] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-[#c5a059]/20"
              >
                Compreendido
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

export default Header;
