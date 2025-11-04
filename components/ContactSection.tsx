
import React from 'react';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4 text-cyan-400">Entre em Contato</h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para se conectar comigo.
        </p>
        <div className="flex justify-center space-x-8">
          <a
            href="https://github.com/GilvanS"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-cyan-400 transform hover:scale-110 transition-all duration-300"
          >
            <GithubIcon className="w-12 h-12" />
          </a>
          <a
            href="https://www.linkedin.com/in/gilvansouza/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-cyan-400 transform hover:scale-110 transition-all duration-300"
          >
            <LinkedinIcon className="w-12 h-12" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
