import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';
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
    { title: t('values.integrity'), description: t('values.integrity.desc') },
    { title: t('values.excellence'), description: t('values.excellence.desc') },
    { title: t('values.collaboration'), description: t('values.collaboration.desc') },
    { title: t('values.innovation'), description: t('values.innovation.desc') },
    { title: t('values.sustainability'), description: t('values.sustainability.desc') },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10" />
        <img
          src={heroImage}
          alt="Engineering infrastructure"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl mx-auto">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-95">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/services">
                {t('hero.cta')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link to="/contact">{t('hero.contact')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            {t('overview.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('overview.description')}
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            {t('services.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to={service.link}>
                      {t('services.learn')}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('mission.title')}</h2>
              <p className="text-lg opacity-95">{t('mission.text')}</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('vision.title')}</h2>
              <p className="text-lg opacity-95">{t('vision.text')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            {t('values.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Testimonials */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            {t('team.title')}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">{t('team.subtitle')}</p>
          <Button variant="outline" size="lg" asChild>
            <Link to="/about">{t('nav.about')}</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
