import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from './ui/card';
import { portfolioData } from '../mock';

const About = () => {
  const { language, t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            {t('about.title')}
          </h2>
          
          <div className="grid gap-8 md:gap-12">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">
                  {t('about.objective.title')}
                </h3>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {portfolioData.objective[language]}
                </p>
              </CardContent>
            </Card>
            
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3 text-lg">
                    {t('contact.email')}
                  </h4>
                  <p className="text-muted-foreground">
                    {portfolioData.personal.email}
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3 text-lg">
                    {t('contact.phone')}
                  </h4>
                  <p className="text-muted-foreground">
                    {portfolioData.personal.phone}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;