import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';

const Blog = () => {
  const { language } = useLanguage();

  const blogPosts = [
    {
      title:
        language === 'fr'
          ? 'Les défis de la coordination BIM dans les grands projets'
          : 'BIM Coordination Challenges in Large Projects',
      excerpt:
        language === 'fr'
          ? 'Découvrez comment optimiser la coordination BIM pour améliorer l\'efficacité des projets d\'infrastructure.'
          : 'Learn how to optimize BIM coordination to improve infrastructure project efficiency.',
      date: '2024-01-15',
      category: language === 'fr' ? 'Études Techniques' : 'Technical Studies',
    },
    {
      title:
        language === 'fr'
          ? 'Inspection structurelle : technologies et méthodes modernes'
          : 'Structural Inspection: Modern Technologies and Methods',
      excerpt:
        language === 'fr'
          ? 'Les dernières innovations en matière d\'inspection non destructive pour les structures en béton et en acier.'
          : 'Latest innovations in non-destructive testing for concrete and steel structures.',
      date: '2024-01-10',
      category: language === 'fr' ? 'Inspection' : 'Inspection',
    },
    {
      title:
        language === 'fr'
          ? 'Gestion de projet : comment anticiper les dérives de planning'
          : 'Project Management: How to Anticipate Schedule Delays',
      excerpt:
        language === 'fr'
          ? 'Méthodes éprouvées pour identifier et corriger les écarts de planning avant qu\'ils n\'impactent votre projet.'
          : 'Proven methods to identify and correct schedule variances before they impact your project.',
      date: '2024-01-05',
      category: language === 'fr' ? 'Gestion de Projet' : 'Project Management',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Blog Posts */}
      <section className="py-16 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {language === 'fr'
                ? 'Actualités, insights et expertise en ingénierie et gestion de projets'
                : 'News, insights and expertise in engineering and project management'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
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
                  <Button variant="outline" className="w-full">
                    {language === 'fr' ? 'Lire l\'article' : 'Read Article'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
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
