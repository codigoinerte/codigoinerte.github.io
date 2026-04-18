import { useData } from '../context/LanguageContext'

export const Footer = () => {
  const { data } = useData()
  const { personal, social, ui } = data

  return (
    <footer className="footer">
      <div className="footer__cta">
        <a href={`mailto:${personal.email}`} className="footer__email">
          {personal.email}
        </a>
      </div>

      <div className="footer__social">
        {social.map(({ label, url, icon }) => (
          <a key={label} href={url} target="_blank" rel="noopener noreferrer" aria-label={label}>
            <i className={icon}></i>
          </a>
        ))}
      </div>

      <p className="footer__copy">
        © {new Date().getFullYear()} {personal.name}. All rights reserved.
      </p>
    </footer>
  )
}
