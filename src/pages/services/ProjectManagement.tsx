import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { CheckCircle2, FolderKanban } from 'lucide-react';
import serviceProject from '@/assets/service-project.jpg';

const ProjectManagement = () => {
  const { language } = useLanguage();

  const capabilities =
    language === 'fr'
      ? [
          'Analyse de variance des plannings',
          'Expertise des méthodes d\'exécution',
          'Opérations sur sites occupés',
          'Comparaison de scénarios et support aux décisions',
          'Gestion des réclamations contractuelles',
        ]
      : [
          'Schedule variance analysis',
          'Execution methods expertise',
          'Operations on occupied sites',
          'Scenario comparison & decision support',
          'Contractual claims management',
        ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/90 to-primary/70">
        <div className="absolute inset-0">
          <img
            src={serviceProject}
            alt="Project Management"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <FolderKanban className="h-16 w-16 mx-auto mb-6 text-primary-foreground" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
            {language === 'fr' ? 'Gestion de Projet' : 'Project Management'}
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/95">
            {language === 'fr'
              ? 'Support opérationnel en génie civil et infrastructure pour sécuriser les plannings, les méthodes et la livraison des projets.'
              : 'Operational support in civil engineering and infrastructure to secure schedules, methods and project delivery.'}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              {language === 'fr' ? 'Notre Approche' : 'Our Approach'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {language === 'fr'
                ? 'Nous fournissons un support de projet intégré sur site, opérant au cœur du chantier pour transformer les études en solutions immédiatement réalisables. Notre équipe travaille en étroite collaboration avec vos équipes pour garantir le succès de vos projets d\'infrastructure.'
                : 'We provide integrated on-site project support, operating at the heart of the site to transform studies into immediately implementable solutions. Our team works closely with your teams to ensure the success of your infrastructure projects.'}
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
              {language === 'fr' ? 'Discutons de Votre Projet' : 'Let\'s Discuss Your Project'}
            </h3>
            <p className="text-muted-foreground mb-8">
              {language === 'fr'
                ? 'Contactez-nous pour découvrir comment nous pouvons vous aider.'
                : 'Contact us to learn how we can help you.'}
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

export default ProjectManagement;
