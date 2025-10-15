import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { useToast } from '../hooks/use-toast';
import { 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  ExternalLink, 
  FileText,
  Copy,
  Check
} from 'lucide-react';
import { portfolioData } from '../mock';

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [copiedItems, setCopiedItems] = useState({});

  const copyToClipboard = async (text, item) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItems(prev => ({ ...prev, [item]: true }));
      toast({
        title: "Copied to clipboard!",
        description: `${text} copied to clipboard.`,
      });
      setTimeout(() => {
        setCopiedItems(prev => ({ ...prev, [item]: false }));
      }, 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const contactItems = [
    {
      id: 'email',
      icon: <Mail className="h-5 w-5" />,
      label: t('contact.email'),
      value: portfolioData.personal.email,
      href: `mailto:${portfolioData.personal.email}`,
      copyable: true
    },
    {
      id: 'phone',
      icon: <Phone className="h-5 w-5" />,
      label: t('contact.phone'),
      value: portfolioData.personal.phone,
      href: `tel:${portfolioData.personal.phone.replace(/[^0-9]/g, '')}`,
      copyable: true
    },
    {
      id: 'linkedin',
      icon: <Linkedin className="h-5 w-5" />,
      label: t('contact.linkedin'),
      value: 'LinkedIn Profile',
      href: portfolioData.personal.linkedin,
      external: true
    },
    {
      id: 'github',
      icon: <Github className="h-5 w-5" />,
      label: t('contact.github'),
      value: 'GitHub Profile',
      href: portfolioData.personal.github,
      external: true
    },
    {
      id: 'certificates',
      icon: <FileText className="h-5 w-5" />,
      label: 'Certificates',
      value: 'View Certificates',
      href: portfolioData.personal.certificates,
      external: true
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-muted-foreground mb-16">
            {t('contact.subtitle')}
          </p>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {contactItems.map((item) => (
              <Card key={item.id} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      {item.icon}
                    </div>
                    
                    <div className="text-center space-y-2">
                      <h3 className="font-semibold">{item.label}</h3>
                      <p className="text-sm text-muted-foreground break-all">
                        {item.value}
                      </p>
                    </div>
                    
                    <div className="flex gap-2 w-full">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        asChild
                        className="flex-1"
                      >
                        <a 
                          href={item.href}
                          target={item.external ? '_blank' : undefined}
                          rel={item.external ? 'noopener noreferrer' : undefined}
                          className="flex items-center justify-center gap-2"
                        >
                          {item.external ? (
                            <ExternalLink className="h-4 w-4" />
                          ) : (
                            item.icon
                          )}
                          {item.external ? 'Visit' : 'Contact'}
                        </a>
                      </Button>
                      
                      {item.copyable && (
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => copyToClipboard(item.value, item.id)}
                          className="px-3"
                        >
                          {copiedItems[item.id] ? (
                            <Check className="h-4 w-4" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      )}
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

export default Contact;