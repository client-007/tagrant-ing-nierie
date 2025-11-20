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

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {language === 'fr' ? 'Carrières' : 'Careers'}
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-95">
            {language === 'fr'
              ? 'Rejoignez une équipe d\'experts passionnés par l\'ingénierie et l\'innovation'
              : 'Join a team of experts passionate about engineering and innovation'}
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === 'fr' ? 'Pourquoi nous rejoindre ?' : 'Why Join Us?'}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {language === 'fr'
                ? 'Chez TAGRANT INGENIERIE, nous croyons que nos employés sont notre plus grande force. Nous offrons un environnement de travail stimulant où l\'innovation, l\'apprentissage continu et le développement professionnel sont encouragés.'
                : 'At TAGRANT INGENIERIE, we believe that our employees are our greatest strength. We offer a stimulating work environment where innovation, continuous learning and professional development are encouraged.'}
            </p>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {language === 'fr' ? 'Postes ouverts' : 'Open Positions'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {jobs.map((job, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{job.title}</CardTitle>
                  <CardDescription className="space-y-2">
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-sm">
                      <Briefcase className="h-4 w-4 mr-2 text-primary" />
                      {job.type}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{job.description}</p>
                  <Button className="w-full">
                    {language === 'fr' ? 'Postuler' : 'Apply Now'}
                  </Button>
                </CardContent>
              </Card>
            ))}
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
