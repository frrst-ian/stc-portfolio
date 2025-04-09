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
            <img
              src="src/assets/icons/certificate-check-svgrepo-com.svg"
              alt="Certificate Icon"
              className="card-icon"
            />
            <p className="text big">10</p>
            <p className="text small">Certificates</p>
          </div>
          <div className="card">
            <img
              src="src/assets/icons/time-sand-svgrepo-com.svg"
              alt="Time Sand Icon"
              className="card-icon"
            />
            <p className="text big">28+</p>
            <p className="text small">Hours of Effort</p>
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
        <h3>Issued by different companies</h3>
        <div className="company-cards">
          <div className="company">
            <img
              className="company-icon"
              src="src/assets/icons/cisco-svgrepo-com.svg"
              alt="Cisco logo"
            />

            <p className="company-text">Cisco</p>
          </div>
          <div className="company">
            <img
              className="company-icon"
              src="src/assets/icons/amazon-svgrepo-com.png"
              alt="Amazon logo"
            />
            <p className="company-text">Amazon</p>
          </div>
          <div className="company">
            <img
              className="company-icon"
              src="src/assets/icons/freecodecamp-svgrepo-com.svg"
              alt="freeCodeCamp logo"
            />
            <p className="company-text">freeCodeCamp</p>
          </div>
          <div className="company">
            <img
              className="company-icon"
              src="src/assets/icons/mathworks-svgrepo-com.svg"
              alt="freeCodeCamp logo"
            />
            <p className="company-text">Mathworks</p>
          </div>
          <div className="company">
            <img
              className="company-icon"
              src="src/assets/icons/kaggle-svgrepo-com.svg      "
              alt="Kaggle logo"
            />

            <p className="company-text">Kaggle</p>
          </div>
        </div>
      </section>

      <footer>
        <div>
          <p>Copyright © 2025 Ian Forrest Rogel</p>
        </div>
        <div className="socials">
          <div className="socials-icon">
            <p>fb</p>
            <p>github</p>
            <p>proton</p>
          </div>
        </div>
      </footer>
    </main>
  );
};
