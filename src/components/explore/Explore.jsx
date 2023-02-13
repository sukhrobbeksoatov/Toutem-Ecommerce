import React from "react";
import "./Explore.scss";

export default function Explore() {
  return (
    <section className="explore-section">
      <div className="container">
        <div className="explore">
          <div className="explore-image">
            <div className="explore-blob"></div>
            <img
              src="./img/explore-img.png"
              alt="toutem"
              width="601px"
              className="explore__img"
            />
          </div>
          <div className="explore-texts">
            <h2 className="explore__title">
              Improve your well-being with Aromatherapy
            </h2>
            <p className="explore__description">
              Diffusing can be exactly what you need to add purpose and focus to
              your daily tasks. We've got tons of fun diffuser blends, with
              scents to suit every mood, day and situation.
            </p>
            <div className="explore-link">
              <a href="#" className="explore__link">
                Explore the Collection
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
