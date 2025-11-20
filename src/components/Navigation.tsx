import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, Search, X } from 'lucide-react';
import { useState } from 'react';
import logo from '@/assets/tagrant-logo.png';

export const Navigation = () => {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/services', label: t('nav.services') },
    { path: '/expertise', label: t('nav.expertise') },
    { path: '/blog', label: t('nav.blog') },
    { path: '/jobs', label: t('nav.jobs') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="TAGRANT INGENIERIE" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path)
                    ? 'text-primary border-b-2 border-primary pb-1'
                    : 'text-foreground/80'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" aria-label="Search">
              <Search className="h-5 w-5" />
            </Button>

            {/* Language Switcher */}
            <div className="hidden md:flex items-center space-x-1 border border-border rounded-md p-1">
              <button
                onClick={() => setLanguage('fr')}
                className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
                  language === 'fr'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                FR
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
                  language === 'en'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                EN
              </button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium transition-colors hover:text-primary ${
                    isActive(link.path) ? 'text-primary' : 'text-foreground/80'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center space-x-2 pt-4 border-t border-border">
                <button
                  onClick={() => {
                    setLanguage('fr');
                    setMobileMenuOpen(false);
                  }}
                  className={`px-4 py-2 text-sm font-medium rounded transition-colors ${
                    language === 'fr'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-foreground/70'
                  }`}
                >
                  FR
                </button>
                <button
                  onClick={() => {
                    setLanguage('en');
                    setMobileMenuOpen(false);
                  }}
                  className={`px-4 py-2 text-sm font-medium rounded transition-colors ${
                    language === 'en'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-foreground/70'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
