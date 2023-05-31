import React, { useState, useEffect } from "react";
import projectService from "../services/project.service";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import Zoom from "@mui/material/Zoom";

//COMPONENTS
import scrollUp from "../assets/images/up-arrow.png";

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "rgb(6, 75, 90)",
    margin: "0 2vh 0 0 !important",
    fontSize: "0.6em",
    boxShadow: "0 0 15px 1px rgb(6, 75, 90)",
  },
}));

function Experience() {
  const [experience, setExperience] = useState([]);
  const [showButton, setShowButton] = useState(false);

  const getExperience = async () => {
    try {
      const response = await projectService.getExperience();
      console.log(response.data);
      setExperience(response.data.reverse());
    } catch (error) {}
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behaviour: "smooth" });
  };

  useEffect(() => {
    getExperience();

    const handleScrollButtonVisibility = () => {
      window.pageYOffset > 800 ? setShowButton(true) : setShowButton(false);
    };

    window.addEventListener("scroll", handleScrollButtonVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  }, []);

  const ExperienceItem = ({ experience }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const visiblePhotos = 3;

    const handlePrevious = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    };

    const handleNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex < experience.photos.length - visiblePhotos
          ? prevIndex + 1
          : prevIndex
      );
    };

    return (
      <section className="experience-box">
        <div className="experience-header">
          <img
            src={experience.picture}
            alt={experience.company}
            className="experience-company-img"
          />
          <div>
            <div className="experience-company-position">
              <h3>{experience.position}</h3>
            </div>
            <div className="experience-company">
              <h5>{experience.company}</h5>
              <h6>{experience.location}</h6>
            </div>
          </div>
        </div>
        <p className="experience-date">
          <span>From:</span> {experience.startDate} to {experience.endDate}
        </p>

        <div className="experience-tasks">
          {experience.tasks &&
            experience.tasks.map((task, index) => {
              return <li key={index}>{task}</li>;
            })}
        </div>

        <div className="experience-skills">
          {experience.skills &&
            experience.skills.map((skill, skillId) => {
              return (
                <div key={skillId} className="experience-skills">
                  {skillId === 0 ? "" : "|"}
                  <p className="experience-skills-name">{skill}</p>
                </div>
              );
            })}
        </div>

        <div className="experience-photo-box">
          {experience.photos &&
            experience.photos
              .slice(currentIndex, currentIndex + visiblePhotos)
              .map((photo, photoIndex) => {
                return (
                  <img
                    key={photoIndex}
                    src={photo}
                    alt={experience.company}
                    className="experience-company-photo"
                  />
                );
              })}

          {experience.photos.length > 0 && (
            <>
              <br />

              <button className="photoButton" onClick={handlePrevious}>
                &lt; previous
              </button>
              <button className="photoButton" onClick={handleNext}>
                next &gt;
              </button>
            </>
          )}
        </div>
      </section>
    );
  };

  return (
    <>
      {experience.map((exp, id) => (
        <ExperienceItem key={id} experience={exp} />
      ))}

      {showButton && (
        <div className="scrollUp-button" onClick={handleScrollToTop}>
          <BootstrapTooltip title="Go back up" placement="left-end">
            <img src={scrollUp} alt="" />
          </BootstrapTooltip>
        </div>
      )}
    </>
  );
}

export default Experience;
