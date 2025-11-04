
import React from 'react';
import { GithubIcon } from './icons/SocialIcons';

const projects = [
    {
        title: "Automação de API com Python",
        description: "Projeto de automação de testes para uma API REST utilizando Python, Pytest e Requests.",
        tags: ["Python", "Pytest", "API REST"],
        url: "https://github.com/GilvanS/Api_Rest_Test_Automation_Superest_Python"
    },
    {
        title: "Automação de API com Cypress",
        description: "Exemplo prático de automação de testes de API com Cypress, explorando seus comandos e funcionalidades.",
        tags: ["Cypress", "JavaScript", "API Testing"],
        url: "https://github.com/GilvanS/api-test-automation-practice-cypress"
    },
    {
        title: "Automação de API com Java",
        description: "Automação de testes para uma API de gerenciador de tarefas usando Java e REST Assured.",
        tags: ["Java", "REST Assured", "TestNG"],
        url: "https://github.com/GilvanS/gerenciador-de-tarefas-api-test-automation-java"
    },
    {
        title: "Automação Web com Robot Framework",
        description: "Projeto de automação de testes web utilizando Robot Framework e a biblioteca SeleniumLibrary.",
        tags: ["Robot Framework", "Selenium", "Web"],
        url: "https://github.com/GilvanS/web-test-automation-robot-framework"
    }
];

const ProjectCard: React.FC<{ title: string; description: string; tags: string[]; url: string }> = ({ title, description, tags, url }) => (
    <div className="bg-gray-800 border-2 border-gray-700 rounded-lg p-6 flex flex-col h-full transform hover:-translate-y-2 transition-transform duration-300 group">
        <div className="flex-grow">
            <h3 className="text-xl font-bold mb-2 text-cyan-400">{title}</h3>
            <p className="text-gray-400 mb-4">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {tags.map(tag => (
                    <span key={tag} className="bg-cyan-900 text-cyan-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">{tag}</span>
                ))}
            </div>
        </div>
        <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-cyan-400 hover:text-cyan-200 font-semibold mt-auto">
            Ver no GitHub
            <span className="w-5 h-5 ml-2">
                <GithubIcon />
            </span>
        </a>
    </div>
);

const ProjectsSection: React.FC = () => {
    return (
        <section id="projects" className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">Projetos</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
