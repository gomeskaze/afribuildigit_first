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
    ourServices: 'Nos Services',
    discoverServices: 'Découvrez notre gamme complète de services informatiques',
    learnMoreLink: 'En savoir plus',
    whyChooseUs: 'Pourquoi Nous Choisir',
    whatMakesUsDifferent: 'Découvrez ce qui nous distingue de la concurrence',
    readyToTransform: 'Prêt à Transformer Votre Entreprise ?',
    contactToday: 'Contactez-nous dès aujourd\'hui pour discuter de vos besoins en services informatiques',
    discoverOurServices: 'Découvrir nos services',
    technologiesTools: 'Technologies & Outils',
    modernTechnologies: 'Nous utilisons les technologies les plus modernes pour vos projets',
    dataScienceML: 'Data Science & ML',
    dataEngineering: 'Data Engineering',
    development: 'Développement',
    
    // Features de la page d'accueil
    experiencedTeam: 'Équipe Expérimentée',
    experiencedTeamDesc: 'Nos fondateurs cumulent de nombreuses années d\'expérience dans la mise en œuvre de solutions basées sur les données.',
    customSolutions: 'Solutions Sur Mesure',
    customSolutionsDesc: 'Nous allions expertise technique et compréhension approfondie des processus métier.',
    technicalExcellence: 'Excellence Technique',
    technicalExcellenceDesc: 'Nous maintenons les plus hauts standards de qualité dans tous nos projets.',
    continuousInnovation: 'Innovation Continue',
    continuousInnovationDesc: 'Nous restons à la pointe des dernières technologies et méthodologies.',
    
    // Statistiques
    projectsCompleted: 'Projets Réalisés',
    satisfiedClients: 'Clients Satisfaits',
    yearsExperience: 'Années d\'Expérience',
    successRate: 'Taux de Réussite',
    
    // Services
    dataScience: 'Science des données',
    dataEngineering: 'Ingénierie des données',
    dataAnalytics: 'Analyse de données',
    softwareDevelopment: 'Développement logiciel',
    servicesTitle: 'Nos Services',
    servicesSubtitle: 'Découvrez notre gamme complète de services informatiques spécialisés',
    whatWeOffer: 'Ce que nous offrons :',
    readyToStart: 'Prêt à commencer votre projet ?',
    contactForQuote: 'Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé',
    
    // Descriptions des services
    dataScienceDesc: 'Nous développons des modèles de machine learning et d\'intelligence artificielle pour extraire des insights précieux de vos données.',
    dataEngineeringDesc: 'Nous concevons et construisons des architectures de données modernes et évolutives pour optimiser vos processus métier.',
    dataAnalyticsDesc: 'Nous transformons vos données brutes en analyses actionnables pour vous aider à prendre des décisions éclairées.',
    softwareDevelopmentDesc: 'Nous développons des applications robustes et innovantes adaptées à vos besoins spécifiques.',
    
    // Features des services
    predictionModels: 'Modèles de prédiction avancés',
    sentimentAnalysis: 'Analyse de sentiment',
    personalizedRecommendation: 'Recommandation personnalisée',
    computerVision: 'Computer Vision',
    naturalLanguageProcessing: 'Traitement du langage naturel',
    processOptimization: 'Optimisation des processus',
    cloudNativeArchitectures: 'Architectures cloud-native',
    dataPipelines: 'Pipelines de données ETL/ELT',
    dataLakes: 'Data lakes et data warehouses',
    realTimeStreaming: 'Streaming de données en temps réel',
    dataQualityManagement: 'Gestion de la qualité des données',
    monitoringAlerting: 'Monitoring et alerting',
    interactiveDashboards: 'Tableaux de bord interactifs',
    automatedReports: 'Rapports automatisés',
    predictiveAnalysis: 'Analyse prédictive',
    customerSegmentation: 'Segmentation client',
    businessKPIs: 'KPI et métriques business',
    dataVisualization: 'Visualisation de données',
    modernWebApps: 'Applications web modernes',
    restfulAPIs: 'APIs RESTful et GraphQL',
    mobileApps: 'Applications mobiles',
    managementSystems: 'Systèmes de gestion',
    thirdPartyIntegrations: 'Intégrations tierces',
    maintenanceSupport: 'Maintenance et support',
    
    // À propos
    aboutTitle: 'À propos de nous',
    aboutDescription: 'Nous sommes une jeune et dynamique entreprise de services informatiques basée à Yaoundé, au Cameroun.',
    experience: 'Expérience',
    expertise: 'Expertise',
    innovation: 'Innovation',
    ourHistory: 'Notre Histoire',
    historySubtitle: 'Découvrez le parcours qui nous a menés jusqu\'ici',
    visionFromExperience: 'Une vision née de l\'expérience',
    visionDescription: 'AfriBuilDigit Group est née de la vision de créer une entreprise de services informatiques qui allie expertise technique et compréhension approfondie des processus métier. Nos fondateurs, après avoir travaillé dans de grandes entreprises internationales, ont décidé de mettre leur expertise au service des entreprises africaines.',
    basedInYaounde: 'Basée à Yaoundé, au Cameroun, notre entreprise s\'est rapidement imposée comme un partenaire de confiance pour les organisations cherchant à transformer leurs données en avantages concurrentiels.',
    foundingYear: 'Année de création',
    founders: 'Fondateurs',
    projectsCompleted: 'Projets réalisés',
    ourValues: 'Nos Valeurs',
    valuesSubtitle: 'Les principes qui guident nos actions au quotidien',
    excellence: 'Excellence',
    excellenceDesc: 'Nous visons l\'excellence dans tout ce que nous faisons, en maintenant les plus hauts standards de qualité.',
    passion: 'Passion',
    passionDesc: 'Nous sommes passionnés par la technologie et l\'innovation, et nous transmettons cette passion à nos clients.',
    collaboration: 'Collaboration',
    collaborationDesc: 'Nous croyons en la puissance de la collaboration et travaillons en étroite relation avec nos clients.',
    innovation: 'Innovation',
    innovationDesc: 'Nous restons à la pointe des dernières technologies pour offrir des solutions innovantes.',
    ourTeam: 'Notre Équipe',
    teamSubtitle: 'Rencontrez les experts qui font d\'AfriBuilDigit Group votre partenaire de confiance',
    ceoFounder: 'CEO & Co-fondateur',
    ctoFounder: 'CTO & Co-fondatrice',
    leadDataScientist: 'Lead Data Scientist',
    ctoDesc: 'Expert en Cloud data science et Ingénieure de données avec plus de 10 ans d\'expérience professionnel.',
    ceoDesc: 'Expert en Cloud data science et Ingénieure en développement logiciel spécialisée dans les architectures cloud.',
    dataScientistDesc: 'Spécialiste en machine learning et intelligence artificielle.',
    ourMission: 'Notre Mission',
    missionDescription: 'Nous aidons nos clients à prendre des décisions fondées sur les données et à mettre en œuvre efficacement des solutions numériques. Qu\'il s\'agisse d\'architectes de données modernes, d\'applications de machine learning ou de développement back-end robuste, nous sommes votre partenaire de confiance.',
    africanContext: 'Solutions adaptées au contexte africain',
    technicalExcellence: 'Excellence technique reconnue',
    measurableResults: 'Résultats mesurables et durables',
    
    // Footer
    followUs: 'Suivez-nous',
    allRightsReserved: 'Tous droits réservés',
    
    // Contact
    contactUs: 'Contactez-nous',
    name: 'Nom',
    email: 'Email',
    message: 'Message',
    send: 'Envoyer',
    contactInfo: 'Informations de contact',
    contactInfoDesc: 'N\'hésitez pas à nous contacter pour toute question. Nous serons ravis de vous accompagner et de vous conseiller personnellement. Nous prendrons le temps d\'écouter vos besoins et de vous proposer, à vous et à votre entreprise, des solutions sur mesure qui vous mèneront au succès. Veuillez utiliser notre formulaire pour nous contacter. Nous vous répondrons dans les plus brefs délais !',
    
    // Industries
    industriesTitle: 'Nos Industries',
    industriesSubtitle: 'Nous servons divers secteurs d\'activité avec des solutions adaptées',
    healthcare: 'Santé',
    finance: 'Finance',
    retail: 'Commerce',
    manufacturing: 'Manufacture',
    readyToTransform: 'Prêt à transformer votre secteur d\'activité ?',
    contactForIndustry: 'Contactez-nous pour discuter de vos besoins spécifiques et découvrir nos solutions adaptées à votre industrie',
    
    // Descriptions des industries
    healthcareDesc: 'Solutions innovantes pour améliorer les soins de santé et optimiser les processus médicaux.',
    financeDesc: 'Technologies avancées pour sécuriser les transactions et optimiser les services financiers.',
    retailDesc: 'Solutions e-commerce et analytics pour optimiser l\'expérience client et les ventes.',
    manufacturingDesc: 'IoT et analytics pour améliorer la productivité et réduire les coûts de production.',
    
    // Solutions des industries
    diseasePrediction: 'Analyse prédictive des maladies',
    patientRecords: 'Gestion des dossiers patients',
    resourceOptimization: 'Optimisation des ressources',
    fraudDetection: 'Détection de fraude',
    riskAnalysis: 'Analyse de risque',
    algorithmicTrading: 'Trading algorithmique',
    productRecommendation: 'Recommandation produits',
    behavioralAnalysis: 'Analyse comportementale',
    inventoryOptimization: 'Optimisation des stocks',
    predictiveMaintenance: 'Maintenance prédictive',
    supplyChainOptimization: 'Optimisation de la chaîne logistique',
    automatedQuality: 'Qualité automatisée',
    
    // Carrière
    careerTitle: 'Carrière',
    joinUs: 'Rejoignez-nous',
    openPositions: 'Postes ouverts',
    
    // Langues
    language: 'Langue'
  },
  /////########### langue anglaise ###########
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
    ourServices: 'Our Services',
    discoverServices: 'Discover our complete range of specialized IT services',
    learnMoreLink: 'Learn More',
    whyChooseUs: 'Why Choose Us',
    whatMakesUsDifferent: 'Discover what sets us apart from the competition',
    readyToTransform: 'Ready to Transform Your Business?',
    contactToday: 'Contact us today to discuss your IT service needs',
    discoverOurServices: 'Discover our services',
    technologiesTools: 'Technologies & Tools',
    modernTechnologies: 'We use the most modern technologies for your projects',
    dataScienceML: 'Data Science & ML',
    dataEngineering: 'Data Engineering',
    development: 'Development',
    
    // Features of the home page
    experiencedTeam: 'Experienced Team',
    experiencedTeamDesc: 'Our founders cumulate many years of experience in implementing data-based solutions.',
    customSolutions: 'Custom Solutions',
    customSolutionsDesc: 'We bring technical expertise and deep understanding of business processes.',
    technicalExcellence: 'Technical Excellence',
    technicalExcellenceDesc: 'We maintain the highest quality standards in all our projects.',
    continuousInnovation: 'Continuous Innovation',
    continuousInnovationDesc: 'We remain at the forefront of the latest technologies and methodologies.',
    
    // Statistics
    projectsCompleted: 'Projects Completed',
    satisfiedClients: 'Satisfied Clients',
    yearsExperience: 'Years of Experience',
    successRate: 'Success Rate',
    
    // Services
    dataScience: 'Data Science',
    dataEngineering: 'Data Engineering',
    dataAnalytics: 'Data Analytics',
    softwareDevelopment: 'Software Development',
    servicesTitle: 'Our Services',
    servicesSubtitle: 'Discover our complete range of specialized IT services',
    whatWeOffer: 'What we offer:',
    readyToStart: 'Ready to start your project?',
    contactForQuote: 'Contact us to discuss your needs and get a personalized quote',
    
    // Service descriptions
    dataScienceDesc: 'We develop machine learning and artificial intelligence models to extract valuable insights from your data.',
    dataEngineeringDesc: 'We design and build modern, scalable data architectures to optimize your business processes.',
    dataAnalyticsDesc: 'We transform your raw data into actionable insights to help you make informed decisions.',
    softwareDevelopmentDesc: 'We develop robust and innovative applications tailored to your specific needs.',
    
    // Service features
    predictionModels: 'Advanced prediction models',
    sentimentAnalysis: 'Sentiment analysis',
    personalizedRecommendation: 'Personalized recommendation',
    computerVision: 'Computer Vision',
    naturalLanguageProcessing: 'Natural Language Processing',
    processOptimization: 'Process optimization',
    cloudNativeArchitectures: 'Cloud-native architectures',
    dataPipelines: 'ETL/ELT data pipelines',
    dataLakes: 'Data lakes and data warehouses',
    realTimeStreaming: 'Real-time data streaming',
    dataQualityManagement: 'Data quality management',
    monitoringAlerting: 'Monitoring and alerting',
    interactiveDashboards: 'Interactive dashboards',
    automatedReports: 'Automated reports',
    predictiveAnalysis: 'Predictive analysis',
    customerSegmentation: 'Customer segmentation',
    businessKPIs: 'Business KPIs and metrics',
    dataVisualization: 'Data visualization',
    modernWebApps: 'Modern web applications',
    restfulAPIs: 'RESTful and GraphQL APIs',
    mobileApps: 'Mobile applications',
    managementSystems: 'Management systems',
    thirdPartyIntegrations: 'Third-party integrations',
    maintenanceSupport: 'Maintenance and support',
    
    // About
    aboutTitle: 'About Us',
    aboutDescription: 'We are a young and dynamic IT services company based in Yaoundé, Cameroon.',
    experience: 'Experience',
    expertise: 'Expertise',
    innovation: 'Innovation',
    ourHistory: 'Our History',
    historySubtitle: 'Discover the journey that led us here',
    visionFromExperience: 'A vision born from experience',
    visionDescription: 'AfriBuilDigit Group was born from the vision to create an IT services company that combines technical expertise and deep understanding of business processes. Our founders, after working in large international companies, decided to put their expertise to the service of African businesses.',
    basedInYaounde: 'Based in Yaoundé, Cameroon, our company quickly established itself as a trusted partner for organizations seeking to transform their data into competitive advantages.',
    foundingYear: 'Creation year',
    founders: 'Founders',
    projectsCompleted: 'Projects completed',
    ourValues: 'Our Values',
    valuesSubtitle: 'The principles that guide our daily actions',
    excellence: 'Excellence',
    excellenceDesc: 'We aim for excellence in everything we do, maintaining the highest quality standards.',
    passion: 'Passion',
    passionDesc: 'We are passionate about technology and innovation, and we pass this passion on to our clients.',
    collaboration: 'Collaboration',
    collaborationDesc: 'We believe in the power of collaboration and work closely with our clients.',
    innovation: 'Innovation',
    innovationDesc: 'We remain at the forefront of the latest technologies to offer innovative solutions.',
    ourTeam: 'Our Team',
    teamSubtitle: 'Meet the experts who make AfriBuilDigit Group your trusted partner',
    ceoFounder: 'CEO & Co-founder',
    ctoFounder: 'CTO & Co-founder',
    leadDataScientist: 'Lead Data Scientist',
    ctoDesc: 'Expert in Cloud data science and data engineering with over 10 years of professional experience.',
    ceoDesc: 'Expert in Cloud data science and Software engineering specialized in cloud architectures.',
    dataScientistDesc: 'Specialist in machine learning and artificial intelligence.',
    ourMission: 'Our Mission',
    missionDescription: 'We help our clients make data-driven decisions and effectively implement digital solutions. Whether it\'s modern data architects, machine learning applications, or robust back-end development, we are your trusted partner.',
    africanContext: 'Solutions adapted to the African context',
    technicalExcellence: 'Recognized technical excellence',
    measurableResults: 'Measurable and durable results',
    
    // Footer
    followUs: 'Follow Us',
    allRightsReserved: 'All rights reserved',
    
    // Contact
    contactUs: 'Contact Us',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send',
    contactInfo: 'Contact Information',
    contactInfoDesc: 'Please contact us for any questions. We will be happy to accompany you and advise you personally. We will take the time to listen to your needs and offer you, to you and your company, tailored solutions that will lead you to success. Please use our form to contact us. We will respond to you in the shortest possible time!',
    
    // Industries
    industriesTitle: 'Our Industries',
    industriesSubtitle: 'We serve various business sectors with tailored solutions',
    healthcare: 'Healthcare',
    finance: 'Finance',
    retail: 'Retail',
    manufacturing: 'Manufacturing',
    readyToTransform: 'Ready to transform your industry?',
    contactForIndustry: 'Contact us to discuss your specific needs and discover our solutions adapted to your industry',
    
    // Industry descriptions
    healthcareDesc: 'Innovative solutions to improve healthcare and optimize medical processes.',
    financeDesc: 'Advanced technologies to secure transactions and optimize financial services.',
    retailDesc: 'E-commerce and analytics solutions to optimize customer experience and sales.',
    manufacturingDesc: 'IoT and analytics to improve productivity and reduce production costs.',
    
    // Industry solutions
    diseasePrediction: 'Disease prediction analysis',
    patientRecords: 'Patient records management',
    resourceOptimization: 'Resource optimization',
    fraudDetection: 'Fraud detection',
    riskAnalysis: 'Risk analysis',
    algorithmicTrading: 'Algorithmic trading',
    productRecommendation: 'Product recommendation',
    behavioralAnalysis: 'Behavioral analysis',
    inventoryOptimization: 'Inventory optimization',
    predictiveMaintenance: 'Predictive maintenance',
    supplyChainOptimization: 'Supply chain optimization',
    automatedQuality: 'Automated quality control',
    
    // Career
    careerTitle: 'Career',
    joinUs: 'Join Us',
    openPositions: 'Open Positions',
    
    // Languages
    language: 'Language'
  },
  /////########### langue allemand ###########
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
    ourServices: 'Unsere Dienstleistungen',
    discoverServices: 'Entdecken Sie unsere vollständige Palette spezialisierter IT-Dienstleistungen',
    learnMoreLink: 'Mehr erfahren',
    whyChooseUs: 'Warum uns wählen?',
    whatMakesUsDifferent: 'Entdecken Sie, was uns von der Konkurrenz unterscheidet',
    readyToTransform: 'Bereit, Ihre Branche zu transformieren?',
    contactToday: 'Kontaktieren Sie uns heute, um über Ihre IT-Dienstleistungsbedürfnisse zu sprechen',
    discoverOurServices: 'Unsere Dienstleistungen entdecken',
    technologiesTools: 'Technologien & Tools',
    modernTechnologies: 'Wir verwenden die modernsten Technologien für Ihre Projekte',
    dataScienceML: 'Datenwissenschaft & ML',
    dataEngineering: 'Datenengineering',
    development: 'Entwicklung',
    
    // Features of the home page
    experiencedTeam: 'Erfolgreiche Team',
    experiencedTeamDesc: 'Unsere Gründer haben viele Jahre Erfahrung bei der Implementierung von auf Daten basierenden Lösungen gesammelt.',
    customSolutions: 'Angepasste Lösungen',
    customSolutionsDesc: 'Wir bringen technische Expertise und eine tiefgreifende Verständnis von Geschäftsprozessen.',
    technicalExcellence: 'Technische Exzellenz',
    technicalExcellenceDesc: 'Wir halten die höchsten Qualitätsstandards in all unseren Projekten.',
    continuousInnovation: 'Fortlaufende Innovation',
    continuousInnovationDesc: 'Wir bleiben auf dem neuesten Stand der neuesten Technologien und Methoden.',
    
    // Statistics
    projectsCompleted: 'Projekte abgeschlossen',
    satisfiedClients: 'Zufriedene Kunden',
    yearsExperience: 'Jahre Erfahrung',
    successRate: 'Erfolgsquote',
    
    // Services
    dataScience: 'Datenwissenschaft',
    dataEngineering: 'Datenengineering',
    dataAnalytics: 'Datenanalyse',
    softwareDevelopment: 'Softwareentwicklung',
    servicesTitle: 'Unsere Dienstleistungen',
    servicesSubtitle: 'Entdecken Sie unsere vollständige Palette spezialisierter IT-Dienstleistungen',
    whatWeOffer: 'Was wir anbieten:',
    readyToStart: 'Bereit, Ihr Projekt zu starten?',
    contactForQuote: 'Kontaktieren Sie uns, um Ihre Bedürfnisse zu besprechen und ein personalisiertes Angebot zu erhalten',
    
    // Service descriptions
    dataScienceDesc: 'Wir entwickeln Machine Learning und künstliche Intelligenz Modelle, um wertvolle Erkenntnisse aus Ihren Daten zu extrahieren.',
    dataEngineeringDesc: 'Wir entwerfen und bauen moderne, skalierbare Datenarchitekturen, um Ihre Geschäftsprozesse zu optimieren.',
    dataAnalyticsDesc: 'Wir transformieren Ihre Rohdaten in umsetzbare Erkenntnisse, um Ihnen bei fundierten Entscheidungen zu helfen.',
    softwareDevelopmentDesc: 'Wir entwickeln robuste und innovative Anwendungen, die auf Ihre spezifischen Bedürfnisse zugeschnitten sind.',
    
    // Service features
    predictionModels: 'Erweiterte Vorhersagemodelle',
    sentimentAnalysis: 'Sentiment-Analyse',
    personalizedRecommendation: 'Personalisierte Empfehlungen',
    computerVision: 'Computer Vision',
    naturalLanguageProcessing: 'Verarbeitung natürlicher Sprache',
    processOptimization: 'Prozessoptimierung',
    cloudNativeArchitectures: 'Cloud-native Architekturen',
    dataPipelines: 'ETL/ELT Datenpipelines',
    dataLakes: 'Data Lakes und Data Warehouses',
    realTimeStreaming: 'Echtzeit-Datenstreaming',
    dataQualityManagement: 'Datenqualitätsmanagement',
    monitoringAlerting: 'Überwachung und Benachrichtigungen',
    interactiveDashboards: 'Interaktive Dashboards',
    automatedReports: 'Automatisierte Berichte',
    predictiveAnalysis: 'Prädiktive Analyse',
    customerSegmentation: 'Kundensegmentierung',
    businessKPIs: 'Business-KPIs und Metriken',
    dataVisualization: 'Datenvisualisierung',
    modernWebApps: 'Moderne Webanwendungen',
    restfulAPIs: 'RESTful und GraphQL APIs',
    mobileApps: 'Mobile Anwendungen',
    managementSystems: 'Management-Systeme',
    thirdPartyIntegrations: 'Drittanbieter-Integrationen',
    maintenanceSupport: 'Wartung und Support',
    
    // About
    aboutTitle: 'Über uns',
    aboutDescription: 'Wir sind ein junges und dynamisches IT-Dienstleistungsunternehmen mit Sitz in Yaoundé, Kamerun.',
    experience: 'Erfahrung',
    expertise: 'Expertise',
    innovation: 'Innovation',
    ourHistory: 'Unsere Geschichte',
    historySubtitle: 'Entdecken Sie den Weg, der uns hier geführt hat',
    visionFromExperience: 'Eine Vision, die aus Erfahrung geboren wurde',
    visionDescription: 'AfriBuilDigit Group wurde aus der Vision gegründet, eine IT-Dienstleistungsgesellschaft zu schaffen, die technische Expertise und eine tiefgreifende Verständnis von Geschäftsprozessen vereint. Unsere Gründer, nachdem sie in großen internationalen Unternehmen gearbeitet hatten, entschieden, ihre Expertise für afrikanische Unternehmen zu nutzen.',
    basedInYaounde: 'Basierend in Yaoundé, Kamerun, hat sich unser Unternehmen schnell als zuverlässiger Partner für Unternehmen etabliert, die ihre Daten in wettbewerbsfähige Vorteile transformieren wollten.',
    foundingYear: 'Gründungsjahr',
    founders: 'Gründer',
    projectsCompleted: 'Projekte abgeschlossen',
    ourValues: 'Unsere Werte',
    valuesSubtitle: 'Die Prinzipien, die unsere täglichen Handlungen leiten',
    excellence: 'Exzellenz',
    excellenceDesc: 'Wir streben nach Exzellenz in allem, was wir tun, und halten die höchsten Qualitätsstandards bei all unseren Projekten bei.',
    passion: 'Begeisterung',
    passionDesc: 'Wir sind begeistert von Technologie und Innovation und übertragen diese Begeisterung auf unsere Kunden.',
    collaboration: 'Zusammenarbeit',
    collaborationDesc: 'Wir glauben an die Kraft der Zusammenarbeit und arbeiten eng mit unseren Kunden zusammen.',
    innovation: 'Innovation',
    innovationDesc: 'Wir bleiben auf dem neuesten Stand der neuesten Technologien, um innovative Lösungen anzubieten.',
    ourTeam: 'Unser Team',
    teamSubtitle: 'Treffen Sie die Experten, die AfriBuilDigit Group zu Ihrem zuverlässigen Partner machen',
    ceoFounder: 'CEO & Co-founder',
    ctoFounder: 'CTO & Co-founder',
    leadDataScientist: 'Lead Data Scientist',
    ctoDesc: 'Experte für Cloud Data Science und Datenengineering mit mehr als 10 Jahren professioneller Erfahrung',
    ceoDesc: 'Experte für Cloud Data Science und Software-Ingenieur, spezialisiert auf Cloud-Architekturen.',
    dataScientistDesc: 'Spezialist für maschinelles Lernen und künstliche Intelligenz.',
    ourMission: 'Unsere Mission',
    missionDescription: 'Wir helfen unseren Kunden, fundierte Entscheidungen auf der Grundlage von Daten zu treffen und effektiv digitale Lösungen zu implementieren. Ob es sich um moderne Datenarchitekten, maschinelle Lernanwendungen oder robuste Backend-Entwicklung handelt, wir sind Ihr zuverlässiger Partner.',
    africanContext: 'Lösungen angepasst an den afrikanischen Kontext',
    technicalExcellence: 'Anerkannter technischer Fortschritt',
    measurableResults: 'Messbare und dauerhafte Ergebnisse',
    
    // Footer
    followUs: 'Folgen Sie uns',
    allRightsReserved: 'Alle Rechte vorbehalten',
    
    // Contact
    contactUs: 'Kontaktieren Sie uns',
    name: 'Name',
    email: 'E-Mail',
    message: 'Nachricht',
    send: 'Senden',
    contactInfo: 'Kontaktinformationen',
    contactInfoDesc: 'Bitte kontaktieren Sie uns für Fragen. Wir freuen uns, Ihnen persönlich zu helfen und zu beraten. Wir nehmen uns die Zeit, Ihre Bedürfnisse zu hören und Ihnen, Ihnen und Ihrer Firma, angepasste Lösungen anzubieten, die Sie zum Erfolg führen. Bitte verwenden Sie unsere Formulare, um uns zu kontaktieren. Wir werden Ihnen in den kürzesten Zeiten antworten!',
    
    // Industries
    industriesTitle: 'Unsere Branchen',
    industriesSubtitle: 'Wir bedienen verschiedene Geschäftsbereiche mit maßgeschneiderten Lösungen',
    healthcare: 'Gesundheitswesen',
    finance: 'Finanzen',
    retail: 'Einzelhandel',
    manufacturing: 'Fertigung',
    readyToTransform: 'Bereit, Ihre Branche zu transformieren?',
    contactForIndustry: 'Kontaktieren Sie uns, um Ihre spezifischen Bedürfnisse zu besprechen und unsere an Ihre Branche angepassten Lösungen zu entdecken',
    
    // Industry descriptions
    healthcareDesc: 'Innovative Lösungen zur Verbesserung der Gesundheitsversorgung und Optimierung medizinischer Prozesse.',
    financeDesc: 'Fortschrittliche Technologien zur Sicherung von Transaktionen und Optimierung von Finanzdienstleistungen.',
    retailDesc: 'E-Commerce und Analytics-Lösungen zur Optimierung der Kundenbetreuung und des Verkaufs.',
    manufacturingDesc: 'IoT und Analytics zur Verbesserung der Produktivität und Reduzierung der Produktionskosten.',
    
    // Industry solutions
    diseasePrediction: 'Krankheitsvorhersage-Analyse',
    patientRecords: 'Patientenaktenverwaltung',
    resourceOptimization: 'Ressourcenoptimierung',
    fraudDetection: 'Betrugserkennung',
    riskAnalysis: 'Risikoanalyse',
    algorithmicTrading: 'Algorithmischer Handel',
    productRecommendation: 'Produktempfehlungen',
    behavioralAnalysis: 'Verhaltensanalyse',
    inventoryOptimization: 'Lageroptimierung',
    predictiveMaintenance: 'Prädiktive Wartung',
    supplyChainOptimization: 'Lieferkettenoptimierung',
    automatedQuality: 'Automatisierte Qualitätskontrolle',
    
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