import { useState } from 'react';
import { ChevronLeft, ChevronRight, Linkedin } from 'lucide-react';
import { Button } from './ui/button';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  linkedinUrl: string;
  initial: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Jean Dupont',
    role: 'Project Director',
    company: 'Infrastructure France',
    quote: 'Exceptional technical expertise and professional project management. Their team delivered our complex infrastructure project on time and within budget.',
    linkedinUrl: '#',
    initial: 'J',
  },
  {
    name: 'Marie Laurent',
    role: 'Civil Engineer',
    company: 'Construction Plus',
    quote: 'Outstanding collaboration and technical precision. TAGRANT INGENIERIE brought innovative solutions to our most challenging structural problems.',
    linkedinUrl: '#',
    initial: 'M',
  },
  {
    name: 'Pierre Martin',
    role: 'Operations Manager',
    company: 'Urban Development',
    quote: 'Professional, reliable, and highly skilled. Their BIM coordination and technical studies exceeded our expectations.',
    linkedinUrl: '#',
    initial: 'P',
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
    <div className="max-w-4xl mx-auto">
      <div className="bg-card border border-border rounded-lg p-8 md:p-12 relative">
        <div className="flex items-start space-x-6 mb-6">
          <div className="flex-shrink-0">
            <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">
                {currentTestimonial.initial}
              </span>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-foreground mb-1">
              {currentTestimonial.name}
            </h3>
            <p className="text-sm text-muted-foreground mb-1">
              {currentTestimonial.role}
            </p>
            <p className="text-sm text-muted-foreground">
              {currentTestimonial.company}
            </p>
          </div>
          <a
            href={currentTestimonial.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 text-primary hover:text-brand-yellow transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
        <blockquote className="text-lg text-foreground/80 italic">
          "{currentTestimonial.quote}"
        </blockquote>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center space-x-4 mt-6">
        <Button
          variant="outline"
          size="icon"
          onClick={goToPrevious}
          className="rounded-full"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        {/* Dots */}
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'w-8 bg-primary'
                  : 'w-2 bg-muted hover:bg-muted-foreground/30'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={goToNext}
          className="rounded-full"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};
