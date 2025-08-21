import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { Users, Target, Award, Globe, Heart, Zap } from 'lucide-react'
import './About.css'

const About = () => {
  const { t } = useLanguage()

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans tout ce que nous faisons, en maintenant les plus hauts standards de qualité.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Nous sommes passionnés par la technologie et l\'innovation, et nous transmettons cette passion à nos clients.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Nous croyons en la puissance de la collaboration et travaillons en étroite relation avec nos clients.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Nous restons à la pointe des dernières technologies pour offrir des solutions innovantes.'
    }
  ]

  const team = [
    {
      name: 'Jean-Pierre Nguemo',
      role: 'CEO & Co-fondateur',
      description: 'Expert en science des données avec plus de 10 ans d\'expérience dans l\'industrie.',
      image: '/team/ceo.jpg'
    },
    {
      name: 'Marie-Claire Mbarga',
      role: 'CTO & Co-fondatrice',
      description: 'Ingénieure en développement logiciel spécialisée dans les architectures cloud.',
      image: '/team/cto.jpg'
    },
    {
      name: 'David Etoa',
      role: 'Lead Data Scientist',
      description: 'Spécialiste en machine learning et intelligence artificielle.',
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
            <h2>Notre Histoire</h2>
            <p>Découvrez le parcours qui nous a menés jusqu'ici</p>
          </div>
          <div className="history-content">
            <div className="history-text">
              <h3>Une vision née de l'expérience</h3>
              <p>
                AfriBuilDigit Group est née de la vision de créer une entreprise de services 
                informatiques qui allie expertise technique et compréhension approfondie des 
                processus métier. Nos fondateurs, après avoir travaillé dans de grandes 
                entreprises internationales, ont décidé de mettre leur expertise au service 
                des entreprises africaines.
              </p>
              <p>
                Basée à Yaoundé, au Cameroun, notre entreprise s'est rapidement imposée 
                comme un partenaire de confiance pour les organisations cherchant à 
                transformer leurs données en avantages concurrentiels.
              </p>
            </div>
            <div className="history-stats">
              <div className="stat-item">
                <div className="stat-number">2020</div>
                <div className="stat-label">Année de création</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3</div>
                <div className="stat-label">Fondateurs</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Projets réalisés</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Valeurs */}
      <section className="values-section section">
        <div className="container">
          <div className="section-header">
            <h2>Nos Valeurs</h2>
            <p>Les principes qui guident nos actions au quotidien</p>
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
            <h2>Notre Équipe</h2>
            <p>Rencontrez les experts qui font d'AfriBuilDigit Group votre partenaire de confiance</p>
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
              <h2>Notre Mission</h2>
              <p>
                Nous aidons nos clients à prendre des décisions fondées sur les données 
                et à mettre en œuvre efficacement des solutions numériques. Qu'il s'agisse 
                d'architectes de données modernes, d'applications de machine learning ou 
                de développement back-end robuste, nous sommes votre partenaire de confiance.
              </p>
              <div className="mission-points">
                <div className="mission-point">
                  <Globe size={24} />
                  <span>Solutions adaptées au contexte africain</span>
                </div>
                <div className="mission-point">
                  <Award size={24} />
                  <span>Excellence technique reconnue</span>
                </div>
                <div className="mission-point">
                  <Target size={24} />
                  <span>Résultats mesurables et durables</span>
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