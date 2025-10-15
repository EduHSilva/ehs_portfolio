import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Building, Calendar } from 'lucide-react';
import { portfolioData } from '../mock';

const Experience = () => {
  const { language, t } = useLanguage();

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            {t('experience.title')}
          </h2>
          
          <div className="space-y-8">
            {portfolioData.experience.map((exp) => (
              <Card key={exp.id} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-semibold">
                        {exp.position[language]}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Building className="h-4 w-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period[language]}</span>
                    </div>
                  </div>
                  
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    {exp.description[language]}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold">
                      {t('experience.technologies')}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="text-sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;