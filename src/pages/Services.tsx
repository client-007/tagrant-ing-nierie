import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, FolderKanban, FileText, Wrench, GraduationCap } from 'lucide-react';
import serviceProject from '@/assets/service-project.jpg';
import serviceStudies from '@/assets/service-studies.jpg';
import serviceInspection from '@/assets/service-inspection.jpg';
import serviceTraining from '@/assets/service-training.jpg';

const Services = () => {
  const { t, language } = useLanguage();

  const services = [
    {
      icon: FolderKanban,
      title: t('services.project'),
      description: t('services.project.desc'),
      image: serviceProject,
      link: '/services/project-management',
      details:
        language === 'fr'
          ? 'Support opérationnel en génie civil et infrastructure pour sécuriser les plannings, les méthodes et la livraison des projets.'
          : 'Operational support in civil engineering and infrastructure to secure schedules, methods and project delivery.',
    },
    {
      icon: FileText,
      title: t('services.studies'),
      description: t('services.studies.desc'),
      image: serviceStudies,
      link: '/services/technical-studies',
      details:
        language === 'fr'
          ? 'Études d\'exécution, coordination BIM et synthèse technique pour vos projets d\'infrastructure.'
          : 'Execution studies, BIM coordination and technical synthesis for your infrastructure projects.',
    },
    {
      icon: Wrench,
      title: t('services.inspection'),
      description: t('services.inspection.desc'),
      image: serviceInspection,
      link: '/services/inspection',
      details:
        language === 'fr'
          ? 'Services de diagnostic avancés pour les structures en béton et en acier pour évaluer la sécurité, la durabilité et la performance.'
          : 'Advanced diagnostic services for concrete and steel structures to assess safety, durability, and performance.',
    },
    {
      icon: GraduationCap,
      title: t('services.training'),
      description: t('services.training.desc'),
      image: serviceTraining,
      link: '/services/training',
      details:
        language === 'fr'
          ? 'Programmes de formation professionnelle en ingénierie, gestion de projet et outils numériques.'
          : 'Professional training programs in engineering, project management and digital tools.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('services.title')}</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-95">
            {language === 'fr'
              ? 'Des solutions d\'ingénierie complètes pour vos projets d\'infrastructure'
              : 'Comprehensive engineering solutions for your infrastructure projects'}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-xl transition-all border-2 hover:border-primary/50"
                >
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                        <CardDescription className="text-base leading-relaxed">
                          {service.details}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" 
                      asChild
                    >
                      <Link to={service.link}>
                        {t('services.learn')}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            {language === 'fr'
              ? 'Prêt à démarrer votre projet ?'
              : 'Ready to start your project?'}
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground">
            {language === 'fr'
              ? 'Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé.'
              : 'Contact us to discuss your needs and get a personalized quote.'}
          </p>
          <Button 
            size="lg" 
            className="bg-brand-yellow text-brand-navy hover:bg-brand-yellow/90 font-semibold border-2 border-brand-yellow"
            asChild
          >
            <Link to="/contact">
              {language === 'fr' ? 'Demander un devis' : 'Request a Quote'}
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
