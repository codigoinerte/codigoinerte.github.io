import { FC } from 'react'

export const Social: FC = () => {
  return (
    <>
      <ul className="social-media">
        <li>
          <a href="https://twitter.com/codigoinerte" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/codigoinerte" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/fredy-martinez-bustamante/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </li>
      </ul>
    </>
  )
}
