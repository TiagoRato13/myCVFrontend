import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

import Cv from "./Cv";
import scrollUp from "../assets/images/up-arrow.png";

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "rgb(6, 75, 90)",
    margin: "0 0 0 0 !important",
    fontSize: "0.6em",
    boxShadow: "0 0 15px 1px rgb(6, 75, 90)",
  },
}));

function Footer({ activeContent, setActiveContent }) {
  const [showButton, setShowButton] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behaviour: "smooth" });
  };

  useEffect(() => {

    const handleScrollButtonVisibility = () => {
      window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false);
    };

    window.addEventListener("scroll", handleScrollButtonVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  }, []);
  return (
    <>
      <div className="footer">
        <Cv activeContent={activeContent} />
        {activeContent !== "contacts" ? (
          <NavLink
            to="contacts"
            className="footer-contacts"
            onClick={() => {
              setActiveContent("contacts");
              window.scrollTo({ top: 0, behaviour: "smooth" });
            }}
          >
            Send me a message!
          </NavLink>
        ) : null}
      </div>

      {showButton && (
        <div className="scrollUp-button" onClick={handleScrollToTop}>
          <BootstrapTooltip title="Go back up" placement="bottom">
            <img src={scrollUp} alt="" />
          </BootstrapTooltip>
        </div>
      )}
    </>
  );
}

export default Footer;
