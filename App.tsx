
import React, { useState, useEffect, Suspense, lazy } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Page } from './types';
import { ThemeProvider } from './contexts/ThemeContext';

// Lazy loading components for performance optimization
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Insights = lazy(() => import('./pages/Insights'));
const Store = lazy(() => import('./pages/Store'));
const Terms = lazy(() => import('./pages/Terms'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Glossary = lazy(() => import('./pages/Glossary'));
const NLP = lazy(() => import('./pages/NLP'));
const Mindsets = lazy(() => import('./pages/Mindsets'));

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [activeTerm, setActiveTerm] = useState<string | undefined>(undefined);

  // Dynamic Metadata Update for Technical SEO
  useEffect(() => {
    const pageMetadata: Record<Page, { title: string; description: string }> = {
      [Page.HOME]: {
        title: "Bússola Secreta | Estratégia de Negócios e Inteligência",
        description: "Explore insights estratégicos e modelos mentais para acelerar o crescimento do seu negócio."
      },
      [Page.ABOUT]: {
        title: "Sobre Nós | Bússola Secreta - Visão Estratégica",
        description: "Conheça a missão e os pilares estratégicos que guiam a Bússola Secreta."
      },
      [Page.INSIGHTS]: {
        title: "Insights Estratégicos | Inteligência de Mercado Real-time",
        description: "Acompanhe as últimas tendências e sinais competitivos do mercado global."
      },
      [Page.STORE]: {
        title: "Loja Estratégica | Ferramentas de Gestão e Negócios",
        description: "Adquira livros, mentorias e ferramentas intelectuais para sua jornada executiva."
      },
      [Page.TERMS]: {
        title: "Termos de Uso | Bússola Secreta",
        description: "Termos e condições de uso do portal estratégico Bússola Secreta."
      },
      [Page.PRIVACY]: {
        title: "Privacidade | Segurança de Dados",
        description: "Política de privacidade e proteção de dados da Bússola Secreta."
      },
      [Page.GLOSSARY]: {
        title: "Glossário de Negócios | Termos Técnicos de Estratégia",
        description: "Dicionário executivo completo com os termos fundamentais da estratégia moderna."
      },
      [Page.NLP]: {
        title: "PNL para Negócios | Engenharia Cognitiva Executiva",
        description: "Técnicas de programação neurolinguística aplicadas a liderança e negociação."
      },
      [Page.MINDSETS]: {
        title: "Mentalidades Estratégicas | Protocolos de Execução",
        description: "Aprenda os algoritmos mentais e hábitos dos maiores estrategistas da história."
      }
    };

    const currentMeta = pageMetadata[currentPage] || pageMetadata[Page.HOME];
    document.title = currentMeta.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", currentMeta.description);
    }
  }, [currentPage]);

  useEffect(() => {
    const handleHashChange = () => {
      const hashPart = window.location.hash.replace('#', '');
      const [page, term] = hashPart.split('?term=');
      
      if (Object.values(Page).includes(page as Page)) {
        setCurrentPage(page as Page);
        setActiveTerm(term ? decodeURIComponent(term) : undefined);
      }
    };

    window.addEventListener('hashchange', handleHashChange, { passive: true });
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: Page, term?: string) => {
    setCurrentPage(page);
    setActiveTerm(term);
    window.location.hash = term ? `${page}?term=${encodeURIComponent(term)}` : page;
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <Home onNavigate={navigateTo} />;
      case Page.ABOUT:
        return <About />;
      case Page.INSIGHTS:
        return <Insights />;
      case Page.STORE:
        return <Store />;
      case Page.TERMS:
        return <Terms />;
      case Page.PRIVACY:
        return <Privacy />;
      case Page.MINDSETS:
        return <Mindsets />;
      case Page.GLOSSARY:
        return <Glossary />;
      case Page.NLP:
        return <NLP />;
      default:
        return <Home onNavigate={navigateTo} />;
    }
  };

  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen dark:bg-darkBg dark:text-gray-100 transition-colors duration-300">
        <Header activePage={currentPage} onNavigate={navigateTo} />
        <main className="flex-grow pt-16">
          <Suspense fallback={<div className="min-h-screen bg-white dark:bg-darkBg" />}>
            {renderPage()}
          </Suspense>
        </main>
        <Footer onNavigate={navigateTo} />
      </div>
    </ThemeProvider>
  );
};

export default App;
