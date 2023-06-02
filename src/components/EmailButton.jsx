import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import Zoom from "@mui/material/Zoom";

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
    margin: "0 0 -2vh 2vh !important",
    fontSize: "14px",
  },
}));
/* END ON HOVER TEXT FOR CONTACT ME BUTTON */

function EmailButton({ contacts, page }) {
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

  return (
    <section className="home-contact">
      {contacts.email && (
        <>
          <NavLink
            to="mailto:tiagorato13@hotmail.com"
            className="home-email-box"
          >
            <BootstrapTooltip
              title={
                page === "home" ? "That's the spirit 😎!" : "Let's connect! 😊"
              }
              placement="right-end"
              arrow
              TransitionComponent={Zoom}
            >
              <div
                className="home-email"
                onMouseOver={() => handleMouseOver("email")}
                onMouseOut={() => handleMouseOut("email")}
              >
                <img
                  src={
                    activeIcons["email"]
                      ? contacts.email.image.active
                      : contacts.email.image.inactive
                  }
                  alt={contacts.email.name}
                />

                <p>Contact me</p>
              </div>
            </BootstrapTooltip>
          </NavLink>
        </>
      )}
    </section>
  );
}

export default EmailButton;
