import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function MenuBox({
  menu,
  setMenu,
  showContent,
  setShowContent,
  activeContent,
  setActiveContent,
}) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [title, setTitle] = useState("Home");
  const [showTitle, setShowTitle] = useState(false);

  const handleMouseOver = (title) => {
    setTitle(title);
  };

  const handleToggleMenu = () => {
    setShowContent(!showContent);
    setActiveContent("home");
    setTimeout(() => {
      setToggleMenu(!toggleMenu);
    }, 650);

    setTimeout(() => {
      setShowTitle(!menu);
    }, 1000);
  };

  return (
    <>
      <ul
        className={`menu ${menu ? "active" : ""}`}
        onClick={() => setMenu(!menu)}
      >
        <div
          className={`toggle ${toggleMenu ? "active" : ""}`}
          onClick={() => {
            handleToggleMenu();
          }}
        >
          <NavLink
            to="/"
            onMouseOver={() => handleMouseOver("Home")}
            onClick={() => setTitle("Home")}
          >
            {menu === false ? "ABOUT ME" : "Home"}
          </NavLink>
        </div>
        {toggleMenu && (
          <>
            <li style={{ "--i": 0 }}>
              <NavLink
                to="about"
                onClick={() => {
                  setToggleMenu(false),
                    setShowTitle(false),
                    setShowContent(true);
                  setActiveContent("about");
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
                  setToggleMenu(false);
                  setShowTitle(false);
                  setShowContent(true);
                  setActiveContent("education");
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
                  setToggleMenu(false),
                    setShowTitle(false),
                    setShowContent(true);
                  setActiveContent("experience");
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
                  setToggleMenu(false),
                    setShowTitle(false),
                    setShowContent(true);
                  setActiveContent("cv");
                }}
                onMouseOver={() => handleMouseOver("CV")}
              >
                CV
              </NavLink>
            </li>
            <li style={{ "--i": 4 }}>
              <NavLink
                to="interests"
                onClick={() => {
                  setToggleMenu(false),
                    setShowTitle(false),
                    setShowContent(true);
                  setActiveContent("interests");
                }}
                onMouseOver={() => handleMouseOver("Interests")}
              >
                Interests
              </NavLink>
            </li>
            {showTitle && (
              <div>
                <NavLink
                  className="menuName"
                  to={`${title.toLowerCase()}`}
                  onClick={() => {
                    setToggleMenu(false),
                      setShowTitle(false),
                      setShowContent(true);
                    setActiveContent(`${title.toLowerCase()}`);
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
