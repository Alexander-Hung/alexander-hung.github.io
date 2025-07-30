import React from "react";
import Header from "../../components/header/Header";
import GuideBody from "../../components/portfolioGuide/guideBody/GuideBody";
import GuideHeader from "../../components/portfolioGuide/guideHeader/GuideHeader";
import "./PortfolioGuide.scss";
import Footer from "../../components/footer/Footer";
import ScrollToTopButton from "../topbutton/Top"

function PortfolioGuide() {
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

export default PortfolioGuide;
