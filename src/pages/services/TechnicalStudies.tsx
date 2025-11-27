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

  const studyServices =
    language === 'fr'
      ? [
          'Calculs de structure : dimensionnement et vérifications des structures en béton armé, des constructions métalliques et des fondations spéciales, conformément aux normes en vigueur.',
          'Pilotage des études d\'exécution : organisation des documents d\'exécution selon le planning, pour livrer les dossiers BPE dans les délais et garantir leur conformité technique.',
          'Coordination Etudes-Travaux : Organisation des flux de données d\'entrée et des interfaces pour limiter les risques, assurer la continuité des livrables et respecter les délais documentaires.',
          'Interface GC / fondations spéciales : définition des liaisons structure-fondation et arbitrages techniques.',
          'Appui géotechnique opérationnel : exploitation des études géotechniques, validation des hypothèses et recommandations constructives.',
          'Comparaison de scénarios et assistance à la décision : options planning, coût et risques pour appuyer les choix du projet.',
          'Gestion administrative : constitution du dossier CERFA et assistance au dépôt de permis si nécessaire. (Uniquement pour les constructions inférieures à 150 m².)',
        ]
      : [
          'Structural calculations: sizing and verifications of reinforced concrete structures, steel constructions and special foundations, in accordance with applicable standards.',
          'Execution study management: organization of execution documents according to the schedule, to deliver construction drawings on time and ensure their technical compliance.',
          'Design-to-works coordination: Organization of input data flows and interfaces to limit risks, ensure continuity of deliverables and respect documentary deadlines.',
          'Main contractor / special foundations interface: define structure-foundation interfaces and make technical trade-offs.',
          'Operational geotechnical support: interpret geotechnical studies, validate assumptions and provide constructive recommendations.',
          'Scenario comparison and decision support: planning, cost and risk options to inform project choices.',
          'Administrative support: preparation of CERFA dossiers and assistance with permit submissions if required. (Only for buildings under 150 m².)',
        ];

  const cadServices =
    language === 'fr'
      ? [
          'Plans 2D complets : plan de masse, plans de coupe, façades, niveaux (formats DWG / PDF).',
          'Maquettes 3D réalistes (Revit / IFC) : modélisation pour visualisation, coordination et intégration BIM.',
        ]
      : [
          'Complete 2D drawings: site plan, sections, elevations, levels (DWG / PDF formats).',
          'Realistic 3D models (Revit / IFC): modelling for visualization, coordination and BIM integration.',
        ];

  const tools =
    language === 'fr'
      ? 'FARO SCENE, Revit, AutoCAD, Recap, Covadis, Mensura, MS Project, Excel.'
      : 'FARO SCENE, Revit, AutoCAD, Recap, Covadis, Mensura, MS Project, Excel.';

  const deliverables =
    language === 'fr'
      ? 'Plans 2D, maquettes 3D, rapports de calcul, fiches méthode, scénarios comparatifs, dossier CERFA, reporting d\'avancement.'
      : '2D drawings, 3D models, calculation reports, method sheets, comparative scenarios, CERFA dossiers, progress reporting.';

  const benefits =
    language === 'fr'
      ? [
          'Livrables prêts à l\'emploi en BIM ou pour exécution',
          'Meilleure coordination entre études et exécution',
          'Réduction des risques de reprise et optimisation des délais et coûts',
          'Accompagnement technique et administratif complet, de l\'étude à la mise en œuvre',
        ]
      : [
          'Ready-to-use BIM or execution deliverables',
          'Improved coordination between design and construction',
          'Reduced risk of rework and optimized schedule and cost',
          'Full technical and administrative support from study to implementation',
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
          {/* Overview */}
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              {language === 'fr' ? 'Présentation' : 'Overview'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {language === 'fr'
                ? 'TAGRANT INGENIERIE propose des prestations d\'ingénierie centrées sur la qualité des études et la continuité entre bureaux d\'études et exécution.'
                : 'TAGRANT INGENIERIE delivers engineering services focused on study quality and continuity between design offices and execution.'}
            </p>
          </div>

          {/* Studies, Coordination & Geotechnical Support */}
          <Card className="mb-12">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                {language === 'fr' ? 'Études, coordination & appui géotechnique' : 'Studies, Coordination & Geotechnical Support'}
              </h3>
              <div className="space-y-6">
                {studyServices.map((service, index) => {
                  const [title, ...rest] = service.split(':');
                  const description = rest.join(':').trim();
                  return (
                    <div key={index}>
                      <h4 className="font-semibold text-foreground mb-2 flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                        {title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed ml-7">{description}</p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* CAD 2D/3D Models & Point-Cloud Modeling */}
          <Card className="mb-12">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                {language === 'fr' ? 'DAO 2D / Maquettes 3D & Modélisation depuis nuages de points' : 'CAD 2D / 3D Models & Point-Cloud Modeling'}
              </h3>
              <div className="space-y-4">
                {cadServices.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground leading-relaxed">{service}</span>
                  </div>
                ))}
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

          {/* Client Value */}
          <Card className="mb-12">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                {language === 'fr' ? 'Valeur ajoutée pour le client' : 'Client Value'}
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
              {language === 'fr' ? 'Prêt à Démarrer ?' : 'Ready to Get Started?'}
            </h3>
            <p className="text-muted-foreground mb-8">
              {language === 'fr'
                ? 'Pour une proposition sur-mesure (périmètre, formats, planning), contactez TAGRANT INGENIERIE.'
                : 'For a tailored proposal (scope, deliverable formats, schedule), contact TAGRANT INGENIERIE.'}
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
