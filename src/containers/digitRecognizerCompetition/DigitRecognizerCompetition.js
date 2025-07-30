import React from "react";
import Header from "../../components/header/Header";
import GuideBody from "../../components/digitRecognizerGuide/guideBody/GuideBody";
import GuideHeader from "../../components/digitRecognizerGuide/guideHeader/GuideHeader";
import "./DigitRecognizerCompetition.scss";
import Footer from "../../components/footer/Footer";
import ScrollToTopButton from "../topbutton/Top"

function DigitRecognizerCompetition() {
  return (
    <>
      <Header />

      <main className="about">
        <GuideHeader />
        <GuideBody />
        <ScrollToTopButton />
      </main>

      <Footer />
    </>
  );
}

export default DigitRecognizerCompetition;
