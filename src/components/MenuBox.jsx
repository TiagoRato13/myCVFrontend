import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function MenuBox() {
  const [Menu, setMenu] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <ul
        className={`menu ${Menu ? "active" : ""}`}
        onClick={() => setMenu(!Menu)}
      >
        <div
          className={`toggle ${toggleMenu ? "active" : ""}`}
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          Tiago <br /> Rato
        </div>
        {toggleMenu && (
          <>
            <li style={{ "--i": 0 }}>
              <NavLink to="skills">Skills</NavLink>{" "}
            </li>
            <li style={{ "--i": 1 }}>
              <NavLink to="hobbies">Hobbies</NavLink>
            </li>
            <li className="rotate180" style={{ "--i": 2 }}>
              <NavLink to="experience">Experience</NavLink>
            </li>
            <li className="rotate180" style={{ "--i": 3 }}>
              <NavLink to="cv">CV</NavLink>
            </li>
            <li style={{ "--i": 4 }}>
              <NavLink to="education">Education</NavLink>
            </li>
          </>
        )}
      </ul>
    </>
  );
}

export default MenuBox;
