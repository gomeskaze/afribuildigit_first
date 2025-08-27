import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { 
  Database, 
  Code, 
  BarChart3, 
  Cpu, 
  ArrowRight, 
  Users, 
  Target, 
  Award,
  TrendingUp,
  Shield,
  Zap,
  Globe,
  Brain,
  Cloud
} from 'lucide-react'
import './Home.css'

const Home = () => {
  const { t } = useLanguage()

  const services = [
    {
      icon: Code,
      title: t('softwareDevelopment'),
      description: t('softwareDevelopmentDesc'),
      color: '#8b5cf6'
    },
    {
      icon: TrendingUp,
      title: t('digitale'),
      description: t('softwareDevelopmentDesc'),
      color: '#8b5cf6'
    },
    {
      icon: Database,
      title: t('dataAnalytics'),
      description: t('dataEngineeringDesc'),
      color: '#10b981'
    },
    {
      icon: Database,
      title: t('consulting'),
      description: t('dataEngineeringDesc'),
      color: '#10b981'
    },
    {
      icon: Cloud,
      title: t('cloudsolutions'),
      description: t('softwareDevelopmentDesc'),
      color: '#8b5cf6'
    }, {
      icon: BarChart3,
      title: t('security'),
      description: t('dataAnalyticsDesc'),
      color: '#f59e0b'
    }
  ]

  const features = [
    {
      icon: Users,
      title: t('experiencedTeam'),
      description: t('experiencedTeamDesc')
    },
    {
      icon: Target,
      title: t('customSolutions'),
      description: t('customSolutionsDesc')
    },
    {
      icon: Award,
      title: t('technicalExcellence'),
      description: t('technicalExcellenceDesc')
    },
    {
      icon: TrendingUp,
      title: t('continuousInnovation'),
      description: t('continuousInnovationDesc')
    }
  ]

  const stats = [
    { number: '50+', label: t('projectsCompleted') },
    { number: '25+', label: t('satisfiedClients') },
    { number: '5+', label: t('yearsExperience') },
    { number: '100%', label: t('successRate') }
  ]

  return (
    <div className="home">
      {/* Section Hero */}
      <section className="hero-section">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="/videos/server-background.mp4" type="video/mp4" />
          <source src="/videos/server-background.webm" type="video/webm" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              {t('heroTitle')}
            </h1> 
            <h5 className="hero-subtitle1">
              {t('heroSubtitle1')}
            </h5> 
            <h5 className="hero-subtitle1">
              {t('heroSubtitle2')}
            </h5> 
            <p className="hero-subtitle">
              {t('heroSubtitle')}
            </p>
            <p className="hero-description">
              {t('heroDescription')}
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                {t('getStarted')}
                <ArrowRight size={20} />
              </Link>
              <Link to="/about" className="btn btn-secondary">
                {t('learnMore')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section Services */}
      <section className="services-section section">
        <div className="container">
          <div className="section-header">
            <h2>{t('ourServices')}</h2>
            <p>{t('discoverServices')}</p>
          </div>
          <div className="services-tiles">
            {services.map((service, index) => (
              <div key={index} className="service-tile">
                <div className="tile-body">
                  <div className="tile-icon" style={{ color: service.color }}>
                    <service.icon size={48} />
                  </div>
                  <div className="tile-text">
                    <h3 className="tile-title">{service.title}</h3>
                    <p className="tile-desc">{service.description}</p>
                  </div>
                </div>
                <Link to="/services" className="tile-arrow" aria-label={t('learnMoreLink')}>
                  <ArrowRight size={20} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Statistiques */}
      <section className="stats-section section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Avantages */}
      <section className="features-section section">
        <div className="container">
          <div className="section-header">
            <h2>{t('whyChooseUs')}</h2>
            <p>{t('whatMakesUsDifferent')}</p>
          </div>
          <div className="features-grid grid grid-2">
            {features.map((feature, index) => (
              <div key={index} className="feature-card card">
                <div className="feature-icon">
                  <feature.icon size={40} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="cta-section section">
        <div className="container">
          <div className="cta-content">
            <h2>{t('readyToTransform')}</h2>
            <p>{t('contactToday')}</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">
                {t('contact')}
              </Link>
              <Link to="/services" className="btn btn-secondary">
                {t('discoverOurServices')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section Partenaires */}
      <section className="partners-section section">
        <div className="container">
          <div className="section-header">
            <h2>{t('partnersTitle')}</h2>
            <p>{t('partnersSubtitle')}</p>
          </div>
          <div className="partners-grid">
            <a className="partner" href="https://totalenergies.com/" target="_blank" rel="noreferrer" aria-label="TotalEnergies">
              <img src="/partners/totalenergies.png" alt="TotalEnergies" />
            </a>
            <a className="partner" href="https://laahtech.com/" target="_blank" rel="noreferrer" aria-label="Laahtech">
              <img src="/partners/laahtech.png" alt="Laahtech" />
            </a>
            <a className="partner" href="https://maviance.com/" target="_blank" rel="noreferrer" aria-label="Maviance">
              <img src="/partners/maviance.png" alt="Maviance" />
            </a>
            <a className="partner" href="https://sendkolo.com/" target="_blank" rel="noreferrer" aria-label="Maviance">
              <img src="/partners/sendkolo.png" alt="sendkolo" />
            </a>
          </div>
        </div>
      </section>

      {/* Section Technologies */}
      <section className="tech-section section">
        <div className="container">
          <div className="section-header">
            <h2>{t('technologiesTools')}</h2>
            <p>{t('modernTechnologies')}</p>
          </div>
          <div className="tech-grid">
            <div className="tech-category">
              <h3>{t('dataScienceML')}</h3>
              <div className="tech-items">
                <span className="tech-item">Python</span>
                <span className="tech-item">TensorFlow</span>
                <span className="tech-item">PyTorch</span>
                <span className="tech-item">Scikit-learn</span>
              </div>
            </div>
            <div className="tech-category">
              <h3>{t('dataEngineering')}</h3>
              <div className="tech-items">
                <span className="tech-item">Apache Spark</span>
                <span className="tech-item">Kafka</span>
                <span className="tech-item">Airflow</span>
                <span className="tech-item">Snowflake</span>
              </div>
            </div>
            <div className="tech-category">
              <h3>{t('development')}</h3>
              <div className="tech-items">
                <span className="tech-item">React</span>
                <span className="tech-item">Node.js</span>
                <span className="tech-item">Python</span>
                <span className="tech-item">Docker</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 