import React from "react";
import "../styles/styles.css";

export default function Header() {
  return (
    <div className="header">
      <img className="logo" src="logo.png" alt="resume" />
      <h2 className="app-subtitle">My resume summary.</h2>
    </div>
  );
}
