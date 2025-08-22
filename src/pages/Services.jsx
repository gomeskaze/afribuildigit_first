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
      description: t('dataScienceDesc'),
      features: [
        t('predictionModels'),
        t('sentimentAnalysis'),
        t('personalizedRecommendation'),
        t('computerVision'),
        t('naturalLanguageProcessing'),
        t('processOptimization')
      ],
      color: '#3b82f6'
    },
    {
      icon: Code,
      title: t('dataEngineering'),
      description: t('dataEngineeringDesc'),
      features: [
        t('cloudNativeArchitectures'),
        t('dataPipelines'),
        t('dataLakes'),
        t('realTimeStreaming'),
        t('dataQualityManagement'),
        t('monitoringAlerting')
      ],
      color: '#10b981'
    },
    {
      icon: BarChart3,
      title: t('dataAnalytics'),
      description: t('dataAnalyticsDesc'),
      features: [
        t('interactiveDashboards'),
        t('automatedReports'),
        t('predictiveAnalysis'),
        t('customerSegmentation'),
        t('businessKPIs'),
        t('dataVisualization')
      ],
      color: '#f59e0b'
    },
    {
      icon: Cpu,
      title: t('softwareDevelopment'),
      description: t('softwareDevelopmentDesc'),
      features: [
        t('modernWebApps'),
        t('restfulAPIs'),
        t('mobileApps'),
        t('managementSystems'),
        t('thirdPartyIntegrations'),
        t('maintenanceSupport')
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
            <h1>{t('servicesTitle')}</h1>
            <p>{t('servicesSubtitle')}</p>
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
                  <h3>{t('whatWeOffer')}</h3>
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
      <section className="section cta-section-dark" >
        <div className="container">
          <div className="cta-content">
            <h2>{t('readyToStart')}</h2>
            <p>{t('contactForQuote')}</p>
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