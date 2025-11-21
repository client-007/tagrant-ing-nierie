import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { CheckCircle2, Wrench } from 'lucide-react';
import serviceInspection from '@/assets/service-inspection.jpg';

const Inspection = () => {
  const { language } = useLanguage();

  const services =
    language === 'fr'
      ? [
          {
            title: 'Inspection',
            desc: 'Visites ciblées et audits, relevés drone / LIDAR, essais NDT (sclérométrie, ultrasons, ferroscan, GPR), instrumentation et cartographie géoréférencée des désordres.',
          },
          {
            title: 'Diagnostic & études',
            desc: 'Interprétation des données d\'inspection, évaluation de la capacité portante, modélisation (FEM) et préconisations techniques chiffrées.',
          },
          {
            title: 'Dossier de consultation des entreprises (DCE)',
            desc: 'Rédaction des pièces techniques (CCTP, plans, bordereaux), spécifications d\'essais et estimation des quantités.',
          },
          {
            title: 'Consultation & assistance à la passation',
            desc: 'Lancement de la consultation, analyse des offres techniques et financières, assistance au choix des entreprises.',
          },
          {
            title: 'Pilotage des essais & contrôle qualité',
            desc: 'Supervision des campagnes d\'essais et validation des résultats ; ajustement des préconisations si nécessaire.',
          },
          {
            title: 'Suivi d\'exécution & réception',
            desc: 'Suivi technique des travaux, contrôle qualité, levée des réserves, réception et constitution du DOE.',
          },
          {
            title: 'Monitoring & suivi post-intervention',
            desc: 'Mise en place de systèmes de surveillance, reporting et suivi de l\'efficacité des interventions.',
          },
        ]
      : [
          {
            title: 'Inspection',
            desc: 'Targeted visits and audits, drone / LIDAR surveys, NDT (rebound hammer, ultrasound, ferroscan, pacometry, GPR), instrumentation and geo-referenced defect mapping.',
          },
          {
            title: 'Diagnostic & studies',
            desc: 'Interpretation of inspection data, load-capacity assessment, FEM modelling and technically justified, costed recommendations.',
          },
          {
            title: 'Dossier de Consultation des Entreprises (DCE)',
            desc: 'Drafting of technical documents (CCTP, drawings, bill of quantities), test specifications and quantity estimates.',
          },
          {
            title: 'Tendering & Procurement Assistance',
            desc: 'Launch of consultations, analysis of technical and financial offers, assistance in contractor selection.',
          },
          {
            title: 'Test Management & Quality Control',
            desc: 'Supervision of test campaigns, validation of results and adjustment of recommendations where necessary.',
          },
          {
            title: 'Execution Supervision & Handover',
            desc: 'Technical follow-up of works, quality control, resolution of non-conformities, handover and DOE assembly.',
          },
          {
            title: 'Monitoring & Post-Intervention Follow-Up',
            desc: 'Implementation of monitoring systems, reporting and assessment of intervention effectiveness.',
          },
        ];

  const methodology =
    language === 'fr'
      ? [
          'Prise de besoin et visite initiale',
          'Inspection instrumentée et collecte de données',
          'Diagnostic technique et préconisations chiffrées',
          'Rédaction DCE et consultation des entreprises',
          'Pilotage des essais, suivi des travaux, contrôle qualité et réception',
        ]
      : [
          'Needs assessment and initial site visit',
          'Instrumented inspection and data collection',
          'Technical diagnosis and costed recommendations',
          'DCE preparation and contractor tendering',
          'Test supervision, construction follow-up, quality control and handover',
        ];

  const deliverables =
    language === 'fr'
      ? [
          'Rapport d\'inspection (cartographie, photos géoréférencées)',
          'Note de diagnostic et préconisations chiffrées',
          'Dossier DCE complet (CCTP, plans, bordereaux)',
          'Rapports d\'essais et comptes-rendus de contrôle qualité',
          'Procès-verbaux de réception, DOE et plan de suivi post-travaux',
        ]
      : [
          'Inspection report (defect mapping, geo-referenced photos)',
          'Diagnostic note and costed recommendations',
          'Complete DCE (CCTP, drawings, bills of quantities)',
          'Test reports and quality control records',
          'Handover minutes, DOE and post-works monitoring plan',
        ];

  const tools =
    language === 'fr'
      ? 'Drones, GPR, LIDAR, capteurs IoT, équipements NDT. Logiciels : Revit/IFC, FARO SCENE, Recap, Covadis, Mensura, outils FEM (Abaqus / Robot / SAP2000). Référentiels : bonnes pratiques Cerema, Eurocodes, ITSEOA et normes applicables.'
      : 'Drones, GPR, LIDAR, IoT sensors, NDT devices. Software: Revit / IFC, FARO SCENE, Recap, Covadis, Mensura, FEM tools (Abaqus, Robot, SAP2000). References: Cerema good practices, Eurocodes, ITSEOA and applicable standards.';

  const benefits =
    language === 'fr'
      ? [
          'Dossier DCE prêt à l\'emploi et préconisations applicables',
          'Supervision technique rigoureuse des essais et suivi des travaux',
          'Renforcement de la traçabilité documentaire et du contrôle qualité',
          'Meilleur contrôle des coûts et du cycle de vie de l\'ouvrage',
        ]
      : [
          'Ready-to-use DCE and implementable recommendations',
          'Rigorous technical oversight of testing and works follow-up',
          'Strengthened documentation traceability and quality control',
          'Better control of costs and lifecycle of the structure',
        ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/90 to-primary/70">
        <div className="absolute inset-0">
          <img
            src={serviceInspection}
            alt="Inspection Services"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <Wrench className="h-16 w-16 mx-auto mb-6 text-primary-foreground" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
            {language === 'fr' ? 'Inspection, Maintenance & Réparation' : 'Inspection, Maintenance & Repair'}
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/95">
            {language === 'fr'
              ? 'Diagnostics, préconisations et pilotage pour sécuriser la durée de vie de vos ponts, viaducs et tunnels.'
              : 'Diagnostics, recommendations and project management to secure the service life of bridges, viaducts and tunnels.'}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Overview */}
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              {language === 'fr' ? 'Présentation' : 'Presentation'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {language === 'fr'
                ? 'TAGRANT INGENIERIE réalise inspections, diagnostics et études de réhabilitation, pilote les campagnes d\'essais, rédige les dossiers de consultation des entreprises (DCE) et assure le suivi technique des interventions jusqu\'à la réception.'
                : 'TAGRANT INGENIERIE performs inspections, technical diagnostics and rehabilitation studies, pilots test campaigns, prepares the Dossier de Consultation des Entreprises (DCE) and provides technical supervision throughout execution and handover.'}
            </p>
          </div>

          {/* Our Services */}
          <Card className="mb-12">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                {language === 'fr' ? 'Nos prestations' : 'Our Services'}
              </h3>
              <div className="space-y-6">
                {services.map((service, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-foreground mb-2 flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                      {service.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed ml-7">{service.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Methodology */}
          <Card className="mb-12">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                {language === 'fr' ? 'Méthodologie (processus)' : 'Methodology (Process)'}
              </h3>
              <ol className="space-y-3 list-decimal list-inside text-muted-foreground">
                {methodology.map((step, index) => (
                  <li key={index} className="leading-relaxed">{step}</li>
                ))}
              </ol>
            </CardContent>
          </Card>

          {/* Deliverables */}
          <Card className="mb-12">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                {language === 'fr' ? 'Livrables' : 'Deliverables'}
              </h3>
              <div className="space-y-3">
                {deliverables.map((deliverable, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{deliverable}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Tools & Compliance */}
          <Card className="mb-12">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {language === 'fr' ? 'Outils & conformité' : 'Tools & Compliance'}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{tools}</p>
            </CardContent>
          </Card>

          {/* Client Benefits */}
          <Card className="mb-12">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                {language === 'fr' ? 'Bénéfices pour le client' : 'Client Benefits'}
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
              {language === 'fr' ? 'Besoin d\'une Inspection ?' : 'Need an Inspection?'}
            </h3>
            <p className="text-muted-foreground mb-8">
              {language === 'fr'
                ? 'Pour un diagnostic, l\'élaboration d\'un DCE ou un accompagnement de consultation et suivi travaux, contactez TAGRANT INGENIERIE.'
                : 'For a diagnostic, DCE preparation or procurement and site supervision support, contact TAGRANT INGENIERIE.'}
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

export default Inspection;
