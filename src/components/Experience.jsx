import React, { useState, useEffect } from "react";

import projectService from "../services/project.service";

function Experience() {
  const [experience, setExperience] = useState([]);

  /* teste */
  const [currentIndex, setCurrentIndex] = useState(0);
  const visiblePhotos = 3;

  const handlePrevious = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex + 1);
  };

  /* teste */

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

  return (
    <>
      {experience.length &&
        experience.map((experience, id) => {
          return (
            <section className="experience-box" key={id}>
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
                  experience.tasks.map((task) => {
                    return <li>{task}</li>;
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

              {experience.photos &&
                experience.photos
                  .slice(currentIndex, currentIndex + visiblePhotos)
                  .map((photo) => {
                    return (
                      <img
                        src={photo}
                        alt={experience.company}
                        className="experience-company-photo"
                      />
                    );
                  })}
              <br />

              <button onClick={() => handlePrevious()}>previous</button>
              <button onClick={() => handleNext()}>next</button>
            </section>
          );
        })}
    </>
  );
}

export default Experience;
