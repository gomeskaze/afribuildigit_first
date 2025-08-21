import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { Briefcase, Users, Award, Mail } from 'lucide-react'

const Career = () => {
  const { t } = useLanguage()

  const positions = [
    {
      title: 'Data Scientist Senior',
      department: 'Data Science',
      location: 'Yaoundé, Cameroun',
      type: 'Temps plein',
      description: 'Nous recherchons un Data Scientist expérimenté pour rejoindre notre équipe.'
    },
    {
      title: 'Développeur Full Stack',
      department: 'Développement',
      location: 'Yaoundé, Cameroun',
      type: 'Temps plein',
      description: 'Développeur passionné pour créer des applications web modernes.'
    },
    {
      title: 'Data Engineer',
      department: 'Data Engineering',
      location: 'Yaoundé, Cameroun',
      type: 'Temps plein',
      description: 'Expert en architectures de données et pipelines ETL.'
    }
  ]

  const benefits = [
    'Environnement de travail flexible',
    'Formation continue',
    'Projets innovants',
    'Équipe dynamique',
    'Croissance de carrière',
    'Salaire compétitif'
  ]

  return (
    <div className="career">
      <section className="hero-section">
        <div className="container">
          <div className="section-header">
            <h1>{t('careerTitle')}</h1>
            <p>{t('joinUs')} et faites partie d'une équipe passionnée par l'innovation</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>{t('openPositions')}</h2>
            <p>Découvrez les opportunités de carrière chez AfriBuilDigit Group</p>
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
                <a href={`mailto:careers@afribuildigit.com?subject=Candidature - ${position.title}`} className="btn btn-primary">
                  Postuler
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Avantages</h2>
            <p>Pourquoi rejoindre notre équipe ?</p>
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
          <div className="cta-content">
            <h2>Vous ne trouvez pas le poste idéal ?</h2>
            <p>Envoyez-nous votre CV et nous vous contacterons pour les futures opportunités</p>
            <a href="mailto:careers@afribuildigit.com" className="btn btn-primary">
              <Mail size={20} />
              Envoyer votre CV
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Career 