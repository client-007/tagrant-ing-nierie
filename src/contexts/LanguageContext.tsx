import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.services': 'Services',
    'nav.expertise': 'Projets',
    'nav.blog': 'Blog',
    'nav.jobs': 'Emplois',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Précision en ingénierie. Innovation durable. Expertise humaine',
    'hero.subtitle': 'Votre partenaire en gestion de projets d\'ingénierie et innovation technique en France',
    'hero.cta': 'Découvrir nos services',
    'hero.contact': 'Nous contacter',
    'hero.quote': 'Demander un devis',
    'hero.slide1.title': 'Gestion de Projet',
    'hero.slide1.subtitle': 'Pilotage stratégique et coordination optimale de vos projets d\'infrastructure',
    'hero.slide2.title': 'Études Techniques & Coordination',
    'hero.slide2.subtitle': 'Analyses approfondies et solutions innovantes pour vos défis techniques',
    'hero.slide3.title': 'Inspection, Maintenance & Réparation des Ouvrages d\'art',
    'hero.slide3.subtitle': 'Services de diagnostic avancés pour les structures en béton et en acier afin d\'assurer la sécurité, la durabilité et la performance',
    
    // Company Overview
    'overview.title': 'Votre partenaire en gestion de projets d\'ingénierie et innovation technique en France',
    'overview.description': 'TAGRANT INGENIERIE accompagne vos projets d\'infrastructure avec expertise technique, gestion de projet stratégique et développement professionnel.',
    
    // Services
    'services.title': 'Nos services principaux',
    'services.subtitle': 'Solutions d\'ingénierie complètes adaptées aux besoins de votre projet.',
    'services.project': 'Gestion de Projet',
    'services.project.desc': 'Support opérationnel en génie civil et infrastructure pour sécuriser les plannings et la livraison des projets',
    'services.studies': 'Études Techniques & Coordination',
    'services.studies.desc': 'Nous réalisons des études techniques et de la modélisation pour assurer la réussite de vos projets de génie civil et d\'infrastructure. Nous fournissons des maquettes numériques (BIM) de haute qualité, axées sur la rigueur des études et la continuité entre bureaux d\'études et équipes d\'exécution.',
    'services.inspection': 'Inspection, Maintenance & Réparation des Ouvrages d\'art',
    'services.inspection.desc': 'Nous accompagnons les maîtres d\'ouvrage dans la compréhension, la préservation et la remise en état de leurs ouvrages d\'art. Nous identifions les désordres, en analysons les causes et définissons les solutions les plus adaptées.',
    'services.training': 'Formation',
    'services.training.desc': 'Programmes de formation en ingénierie, gestion de projet et outils numériques',
    'services.professionalTraining': 'Méthodes Inspection & diagnostic d\'ouvrages d\'art',
    'services.professionalTraining.desc': 'Programmes de formation professionnelle en ingénierie, gestion de projet et outils numériques',
    'services.learn': 'En savoir plus',
    
    // Mission & Vision
    'mission.title': 'Notre mission',
    'mission.text': 'Fournir des solutions d\'ingénierie intégrées qui combinent précision technique, gestion de projet stratégique et développement professionnel - pour permettre à nos clients et équipes de construire des infrastructures plus intelligentes, plus sûres et plus durables.',
    'vision.title': 'Notre vision',
    'vision.text': 'Devenir un partenaire d\'ingénierie de confiance reconnu pour l\'excellence, la transparence et l\'innovation - façonner l\'avenir de l\'infrastructure durable en France et au-delà.',
    
    // Values
    'values.title': 'Nos valeurs',
    'values.subtitle': 'Les principes qui guident notre travail et nos relations.',
    'values.integrity': 'Intégrité & Transparence',
    'values.integrity.desc': 'Nous agissons avec honnêteté et clarté dans tous nos projets, construisant la confiance avec nos clients et partenaires.',
    'values.excellence': 'Excellence technique',
    'values.excellence.desc': 'La précision et la rigueur guident chaque étape de notre travail d\'ingénierie.',
    'values.collaboration': 'Collaboration & Partage des connaissances',
    'values.collaboration.desc': 'Nous croyons au travail d\'équipe et à l\'échange continu d\'expertise.',
    'values.innovation': 'Innovation & Adaptabilité',
    'values.innovation.desc': 'Nous adoptons les outils numériques et les méthodes créatives pour optimiser les solutions d\'ingénierie.',
    'values.sustainability': 'Durabilité & Responsabilité',
    'values.sustainability.desc': 'Nous concevons dans le respect des personnes, des communautés et de l\'environnement.',
    'values.agility': 'Agilité Opérationnelle',
    'values.agility.desc': 'Approche flexible et réactive pour répondre aux besoins dynamiques des projets.',
    
    // Team
    'team.title': 'Témoignages',
    'team.subtitle': 'Ce que disent nos clients',
    
    // CTA Section
    'cta.title': 'Prêt à démarrer votre projet ?',
    'cta.subtitle': 'Discutons de la manière dont nous pouvons apporter excellence technique et innovation à vos projets d\'infrastructure.',
    'cta.quote': 'Demander un devis',
    'cta.services': 'Découvrir nos services',
    
    // Footer
    'footer.quote': 'Demander un devis',
    'footer.quick': 'Liens rapides',
    'footer.follow': 'Suivez-nous',
    'footer.rights': 'Tous droits réservés.',
    'footer.address': 'Adresse',
    'footer.address.full': '26 Rue Linois 75015 Paris',
    'footer.email': 'Email',
    'footer.phone': 'Téléphone',
    
    // Search
    'search.results': 'Résultats de recherche',
    'search.for': 'Résultats pour',
    'search.empty': 'Entrez un terme de recherche',
    'search.result': 'résultat trouvé',
    'search.results.plural': 'résultats trouvés',
    'search.view': 'Voir la page',
    'search.noResults': 'Aucun résultat trouvé',
    'search.noResults.desc': 'Nous n\'avons trouvé aucun résultat pour votre recherche. Essayez ces suggestions :',
    'search.suggestions.1': 'Vérifiez l\'orthographe de vos mots-clés',
    'search.suggestions.2': 'Utilisez des termes plus généraux',
    'search.suggestions.3': 'Essayez différents mots-clés',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.expertise': 'Projects',
    'nav.blog': 'Blog',
    'nav.jobs': 'Jobs',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Engineering precision. Sustainable innovation. Human expertise',
    'hero.subtitle': 'Your partner in engineering project management and technical innovation in France',
    'hero.cta': 'Explore Our Services',
    'hero.contact': 'Contact Us',
    'hero.quote': 'Request a Quote',
    'hero.slide1.title': 'Project Management',
    'hero.slide1.subtitle': 'Strategic leadership and optimal coordination of your infrastructure projects',
    'hero.slide2.title': 'Technical Studies & Coordination',
    'hero.slide2.subtitle': 'In-depth analysis and innovative solutions for your technical challenges',
    'hero.slide3.title': 'Inspection, Maintenance & Repair of Civil Engineering Structures',
    'hero.slide3.subtitle': 'Advanced diagnostic services for concrete and steel structures to ensure safety, durability, and performance',
    
    // Company Overview
    'overview.title': 'Your Partner in Engineering Project Management and Technical Innovation in France',
    'overview.description': 'TAGRANT INGENIERIE supports your infrastructure projects with technical expertise, strategic project management, and professional development.',
    
    // Services
    'services.title': 'Our Core Services',
    'services.subtitle': 'Comprehensive engineering solutions tailored to your project needs.',
    'services.project': 'Project Management',
    'services.project.desc': 'Operational support in civil engineering and infrastructure to secure schedules and project delivery',
    'services.studies': 'Technical Studies & Coordination',
    'services.studies.desc': 'We carry out technical studies and modeling to ensure the success of your civil engineering and infrastructure projects. We provide high-quality digital models (BIM), focused on rigorous studies and continuity between design offices and execution teams.',
    'services.inspection': 'Inspection, Maintenance & Repair of Civil Engineering Structures',
    'services.inspection.desc': 'We support asset owners in understanding, preserving and restoring their civil engineering structures. We identify defects, analyze their causes and define the most appropriate solutions.',
    'services.training': 'Training',
    'services.training.desc': 'Training programs in engineering, project management and digital tools',
    'services.professionalTraining': 'Methods Inspection & diagnosis of civil engineering structures',
    'services.professionalTraining.desc': 'Professional training programs in engineering, project management and digital tools',
    'services.learn': 'Learn More',
    
    // Mission & Vision
    'mission.title': 'Our Mission',
    'mission.text': 'To deliver integrated engineering solutions that combine technical precision, strategic project management, and professional development - empowering our clients and teams to build smarter, safer, and more sustainable infrastructures.',
    'vision.title': 'Our Vision',
    'vision.text': 'To become a trusted engineering partner recognized for excellence, transparency, and innovation - shaping the future of sustainable infrastructure in France and beyond.',
    
    // Values
    'values.title': 'Our Values',
    'values.subtitle': 'The principles that guide our work and relationships.',
    'values.integrity': 'Integrity & Transparency',
    'values.integrity.desc': 'We act with honesty and clarity in all our projects, building trust with our clients and partners.',
    'values.excellence': 'Technical Excellence',
    'values.excellence.desc': 'Precision and rigor guide every stage of our engineering work.',
    'values.collaboration': 'Collaboration & Knowledge Sharing',
    'values.collaboration.desc': 'We believe in teamwork and the continuous exchange of expertise.',
    'values.innovation': 'Innovation & Adaptability',
    'values.innovation.desc': 'We embrace digital tools and creative methods to optimize engineering solutions.',
    'values.sustainability': 'Sustainability & Responsibility',
    'values.sustainability.desc': 'We design with respect for people, communities, and the environment.',
    'values.agility': 'Operational Agility',
    'values.agility.desc': 'Flexible and responsive approach to meet dynamic project needs.',
    
    // Team
    'team.title': 'Testimonials',
    'team.subtitle': 'What our clients say',
    
    // CTA Section
    'cta.title': 'Ready to Start Your Project?',
    'cta.subtitle': 'Let\'s discuss how we can bring technical excellence and innovation to your infrastructure projects.',
    'cta.quote': 'Request a Quote',
    'cta.services': 'Explore Services',
    
    // Footer
    'footer.quote': 'Request a Quote',
    'footer.quick': 'Quick Links',
    'footer.follow': 'Follow Us',
    'footer.rights': 'All rights reserved.',
    'footer.address': 'Address',
    'footer.address.full': '26 Rue Linois 75015 Paris',
    'footer.email': 'Email',
    'footer.phone': 'Phone',
    
    // Search
    'search.results': 'Search Results',
    'search.for': 'Results for',
    'search.empty': 'Enter a search term',
    'search.result': 'result found',
    'search.results.plural': 'results found',
    'search.view': 'View page',
    'search.noResults': 'No Results Found',
    'search.noResults.desc': 'We couldn\'t find any results for your search. Try these suggestions:',
    'search.suggestions.1': 'Check the spelling of your keywords',
    'search.suggestions.2': 'Use more general terms',
    'search.suggestions.3': 'Try different keywords',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.fr] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
