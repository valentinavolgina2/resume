import React from "react";
import "../styles/styles.css";
import "../styles/text.css";
import "../styles/spacing.css";
import "../styles/color.css";

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import WorkItem from "./WorkItem";
import AwardItem from "./AwardItem";
import EducationItem from "./EducationItem";

export default function Resume() {
  // to-do add edit data functional
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);
  const [awards, setAwards] = useState([]);
  const [education, setEducation] = useState([]);

  const { hash } = useLocation();

  useEffect(() => {
    fetch("./data/experience.json")
      .then((response) => response.json())
      .then((data) => setExperience(data));

    fetch("./data/skills.json")
      .then((response) => response.json())
      .then((data) => setSkills(data));

    fetch("./data/awards.json")
      .then((response) => response.json())
      .then((data) => setAwards(data));

    fetch("./data/education.json")
      .then((response) => response.json())
      .then((data) => setEducation(data));

    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 500); // Delay execution slightly
    }
  }, [hash]);

  return (
    <div className="resume-container">
      <div className="resume-title mb-xxl">
        <h1 className="title-h1 text-light">Valentina</h1>
        <p className="text-p text-light">Software Engineer in USA</p>
        <div className="featured-article-link-container mt-lg mb-xl">
          <a
            className="featured-article-button px py-sm"
            href="/data/resume.pdf"
            download="Resume-Valentina Volgina"
          >
            <img
              className="featured-article-logo"
              src="images/download.svg"
              alt="web logo"
            />
            <span className="text-light text-small ml-sm">Download</span>
          </a>
        </div>
      </div>

      <h2 className="resume-subtitle my-lg title-h2">Work Experience</h2>
      <div className="mb-lg">
        {experience.map((work) => (
          <WorkItem work={work} key={work.id}></WorkItem>
        ))}
      </div>
      <h2 id="techSkills" className="resume-subtitle title-h2">
        Technical skills
      </h2>
      <div className="mb-lg">
        {skills.map((skill) => (
          <div key={skill.id} className="text-p my-sm">
            <b>{skill.title}:</b> {skill.description}
          </div>
        ))}
      </div>
      <h2 className="resume-subtitle title-h2">Leadership and Awards</h2>
      <div className="mb-lg">
        {awards.map((award) => (
          <AwardItem award={award} key={award.id}></AwardItem>
        ))}
      </div>
      <h2 id="education" className="resume-subtitle title-h2">
        Education
      </h2>
      <div className="mb-lg">
        {education.map((item) => (
          <EducationItem education={item} key={item.id}></EducationItem>
        ))}
      </div>
      <h2 className="resume-subtitle title-h2">Certificates</h2>
      <div className="mb-lg">
        <p className="text-p my-sm">The Web Developer Bootcamp(Udemy), 2021</p>
        <p className="text-p my-sm">React 18 Course (Udemy), 2025</p>
      </div>
    </div>
  );
}
