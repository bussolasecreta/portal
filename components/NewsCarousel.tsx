
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { initializeApp, getApp, getApps } from "firebase/app";
import { 
  getFirestore, 
  collection, 
  query, 
  orderBy, 
  getDocs, 
  limit, 
  Timestamp 
} from "firebase/firestore";
import { 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink, 
  Calendar, 
  Newspaper,
  ArrowUpRight
} from 'lucide-react';

/* ============================
   Firebase Configuration
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
    console.error("Firebase init error in NewsCarousel:", error);
  }
}

interface NewsItem {
  id: string;
  source: string;
  title: string;
  link: string;
  publishedAt: Timestamp;
}

const NewsCarousel: React.FC = () => {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const fetchLatestNews = useCallback(async () => {
    if (!db || !isConfigValid) {
      setLoading(false);
      return;
    }
    try {
      const q = query(
        collection(db, "news"),
        orderBy("publishedAt", "desc"),
        limit(5)
      );
      const querySnapshot = await getDocs(q);
      const fetched: NewsItem[] = [];
      querySnapshot.forEach((doc) => {
        fetched.push({ id: doc.id, ...doc.data() } as NewsItem);
      });
      setItems(fetched);
    } catch (err) {
      console.error("Error fetching carousel news:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchLatestNews();
  }, [fetchLatestNews]);

  const next = useCallback(() => {
    if (items.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prev = () => {
    if (items.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  useEffect(() => {
    if (items.length > 0) {
      autoPlayRef.current = setInterval(next, 7000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [next, items.length]);

  if (!isConfigValid) return (
    <div className="bg-slate-900/50 p-12 rounded-[2rem] text-center border border-dashed border-slate-800">
      <p className="text-slate-500 text-xs italic">Aguardando sinal do hub de inteligência...</p>
    </div>
  );

  return (
    <div className="w-full">
      <div className="relative overflow-hidden bg-slate-950 rounded-[1.5rem] md:rounded-[2.5rem] border border-slate-800 shadow-2xl">
        {loading ? (
          <div className="p-12 md:p-16 flex flex-col items-center justify-center space-y-4">
            <div className="w-10 h-10 md:w-12 md:h-12 border-4 border-[#c5a059]/20 border-t-[#c5a059] rounded-full animate-spin"></div>
            <p className="text-slate-500 text-[9px] font-black uppercase tracking-widest">Sincronizando...</p>
          </div>
        ) : items.length > 0 ? (
          <>
            <div 
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {items.map((item) => (
                <div key={item.id} className="min-w-full p-6 md:p-20">
                  <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
                    <div className="hidden md:flex shrink-0 w-24 h-24 rounded-2xl bg-[#c5a059]/10 items-center justify-center text-[#c5a059] border border-[#c5a059]/20">
                      <Newspaper size={40} />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center space-x-3 mb-4 md:mb-6">
                        <span className="px-2 py-1 bg-[#c5a059] text-slate-950 text-[8px] md:text-[9px] font-black uppercase tracking-widest rounded-md">
                          {item.source}
                        </span>
                        <div className="flex items-center space-x-2 text-[9px] md:text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                          <Calendar size={11} className="text-[#c5a059]" />
                          <span>{item.publishedAt?.toDate().toLocaleDateString('pt-BR')}</span>
                        </div>
                      </div>
                      <h3 className="serif text-xl md:text-4xl font-bold text-white mb-4 md:mb-6 leading-tight group">
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="hover:text-[#c5a059] transition-colors flex items-start gap-2"
                        >
                          {item.title}
                          <ArrowUpRight size={18} className="shrink-0 mt-1 opacity-50 group-hover:opacity-100 md:w-6 md:h-6" />
                        </a>
                      </h3>
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-[9px] font-black uppercase tracking-[0.3em] text-[#c5a059] hover:text-white transition-colors"
                      >
                        <span>Acessar Insight</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 left-4 hidden md:block">
              <button onClick={prev} className="p-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#c5a059] hover:text-slate-950 transition-all">
                <ChevronLeft size={20} />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-4 hidden md:block">
              <button onClick={next} className="p-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#c5a059] hover:text-slate-950 transition-all">
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    idx === currentIndex ? 'w-6 md:w-10 bg-[#c5a059]' : 'w-1.5 md:w-2 bg-slate-700'
                  }`}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="p-12 md:p-20 text-center">
            <p className="text-slate-500 serif italic">Buscando as últimas frequências de mercado...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsCarousel;
