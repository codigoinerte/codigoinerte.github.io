export const Services = () => {
  return (
    <section id="services" className="services">
      <div className="services__number">02</div>

      <div className="services__header">
        <span className="services__label">What I Do</span>
        <h2 className="services__title">My Services</h2>
      </div>

      <div className="services__grid">
        <div className="services__card">
          <div className="services__icon">
            <i className="fas fa-code"></i>
          </div>
          <h3 className="services__card-title">Frontend Development</h3>
          <p className="services__card-description">
            Building modern, responsive user interfaces with React, TypeScript and Next.js.
            Focus on performance, accessibility and clean component architecture.
          </p>
        </div>

        <div className="services__card">
          <div className="services__icon">
            <i className="fas fa-globe"></i>
          </div>
          <h3 className="services__card-title">Web Applications</h3>
          <p className="services__card-description">
            Full-stack web solutions using PHP and Laravel on the backend, integrated with
            REST APIs, e-commerce platforms and corporate portals.
          </p>
        </div>

        <div className="services__card">
          <div className="services__icon">
            <i className="fas fa-mobile-alt"></i>
          </div>
          <h3 className="services__card-title">Mobile Development</h3>
          <p className="services__card-description">
            Cross-platform mobile applications built with React Native, delivering native
            experiences for both iOS and Android from a single codebase.
          </p>
        </div>
      </div>
    </section>
  )
}
