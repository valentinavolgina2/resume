import React from "react";
import "../styles/styles.css";
import "../styles/text.css";
import "../styles/spacing.css";
import "../styles/color.css";
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid({ projects }) {
  return (
    <div>
      <div className="projects-grid">
        <div className="projects-title">
          <h1 className="title-h1 mb-lg">
            Building Blocks: My Software Journey
          </h1>
          <p className="text-p text-light line-height my">
            My side projects cover both back-end and front-end development and I
            create them as I explore and learn new tools.
          </p>
          <p className="text-p text-light line-height my">
            Take a look at my diverse software projects, ranging from simple
            landing pages to full-stack published applications, using a variety
            of programming languages and technologies.
          </p>
        </div>
        {projects?.map((project) => (
          <ProjectCard project={project} key={project.id}></ProjectCard>
        ))}
      </div>
    </div>
  );
}
