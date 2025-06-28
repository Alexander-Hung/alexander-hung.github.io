import React from "react";
import Header from "../../components/header/Header";
import "./About.scss";
import Education from "../education/Education";
import WorkExperience from "../workExperience/WorkExperience";
import Achievement from "../achievement/Achievement";
import Blogs from "../blogs/Blogs";
import Talks from "../talks/Talks";
import Twitter from "../twitter-embed/twitter";
import Podcast from "../podcast/Podcast";
import Profile from "../profile/Profile";
import Greeting from "../greeting/Greeting";

function About() {
  return (
    <>
      <Header />

      <main className="about">
        <Greeting />
        <Education />
        <WorkExperience />
        <Achievement />
        <Blogs />
        <Talks />
        <Twitter />
        <Podcast />
        <Profile />
      </main>
    </>
  );
}

export default About;
