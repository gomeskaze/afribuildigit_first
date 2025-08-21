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
      description: 'Nous développons des modèles de machine learning et d\'intelligence artificielle pour extraire des insights précieux de vos données.',
      color: '#3b82f6'
    },
    {
      icon: Code,
      title: t('dataEngineering'),
      description: 'Nous concevons et construisons des architectures de données modernes et évolutives pour optimiser vos processus métier.',
      color: '#10b981'
    },
    {
      icon: BarChart3,
      title: t('dataAnalytics'),
      description: 'Nous transformons vos données brutes en analyses actionnables pour vous aider à prendre des décisions éclairées.',
      color: '#f59e0b'
    },
    {
      icon: Cpu,
      title: t('softwareDevelopment'),
      description: 'Nous développons des applications robustes et innovantes adaptées à vos besoins spécifiques.',
      color: '#8b5cf6'
    }
  ]

  const features = [
    {
      icon: Users,
      title: 'Équipe Expérimentée',
      description: 'Nos fondateurs cumulent de nombreuses années d\'expérience dans la mise en œuvre de solutions basées sur les données.'
    },
    {
      icon: Target,
      title: 'Solutions Sur Mesure',
      description: 'Nous allions expertise technique et compréhension approfondie des processus métier.'
    },
    {
      icon: Award,
      title: 'Excellence Technique',
      description: 'Nous maintenons les plus hauts standards de qualité dans tous nos projets.'
    },
    {
      icon: TrendingUp,
      title: 'Innovation Continue',
      description: 'Nous restons à la pointe des dernières technologies et méthodologies.'
    }
  ]

  const stats = [
    { number: '50+', label: 'Projets Réalisés' },
    { number: '25+', label: 'Clients Satisfaits' },
    { number: '5+', label: 'Années d\'Expérience' },
    { number: '100%', label: 'Taux de Réussite' }
  ]

  return (
    <div className="home">
      {/* Section Hero */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title fade-in">
              {t('heroTitle')}
            </h1>
            <p className="hero-subtitle fade-in">
              {t('heroSubtitle')}
            </p>
            <p className="hero-description fade-in">
              {t('heroDescription')}
            </p>
            <div className="hero-actions fade-in">
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
            <h2>Nos Services</h2>
            <p>Découvrez notre gamme complète de services informatiques</p>
          </div>
          <div className="services-grid grid grid-4">
            {services.map((service, index) => (
              <div key={index} className="service-card card fade-in">
                <div className="service-icon" style={{ color: service.color }}>
                  <service.icon size={48} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to="/services" className="service-link">
                  En savoir plus <ArrowRight size={16} />
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
              <div key={index} className="stat-item fade-in">
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
            <h2>Pourquoi Nous Choisir</h2>
            <p>Découvrez ce qui nous distingue de la concurrence</p>
          </div>
          <div className="features-grid grid grid-2">
            {features.map((feature, index) => (
              <div key={index} className="feature-card card fade-in">
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
            <h2>Prêt à Transformer Votre Entreprise ?</h2>
            <p>Contactez-nous dès aujourd'hui pour discuter de vos besoins en services informatiques</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">
                {t('contact')}
              </Link>
              <Link to="/services" className="btn btn-secondary">
                Découvrir nos services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section Technologies */}
      <section className="tech-section section">
        <div className="container">
          <div className="section-header">
            <h2>Technologies & Outils</h2>
            <p>Nous utilisons les technologies les plus modernes pour vos projets</p>
          </div>
          <div className="tech-grid">
            <div className="tech-category">
              <h3>Data Science & ML</h3>
              <div className="tech-items">
                <span className="tech-item">Python</span>
                <span className="tech-item">TensorFlow</span>
                <span className="tech-item">PyTorch</span>
                <span className="tech-item">Scikit-learn</span>
              </div>
            </div>
            <div className="tech-category">
              <h3>Data Engineering</h3>
              <div className="tech-items">
                <span className="tech-item">Apache Spark</span>
                <span className="tech-item">Kafka</span>
                <span className="tech-item">Airflow</span>
                <span className="tech-item">Snowflake</span>
              </div>
            </div>
            <div className="tech-category">
              <h3>Développement</h3>
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