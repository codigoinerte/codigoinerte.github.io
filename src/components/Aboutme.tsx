import React from 'react'

export const Aboutme = () => {
  return (
        <section className="about">
        <div className="about__number">01</div>

        <div className="about__image">
          <img src="./src/assets/img/profile.webp" alt="Fredy Martinez" />
        </div>

        <div className="about__content">
          <span className="about__label">Discover</span>
          <h2 className="about__title">About Me</h2>
          <p className="about__description">
            My name is Fredy Martinez. I'm a Freelance Full Stack Developer based in Peru.
            I'm very passionate and dedicated to my work. With several years of experience
            as a professional developer, I have acquired the skills necessary to build great
            and premium websites.
          </p>

          <div className="about__info">
            <div className="about__info-item">
              <span className="about__info-label">Name:</span>
              <span>Fredy Martinez</span>
            </div>
            <div className="about__info-item">
              <span className="about__info-label">Freelance:</span>
              <span>Available</span>
            </div>
            <div className="about__info-item">
              <span className="about__info-label">Experience:</span>
              <span>5+ Years</span>
            </div>
            <div className="about__info-item">
              <span className="about__info-label">GitHub:</span>
              <span>codigoinerte</span>
            </div>
            <div className="about__info-item">
              <span className="about__info-label">Stack:</span>
              <span>React, PHP, React Native</span>
            </div>
            <div className="about__info-item">
              <span className="about__info-label">LinkedIn:</span>
              <span>fredy-martinez-bustamante</span>
            </div>
          </div>

          <a href="#" className="about__btn">Download CV</a>
        </div>
      </section>
  )
}
