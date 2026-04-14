import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from './Navbar'

export const Header: FC = () => {
  return (
    <div className="header container-fluid">
      <div className="logo">
        <Link to="/">Fredy</Link>
      </div>

      <Navbar />
    </div>
  )
}
