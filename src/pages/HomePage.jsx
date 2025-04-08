import React from "react";
import "./HomePage.css";
import { ParticlesBackground } from "../components/ui/ParticlesBackground";

export const HomePage = () => {
  return (
    <main className="home">
      <ParticlesBackground />
      <section className="top">
        <h1 className='main-text'>Special Topics in Computing Portfolio</h1>
      </section>
    </main>
  );
};