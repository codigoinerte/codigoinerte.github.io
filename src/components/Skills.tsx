import { useData } from '../context/LanguageContext'

export const Skills = () => {
  const { data } = useData()
  const { skills, ui } = data

  return (
    <section id="skills" className="skills">
      <div className="skills__number">03</div>

      <div className="skills__header">
        <span className="skills__label">{ui.skills.label}</span>
        <h2 className="skills__title">{ui.skills.title}</h2>
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
