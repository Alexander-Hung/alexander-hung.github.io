import React, { useContext } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";

import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button      from "../../components/button/Button";
import { greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting({ prof }) {
  const { isDark } = useContext(StyleContext);

  /* Skip rendering entirely if the portfolio flag is off */
  if (!greeting.displayGreeting) return null;

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          {/* ── text column ── */}
          <div className="greeting-text-div">
            <h1 className={`${isDark ? "dark-mode" : ""} greeting-text`}>
              {greeting.title} <span className="wave-emoji">{emoji("👋")}</span>
            </h1>

            <p
              className={
                isDark
                  ? "dark-mode greeting-text-p"
                  : "greeting-text-p subTitle"
              }
            >
              {greeting.subTitle}
            </p>

            <SocialMedia />

            <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              {greeting.resumeLink ? (
                <Button
                  text="Download my resume"
                  href={require("./resume.pdf")}
                  download="Resume.pdf"
                  newTab
                />
              ) : null}
            </div>
          </div>

          {/* ── image column ── */}
          <div className="greeting-image-div">
            <div className="image-content-profile">
              <img
                src={prof.avatarUrl}
                alt={prof.name}
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
