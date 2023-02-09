import React from "react";
import "./Bestsellers.scss"

export default function Categories() {
  return (
    <section class="bestsellers-section">
      <div class="container">
        <div class="bestsellers">
          <div class="bestsellers-backgimg"></div>
          <div class="bestsellers-block">
            <div class="bestsellers-texts">
              <h2 class="bestsellers__title">Bestsellers</h2>
              <a href="#" class="bestsellers__link"> SHOP ALL </a>
            </div>
            <div class="bestsellers-cards">
              <div class="first-card">
                <img src="./img/aroma.png" alt="aroma" class="first-card__img" />
                <div class="first-card__texts">
                  <div class="first-card__heading">
                    <h4 class="first-card__title">Aroma Diffuser</h4>
                    <span class="first-card__price">$20</span>
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
                <img src="./img/lux-aroma.png" alt="aroma" class="second-card__img" />
                <div class="second-card__texts">
                  <div class="second-card__heading">
                    <h4 class="second-card__title">Lux Aroma Diffuser</h4>
                    <span class="second-card__price">$15</span>
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
          <div class="bessellers-carusel">
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