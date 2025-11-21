import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { CheckCircle2, Wrench } from 'lucide-react';
import serviceInspection from '@/assets/service-inspection.jpg';

const Inspection = () => {
  const { language } = useLanguage();

  const capabilities =
    language === 'fr'
      ? [
          'Tests non destructifs (NDT)',
          'Modélisation par éléments finis',
          'Inspections visuelles basées sur drones',
          'Numérisation laser 3D',
          'Conformité avec EN 1992, EN 1993, EN 1504',
        ]
      : [
          'Non-destructive testing (NDT)',
          'Finite Element Modeling',
          'Drone-based visual inspections',
          '3D laser scanning',
          'Compliance with EN 1992, EN 1993, EN 1504',
        ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/90 to-primary/70">
        <div className="absolute inset-0">
          <img
            src={serviceInspection}
            alt="Inspection Services"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <Wrench className="h-16 w-16 mx-auto mb-6 text-primary-foreground" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
            {language === 'fr' ? 'Inspection, Maintenance & Réparation' : 'Inspection, Maintenance & Repair'}
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/95">
            {language === 'fr'
              ? 'Services de diagnostic avancés pour évaluer la sécurité, la durabilité et la performance des structures.'
              : 'Advanced diagnostic services to assess safety, durability, and performance of structures.'}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              {language === 'fr' ? 'Nos Services de Diagnostic' : 'Our Diagnostic Services'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {language === 'fr'
                ? 'Nous fournissons des rapports précis et basés sur les données qui soutiennent la planification des réparations et assurent la conformité aux normes européennes. Notre expertise couvre les structures en béton et en acier.'
                : 'We deliver accurate, data-driven reports that support repair planning and ensure compliance with European standards. Our expertise covers concrete and steel structures.'}
            </p>
          </div>

          {/* Key Capabilities */}
          <Card className="mb-12">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                {language === 'fr' ? 'Capacités Clés' : 'Key Capabilities'}
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
              {language === 'fr' ? 'Besoin d\'une Inspection ?' : 'Need an Inspection?'}
            </h3>
            <p className="text-muted-foreground mb-8">
              {language === 'fr'
                ? 'Contactez-nous pour planifier une inspection de vos structures.'
                : 'Contact us to schedule an inspection of your structures.'}
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

export default Inspection;
