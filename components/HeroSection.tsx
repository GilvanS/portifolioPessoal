
import React, { useState, useEffect } from 'react';

const roles = ["Engenheiro de Software", "Testes Automatizados", "Backend Developer"];
const typingSpeed = 100;
const deletingSpeed = 50;
const delayBetweenRoles = 2000;

const HeroSection: React.FC = () => {
    const [text, setText] = useState('');
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const handleTyping = () => {
            const currentRole = roles[roleIndex];
            if (isDeleting) {
                if (charIndex > 0) {
                    setText(currentRole.substring(0, charIndex - 1));
                    setCharIndex(charIndex - 1);
                } else {
                    setIsDeleting(false);
                    setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
                }
            } else {
                if (charIndex < currentRole.length) {
                    setText(currentRole.substring(0, charIndex + 1));
                    setCharIndex(charIndex + 1);
                } else {
                    setTimeout(() => setIsDeleting(true), delayBetweenRoles);
                }
            }
        };

        const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, roleIndex, text]);


    return (
        <section id="home" className="pt-40 pb-24 md:pt-56 md:pb-40 flex items-center justify-center text-center bg-gray-900">
            <div className="relative z-10 p-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-4">
                    Olá, eu sou <span className="text-cyan-400">Gilvan Souza</span>
                </h1>
                <p className="text-2xl md:text-4xl text-gray-300">
                    Eu sou um <span className="text-cyan-400 font-semibold">{text}</span>
                    <span className="animate-ping">|</span>
                </p>
            </div>
        </section>
    );
};

export default HeroSection;