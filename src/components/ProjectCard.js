import React from "react";
import "../styles/styles.css";
import "../styles/text.css";
import "../styles/spacing.css";
import "../styles/color.css";

export default function ProjectCard({ project }) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  return (
    <div
      key={project.id}
      className="project-card text-light px py"
      onClick={() => openRepoinNewTab(project.github)}
    >
      <div className="project-card-info">
        <h3 className="project-card-title title-h3 weight-700 line-height">
          <svg
            aria-hidden="true"
            className="project-card-logo mr"
            role="img"
            viewBox="0 0 12 16"
            fill="#ffffff"
          >
            <path
              fillRule="evenodd"
              d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
              fill="#ffffff"
            ></path>
          </svg>
          {project.name}
        </h3>
        <p className="project-card-text text-p line-height mt">
          {project.description}
        </p>
        <p className="project-card-title text-grey text-p mt">
          Created in {project.year}
        </p>
      </div>
      <div className="project-card-links">
        <div className="project-card-links-box">
          {project.technologies?.map((tech, index) => (
            <img
              key={`project${project.id}_tech${index}`}
              className="project-card-logo"
              src={`images/projects_tech/${tech}.svg`}
              alt={tech}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
