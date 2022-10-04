import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from './Navbar'

export const Header = () => {
  return (    
      
        <div className="header container-fluid">
            <div className="logo">
                <Link to="/">Fredy</Link>
            </div>

            <Navbar />

        </div>
              
  )
}
