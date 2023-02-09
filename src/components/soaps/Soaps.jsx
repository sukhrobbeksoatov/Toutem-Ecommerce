import React from 'react'
import "./Soaps.scss"

export default function Soaps() {
  return (
    <section class="soaps-section">
      <div class="container">
        <div class="soaps">
          <div class="soaps-texts">
            <div class="soaps__bgimage"></div>
            <h2 class="soaps__title">
              Our luxury soaps are 100% natural providing nourishing benefits
              for your skin.
            </h2>
            <a href="#" class="soaps__link"> SHOP ALL</a>
          </div>
          <div class="soaps-image">
            <img src="./img/soaps.png" alt="soaps" class="soaps__image" />
          </div>
        </div>
      </div>
    </section>
  )
}
