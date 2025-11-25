import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { TestimonialCarousel } from '@/components/TestimonialCarousel';
import { CheckCircle2, Target, Eye, Lightbulb, Shield, Users, Cog, Heart, Zap } from 'lucide-react';
import teamBadreddine from '@/assets/team-badreddine.jpg';
import teamKarim from '@/assets/team-karim.jpg';

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

      {/* Who We Are */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {language === 'fr' ? 'Qui sommes-nous' : 'Who We Are'}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {language === 'fr' 
                ? "Tagrant Ingénierie est un cabinet d'ingénierie spécialisé fondé pour combler le fossé entre précision technique et excellence opérationnelle. Nous sommes spécialisés dans la gestion de projets de génie civil, la coordination technique, le diagnostic structurel et la formation professionnelle."
                : "Tagrant Ingénierie is a specialized engineering firm founded to bridge the gap between technical precision and operational excellence. We specialize in civil engineering project management, technical coordination, structural diagnostics, and professional training."}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {language === 'fr'
                ? "Notre équipe multidisciplinaire rassemble des ingénieurs expérimentés, des chefs de projet et des spécialistes techniques engagés à fournir des solutions d'infrastructure durables dans toute la France."
                : "Our multidisciplinary team brings together experienced engineers, project managers, and technical specialists committed to delivering sustainable infrastructure solutions throughout France."}
            </p>
          </div>
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

      {/* Our Team */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {language === 'fr' ? 'Notre Équipe' : 'Our Team'}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === 'fr' 
                ? 'Les experts derrière votre projet' 
                : 'The experts behind your project'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Badreddine */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <img 
                    src={teamBadreddine} 
                    alt="Badreddine BELHAOUCHET"
                    className="w-32 h-32 rounded-full object-cover mb-4"
                    style={{ objectPosition: 'center 30%' }}
                  />
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    Badreddine BELHAOUCHET
                  </h3>
                  <p className="text-sm font-medium text-primary mb-4">
                    {language === 'fr' ? 'Président & Fondateur' : 'President & Founder'}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {language === 'fr'
                      ? 'Chez TAGRANT INGÉNIERIE, nous mettons notre expertise au service de la réussite de vos projets d\'infrastructure. Rigueur, anticipation et coordination sont nos priorités pour garantir des décisions maîtrisées et des délais tenus.'
                      : 'At TAGRANT INGÉNIERIE, we put our expertise at the service of the success of your infrastructure projects. Rigor, anticipation and coordination are our priorities to guarantee controlled decisions and deadlines met.'}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Karim */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <img 
                    src={teamKarim} 
                    alt="Karim LAMARI"
                    className="w-32 h-32 rounded-full object-cover mb-4"
                    style={{ objectPosition: 'center 20%' }}
                  />
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    Karim LAMARI
                  </h3>
                  <p className="text-sm font-medium text-primary mb-4">
                    {language === 'fr' ? 'Chargé d\'Affaires & Acquisition de Talents' : 'Business Manager & Talent Acquisition'}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {language === 'fr'
                      ? 'Chez TAGRANT INGÉNIERIE, je transforme vos besoins en offres concrètes et recrute les compétences humaines et techniques adaptées. À l\'écoute des clients et des équipes, je veille à la qualité, à la réactivité et à la confiance tout au long du projet.'
                      : 'At TAGRANT INGÉNIERIE, I transform your needs into concrete offers and recruit the appropriate human and technical skills. Attentive to clients and teams, I ensure quality, responsiveness and trust throughout the project.'}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {t('team.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('team.subtitle')}
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
