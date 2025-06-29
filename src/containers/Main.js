import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext.js";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";
import ProjectPresent from "../components/projectPresent/ProjectPresent";

const projects = [
  {
    image: "/assets/why-fires.png",
    title: "Why-Fires",
    description: "End-to-end wildfire-risk prediction platform.",
    github: "https://github.com/yourname/why-fires",
    website: "https://why-fires.com"
  },
  {
    image: "/assets/ring-runner.png",
    title: "Ring Runner",
    description: "Auto-play Flappy-Bird-style mini-game built in Godot.",
    github: "https://github.com/yourname/ring-runner",
    website: "https://ring-runner.com"
  }
];

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <Header />
            <h1>Unfinished, under development</h1>
            <ProjectPresent projects={projects} />
            <Profile />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
