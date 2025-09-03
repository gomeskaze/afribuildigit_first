import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { Heart, DollarSign, ShoppingCart, Factory, ArrowRight, Sun, Bus, Sprout, GraduationCap, Building2, Car  } from 'lucide-react'
import './Industries.css'

const Industries = () => {
  const { t } = useLanguage()

  const industries = [
    {
      icon: Heart,
      title: t('healthcare'),
      description: t('healthcareDesc'),
      solutions: [t('healthcarediseasePredict'), t('healthcarePatientRecords'), t('healthcareResourceOpt')],
      image: "/images/healthcare-bg.png",
      link: "/industries/healthcare" // Add link for each industry
    },
    {
      icon: DollarSign,
      title: t('finance'),
      description: t('financeDesc'),
      solutions: [t('financeFraudDetection'), t('financeRiskAnalysis'), t('financeAlgorithmicTrading')],
      image: "/images/finance-bg.png",
      link: "/industries/finance"
    },
    {
      icon: ShoppingCart,
      title: t('retail'),
      description: t('retailDesc'),
      solutions: [t('retailProductRecommendation'), t('retailBehavioralAnalysis'), t('retailInventoryOpt')],
      image: "/images/retail-bg.png",
      link: "/industries/retail"
    },
    {
      icon: Factory,
      title: t('manufacturing'),
      description: t('manufacturingDesc'),
      solutions: [t('ManufacturingPredict'), t('ManufacturingSupplyChainOpt'), t('ManufacturingAutomatedQuality')],
      image: "/images/manufacturing-bg.png",
      link: "/industries/manufacturing"
    },
    {
      icon: Sun,
      title: t('energy'),
      description: t('energyDesc'),
      solutions: [t('EnergyApps'), t('EnergyAiDetection'), t('EnergyReporting')],
      image: "/images/energy-bg.png",
      link: "/industries/energy"
    },
    {
      icon: Bus,
      title: t('transport'),
      description: t('transportDesc'),
      solutions: [t('transportOptimisation'), t('transportSatisfaction'), t('transportData')],
      image: "/images/transport-bg.png",
      link: "/industries/transport"
    },
    {
      icon: Sprout,
      title: t('agritech'),
      description: t('agritechDesc'),
      solutions: [t('agritechData'), t('agritechEmobility'), t('agritechAutomation')],
      image: "/images/agritech-bg.png",
      link: "/industries/agritech"
    },
    {
      icon: GraduationCap,
      title: t('education'),
      description: t('educationDesc'),
      solutions: [t('educationApp'), t('educationLearning'), t('educationSolutions')],
      image: "/images/education-bg.png",
      link: "/industries/education"
    },
    {
      icon: Building2,
      title: t('construction'),
      description: t('constructionDesc'),
      solutions: [t('constructionApp'), t('constructionLearning'), t('constructionSolutions')],
      image: "/images/construction-bg.png",
      link: "/industries/construction"
    },
    {
      icon: Car,
      title: t('automotive'),
      description: t('automotiveDesc'),
      solutions: [t('constructionApp'), t('constructionLearning'), t('constructionSolutions')],
      image: "/images/automotive-bg.png",
      link: "/industries/automotive"
    }

  ]

  return (
    <div className="industries">
      <section className="hero-section">
      <video className="hero-video" autoPlay muted loop playsInline>
          <source src="/videos/industrie-background.mp4" type="video/mp4" />
          <source src="/videos/industrie-background.webm" type="video/webm" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
        <div className="hero-overlay"></div>
       <div className="hero-content">
         <div className="container">
           <div className="section-header">
             <h1>{t('industriesTitle')}</h1>
             <p>{t('industriesSubtitle')}</p>
           </div>
          </div>
        </div>
      </section>

      {/* Section Industries */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            {industries.map((industry, index) => (
              <a key={index} href={industry.link} className="industry-link">
                <div className="card industry-card">
                  <div className="container" style={{ backgroundImage: `url(${industry.image})` }}>
                    <div className="industry-icon">
                      <industry.icon size={48} />
                    </div>
                    <h3>{industry.title}</h3> 
                  </div>
                  <div className="content-section">
                    <p>{industry.description}</p>
                    <ul>
                      {industry.solutions.map((solution, idx) => (
                        <li key={idx}>{solution}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="section cta-section-dark" style={{ backgroundImage: "url('/images/IT-Infrastructure.png')" }}>
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