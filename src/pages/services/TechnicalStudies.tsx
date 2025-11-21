import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { CheckCircle2, FileText } from 'lucide-react';
import serviceStudies from '@/assets/service-studies.jpg';

const TechnicalStudies = () => {
  const { language } = useLanguage();

  const capabilities =
    language === 'fr'
      ? [
          'Calculs structurels & vérifications',
          'Modélisation CAO/BIM (AutoCAD, Revit)',
          'Gestion des études d\'exécution',
          'Coordination conception-chantier',
          'Interface de support géotechnique',
        ]
      : [
          'Structural calculations & verifications',
          'CAD/BIM modeling (AutoCAD, Revit)',
          'Execution study management',
          'Design-to-works coordination',
          'Geotechnical support interface',
        ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/90 to-primary/70">
        <div className="absolute inset-0">
          <img
            src={serviceStudies}
            alt="Technical Studies"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <FileText className="h-16 w-16 mx-auto mb-6 text-primary-foreground" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
            {language === 'fr' ? 'Études Techniques & Coordination' : 'Technical Studies & Coordination'}
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/95">
            {language === 'fr'
              ? 'Études techniques fiables et modélisation précise pour assurer le succès de vos projets.'
              : 'Reliable technical studies and precise modeling to ensure the success of your projects.'}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              {language === 'fr' ? 'Notre Expertise' : 'Our Expertise'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {language === 'fr'
                ? 'Nous fournissons de l\'ingénierie assistée par ordinateur de haute qualité centrée sur la qualité des études et la continuité entre bureaux de conception et d\'exécution. Notre approche garantit que vos projets sont réalisés avec précision et efficacité.'
                : 'We deliver high-quality computer-aided engineering focused on study quality and continuity between design offices and execution. Our approach ensures your projects are executed with precision and efficiency.'}
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
              {language === 'fr' ? 'Prêt à Démarrer ?' : 'Ready to Get Started?'}
            </h3>
            <p className="text-muted-foreground mb-8">
              {language === 'fr'
                ? 'Demandez un devis pour vos besoins en études techniques.'
                : 'Request a quote for your technical studies needs.'}
            </p>
            <Button size="lg" className="bg-brand-yellow text-brand-navy hover:bg-brand-yellow/90 font-semibold" asChild>
              <Link to="/contact">
                {language === 'fr' ? 'Demander un Devis' : 'Request a Quote'}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TechnicalStudies;
