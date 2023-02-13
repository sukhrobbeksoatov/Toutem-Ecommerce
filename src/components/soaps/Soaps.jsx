import React from "react";
import "./Soaps.scss";

export default function Soaps() {
  return (
    <section className="soaps-section">
      <div className="container">
        <div className="soaps">
          <div className="soaps-texts">
            <div className="soaps__bgimage"></div>
            <h2 className="soaps__title">
              Our luxury soaps are 100% natural providing nourishing benefits
              for your skin.
            </h2>
            <a href="#" className="soaps__link">
              {" "}
              SHOP ALL
            </a>
          </div>
          <div className="soaps-image">
            <img src="./img/soaps.png" alt="soaps" className="soaps__image" />
          </div>
        </div>
      </div>
    </section>
  );
}
