import React from 'react'
import "./Hero.scss"

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero">
          <div className="hero-texts">
            <h2 className="hero__title">
              Pear kiwi<br />
              & Mint
            </h2>
            <p className="hero__description">
              They say that home is where the heart is. Perhaps that’s why a
              feeling of loss is so apparent when you are far from the ones
              you love.
            </p>
          </div>
          <div className="hero-img">
            <img src="./img/cosmetic-bottle.png" alt="cosmetic bottle" className="hero__img" />
            <div className="hero-ellipse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
