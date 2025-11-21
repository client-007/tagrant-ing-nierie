import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Briefcase, Clock } from 'lucide-react';

const Jobs = () => {
  const { language } = useLanguage();

  const jobs = [
    {
      title: language === 'fr' ? 'Ingénieur Projet Senior' : 'Senior Project Engineer',
      location: 'Paris, France',
      type: language === 'fr' ? 'CDI' : 'Full-time',
      description:
        language === 'fr'
          ? 'Nous recherchons un ingénieur projet expérimenté pour accompagner nos clients dans la gestion de projets d\'infrastructure complexes.'
          : 'We are looking for an experienced project engineer to support our clients in managing complex infrastructure projects.',
    },
    {
      title: language === 'fr' ? 'Ingénieur BIM' : 'BIM Engineer',
      location: 'Lyon, France',
      type: language === 'fr' ? 'CDI' : 'Full-time',
      description:
        language === 'fr'
          ? 'Rejoignez notre équipe pour coordonner les études BIM et optimiser les projets d\'infrastructure.'
          : 'Join our team to coordinate BIM studies and optimize infrastructure projects.',
    },
    {
      title: language === 'fr' ? 'Inspecteur de Structures' : 'Structural Inspector',
      location: 'Marseille, France',
      type: language === 'fr' ? 'CDI' : 'Full-time',
      description:
        language === 'fr'
          ? 'Spécialiste en inspection et diagnostic de structures en béton et en acier pour nos projets d\'infrastructure.'
          : 'Specialist in inspection and diagnostics of concrete and steel structures for our infrastructure projects.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Why Join Us */}
      <section className="py-16 mt-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === 'fr' ? 'Pourquoi nous rejoindre ?' : 'Why Join Us?'}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {language === 'fr'
                ? 'Nous n\'avons actuellement aucun poste ouvert. Cependant, nous acceptons les candidatures spontanées : CV, candidatures spontanées et demandes de stage/alternance. Veuillez soumettre votre CV et une brève lettre de motivation via le formulaire de contact ou la page Emplois - nous conserverons vos coordonnées et vous contacterons si une opportunité appropriée se présente.'
                : 'We currently don\'t have open positions. However, we welcome speculative applications: CVs, spontaneous applications, and inquiries for internships/alternance. Please submit your CV and a short cover note via the contact form or the Jobs page — we will keep your details and contact you if a suitable opportunity appears.'}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === 'fr'
              ? 'Vous ne trouvez pas le poste idéal ?'
              : "Can't find the perfect position?"}
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            {language === 'fr'
              ? 'Envoyez-nous votre candidature spontanée, nous serions ravis d\'échanger avec vous.'
              : 'Send us your unsolicited application, we would be happy to discuss with you.'}
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="mailto:careers@tagrant.fr">
              {language === 'fr' ? 'Candidature spontanée' : 'Spontaneous Application'}
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Jobs;
