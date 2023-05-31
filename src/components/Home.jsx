import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import Zoom from "@mui/material/Zoom";

import projectService from "../services/project.service";

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

function Home() {
  const [home, setHome] = useState([]);
  const [activeIcons, setActiveIcons] = useState({});

  const getHome = async () => {
    try {
      const response = await projectService.getHome();
      console.log(response.data);
      setHome(response.data);
    } catch (error) {
      console.log(error);
    }
  };

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
    getHome();
  }, []);

  return (
    <>
      {home && home.email && (
        <>
          <section className="home-section">
            <h1>
              Hey, I'm Tiago<span>.</span>
            </h1>
            <h3>
              I'm a <span>Full Stack Developer</span>
            </h3>
            {home.info &&
              home.info.map((info, infoId) => {
                return (
                  <p className="" key={infoId}>
                    {info}
                  </p>
                );
              })}
          </section>
          <section className="home-contact">
            {home.email && (
              <>
                <NavLink
                  to="mailto:tiagorato13@hotmail.com"
                  className="home-email-box"
                >
                  <BootstrapTooltip
                    title="That's the spirit 😎!"
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
                            ? home.email.image.active
                            : home.email.image.inactive
                        }
                        alt={home.email.name}
                      />

                      <p>Contact me</p>
                    </div>
                  </BootstrapTooltip>
                </NavLink>
              </>
            )}
          </section>
        </>
      )}
    </>
  );
}

export default Home;
