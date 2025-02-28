import "./App.css";
import "./styles/styles.css";
import Footer from "./components/Footer";
import ProjectsGrid from "./components/ProjectsGrid";
import Resume from "./components/Resume";
import Home from "./pages/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useState, useEffect } from "react";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("./data/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []); // only do it once when we load it first time

  let topBtn = document.getElementById("topBtn");
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      topBtn !== null &&
      (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
    ) {
      topBtn.style.display = "flex";
    } else {
      topBtn.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div className="App">
      {
        <Router>
          <div className="container">
            <button
              id="topBtn"
              className="text-white"
              onClick={topFunction}
              title="Go to top"
            >
              <svg
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                fill="#ffffff"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill="#ffffff"
                    d="M572.235 205.282v600.365a30.118 30.118 0 1 1-60.235 0V205.282L292.382 438.633a28.913 28.913 0 0 1-42.646 0 33.43 33.43 0 0 1 0-45.236l271.058-288.045a28.913 28.913 0 0 1 42.647 0L834.5 393.397a33.43 33.43 0 0 1 0 45.176 28.913 28.913 0 0 1-42.647 0l-219.618-233.23z"
                  ></path>
                </g>
              </svg>
            </button>
            <Routes>
              <Route path="/" element={<Home projects={projects} />}></Route>
              <Route path="/resume" element={<Resume />}></Route>
              <Route
                path="/projects"
                element={<ProjectsGrid projects={projects} />}
              ></Route>
            </Routes>
          </div>

          <Footer />
        </Router>
      }
    </div>
  );
}

export default App;
