import React from "react";
import Cv from "./Cv";

function Footer({ activeContent }) {
  return (
    <div className="footer">
      <p>contacts</p>
      <Cv activeContent={activeContent} /> 
    </div>
  );
}

export default Footer;