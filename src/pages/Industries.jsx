import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { Heart, DollarSign, ShoppingCart, Factory } from 'lucide-react'

const Industries = () => {
  const { t } = useLanguage()

  const industries = [
    {
      icon: Heart,
      title: t('healthcare'),
      description: 'Solutions innovantes pour améliorer les soins de santé et optimiser les processus médicaux.',
      solutions: ['Analyse prédictive des maladies', 'Gestion des dossiers patients', 'Optimisation des ressources']
    },
    {
      icon: DollarSign,
      title: t('finance'),
      description: 'Technologies avancées pour sécuriser les transactions et optimiser les services financiers.',
      solutions: ['Détection de fraude', 'Analyse de risque', 'Trading algorithmique']
    },
    {
      icon: ShoppingCart,
      title: t('retail'),
      description: 'Solutions e-commerce et analytics pour optimiser l\'expérience client et les ventes.',
      solutions: ['Recommandation produits', 'Analyse comportementale', 'Optimisation des stocks']
    },
    {
      icon: Factory,
      title: t('manufacturing'),
      description: 'IoT et analytics pour améliorer la productivité et réduire les coûts de production.',
      solutions: ['Maintenance prédictive', 'Optimisation de la chaîne logistique', 'Qualité automatisée']
    }
  ]

  return (
    <div className="industries">
      <section className="hero-section">
        <div className="container">
          <div className="section-header">
            <h1>{t('industriesTitle')}</h1>
            <p>Nous servons divers secteurs d'activité avec des solutions adaptées</p>
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
    </div>
  )
}

export default Industries 