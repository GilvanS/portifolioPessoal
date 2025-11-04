
import React from 'react';
import { PythonIcon, JavaIcon, JavaScriptIcon, CypressIcon, SeleniumIcon, RobotFrameworkIcon, GitIcon, DockerIcon, PostmanIcon } from './icons/TechIcons';

const skills = [
  { name: 'Python', icon: <PythonIcon /> },
  { name: 'Java', icon: <JavaIcon /> },
  { name: 'JavaScript', icon: <JavaScriptIcon /> },
  { name: 'Cypress', icon: <CypressIcon /> },
  { name: 'Selenium', icon: <SeleniumIcon /> },
  { name: 'Robot Framework', icon: <RobotFrameworkIcon /> },
  { name: 'Git', icon: <GitIcon /> },
  { name: 'Docker', icon: <DockerIcon /> },
  { name: 'Postman', icon: <PostmanIcon /> },
];

const SkillCard: React.FC<{ name: string; icon: React.ReactNode }> = ({ name, icon }) => (
  <div className="bg-gray-800 border-2 border-gray-700 rounded-lg p-6 flex flex-col items-center justify-center text-center transform hover:scale-105 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
    <div className="w-16 h-16 mb-4 text-cyan-400">{icon}</div>
    <h3 className="text-lg font-semibold text-gray-200">{name}</h3>
  </div>
);

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">Habilidades</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill) => (
            <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
