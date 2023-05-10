import React from "react";
import Temporary from "../assets/images/temporary_image.png";

function Interests() {
  return (
    <>
      <ul>Secção Interests</ul>
      <li className="interest">
        <img src={Temporary} alt="dogs" />
        dogs
      </li>
      <li className="interest">
        <img src={Temporary} alt="dogs" />
        Travel
      </li>
      <li className="interest">
        <img src={Temporary} alt="dogs" />
        Movies
      </li>
      <li className="interest">
        <img src={Temporary} alt="dogs" />
        Scuba Diving
      </li>
      <li className="interest">
        <img src={Temporary} alt="dogs" />
        Music
      </li>
      <li className="interest">
        <img src={Temporary} alt="dogs" />
        Board Games
      </li>
    </>
  );
}

export default Interests;
