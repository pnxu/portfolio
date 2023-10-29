import React from "react";
import { IconBrandLinkedin } from "@tabler/icons-react";
import { IconBrandGithub } from "@tabler/icons-react";

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
          <IconBrandLinkedin
            size={36}
            color="white"
            stroke={2}
            strokeLinejoin="miter"
          />
        </a>
        <a
          href="https://github.com/pnxu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandGithub
            size={36}
            color="white"
            stroke={2}
            strokeLinejoin="miter"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
