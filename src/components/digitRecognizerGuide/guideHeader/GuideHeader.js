import React from "react";
import "./GuideHeader.scss";
import {Fade} from "react-reveal";

export default function GuideHeader() {
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="guide-body">
        <div style={{justifyItems: "center"}}><h1>Digit Recognizer Competition</h1></div>
        <p></p>
      </div>
    </Fade>
  );
}
