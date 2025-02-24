import React from "react";
import { useState, useEffect } from "react";
import "../styles/styles.css";
import "../styles/color.css";

import { HashLink } from "react-router-hash-link";

export default function Footer() {
  const [social, setSocial] = useState([]);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    fetch("./data/social.json")
      .then((response) => response.json())
      .then((data) => setSocial(data));
  }, []);

  return (
    <footer className="footer mt-xxl px-lg py-lg">
      {/* logos are from here: https://www.svgrepo.com/ */}
      <div className="footer-line px py">
        {social.map((item, idx) => (
          <a
            className="footer-logo-link"
            key={idx}
            target={item.file ? null : "_blank"}
            rel={item.file ? null : "noopener noreferrer"}
            href={item.url}
            download={item.file ? "Resume-Valentina Volgina" : null}
          >
            <img
              className="footer-logo"
              src={`images/${item.filled}`}
              alt={`${item.name} logo`}
            />
          </a>
        ))}
      </div>

      <div className="footer-line px py">
        <nav className="text-light">
          <ul className="m-0">
            <li className="mx-lg">
              <HashLink
                to="/#"
                className="underline-link-box text-light flex-column"
              >
                <div className="underline-link-text text-p footer-nav-item">
                  Home
                </div>
                <div></div>
              </HashLink>
            </li>
            <li className="mx-lg">
              <HashLink
                to="/resume#"
                className="underline-link-box text-light flex-column"
              >
                <div className="underline-link-text text-p footer-nav-item">
                  Resume
                </div>
                <div></div>
              </HashLink>
            </li>
            <li className="mx-lg">
              <HashLink
                to="/projects#"
                className="underline-link-box text-light flex-column"
              >
                <div className="underline-link-text text-p footer-nav-item">
                  Projects
                </div>
                <div></div>
              </HashLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer-line px py">
        <p className="footer-text text-small text-white">
          © {currentYear} Valentina, All rights reserved.
        </p>
      </div>
    </footer>
  );
}
