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
          Frontend Developer with 5+ years of experience in web development, specialized in React
          and modern technologies like Laravel. Worked on e-commerce projects, real estate portals
          and corporate solutions, integrating APIs and optimizing performance. Experience with Git,
          GitHub, Netlify deployments and agile methodologies (Scrum).
        </p>

        <div className="about__info">
          <div className="about__info-item">
            <span className="about__info-label">Name:</span>
            <span>Fredy Martinez</span>
          </div>
          <div className="about__info-item">
            <span className="about__info-label">Location:</span>
            <span>Lima, Peru</span>
          </div>
          <div className="about__info-item">
            <span className="about__info-label">Experience:</span>
            <span>5+ Years</span>
          </div>
          <div className="about__info-item">
            <span className="about__info-label">Freelance:</span>
            <span>Available</span>
          </div>
          <div className="about__info-item">
            <span className="about__info-label">Email:</span>
            <span>fmartinez.bpe@gmail.com</span>
          </div>
          <div className="about__info-item">
            <span className="about__info-label">Phone:</span>
            <span>(+51) 930299310</span>
          </div>
        </div>

        <a href="./src/assets/cv/fredy-martinez-cv.pdf" target="_blank" rel="noopener noreferrer" className="about__btn">
          Download CV
        </a>
      </div>
    </section>
  )
}
