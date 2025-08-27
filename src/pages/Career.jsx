import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { Briefcase, Users, Award, Mail } from 'lucide-react'
import './Career.css'

const Career = () => {
  const { t } = useLanguage()

  const positions = [
    {
      title: t('positionDataScientistTitle'),
      department: t('positionDataScientistDept'),
      location: t('positionDataScientistLocation'),
      type: t('positionDataScientistType'),
      description: t('positionDataScientistDesc')
    },
    {
      title: t('positionFullStackTitle'),
      department: t('positionFullStackDept'),
      location: t('positionFullStackLocation'),
      type: t('positionFullStackType'),
      description: t('positionFullStackDesc')
    },
    {
      title: t('positionDataEngineerTitle'),
      department: t('positionDataEngineerDept'),
      location: t('positionDataEngineerLocation'),
      type: t('positionDataEngineerType'),
      description: t('positionDataEngineerDesc')
    }
  ]

  const benefits = [
    t('benefitFlexibleWork'),
    t('benefitContinuousTraining'),
    t('benefitInnovativeProjects'),
    t('benefitDynamicTeam'),
    t('benefitCareerGrowth'),
    t('benefitCompetitiveSalary')
  ]

  return (
    <div className="career">
      <section className="hero-section">
        <div className="container">
          <div className="section-header">
            <h1>{t('careerTitle')}</h1>
            <p>{t('joinUs')} {t('careerJoinTagline')}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>{t('openPositions')}</h2>
            <p>{t('careerOpenPositionsDesc')}</p>
          </div>
          
          <div className="positions-grid">
            {positions.map((position, index) => (
              <div key={index} className="card position-card">
                <h3>{position.title}</h3>
                <div className="position-meta">
                  <span>{position.department}</span>
                  <span>{position.location}</span>
                  <span>{position.type}</span>
                </div>
                <p>{position.description}</p>
                <a href={`mailto:careers@afribuildigit.com?subject=Application - ${position.title}`} className="btn btn-primary">
                  {t('applyNow')}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>{t('benefitsTitle')}</h2>
            <p>{t('benefitsWhyJoin')}</p>
          </div>
          
          <div className="benefits-grid grid grid-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="card benefit-card">
                <Award size={32} />
                <h3>{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-content cta-text-violet">
            <h2>{t('careerNoIdealPosition')}</h2>
            <p>{t('careerSendCVPrompt')}</p>
            <a href="mailto:careers@afribuildigit.com" className="btn btn-primary">
              <Mail size={20} />
              {t('careerSendCVButton')}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Career 