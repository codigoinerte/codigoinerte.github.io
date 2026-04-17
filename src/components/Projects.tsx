import { useData } from '../context/LanguageContext'

export const Projects = () => {
  const { data } = useData()
  const { projects, ui } = data

  return (
    <section id="projects" className="projects">
      <div className="projects__number">04</div>

      <div className="projects__header">
        <span className="projects__label">{ui.projects.label}</span>
        <h2 className="projects__title">{ui.projects.title}</h2>
      </div>

      <div className="projects__grid">
        {projects.map(({ number, title, description, tags, github, live }) => (
          <div className="projects__card" key={number}>
            <span className="projects__card-number">{number}</span>
            <div className="projects__card-body">
              <h3 className="projects__card-title">{title}</h3>
              <p className="projects__card-description">{description}</p>
              <div className="projects__tags">
                {tags.map(tag => (
                  <span className="projects__tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="projects__card-links">
              <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href={live} target="_blank" rel="noopener noreferrer" aria-label="Live demo">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
