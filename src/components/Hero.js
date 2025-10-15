import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowDown, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { portfolioData } from '../mock';

const Hero = () => {
  const { language, t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-2">
            <p className="text-muted-foreground text-lg font-light">
              {t('hero.greeting')}
            </p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              {portfolioData.personal.name}
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-light">
              {portfolioData.personal.title[language]}
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              {portfolioData.summary[language]}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="px-8 py-3 text-base"
            >
              {t('hero.cta')}
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              asChild
              className="px-8 py-3 text-base"
            >
              <a 
                href={portfolioData.personal.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                GitHub
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;