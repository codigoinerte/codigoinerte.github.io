import { useData } from '../context/LanguageContext'

export const Aboutme = () => {
  const { data } = useData()
  const { personal, ui } = data

  return (
    <section id="about" className="about">
      <div className="about__number">01</div>

      <div className="about__image">
        <img src={`/public/profile.webp`} alt={personal.name} />
      </div>

      <div className="about__content">
        <span className="about__label">{ui.about.label}</span>
        <h2 className="about__title">{ui.about.title}</h2>
        <p className="about__description">{personal.description}</p>

        <div className="about__info">
          <div className="about__info-item">
            <span className="about__info-label">{ui.about.fields.name}:</span>
            <span>{personal.name}</span>
          </div>
          <div className="about__info-item">
            <span className="about__info-label">{ui.about.fields.location}:</span>
            <span>{personal.location}</span>
          </div>
          <div className="about__info-item">
            <span className="about__info-label">{ui.about.fields.experience}:</span>
            <span>{personal.experience}</span>
          </div>
          <div className="about__info-item">
            <span className="about__info-label">{ui.about.fields.freelance}:</span>
            <span>{personal.freelance}</span>
          </div>
          <div className="about__info-item">
            <span className="about__info-label">{ui.about.fields.email}:</span>
            <span>{personal.email}</span>
          </div>
          <div className="about__info-item">
            <span className="about__info-label">{ui.about.fields.phone}:</span>
            <span>{personal.phone}</span>
          </div>
        </div>

        <a href={personal.cvUrl} target="_blank" rel="noopener noreferrer" className="about__btn">
          {ui.about.downloadCV}
        </a>
      </div>
    </section>
  )
}
