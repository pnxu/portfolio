import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
