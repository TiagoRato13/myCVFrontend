import React, { useState, useEffect, useRef } from "react";

import arrow from "../assets/images/up-arrow.png";
import projectService from "../services/project.service";

function Experience() {
  const photos = window.innerWidth <= 980 ? 1 : 3;
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [experience, setExperience] = useState([]);
  const [visiblePhotos, setVisiblePhotos] = useState(photos);
  const selectedExperienceRef = useRef(null);

  const getExperience = async () => {
    try {
      const response = await projectService.getExperience();
      console.log(response.data);
      setExperience(response.data.reverse());
    } catch (error) {}
  };

  useEffect(() => {
    getExperience();

    const handleResize = () => {
      // Update visiblePhotos based on screen size
      if (window.innerWidth <= 980) {
        setVisiblePhotos(1);
      } else {
        setVisiblePhotos(3);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (selectedExperienceRef.current) {
      selectedExperienceRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedExperience]);

  const ExperienceItem = ({ experience }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleToggleExperience = () => {
      setSelectedExperience((prevSelected) =>
        prevSelected === experience ? null : experience
      );
    };

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
      <section
        ref={selectedExperience === experience ? selectedExperienceRef : null}
        className={`experience-box ${
          selectedExperience === experience ? "selected" : ""
        }`}
      >
        <div className="experience-header" onClick={handleToggleExperience}>
          {selectedExperience !== experience && (
            <img src={arrow} alt="arrow" className="experience-arrow" />
          )}
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
              {selectedExperience === experience && (
                <h6>{experience.location}</h6>
              )}
            </div>
          </div>
        </div>
        {selectedExperience === experience && (
          <>
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
              {experience.photos.length > 0 && (
                <>
                  <button
                    style={{
                      visibility: currentIndex > 0 ? "visible" : "hidden",
                    }}
                    className="photoButton"
                    onClick={handlePrevious}
                  >
                    &lt; previous
                  </button>
                  <button
                    style={{
                      visibility:
                        visiblePhotos === 3
                          ? currentIndex < experience.photos.length - 3
                            ? "visible"
                            : "hidden"
                          : currentIndex < experience.photos.length - 1
                          ? "visible"
                          : "hidden",
                    }}
                    className="photoButton"
                    onClick={handleNext}
                  >
                    next &gt;
                  </button>
                  <br />
                </>
              )}
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
            </div>
          </>
        )}
      </section>
    );
  };

  return (
    <>
      {experience.map((exp, id) => (
        <ExperienceItem key={id} experience={exp} />
      ))}
    </>
  );
}

export default Experience;
