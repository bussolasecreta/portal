
import React from 'react';
import { Lock } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700 bg-white min-h-screen">
      <div className="bg-slate-50 border-b border-slate-100 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Lock className="mx-auto text-[#c5a059] mb-6" size={48} />
          <h1 className="serif text-4xl md:text-5xl font-bold text-slate-900 mb-4">Política de Privacidade</h1>
          <p className="text-slate-500">Última atualização: Janeiro de 2026</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="space-y-12">
          <section>
            <h2 className="serif text-2xl font-bold text-slate-900 mb-6">Coleta de Informações</h2>
            <p className="text-slate-600 leading-relaxed">
              A Bússola Secreta valoriza sua privacidade. Atualmente, nosso portal opera de forma aberta para consumo de conteúdo. Não coletamos dados pessoais identificáveis sem o seu consentimento explícito. Informações técnicas básicas (como cookies de sessão) podem ser utilizadas apenas para otimizar sua experiência de navegação.
            </p>
          </section>

          <section>
            <h2 className="serif text-2xl font-bold text-slate-900 mb-6">Uso de Dados de Navegação</h2>
            <p className="text-slate-600 leading-relaxed">
              Utilizamos ferramentas de análise anônima para entender quais temas estratégicos e insights são mais relevantes para nossa audiência, permitindo-nos aprimorar constantemente nossa curadoria.
            </p>
          </section>

          <section>
            <h2 className="serif text-2xl font-bold text-slate-900 mb-6">Serviços de Terceiros</h2>
            <p className="text-slate-600 leading-relaxed">
              Ao acessar notícias externas através de nossa aba de Insights, você estará sujeito às políticas de privacidade dos respectivos editores. Recomendamos a leitura dessas políticas ao sair do nosso ambiente.
            </p>
          </section>

          <section>
            <h2 className="serif text-2xl font-bold text-slate-900 mb-6">Segurança</h2>
            <p className="text-slate-600 leading-relaxed">
              Implementamos medidas de segurança técnicas e organizacionais para proteger a integridade do portal e garantir que seu acesso à informação ocorra em um ambiente seguro e resiliente.
            </p>
          </section>

          <section className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <h3 className="serif text-xl font-bold text-slate-900 mb-4">Dúvidas?</h3>
            <p className="text-slate-600 text-sm">
              Para questões sobre nossa política de privacidade ou termos de uso, entre em contato através do e-mail: <span className="font-bold text-slate-900">privacidade@bussolasecreta.com</span>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
