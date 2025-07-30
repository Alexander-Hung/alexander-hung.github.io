import React from "react";
import "./GuideHeader.scss";
import {Fade} from "react-reveal";

export default function GuideHeader() {
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="guide-body">
        <div style={{justifyItems: "center"}}><h1>Why-fires</h1></div>
        <p>A full-stack application that uses NASA FIRMS MODIS and GADM boundary data to visualize to provide insightful and statistical analysis of wildfires.</p>
      </div>
    </Fade>
  );
}
