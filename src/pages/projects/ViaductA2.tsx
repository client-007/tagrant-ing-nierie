import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Building2, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import projectImage from '@/assets/project-viaduct-a2.png';

const ViaductA2 = () => {
  const { language } = useLanguage();

  const projectData = {
    fr: {
      title: 'Viaduc A2 — Franchissement du CSNE',
      status: 'En cours',
      startDate: '29/09/2025',
      client: 'CARONI GC & Chantier Moderne — Groupe VINCI',
      service: 'Gestion de projet',
      mission: 'TAGRANT INGENIERIE accompagne CARONI GC & Chantier Moderne (Groupe VINCI) en assurant la coordination entre les bureaux d\'études (structure, terrassement, géotechnique) et l\'exécution chantier. Mission : favoriser l\'adéquation des études aux besoins chantier, limiter les reprises éventuelles et participer à la maîtrise des délais et des coûts.',
      keyMissions: [
        'Planifier les échéances et suivre l\'avancement des livrables',
        'Animer les réunions de coordination et assurer le reporting',
        'Analyse G2 pro & G3 : faciliter les échanges géotechnique/structure',
        'Valider les hypothèses et arbitrer les choix techniques',
        'Vérifier la cohérence des études avec les contraintes chantier',
        'Assurer la traçabilité des échanges et des modifications techniques',
        'Contribuer à la levée des réserves en lien avec les équipes terrain',
        'Proposer et mettre en place des améliorations de processus'
      ],
      benefits: 'Livrables fiables, exécution plus fluide, maîtrise des délais et réduction des risques opérationnels.',
      documentation: 'Présentation SANEF — Viaduc ICA2'
    },
    en: {
      title: 'Viaduct A2 — Crossing of the CSNE',
      status: 'Ongoing',
      startDate: '29/09/2025',
      client: 'CARONI GC & Chantier Moderne — VINCI Group',
      service: 'Project Management',
      mission: 'TAGRANT INGENIERIE is supporting CARONI GC & Chantier Moderne (VINCI Group) by coordinating between design offices (structures, earthworks, geotechnical) and site execution. Mission: ensure studies match site needs, limit potential rework and contribute to schedule and cost control.',
      keyMissions: [
        'Plan deadlines and monitor progress of deliverables',
        'Lead coordination meetings and manage reporting',
        'G2 pro & G3 analysis: facilitate geotechnical/structural exchanges',
        'Validate assumptions and arbitrate technical choices',
        'Verify consistency of studies with site constraints',
        'Ensure traceability of exchanges and technical modifications',
        'Support the resolution of outstanding issues with site teams',
        'Propose and implement process improvements'
      ],
      benefits: 'Reliable deliverables, smoother execution, improved schedule control and reduced operational risks.',
      documentation: 'Présentation SANEF — Viaduc ICA2'
    }
  };

  const content = projectData[language];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Back Button */}
      <section className="py-6 bg-muted/30">
        <div className="container mx-auto px-4">
          <Link to="/expertise">
            <Button variant="ghost" className="group">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              {language === 'fr' ? 'Retour aux projets' : 'Back to projects'}
            </Button>
          </Link>
        </div>
      </section>

      {/* Project Hero */}
      <section className="py-12 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap gap-3 mb-6">
              <Badge variant="secondary" className="text-sm">
                <Calendar className="mr-1 h-3 w-3" />
                {language === 'fr' ? 'Début: ' : 'Start: '}{content.startDate}
              </Badge>
              <Badge variant="default" className="text-sm">
                {content.status}
              </Badge>
              <Badge variant="outline" className="text-sm">
                {content.service}
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {content.title}
            </h1>

            <div className="flex items-center gap-2 text-muted-foreground mb-8">
              <Building2 className="h-5 w-5" />
              <span className="text-lg">{content.client}</span>
            </div>

            {/* Project Image */}
            <div className="mt-8">
              <img 
                src={projectImage} 
                alt={content.title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Mission Overview */}
            <Card>
              <CardHeader>
                <CardTitle>
                  {language === 'fr' ? 'Aperçu de la mission' : 'Mission Overview'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/90 leading-relaxed">
                  {content.mission}
                </p>
              </CardContent>
            </Card>

            {/* Key Missions */}
            <Card>
              <CardHeader>
                <CardTitle>
                  {language === 'fr' ? 'Nos missions clés' : 'Our Key Tasks'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {content.keyMissions.map((mission, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground/90">{mission}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
              <CardHeader>
                <CardTitle>
                  {language === 'fr' ? 'Bénéfices pour le client' : 'Benefits to the Client'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/90 leading-relaxed">
                  {content.benefits}
                </p>
              </CardContent>
            </Card>

            {/* Documentation */}
            <Card>
              <CardHeader>
                <CardTitle>
                  {language === 'fr' ? 'Documentation projet' : 'Project Documentation'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/90">
                  {content.documentation}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ViaductA2;
