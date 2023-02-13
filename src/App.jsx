import React from "react";

/* Components */
import Categories from "./components/categories/Categories";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Explore from "./components/explore/Explore";
import Bestsellers from "./components/bestsellers/Bestsellers";
import Soaps from "./components/soaps/Soaps";
import Trends from "./components/trends/Trends";
import Blog from "./components/blog/Blog";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <Explore />
      <Categories />
      <Bestsellers />
      <Soaps />
      <Trends />
      <Blog />
      <Footer />
    </main>
  );
}

export default App;
