import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const Blog = () => {
  const { language } = useLanguage();
  const { id } = useParams();

  const blogPosts = [
    {
      id: 'bim-coordination',
      title:
        language === 'fr'
          ? 'Les défis de la coordination BIM dans les grands projets'
          : 'BIM Coordination Challenges in Large Projects',
      excerpt:
        language === 'fr'
          ? 'Découvrez comment optimiser la coordination BIM pour améliorer l\'efficacité des projets d\'infrastructure.'
          : 'Learn how to optimize BIM coordination to improve infrastructure project efficiency.',
      content:
        language === 'fr'
          ? 'La coordination BIM (Building Information Modeling) représente un défi majeur dans les grands projets d\'infrastructure. Cette technologie permet de créer des modèles numériques précis qui facilitent la collaboration entre tous les intervenants du projet.\n\nLes principaux défis incluent l\'interopérabilité entre différents logiciels, la gestion des grandes quantités de données, et la coordination entre les équipes multidisciplinaires. Pour surmonter ces obstacles, il est essentiel d\'établir des protocoles clairs dès le début du projet.\n\nNos experts recommandent l\'utilisation de standards internationaux comme les IFC (Industry Foundation Classes) et la mise en place de réunions de coordination régulières. L\'investissement dans la formation des équipes est également crucial pour maximiser les bénéfices de la technologie BIM.'
          : 'BIM (Building Information Modeling) coordination represents a major challenge in large infrastructure projects. This technology enables the creation of precise digital models that facilitate collaboration among all project stakeholders.\n\nKey challenges include interoperability between different software, managing large amounts of data, and coordination between multidisciplinary teams. To overcome these obstacles, it is essential to establish clear protocols from the project outset.\n\nOur experts recommend using international standards such as IFC (Industry Foundation Classes) and setting up regular coordination meetings. Investment in team training is also crucial to maximize the benefits of BIM technology.',
      date: '2024-01-15',
      category: language === 'fr' ? 'Études Techniques' : 'Technical Studies',
    },
    {
      id: 'structural-inspection',
      title:
        language === 'fr'
          ? 'Inspection structurelle : technologies et méthodes modernes'
          : 'Structural Inspection: Modern Technologies and Methods',
      excerpt:
        language === 'fr'
          ? 'Les dernières innovations en matière d\'inspection non destructive pour les structures en béton et en acier.'
          : 'Latest innovations in non-destructive testing for concrete and steel structures.',
      content:
        language === 'fr'
          ? 'L\'inspection structurelle a connu une révolution technologique ces dernières années. Les méthodes d\'inspection non destructive (END) permettent désormais d\'évaluer l\'état des structures sans les endommager.\n\nParmi les technologies les plus avancées, on trouve le radar géologique, l\'ultrason, la thermographie infrarouge et les drones équipés de caméras haute résolution. Ces outils permettent de détecter les défauts invisibles à l\'œil nu, comme les fissures internes, la corrosion des armatures ou les délaminages.\n\nL\'analyse des données collectées est facilitée par l\'intelligence artificielle, qui permet d\'identifier rapidement les anomalies et de prioriser les interventions. Cette approche proactive permet de réduire les coûts de maintenance et d\'améliorer la sécurité des ouvrages.'
          : 'Structural inspection has undergone a technological revolution in recent years. Non-destructive testing (NDT) methods now allow for the assessment of structures without damaging them.\n\nAmong the most advanced technologies are ground-penetrating radar, ultrasound, infrared thermography, and drones equipped with high-resolution cameras. These tools can detect defects invisible to the naked eye, such as internal cracks, reinforcement corrosion, or delamination.\n\nData analysis is facilitated by artificial intelligence, which quickly identifies anomalies and prioritizes interventions. This proactive approach reduces maintenance costs and improves structural safety.',
      date: '2024-01-10',
      category: language === 'fr' ? 'Inspection' : 'Inspection',
    },
    {
      id: 'schedule-management',
      title:
        language === 'fr'
          ? 'Gestion de projet : comment anticiper les dérives de planning'
          : 'Project Management: How to Anticipate Schedule Delays',
      excerpt:
        language === 'fr'
          ? 'Méthodes éprouvées pour identifier et corriger les écarts de planning avant qu\'ils n\'impactent votre projet.'
          : 'Proven methods to identify and correct schedule variances before they impact your project.',
      content:
        language === 'fr'
          ? 'La maîtrise des délais est un facteur critique de succès dans les projets d\'infrastructure. Les dérives de planning peuvent avoir des conséquences financières importantes et compromettre la satisfaction des parties prenantes.\n\nPour anticiper ces risques, il est essentiel de mettre en place un système de suivi rigoureux basé sur des indicateurs clés de performance (KPI). L\'analyse de la valeur acquise (Earned Value Management) permet de détecter précocement les écarts entre le planning prévu et le réel.\n\nNos experts recommandent également la mise en place de réunions de coordination hebdomadaires, l\'utilisation d\'outils de planification collaboratifs, et la constitution de marges de sécurité sur les tâches critiques. Une communication transparente avec toutes les parties prenantes est également essentielle pour gérer efficacement les imprévus.'
          : 'Schedule control is a critical success factor in infrastructure projects. Schedule delays can have significant financial consequences and compromise stakeholder satisfaction.\n\nTo anticipate these risks, it is essential to implement a rigorous monitoring system based on key performance indicators (KPIs). Earned Value Management allows for early detection of variances between planned and actual schedules.\n\nOur experts also recommend weekly coordination meetings, collaborative planning tools, and safety margins on critical tasks. Transparent communication with all stakeholders is also essential for effectively managing unforeseen events.',
      date: '2024-01-05',
      category: language === 'fr' ? 'Gestion de Projet' : 'Project Management',
    },
  ];

  const currentPost = id ? blogPosts.find(post => post.id === id) : null;

  if (id && currentPost) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Article Detail */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link to="/blog">
                <Button variant="ghost" className="mb-6 group">
                  <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  {language === 'fr' ? 'Retour aux articles' : 'Back to articles'}
                </Button>
              </Link>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-accent px-3 py-1 bg-accent/10 rounded-full">
                      {currentPost.category}
                    </span>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(currentPost.date).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US')}
                    </div>
                  </div>
                  <CardTitle className="text-3xl md:text-4xl mb-4">{currentPost.title}</CardTitle>
                  <CardDescription className="text-lg">{currentPost.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-lg max-w-none text-foreground/90">
                    {currentPost.content.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Blog Posts */}
      <section className="pt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-accent px-3 py-1 bg-accent/10 rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(post.date).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US')}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to={`/blog/${post.id}`}>
                    <Button variant="outline" className="w-full">
                      {language === 'fr' ? 'Lire l\'article' : 'Read Article'}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
