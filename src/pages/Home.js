import React from "react";
import { useState, useEffect } from "react";
import "../styles/styles.css";
import "../styles/text.css";
import "../styles/spacing.css";
import "../styles/grid.css";
import "../styles/color.css";

import TechStack from "../components/TechStack";
import SeattleSunSeeker from "../components/SeattleSunSeeker";
import { Link } from "react-router-dom";
// import social from "../data/social.json";

export default function Home({ projects }) {
  const [stat, setStat] = useState([]);
  const [social, setSocial] = useState([]);

  const getLevelText = (level) => {
    switch (level) {
      case "easy":
        return "Easy";
      case "med":
        return "Med.";
      case "hard":
        return "Hard";
      default:
        return "";
    }
  };

  useEffect(() => {
    fetch("./data/stat.json")
      .then((response) => response.json())
      .then((data) => setStat(data));

    fetch("./data/social.json")
      .then((response) => response.json())
      .then((data) => setSocial(data));
  }, []);

  return (
    <div className="home-container">
      <div className="home-title-section">
        <div className="home-title text-light">
          <h1 className="title-h1">Hey, I’m Valentina</h1>
          <h1 className="title-h1">I build cool web things!</h1>
          <a
            className="underline-link-box text-contrast"
            href="mailto:valentina.volgina2@gmail.com"
          >
            <div className="underline-link-text text-p">Open to work</div>
            <div></div>
            <div className="underline-link-arrow my-auto px">
              <svg
                viewBox="0 0 15 14"
                fill="#00a1a1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.000487994 7.43744C0.000487984 7.18884 0.0992433 6.95042 0.275029 6.77464C0.450814 6.59885 0.68923 6.5001 0.937827 6.5001L11.7978 6.5001L7.77291 2.47704C7.68576 2.38989 7.61663 2.28643 7.56946 2.17256C7.52229 2.05869 7.49802 1.93665 7.49802 1.8134C7.49802 1.69015 7.52229 1.56811 7.56946 1.45424C7.61663 1.34038 7.68576 1.23692 7.77291 1.14977C7.86006 1.06261 7.96352 0.993484 8.07739 0.946319C8.19125 0.899153 8.31329 0.874878 8.43654 0.874878C8.55979 0.874878 8.68183 0.899153 8.7957 0.946319C8.90957 0.993484 9.01303 1.06261 9.10018 1.14977L14.7242 6.7738C14.8115 6.86087 14.8808 6.96431 14.928 7.07819C14.9753 7.19207 14.9996 7.31415 14.9996 7.43744C14.9996 7.56073 14.9753 7.68281 14.928 7.79669C14.8808 7.91057 14.8115 8.014 14.7242 8.10107L9.10018 13.7251C9.01303 13.8123 8.90957 13.8814 8.7957 13.9286C8.68183 13.9757 8.55979 14 8.43654 14C8.3133 14 8.19125 13.9757 8.07739 13.9286C7.96352 13.8814 7.86006 13.8123 7.77291 13.7251C7.5969 13.5491 7.49802 13.3104 7.49802 13.0615C7.49802 12.9382 7.5223 12.8162 7.56946 12.7023C7.61663 12.5885 7.68576 12.485 7.77291 12.3978L11.7978 8.37478L0.937828 8.37478C0.68923 8.37478 0.450814 8.27602 0.275029 8.10024C0.0992433 7.92445 0.000488005 7.68604 0.000487994 7.43744Z"
                  fill="#00a1a1"
                ></path>
              </svg>
            </div>
          </a>
        </div>
        <div className="home-title text-lg">
          <p className="my-xl">
            A passionate full-stack software engineer with experience in
            personal projects, startups, and corporate environments. I love
            turning ideas into functional, user-friendly web applications.
          </p>
        </div>
        <div className="home-title-logo-container">
          {social.map((item) => (
            <a
              key={item.id}
              className="home-title-button"
              target={item.file ? null : "_blank"}
              rel={item.file ? null : "noopener noreferrer"}
              href={item.url}
              download={item.file ? "Resume-Valentina Volgina" : null}
            >
              <img
                className="home-title-logo"
                src={`images/${item.filled}`}
                alt={`${item.name} logo`}
              />
            </a>
          ))}
        </div>
      </div>

      <div className="home-grid mb-xxl">
        <div className="grid-box grid-stack">
          <div className="grid-box-content px py">
            <div className="grid-box-title py-xs px">
              <div>
                <img src="/images/stack.svg" alt="" />
              </div>
              <div className="grid-box-title-text text-p">Tech stack</div>
            </div>
            <TechStack></TechStack>
          </div>
        </div>
        <div className="grid-box grid-certificates grid-box-link">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/valentinavolgina2/resume"
            className="home-title-link w-100 h-100"
          >
            <div className="grid-box-content p-0">
              <div className="two-line-button text-white">
                <div className="two-line-button-text-box px py">
                  <div className="textbox-inner">
                    <p className="button-sub-text text-small weight-700">
                      This website
                    </p>
                    <p className="button-main-text text-p">Source code</p>
                  </div>
                </div>
                <div className="arrow-container">
                  <div className="arrow pr-lg pl-lg">
                    <svg
                      viewBox="0 0 15 14"
                      fill="#ffffff"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.000487994 7.43744C0.000487984 7.18884 0.0992433 6.95042 0.275029 6.77464C0.450814 6.59885 0.68923 6.5001 0.937827 6.5001L11.7978 6.5001L7.77291 2.47704C7.68576 2.38989 7.61663 2.28643 7.56946 2.17256C7.52229 2.05869 7.49802 1.93665 7.49802 1.8134C7.49802 1.69015 7.52229 1.56811 7.56946 1.45424C7.61663 1.34038 7.68576 1.23692 7.77291 1.14977C7.86006 1.06261 7.96352 0.993484 8.07739 0.946319C8.19125 0.899153 8.31329 0.874878 8.43654 0.874878C8.55979 0.874878 8.68183 0.899153 8.7957 0.946319C8.90957 0.993484 9.01303 1.06261 9.10018 1.14977L14.7242 6.7738C14.8115 6.86087 14.8808 6.96431 14.928 7.07819C14.9753 7.19207 14.9996 7.31415 14.9996 7.43744C14.9996 7.56073 14.9753 7.68281 14.928 7.79669C14.8808 7.91057 14.8115 8.014 14.7242 8.10107L9.10018 13.7251C9.01303 13.8123 8.90957 13.8814 8.7957 13.9286C8.68183 13.9757 8.55979 14 8.43654 14C8.3133 14 8.19125 13.9757 8.07739 13.9286C7.96352 13.8814 7.86006 13.8123 7.77291 13.7251C7.5969 13.5491 7.49802 13.3104 7.49802 13.0615C7.49802 12.9382 7.5223 12.8162 7.56946 12.7023C7.61663 12.5885 7.68576 12.485 7.77291 12.3978L11.7978 8.37478L0.937828 8.37478C0.68923 8.37478 0.450814 8.27602 0.275029 8.10024C0.0992433 7.92445 0.000488005 7.68604 0.000487994 7.43744Z"
                        fill="#ffffff"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="grid-box grid-featured grid-box-link">
          <a className="text-light" href="#featured-article">
            <div className="grid-box-content px py">
              <div className="featured-description">
                <img
                  className="featured-logo my"
                  src="/images/sss.png"
                  alt=""
                />
                <p className="text-p">
                  Web application that helps to find outdoor places in WA state
                  with quick weather look up.
                </p>
              </div>
              <div className="featured-container">
                <div className="featured-container-inner">
                  <h3 className="mb-lg">Tell your honey where it's sunny!</h3>
                  <div className="featured-container-button-box">
                    <div className="featured-container-button mx-auto py-xs px">
                      Seek the sun
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="grid-box grid-education grid-box-link">
          <Link to="/resume#education" className="home-title-link w-100 h-100">
            <div className="grid-box-content px py grid-education-text text-light weight-700">
              <p className="text-p">COMPUTER SCIENCE</p>
              <p className="text-p">MATHEMATICS</p>
            </div>
          </Link>
        </div>
        <div className="grid-box grid-resume grid-box-link">
          <Link to="/resume" className="home-title-link w-100 h-100">
            <div className="grid-box-content p-0">
              <div className="two-line-button text-white">
                <div className="two-line-button-text-box px py">
                  <div className="textbox-inner">
                    <p className="button-sub-text text-small weight-700">
                      Ready to work
                    </p>
                    <p className="button-main-text text-p">
                      Check Out My Resume
                    </p>
                  </div>
                </div>
                <div className="arrow-container">
                  <div className="arrow pr-lg pl-lg">
                    <svg
                      viewBox="0 0 15 14"
                      fill="#ffffff"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.000487994 7.43744C0.000487984 7.18884 0.0992433 6.95042 0.275029 6.77464C0.450814 6.59885 0.68923 6.5001 0.937827 6.5001L11.7978 6.5001L7.77291 2.47704C7.68576 2.38989 7.61663 2.28643 7.56946 2.17256C7.52229 2.05869 7.49802 1.93665 7.49802 1.8134C7.49802 1.69015 7.52229 1.56811 7.56946 1.45424C7.61663 1.34038 7.68576 1.23692 7.77291 1.14977C7.86006 1.06261 7.96352 0.993484 8.07739 0.946319C8.19125 0.899153 8.31329 0.874878 8.43654 0.874878C8.55979 0.874878 8.68183 0.899153 8.7957 0.946319C8.90957 0.993484 9.01303 1.06261 9.10018 1.14977L14.7242 6.7738C14.8115 6.86087 14.8808 6.96431 14.928 7.07819C14.9753 7.19207 14.9996 7.31415 14.9996 7.43744C14.9996 7.56073 14.9753 7.68281 14.928 7.79669C14.8808 7.91057 14.8115 8.014 14.7242 8.10107L9.10018 13.7251C9.01303 13.8123 8.90957 13.8814 8.7957 13.9286C8.68183 13.9757 8.55979 14 8.43654 14C8.3133 14 8.19125 13.9757 8.07739 13.9286C7.96352 13.8814 7.86006 13.8123 7.77291 13.7251C7.5969 13.5491 7.49802 13.3104 7.49802 13.0615C7.49802 12.9382 7.5223 12.8162 7.56946 12.7023C7.61663 12.5885 7.68576 12.485 7.77291 12.3978L11.7978 8.37478L0.937828 8.37478C0.68923 8.37478 0.450814 8.27602 0.275029 8.10024C0.0992433 7.92445 0.000488005 7.68604 0.000487994 7.43744Z"
                        fill="#ffffff"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="grid-box grid-projects">
          <div className="grid-projects-line px py">
            <p className="projects-title title-h2">My Links</p>
            <p className="projects-description text-p mb">
              A full-stack Flutter web application for links organization.
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/valentinavolgina2/links_app"
              className="underline-link-box text-contrast"
            >
              <div className="underline-link-text text-p">GitHub repo</div>
              <div></div>
              <div className="underline-link-arrow my-auto px">
                <svg
                  viewBox="0 0 15 14"
                  fill="#00a1a1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.000487994 7.43744C0.000487984 7.18884 0.0992433 6.95042 0.275029 6.77464C0.450814 6.59885 0.68923 6.5001 0.937827 6.5001L11.7978 6.5001L7.77291 2.47704C7.68576 2.38989 7.61663 2.28643 7.56946 2.17256C7.52229 2.05869 7.49802 1.93665 7.49802 1.8134C7.49802 1.69015 7.52229 1.56811 7.56946 1.45424C7.61663 1.34038 7.68576 1.23692 7.77291 1.14977C7.86006 1.06261 7.96352 0.993484 8.07739 0.946319C8.19125 0.899153 8.31329 0.874878 8.43654 0.874878C8.55979 0.874878 8.68183 0.899153 8.7957 0.946319C8.90957 0.993484 9.01303 1.06261 9.10018 1.14977L14.7242 6.7738C14.8115 6.86087 14.8808 6.96431 14.928 7.07819C14.9753 7.19207 14.9996 7.31415 14.9996 7.43744C14.9996 7.56073 14.9753 7.68281 14.928 7.79669C14.8808 7.91057 14.8115 8.014 14.7242 8.10107L9.10018 13.7251C9.01303 13.8123 8.90957 13.8814 8.7957 13.9286C8.68183 13.9757 8.55979 14 8.43654 14C8.3133 14 8.19125 13.9757 8.07739 13.9286C7.96352 13.8814 7.86006 13.8123 7.77291 13.7251C7.5969 13.5491 7.49802 13.3104 7.49802 13.0615C7.49802 12.9382 7.5223 12.8162 7.56946 12.7023C7.61663 12.5885 7.68576 12.485 7.77291 12.3978L11.7978 8.37478L0.937828 8.37478C0.68923 8.37478 0.450814 8.27602 0.275029 8.10024C0.0992433 7.92445 0.000488005 7.68604 0.000487994 7.43744Z"
                    fill="#00a1a1"
                  ></path>
                </svg>
              </div>
            </a>
          </div>
          <div className="grid-projects-line px py">
            <p className="projects-title title-h2">Ask Me</p>
            <p className="projects-description text-p">
              A Ruby on Rails web application, a clone of Askme.fm.
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/valentinavolgina2/askme"
              className="underline-link-box text-contrast"
            >
              <div className="underline-link-text text-p">GitHub repo</div>
              <div></div>
              <div className="underline-link-arrow my-auto px">
                <svg
                  viewBox="0 0 15 14"
                  fill="#00a1a1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.000487994 7.43744C0.000487984 7.18884 0.0992433 6.95042 0.275029 6.77464C0.450814 6.59885 0.68923 6.5001 0.937827 6.5001L11.7978 6.5001L7.77291 2.47704C7.68576 2.38989 7.61663 2.28643 7.56946 2.17256C7.52229 2.05869 7.49802 1.93665 7.49802 1.8134C7.49802 1.69015 7.52229 1.56811 7.56946 1.45424C7.61663 1.34038 7.68576 1.23692 7.77291 1.14977C7.86006 1.06261 7.96352 0.993484 8.07739 0.946319C8.19125 0.899153 8.31329 0.874878 8.43654 0.874878C8.55979 0.874878 8.68183 0.899153 8.7957 0.946319C8.90957 0.993484 9.01303 1.06261 9.10018 1.14977L14.7242 6.7738C14.8115 6.86087 14.8808 6.96431 14.928 7.07819C14.9753 7.19207 14.9996 7.31415 14.9996 7.43744C14.9996 7.56073 14.9753 7.68281 14.928 7.79669C14.8808 7.91057 14.8115 8.014 14.7242 8.10107L9.10018 13.7251C9.01303 13.8123 8.90957 13.8814 8.7957 13.9286C8.68183 13.9757 8.55979 14 8.43654 14C8.3133 14 8.19125 13.9757 8.07739 13.9286C7.96352 13.8814 7.86006 13.8123 7.77291 13.7251C7.5969 13.5491 7.49802 13.3104 7.49802 13.0615C7.49802 12.9382 7.5223 12.8162 7.56946 12.7023C7.61663 12.5885 7.68576 12.485 7.77291 12.3978L11.7978 8.37478L0.937828 8.37478C0.68923 8.37478 0.450814 8.27602 0.275029 8.10024C0.0992433 7.92445 0.000488005 7.68604 0.000487994 7.43744Z"
                    fill="#00a1a1"
                  ></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
        <div className="grid-box grid-all-projects grid-box-link">
          <Link
            to="/projects"
            className="home-title-link text-contrast w-100 h-100"
          >
            <div className="grid-box-content px py grid-all-projects-text">
              <p className="x-y-center text-p">ALL PROJECTS</p>
            </div>
          </Link>
        </div>

        {stat.map((el) => (
          <div key={el.id} className={`grid-box ${el.gridClass} px py`}>
            <div className="grid-leetcode-line">
              <div className="grid-leetcode-colm stat-total title-h3 mtr-auto weight-700">
                Total Solved
              </div>
              <div className="grid-leetcode-colm">
                <div className="grid-box-title py-xs px">
                  <div>
                    <img src={`/images/${el.logo}`} alt={`${el.name} logo`} />
                  </div>
                  <div className="grid-box-title-text text-p">{el.name}</div>
                </div>
              </div>
            </div>

            <div className="grid-leetcode-line">
              <div className="grid-leetcode-colm stat-total-problems text-p text-blue">
                {el.total} Problems
              </div>

              {el.additional.type === "text" ? (
                <div className="grid-leetcode-colm stat-total-beats text-p">
                  {el.additional.text}
                </div>
              ) : (
                <div className="grid-leetcode-colm stat-total-beats">
                  <a
                    className="underline-link-box text-contrast"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={el.additional.link}
                  >
                    <div className="underline-link-text text-p">
                      {el.additional.text}
                    </div>
                    <div></div>
                    <div className="underline-link-arrow my-auto px">
                      <svg
                        viewBox="0 0 15 14"
                        fill="#00a1a1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.000487994 7.43744C0.000487984 7.18884 0.0992433 6.95042 0.275029 6.77464C0.450814 6.59885 0.68923 6.5001 0.937827 6.5001L11.7978 6.5001L7.77291 2.47704C7.68576 2.38989 7.61663 2.28643 7.56946 2.17256C7.52229 2.05869 7.49802 1.93665 7.49802 1.8134C7.49802 1.69015 7.52229 1.56811 7.56946 1.45424C7.61663 1.34038 7.68576 1.23692 7.77291 1.14977C7.86006 1.06261 7.96352 0.993484 8.07739 0.946319C8.19125 0.899153 8.31329 0.874878 8.43654 0.874878C8.55979 0.874878 8.68183 0.899153 8.7957 0.946319C8.90957 0.993484 9.01303 1.06261 9.10018 1.14977L14.7242 6.7738C14.8115 6.86087 14.8808 6.96431 14.928 7.07819C14.9753 7.19207 14.9996 7.31415 14.9996 7.43744C14.9996 7.56073 14.9753 7.68281 14.928 7.79669C14.8808 7.91057 14.8115 8.014 14.7242 8.10107L9.10018 13.7251C9.01303 13.8123 8.90957 13.8814 8.7957 13.9286C8.68183 13.9757 8.55979 14 8.43654 14C8.3133 14 8.19125 13.9757 8.07739 13.9286C7.96352 13.8814 7.86006 13.8123 7.77291 13.7251C7.5969 13.5491 7.49802 13.3104 7.49802 13.0615C7.49802 12.9382 7.5223 12.8162 7.56946 12.7023C7.61663 12.5885 7.68576 12.485 7.77291 12.3978L11.7978 8.37478L0.937828 8.37478C0.68923 8.37478 0.450814 8.27602 0.275029 8.10024C0.0992433 7.92445 0.000488005 7.68604 0.000487994 7.43744Z"
                          fill="#00a1a1"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </div>
              )}
            </div>
            <div className="grid-leetcode-line">
              {el.problems.map((problem) => (
                <div
                  key={problem.id}
                  className={`grid-leetcode-colm width-30 stat-level-box weight-700 py-xxs px-sm stat-level-${problem.level} text-dark`}
                >
                  <div className="grid-leetcode-level stat-level text-small">
                    {getLevelText(problem.level)}
                  </div>
                  <div className="grid-leetcode-level stat-solved text-small">
                    {problem.solved}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div id="featured-article" className="home-featured-section">
        <div className="article-divider mb-lg text-small">
          <div className="article-divider-text">
            <span className="text-blink">Spotlight</span>
          </div>
        </div>
        <h2 className="title-h2 text-white my-auto">Seattle Sun Seeker</h2>

        <SeattleSunSeeker></SeattleSunSeeker>
      </div>
    </div>
  );
}
