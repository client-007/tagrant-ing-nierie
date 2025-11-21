import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const { language } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(
      language === 'fr' ? 'Message envoyé avec succès!' : 'Message sent successfully!'
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {language === 'fr' ? 'Contactez-nous' : 'Contact Us'}
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-95">
            {language === 'fr'
              ? 'Nous sommes là pour répondre à toutes vos questions et discuter de vos projets'
              : "We're here to answer all your questions and discuss your projects"}
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>
                    {language === 'fr' ? 'Coordonnées' : 'Contact Information'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">
                        {language === 'fr' ? 'Adresse' : 'Address'}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        123 Avenue des Champs-Élysées, Paris, France
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href="mailto:contact@tagrant.fr"
                        className="text-sm text-muted-foreground hover:text-primary"
                      >
                        contact@tagrant.fr
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">
                        {language === 'fr' ? 'Téléphone' : 'Phone'}
                      </p>
                      <a
                        href="tel:+33123456789"
                        className="text-sm text-muted-foreground hover:text-primary"
                      >
                        +33 1 23 45 67 89
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-accent text-accent-foreground">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">
                    {language === 'fr' ? 'Horaires d\'ouverture' : 'Opening Hours'}
                  </h3>
                  <p className="text-sm opacity-90">
                    {language === 'fr' ? 'Lundi - Vendredi' : 'Monday - Friday'}
                    <br />
                    9:00 - 18:00
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>
                    {language === 'fr' ? 'Envoyez-nous un message' : 'Send us a message'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          {language === 'fr' ? 'Nom complet' : 'Full Name'}
                        </label>
                        <Input
                          id="name"
                          placeholder={language === 'fr' ? 'Votre nom' : 'Your name'}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="votre@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          {language === 'fr' ? 'Téléphone' : 'Phone'}
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+33 1 23 45 67 89"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-2">
                          {language === 'fr' ? 'Société' : 'Company'}
                        </label>
                        <Input
                          id="company"
                          placeholder={
                            language === 'fr' ? 'Nom de votre société' : 'Your company name'
                          }
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        {language === 'fr' ? 'Sujet' : 'Subject'}
                      </label>
                      <Input
                        id="subject"
                        placeholder={
                          language === 'fr' ? 'Sujet de votre message' : 'Subject of your message'
                        }
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        rows={6}
                        placeholder={
                          language === 'fr'
                            ? 'Décrivez votre projet ou vos besoins...'
                            : 'Describe your project or needs...'
                        }
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Send className="mr-2 h-5 w-5" />
                      {language === 'fr' ? 'Envoyer le message' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
