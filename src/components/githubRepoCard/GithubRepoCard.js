import React, { useState } from "react";
import "./GithubRepoCard.scss";
import { Fade } from "react-reveal";
import { formatFileSizeDisplay } from "../../utils";

export default function GithubRepoCard({ repo, isDark, imgSrc }) {
  const [src, setSrc] = useState(imgSrc);

  /** Open GitHub repo in a new tab */
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL in ${name} is undefined`);
      return;
    }
    const win = window.open(url, "_blank", "noopener,noreferrer");
    if (win) win.focus();
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div
        className={isDark ? "dark-card-mode repo-card-div" : "repo-card-div"}
        key={repo.node.id}
      >
        {/* ─── optional custom screenshot ───────────────────────── */}
        {src && (
          <img
            className="repo-image"
            src={src}
            alt={repo.node.name}
            loading="lazy"
            onError={() => setSrc(repo.node.openGraphImageUrl)}
          />
        )}

        {/* ─── repo name row ───────────────────────────────────── */}
        <div className="repo-name-div">
          <svg
            aria-hidden="true"
            className="octicon repo-svg"
            height="20"
            role="img"
            viewBox="0 0 12 16"
            width="14"
          >
            <path
              fillRule="evenodd"
              d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
            ></path>
          </svg>
          <p className="repo-name">{repo.node.name}</p>
        </div>

        {/* ─── description — flexes to fill space ──────────────── */}
        <p className="repo-description">{repo.node.description}</p>

        {/* ─── stats row sticks to bottom ─────────────────────── */}
        <div className="repo-stats">
          <div className="repo-left-stat">
            {repo.node.primaryLanguage && (
              <span>
                <div
                  className="language-color"
                  style={{ backgroundColor: repo.node.primaryLanguage.color }}
                ></div>
                <p>{repo.node.primaryLanguage.name}</p>
              </span>
            )}

            <span>
              <svg
                aria-hidden="true"
                className="octicon repo-star-svg"
                height="20"
                role="img"
                viewBox="0 0 10 16"
                width="12"
                fill="rgb(106, 115, 125)"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
                ></path>
              </svg>
              <p>{repo.node.forkCount}</p>
            </span>

            <span>
              <svg
                aria-hidden="true"
                className="octicon repo-star-svg"
                height="20"
                role="img"
                viewBox="0 0 14 16"
                width="14"
                fill="rgb(106, 115, 125)"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
                ></path>
              </svg>
              <p>{repo.node.stargazers.totalCount}</p>
            </span>
          </div>

          <div className="repo-right-stat">
            <p>{formatFileSizeDisplay(repo.node.diskUsage)}</p>
          </div>
        </div>

        {/* ─── action buttons ─────────────────────────────────── */}
        <div className="info">
          <div className="buttons">
            <a
              className="btn2"
              href={`/${encodeURIComponent(repo.node.name)}`}
            >
              Details
            </a>

            <span onClick={() => openUrlInNewTab(repo.node.url, repo.node.name)}>
              <span className="btn">GitHub</span>
            </span>
          </div>
        </div>
      </div>
    </Fade>
  );
}
