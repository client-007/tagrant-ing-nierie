import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Briefcase, Clock, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectPlannerBrussels = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/jobs" className="text-primary hover:underline mb-4 inline-block">
              ← {language === 'fr' ? 'Retour aux offres' : 'Back to jobs'}
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Project Planner — Ouvrages souterrains
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              {language === 'fr' 
                ? 'Poste avec présence à Bruxelles'
                : 'Position with presence in Brussels'}
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Bruxelles, Belgique</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-primary" />
                <span>{language === 'fr' ? 'Temps plein' : 'Full-time'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>{language === 'fr' ? 'CDI / CDD / Mission' : 'Permanent / Fixed-term / Contract'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Description */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Introduction */}
            <Card>
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed">
                  {language === 'fr'
                    ? "Nous recrutons pour TAGRANT INGENIERIE un(e) Project Planner confirmé(e) pour participer à la planification et à la coordination d'importants travaux d'infrastructure souterraine. Le rôle nécessite une présence régulière sur site à Bruxelles afin d'assurer le suivi opérationnel des phases de conception et d'exécution."
                    : "We are recruiting for TAGRANT INGENIERIE an experienced Project Planner to participate in the planning and coordination of major underground infrastructure works. The role requires regular on-site presence in Brussels to ensure operational monitoring of design and execution phases."}
                </p>
              </CardContent>
            </Card>

            {/* Responsibilities */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                {language === 'fr' ? 'Vos responsabilités' : 'Your Responsibilities'}
              </h2>
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        {language === 'fr'
                          ? "Mettre en place et piloter le planning général du projet (conception → réalisation → essais → mise en service), en actualisant jalons et livrables."
                          : "Set up and manage the overall project schedule (design → execution → testing → commissioning), updating milestones and deliverables."}
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        {language === 'fr'
                          ? "Décomposer les tâches, définir le phasage et séquencer les lots pour garantir la fluidité des opérations."
                          : "Break down tasks, define phasing and sequence work packages to ensure smooth operations."}
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        {language === 'fr'
                          ? "Suivre l'avancement des documents de conception et vérifier la disponibilité des éléments techniques nécessaires au chantier."
                          : "Monitor design document progress and verify availability of technical elements required for construction."}
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        {language === 'fr'
                          ? "Coordonner les bureaux d'études et les entreprises d'exécution ; gérer les interfaces entre lots et faciliter les arbitrages."
                          : "Coordinate design offices and construction companies; manage interfaces between work packages and facilitate arbitration."}
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        {language === 'fr'
                          ? "Anticiper les retards et risques, proposer des mesures correctives et préparer des scénarios alternatifs."
                          : "Anticipate delays and risks, propose corrective measures and prepare alternative scenarios."}
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        {language === 'fr'
                          ? "Produire des synthèses et reportings clairs pour la direction de projet et les parties prenantes."
                          : "Produce clear summaries and reports for project management and stakeholders."}
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        {language === 'fr'
                          ? "Utiliser et enrichir les outils de planification (MS Project / TILOS) et favoriser l'intégration du BIM/maquette numérique quand pertinent."
                          : "Use and enhance planning tools (MS Project / TILOS) and promote BIM/digital model integration when relevant."}
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Daily Activities */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                {language === 'fr' ? 'Activités quotidiennes' : 'Daily Activities'}
              </h2>
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        {language === 'fr'
                          ? "Animation des réunions de coordination et suivi des actions."
                          : "Leading coordination meetings and action tracking."}
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        {language === 'fr'
                          ? "Mise à jour des plannings détaillés et contrôle des écarts."
                          : "Updating detailed schedules and monitoring deviations."}
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        {language === 'fr'
                          ? "Inventaire des contraintes techniques, administratives et RH influant sur le calendrier."
                          : "Inventory of technical, administrative and HR constraints affecting the schedule."}
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        {language === 'fr'
                          ? "Rédaction de notes d'arbitrage et de recommandations opérationnelles."
                          : "Writing arbitration notes and operational recommendations."}
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Required Profile */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                {language === 'fr' ? 'Profil recherché' : 'Required Profile'}
              </h2>
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">
                      {language === 'fr' ? 'Formation' : 'Education'}
                    </h3>
                    <p>
                      {language === 'fr'
                        ? "Ingénieur / Master en génie civil, management de projet ou équivalent."
                        : "Engineer / Master's degree in civil engineering, project management or equivalent."}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">
                      {language === 'fr' ? 'Expérience' : 'Experience'}
                    </h3>
                    <p>
                      {language === 'fr'
                        ? "Minimum 5 ans sur projets d'infrastructure ou ouvrages souterrains."
                        : "Minimum 5 years on infrastructure projects or underground structures."}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">
                      {language === 'fr' ? 'Compétences' : 'Skills'}
                    </h3>
                    <p>
                      {language === 'fr'
                        ? "Maîtrise des logiciels de planification (MS Project, Primavera, TILOS), bonne compréhension des méthodes d'exécution en génie civil et notions de géotechnique."
                        : "Proficiency in planning software (MS Project, Primavera, TILOS), good understanding of civil engineering execution methods and geotechnical concepts."}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">
                      {language === 'fr' ? 'Savoir-être' : 'Soft Skills'}
                    </h3>
                    <p>
                      {language === 'fr'
                        ? "Sens de l'anticipation, esprit de synthèse, excellente communication et capacité à fédérer des interlocuteurs techniques et opérationnels."
                        : "Anticipation skills, synthesis ability, excellent communication and ability to bring together technical and operational stakeholders."}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">
                      {language === 'fr' ? 'Langues' : 'Languages'}
                    </h3>
                    <p>
                      {language === 'fr'
                        ? "Français courant ; anglais professionnel souhaité."
                        : "Fluent French; professional English desired."}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Terms */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                {language === 'fr' ? 'Conditions' : 'Terms'}
              </h2>
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">
                      {language === 'fr' ? 'Lieu' : 'Location'}
                    </h3>
                    <p>
                      {language === 'fr'
                        ? "Travail sur chantier et en bureaux à Bruxelles (présence régulière requise selon phasage)."
                        : "Work on construction site and in offices in Brussels (regular presence required depending on phasing)."}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">
                      {language === 'fr' ? 'Type de contrat' : 'Contract Type'}
                    </h3>
                    <p>
                      {language === 'fr'
                        ? "À définir selon profil (mission, CDD, CDI). Rémunération selon expérience."
                        : "To be defined according to profile (contract, fixed-term, permanent). Salary according to experience."}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Apply Section */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">
                  {language === 'fr' ? 'Candidature' : 'Application'}
                </h2>
                <p className="mb-4">
                  {language === 'fr'
                    ? "Envoyer CV et lettre de motivation à :"
                    : "Send CV and cover letter to:"}
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:contact@tagrantingenierie.fr" className="text-primary hover:underline font-semibold">
                    contact@tagrantingenierie.fr
                  </a>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  {language === 'fr'
                    ? "Objet : Candidature — Project Planner"
                    : "Subject: Application — Project Planner"}
                </p>
                <Button size="lg" asChild>
                  <a href="mailto:contact@tagrantingenierie.fr?subject=Candidature — Project Planner">
                    {language === 'fr' ? 'Postuler maintenant' : 'Apply Now'}
                  </a>
                </Button>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectPlannerBrussels;
