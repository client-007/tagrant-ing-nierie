import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { CheckCircle2, GraduationCap } from 'lucide-react';
import serviceTraining from '@/assets/service-training.jpg';

const ProfessionalTraining = () => {
  const { language } = useLanguage();

  const capabilities =
    language === 'fr'
      ? [
          'Développement de compétences techniques',
          'Formation en gestion de projet',
          'Outils logiciels & numériques',
          'Normes de sécurité et qualité',
          'Support de certification professionnelle',
        ]
      : [
          'Technical skills development',
          'Project management training',
          'Software & digital tools',
          'Safety & quality standards',
          'Professional certification support',
        ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/90 to-primary/70">
        <div className="absolute inset-0">
          <img
            src={serviceTraining}
            alt="Professional Training"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <GraduationCap className="h-16 w-16 mx-auto mb-6 text-primary-foreground" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
            {language === 'fr' ? 'Formation Professionnelle' : 'Professional Training'}
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/95">
            {language === 'fr'
              ? 'Programmes de formation complets pour développer les compétences techniques et l\'expertise professionnelle.'
              : 'Comprehensive training programs to develop technical skills and professional expertise.'}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              {language === 'fr' ? 'Notre Programme de Formation' : 'Our Training Program'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {language === 'fr'
                ? 'Notre formation comble le fossé entre la théorie et la pratique, permettant aux ingénieurs et aux équipes d\'exceller dans leurs rôles. Nous offrons des programmes sur mesure adaptés à vos besoins spécifiques.'
                : 'Our training bridges the gap between theory and practice, empowering engineers and teams to excel in their roles. We offer customized programs tailored to your specific needs.'}
            </p>
          </div>

          {/* Key Capabilities */}
          <Card className="mb-12">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                {language === 'fr' ? 'Domaines de Formation' : 'Training Areas'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{capability}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              {language === 'fr' ? 'Développez Vos Compétences' : 'Develop Your Skills'}
            </h3>
            <p className="text-muted-foreground mb-8">
              {language === 'fr'
                ? 'Contactez-nous pour découvrir nos programmes de formation.'
                : 'Contact us to learn about our training programs.'}
            </p>
            <Button size="lg" className="bg-brand-yellow text-brand-navy hover:bg-brand-yellow/90 font-semibold" asChild>
              <Link to="/contact">
                {language === 'fr' ? 'Nous Contacter' : 'Contact Us'}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProfessionalTraining;
