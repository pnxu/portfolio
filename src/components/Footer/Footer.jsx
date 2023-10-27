import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container text-center">
        <p>fcaavv@gmail.com</p>
        <a
          href="https://www.linkedin.com/in/fcaavv"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-linkedin fa-lg mx-2 text-light"></i>
        </a>
        <a
          href="https://github.com/pnxu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-github fa-lg mx-2 text-light"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
