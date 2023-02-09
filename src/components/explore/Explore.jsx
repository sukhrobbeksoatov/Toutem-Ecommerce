import React from 'react'
import "./Explore.scss"

export default function Explore() {
  return (
    <section class="explore-section">
      <div class="container">
        <div class="explore">
          <div class="explore-image">
            <div class="explore-blob"></div>
            <img src="./img/explore-img.png" alt="toutem" width="601px" class="explore__img" />
          </div>
          <div class="explore-texts">
            <h2 class="explore__title">
              Improve your well-being with Aromatherapy
            </h2>
            <p class="explore__description">
              Diffusing can be exactly what you need to add purpose and focus
              to your daily tasks. We've got tons of fun diffuser blends, with
              scents to suit every mood, day and situation.
            </p>
            <div class="explore-link">
              <a href="#" class="explore__link">Explore the Collection</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
