import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  image?: string;
  initial: string;
}

export const TestimonialCarousel = () => {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = language === 'fr' 
    ? [
        {
          name: 'Christophe Rubbens',
          role: 'Acteur humaniste de la mobilité durable',
          company: 'STIB-MVIB',
          quote: 'Badreddine combine une vraie passion pour les ouvrages souterrains et une solide maîtrise des méthodes de planification. Son approche rationnelle et itérative transforme le planning en outil de gouvernance, précieux pour le projet de la nouvelle ligne de métro à Bruxelles.',
          initial: 'CR',
        },
        {
          name: 'Sameh Hodni',
          role: 'Project Engineering Manager',
          company: 'Tractebel',
          quote: 'Sur le projet Métro 3 à Bruxelles, Badreddine s\'est distingué par sa maîtrise des gros travaux, sa rigueur en planification (TILOS) et sa capacité à proposer des solutions concrètes. Engagé et techniquement fiable, il a été un atout majeur pour le pilotage du chantier.',
          initial: 'SH',
        },
        {
          name: 'Jean‑Marie Vanzemberg',
          role: 'Directeur Général de Filiale',
          company: 'Alstom Transport',
          quote: 'Réactif, autonome et rigoureux, Badreddine a apporté une expertise précieuse en géotechnique et fondations spéciales (jet‑grouting) et a structuré l\'intégration du planning au programme Ligne 3. Professionnel fiable et très engagé, je le recommande sans réserve.',
          initial: 'JMV',
        },
      ]
    : [
        {
          name: 'Christophe Rubbens',
          role: 'Humanist Actor in Sustainable Mobility',
          company: 'STIB-MVIB',
          quote: 'Badreddine combines a real passion for underground structures and solid mastery of planning methods. His rational and iterative approach transforms planning into a governance tool, valuable for the new metro line project in Brussels.',
          initial: 'CR',
        },
        {
          name: 'Sameh Hodni',
          role: 'Project Engineering Manager',
          company: 'Tractebel',
          quote: 'On the Metro 3 project in Brussels, Badreddine stood out for his mastery of major works, his rigorous planning (TILOS) and his ability to propose concrete solutions. Committed and technically reliable, he was a major asset for site management.',
          initial: 'SH',
        },
        {
          name: 'Jean‑Marie Vanzemberg',
          role: 'Managing Director of Subsidiary',
          company: 'Alstom Transport',
          quote: 'Responsive, autonomous and rigorous, Badreddine brought valuable expertise in geotechnics and special foundations (jet-grouting) and structured the integration of the schedule into the Line 3 program. Reliable and highly committed professional, I recommend him without reservation.',
          initial: 'JMV',
        },
      ];

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative">
      <Card className="border-2">
        <CardContent className="p-8 md:p-12">
          <div className="flex flex-col items-center text-center">
            {/* Avatar */}
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-2xl font-bold text-primary">
              {currentTestimonial.initial}
            </div>

            {/* Quote */}
            <blockquote className="text-lg md:text-xl text-muted-foreground italic mb-6 leading-relaxed">
              "{currentTestimonial.quote}"
            </blockquote>

            {/* Name & Details */}
            <div className="space-y-1">
              <p className="font-bold text-xl text-foreground">
                {currentTestimonial.name}
              </p>
              <p className="text-sm text-muted-foreground">
                {currentTestimonial.role}
              </p>
              <p className="text-sm font-medium text-primary">
                {currentTestimonial.company}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Dot Indicators with Navigation Buttons */}
      <div className="flex justify-center items-center gap-4 mt-6">
        {/* Previous Button */}
        <button
          onClick={goToPrevious}
          className="bg-background/90 hover:bg-background p-2 rounded-full shadow-lg transition-all"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5 text-foreground" />
        </button>

        {/* Dot Indicators */}
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex 
                  ? 'w-8 bg-primary' 
                  : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={goToNext}
          className="bg-background/90 hover:bg-background p-2 rounded-full shadow-lg transition-all"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5 text-foreground" />
        </button>
      </div>
    </div>
  );
};
