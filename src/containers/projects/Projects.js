import React, { useState, useEffect, useContext, Suspense, lazy } from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import { openSource, socialMediaLinks } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading";

const GithubRepoCard = lazy(() =>
  import("../../components/githubRepoCard/GithubRepoCard")
);

const FailedLoading = () => null;
const renderLoader = () => <Loading />;

export default function Projects() {
  /* ★ rename: repos / setRepos */
  const [repos, setRepos] = useState([]);
  const { isDark } = useContext(StyleContext);

  useEffect(() => {
    fetch("/profile.json")
      .then((r) => (r.ok ? r.json() : Promise.reject(r)))
      .then((json) => {
        /* 🔎 optional: see the exact shape once */
        //console.log("profile.json →", json);

        // works whether the file has a top-level data{} or not
        const edges =
          json?.data?.user?.pinnedItems?.edges ??
          json?.user?.pinnedItems?.edges ??
          [];

        setRepos(edges);
      })
      .catch((err) => {
        console.error(err);
        setRepos("Error");
      });
  }, []);


  /* ★ guard uses repos */
  if (typeof repos === "string" || !openSource.display) {
    return <FailedLoading />;
  }

  return (
    <Suspense fallback={renderLoader()}>
      <div className="main" id="opensource">
        <h1 className="project-title">Github</h1>

        <div className="repo-cards-div-main">
          {repos.map((edge, i) => {
            if (!edge) return null;

            const imgSrc = `${process.env.PUBLIC_URL}/project-images/${edge.node.name}/showcase.png`;

            return (
              <GithubRepoCard
                key={edge.node.id}
                repo={edge}
                isDark={isDark}
                imgSrc={imgSrc}
              />
            );
          })}
        </div>

        <div className="project-button-wrapper">
          <Button
            text="More Projects"
            className="project-button"
            href={socialMediaLinks.github}
            newTab
          />
        </div>
      </div>
    </Suspense>
  );
}
