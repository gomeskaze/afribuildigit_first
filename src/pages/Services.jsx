import React, { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { 
  Code, 
  BarChart3, 
  Brain, 
  Database, 
  Cloud, 
  Shield, 
  Cpu, 
  Zap, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle,
  X
} from 'lucide-react'
import './Services.css'

const Services = () => {
  const { t } = useLanguage()
  const [selectedService, setSelectedService] = useState(null)
  const [isDetailVisible, setIsDetailVisible] = useState(false)

  const services = [
    {
      id: 'software-engineering',
      icon: Code,
      title: t('softwareEngineering'),
      description: t('softwareEngineeringDesc'),
      color: '#8b5cf6',
      subServices: [
        t('softwareEngineeringServices'),
        t('customSolutionDevelopment'),
        t('applicationModernisation'),
        t('softwareQATesting'),
        t('technologyConsulting'),
        t('softwareArchitectureConsulting'),
        t('techDueDiligence'),
        t('digitalTransformationServices'),
        t('productDiscovery')
      ]
    },
    {
      id: 'data-analytics',
      icon: BarChart3,
      title: t('dataAnalyticsServices'),
      description: t('dataAnalyticsServicesDesc'),
      color: '#10b981',
      subServices: [
        t('dataAnalyticsServicesList'),
        t('dataAnalyticsStrategy'),
        t('bigData'),
        t('dataGovernance'),
        t('dataWarehouseConsulting'),
        t('dataLakeConsulting'),
        t('businessIntelligence')
      ]
    },
    {
      id: 'ai-ml-data-science',
      icon: Brain,
      title: t('aiMlDataScience'),
      description: t('aiMlDataScienceDesc'),
      color: '#f59e0b',
      subServices: [
        t('aiMlDataScienceServices'),
        t('dataScienceServices'),
        t('artificialIntelligenceML'),
        t('mlOps'),
        t('generativeAIConsulting'),
        t('aiConsulting'),
        t('computerVisionDevelopment')
      ]
    },
    {
      id: 'cloud-data-engineering',
      icon: Database,
      title: t('cloudDataEngineering'),
      description: t('cloudDataEngineeringDesc'),
      color: '#3b82f6',
      subServices: [
        t('cloudDataServices'),
        t('cloudMigration'),
        t('cloudArchitectureStrategies'),
        t('devOpsAutomation'),
        t('cloudInfrastructureManagement'),
        t('cloudDataIntegrationETL')
      ]
    },
    {
      id: 'cloud-services',
      icon: Cloud,
      title: t('cloudServices'),
      description: t('cloudServicesDesc'),
      color: '#06b6d4',
      subServices: [
        t('cloudSolutions'),
        t('cloudMigration'),
        t('cloudNativeServices'),
        t('devOps'),
        t('awsConsulting'),
        t('awsMigration'),
        t('awsOpenSearchService'),
        t('awsWellArchitectedReview'),
        t('cloudInfrastructureManagementServices'),
        t('azureConsulting'),
        t('gcpConsulting')
      ]
    },
    {
      id: 'cybersecurity',
      icon: Shield,
      title: t('cybersecurity'),
      description: t('cybersecurityDesc'),
      color: '#ef4444',
      subServices: [
        t('cybersecurityServices'),
        t('businessContinuity'),
        t('devSecOps'),
        t('penetrationTesting'),
        t('strategyConsulting'),
        t('applicationSecurity'),
        t('riskAssessment'),
        t('compliance')
      ]
    },
    {
      id: 'embedded-software-iot',
      icon: Cpu,
      title: t('embeddedSoftwareIoT'),
      description: t('embeddedSoftwareIoTDesc'),
      color: '#8b5cf6',
      subServices: [
        t('embeddedSoftwareDevelopment'),
        t('internetOfThingsDevelopment'),
        t('firmwareDevelopmentServices'),
        t('roboticsConsulting')
      ]
    },
    {
      id: 'intelligent-platforms-rpa',
      icon: Zap,
      title: t('intelligentPlatformsRPA'),
      description: t('intelligentPlatformsRPADesc'),
      color: '#10b981',
      subServices: [
        t('sapConsulting'),
        t('sapOnAws'),
        t('openTextProfessionalServices'),
        t('salesforce'),
        t('intelligentAutomation'),
        t('rpa'),
        t('lowCodeNoCodeDevelopment'),
        t('mendix'),
        t('pega'),
        t('uiPath')
      ]
    },
    {
      id: 'digital-transformation',
      icon: TrendingUp,
      title: t('digitalTransformation'),
      description: t('digitalTransformationDesc'),
      color: '#f59e0b',
      subServices: [
        t('digitalisationStrategies'),
        t('changeManagement'),
        t('cloudService'),
        t('financialTransformation'),
        t('digitalControl')
      ]
    }
  ]

  const handleServiceClick = (service) => {
    setSelectedService(service)
    setIsDetailVisible(true)
    // Scroll to the detail section
    setTimeout(() => {
      const detailSection = document.getElementById('service-detail-section')
      if (detailSection) {
        detailSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  const closeDetail = () => {
    setIsDetailVisible(false)
    setTimeout(() => {
      setSelectedService(null)
    }, 300)
  }

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

      {/* Section Services Cards */}
      <section className="services-cards section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className="service-card"
                onClick={() => handleServiceClick(service)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="service-card-icon" style={{ color: service.color }}>
                  <service.icon size={48} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description.substring(0, 150)}...</p>
                <div className="service-card-action">
                  <span>{t('learnMore')}</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Service Detail */}
      {selectedService && (
        <section 
          id="service-detail-section" 
          className={`service-detail-section ${isDetailVisible ? 'visible' : ''}`}
        >
          <div className="container">
            <div className="service-detail-header">
              <div className="service-detail-icon" style={{ color: selectedService.color }}>
                <selectedService.icon size={64} />
              </div>
              <div className="service-detail-title">
                <h2>{selectedService.title}</h2>
                <button className="close-button" onClick={closeDetail}>
                  <X size={24} />
                </button>
              </div>
            </div>
            
            <div className="service-detail-content">
              <div className="service-detail-description">
                <p>{selectedService.description}</p>
              </div>
              
              <div className="service-detail-subservices">
                <h3>{t('whatWeOffer')}</h3>
                <div className="subservices-grid">
                  {selectedService.subServices.map((subService, index) => (
                    <div key={index} className="subservice-item">
                      <CheckCircle size={20} color={selectedService.color} />
                      <span>{subService}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Section CTA */}
      <section className="section cta-section-dark">
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