import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function MenuBox() {
  const [Menu, setMenu] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [title, setTitle] = useState("Home");
  const [showTitle, setShowTitle] = useState(false);

  const handleMouseOver = (title) => {
    setTitle(title);
    console.log(title);
  };

  const handleToggleMenu = () => {
    setTimeout(() => {
      toggleMenu === false ? setToggleMenu(true) : setToggleMenu(false);
    }, 650);

    setTimeout(() => {
      Menu === false ? setShowTitle(true) : setShowTitle(false);
    }, 1000);
  };

  return (
    <>
      <ul
        className={`menu ${Menu ? "active" : ""}`}
        onClick={() => setMenu(!Menu)}
      >
        <div
          className={`toggle ${toggleMenu ? "active" : ""}`}
          onClick={() => {
            handleToggleMenu();
          }}
        >
          <NavLink to="/" onClick={() => setTitle("Home")}>
            {Menu === false ? "ABOUT ME" : "Close"}
          </NavLink>
        </div>
        {toggleMenu && (
          <>
            <li style={{ "--i": 0 }}>
              <NavLink
                to="about"
                onClick={() => {
                  setToggleMenu(false), setShowTitle(false);
                }}
                onMouseOver={() => handleMouseOver("About")}
              >
                About
              </NavLink>
            </li>
            <li style={{ "--i": 1 }}>
              <NavLink
                to="education"
                onClick={() => {
                  setToggleMenu(false), setShowTitle(false);
                }}
                onMouseOver={() => handleMouseOver("Education")}
              >
                Education
              </NavLink>
            </li>
            <li style={{ "--i": 2 }}>
              <NavLink
                to="experience"
                onClick={() => {
                  setToggleMenu(false), setShowTitle(false);
                }}
                onMouseOver={() => handleMouseOver("Experience")}
              >
                Experience
              </NavLink>
            </li>
            <li style={{ "--i": 3 }}>
              <NavLink
                to="cv"
                onClick={() => {
                  setToggleMenu(false), setShowTitle(false);
                }}
                onMouseOver={() => handleMouseOver("CV")}
              >
                CV
              </NavLink>
            </li>
            <li style={{ "--i": 4 }}>
              <NavLink
                to="hobbies"
                onClick={() => {
                  setToggleMenu(false), setShowTitle(false);
                }}
                onMouseOver={() => handleMouseOver("Hobbies")}
              >
                Hobbies
              </NavLink>
            </li>
            {showTitle && (
              <div>
                <NavLink
                  className="menuName"
                  to={`${title.toLowerCase()}`}
                  onClick={() => {
                    setToggleMenu(false), setShowTitle(false);
                  }}
                >
                  {title}
                </NavLink>
              </div>
            )}
          </>
        )}
      </ul>
    </>
  );
}

export default MenuBox;
