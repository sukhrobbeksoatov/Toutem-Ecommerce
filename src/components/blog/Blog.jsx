import React from 'react'
import "./Blog.scss"

export default function Blog() {
  return (
    <section class="blog-section">
      <div class="container">
        <div class="blog">
          <div class="blog-texts">
            <h2 class="blog__title">BLOG</h2>
          </div>
          <ul class="blog-cards">
            <li class="blog-card">
              <img src="./img/blog-img.png" alt="oil" class="blog__img" />
              <div class="blog-card__info info-card">
                <h3 class="info-card__heading">
                  How to create your own essential oil diffuser blends
                </h3>
                <p class="info-card__text">
                  As you begin creating your own diffuser blends, it’s
                  important to keep a few ...
                </p>
              </div>
            </li>
            <li class="blog-card">
              <img src="./img/blog-img.png" alt="oil" class="blog__img" />
              <div class="blog-card__info info-card">
                <h3 class="info-card__heading">
                  How to create your own essential oil diffuser blends
                </h3>
                <p class="info-card__text">
                  As you begin creating your own diffuser blends, it’s
                  important to keep a few ...
                </p>
              </div>
            </li>
            <li class="blog-card">
              <img src="./img/blog-img.png" alt="oil" class="blog__img" />
              <div class="blog-card__info info-card">
                <h3 class="info-card__heading">
                  How to create your own essential oil diffuser blends
                </h3>
                <p class="info-card__text">
                  As you begin creating your own diffuser blends, it’s
                  important to keep a few ...
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
