import { useState } from 'react';
import { ChevronLeft, ChevronRight, Linkedin } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
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
    <div className="max-w-4xl mx-auto">
      <div className="bg-card rounded-lg p-8 md:p-12 shadow-sm">
        <div className="flex flex-col items-center text-center">
          {/* Avatar */}
          <Avatar className="h-24 w-24 mb-6">
            <AvatarImage src={currentTestimonial.image} alt={currentTestimonial.name} />
            <AvatarFallback className="text-xl font-semibold bg-primary text-primary-foreground">
              {currentTestimonial.initial}
            </AvatarFallback>
          </Avatar>

          {/* Quote */}
          <blockquote className="text-lg md:text-xl text-foreground/90 mb-6 italic leading-relaxed">
            "{currentTestimonial.quote}"
          </blockquote>

          {/* Name and Role */}
          <div className="mb-4">
            <p className="text-lg font-semibold text-foreground mb-1">
              {currentTestimonial.name}
            </p>
            <p className="text-sm text-muted-foreground">
              {currentTestimonial.role} • {currentTestimonial.company}
            </p>
          </div>

          {/* LinkedIn Link */}
          <a
            href={currentTestimonial.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-primary hover:text-brand-yellow transition-colors group"
            aria-label={`View ${currentTestimonial.name}'s LinkedIn profile`}
          >
            <Linkedin className="h-5 w-5 group-hover:text-brand-yellow transition-colors" />
            <span className="text-sm font-medium">View LinkedIn Profile</span>
          </a>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center mt-8 space-x-4">
        <button
          onClick={goToPrevious}
          className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-6 w-6 text-foreground" />
        </button>

        {/* Dots Indicator */}
        <div className="flex space-x-2">
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

        <button
          onClick={goToNext}
          className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-6 w-6 text-foreground" />
        </button>
      </div>
    </div>
  );
};
