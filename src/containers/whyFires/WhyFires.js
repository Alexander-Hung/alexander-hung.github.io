import React from "react";
import Header from "../../components/header/Header";
import GuideBody from "../../components/whyFiresGuide/guideBody/GuideBody";
import GuideHeader from "../../components/whyFiresGuide/guideHeader/GuideHeader";
import "./WhyFires.scss";
import Footer from "../../components/footer/Footer";
import ScrollToTopButton from "../topbutton/Top"

function WhyFires() {
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

export default WhyFires;
