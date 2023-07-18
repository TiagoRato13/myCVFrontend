import React from "react";

function Title({ activeContent }) {
  return (
    <h1 className="title">
      {activeContent[0].toUpperCase() + activeContent.slice(1)}
    </h1>
  );
}

export default Title;
