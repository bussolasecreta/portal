
import React, { useState, useEffect, useCallback } from 'react';
import { SaaSTool } from '../types';
import { Activity, Layout, CheckCircle2, ArrowRight, Monitor, Clock } from 'lucide-react';

interface SaaSCarouselProps {
  tools: SaaSTool[];
}

const SaaSCarousel: React.FC<SaaSCarouselProps> = ({ tools }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showHomologationModal, setShowHomologationModal] = useState(false);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % tools.length);
  }, [tools.length]);

  useEffect(() => {
    const interval = setInterval(next, 8000);
    return () => clearInterval(interval);
  }, [next]);

  const getIcon = (name: string) => {
    const props = { size: 32, className: "text-[#c5a059] md:w-[40px] md:h-[40px]" };
    switch (name) {
      case 'activity': return <Activity {...props} />;
      case 'layout': return <Layout {...props} />;
      default: return <Monitor {...props} />;
    }
  };

  const handleAccessClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowHomologationModal(true);
  };

  return (
    <div className="relative max-w-6xl mx-auto">
      <div className="overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] bg-slate-900 border border-slate-800 shadow-2xl">
        <div 
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]" 
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {tools.map((tool) => (
            <div key={tool.id} className="min-w-full p-6 md:p-16 flex flex-col lg:flex-row items-center gap-8 md:gap-12">
              {/* Image/Visual Placeholder */}
              <div className="w-full lg:w-1/2 aspect-video bg-slate-800 rounded-xl md:rounded-2xl flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#c5a059]/10 to-transparent"></div>
                {getIcon(tool.icon)}
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-slate-950/80 backdrop-blur rounded-lg border border-slate-800">
                  <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest mb-1">Status</p>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span className="text-[10px] text-white font-medium">Operacional • 24ms</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 text-left">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#c5a059] text-[9px] font-bold tracking-widest uppercase mb-4">
                  <span>Plataforma SaaS</span>
                </div>
                <h3 className="serif text-2xl md:text-4xl font-bold text-white mb-2">{tool.name}</h3>
                <p className="text-[#c5a059] text-[10px] md:text-sm font-bold uppercase tracking-widest mb-4 md:mb-6">{tool.tagline}</p>
                
                <p className="text-slate-400 text-sm md:text-lg mb-6 md:mb-8 leading-relaxed font-light">
                  {tool.description}
                </p>

                <div className="space-y-2 md:space-y-4 mb-6 md:mb-10">
                  {tool.benefits.slice(0, 3).map((benefit, i) => (
                    <div key={i} className="flex items-center space-x-3 text-slate-300">
                      <CheckCircle2 size={14} className="text-[#c5a059] shrink-0 md:w-[18px] md:h-[18px]" />
                      <span className="text-xs md:text-sm font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={handleAccessClick}
                  className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-[#c5a059] text-slate-950 font-black text-[10px] md:text-xs uppercase tracking-[0.2em] rounded-lg md:rounded-xl hover:bg-white hover:text-slate-950 transition-all group"
                >
                  <span>Acessar</span>
                  <ArrowRight size={14} className="ml-2 md:ml-3 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 md:mt-8 space-x-2 md:space-x-3">
        {tools.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1 md:h-1.5 rounded-full transition-all duration-500 ${
              idx === currentIndex ? 'w-8 md:w-12 bg-[#c5a059]' : 'w-2 md:w-3 bg-slate-200'
            }`}
          />
        ))}
      </div>

      {/* Homologation Modal - Using Z-[9999] for maximum visibility */}
      {showHomologationModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-6">
          <div 
            className="absolute inset-0 bg-slate-950/95 backdrop-blur-md animate-in fade-in duration-300"
            onClick={() => setShowHomologationModal(false)}
          />
          <div className="relative bg-white dark:bg-darkCard rounded-[2.5rem] p-10 md:p-14 max-w-lg w-full border border-slate-100 dark:border-slate-800 shadow-[0_0_50px_rgba(0,0,0,0.6)] animate-in zoom-in-95 duration-300">
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
                className="w-full py-5 bg-slate-900 dark:bg-gold text-white dark:text-slate-950 rounded-xl font-black text-[11px] md:text-xs uppercase tracking-[0.3em] hover:scale-[1.02] transition-all shadow-xl"
              >
                Compreendido
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SaaSCarousel;
