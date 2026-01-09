
import React, { useState, useEffect, useCallback } from 'react';
import { Benefit } from '../types';
import { Compass, TrendingUp, Filter, Anchor, Target, ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  items: Benefit[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  const getIcon = (name: string) => {
    const props = { size: 36, className: "text-[#c5a059] mb-4 md:mb-6 md:w-[48px] md:h-[48px]" };
    switch (name) {
      case 'compass': return <Compass {...props} />;
      case 'trending-up': return <TrendingUp {...props} />;
      case 'filter': return <Filter {...props} />;
      case 'anchor': return <Anchor {...props} />;
      case 'target': return <Target {...props} />;
      default: return <Compass {...props} />;
    }
  };

  return (
    <div className="relative overflow-hidden bg-slate-50 dark:bg-darkSurface rounded-[2rem] md:rounded-3xl py-8 md:py-12 px-6 md:px-16 border border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="flex transition-transform duration-700 ease-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {items.map((item) => (
          <div key={item.id} className="min-w-full flex flex-col items-center text-center px-2">
            {getIcon(item.icon)}
            <h3 className="serif text-xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3 md:mb-4 transition-colors">{item.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm md:text-lg max-w-2xl leading-relaxed transition-colors">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="absolute top-1/2 -translate-y-1/2 left-2 md:left-4">
        <button onClick={prev} className="p-1.5 md:p-2 rounded-full bg-white dark:bg-darkCard shadow-md text-slate-400 dark:text-slate-500 hover:text-[#c5a059] transition-colors">
          <ChevronLeft size={20} className="md:w-6 md:h-6" />
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-2 md:right-4">
        <button onClick={next} className="p-1.5 md:p-2 rounded-full bg-white dark:bg-darkCard shadow-md text-slate-400 dark:text-slate-500 hover:text-[#c5a059] transition-colors">
          <ChevronRight size={20} className="md:w-6 md:h-6" />
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-8 md:mt-12 space-x-2 md:space-x-3">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'w-6 md:w-8 bg-[#c5a059]' : 'bg-slate-300 dark:bg-slate-700'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;