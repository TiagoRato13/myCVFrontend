import React, { useState } from "react";
import { NavLink, Routes, Route } from "react-router-dom";

function MenuBox({
  menu,
  setMenu,
  showContent,
  setShowContent,
  activeContent,
  setActiveContent,
}) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [title, setTitle] = useState("What do you want to know about?");
  const [showTitle, setShowTitle] = useState(false);

  const handleMouseOver = (title) => {
    setTitle(title);
  };

  const handleToggleMenu = () => {
    setShowContent(!showContent);
    /* setActiveContent("home"); */
    setTimeout(() => {
      setToggleMenu(!toggleMenu);
    }, 0);

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
            setTitle("What do you want to know about?");
          }}
          onMouseOver={() => handleMouseOver("What do you want to know about?")}
        >
          <NavLink to="/">{menu === false ? "ABOUT ME" : "Home"}</NavLink>
        </div>
        {toggleMenu && (
          <>
            <li
              style={{ "--i": 0 }}
              onClick={() => {
                setToggleMenu(false), setShowTitle(false), setShowContent(true);
                setActiveContent("projects");
              }}
              onMouseOver={() => handleMouseOver("Projects")}
            >
              <NavLink to="projects">Projects</NavLink>
            </li>
            <li
              style={{ "--i": 1 }}
              onClick={() => {
                setToggleMenu(false);
                setShowTitle(false);
                setShowContent(true);
                setActiveContent("education");
              }}
              onMouseOver={() => handleMouseOver("Education")}
            >
              <NavLink to="education">Education</NavLink>
            </li>
            <li
              style={{ "--i": 2 }}
              onClick={() => {
                setToggleMenu(false), setShowTitle(false), setShowContent(true);
                setActiveContent("experience");
              }}
              onMouseOver={() => handleMouseOver("Experience")}
            >
              <NavLink to="experience">Previous Experience</NavLink>
            </li>

            <li
              style={{ "--i": 3 }}
              onClick={() => {
                setToggleMenu(false), setShowTitle(false), setShowContent(true);
                setActiveContent("interests");
              }}
              onMouseOver={() => handleMouseOver("Interests")}
            >
              <NavLink to="interests">Interests</NavLink>
            </li>
            <li
              style={{ "--i": 4 }}
              onClick={() => {
                setToggleMenu(false), setShowTitle(false), setShowContent(true);
                setActiveContent("contacts");
              }}
              onMouseOver={() => handleMouseOver("Contacts")}
            >
              <NavLink to="contacts">Contacts</NavLink>
            </li>
            {showTitle && (
              <div>
                <NavLink
                  className="menuName"
                  to={
                    title === "What do you want to know about?"
                      ? `/`
                      : `${title.toLowerCase()}`
                  }
                  onClick={() => {
                    setToggleMenu(false),
                      setShowTitle(false),
                      setShowContent(true);
                    {
                      title === "What do you want to know about?"
                        ? setActiveContent(`home`)
                        : setActiveContent(`${title.toLowerCase()}`);
                    }
                  }}
                >
                  <br />
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
