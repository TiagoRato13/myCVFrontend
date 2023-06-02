import React from "react";
import { NavLink } from "react-router-dom";
import curriculum from "../assets/images/CV Tiago Rato 2023.pdf";

function Cv({ activeContent }) {
  return (
    <section
      className={activeContent === "home" ? "cv-home-box" : "cv-page-box"}
    >
      <NavLink to={curriculum} className={activeContent === "home" ? "cv-home" : "cv-page"} target="_blank" download>
        Download CV
      </NavLink>
    </section>
  );
}

export default Cv;
