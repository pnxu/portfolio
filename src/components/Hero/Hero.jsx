import React from "react";
import { IconBrandLinkedin } from "@tabler/icons-react";
import { IconBrandGithub } from "@tabler/icons-react";
import "./hero.css";

function Hero() {
  return (
    <section id="hero" className="hero d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 order-md-2 text-center">
            <div className="container-sm">
              <img
                src="../../../public/assets/self.jpeg"
                alt="Imagen"
                className="rounded-circle img-fluid w-50 h-50"
              />
            </div>
          </div>
          <div className="col-md-6 order-md-1">
            <div className="container mt-2">
              <h1 className="display-4 font-weight-bolder">
                Front-End Developer
              </h1>

              <p>
                Hi, I'm Francisca Vega. A Front-End Developer based in Santiago,
                Chile.
              </p>
              <div className="container d-flex justify-content-center">
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
              <div className="container mt-4">
                <img
                  src="../../../public/assets/html-5.png"
                  alt="HTML"
                  className="img-responsive mx-2 img-fluid img-thumbnail"
                />
                <img
                  src="../../../public/assets/css-3.png"
                  alt="CSS"
                  className="img-responsive mx-2 img-fluid img-thumbnail"
                />
                <img
                  src="../../../public/assets/react.png"
                  alt="React"
                  className="img-responsive mx-2 img-fluid img-thumbnail"
                />
                <img
                  src="../../../public/assets/js.png"
                  alt="JavaScript"
                  className="img-responsive mx-2 img-fluid img-thumbnail"
                />
                <img
                  src="../../../public/assets/firebase.png"
                  alt="Firebase"
                  className="img-responsive mx-2 img-fluid img-thumbnail"
                />
                <img
                  src="../../../public/assets/figma.png"
                  alt="Figma"
                  className="img-responsive mx-2 img-fluid img-thumbnail"
                />
                <img
                  src="../../../public/assets/bootstrap.png"
                  alt="Bootstrap"
                  className="img-responsive mx-2 img-fluid img-thumbnail"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
