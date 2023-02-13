import React from "react";
import "./Blog.scss";

export default function Blog() {
  return (
    <section className="blog-section">
      <div className="container">
        <div className="blog">
          <div className="blog-texts">
            <h2 className="blog__title">BLOG</h2>
          </div>
          <ul className="blog-cards">
            <li className="blog-card">
              <img src="./img/blog-img.png" alt="oil" className="blog__img" />
              <div className="blog-card__info info-card">
                <h3 className="info-card__heading">
                  How to create your own essential oil diffuser blends
                </h3>
                <p className="info-card__text">
                  As you begin creating your own diffuser blends, it’s important
                  to keep a few ...
                </p>
              </div>
            </li>
            <li className="blog-card">
              <img src="./img/blog-img.png" alt="oil" className="blog__img" />
              <div className="blog-card__info info-card">
                <h3 className="info-card__heading">
                  How to create your own essential oil diffuser blends
                </h3>
                <p className="info-card__text">
                  As you begin creating your own diffuser blends, it’s important
                  to keep a few ...
                </p>
              </div>
            </li>
            <li className="blog-card">
              <img src="./img/blog-img.png" alt="oil" className="blog__img" />
              <div className="blog-card__info info-card">
                <h3 className="info-card__heading">
                  How to create your own essential oil diffuser blends
                </h3>
                <p className="info-card__text">
                  As you begin creating your own diffuser blends, it’s important
                  to keep a few ...
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
