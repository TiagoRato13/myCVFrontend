import React from "react";

function Title({ activeContent }) {
  return <h1>{activeContent[0].toUpperCase() + activeContent.slice(1)}</h1>;
}

export default Title;
