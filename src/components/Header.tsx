import { FC } from 'react'
import { Navbar } from './Navbar'

export const Header: FC = () => {
  return (
    <div className="header container-fluid">
      {/* <div className="logo">
        <Link to="/">Fredy</Link>
      </div> */}
      <div className='header__separate'></div>
      <Navbar />
    </div>
  )
}
