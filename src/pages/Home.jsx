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
  Globe
} from 'lucide-react'
import './Home.css'

const Home = () => {
  const { t } = useLanguage()

  const services = [
    {
      icon: Database,
      title: t('dataScience'),
      description: t('dataScienceDesc'),
      color: '#8b5cf6'
    },
    {
      icon: Code,
      title: t('dataEngineering'),
      description: t('dataEngineeringDesc'),
      color: '#10b981'
    },
    {
      icon: BarChart3,
      title: t('dataAnalytics'),
      description: t('dataAnalyticsDesc'),
      color: '#f59e0b'
    },
    {
      icon: Cpu,
      title: t('softwareDevelopment'),
      description: t('softwareDevelopmentDesc'),
      color: '#8b5cf6'
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
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              {t('heroTitle')}
            </h1>
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
          <div className="services-grid grid grid-4">
            {services.map((service, index) => (
              <div key={index} className="service-card card">
                <div className="service-icon" style={{ color: service.color }}>
                  <service.icon size={48} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to="/services" className="service-link">
                  {t('learnMoreLink')} <ArrowRight size={16} />
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