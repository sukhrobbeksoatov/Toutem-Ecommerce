import React from 'react'
import "./Trends.scss"

export default function Trends() {
  return (
    <section class="trends-section">
      <div class="container">
        <div class="trends">
          <div class="trends-backgimg"></div>
          <div class="trends-block">
            <div class="trends-texts">
              <h2 class="trends__title">Trends</h2>
              <a href="#" class="trends__link"> SHOP ALL </a>
            </div>
            <div class="trends-cards">
              <div class="first-card">
                <img src="./img/basket.png" alt="aroma" width="375px" class="first-card__img" />
                <div class="first-card__texts">
                  <div class="first-card__heading">
                    <h4 class="first-card__title">Basket INNER BEAUTY</h4>
                    <span class="first-card__price">$64</span>
                  </div>
                  <div class="first-card__description">
                    <p class="first-card__text">
                      Original product comes in three styles of color, usb
                      charger
                    </p>
                    <button class="first-card__btn">
                      <img src="./img/add-card.svg" width="45px" alt="add card" />
                    </button>
                  </div>
                </div>
              </div>
              <div class="second-card">
                <img src="./img/soap-bar.png" alt="aroma" width="375px" class="second-card__img" />
                <div class="second-card__texts">
                  <div class="second-card__heading">
                    <h4 class="second-card__title">
                      Uplift Handcrafted Soap Bar
                    </h4>
                    <span class="second-card__price">$7</span>
                  </div>
                  <div class="second-card__description">
                    <p class="second-card__text">
                      Beautiful decorative object, perfumes the space with
                      your favorite fragrance.
                    </p>
                    <button class="second-card__btn">
                      <img src="./img/add-card.svg" width="45px" alt="add card" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="trends-carusel">
            <ul class="carusel__items">
              <li class="carusel__item">
                <button class="carusel__btn"></button>
              </li>
              <li class="carusel__item">
                <button class="carusel__btn"></button>
              </li>
              <li class="carusel__item">
                <button class="carusel__btn"></button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
