import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <Hero />
      <Projects />
    </div>
  );
}

export default Home;
