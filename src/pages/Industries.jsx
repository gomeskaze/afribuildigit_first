import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { Heart, DollarSign, ShoppingCart, Factory, ArrowRight } from 'lucide-react'
import './Industries.css'

const Industries = () => {
  const { t } = useLanguage()

  const industries = [
    {
      icon: Heart,
      title: t('healthcare'),
      description: t('healthcareDesc'),
      solutions: [t('diseasePrediction'), t('patientRecords'), t('resourceOptimization')]
    },
    {
      icon: DollarSign,
      title: t('finance'),
      description: t('financeDesc'),
      solutions: [t('fraudDetection'), t('riskAnalysis'), t('algorithmicTrading')]
    },
    {
      icon: ShoppingCart,
      title: t('retail'),
      description: t('retailDesc'),
      solutions: [t('productRecommendation'), t('behavioralAnalysis'), t('inventoryOptimization')]
    },
    {
      icon: Factory,
      title: t('manufacturing'),
      description: t('manufacturingDesc'),
      solutions: [t('predictiveMaintenance'), t('supplyChainOptimization'), t('automatedQuality')]
    }
  ]

  return (
    <div className="industries">
      <section className="hero-section">
        <div className="container">
          <div className="section-header">
            <h1>{t('industriesTitle')}</h1>
            <p>{t('industriesSubtitle')}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            {industries.map((industry, index) => (
              <div key={index} className="card industry-card">
                <div className="industry-icon">
                  <industry.icon size={48} />
                </div>
                <h3>{industry.title}</h3>
                <p>{industry.description}</p>
                <ul>
                  {industry.solutions.map((solution, idx) => (
                    <li key={idx}>{solution}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="section cta-section-dark">
        <div className="container">
          <div className="cta-content">
            <h2>{t('readyToTransform')}</h2>
            <p>{t('contactForIndustry')}</p>
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

export default Industries 