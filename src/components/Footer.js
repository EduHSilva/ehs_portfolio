import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../mock';

const Footer = () => {
  const { t } = useLanguage();

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: portfolioData.personal.github,
      label: 'GitHub'
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: portfolioData.personal.linkedin,
      label: 'LinkedIn'
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: `mailto:${portfolioData.personal.email}`,
      label: 'Email'
    }
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              {t('footer.copyright')}
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;