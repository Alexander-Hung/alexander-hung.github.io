import React from "react";
import Header from "../../components/header/Header";
import "./Project.scss";
import Projects from "../projects/Projects";
import StartupProject from "../StartupProjects/StartupProject";
import Profile from "../profile/Profile";           // ← create if you want custom styling

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
