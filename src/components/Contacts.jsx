import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import Zoom from "@mui/material/Zoom";

import EmailButton from "./EmailButton";
/* ON HOVER TEXT FOR CONTACT ME BUTTON */
const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: "rgb(6, 75, 90)",
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "rgb(6, 75, 90)",
    padding: "1.5vh",
    margin: " 0 1vw !important",
    fontSize: "14px",
  },
}));

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
    /* console.log(contacts); */
  }, []);

  return (
    <>
      <section className="contact-links">
        <div className="contacts-links-social">
          <BootstrapTooltip
            title="Linkedin"
            placement="right-start"
            arrow
            TransitionComponent={Zoom}
          >
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
          </BootstrapTooltip>
          <BootstrapTooltip
            title="Github"
            placement="left-start"
            arrow
            TransitionComponent={Zoom}
          >
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
          </BootstrapTooltip>
        </div>
        <hr className="hr" />
        <div className="contacts-phone">
          <img src={contacts.phone.image.inactive} alt={contacts.github.name} />
          <>{contacts.phone.number}</>
        </div>
        <hr className="hr" />
        <div className="contacts-email">
          <EmailButton contacts={contacts} page={"contacts"} />
        </div>
      </section>
    </>
  );
}

export default Contacts;
