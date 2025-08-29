import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { Heart, DollarSign, ShoppingCart, Factory, ArrowRight, Sun, Bus, Sprout, GraduationCap  } from 'lucide-react'
import './Industries.css'

const Industries = () => {
  const { t } = useLanguage()

  const industries = [
    {
      icon: Heart,
      title: t('healthcare'),
      description: t('healthcareDesc'),
      solutions: [t('healthcarediseasePredict'), t('healthcarePatientRecords'), t('healthcareResourceOpt')],
      image: "/images/healthcare-bg.png", // image obligatoire
    },
    {
      icon: DollarSign,
      title: t('finance'),
      description: t('financeDesc'),
      solutions: [t('financeFraudDetection'), t('financeRiskAnalysis'), t('financeAlgorithmicTrading')],
      image: "/images/education-bg.jpg", // image obligatoire
    },
    {
      icon: ShoppingCart,
      title: t('retail'),
      description: t('retailDesc'),
      solutions: [t('retailProductRecommendation'), t('retailBehavioralAnalysis'), t('retailInventoryOpt')],
      image: "/images/education-bg.jpg", // image obligatoire
    },
    {
      icon: Factory,
      title: t('manufacturing'),
      description: t('manufacturingDesc'),
      solutions: [t('ManufacturingPredict'), t('ManufacturingSupplyChainOpt'), t('ManufacturingAutomatedQuality')],
      image: "/images/education-bg.jpg", // image obligatoire
    },
    {
      icon: Sun,
      title: t('energy'),
      description: t('energyDesc'),
      solutions: [t('EnergyApps'), t('EnergyAiDetection'), t('EnergyReporting')],
      image: "/images/education-bg.jpg", // image obligatoire
    },
    {
      icon: Bus,
      title: t('transport'),
      description: t('transportDesc'),
      solutions: [t('transportOptimisation'), t('transportSatisfaction'), t('transportData')],
      image: "/images/education-bg.jpg", // image obligatoire
    },
    {
      icon: Sprout,
      title: t('agritech'),
      description: t('agritechDesc'),
      solutions: [t('agritechData'), t('agritechEmobility'), t('agritechAutomation')],
      image: "/images/education-bg.jpg", // image obligatoire
    },
    {
      icon: GraduationCap,
      title: t('education'),
      description: t('educationDesc'),
      solutions: [t('educationApp'), t('educationLearning'), t('educationSolutions')],
      image: "/images/education-bg.jpg", // image obligatoire
    }
  ]

  return (
    <div className="industries">
      <video className="hero-video" autoPlay muted loop playsInline>
          <source src="/videos/industrie-background.mp4" type="video/mp4" />
          <source src="/videos/industrie-background.webm" type="video/webm" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
        <div className="hero-overlay"></div>
      <section className="hero-section">
       <div className="hero-content">
         <div className="container">
           <div className="section-header">
             <h1>{t('industriesTitle')}</h1>
             <p>{t('industriesSubtitle')}</p>
           </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            {industries.map((industry, index) => (
              <div key={index} className="card industry-card">
                <div className="grid" style={{ backgroundImage: `url(${industry.image})` }}>
                  <div className="industry-icon">
                    <industry.icon size={48} />
                  </div>
                  <h3>{industry.title}</h3> 
                </div>
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
            <h2>{t('readyToTransformIndustry')}</h2>
            <p>{t('contactForIndustry')}</p>
            <div className="cta-actions">
              <a href="/contact" className="btn btn-primary">
                {t('contact')}
                <ArrowRight size={30} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Industries 