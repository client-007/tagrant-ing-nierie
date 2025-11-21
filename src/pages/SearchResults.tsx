import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Search, ArrowRight } from 'lucide-react';

interface SearchResult {
  title: string;
  description: string;
  path: string;
  category: string;
}

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const { t } = useLanguage();
  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    if (query) {
      // Search through all content
      const searchableContent: SearchResult[] = [
        {
          title: t('nav.home'),
          description: t('overview.description'),
          path: '/',
          category: 'Page'
        },
        {
          title: t('nav.about'),
          description: t('overview.description'),
          path: '/about',
          category: 'Page'
        },
        {
          title: t('nav.services'),
          description: t('services.subtitle'),
          path: '/services',
          category: 'Page'
        },
        {
          title: t('services.project'),
          description: t('services.project.desc'),
          path: '/services/project-management',
          category: 'Service'
        },
        {
          title: t('services.studies'),
          description: t('services.studies.desc'),
          path: '/services/technical-studies',
          category: 'Service'
        },
        {
          title: t('services.inspection'),
          description: t('services.inspection.desc'),
          path: '/services/inspection',
          category: 'Service'
        },
        {
          title: t('services.training'),
          description: t('services.training.desc'),
          path: '/services/training',
          category: 'Service'
        },
        {
          title: t('nav.expertise'),
          description: 'Railway engineering expertise',
          path: '/expertise',
          category: 'Page'
        },
        {
          title: t('nav.blog'),
          description: 'Latest news and insights',
          path: '/blog',
          category: 'Page'
        },
        {
          title: t('nav.jobs'),
          description: 'Career opportunities',
          path: '/jobs',
          category: 'Page'
        },
        {
          title: t('nav.contact'),
          description: 'Get in touch with us',
          path: '/contact',
          category: 'Page'
        }
      ];

      // Filter results based on query
      const filtered = searchableContent.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase())
      );

      setResults(filtered);
    }
  }, [query, t]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Search Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <Search className="h-6 w-6 text-muted-foreground" />
              <h1 className="text-3xl font-bold text-foreground">
                {t('search.results')}
              </h1>
            </div>
            <p className="text-lg text-muted-foreground">
              {query ? (
                <>
                  {t('search.for')} "<span className="font-semibold text-foreground">{query}</span>"
                </>
              ) : (
                t('search.empty')
              )}
            </p>
          </div>

          {/* Results */}
          {results.length > 0 ? (
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground mb-4">
                {results.length} {results.length === 1 ? t('search.result') : t('search.results.plural')}
              </p>
              {results.map((result, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                            {result.category}
                          </span>
                        </div>
                        <CardTitle className="text-xl mb-2">
                          <Link 
                            to={result.path}
                            className="hover:text-primary transition-colors"
                          >
                            {result.title}
                          </Link>
                        </CardTitle>
                        <CardDescription>{result.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Link
                      to={result.path}
                      className="inline-flex items-center text-primary hover:text-brand-yellow transition-colors font-medium group"
                    >
                      {t('search.view')}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="p-12 text-center">
              <div className="max-w-md mx-auto">
                <Search className="h-16 w-16 mx-auto mb-4 text-muted-foreground/50" />
                <h2 className="text-2xl font-bold mb-2 text-foreground">
                  {t('search.noResults')}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {t('search.noResults.desc')}
                </p>
                <ul className="text-sm text-muted-foreground text-left space-y-2">
                  <li>• {t('search.suggestions.1')}</li>
                  <li>• {t('search.suggestions.2')}</li>
                  <li>• {t('search.suggestions.3')}</li>
                </ul>
              </div>
            </Card>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SearchResults;
