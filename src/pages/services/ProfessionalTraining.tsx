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

  const modules =
    language === 'fr'
      ? [
          'Économie de la construction : postes de coût, estimation et optimisation du cycle de vie.',
          'Analyse de projet & prise de décision : faisabilité, risques et scénarios.',
          'Méthodes d\'exécution & WBS : phasage, séquencement et optimisation des tâches.',
          'Planification opérationnelle : principes de suivi d\'avancement et gestion des écarts.',
          'Inspection & diagnostic d\'ouvrages d\'art : protocole d\'inspection, NDT et lecture des relevés.',
          'Ateliers outils (optionnels) : AutoCAD / Revit / MS Project / Scan-to-BIM — proposés via sessions pratiques ou partenariats.',
        ]
      : [
          'Construction economics: cost breakdown, estimating and lifecycle optimization.',
          'Project analysis & decision making: feasibility, risk assessment and scenario building.',
          'Execution methods & WBS: task breakdown, phasing and sequence optimisation.',
          'Operational planning: principles of schedule follow-up and deviation management.',
          'Inspection & diagnosis of structures: inspection protocols, NDT and reading survey results.',
          'Tool workshops (optional): AutoCAD / Revit / MS Project / Scan-to-BIM via partner sessions.',
        ];

  const formats =
    language === 'fr'
      ? [
          'Sessions courtes (½ journée à 2 jours) ou parcours modulaires sur demande.',
          'Modalités : inter/intra-entreprise, distanciel ou présentiel selon besoins.',
          'Possibilité d\'accompagnement terrain (coaching / transfert de compétences) en option.',
        ]
      : [
          'Short sessions (½ day to 2 days) or modular pathways on demand.',
          'Modes: inter / intra-company, remote or in-person.',
          'Optional on-site coaching for skills transfer.',
        ];

  const whyRegister =
    language === 'fr'
      ? [
          'Recevez le programme détaillé dès sa finalisation.',
          'Influencez le contenu : nous adaptons les modules en fonction des demandes.',
          'Priorité d\'inscription et conditions préférentielles au lancement.',
        ]
      : [
          'Receive the detailed programme at finalisation.',
          'Influence content to match your needs.',
          'Priority registration and preferential launch conditions.',
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
              ? 'Formations pratiques visant à renforcer les compétences opérationnelles en gestion de projet, économie de la construction, méthodes d\'exécution et inspection d\'ouvrages d\'art.'
              : 'Practical training modules to strengthen operational skills in project management, construction economics, execution methods and inspection of structures.'}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Status Notice */}
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-12">
            <p className="text-foreground text-center font-medium">
              {language === 'fr'
                ? 'Section en développement : TAGRANT INGENIERIE prépare une offre de formations pratiques. Les contenus sont définis ; les sessions et intervenants seront confirmés prochainement.'
                : 'Section in development: TAGRANT INGENIERIE is preparing a set of practical training modules. Content is defined; sessions and instructors will be confirmed soon.'}
            </p>
          </div>

          {/* Proposed Modules */}
          <Card className="mb-12">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                {language === 'fr' ? 'Modules proposés (aperçu)' : 'Proposed Modules (Overview)'}
              </h3>
              <div className="space-y-4">
                {modules.map((module, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground leading-relaxed">{module}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Formats */}
          <Card className="mb-12">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                {language === 'fr' ? 'Formats envisagés' : 'Formats Envisaged'}
              </h3>
              <div className="space-y-3">
                {formats.map((format, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{format}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Why Register Now */}
          <Card className="mb-12">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                {language === 'fr' ? 'Pourquoi s\'inscrire dès maintenant' : 'Why Register Now'}
              </h3>
              <div className="space-y-3">
                {whyRegister.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{reason}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Practical Note */}
          <div className="bg-muted/50 rounded-lg p-6 mb-12">
            <p className="text-muted-foreground text-sm leading-relaxed">
              {language === 'fr'
                ? 'Précision pratique : La section formation est en cours de déploiement : calendrier, intervenants et équipements pour ateliers logiciels seront annoncés prochainement. Des partenariats avec des formateurs et prestataires spécialisés sont envisagés pour garantir la qualité des sessions pratiques.'
                : 'Practical note: Training section under deployment: calendar, instructors and software equipment for workshops to be announced. Partnerships with specialist trainers are planned.'}
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              {language === 'fr' ? 'Intéressé(e) ?' : 'Interested?'}
            </h3>
            <p className="text-muted-foreground mb-8">
              {language === 'fr'
                ? 'Inscrivez votre intérêt ou demandez un programme sur-mesure.'
                : 'Register your interest or request a bespoke programme.'}
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
