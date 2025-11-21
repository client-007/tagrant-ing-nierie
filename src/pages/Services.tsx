import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, FolderKanban, FileText, Wrench, GraduationCap } from 'lucide-react';
import serviceProject from '@/assets/service-project.jpg';
import serviceStudies from '@/assets/service-studies.jpg';
import serviceInspection from '@/assets/service-inspection.jpg';
import serviceTraining from '@/assets/service-training.jpg';

const Services = () => {
  const { t, language } = useLanguage();

  const services = [
    {
      icon: FolderKanban,
      title: language === 'fr' ? 'Gestion de Projet' : 'Project Management',
      image: serviceProject,
      link: '/services/project-management',
      description:
        language === 'fr'
          ? 'Support opérationnel en génie civil et infrastructure pour sécuriser les plannings, les méthodes et la livraison des projets. Nous fournissons un support de projet intégré sur site pour transformer les études en solutions immédiatement réalisables.'
          : 'Operational support in civil engineering and infrastructure to secure schedules, methods and project delivery. We provide integrated on-site project support, operating at the heart of the site to transform studies into immediately implementable solutions.',
      capabilities:
        language === 'fr'
          ? [
              'Analyse de variance des plannings',
              'Expertise des méthodes d\'exécution',
              'Opérations sur sites occupés',
              'Comparaison de scénarios et support aux décisions',
              'Gestion des réclamations contractuelles',
            ]
          : [
              'Schedule variance analysis',
              'Execution methods expertise',
              'Operations on occupied sites',
              'Scenario comparison & decision support',
              'Contractual claims management',
            ],
    },
    {
      icon: FileText,
      title: language === 'fr' ? 'Études Techniques & Coordination' : 'Technical Studies & Coordination',
      image: serviceStudies,
      link: '/services/technical-studies',
      description:
        language === 'fr'
          ? 'Études techniques fiables et modélisation précise pour assurer le succès de vos projets d\'ingénierie civile et d\'infrastructure. Nous fournissons de l\'ingénierie assistée par ordinateur de haute qualité centrée sur la qualité des études et la continuité entre bureaux de conception et d\'exécution.'
          : 'Reliable technical studies and precise modeling to ensure the success of your civil engineering and infrastructure projects. We deliver high-quality computer-aided engineering focused on study quality and continuity between design offices and execution.',
      capabilities:
        language === 'fr'
          ? [
              'Calculs structurels & vérifications',
              'Modélisation CAO/BIM (AutoCAD, Revit)',
              'Gestion des études d\'exécution',
              'Coordination conception-chantier',
              'Interface de support géotechnique',
            ]
          : [
              'Structural calculations & verifications',
              'CAD/BIM modeling (AutoCAD, Revit)',
              'Execution study management',
              'Design-to-works coordination',
              'Geotechnical support interface',
            ],
    },
    {
      icon: Wrench,
      title: language === 'fr' ? 'Inspection, Maintenance & Réparation' : 'Inspection, Maintenance & Repair',
      image: serviceInspection,
      link: '/services/inspection',
      description:
        language === 'fr'
          ? 'Services de diagnostic avancés pour les structures en béton et en acier pour évaluer la sécurité, la durabilité et la performance. Nous fournissons des rapports précis et basés sur les données qui soutiennent la planification des réparations et assurent la conformité aux normes européennes.'
          : 'Advanced diagnostic services for concrete and steel structures to assess safety, durability, and performance. We deliver accurate, data-driven reports that support repair planning and ensure compliance with European standards.',
      capabilities:
        language === 'fr'
          ? [
              'Tests non destructifs (NDT)',
              'Modélisation par éléments finis',
              'Inspections visuelles basées sur drones',
              'Numérisation laser 3D',
              'Conformité avec EN 1992, EN 1993, EN 1504',
            ]
          : [
              'Non-destructive testing (NDT)',
              'Finite Element Modeling',
              'Drone-based visual inspections',
              '3D laser scanning',
              'Compliance with EN 1992, EN 1993, EN 1504',
            ],
    },
    {
      icon: GraduationCap,
      title: language === 'fr' ? 'Formation Professionnelle' : 'Professional Training',
      image: serviceTraining,
      link: '/services/professional-training',
      description:
        language === 'fr'
          ? 'Programmes de formation en ingénierie complets conçus pour développer les compétences techniques et l\'expertise professionnelle. Notre formation comble le fossé entre la théorie et la pratique, permettant aux ingénieurs et aux équipes d\'exceller dans leurs rôles.'
          : 'Comprehensive engineering training programs designed to develop technical skills and professional expertise. Our training bridges the gap between theory and practice, empowering engineers and teams to excel in their roles.',
      capabilities:
        language === 'fr'
          ? [
              'Développement de compétences techniques',
              'Formation en gestion de projet',
              'Outils logiciels & numériques',
              'Normes de sécurité et qualité',
              'Support de certification professionnelle',
            ]
          : [
              'Technical skills development',
              'Project management training',
              'Software & digital tools',
              'Safety & quality standards',
              'Professional certification support',
            ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />


      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {services.map((service, index) => {
              return (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-xl transition-all border flex flex-col"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl font-bold mb-3">{service.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed text-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between">
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">
                        {language === 'fr' ? 'Capacités clés:' : 'Key Capabilities:'}
                      </h4>
                      <ul className="space-y-2">
                        {service.capabilities.map((capability, capIndex) => (
                          <li key={capIndex} className="flex items-start">
                            <span className="text-primary mr-2 mt-1">•</span>
                            <span className="text-sm text-muted-foreground">{capability}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" 
                      asChild
                    >
                      <Link to={service.link}>
                        {language === 'fr' ? 'En savoir plus' : 'Learn More'}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            {language === 'fr'
              ? 'Prêt à démarrer votre projet ?'
              : 'Ready to start your project?'}
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground">
            {language === 'fr'
              ? 'Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé.'
              : 'Contact us to discuss your needs and get a personalized quote.'}
          </p>
          <Button 
            size="lg" 
            className="bg-brand-yellow text-brand-navy hover:bg-brand-yellow/90 font-semibold border-2 border-brand-yellow"
            asChild
          >
            <Link to="/contact">
              {language === 'fr' ? 'Demander un devis' : 'Request a Quote'}
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
