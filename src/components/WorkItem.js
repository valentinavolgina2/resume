import React from "react";
import "../styles/styles.css";
import "../styles/text.css";
import "../styles/spacing.css";
import "../styles/color.css";

export default function WorkItem({ work }) {
  return (
    <div key={work.id} className="resume-item my text-light">
      <div>
        <p className="resume-item-dates text-p">
          {work.start} - {work.end}
        </p>
      </div>
      <div>
        <p className="resume-item-title title-h3">
          {work.title} at {work.company}
        </p>
        <p className="resume-item-location text-p text-grey">{work.location}</p>
        <ul className="m-0 work-results my text-p">
          {work.results.map((result, index) => (
            <li key={index} className="p-0 my-sm">
              {result}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
