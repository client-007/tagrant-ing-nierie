import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroCarousel } from '@/components/HeroCarousel';
import { TestimonialCarousel } from '@/components/TestimonialCarousel';
import { ArrowRight, Shield, Award, Users, Lightbulb, Heart, Zap, Target, Eye, FolderKanban, FileText, Wrench, GraduationCap } from 'lucide-react';
import serviceProject from '@/assets/service-project.jpg';
import serviceStudies from '@/assets/service-studies.jpg';
import serviceInspection from '@/assets/service-inspection-engineer.jpg';
import serviceTraining from '@/assets/service-training.jpg';

const Index = () => {
  const { t } = useLanguage();

  const { language } = useLanguage();

  const services = [
    {
      icon: FolderKanban,
      title: t('services.project'),
      description: t('services.project.desc'),
      image: serviceProject,
      link: '/services/project-management',
      capabilities:
        language === 'fr'
          ? [
              'Analyse de variance des plannings',
              'Expertise des méthodes d\'exécution',
              'Opérations sur sites occupés',
            ]
          : [
              'Schedule variance analysis',
              'Execution methods expertise',
              'Operations on occupied sites',
            ],
    },
    {
      icon: FileText,
      title: t('services.studies'),
      description: t('services.studies.desc'),
      image: serviceStudies,
      link: '/services/technical-studies',
      capabilities:
        language === 'fr'
          ? [
              'Calculs structurels & vérifications',
              'Modélisation CAO/BIM (AutoCAD, Revit)',
              'Coordination conception-chantier',
            ]
          : [
              'Structural calculations & verifications',
              'CAD/BIM modeling (AutoCAD, Revit)',
              'Design-to-works coordination',
            ],
    },
    {
      icon: Wrench,
      title: t('services.inspection'),
      description: t('services.inspection.desc'),
      image: serviceInspection,
      link: '/services/inspection',
      capabilities:
        language === 'fr'
          ? [
              'Tests non destructifs (NDT)',
              'Modélisation par éléments finis',
              'Numérisation laser 3D',
            ]
          : [
              'Non-destructive testing (NDT)',
              'Finite Element Modeling',
              '3D laser scanning',
            ],
    },
    {
      icon: GraduationCap,
      title: t('services.professionalTraining'),
      description: t('services.professionalTraining.desc'),
      image: serviceTraining,
      link: '/services/professional-training',
      capabilities:
        language === 'fr'
          ? [
              'Développement de compétences techniques',
              'Formation en gestion de projet',
              'Normes de sécurité et qualité',
            ]
          : [
              'Technical skills development',
              'Project management training',
              'Safety & quality standards',
            ],
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
      <section className="py-12 bg-muted/30">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-xl transition-all border flex flex-col"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <IconComponent className="h-6 w-6 text-primary" />
                      <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base leading-relaxed text-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between">
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">
                        {language === 'fr' ? 'Capacités clés:' : 'Key Capabilities:'}
                      </h4>
                      <ul className="space-y-2">
                        {service.capabilities.map((capability, capIndex) => (
                          <li key={capIndex} className="flex items-start">
                            <span className="text-primary mr-2 mt-1">•</span>
                            <span className="text-sm text-muted-foreground">{capability}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" 
                      asChild
                    >
                      <Link to={service.link}>
                        {language === 'fr' ? 'En savoir plus' : 'Learn More'}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-4 mb-6">
                  <Target className="h-8 w-8 text-primary flex-shrink-0" />
                  <h2 className="text-2xl font-bold text-foreground">{t('mission.title')}</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed">{t('mission.text')}</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-accent/20">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-4 mb-6">
                  <Eye className="h-8 w-8 text-accent flex-shrink-0" />
                  <h2 className="text-2xl font-bold text-foreground">{t('vision.title')}</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed">{t('vision.text')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {t('values.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('values.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <IconComponent className="h-10 w-10 mb-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
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
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t('team.subtitle')}</p>
          </div>
          <div className="max-w-5xl mx-auto">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              {t('cta.title')}
            </h2>
            <p className="text-lg mb-8 text-muted-foreground">
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
                className="border-primary text-primary hover:bg-primary/10"
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
