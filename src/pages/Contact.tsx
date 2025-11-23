import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';
import { useState } from 'react';

const Contact = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = language === 'fr' ? 'Le nom est requis' : 'Name is required';
    } else if (formData.name.length > 100) {
      newErrors.name = language === 'fr' ? 'Le nom doit contenir moins de 100 caractères' : 'Name must be less than 100 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = language === 'fr' ? 'L\'email est requis' : 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = language === 'fr' ? 'Email invalide' : 'Invalid email';
    } else if (formData.email.length > 255) {
      newErrors.email = language === 'fr' ? 'L\'email doit contenir moins de 255 caractères' : 'Email must be less than 255 characters';
    }

    // Phone validation (optional but must be valid if provided)
    if (formData.phone && !/^[\d\s+()-]+$/.test(formData.phone)) {
      newErrors.phone = language === 'fr' ? 'Numéro de téléphone invalide' : 'Invalid phone number';
    }

    // Company validation (optional but with length limit)
    if (formData.company && formData.company.length > 100) {
      newErrors.company = language === 'fr' ? 'Le nom de la société doit contenir moins de 100 caractères' : 'Company name must be less than 100 characters';
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = language === 'fr' ? 'Le sujet est requis' : 'Subject is required';
    } else if (formData.subject.length > 200) {
      newErrors.subject = language === 'fr' ? 'Le sujet doit contenir moins de 200 caractères' : 'Subject must be less than 200 characters';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = language === 'fr' ? 'Le message est requis' : 'Message is required';
    } else if (formData.message.length > 2000) {
      newErrors.message = language === 'fr' ? 'Le message doit contenir moins de 2000 caractères' : 'Message must be less than 2000 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    // Clear error for this field when user starts typing
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      toast.success(
        language === 'fr' ? 'Message envoyé avec succès!' : 'Message sent successfully!'
      );
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
      });
    } else {
      toast.error(
        language === 'fr' ? 'Veuillez corriger les erreurs du formulaire' : 'Please correct the form errors'
      );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

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

              <Card>
                <CardHeader>
                  <CardTitle>
                    {language === 'fr' ? 'Horaires d\'ouverture' : 'Opening Hours'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {language === 'fr' ? 'Lundi - Vendredi' : 'Monday - Friday'}
                    <br />
                    9:00 - 18:00
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>
                    {language === 'fr' ? 'Notre emplacement' : 'Our Location'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video w-full rounded-md overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.2088645937553!2d2.3048617!3d48.8707088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fec95820111%3A0x7c1c7c1c7c1c7c1c!2s123%20Avenue%20des%20Champs-%C3%89lys%C3%A9es%2C%2075008%20Paris%2C%20France!5e0!3m2!1sen!2s!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
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
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          {language === 'fr' ? 'Nom complet' : 'Full Name'} *
                        </label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={language === 'fr' ? 'Votre nom' : 'Your name'}
                          className={errors.name ? 'border-destructive' : ''}
                        />
                        {errors.name && (
                          <p className="text-sm text-destructive mt-1">{errors.name}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="votre@email.com"
                          className={errors.email ? 'border-destructive' : ''}
                        />
                        {errors.email && (
                          <p className="text-sm text-destructive mt-1">{errors.email}</p>
                        )}
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
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+33 1 23 45 67 89"
                          className={errors.phone ? 'border-destructive' : ''}
                        />
                        {errors.phone && (
                          <p className="text-sm text-destructive mt-1">{errors.phone}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-2">
                          {language === 'fr' ? 'Société' : 'Company'}
                        </label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder={
                            language === 'fr' ? 'Nom de votre société' : 'Your company name'
                          }
                          className={errors.company ? 'border-destructive' : ''}
                        />
                        {errors.company && (
                          <p className="text-sm text-destructive mt-1">{errors.company}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        {language === 'fr' ? 'Sujet' : 'Subject'} *
                      </label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder={
                          language === 'fr' ? 'Sujet de votre message' : 'Subject of your message'
                        }
                        className={errors.subject ? 'border-destructive' : ''}
                      />
                      {errors.subject && (
                        <p className="text-sm text-destructive mt-1">{errors.subject}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={
                          language === 'fr'
                            ? 'Décrivez votre projet ou vos besoins...'
                            : 'Describe your project or needs...'
                        }
                        className={errors.message ? 'border-destructive' : ''}
                      />
                      {errors.message && (
                        <p className="text-sm text-destructive mt-1">{errors.message}</p>
                      )}
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
