import React, { useState } from "react";
import "./ProjectPresent.scss";

function ProjectPresent({ projects }) {
  const [index, setIndex] = useState(0);
  const n = projects.length;

  const prev = () => setIndex((index - 1 + n) % n);
  const next = () => setIndex((index + 1) % n);

  const { image, title, description, github, website } = projects[index];

  return (
    <section className="project-present">
      {/* ─── image + arrows ─────────────────────────────────────────── */}
      <div className="image-wrapper">
        <button className="nav left" onClick={prev} aria-label="Previous">
          &#10094;
        </button>

        <img src={image} alt={title} />

        <button className="nav right" onClick={next} aria-label="Next">
          &#10095;
        </button>
      </div>

      {/* ─── text + buttons ─────────────────────────────────────────── */}
      <div className="info">
        <h2>{title}</h2>
        <p>{description}</p>

        <div className="buttons">
          <a href={github} className="btn" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={website} className="btn" target="_blank" rel="noopener noreferrer">
            Website
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectPresent;
