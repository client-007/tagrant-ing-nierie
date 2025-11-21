import { useState } from 'react';
import { ChevronLeft, ChevronRight, Linkedin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import teamMember1 from '@/assets/team-member-1.jpg';
import teamMember2 from '@/assets/team-member-2.jpg';
import teamMember3 from '@/assets/team-member-3.jpg';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  linkedinUrl: string;
  image: string;
  initial: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Jean-Pierre Dubois',
    role: 'Project Director',
    company: 'Infrastructure France',
    quote: 'TAGRANT INGENIERIE transformed our approach to project management. Their expertise in coordinating complex infrastructure projects while maintaining strict timelines was exceptional.',
    linkedinUrl: 'https://linkedin.com',
    image: teamMember1,
    initial: 'JD',
  },
  {
    name: 'Marie Laurent',
    role: 'Technical Manager',
    company: 'Build Solutions SA',
    quote: 'The technical studies and BIM coordination provided by TAGRANT were instrumental in delivering our railway project. Their attention to detail and innovative problem-solving approach set them apart.',
    linkedinUrl: 'https://linkedin.com',
    image: teamMember2,
    initial: 'ML',
  },
  {
    name: 'Thomas Bernard',
    role: 'Infrastructure Engineer',
    company: 'European Rail Network',
    quote: 'Professional training programs from TAGRANT elevated our team\'s capabilities in modern engineering practices. The combination of theoretical knowledge and practical application was outstanding.',
    linkedinUrl: 'https://linkedin.com',
    image: teamMember3,
    initial: 'TB',
  },
];

export const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative">
      <Card className="overflow-hidden border-2">
        <CardContent className="p-0">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image Side */}
            <div className="relative aspect-square md:aspect-auto">
              <img 
                src={currentTestimonial.image} 
                alt={currentTestimonial.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Side */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="space-y-6">
                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed italic">
                  "{currentTestimonial.quote}"
                </blockquote>

                {/* Author Info */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">
                    {currentTestimonial.name}
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    {currentTestimonial.role}
                  </p>
                  <p className="text-md text-muted-foreground/80">
                    {currentTestimonial.company}
                  </p>
                </div>

                {/* LinkedIn */}
                <a
                  href={currentTestimonial.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="text-sm font-medium">Connect on LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background p-3 rounded-full shadow-lg transition-all z-10"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-6 w-6 text-foreground" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background p-3 rounded-full shadow-lg transition-all z-10"
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-6 w-6 text-foreground" />
      </button>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-6">
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
    </div>
  );
};
