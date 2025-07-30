import React, { lazy, Suspense, useEffect, useState } from "react";
import Header        from "../../components/header/Header";
import WorkExperience from "../workExperience/WorkExperience";
import Education      from "../education/Education";
import Achievement    from "../achievement/Achievement";
import Blogs          from "../blogs/Blogs";
import Talks          from "../talks/Talks";
import Podcast        from "../podcast/Podcast";
import Footer         from "../../components/footer/Footer";
import Loading        from "../loading/Loading";
import "./About.scss";
import ScrollToTopButton from "../topbutton/Top"
import Contact from "../contact/Contact";

const Greeting = lazy(() => import("../greeting/Greeting"));

/* Always‑present placeholder so Greeting mounts immediately */
const emptyProfile = {
  id:        0,
  name:      "Loading…",
  avatarUrl: "https://github.com/Alexander-Hung.png",   // any remote placeholder
};

export default function About() {
  const [profile, setProfile] = useState(emptyProfile);

  useEffect(() => {
    const abort = new AbortController();
    const user  = "Alexander-Hung";              // ← put your GitHub handle

    (async () => {
      try {
        const r = await fetch(
          `https://api.github.com/users/${user}`,
          { signal: abort.signal }
        );
        if (r.ok) {
          const j = await r.json();
          setProfile({
            id:        j.id,
            name:      j.name ?? j.login,
            avatarUrl: j.avatar_url,
          });
        }
      } catch (e) {
        if (e.name !== "AbortError") console.error(e);
      }
    })();

    return () => abort.abort();
  }, []);

  return (
    <>
      <Header />

      <main className="about">
        <Suspense fallback={<Loading />}>
          <Greeting prof={profile} />
        </Suspense>

        <WorkExperience />
        <Education />
        <Achievement />
        <Blogs />
        <Talks />
        <Podcast />
        <Contact />
        <ScrollToTopButton />
      </main>

      <Footer />
    </>
  );
}
