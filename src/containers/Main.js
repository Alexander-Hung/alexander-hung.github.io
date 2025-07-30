import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";
import SplashScreen from "./splashScreen/SplashScreen";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext.js";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";
import ProjectPresent from "../components/projectPresent/ProjectPresent";

const projects = [
  {
    image: "/assets/Why-fires.png",
    title: "Why-Fires",
    description: "A full-stack application that uses NASA FIRMS MODIS and GADM boundary data to visualize to provide insightful and statistical analysis of wildfires.",
    github: "https://github.com/Alexander-Hung/Why-fires",
    website: "https://why-fires.com"
  },
  {
    image: "/assets/Digit-Recognizer-Competition.png",
    title: "Digit Recognizer",
    description: "Kaggle’s Digit Recognizer challenges you to build an MNIST handwritten-digit classifier for leaderboard ranking.",
    github: "https://github.com/Alexander-Hung/Digit-Recognizer-Competition",
    website: "https://www.kaggle.com/competitions/digit-recognizer"
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
            <ProjectPresent projects={projects} />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
