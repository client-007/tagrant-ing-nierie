import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { CheckCircle2, Wrench } from 'lucide-react';
import serviceInspection from '@/assets/service-inspection-engineer.jpg';

const Inspection = () => {
  const { language } = useLanguage();

  const services =
    language === 'fr'
      ? [
          {
            title: 'Inspection',
            desc: 'État de l\'ouvrage à l\'instant T, identification des désordres, premières préconisations et estimation grossière lorsque c\'est possible. Lorsque les causes sont incertaines, une analyse approfondie s\'impose (diagnostic).',
          },
          {
            title: 'Diagnostic',
            desc: 'Compréhension précise de l\'origine des désordres, de leur évolution et de leurs impacts. Cette étape prépare les études de conception (AVP / PRO).',
          },
          {
            title: 'Études de conception (AVP / PRO)',
            desc: 'Définition et comparaison des scénarios de réparation, chiffrage détaillé et choix de la solution. La solution retenue est ensuite traduite en documents opérationnels (DCE).',
          },
          {
            title: 'Dossier de Consultation des Entreprises (DCE)',
            desc: 'Rédaction du CCTP, plans, bordereaux et estimations nécessaires au lancement des travaux. Le projet peut alors être proposé aux entreprises.',
          },
          {
            title: 'Consultation & choix des entreprises',
            desc: 'Organisation de la consultation, analyse des offres et assistance à la sélection des entreprises les plus adaptées. Les travaux peuvent être engagés en toute maîtrise.',
          },
          {
            title: 'Suivi d\'exécution & réception',
            desc: 'Contrôle technique du chantier, levée des réserves, réception et DOE. L\'ouvrage est livré dans les règles de l\'art.',
          },
          {
            title: 'Monitoring / suivi post-intervention',
            desc: 'Surveillance de l\'ouvrage, mesures régulières et analyse de performance dans le temps.',
          },
        ]
      : [
          {
            title: 'Inspection',
            desc: 'State of the structure at time T, identification of defects, initial recommendations and rough estimate where possible. When causes are uncertain, an in-depth analysis is required (diagnosis).',
          },
          {
            title: 'Diagnosis',
            desc: 'Precise understanding of the origin of defects, their evolution and their impacts. This stage prepares design studies (preliminary / detailed design).',
          },
          {
            title: 'Design studies (preliminary / detailed)',
            desc: 'Definition and comparison of repair scenarios, detailed costing and choice of solution. The selected solution is then translated into operational documents (tender documents).',
          },
          {
            title: 'Tender Documents (DCE)',
            desc: 'Drafting of technical specifications, drawings, bills of quantities and estimates necessary for launching the works. The project can then be proposed to contractors.',
          },
          {
            title: 'Tendering & contractor selection',
            desc: 'Organization of the tender process, analysis of offers and assistance in selecting the most suitable contractors. The works can be launched with full control.',
          },
          {
            title: 'Execution supervision & handover',
            desc: 'Technical control of the site, resolution of defects, handover and as-built documentation. The structure is delivered in accordance with best practices.',
          },
          {
            title: 'Monitoring / post-intervention follow-up',
            desc: 'Structure surveillance, regular measurements and performance analysis over time.',
          },
        ];

  const methodology =
    language === 'fr'
      ? [
          'Inspection – État à l\'instant T et premières préconisations.',
          'Diagnostic – Analyse des causes et des risques.',
          'Études de conception – Scénarios, choix et chiffrage précis.',
          'DCE – Pièces techniques et estimation des travaux.',
          'Consultation – Analyse des offres et choix des entreprises.',
          'Suivi d\'exécution & réception – Contrôle, levée des réserves et DOE.',
        ]
      : [
          'Inspection – State at time T and initial recommendations.',
          'Diagnosis – Analysis of causes and risks.',
          'Design studies – Scenarios, selection and precise costing.',
          'Tender documents – Technical specifications and work estimates.',
          'Tendering – Analysis of offers and contractor selection.',
          'Execution supervision & handover – Control, defect resolution and as-built documentation.',
        ];

  const deliverables =
    language === 'fr'
      ? [
          'Rapport d\'inspection: État à l\'instant T, cartographie des désordres, photos et relevés.',
          'Note de diagnostic: Analyse des causes, évaluation des risques, besoins d\'investigations complémentaires et préconisations chiffrées.',
          'Documents d\'Études de conception (AVP / PRO): Scénarios de réparation, analyse comparative, chiffrages détaillés, justification de la solution retenue et plans/projets au niveau PRO.',
          'Dossier DCE complet: CCTP, plans, bordereaux et estimations pour lancer la consultation.',
          'Procès-verbaux de réception, contrôle du DOE et plan de suivi post-travaux.',
        ]
      : [
          'Inspection report: State at time T, defect mapping, photos and surveys.',
          'Diagnostic note: Analysis of causes, risk assessment, need for additional investigations and costed recommendations.',
          'Design study documents (preliminary / detailed): Repair scenarios, comparative analysis, detailed costings, justification of selected solution and detailed design drawings.',
          'Complete tender documents: Technical specifications, drawings, bills of quantities and estimates to launch the tender.',
          'Handover minutes, as-built documentation control and post-works monitoring plan.',
        ];

  const tools =
    language === 'fr'
      ? {
          inspection: [
            'GPR (géoradar)',
            'Ferroscan',
            'Scléromètre',
            'Ultrasons',
            'Instrumentation et capteurs IoT',
            'Outils NDT (essais non destructifs)',
          ],
          software: [
            'Revit / IFC',
            'Covadis',
            'Mensura',
            'Autocad',
            'Autodesk Robot',
          ],
          compliance: [
            'Normes Cerema',
            'Eurocodes',
            'ITSEOA',
            'Normes techniques applicables selon le type d\'ouvrage',
            'Recommandations professionnelles en inspection, diagnostic et réhabilitation',
          ],
        }
      : {
          inspection: [
            'GPR (ground penetrating radar)',
            'Ferroscan',
            'Rebound hammer',
            'Ultrasound',
            'Instrumentation and IoT sensors',
            'NDT tools (non-destructive testing)',
          ],
          software: [
            'Revit / IFC',
            'Covadis',
            'Mensura',
            'Autocad',
            'Autodesk Robot',
          ],
          compliance: [
            'Cerema standards',
            'Eurocodes',
            'ITSEOA',
            'Technical standards applicable according to structure type',
            'Professional recommendations in inspection, diagnosis and rehabilitation',
          ],
        };

  const benefits =
    language === 'fr'
      ? [
          'Un DCE complet et immédiatement exploitable, basé sur la solution claire et directement applicable.',
          'Un accompagnement technique rigoureux, avec un suivi précis du chantier et de la conformité des interventions.',
          'Une traçabilité documentaire renforcée, garantissant transparence, cohérence et qualité tout au long du projet.',
          'Un meilleur contrôle des coûts et de la durée de vie de l\'ouvrage, grâce à des choix techniques optimisés et documentés.',
        ]
      : [
          'A complete and immediately usable tender document, based on a clear and directly applicable solution.',
          'Rigorous technical support, with precise site monitoring and compliance of interventions.',
          'Enhanced documentary traceability, ensuring transparency, consistency and quality throughout the project.',
          'Better control of costs and structure lifespan, thanks to optimized and documented technical choices.',
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
            {language === 'fr' ? 'Inspection, Maintenance & Réparation des Ouvrages d\'art' : 'Inspection, Maintenance & Repair of Civil Engineering Structures'}
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
                ? 'TAGRANT INGENIERIE vous accompagne tout au long du projet : nous inspectons vos ouvrages, réalisons les diagnostics, concevons les études de réhabilitation, pilotons les campagnes d\'essais, préparons les dossiers de consultation et assurons le suivi technique des travaux jusqu\'à leur réception.'
                : 'TAGRANT INGENIERIE supports you throughout the project: we inspect your structures, carry out diagnostics, design rehabilitation studies, manage test campaigns, prepare consultation documents and provide technical supervision of works until handover.'}
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
                {language === 'fr' ? 'Méthodologie' : 'Methodology'}
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
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                {language === 'fr' ? 'Outils & conformité' : 'Tools & Compliance'}
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">
                    {language === 'fr' ? 'Outils d\'inspection et d\'investigation:' : 'Inspection and investigation tools:'}
                  </h4>
                  <ul className="space-y-2">
                    {tools.inspection.map((tool, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{tool}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">
                    {language === 'fr' ? 'Outils logiciels:' : 'Software tools:'}
                  </h4>
                  <ul className="space-y-2">
                    {tools.software.map((tool, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{tool}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">
                    {language === 'fr' ? 'Référentiels & conformité:' : 'Standards & compliance:'}
                  </h4>
                  <ul className="space-y-2">
                    {tools.compliance.map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
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
