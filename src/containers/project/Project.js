import React from "react";
import Header from "../../components/header/Header";
import "./Project.scss";
import Projects from "../projects/Projects";
import StartupProject from "../StartupProjects/StartupProject";
import Profile from "../profile/Profile";

function Project() {
  return (
    <>
      <Header />

      <main className="project">
        <Projects />
        <StartupProject />
        <Profile />
      </main>
    </>
  );
}

export default Project;
