import React from "react";
import "./HomePage.css";
import ParticlesComponent from "../components/ui/ParticlesBackground";

export const HomePage = () => {
  return (
    <main className="home">
      <ParticlesComponent id="particles" />
      <section className="top">
        <h1 className="main-text">Special Topics in Computing Portfolio</h1>
        <p className="tagline">
          A curated list of my certificates from courses I finished.{" "}
        </p>

        <div className="btn-container">
          <button className="btn primary cert">
            <span>
              <a href="/certificates" rel="noreferrer" target="_blank">
                My certificates
              </a>
            </span>
          </button>
          <button className="btn primary github">
            <span>
              <a href="https://github.com/frrst-ian/stc-portfolio">
                View on github
              </a>
            </span>
          </button>
        </div>

        <div className="cards">
          <div className="card">
            <p>
              10 <br />
              earned certificates
            </p>
          </div>
          <div className="card">
            28+ <br /> hours of effort
          </div>
        </div>
      </section>

      <section className="middle">
        <h2>Top Certificates</h2>
        <div className="top-certs-wrapper">
          <div className="top-certs">
            <img
              src="src/assets/images/cybersecurity.png"
              alt="cisco cybersecurity certificate"
            />
          </div>
          <div className="top-certs">
            <img
              src="src/assets/images/data-viz.png"
              alt="freeCodeCamp data visualization certificate"
            />
          </div>
        </div>
      </section>

      <section className="last">
        <div className="company-cards">
          <div className="company">Cisco</div>
          <div className="company">Amazon</div>
          <div className="company">Matlab</div>
          <div className="company">freeCodeCamp</div>
        </div>
        <h3>Issued by different companies</h3>
      </section>

      <footer>
        <div>
          <p>Copyright © 2025 Ian Forrest Rogel</p>
        </div>
        <div className="socials">
          <div className="socials-icon"></div>
        </div>
      </footer>
    </main>
  );
};
