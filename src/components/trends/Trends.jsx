import React from 'react'
import "./Trends.scss"

export default function Trends() {
  return (
    <section className="trends-section">
      <div className="container">
        <div className="trends">
          <div className="trends-backgimg"></div>
          <div className="trends-block">
            <div className="trends-texts">
              <h2 className="trends__title">Trends</h2>
              <a href="#" className="trends__link"> SHOP ALL </a>
            </div>
            <div className="trends-cards">
              <div className="first-card">
                <img src="./img/basket.png" alt="aroma" width="375px" className="first-card__img" />
                <div className="first-card__texts">
                  <div className="first-card__heading">
                    <h4 className="first-card__title">Basket INNER BEAUTY</h4>
                    <span className="first-card__price">$64</span>
                  </div>
                  <div className="first-card__description">
                    <p className="first-card__text">
                      Original product comes in three styles of color, usb
                      charger
                    </p>
                    <button className="first-card__btn">
                      <img src="./img/add-card.svg" width="45px" alt="add card" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="second-card">
                <img src="./img/soap-bar.png" alt="aroma" width="375px" className="second-card__img" />
                <div className="second-card__texts">
                  <div className="second-card__heading">
                    <h4 className="second-card__title">
                      Uplift Handcrafted Soap Bar
                    </h4>
                    <span className="second-card__price">$7</span>
                  </div>
                  <div className="second-card__description">
                    <p className="second-card__text">
                      Beautiful decorative object, perfumes the space with
                      your favorite fragrance.
                    </p>
                    <button className="second-card__btn">
                      <img src="./img/add-card.svg" width="45px" alt="add card" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="trends-carusel">
            <ul className="carusel__items">
              <li className="carusel__item">
                <button className="carusel__btn"></button>
              </li>
              <li className="carusel__item">
                <button className="carusel__btn"></button>
              </li>
              <li className="carusel__item">
                <button className="carusel__btn"></button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
