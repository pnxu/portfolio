import React from "react";
import "./hero.css";

function Hero() {
  return (
    <section id="hero" className="hero d-flex align-items-center text-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 order-md-2">
            <div className="hero-image">
              <img
                src="../../../public/assets/self.jpeg"
                alt="Imagen"
                className="rounded-circle img-fluid w-50 h-50"
              />
            </div>
          </div>
          <div className="col-md-6 order-md-1">
            <div className="hero-content mt-2">
              <h1>Front-End Developer</h1>
              <p>
                Hi, I'm Francisca Vega. A Front-End Developer based in Santiago,
                Chile.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
