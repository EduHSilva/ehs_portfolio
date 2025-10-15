import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { portfolioData } from '../mock';

const Education = () => {
  const { language, t } = useLanguage();

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            {t('education.title')}
          </h2>
          
          <div className="space-y-8">
            {portfolioData.education.map((edu) => (
              <Card key={edu.id} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-semibold">
                        {edu.degree[language]}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <GraduationCap className="h-4 w-4" />
                        <span className="font-medium">{edu.institution}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                      <Calendar className="h-4 w-4" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                  
                  {edu.distinction && (
                    <div className="flex items-center gap-2 mt-4">
                      <Award className="h-4 w-4 text-yellow-600" />
                      <Badge variant="secondary" className="text-sm">
                        {edu.distinction[language]}
                      </Badge>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;