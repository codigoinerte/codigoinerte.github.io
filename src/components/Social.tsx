import { FC } from 'react'
import { useData } from '../context/LanguageContext'

export const Social: FC = () => {
  const { data } = useData()

  return (
    <ul className="social-media">
      {data.social.map(({ label, url, icon }) => (
        <li key={label}>
          <a href={url} target="_blank" rel="noopener noreferrer" aria-label={label}>
            <i className={icon}></i>
          </a>
        </li>
      ))}
    </ul>
  )
}
