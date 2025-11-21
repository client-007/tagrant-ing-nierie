import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, Target, Eye, Lightbulb, Shield, Users, Cog, Heart, Zap } from 'lucide-react';

const About = () => {
  const { t, language } = useLanguage();

  const values = [
    { icon: Shield, title: t('values.integrity'), description: t('values.integrity.desc') },
    { icon: Target, title: t('values.excellence'), description: t('values.excellence.desc') },
    { icon: Users, title: t('values.collaboration'), description: t('values.collaboration.desc') },
    { icon: Lightbulb, title: t('values.innovation'), description: t('values.innovation.desc') },
    { icon: Heart, title: t('values.sustainability'), description: t('values.sustainability.desc') },
    { icon: Zap, title: t('values.agility'), description: t('values.agility.desc') },
  ];

  const strengths = [
    { icon: Cog, title: language === 'fr' ? 'Coordination' : 'Coordination' },
    { icon: Lightbulb, title: language === 'fr' ? 'Innovation technique' : 'Technical Innovation' },
    { icon: Shield, title: language === 'fr' ? 'Sécurité et qualité' : 'Safety and Quality' },
    { icon: CheckCircle2, title: language === 'fr' ? 'Fiabilité' : 'Reliability' },
    { icon: Target, title: language === 'fr' ? 'Agilité opérationnelle' : 'Operational Agility' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {language === 'fr' ? 'À propos de nous' : 'About Us'}
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-95">
            {language === 'fr'
              ? 'TAGRANT INGENIERIE est une société d\'ingénierie spécialisée dans la gestion de projets d\'infrastructure, les études techniques et la formation professionnelle.'
              : 'TAGRANT INGENIERIE is an engineering company specialized in infrastructure project management, technical studies and professional training.'}
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="border-2 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Target className="h-8 w-8 text-primary" />
                  <h2 className="text-2xl font-bold">{t('mission.title')}</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">{t('mission.text')}</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Eye className="h-8 w-8 text-accent" />
                  <h2 className="text-2xl font-bold">{t('vision.title')}</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">{t('vision.text')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('values.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <Icon className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              {language === 'fr' ? 'Notre philosophie' : 'Our Philosophy'}
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p className="leading-relaxed">
                {language === 'fr'
                  ? 'Chez TAGRANT INGENIERIE, nous croyons que la véritable excellence en ingénierie émerge là où la technologie rencontre l\'apprentissage. Chaque projet que nous concevons, chaque étude que nous menons, chaque solution que nous livrons reflète non seulement la précision technique mais aussi un engagement profond envers le partage des connaissances et le développement professionnel.'
                  : 'At TAGRANT INGENIERIE, we believe that true engineering excellence emerges where technology meets learning. Every project we design, every study we conduct, every solution we deliver reflects not only technical precision but also a deep commitment to knowledge sharing and professional growth.'}
              </p>
              <p className="leading-relaxed">
                {language === 'fr'
                  ? 'Nos ingénieurs sont plus que des experts techniques — ils sont des mentors, des innovateurs et des apprenants permanents qui transforment des connaissances d\'ingénierie complexes en progrès tangibles.'
                  : 'Our engineers are more than technical experts - they are mentors, innovators, and lifelong learners who transform complex engineering insights into tangible progress.'}
              </p>
              <p className="leading-relaxed">
                {language === 'fr'
                  ? 'En combinant harmonieusement innovation numérique et formation professionnelle, nous créons un pont vivant entre théorie et pratique, permettant à nos équipes et clients de grandir, d\'évoluer et de concevoir un avenir plus intelligent.'
                  : 'By seamlessly blending digital innovation with professional training, we create a living bridge between theory and practice, empowering our teams and clients alike to grow, evolve, and engineer a smarter tomorrow.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {language === 'fr' ? 'Nos forces' : 'Our Strengths'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {strengths.map((strength, index) => {
              const Icon = strength.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-primary-foreground/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-10 w-10" />
                  </div>
                  <h3 className="font-semibold">{strength.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
