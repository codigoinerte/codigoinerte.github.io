import { useData } from '../context/LanguageContext'

export const Services = () => {
  const { data } = useData()
  const { services, ui } = data

  return (
    <section id="services" className="services">
      <div className="services__number">02</div>

      <div className="services__header">
        <span className="services__label">{ui.services.label}</span>
        <h2 className="services__title">{ui.services.title}</h2>
      </div>

      <div className="services__grid">
        {services.map(({ icon, title, description }) => (
          <div className="services__card" key={title}>
            <div className="services__icon">
              <i className={icon}></i>
            </div>
            <h3 className="services__card-title">{title}</h3>
            <p className="services__card-description">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
