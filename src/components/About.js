import React from "react";

import "../App.css";

import SkillsBar from "./SkillsBar";
export default function About() {
  return (
    <section className="wrapper">
      <div className="box">
        <h1>About</h1>
        <div className="projects">
          <SkillsBar />
        </div>
      </div>
    </section>
  );
}
