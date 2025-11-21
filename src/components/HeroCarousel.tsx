import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import heroSlide1 from '@/assets/hero-slide-1.jpg';
import heroSlide2 from '@/assets/hero-slide-2.jpg';
import heroSlide3 from '@/assets/hero-slide-3.jpg';

export const HeroCarousel = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroSlide1,
      title: t('hero.slide1.title'),
      subtitle: t('hero.slide1.subtitle'),
      cta: { text: t('nav.contact'), link: '/contact' },
    },
    {
      image: heroSlide2,
      title: t('hero.slide2.title'),
      subtitle: t('hero.slide2.subtitle'),
      cta: { text: t('cta.quote'), link: '/contact' },
    },
    {
      image: heroSlide3,
      title: t('hero.slide3.title'),
      subtitle: t('hero.slide3.subtitle'),
      cta: { text: t('nav.services'), link: '/services' },
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10" />
          <img
            src={slide.image}
            alt="Engineering infrastructure"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 container mx-auto px-4 h-full flex flex-col items-center justify-center text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl mx-auto">
              {slide.title}
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-95">
              {slide.subtitle}
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to={slide.cta.link}>
                {slide.cta.text}
              </Link>
            </Button>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-background/20 hover:bg-background/40 text-primary-foreground p-2 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-background/20 hover:bg-background/40 text-primary-foreground p-2 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? 'w-8 bg-brand-yellow'
                : 'w-2 bg-primary-foreground/50 hover:bg-primary-foreground/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
