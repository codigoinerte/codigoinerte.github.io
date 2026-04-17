import { FC, useState } from 'react'
import { Social } from './Social';

export const Navbar: FC = () => {
    const [toogleMenu, setToogleMenu] = useState(false);

    const onToogleMenu = () => {
        setToogleMenu(!toogleMenu);
    }

  return (
    <>
      <div>
        <div className={toogleMenu ? 'menu open' : 'menu'}>
          <button
            className='close-menu'
            onClick={onToogleMenu}>
            <i className="fa-solid fa-xmark"></i>
          </button>
          <nav>
            <svg className="notch-corner" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
              <path d="M 0 0 L 20 0 L 20 20 Q 20 0 0 0 Z" fill="#181f27"/>
            </svg>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
            <svg className="notch-corner notch-corner--right" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
              <path d="M 20 0 L 0 0 L 0 20 Q 0 0 20 0 Z" fill="#181f27"/>
            </svg>
          </nav>

          <Social />
        </div>
        <button
          type='button'
          onClick={onToogleMenu}
          className="header-menu-toggle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu-icon lucide-menu"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>
        </button>
      </div>
    </>
  )
}
