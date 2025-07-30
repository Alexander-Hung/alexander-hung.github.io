import React, { useContext } from "react";
import "./GithubProfileCard.scss";

import SocialMedia from "../../components/socialMedia/SocialMedia";
import { contactInfo, isHireable } from "../../portfolio";

import emoji from "react-easy-emoji";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function GithubProfileCard({ prof }) {
  const { isDark } = useContext(StyleContext);

  // reflect portfolio flag
  prof.hireable = isHireable ? "Yes" : "No";

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="contact">
        <h1 className="prof-title">Reach Out to me!</h1>

        <div className="row">
          {/* ---------- LEFT SIDE ---------- */}
          <div className="main-content-profile">
            <div className="blog-header">
              <p className="subTitle blog-subtitle">{contactInfo.subtitle}</p>
            </div>

            {/* bio */}
            <h2 className="bio-text">"{emoji(String(prof.bio))}"</h2>

            {/* location */}
            {prof.location && (
              <div className="location-div">
                <span className="desc-prof">
                  <svg
                    viewBox="-0.5 -2 20 19"
                    width="22"
                    height="16"
                    aria-hidden="true"
                    stroke="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
                    ></path>
                  </svg>
                  {prof.location}
                </span>
              </div>
            )}

            {/* phone / email / socials */}
            <div
              className={
                isDark ? "dark-mode contact-text-div" : "contact-text-div"
              }
            >
              {contactInfo.number && (
                <>
                  <a
                    className="contact-detail"
                    href={`tel:${contactInfo.number}`}
                  >
                    {contactInfo.number}
                  </a>
                  <br />
                  <br />
                </>
              )}

              <a
                className="contact-detail-email"
                href={`mailto:${contactInfo.email_address}`}
              >
                {contactInfo.email_address}
              </a>
              <br />
              <br />
              <SocialMedia />
            </div>
          </div>

          {/* ---------- RIGHT SIDE (JUST THE PHONE) ---------- */}
          {contactInfo.number && (
            <div className="image-content-profile">
              <span className="phone-emoji">{emoji("📞")}</span>
            </div>
          )}
        </div>
      </div>
    </Fade>
  );
}
