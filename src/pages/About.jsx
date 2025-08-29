import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { Link } from 'react-router-dom'
import { Users, Target, Award, Globe, Heart, Zap, ArrowRight } from 'lucide-react'
import './About.css'
import { Linkedin, Twitter } from "lucide-react"    
import { SiXing } from "react-icons/si"
import { DollarSign, HeartPulse, Factory, Sprout, Bus, ShoppingCart, Sun } from "lucide-react";   // Agritech

const About = () => {
  const { t } = useLanguage()

  const values = [
    {
      icon: Target,
      title: t('excellence'),
      description: t('excellenceDesc')
    },
    {
      icon: Heart,
      title: t('passion'),
      description: t('passionDesc')
    },
    {
      icon: Users,
      title: t('collaboration'),
      description: t('collaborationDesc')
    },
    {
      icon: Zap,
      title: t('innovation'),
      description: t('innovationDesc')
    }
  ]

  const team = [
    {
      name: 'Joel Kaze',
      role: t('ceoFounder'),
      description: t('ceoDesc'),
      image: '/team/kaze.png', 
      socials: [
        { icon: <SiXing />, link: "https://www.xing.com/profile/Joel_Kaze/web_profiles" },
        { icon: <Twitter />, link: "#" },
        { icon: <Linkedin />, link: "https://www.linkedin.com/in/joel-kaze-6a077712b/" },
      ]
    },
    {
      name: 'Sammy Ndzelen',
      role: t('ctoFounder'),
      description: t('ctoDesc'),
      image: '/team/cto.jpg',
      socials: [
        { icon: <SiXing />, link: "#" },
        { icon: <Twitter />, link: "#" },
        { icon: <Linkedin />, link: "#" },
      ]
    },
    {
      name: 'Lidia Ngo',
      role: t('hrManager'),
      description: t('dataScientistDesc'),
      image: '/team/hrManager.png',
      socials: [
        { icon: <SiXing />, link: "#" },
        { icon: <Twitter />, link: "#" },
        { icon: <Linkedin />, link: "#" },
      ]
    },
    {
      name: 'David Etoa',
      role: t('projectManager'),
      description: t('dataScientistDesc'),
      image: '/team/projectManager.png',
      socials: [
        { icon: <SiXing />, link: "#" },
        { icon: <Twitter />, link: "#" },
        { icon: <Linkedin />, link: "#" },
      ]
    },
    {
      name: 'David Etoa',
      role: t('officeManager'),
      description: t('dataScientistDesc'),
      image: '/team/officeManager.png',
      socials: [
        { icon: <SiXing />, link: "#" },
        { icon: <Twitter />, link: "#" },
        { icon: <Linkedin />, link: "#" },
      ]
    },
    {
      name: 'David Etoa',
      role: t('accountManager'),
      description: t('dataScientistDesc'),
      image: '/team/accountManager.png',
      socials: [
        { icon: <SiXing />, link: "#" },
        { icon: <Twitter />, link: "#" },
        { icon: <Linkedin />, link: "#" },
      ]
    }
  ]
  const industries = [
    { name: "Finance", icon: <DollarSign size={34} /> },
    { name: "Santé", icon: <HeartPulse size={34} /> },
    { name: "Manufacture", icon: <Factory size={34} /> },
    { name: "Agritech", icon: <Sprout size={34} /> },
    { name: "Transport publics", icon: <Bus size={34} /> },
    { name: "Commerce & e-commerce", icon: <ShoppingCart size={34} /> },
    { name: "Energies", icon: <Sun size={34} /> },
  ];

  return (
    <div className="about">
      {/* Section Hero */}
      <section className="about-hero section">
        <div className="container">
          <div className="about-hero-content">
            <h1>{t('aboutTitle')}</h1>
            <p className="about-hero-description">
              {t('aboutDescription')} 
            </p>
          </div>
        </div>
      </section>

            {/* Section Historie */}
            <section className="history-section section">
        <div className="container">
        <div className="section-header">
            <h2>{t('ourHistory')}</h2>
          </div>
          <div className="solutions-content">
            <div className="solutions-image">
              <img src="/images/team-collaboration.jpg" alt="Équipe en collaboration" />
            </div>
            <div className="solutions-text">
              <span className="solutions-subtitle">{t('ourITSoftwareSolutions')}</span>
              <h2 className="solutions-title">{t('advancedITForBusinessSuccess')}</h2>
              <div className="solutions-description">
                <p>{t('solutionsFirstParagraph')}</p>
                <p>{t('solutionsSecondParagraph')}</p>
              </div>
            </div>
          </div>

          <div className="solutions-content">
            <div className="solutions-text">
              <span className="solutions-subtitle">{t('ourITSoftwareSolutions')}</span>
              <h2 className="solutions-title">{t('advancedITForBusinessSuccess')}</h2>
              <div className="solutions-description">
                <p>{t('solutionsFirstParagraph')}</p>
                <p>{t('solutionsSecondParagraph')}</p>
              </div>
            </div>
            <div className="solutions-image">
              <img src="/images/team-collaboration.jpg" alt="Équipe en collaboration" />
            </div>
          </div>
        </div>
      </section>

      {/* Section Vision */}
      <section className="history-section section">
        <div className="container">
          <div className="section-header">
            <h2>{t('ourHistory')}</h2>
            <p>{t('historySubtitle')}</p>
          </div>
          <div className="history-content">
            <div className="history-text">
              <h3>{t('visionFromExperience')}</h3>
              <p>
                {t('visionDescription')}
              </p>
              <p>
                {t('basedInYaounde')}
              </p>
            </div>
            <div className="history-stats">
              <div className="stat-item">
                <div className="stat-number">2024</div>
                <div className="stat-label">{t('foundingYear')}</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">2</div>
                <div className="stat-label">{t('founders')}</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">{t('projectsCompleted')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Section Valeurs */}
      <section className="values-section section">
        <div className="container">
          <div className="section-header">
            <h2>{t('ourValues')}</h2>
            <p>{t('valuesSubtitle')}</p>
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
            <h2>{t('ourTeam')}</h2>
            <p>{t('teamSubtitle')}</p>
          </div>
          <div className="team-grid grid grid-2">
            {team.map((member, index) => (
              <div key={index} className="team-card card">
                <div className="team-photo">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="photo-img"
                    />
                  ) : (
                    <div className="photo-placeholder">
                      <Users size={250} />
                    </div>
                  )}
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  {/* <p className="team-description">{member.description}</p> */}
                </div>
                <div className="team-socials">
              {member.socials.map((s, i) => (
                <a key={i} href={s.link} target="_blank" rel="noreferrer">
                  {s.icon}
                </a>
              ))}
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
              <h2>{t('ourMission')}</h2>
              <p>
                {t('missionDescription')}
              </p>
              <div className="mission-points">
                <div className="mission-point">
                  <Globe size={24} />
                  <span>{t('africanContext')}</span>
                </div>
                <div className="mission-point">
                  <Award size={24} />
                  <span>{t('technicalExcellenceRec')}</span>
                </div>
                <div className="mission-point">
                  <Target size={24} />
                  <span>{t('measurableResults')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="industries-section section">
      <h2 className="industries-title">Nos industries</h2>
      <div className="industries-grid grid grid-2">
        {industries.map((item, idx) => (
          <div key={idx} className="industry-card">
            <div className="industry-icon">{item.icon}</div>
            <h3><p className="industry-name">{item.name}</p></h3>
          </div>
        ))}
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
                <ArrowRight size={20} />
              </Link>
              <Link to="/services" className="btn btn-secondary">
                {t('discoverOurServices')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About 