import React from "react";
import "./Bestsellers.scss";

export default function Categories() {
  return (
    <section className="bestsellers-section">
      <div className="container">
        <div className="bestsellers">
          <div className="bestsellers-backgimg"></div>
          <div className="bestsellers-block">
            <div className="bestsellers-texts">
              <h2 className="bestsellers__title">Bestsellers</h2>
              <a href="#" className="bestsellers__link">
                {" "}
                SHOP ALL{" "}
              </a>
            </div>
            <div className="bestsellers-cards">
              <div className="first-card">
                <img
                  src="./img/aroma.png"
                  alt="aroma"
                  className="first-card__img"
                />
                <div className="first-card__texts">
                  <div className="first-card__heading">
                    <h4 className="first-card__title">Aroma Diffuser</h4>
                    <span className="first-card__price">$20</span>
                  </div>
                  <div className="first-card__description">
                    <p className="first-card__text">
                      Original product comes in three styles of color, usb
                      charger
                    </p>
                    <button className="first-card__btn">
                      <img
                        src="./img/add-card.svg"
                        width="45px"
                        alt="add card"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className="second-card">
                <img
                  src="./img/lux-aroma.png"
                  alt="aroma"
                  className="second-card__img"
                />
                <div className="second-card__texts">
                  <div className="second-card__heading">
                    <h4 className="second-card__title">Lux Aroma Diffuser</h4>
                    <span className="second-card__price">$15</span>
                  </div>
                  <div className="second-card__description">
                    <p className="second-card__text">
                      Beautiful decorative object, perfumes the space with your
                      favorite fragrance.
                    </p>
                    <button className="second-card__btn">
                      <img
                        src="./img/add-card.svg"
                        width="45px"
                        alt="add card"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bessellers-carusel">
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
  );
}
