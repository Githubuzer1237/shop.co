import React from 'react'
import s from './Header.module.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
    <header className={s.header}>
      <div className="container">
        <nav className={s.nav}>
          <div className={s.logo}>
            <Link className={s.logo} to={'/'}>SHOP.CO</Link>
          </div>

          <div className={s.links}>
              <Link to={'/'}>Shop ▼</Link>
              <Link to={'/'}>On Sale</Link>
              <Link to={'/'}>New Arrivals</Link>
              <Link to={'/'}>Brands</Link>
            </div>
            <input type="text" className={s.search} placeholder='Search for products...'/>
            <div className={s.prof}>
              <img src="/cart.png" alt="" className={s.cart} />
              <img src="/profile.png" alt="" />
            </div>
        </nav>
      </div>
    </header>
    </>
  )
}

export default Header