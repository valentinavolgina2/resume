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

  return (
    <div className="App">
      {
        <Router>
          <div className="container">
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
