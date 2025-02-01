import React from "react";
import { useState, useEffect } from "react";
import "../styles/styles.css";
import "../styles/color.css";

export default function TechStack() {
  const [techSets, setTechSets] = useState([]);

  useEffect(() => {
    fetch("./data/tech.json")
      .then((response) => response.json())
      .then((data) => setTechSets(data));
  }, []);

  return (
    <div className="tech-stack-container">
      <div className="tech-stack-line">
        <div className="tech-stack-animation">
          {techSets[0]?.techList.map((skill) => (
            <div className="tech-stack-img-box">
              <img className="tech-stack-img" src={skill.url} alt={skill.alt} />
            </div>
          ))}
        </div>
        <div className="tech-stack-animation tech-stack-animation-left">
          {techSets[0]?.techList.map((skill) => (
            <div className="tech-stack-img-box">
              <img className="tech-stack-img" src={skill.url} alt={skill.alt} />
            </div>
          ))}
        </div>
      </div>
      <div className="tech-stack-line">
        <div className="tech-stack-animation animation-reverse">
          {techSets[1]?.techList.map((skill) => (
            <div className="tech-stack-img-box">
              <img className="tech-stack-img" src={skill.url} alt={skill.alt} />
            </div>
          ))}
        </div>
        <div className="tech-stack-animation animation-reverse tech-stack-animation-right">
          {techSets[1]?.techList.map((skill) => (
            <div className="tech-stack-img-box">
              <img className="tech-stack-img" src={skill.url} alt={skill.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
