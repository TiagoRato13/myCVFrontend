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
    margin: "0 0 10vh 5vh !important",
    "font-size": "14px",
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
      {home && (
        <>
          <section className="home_section_one">
            <img src={home.picture} alt="" className="home_picture" />
            <div>
              {home.info &&
                home.info.map((info, id) => {
                  return <p key={id}>{info}</p>;
                })}
            </div>
          </section>
          <section className="home-info">
            {home.linkedin && (
              <NavLink
                to={home.linkedin.link}
                className="home-links"
                target="_blank"
                onMouseOver={() => handleMouseOver("linkedin")}
                onMouseOut={() => handleMouseOut("linkedin")}
              >
                <img
                  src={
                    activeIcons["linkedin"]
                      ? home.linkedin.image.active
                      : home.linkedin.image.inactive
                  }
                  alt={home.linkedin.name}
                />
              </NavLink>
            )}
            {home.github && (
              <NavLink
                to={home.github.link}
                target="_blank"
                className="home-links"
                onMouseOver={() => handleMouseOver("github")}
                onMouseOut={() => handleMouseOut("github")}
              >
                <img
                  src={
                    activeIcons["github"]
                      ? home.github.image.active
                      : home.github.image.inactive
                  }
                  alt={home.github.name}
                />
              </NavLink>
            )}
          </section>
          <section className="home-info">
            {home.email && (
              <>
                <BootstrapTooltip
                  title="Get in touch, send a message !"
                  placement="right-start"
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

                    <p>{home.email.address}</p>
                  </div>
                </BootstrapTooltip>
              </>
            )}
            {home.phone && (
              <div>
                <img src={home.phone.image.inactive} alt={home.phone.name} />
                <p>{home.phone.number}</p>
              </div>
            )}
          </section>
        </>
      )}
    </>
  );
}

export default Home;
