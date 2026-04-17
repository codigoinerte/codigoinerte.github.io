const skills = [
  { icon: 'devicon-html5-plain', label: 'HTML5', color: '#e34f26' },
  { icon: 'devicon-css3-plain', label: 'CSS3', color: '#1572b6' },
  { icon: 'devicon-javascript-plain', label: 'JavaScript', color: '#f7df1e' },
  { icon: 'devicon-typescript-plain', label: 'TypeScript', color: '#3178c6' },
  { icon: 'devicon-react-original', label: 'React', color: '#61dafb' },
  { icon: 'devicon-nextjs-plain', label: 'Next.js', color: '#fff' },
  { icon: 'devicon-php-plain', label: 'PHP', color: '#777bb4' },
  { icon: 'devicon-laravel-plain', label: 'Laravel', color: '#ff2d20' },
  { icon: 'devicon-nodejs-plain', label: 'Node.js', color: '#339933' },
  { icon: 'devicon-sass-original', label: 'Sass', color: '#cc6699' },
  { icon: 'devicon-git-plain', label: 'Git', color: '#f05032' },
  { icon: 'devicon-github-original', label: 'GitHub', color: '#fff' },
]

export const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills__number">03</div>

      <div className="skills__header">
        <span className="skills__label">What I Know</span>
        <h2 className="skills__title">My Skills</h2>
      </div>

      <div className="skills__grid">
        {skills.map(({ icon, label, color }) => (
          <div className="skills__card" key={label}>
            <i className={`${icon} colored skills__icon`} style={{ color }} />
            <span className="skills__name">{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
