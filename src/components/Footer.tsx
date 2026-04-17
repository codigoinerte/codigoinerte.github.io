export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__cta">
        <span>Available for freelance work</span>
        <a href="mailto:fmartinez.bpe@gmail.com" className="footer__email">
          fmartinez.bpe@gmail.com
        </a>
      </div>

      <div className="footer__social">
        <a href="https://github.com/codigoinerte" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/fredy-martinez-bustamante" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>

      <p className="footer__copy">
        © {new Date().getFullYear()} Fredy Martinez. All rights reserved.
      </p>
    </footer>
  )
}
