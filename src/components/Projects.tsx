const projects = [
  {
    number: '01',
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution with product catalog, shopping cart and payment integration.',
    tags: ['React', 'Laravel', 'MySQL'],
    github: '#',
    live: '#',
  },
  {
    number: '02',
    title: 'Real Estate Portal',
    description: 'Property listing platform with advanced search filters, map integration and contact forms.',
    tags: ['React', 'PHP', 'REST API'],
    github: '#',
    live: '#',
  },
  {
    number: '03',
    title: 'Corporate Website',
    description: 'Responsive corporate site with CMS integration, optimized for performance and SEO.',
    tags: ['Next.js', 'TypeScript', 'SCSS'],
    github: '#',
    live: '#',
  },
  {
    number: '04',
    title: 'Mobile App',
    description: 'Cross-platform mobile application for iOS and Android with real-time notifications.',
    tags: ['React Native', 'TypeScript'],
    github: '#',
    live: '#',
  },
]

export const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects__number">04</div>

      <div className="projects__header">
        <span className="projects__label">My Work</span>
        <h2 className="projects__title">Projects</h2>
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
