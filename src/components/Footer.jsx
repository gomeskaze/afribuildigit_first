import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  const { t } = useLanguage()

  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Entreprise',
      links: [
        { label: t('about'), path: '/about' },
        { label: t('career'), path: '/career' },
        { label: t('contact'), path: '/contact' }
      ]
    },
    {
      title: t('services'),
      links: [
        { label: t('cloudServices'), path: '/services#cloud' },
        { label: t('softwareEngineering'), path: '/services#software-development' },
        { label: t('digitalTransformation'), path: '/services#digitalisation' },
        { label: t('aiMlDataScience'), path: '/services#data-science' },
        { label: t('cloudDataEngineering'), path: '/services#data-engineering' },
        { label: t('dataAnalyticsServices'), path: '/services#data-analytics' },
        { label: t('cybersecurity'), path: '/services#cybersecurity' },
        { label: t('embeddedSoftwareIoT'), path: '/services#softwareIoT' },
        { label: t('intelligentPlatformsRPA'), path: '/services#platformsRPA' }
      ]
    },
    {
      title: t('industries'),
      links: [
        { label: t('healthcare'), path: '/industries#healthcare' },
        { label: t('finance'), path: '/industries#finance' },
        { label: t('agritech'), path: '/industries#agritech' },
        { label: t('manufacturing'), path: '/industries#manufacturing' },
        { label: t('transport'), path: '/industries#transport' },
        { label: t('retail'), path: '/industries#retail' }
      ]
    }
  ]

  const socialLinks = [
    { icon: Facebook, url: 'https://facebook.com/afribuildigit', label: 'Facebook' },
    { icon: Twitter, url: 'https://twitter.com/afribuildigit', label: 'Twitter' },
    { icon: Linkedin, url: 'https://linkedin.com/company/afribuildigit', label: 'LinkedIn' },
    { icon: Instagram, url: 'https://instagram.com/afribuildigit', label: 'Instagram' }
  ]

  const contactInfo = [
    { icon: Mail, text: 'contact@afribuildigit.com', url: 'mailto:contact@afribuildigit.com' },
    { icon: Phone, text: '+237 XXX XXX XXX', url: 'tel:+237XXXXXXXXX' },
    { icon: MapPin, text: 'Yaoundé, Cameroun', url: null }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Logo et Description */}
          <div className="footer-section">
            <Link to="/" className="footer-logo">
              <div className="logo-text">
                <span className="logo-primary">AfriBuil</span>
                <span className="logo-secondary">Digit</span>
              </div>
            </Link>
            
            {/* Réseaux sociaux */}
            <div className="social-links">
              <h4>{t('followUs')}</h4>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Liens de navigation */}
          {footerSections.map((section, index) => (
            <div key={index} className="footer-section">
              <h4>{section.title}</h4>
              <ul className="footer-links">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Informations de contact */}
          <div className="footer-section">
            <h4>{t('contact')}</h4>
            <div className="contact-info">
              {contactInfo.map((contact, index) => (
                <div key={index} className="contact-item">
                  <contact.icon size={16} />
                  {contact.url ? (
                    <a href={contact.url}>{contact.text}</a>
                  ) : (
                    <span>{contact.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Barre de copyright */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} AfriBuilDigit Group. {t('allRightsReserved')}</p>
            <div className="footer-bottom-links">
              <Link to="/privacy">Politique de confidentialité</Link>
              <Link to="/terms">Conditions d'utilisation</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 