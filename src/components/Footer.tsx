import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import logo from '@/assets/tagrant-logo.png';

export const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/services', label: t('nav.services') },
    { path: '/blog', label: t('nav.blog') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const serviceLinks = [
    { path: '/services/project-management', label: t('services.project') },
    { path: '/services/technical-studies', label: t('services.studies') },
    { path: '/services/inspection', label: t('services.inspection') },
    { path: '/services/training', label: t('services.training') },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <img src={logo} alt="TAGRANT INGENIERIE" className="h-16 w-auto brightness-0 invert" />
            <p className="text-sm opacity-90">
              {t('overview.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.quick')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('nav.services')}</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('nav.contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm opacity-90">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>123 Avenue des Champs-Élysées, Paris, France</span>
              </li>
              <li className="flex items-center space-x-2 text-sm opacity-90">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:contact@tagrant.fr" className="hover:opacity-100 transition-opacity">
                  contact@tagrant.fr
                </a>
              </li>
              <li className="flex items-center space-x-2 text-sm opacity-90">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+33123456789" className="hover:opacity-100 transition-opacity">
                  +33 1 23 45 67 89
                </a>
              </li>
            </ul>
            
            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-base font-semibold mb-3">{t('footer.follow')}</h4>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-75">
          <p>© {new Date().getFullYear()} TAGRANT INGENIERIE. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};
