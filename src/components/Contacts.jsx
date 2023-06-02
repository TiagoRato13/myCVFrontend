import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import EmailButton from "./EmailButton";

function Contacts({ contacts }) {
  const [activeIcons, setActiveIcons] = useState({});

  const handleMouseOver = (iconName) => {
    setActiveIcons((prevActiveIcons) => ({
      ...prevActiveIcons,
      [iconName]: true,
    }));
  };

  const handleMouseOut = (iconName) => {
    setActiveIcons((prevActiveIcons) => ({
      ...prevActiveIcons,
      [iconName]: false,
    }));
  };

  useEffect(() => {
    console.log(contacts);
  }, []);

  return (
    <>
      <section className="contact-links">
        <NavLink
          to={contacts.linkedin.link}
          target="_blank"
          onMouseOver={() => handleMouseOver("linkedin")}
          onMouseOut={() => handleMouseOut("linkedin")}
        >
          <img
            src={
              activeIcons["linkedin"]
                ? contacts.linkedin.image.active
                : contacts.linkedin.image.inactive
            }
            alt={contacts.linkedin.name}
          />
        </NavLink>
        <NavLink
          to={contacts.github.link}
          target="_blank"
          onMouseOver={() => handleMouseOver("github")}
          onMouseOut={() => handleMouseOut("github")}
        >
          <img
            src={
              activeIcons["github"]
                ? contacts.github.image.active
                : contacts.github.image.inactive
            }
            alt={contacts.github.name}
          />
        </NavLink>
        <div className="contacts-phone">
          <img src={contacts.phone.image.inactive} alt={contacts.github.name} />
          <>{contacts.phone.number}</>
        </div>
      </section>
      <EmailButton contacts={contacts} page={"contacts"} />
    </>
  );
}

export default Contacts;

/* <section className="home-info">
            
            {home.github && (
              
            )}
          </section> */
