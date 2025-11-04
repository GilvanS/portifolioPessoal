
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Gilvan Souza. Todos os direitos reservados.</p>
        <p className="text-sm mt-1">Feito com React & Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;
