
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">Sobre Mim</h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/3 flex justify-center">
             <div className="relative w-64 h-64">
                <div className="absolute inset-0 bg-cyan-400 rounded-full blur-xl opacity-50"></div>
                <img
                    src="https://avatars.githubusercontent.com/u/102604811?v=4"
                    alt="Gilvan Souza"
                    className="relative w-full h-full object-cover rounded-full border-4 border-cyan-500"
                />
             </div>
          </div>
          <div className="md:w-2/3 text-lg text-gray-300 text-center md:text-left">
            <p className="mb-4">
              Sou um Engenheiro de Software apaixonado por qualidade e eficiência. Com uma sólida experiência em automação de testes e desenvolvimento backend, meu objetivo é construir sistemas robustos e confiáveis.
            </p>
            <p className="mb-4">
              Tenho proficiência em diversas tecnologias de automação, incluindo Selenium, Cypress e REST Assured, e no desenvolvimento backend com Java e Python. Estou sempre em busca de novos desafios e oportunidades para aprimorar minhas habilidades e contribuir para projetos inovadores.
            </p>
            <p>
              Vamos criar algo incrível juntos!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
