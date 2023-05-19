import React, { useState, useEffect } from "react";

import projectService from "../services/project.service";

function Experience() {
  const [experience, setExperience] = useState([]);

  const getExperience = async () => {
    try {
      const response = await projectService.getExperience();
      console.log(response.data);
      setExperience(response.data);
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
                        <p key={skillId} className="experience-skills-name">{skill}</p>
                      </>
                    );
                  })}
              </div>

              {experience.photos &&
                experience.photos.map((photo) => {
                  return (
                    <img
                      src={photo}
                      alt={experience.company}
                      className="experience-company-photo"
                    />
                  );
                })}
            </section>
          );
        })}
    </>
  );
}

export default Experience;

{
  /* <div className="experience-company">
                <div>
                  <div>{experience.position}</div>
                  <h4>{experience.company},</h4>
                  <h6>{experience.location}</h6>
                </div>
              </div> */
}
