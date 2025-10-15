import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Star, StarHalf } from 'lucide-react';
import { portfolioData } from '../mock';

const Skills = () => {
  const { t } = useLanguage();

  const skillLevels = [
    {
      level: 'advanced',
      title: t('skills.advanced'),
      skills: portfolioData.skills.advanced,
      color: 'default',
      icon: <Star className="h-4 w-4" />
    },
    {
      level: 'intermediate',
      title: t('skills.intermediate'),
      skills: portfolioData.skills.intermediate,
      color: 'secondary',
      icon: <StarHalf className="h-4 w-4" />
    },
    {
      level: 'basic',
      title: t('skills.basic'),
      skills: portfolioData.skills.basic,
      color: 'outline',
      icon: <Star className="h-4 w-4 opacity-50" />
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            {t('skills.title')}
          </h2>
          
          <div className="grid gap-8 md:grid-cols-3">
            {skillLevels.map((category) => (
              <Card key={category.level} className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {category.icon}
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, index) => (
                      <Badge 
                        key={index} 
                        variant={category.color}
                        className="text-sm py-1"
                      >
                        {skill}
                      </Badge>
                    ))}
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

export default Skills;