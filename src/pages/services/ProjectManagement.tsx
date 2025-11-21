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

  const services =
    language === 'fr'
      ? [
          'Analyse des écarts de planning : suivi de l\'avancement réel, identification des écarts et recommandations de mesures correctives applicables sur site.',
          'Expertise méthodes d\'exécution (génie civil) : définition et optimisation des méthodes de travail et du phasage pour garantir sécurité, qualité et productivité.',
          'Exploitation sur site occupé : mise en place de procédures, protections et interfaces avec les tiers pour maintenir une exploitation sûre et continue.',
          'Comparaison de scénarios : développement d\'options alternatives (planning, coût, risque) pour soutenir la prise de décision opérationnelle.',
          'Gestion des réclamations contractuelles : appui à la préparation, justification et suivi des demandes de prolongation/compensation.',
          'Aide à la décision : synthèses exécutives, recommandations étayées et outils pratiques pour des choix rapides et documentés.',
        ]
      : [
          'Schedule variance analysis: Monitor actual progress, identify variances and recommend corrective actions implementable on site.',
          'Execution methods expertise (civil engineering): Define and optimise work methods and phasing adapted to infrastructure projects to ensure safety, quality and productivity.',
          'Operations on occupied sites: Set up procedures, protections and interfaces with third parties to maintain safe and continuous operations.',
          'Scenario comparison: Develop alternative options (schedule, cost, risk) and present clear comparisons to support operational decision-making.',
          'Contractual claims management: Support preparation, justification and tracking of extension/compensation claims, with production of supporting documentation.',
          'Decision support: Executive summaries, substantiated recommendations and practical decision aids for fast, documented choices.',
        ];

  const tools =
    language === 'fr'
      ? 'MS Project, Excel, AutoCAD / Revit (si nécessaire), TILOS le cas échéant.'
      : 'MS Project, Excel, AutoCAD / Revit (as required), TILOS where applicable.';

  const deliverables =
    language === 'fr'
      ? 'Planning détaillé, scénarios comparatifs, fiches méthodes, reporting d\'avancement, rapports d\'analyse des écarts, dossier de réclamations.'
      : 'Detailed schedule, comparative scenarios, method sheets, progress reports, variance analysis reports, claims dossier.';

  const benefits =
    language === 'fr'
      ? [
          'Meilleure visibilité sur l\'avancement et les risques pour les travaux de génie civil et d\'infrastructure',
          'Réduction des reprises et des coûts indirects',
          'Prise de décision plus rapide et documentée',
          'Meilleure adhésion aux délais contractuels',
        ]
      : [
          'Enhanced visibility on progress and risks for civil engineering and infrastructure works',
          'Reduced rework and indirect costs',
          'Faster, documented decision making',
          'Stronger adherence to contractual deadlines',
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
          {/* Overview */}
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              {language === 'fr' ? 'Présentation' : 'Overview'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {language === 'fr'
                ? 'TAGRANT INGENIERIE fournit un soutien intégré sur chantier en génie civil et infrastructures. Nous intervenons au cœur du projet pour transformer les études en solutions immédiatement applicables, anticiper les écarts de planning et maintenir le projet sur la bonne voie.'
                : 'TAGRANT INGENIERIE provides integrated on-project support in civil engineering and infrastructure. We operate at the heart of the site to transform studies into immediately implementable solutions, anticipate schedule deviations and keep projects on track.'}
            </p>
          </div>

          {/* Services */}
          <Card className="mb-12">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                {language === 'fr' ? 'Prestations' : 'Services'}
              </h3>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground leading-relaxed">{service}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Mode of Engagement */}
          <Card className="mb-12">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                {language === 'fr' ? 'Mode d\'intervention' : 'Mode of Engagement'}
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">
                    {language === 'fr' ? 'Intégration : ' : 'Integrated delivery: '}
                  </strong>
                  {language === 'fr'
                    ? 'Collaboration étroite avec vos équipes, participation aux réunions opérationnelles et reporting régulier.'
                    : 'Close collaboration with your teams, participation in operational meetings and regular reporting.'}
                </p>
                <p>
                  <strong className="text-foreground">
                    {language === 'fr' ? 'Engagement flexible : ' : 'Flexible commitment: '}
                  </strong>
                  {language === 'fr'
                    ? 'Interventions modulables en durée et intensité selon les besoins du projet.'
                    : 'Engagements scalable in duration and intensity to match project needs.'}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Tools & Deliverables */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {language === 'fr' ? 'Outils' : 'Tools'}
                </h3>
                <p className="text-muted-foreground">{tools}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {language === 'fr' ? 'Livrables' : 'Deliverables'}
                </h3>
                <p className="text-muted-foreground">{deliverables}</p>
              </CardContent>
            </Card>
          </div>

          {/* Client Benefits */}
          <Card className="mb-12">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                {language === 'fr' ? 'Bénéfices client' : 'Client Benefits'}
              </h3>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
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
                ? 'Pour une proposition sur-mesure (profils, durée, budget), contactez TAGRANT INGENIERIE.'
                : 'For a tailored proposal (profiles, duration, budget), contact TAGRANT INGENIERIE.'}
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

export default ProjectManagement;
