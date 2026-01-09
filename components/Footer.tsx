
import React, { memo } from 'react';
import { LOGO_URL } from '../constants';
import { Page } from '../types';
import { useTheme } from '../contexts/ThemeContext';
import { Instagram, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = memo(({ onNavigate }) => {
  const currentYear = new Date().getFullYear();
  const displayYear = currentYear < 2026 ? "2026" : `2026 - ${currentYear}`;
  const { theme } = useTheme();

  const handleNavClick = (e: React.MouseEvent, page: Page) => {
    e.preventDefault();
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 dark:bg-[#050810] text-white pt-20 pb-10 border-t border-white/5 transition-colors duration-300">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Identity Section */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center space-x-4">
              <img 
                src={LOGO_URL} 
                alt="Bússola Secreta" 
                className="h-14 w-auto object-contain brightness-125" 
                decoding="async" 
                loading="lazy" 
              />
              <span className="serif text-2xl font-bold tracking-tighter">Bússola Secreta</span>
            </div>
            <p className="text-slate-400 dark:text-slate-500 max-w-sm text-sm leading-relaxed font-light">
              Unidade de inteligência estratégica e arquitetura de decisão. Provendo clareza intelectual para líderes que navegam em ambientes de alta incerteza.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.instagram.com/bussolasecreta/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#c5a059] hover:text-slate-950 transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://linkedin.com/company/bussolasecreta" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#c5a059] hover:text-slate-950 transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="mailto:contato@bussolasecreta.com"
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#c5a059] hover:text-slate-950 transition-all duration-300 group"
                aria-label="Email"
              >
                <Mail size={18} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
          
          {/* Instruments Column */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#c5a059] mb-8">Instrumentos</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li>
                <a href="#insights" onClick={(e) => handleNavClick(e, Page.INSIGHTS)} className="hover:text-white transition-colors flex items-center group">
                  Insights Estratégicos <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-all" />
                </a>
              </li>
              <li>
                <a href="#mindsets" onClick={(e) => handleNavClick(e, Page.MINDSETS)} className="hover:text-white transition-colors flex items-center group">
                  Mentalidades <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-all" />
                </a>
              </li>
              <li>
                <a href="#glossary" onClick={(e) => handleNavClick(e, Page.GLOSSARY)} className="hover:text-white transition-colors flex items-center group">
                  Glossário Executivo <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-all" />
                </a>
              </li>
              <li>
                <a href="#nlp" onClick={(e) => handleNavClick(e, Page.NLP)} className="hover:text-white transition-colors flex items-center group">
                  PNL para Negócios <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-all" />
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-8">Portal</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#home" onClick={(e) => handleNavClick(e, Page.HOME)} className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#about" onClick={(e) => handleNavClick(e, Page.ABOUT)} className="hover:text-white transition-colors">Visão Institucional</a></li>
              <li><a href="#store" onClick={(e) => handleNavClick(e, Page.STORE)} className="hover:text-white transition-colors">Loja de Ferramentas</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-8">Contato</h4>
            <div className="space-y-6">
              <div>
                <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-1">Direct Line</p>
                <p className="text-slate-300 text-sm">contato@bussolasecreta.com</p>
              </div>
              <div className="pt-4 border-t border-white/5">
                <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-3">Sede Digital</p>
                <div className="flex items-center space-x-2 text-emerald-500 text-[10px] font-black uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Operacional Global</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-slate-500 text-[10px] font-bold uppercase tracking-widest gap-6">
          <p>© {displayYear} Bússola Secreta. All Rights Reserved.</p>
          <div className="flex items-center space-x-8">
            <button onClick={(e) => handleNavClick(e, Page.TERMS)} className="hover:text-white transition-colors">Termos de Uso</button>
            <button onClick={(e) => handleNavClick(e, Page.PRIVACY)} className="hover:text-white transition-colors">Privacidade</button>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
