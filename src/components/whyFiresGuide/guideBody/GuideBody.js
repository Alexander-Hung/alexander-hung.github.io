// GuideBody.jsx
import React from "react";
import "./GuideBody.scss";
import { Fade } from "react-reveal";

export default function GuideBody() {
  return (
    <Fade bottom duration={1000} distance="12px">
      <section className="guide-body">
        {/* ------- MINI TABLE‑OF‑CONTENTS -------- */}
        <h2>🔥 Trail Map — Choose Your Path Through the Flames</h2>
        <ol>
          <li><a href="#Igniting Insight"><strong>Igniting Insight</strong> </a>— What Exactly Is Why‑Fires?</li>
          <li><a href="#Spark of Motivation"><strong>Spark of Motivation</strong></a> — Why the Project Took Shape</li>
          <li><a href="#Building the Blaze"><strong>Building the Blaze</strong></a> — Forging the Tech Stack</li>
          <li>
            <strong>Three Pillars of Fire Intelligence</strong>
            <ul className="sub-list">
              <li><a href="#🗺️ Seeing the Blaze"> 🗺️ <strong>Seeing the Blaze</strong></a> — Interactive Data Visualization</li>
              <li><a href="#📊 Reading the Flames"> 📊 <strong>Reading the Flames</strong></a> — Deep‑Dive Statistical Analysis</li>
              <li><a href="#🤖 Predicting the Spark"> 🤖 <strong>Predicting the Spark</strong></a> — Machine Learning Forecasts</li>
            </ul>
          </li>
          <li><a href="#Lighting the Way"> <strong>Lighting the Way</strong></a> — Who Patrols the Fireline?</li>
          <li><a href="#Roadmap"> <strong>Roadmap</strong></a> — Next Steps on the Fire‑front</li>
        </ol>

        {/* ------- FIRST CONTENT SECTION -------- */}
        <div className="two-col">
          <div className="text">
            <h1 id="Igniting Insight">1. Igniting Insight — What Exactly Is Why‑Fires?</h1>
            <p>
              A full‑stack, open‑source web platform that transforms raw satellite fire
              detections into interactive stories, statistics, and forecasts.
              Built for researchers, analysts, policy‑makers, and the simply curious,
              it turns NASA FIRMS MODIS &amp; VIIRS hotspots (2001‑present) into meaningful narratives.
            </p>

          </div>

          <div className="image">
            <img src="/Time-lapse.gif" alt="Time-lapse-gif" />
          </div>

        </div>

        <div className="two-col">
          <div className="image">
            <img src="/why-start.gif" alt="Why Did I Start This Project" />
          </div>

          <div className="text">
            <h1 id="Spark of Motivation">2. Spark of Motivation — Why Did I Start This Project?</h1>
            <ul>
              <li>
                Personal catalyst: Growing up in wildfire‑prone regions made me curious about the patterns behind the smoke.
              </li>

              <li>
                Data gap: Existing dashboards showed where fires occur but rarely why and what next.
              </li>

              <li>
                Skill synergy: Combines my background in data science, geospatial analytics, and full‑stack engineering.
              </li>
            </ul>
          </div>
        </div>

        <div className="two-col">
          <div className="text">
            <h1 id="Building the Blaze">3. Building the Blaze — How the Stack Comes Together</h1>

            <table>
              <thead>
              <tr>
                <th>Layer</th>
                <th>Tech Highlights</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td><strong>Frontend</strong></td>
                <td>React + Plotly + Mapbox GL</td>
              </tr>
              <tr>
                <td><strong>Backend</strong></td>
                <td>Flask REST API on DigitalOcean (Docker, Gunicorn)</td>
              </tr>
              <tr>
                <td><strong>Data Pipeline</strong></td>
                <td>Python ETL → Parquet on Cloudflare R2</td>
              </tr>
              <tr>
                <td><strong>ML Sandbox</strong></td>
                <td>PyTorch / LightGBM notebooks served through FastAPI micro-services</td>
              </tr>
              </tbody>
            </table>

          </div>

          <div className="image">
            <img src="/build-diagram.gif" alt="How I build" />
          </div>
        </div>


        <div>
          <h1>4. Three Pillars of Fire Intelligence</h1>

          <div className="two-col">
            <div>
              <div className="text">
                <h3 id="🗺️ Seeing the Blaze">🗺️ Seeing the Blaze — Interactive Data Visualization</h3>

                <ul>
                  <li>Drag‑and‑zoom world map with monthly/weekly/day sliders</li>
                  <li>Country & biome filters, density heat‑maps, and choropleth</li>
                  <li>Hover‑tooltips with instant statistics (count, area, confidence)</li>
                </ul>
              </div>

              <div className="image">
                <img src="/interact-demo.gif" alt="Interact demo" />
              </div>
            </div>

            <div>
              <div className="text">
                <h3 id="📊 Reading the Flames">📊 Reading the Flames — Deep‑Dive Statistical Analysis</h3>

                <ul>
                  <li>Country‑year dashboards: fire counts, burned area, seasonality curves</li>
                  <li>Box‑plots & violin charts for intensity distributions</li>
                  <li>Correlation matrix comparing fires vs. climate indices (ENSO, drought)</li>
                </ul>
              </div>

              <div className="image">
                <img src="/dashboard.gif" alt="Dashboard" />
              </div>
            </div>


            <div>
              <div className="text">
                <h3 id="🤖 Predicting the Spark">🤖 Predicting the Spark — Machine Learning Forecasts</h3>

                <ul>
                  <li>SARIMA & Prophet for short‑term regional trend forecasts</li>
                  <li>LightGBM gradient boosting for feature‑rich prediction (climate + land‑use)</li>
                  <li>KAN (Kernel Attention Network) experimental model for spatial‑temporal transfer learning</li>
                </ul>
              </div>

              <div className="image">
                <img src="/machine-learning.gif" alt="Machine Learning" />
              </div>
            </div>
          </div>

        </div>



        <div className="two-col">
          <div className="text">
            <h1 id="Lighting the Way">5. Lighting the Way — Who Uses Why-Fires?</h1>
            
            <ul>
              <li>Researchers & Meteorologists – Validate climate models against real burn data</li>
              <li>Policy‑Makers & NGOs – Allocate firefighting resources and craft prevention policy</li>
              <li>Data Enthusiasts & Educators – Explore patterns for coursework and public awareness</li>
              <li>AI Developers – Plug‑in ready datasets for novel predictive models</li>
            </ul>
          </div>
        </div>

        <div>
          <button><a href="http://why-fires.com">Get Started</a></button>
        </div>


        <div className="two-col">
          <div className={"text"}>
            <h1 id="Roadmap">6. Roadmap — Where the Fire’s Heading Next</h1>

            <ol>
              <li>Better performance of Machine learning model(light-weight, precise and fast response) </li>
              <li>User‑uploaded layers (e.g., local weather stations, vegetation indices)</li>
              <li>Alert Service – email/webhook when probability > X % for chosen region</li>
            </ol>
          </div>
        </div>

      </section>
    </Fade>
  );
}
