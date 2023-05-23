import React, { useState, useEffect } from "react";
import projectService from "../services/project.service";

function Experience() {
  const [experience, setExperience] = useState([]);

  const getExperience = async () => {
    try {
      const response = await projectService.getExperience();
      console.log(response.data);
      setExperience(response.data.reverse());
    } catch (error) {}
  };

  useEffect(() => {
    getExperience();
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
                <>
                  {skillId === 0 ? "" : "|"}
                  <p key={skillId} className="experience-skills-name">
                    {skill}
                  </p>
                </>
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
          <br />

          <button className="photoButton" onClick={handlePrevious}>
            &lt; previous
          </button>
          <button className="photoButton" onClick={handleNext}>
            next &gt;
          </button>
        </div>
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
