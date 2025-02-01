import React from "react";
import "../styles/styles.css";
import "../styles/text.css";
import "../styles/spacing.css";
import "../styles/color.css";

export default function EducationItem({ education }) {
  return (
    <div key={education.id} className="resume-item my text-light">
      <div>
        <p className="resume-item-dates text-p">{education.date}</p>
      </div>
      <div>
        <p className="resume-item-title title-h3">{education.degree}</p>
        <p className="resume-item-location text-p text-grey">
          {education.school} ({education.location})
        </p>
        {education.awards?.map((award) => (
          <p className="education-award text-p my">{award}</p>
        ))}
      </div>
    </div>
  );
}
