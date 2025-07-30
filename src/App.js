import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import About from "./containers/about/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StyleProvider } from "./contexts/StyleContext";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Project from "./containers/project/Project";
import WhyFires from "./containers/whyFires/WhyFires";
import DigitRecognizerCompetition from "./containers/digitRecognizerCompetition/DigitRecognizerCompetition";
import PortfolioGuide from "./containers/portfolioGuide/PortfolioGuide";

function App() {
  // ---- theme state lifted here so *every* page shares it ----
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const changeTheme = () => setIsDark(!isDark);

  return (
    <div className={isDark ? "dark-mode" : undefined}>
      <StyleProvider value={{ isDark, changeTheme }}>
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/why-fires" element={<WhyFires />} />
            <Route path="/Digit-Recognizer-Competition" element={<DigitRecognizerCompetition />} />
            <Route path="/alexander-hung.github.io" element={<PortfolioGuide />} />
          </Routes>
        </Router>
      </StyleProvider>
    </div>
  );
}

export default App;
