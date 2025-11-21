import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Upload } from 'lucide-react';

const Jobs = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Why Join Us */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === 'fr' ? 'Pourquoi nous rejoindre ?' : 'Why Join Us?'}
            </h2>
            <p className="text-lg text-muted-foreground">
              {language === 'fr'
                ? "Rejoignez une équipe d'ingénieurs passionnés où l'excellence technique rencontre l'innovation. Chez Tagrant, nous offrons des opportunités de croissance professionnelle sur des projets d'envergure, un environnement collaboratif qui valorise l'expertise de chacun, et la chance de façonner l'avenir des infrastructures. Que vous soyez ingénieur expérimenté ou jeune diplômé, venez contribuer à des projets qui font la différence."
                : "Join a team of passionate engineers where technical excellence meets innovation. At Tagrant, we offer professional growth opportunities on large-scale projects, a collaborative environment that values everyone's expertise, and the chance to shape the future of infrastructure. Whether you're an experienced engineer or recent graduate, come contribute to projects that make a difference."}
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-8 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
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
