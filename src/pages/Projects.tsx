import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import projectImage from '@/assets/project-viaduct-a2.png';

const Projects = () => {
  const { language } = useLanguage();

  const projects = [
    {
      id: 'viaduct-a2',
      image: projectImage,
      title: {
        fr: 'Viaduc A2 — Franchissement du CSNE',
        en: 'Viaduct A2 — Crossing of the CSNE'
      },
      service: {
        fr: 'Gestion de projet',
        en: 'Project Management'
      },
      status: {
        fr: 'En cours',
        en: 'Ongoing'
      },
      link: '/projects/viaduct-a2'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Title Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-xl md:text-2xl font-medium text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {language === 'fr'
              ? 'Découvrez comment notre équipe applique précision technique et innovation à travers divers projets d\'infrastructure en France'
              : 'Discover how our team applies engineering precision and innovation across diverse infrastructure projects in France'}
          </h1>
        </div>
      </section>

      {/* Latest Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {language === 'fr' ? 'Derniers Projets' : 'Latest Projects'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <div className="aspect-video w-full overflow-hidden bg-muted">
                    <img
                      src={project.image}
                      alt={project.title[language]}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex gap-2 mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {project.service[language]}
                    </Badge>
                    <Badge variant="default" className="text-xs">
                      {project.status[language]}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2 line-clamp-2">
                    {project.title[language]}
                  </CardTitle>
                </CardContent>
                <CardFooter>
                  <Link to={project.link} className="w-full">
                    <Button className="w-full group">
                      {language === 'fr' ? 'Voir les détails du projet' : 'View project details'}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
