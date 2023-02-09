import React from 'react'
import "./Footer.scss"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-block">
          <div className="logo">
            <a href="index.html">
              <img src="./img/logo.svg" alt="logo" className="logo__img" width="140px" />
            </a>
            <nav className="footer-nav">
              <ul className="footer-nav__items">
                <li className="footer-nav__item">
                  <h3 className="footer-nav__heading">Customer Support</h3>
                </li>
                <li className="footer-nav__item">
                  <a href="" className="footer-nav__link">Shipping</a>
                </li>
                <li className="footer-nav__item">
                  <a href="" className="footer-nav__link">Free Return</a>
                </li>
                <li className="footer-nav__item">
                  <a href="" className="footer-nav__link">Track your Order</a>
                </li>
                <li className="footer-nav__item">
                  <a href="№" className="footer-nav__link">Gift Cards</a>
                </li>
              </ul>
              <ul className="footer-nav__items">
                <li className="footer-nav__item">
                  <h3 className="footer-nav__heading">Customer Support</h3>
                </li>
                <li className="footer-nav__item">
                  <a href="" className="footer-nav__link">Shipping</a>
                </li>
                <li className="footer-nav__item">
                  <a href="" className="footer-nav__link">Free Return</a>
                </li>
                <li className="footer-nav__item">
                  <a href="" className="footer-nav__link">Track your Order</a>
                </li>
                <li className="footer-nav__item">
                  <a href="№" className="footer-nav__link">Gift Cards</a>
                </li>
              </ul>
              <ul className="footer-nav__items">
                <li className="footer-nav__item">
                  <h3 className="footer-nav__heading">Customer Support</h3>
                </li>
                <li className="footer-nav__item">
                  <a href="" className="footer-nav__link">Shipping</a>
                </li>
                <li className="footer-nav__item">
                  <a href="" className="footer-nav__link">Free Return</a>
                </li>
                <li className="footer-nav__item">
                  <a href="" className="footer-nav__link">Track your Order</a>
                </li>
                <li className="footer-nav__item">
                  <a href="№" className="footer-nav__link">Gift Cards</a>
                </li>
              </ul>
            </nav>
            <p className="footer__description">
              copyright © 2022 Toutem <br />
              all rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
