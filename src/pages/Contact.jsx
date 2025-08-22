import React, { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { Mail, Phone, MapPin, Send, Paperclip } from 'lucide-react'
import './Contact.css'

const Contact = () => {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    fullName: '',
    businessEmail: '',
    phoneNumber: '',
    message: ''
  })
  const [acceptedTerms, setAcceptedTerms] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!acceptedTerms) {
      alert('Veuillez accepter les conditions générales et la politique de confidentialité.')
      return
    }
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
              <h2> {t('contactInfo')}</h2>
              <p>{t('contactInfoDesc')}</p>
              
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
                  <label htmlFor="fullName">Full name *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="businessEmail">Business Email *</label>
                  <input
                    type="email"
                    id="businessEmail"
                    name="businessEmail"
                    value={formData.businessEmail}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone number</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="form-actions">
                  <div className="attach-files">
                    <div className="attach-header">
                      <Paperclip size={20} className="attach-icon" />
                      <span>Attach files</span>
                    </div>
                    <p className="attach-description">
                      Up to 3 attachments. The total size of attachments should not exceed 5Mb.
                    </p>
                  </div>

                  <div className="required-fields">
                    <span>Required fields *</span>
                  </div>
                </div>

                <div className="terms-section">
                  <label className="terms-checkbox">
                    <input
                      type="checkbox"
                      checked={acceptedTerms}
                      onChange={(e) => setAcceptedTerms(e.target.checked)}
                      required
                    />
                    <span className="checkbox-text">
                      I have read and accepted the{' '}
                      <a href="/terms" className="terms-link">Terms & Conditions</a>
                      {' '}and{' '}
                      <a href="/privacy" className="terms-link">Privacy Policy *</a>
                    </span>
                  </label>
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