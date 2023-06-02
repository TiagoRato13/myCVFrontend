import React from "react";
import { NavLink } from "react-router-dom";

import Cv from "./Cv";

function Footer({ activeContent, setActiveContent }) {
  return (
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
  );
}

export default Footer;
