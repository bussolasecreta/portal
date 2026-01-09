
import React from 'react';
import { ShieldAlert } from 'lucide-react';

const Terms: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700 bg-white min-h-screen">
      <div className="bg-slate-50 border-b border-slate-100 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ShieldAlert className="mx-auto text-[#c5a059] mb-6" size={48} />
          <h1 className="serif text-4xl md:text-5xl font-bold text-slate-900 mb-4">Termos de Uso</h1>
          <p className="text-slate-500">Última atualização: Janeiro de 2026</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-20 prose prose-slate">
        <div className="space-y-12">
          <section>
            <h2 className="serif text-2xl font-bold text-slate-900 mb-6">1. Aceitação dos Termos</h2>
            <p className="text-slate-600 leading-relaxed">
              Ao acessar e utilizar o portal Bússola Secreta, você concorda em cumprir e estar vinculado aos seguintes termos e condições. Este portal é destinado à disseminação de conteúdo estratégico e inteligência de negócios. Se você não concordar com qualquer parte destes termos, não deverá utilizar nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="serif text-2xl font-bold text-slate-900 mb-6">2. Propriedade Intelectual</h2>
            <p className="text-slate-600 leading-relaxed">
              Todo o conteúdo apresentado, incluindo análises, textos, logotipos, ícones e curadoria, é de propriedade exclusiva da Bússola Secreta ou de seus respectivos parceiros de feed RSS. A reprodução, distribuição ou modificação do conteúdo sem autorização expressa é estritamente proibida.
            </p>
          </section>

          <section>
            <h2 className="serif text-2xl font-bold text-slate-900 mb-6">3. Isenção de Responsabilidade</h2>
            <p className="text-slate-600 leading-relaxed">
              Os insights e informações fornecidos no portal têm caráter meramente informativo e educacional. Embora busquemos a máxima precisão e clareza, a Bússola Secreta não garante resultados específicos de negócios ou investimentos baseados em nosso conteúdo. A aplicação das estratégias discutidas é de inteira responsabilidade do usuário.
            </p>
          </section>

          <section>
            <h2 className="serif text-2xl font-bold text-slate-900 mb-6">4. Links para Terceiros</h2>
            <p className="text-slate-600 leading-relaxed">
              Nosso serviço de Insights redireciona para sites externos (HBR, McKinsey, etc.). Não temos controle sobre o conteúdo, políticas de privacidade ou práticas de sites de terceiros e não assumimos qualquer responsabilidade por eles.
            </p>
          </section>

          <section>
            <h2 className="serif text-2xl font-bold text-slate-900 mb-6">5. Modificações</h2>
            <p className="text-slate-600 leading-relaxed">
              Reservamo-nos o direito de revisar estes termos a qualquer momento. O uso continuado do portal após tais alterações constitui sua aceitação dos novos termos.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
