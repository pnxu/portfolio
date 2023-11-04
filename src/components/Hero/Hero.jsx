import React from "react";
import { IconBrandLinkedin } from "@tabler/icons-react";
import { IconBrandGithub } from "@tabler/icons-react";
import "./hero.css";

function Hero() {
  return (
    <section id="hero" className="hero d-flex py-5 align-items-center">
      <div className="container">
        <div className="text-center">
          <img
            src="../../../public/assets/self.jpeg"
            alt="self"
            className="rounded-circle img-fluid custom-img border border-secondary"
          />
          <h1 className="display-4 mt-3">Front-End Developer</h1>
          <p>
            Hi, I'm Francisca Vega. A Front-End Developer based in Santiago,
            Chile.
          </p>
          <div className="mt-3">
            <a
              href="https://www.linkedin.com/in/fcaavv"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <IconBrandLinkedin
                size={36}
                color="black"
                stroke={2}
                strokeLinejoin="miter"
              />
            </a>
            <a
              href="https://github.com/pnxu"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <IconBrandGithub
                size={36}
                color="black"
                stroke={2}
                strokeLinejoin="miter"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
