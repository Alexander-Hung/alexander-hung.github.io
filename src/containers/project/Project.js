import React from "react";
import Header from "../../components/header/Header";
import "./Project.scss";
import Projects from "../projects/Projects";
import StartupProject from "../StartupProjects/StartupProject";
import Footer from "../../components/footer/Footer";
import ScrollToTopButton from "../topbutton/Top"

function Project() {
  return (
    <>
      <Header />

      <main className="project">
        <Projects />
        <StartupProject />
        <ScrollToTopButton />
      </main>

      <Footer />
    </>
  );
}

export default Project;
