import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { Database, Code, BarChart3, Cpu, ArrowRight, CheckCircle } from 'lucide-react'
import './Services.css'

const Services = () => {
  const { t } = useLanguage()

  const services = [
    {
      icon: Database,
      title: t('dataScience'),
      description: 'Nous développons des modèles de machine learning et d\'intelligence artificielle pour extraire des insights précieux de vos données.',
      features: [
        'Modèles de prédiction avancés',
        'Analyse de sentiment',
        'Recommandation personnalisée',
        'Computer Vision',
        'Traitement du langage naturel',
        'Optimisation des processus'
      ],
      color: '#3b82f6'
    },
    {
      icon: Code,
      title: t('dataEngineering'),
      description: 'Nous concevons et construisons des architectures de données modernes et évolutives pour optimiser vos processus métier.',
      features: [
        'Architectures cloud-native',
        'Pipelines de données ETL/ELT',
        'Data lakes et data warehouses',
        'Streaming de données en temps réel',
        'Gestion de la qualité des données',
        'Monitoring et alerting'
      ],
      color: '#10b981'
    },
    {
      icon: BarChart3,
      title: t('dataAnalytics'),
      description: 'Nous transformons vos données brutes en analyses actionnables pour vous aider à prendre des décisions éclairées.',
      features: [
        'Tableaux de bord interactifs',
        'Rapports automatisés',
        'Analyse prédictive',
        'Segmentation client',
        'KPI et métriques business',
        'Visualisation de données'
      ],
      color: '#f59e0b'
    },
    {
      icon: Cpu,
      title: t('softwareDevelopment'),
      description: 'Nous développons des applications robustes et innovantes adaptées à vos besoins spécifiques.',
      features: [
        'Applications web modernes',
        'APIs RESTful et GraphQL',
        'Applications mobiles',
        'Systèmes de gestion',
        'Intégrations tierces',
        'Maintenance et support'
      ],
      color: '#8b5cf6'
    }
  ]

  return (
    <div className="services-page">
      {/* Section Hero */}
      <section className="services-hero section">
        <div className="container">
          <div className="section-header">
            <h1>Nos Services</h1>
            <p>Découvrez notre gamme complète de services informatiques spécialisés</p>
          </div>
        </div>
      </section>

      {/* Section Services */}
      <section className="services-details section">
        <div className="container">
          {services.map((service, index) => (
            <div key={index} className="service-detail" id={service.title.toLowerCase().replace(/\s+/g, '-')}>
              <div className="service-detail-content">
                <div className="service-detail-header">
                  <div className="service-icon" style={{ color: service.color }}>
                    <service.icon size={64} />
                  </div>
                  <div className="service-info">
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                  </div>
                </div>
                <div className="service-features">
                  <h3>Ce que nous offrons :</h3>
                  <div className="features-grid">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="feature-item">
                        <CheckCircle size={20} color={service.color} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section CTA */}
      <section className="services-cta section">
        <div className="container">
          <div className="cta-content">
            <h2>Prêt à commencer votre projet ?</h2>
            <p>Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé</p>
            <div className="cta-actions">
              <a href="/contact" className="btn btn-primary">
                {t('contact')}
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services 