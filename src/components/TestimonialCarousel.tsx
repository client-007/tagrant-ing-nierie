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
      <Card className="border-2">
        <CardContent className="p-8 md:p-12">
          {/* Header with Photo, Name, and LinkedIn */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              {/* Circular Photo */}
              <div className="flex-shrink-0">
                <img 
                  src={currentTestimonial.image} 
                  alt={currentTestimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
              
              {/* Name and Title */}
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  {currentTestimonial.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {currentTestimonial.role}
                </p>
                <p className="text-sm text-muted-foreground/80">
                  {currentTestimonial.company}
                </p>
              </div>
            </div>

            {/* LinkedIn Icon */}
            <a
              href={currentTestimonial.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-brand-yellow active:text-brand-yellow transition-colors"
              aria-label="Connect on LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>

          {/* Quote */}
          <blockquote className="text-muted-foreground leading-relaxed italic">
            "{currentTestimonial.quote}"
          </blockquote>
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
