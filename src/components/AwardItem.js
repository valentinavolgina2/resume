import React from "react";
import "../styles/styles.css";
import "../styles/text.css";
import "../styles/spacing.css";
import "../styles/color.css";

export default function AwardItem({ award }) {
  return (
    <div key={award.id} className="resume-item my text-light">
      <div className="no-wrap">
        <p className="resume-item-dates text-p">{award.date}</p>
      </div>
      <div>
        <p className="resume-item-title title-h3">
          {award.title} ({award.company})
        </p>
        <p className="resume-item-location text-p text-grey">
          {award.location}
        </p>
        <p className="award-description text-p my">{award.description}</p>
      </div>
    </div>
  );
}
