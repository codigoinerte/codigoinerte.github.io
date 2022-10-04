import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Social } from './Social';

export const Navbar = () => {
    const [toogleMenu, setToogleMenu] = useState(false);

    const onToogleMenu = () => {
        setToogleMenu(!toogleMenu);
    }
  return (
    <>
        <div> 
            <div className={ toogleMenu ? 'menu open' :  'menu' }>
                <button className='close-menu'
                        onClick={onToogleMenu}><i className="fa-solid fa-xmark"></i></button>
                <nav>
                    <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Work</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                    </ul>
                </nav> 

                <Social />
            </div>           
            <a  onClick={onToogleMenu}
                className="header-menu-toggle" 
                href="#">
                <span className="header-menu-icon"></span>
            </a>                       
        </div>
    </>
  )
}
