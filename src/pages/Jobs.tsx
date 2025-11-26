import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Upload, MapPin, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Jobs = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Why Join Us */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === 'fr' ? 'Pourquoi nous rejoindre ?' : 'Why Join Us?'}
            </h2>
            <p className="text-lg text-muted-foreground">
              {language === 'fr'
                ? "Rejoignez une équipe d'ingénieurs passionnés où l'excellence technique rencontre l'innovation. Chez TAGRANT INGENIERIE, nous offrons des opportunités de croissance professionnelle sur des projets d'envergure, un environnement collaboratif qui valorise l'expertise de chacun, et la chance de façonner l'avenir des infrastructures. Que vous soyez ingénieur expérimenté ou jeune diplômé, venez contribuer à des projets qui font la différence."
                : "Join a team of passionate engineers where technical excellence meets innovation. At TAGRANT INGENIERIE, we offer professional growth opportunities on large-scale projects, a collaborative environment that values everyone's expertise, and the chance to shape the future of infrastructure. Whether you're an experienced engineer or recent graduate, come contribute to projects that make a difference."}
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              {language === 'fr' ? 'Postes ouverts' : 'Open Positions'}
            </h2>
            
            <Link to="/jobs/project-planner-brussels">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                        Project Planner — Ouvrages souterrains
                      </CardTitle>
                      <CardDescription className="mt-2 text-base">
                        {language === 'fr' 
                          ? "Poste avec présence à Bruxelles"
                          : "Position with presence in Brussels"}
                      </CardDescription>
                    </div>
                    <ArrowRight className="h-6 w-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>Bruxelles, Belgique</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4" />
                      <span>{language === 'fr' ? 'Temps plein' : 'Full-time'}</span>
                    </div>
                  </div>
                  <p className="mt-4 text-muted-foreground line-clamp-2">
                    {language === 'fr'
                      ? "Nous recrutons un(e) Project Planner confirmé(e) pour participer à la planification et à la coordination d'importants travaux d'infrastructure souterraine."
                      : "We are recruiting an experienced Project Planner to participate in the planning and coordination of major underground infrastructure works."}
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8">
              {language === 'fr'
                ? "Les postes proposés ne correspondent pas à votre profil ? Envoyez‑nous votre candidature spontanée — nous la conserverons et vous contacterons dès qu'une opportunité pertinente se présentera"
                : "The proposed positions do not match your profile? Send us your spontaneous application — we will keep it and contact you as soon as a relevant opportunity arises"}
            </h3>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  {language === 'fr' ? 'Candidature Spontanée' : 'Spontaneous Application'}
                </CardTitle>
                <CardDescription>
                  {language === 'fr'
                    ? 'Remplissez le formulaire ci-dessous pour postuler. Nous examinerons votre candidature et vous contacterons si une opportunité appropriée se présente.'
                    : 'Fill out the form below to apply. We will review your application and contact you if a suitable opportunity arises.'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <Label htmlFor="fullName">
                      {language === 'fr' ? 'Nom complet' : 'Full Name'} <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="fullName"
                      placeholder={language === 'fr' ? 'Jean Dupont' : 'John Doe'}
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      {language === 'fr' ? 'Email' : 'Email'} <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={language === 'fr' ? 'jean.dupont@exemple.fr' : 'john.doe@example.com'}
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone">
                      {language === 'fr' ? 'Téléphone' : 'Phone'} <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder={language === 'fr' ? '+33 6 12 34 56 78' : '+33 6 12 34 56 78'}
                      required
                    />
                  </div>

                  {/* CV Upload */}
                  <div className="space-y-2">
                    <Label htmlFor="cv">
                      {language === 'fr' ? 'CV (PDF ou DOCX)' : 'CV (PDF or DOCX)'} <span className="text-destructive">*</span>
                    </Label>
                    <div className="flex items-center gap-4">
                      <Button type="button" variant="outline" className="w-full">
                        <Upload className="mr-2 h-4 w-4" />
                        {language === 'fr' ? 'Choisir un fichier' : 'Choose File'}
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {language === 'fr'
                        ? 'Formats acceptés : PDF, DOCX (max 5MB)'
                        : 'Accepted formats: PDF, DOCX (max 5MB)'}
                    </p>
                  </div>

                  {/* Cover Letter */}
                  <div className="space-y-2">
                    <Label htmlFor="coverLetter">
                      {language === 'fr' ? 'Lettre de motivation' : 'Cover Letter'} <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="coverLetter"
                      placeholder={
                        language === 'fr'
                          ? 'Parlez-nous de votre expérience et de votre motivation...'
                          : 'Tell us about your experience and motivation...'
                      }
                      rows={6}
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" size="lg" className="w-full">
                    {language === 'fr' ? 'Soumettre la candidature' : 'Submit Application'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Jobs;
