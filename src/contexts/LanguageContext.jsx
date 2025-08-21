import React, { createContext, useContext, useState } from 'react'

// Traductions
const translations = {
  fr: {
    // Navigation
    home: 'Accueil',
    about: 'À propos',
    industries: 'Industries',
    services: 'Services',
    career: 'Carrière',
    contact: 'Contact',
    
    // Page d'accueil
    heroTitle: 'AfriBuilDigit Group',
    heroSubtitle: 'Votre partenaire de confiance en services informatiques',
    heroDescription: 'Jeune et dynamique entreprise spécialisée en science des données, ingénierie des données, analyse de données et développement logiciel.',
    getStarted: 'Commencer',
    learnMore: 'En savoir plus',
    
    // Services
    dataScience: 'Science des données',
    dataEngineering: 'Ingénierie des données',
    dataAnalytics: 'Analyse de données',
    softwareDevelopment: 'Développement logiciel',
    
    // À propos
    aboutTitle: 'À propos de nous',
    aboutDescription: 'Nous sommes une jeune et dynamique entreprise de services informatiques basée à Yaoundé, au Cameroun.',
    experience: 'Expérience',
    expertise: 'Expertise',
    innovation: 'Innovation',
    
    // Footer
    followUs: 'Suivez-nous',
    allRightsReserved: 'Tous droits réservés',
    
    // Contact
    contactUs: 'Contactez-nous',
    name: 'Nom',
    email: 'Email',
    message: 'Message',
    send: 'Envoyer',
    
    // Industries
    industriesTitle: 'Nos Industries',
    healthcare: 'Santé',
    finance: 'Finance',
    retail: 'Commerce',
    manufacturing: 'Manufacture',
    
    // Carrière
    careerTitle: 'Carrière',
    joinUs: 'Rejoignez-nous',
    openPositions: 'Postes ouverts',
    
    // Langues
    language: 'Langue'
  },
  
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    industries: 'Industries',
    services: 'Services',
    career: 'Career',
    contact: 'Contact',
    
    // Home page
    heroTitle: 'AfriBuilDigit Group',
    heroSubtitle: 'Your trusted partner in IT services',
    heroDescription: 'Young and dynamic company specialized in data science, data engineering, data analytics and software development.',
    getStarted: 'Get Started',
    learnMore: 'Learn More',
    
    // Services
    dataScience: 'Data Science',
    dataEngineering: 'Data Engineering',
    dataAnalytics: 'Data Analytics',
    softwareDevelopment: 'Software Development',
    
    // About
    aboutTitle: 'About Us',
    aboutDescription: 'We are a young and dynamic IT services company based in Yaoundé, Cameroon.',
    experience: 'Experience',
    expertise: 'Expertise',
    innovation: 'Innovation',
    
    // Footer
    followUs: 'Follow Us',
    allRightsReserved: 'All rights reserved',
    
    // Contact
    contactUs: 'Contact Us',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send',
    
    // Industries
    industriesTitle: 'Our Industries',
    healthcare: 'Healthcare',
    finance: 'Finance',
    retail: 'Retail',
    manufacturing: 'Manufacturing',
    
    // Career
    careerTitle: 'Career',
    joinUs: 'Join Us',
    openPositions: 'Open Positions',
    
    // Languages
    language: 'Language'
  },
  
  de: {
    // Navigation
    home: 'Startseite',
    about: 'Über uns',
    industries: 'Branchen',
    services: 'Dienstleistungen',
    career: 'Karriere',
    contact: 'Kontakt',
    
    // Home page
    heroTitle: 'AfriBuilDigit Group',
    heroSubtitle: 'Ihr vertrauensvoller Partner für IT-Dienstleistungen',
    heroDescription: 'Junges und dynamisches Unternehmen, spezialisiert auf Datenwissenschaft, Datenengineering, Datenanalyse und Softwareentwicklung.',
    getStarted: 'Loslegen',
    learnMore: 'Mehr erfahren',
    
    // Services
    dataScience: 'Datenwissenschaft',
    dataEngineering: 'Datenengineering',
    dataAnalytics: 'Datenanalyse',
    softwareDevelopment: 'Softwareentwicklung',
    
    // About
    aboutTitle: 'Über uns',
    aboutDescription: 'Wir sind ein junges und dynamisches IT-Dienstleistungsunternehmen mit Sitz in Yaoundé, Kamerun.',
    experience: 'Erfahrung',
    expertise: 'Expertise',
    innovation: 'Innovation',
    
    // Footer
    followUs: 'Folgen Sie uns',
    allRightsReserved: 'Alle Rechte vorbehalten',
    
    // Contact
    contactUs: 'Kontaktieren Sie uns',
    name: 'Name',
    email: 'E-Mail',
    message: 'Nachricht',
    send: 'Senden',
    
    // Industries
    industriesTitle: 'Unsere Branchen',
    healthcare: 'Gesundheitswesen',
    finance: 'Finanzen',
    retail: 'Einzelhandel',
    manufacturing: 'Fertigung',
    
    // Career
    careerTitle: 'Karriere',
    joinUs: 'Werden Sie Teil unseres Teams',
    openPositions: 'Offene Stellen',
    
    // Languages
    language: 'Sprache'
  }
}

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('fr')
  
  const t = (key) => {
    return translations[currentLanguage][key] || key
  }
  
  const changeLanguage = (language) => {
    setCurrentLanguage(language)
  }
  
  const value = {
    currentLanguage,
    changeLanguage,
    t
  }
  
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
} 