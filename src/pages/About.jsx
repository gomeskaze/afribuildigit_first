import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { Users, Target, Award, Globe, Heart, Zap } from 'lucide-react'
import './About.css'

const About = () => {
  const { t } = useLanguage()

  const values = [
    {
      icon: Target,
      title: t('excellence'),
      description: t('excellenceDesc')
    },
    {
      icon: Heart,
      title: t('passion'),
      description: t('passionDesc')
    },
    {
      icon: Users,
      title: t('collaboration'),
      description: t('collaborationDesc')
    },
    {
      icon: Zap,
      title: t('innovation'),
      description: t('innovationDesc')
    }
  ]

  const team = [
    {
      name: 'Joel Kaze',
      role: t('ceoFounder'),
      description: t('ceoDesc'),
      image: '/team/ceo.jpg'
    },
    {
      name: 'Sammy Ndzelen',
      role: t('ctoFounder'),
      description: t('ctoDesc'),
      image: '/team/cto.jpg'
    },
    {
      name: 'David Etoa',
      role: t('leadDataScientist'),
      description: t('dataScientistDesc'),
      image: '/team/data-scientist.jpg'
    }
  ]

  return (
    <div className="about">
      {/* Section Hero */}
      <section className="about-hero section">
        <div className="container">
          <div className="about-hero-content">
            <h1>{t('aboutTitle')}</h1>
            <p className="about-hero-description">
              {t('aboutDescription')} Nos fondateurs cumulent de nombreuses années d'expérience 
              dans la mise en œuvre de solutions basées sur les données pour des entreprises 
              de divers secteurs.
            </p>
          </div>
        </div>
      </section>

      {/* Section Histoire */}
      <section className="history-section section">
        <div className="container">
          <div className="section-header">
            <h2>{t('ourHistory')}</h2>
            <p>{t('historySubtitle')}</p>
          </div>
          <div className="history-content">
            <div className="history-text">
              <h3>{t('visionFromExperience')}</h3>
              <p>
                {t('visionDescription')}
              </p>
              <p>
                {t('basedInYaounde')}
              </p>
            </div>
            <div className="history-stats">
              <div className="stat-item">
                <div className="stat-number">2020</div>
                <div className="stat-label">{t('foundingYear')}</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3</div>
                <div className="stat-label">{t('founders')}</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">{t('projectsCompleted')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Valeurs */}
      <section className="values-section section">
        <div className="container">
          <div className="section-header">
            <h2>{t('ourValues')}</h2>
            <p>{t('valuesSubtitle')}</p>
          </div>
          <div className="values-grid grid grid-2">
            {values.map((value, index) => (
              <div key={index} className="value-card card">
                <div className="value-icon">
                  <value.icon size={48} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Équipe */}
      <section className="team-section section">
        <div className="container">
          <div className="section-header">
            <h2>{t('ourTeam')}</h2>
            <p>{t('teamSubtitle')}</p>
          </div>
          <div className="team-grid grid grid-3">
            {team.map((member, index) => (
              <div key={index} className="team-card card">
                <div className="team-photo">
                  <div className="photo-placeholder">
                    <Users size={60} />
                  </div>
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-description">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Mission */}
      <section className="mission-section section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>{t('ourMission')}</h2>
              <p>
                {t('missionDescription')}
              </p>
              <div className="mission-points">
                <div className="mission-point">
                  <Globe size={24} />
                  <span>{t('africanContext')}</span>
                </div>
                <div className="mission-point">
                  <Award size={24} />
                  <span>{t('technicalExcellence')}</span>
                </div>
                <div className="mission-point">
                  <Target size={24} />
                  <span>{t('measurableResults')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About 