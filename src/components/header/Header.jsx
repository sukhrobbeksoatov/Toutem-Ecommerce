import React from 'react'
import "./Header.scss"

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-block">
          <nav className="nav">
            <div className="logo">
              <h1 className="logo__heading">
                <a href="index.html" className="logo__link">
                  <img src="./img/logo.svg" alt="logo" className="logo__img" width="140px" />
                </a>
              </h1>
            </div>
            <input type="checkbox" id="hamburger" />
            <label for="hamburger" className="hamburger">
              <i className="bx bx-menu" id="menu"></i>
              <i className="bx bx-x" id="close"></i>
            </label>
            <ul className="nav__items">
              <li className="nav__item">
                <a href="#" className="nav__link">home</a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">about us</a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">shop</a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">contact</a>
              </li>
            </ul>
            <div className="add-menu">
              <div className="shopping">
                <img src="./img/shopping-bag-icon.svg" alt="shopping bag" width="14px" className="shopping__img" />
              </div>
              <div className="search">
                <img src="./img/search-icon.svg" alt="search-icon" width="16px" className="search__img" />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
