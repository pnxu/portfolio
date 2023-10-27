import React from "react";
import PropTypes from "prop-types";
import "./project-card.css";

function ProjectCard({
  title,
  description,
  technologies,
  imageSrc,
  repoLink,
  websiteLink,
}) {
  const openRepositoryLink = () => {
    window.open(repoLink, "_blank");
  };

  const openWebsiteLink = () => {
    window.open(websiteLink, "_blank");
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow bg-light h-100">
        <img src={imageSrc} className="card-img-top" alt={title} />
        <div className="card-body custom-card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text small">{technologies}</p>
          <div className="d-flex justify-content-between">
            <button
              className="btn btn-dark custom-btn"
              onClick={openRepositoryLink}
            >
              Repository
            </button>
            <button
              className="btn btn-dark custom-btn"
              onClick={openWebsiteLink}
            >
              Website
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.string.isRequired,
  imageSrc: PropTypes.string,
  repoLink: PropTypes.string,
  websiteLink: PropTypes.string,
};

export default ProjectCard;
