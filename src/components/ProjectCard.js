import React from "react";
import "../styles/styles.css";
import "../styles/text.css";
import "../styles/spacing.css";
import "../styles/color.css";

export default function ProjectCard({ project }) {
  const handleError = (e) => {
    e.target.src = "images/default.jpg";
  };

  return (
    <div key={project.id} className="project-card text-light">
      <img
        className="project-card-img"
        src={`images/${project.image}`}
        alt={project.name}
        onError={handleError}
      />
      <div className="project-card-info px py">
        <p className="project-card-title text-p weight-700">{project.year}</p>
        <h3 className="project-card-title title-h3 weight-700 line-height">
          {project.name}
        </h3>
        <p className="project-card-text text-p line-height">
          {project.description}
        </p>

        <div>
          {project.github && (
            <span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={project.github}
              >
                <img
                  className="project-card-logo"
                  src="images/github.svg"
                  alt="Github logo"
                />
              </a>
            </span>
          )}
          {project.website && (
            <span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={project.website}
              >
                <img
                  className="project-card-logo"
                  src="images/web.svg"
                  alt="Github logo"
                />
              </a>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
