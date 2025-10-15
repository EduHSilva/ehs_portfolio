import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || 'pt';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'pt' : 'en');
  };

  const t = (key) => {
    const translations = {
      'nav.about': { en: 'About', pt: 'Sobre' },
      'nav.experience': { en: 'Experience', pt: 'Experiência' },
      'nav.skills': { en: 'Skills', pt: 'Habilidades' },
      'nav.education': { en: 'Education', pt: 'Educação' },
      'nav.contact': { en: 'Contact', pt: 'Contato' },
      
      'hero.greeting': { en: 'Hello, I\'m', pt: 'Olá, eu sou' },
      'hero.cta': { en: 'Get in touch', pt: 'Entre em contato' },
      
      'about.title': { en: 'About Me', pt: 'Sobre Mim' },
      'about.objective.title': { en: 'Professional Objective', pt: 'Objetivo Profissional' },
      
      'experience.title': { en: 'Professional Experience', pt: 'Experiência Profissional' },
      'experience.technologies': { en: 'Technologies Used', pt: 'Tecnologias Utilizadas' },
      'experience.present': { en: 'Present', pt: 'Atualmente' },
      
      'skills.title': { en: 'Technical Skills', pt: 'Habilidades Técnicas' },
      'skills.advanced': { en: 'Advanced', pt: 'Avançado' },
      'skills.intermediate': { en: 'Intermediate', pt: 'Intermediário' },
      'skills.basic': { en: 'Basic', pt: 'Básico' },
      
      'education.title': { en: 'Education', pt: 'Educação' },
      
      'contact.title': { en: 'Contact', pt: 'Contato' },
      'contact.subtitle': { en: 'Let\'s work together', pt: 'Vamos trabalhar juntos' },
      'contact.email': { en: 'Email', pt: 'E-mail' },
      'contact.phone': { en: 'Phone', pt: 'Telefone' },
      'contact.linkedin': { en: 'LinkedIn', pt: 'LinkedIn' },
      'contact.github': { en: 'GitHub', pt: 'GitHub' },
      
      'footer.copyright': { en: '© 2025 Eduardo Henrique da Silva. All rights reserved.', pt: '© 2025 Eduardo Henrique da Silva. Todos os direitos reservados.' }
    };
    
    return translations[key] ? translations[key][language] : key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};