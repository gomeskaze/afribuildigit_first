import React, { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const Contact = () => {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
    console.log('Form submitted:', formData)
    alert('Message envoyé ! Nous vous contacterons bientôt.')
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@afribuildigit.com',
      link: 'mailto:contact@afribuildigit.com'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      value: '+237 XXX XXX XXX',
      link: 'tel:+237XXXXXXXXX'
    },
    {
      icon: MapPin,
      title: 'Adresse',
      value: 'Yaoundé, Cameroun',
      link: null
    }
  ]

  return (
    <div className="contact">
      <section className="hero-section">
        <div className="container">
          <div className="section-header">
            <h1>{t('contactUs')}</h1>
            <p>Discutons de votre projet et découvrons comment nous pouvons vous aider</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info-section">
              <h2>Informations de contact</h2>
              <p>N'hésitez pas à nous contacter pour toute question ou demande de devis.</p>
              
              <div className="contact-info-list">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-info-item">
                    <div className="contact-icon">
                      <info.icon size={24} />
                    </div>
                    <div className="contact-details">
                      <h3>{info.title}</h3>
                      {info.link ? (
                        <a href={info.link}>{info.value}</a>
                      ) : (
                        <span>{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="contact-form-section">
              <h2>Envoyez-nous un message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">{t('name')} *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">{t('email')} *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Sujet</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">{t('message')} *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  <Send size={20} />
                  {t('send')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact 