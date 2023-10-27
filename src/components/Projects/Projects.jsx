import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "./data";

function Projects() {
  return (
    <section id="projects" className="bg-light p-4">
      <div className="container ">
        <h2 className="text-center mb-5">Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              imageSrc={project.imageSrc}
              repoLink={project.repoLink}
              websiteLink={project.websiteLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
