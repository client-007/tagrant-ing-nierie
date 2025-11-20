import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroCarousel } from '@/components/HeroCarousel';
import { TestimonialCarousel } from '@/components/TestimonialCarousel';
import { ArrowRight, Shield, Award, Users, Lightbulb, Heart, Zap, Target, Eye } from 'lucide-react';
import serviceProject from '@/assets/service-project.jpg';
import serviceStudies from '@/assets/service-studies.jpg';
import serviceInspection from '@/assets/service-inspection.jpg';
import serviceTraining from '@/assets/service-training.jpg';

const Index = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t('services.project'),
      description: t('services.project.desc'),
      image: serviceProject,
      link: '/services/project-management',
    },
    {
      title: t('services.studies'),
      description: t('services.studies.desc'),
      image: serviceStudies,
      link: '/services/technical-studies',
    },
    {
      title: t('services.inspection'),
      description: t('services.inspection.desc'),
      image: serviceInspection,
      link: '/services/inspection',
    },
    {
      title: t('services.training'),
      description: t('services.training.desc'),
      image: serviceTraining,
      link: '/services/training',
    },
  ];

  const values = [
    { 
      title: t('values.integrity'), 
      description: t('values.integrity.desc'),
      icon: Shield 
    },
    { 
      title: t('values.excellence'), 
      description: t('values.excellence.desc'),
      icon: Award 
    },
    { 
      title: t('values.collaboration'), 
      description: t('values.collaboration.desc'),
      icon: Users 
    },
    { 
      title: t('values.innovation'), 
      description: t('values.innovation.desc'),
      icon: Lightbulb 
    },
    { 
      title: t('values.sustainability'), 
      description: t('values.sustainability.desc'),
      icon: Heart 
    },
    { 
      title: t('values.agility'), 
      description: t('values.agility.desc'),
      icon: Zap 
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Company Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-8 md:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              {t('overview.title')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('overview.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {t('services.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group flex flex-col">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                </div>
                <CardHeader className="flex-1">
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Link 
                    to={service.link}
                    className="inline-flex items-center text-primary hover:text-brand-yellow transition-colors font-medium group/link"
                  >
                    {t('services.learn')}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-card rounded-lg p-8 flex flex-col shadow-sm">
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">{t('mission.title')}</h2>
              </div>
              <p className="text-foreground/80 leading-relaxed">{t('mission.text')}</p>
            </div>
            <div className="bg-card rounded-lg p-8 flex flex-col shadow-sm">
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-16 w-16 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Eye className="h-8 w-8 text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">{t('vision.title')}</h2>
              </div>
              <p className="text-foreground/80 leading-relaxed">{t('vision.text')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {t('values.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('values.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div 
                  key={index} 
                  className="bg-card border-l-4 border-primary rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 rounded-lg bg-brand-yellow flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-brand-navy" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Testimonials */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {t('team.title')}
            </h2>
            <p className="text-lg text-muted-foreground">{t('team.subtitle')}</p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy to-primary opacity-90" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-lg mb-8 opacity-95">
              {t('cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-brand-yellow text-brand-navy hover:bg-brand-yellow/90 font-semibold"
                asChild
              >
                <Link to="/contact">{t('cta.quote')}</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent text-white border-white hover:bg-white/10"
                asChild
              >
                <Link to="/services">{t('cta.services')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
