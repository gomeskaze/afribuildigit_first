import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { Menu, X, ChevronDown, Globe } from 'lucide-react'
import './Header.css'

const Header = () => {
  const { t, currentLanguage, changeLanguage } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  const menuItems = [
    {
      key: 'about',
      label: t('about'),
      path: '/about',
      dropdown: [
        { label: 'Notre Histoire', path: '/about#history' },
        { label: 'Notre Équipe', path: '/about#team' },
        { label: 'Nos Valeurs', path: '/about#values' }
      ]
    },
    {
      key: 'industries',
      label: t('industries'),
      path: '/industries',
      dropdown: [
        { label: t('healthcare'), path: '/industries#healthcare' },
        { label: t('finance'), path: '/industries#finance' },
        { label: t('retail'), path: '/industries#retail' },
        { label: t('manufacturing'), path: '/industries#manufacturing' }
      ]
    },
    {
      key: 'services',
      label: t('services'),
      path: '/services',
      dropdown: [
        { label: t('dataScience'), path: '/services#data-science' },
        { label: t('dataEngineering'), path: '/services#data-engineering' },
        { label: t('dataAnalytics'), path: '/services#data-analytics' },
        { label: t('softwareDevelopment'), path: '/services#software-development' }
      ]
    },
    {
      key: 'career',
      label: t('career'),
      path: '/career',
      dropdown: [
        { label: t('openPositions'), path: '/career#positions' },
        { label: 'Culture d\'entreprise', path: '/career#culture' },
        { label: 'Avantages', path: '/career#benefits' }
      ]
    }
  ]

  const languages = [
    { code: 'fr', name: 'Français' },
    { code: 'en', name: 'English' },
    { code: 'de', name: 'Deutsch' }
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleDropdownToggle = (key) => {
    setActiveDropdown(activeDropdown === key ? null : key)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    setActiveDropdown(null)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo" onClick={closeMenu}>
            <div className="logo-text">
              <span className="logo-primary">AfriBuil</span>
              <span className="logo-secondary">Digit</span>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <nav className="nav-desktop">
            <ul className="nav-menu">
              {menuItems.map((item) => (
                <li key={item.key} className="nav-item">
                  <div className="nav-link-container">
                    <Link
                      to={item.path}
                      className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                    >
                      {item.label}
                    </Link>
                    {item.dropdown && (
                      <>
                        <button
                          className="dropdown-toggle"
                          onClick={() => handleDropdownToggle(item.key)}
                        >
                          <ChevronDown size={16} />
                        </button>
                        {activeDropdown === item.key && (
                          <div className="mega-menu">
                            <div className="mega-menu-content">
                              <div className="mega-menu-section">
                                <h3>{item.label}</h3>
                                <ul>
                                  {item.dropdown.map((dropdownItem, index) => (
                                    <li key={index}>
                                      <Link
                                        to={dropdownItem.path}
                                        onClick={closeMenu}
                                      >
                                        {dropdownItem.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions */}
          <div className="header-actions">
            {/* Language Selector */}
            <div className="language-selector">
              <Globe size={20} />
              <select
                value={currentLanguage}
                onChange={(e) => changeLanguage(e.target.value)}
                className="language-select"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.code.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>

            {/* Contact Button */}
            <Link to="/contact" className="btn btn-primary contact-btn">
              {t('contact')}
            </Link>

            {/* Mobile Menu Toggle */}
            <button className="mobile-menu-toggle" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="nav-mobile">
            <ul className="mobile-menu">
              {menuItems.map((item) => (
                <li key={item.key} className="mobile-nav-item">
                  <Link
                    to={item.path}
                    className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <ul className="mobile-dropdown">
                      {item.dropdown.map((dropdownItem, index) => (
                        <li key={index}>
                          <Link
                            to={dropdownItem.path}
                            onClick={closeMenu}
                          >
                            {dropdownItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header 