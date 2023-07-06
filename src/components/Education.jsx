import React, { useState, useEffect } from "react";

import projectService from "../services/project.service";
import { NavLink } from "react-router-dom";

function Education() {
  const [education, setEducation] = useState([]);

  const getEducation = async () => {
    try {
      const response = await projectService.getEducation();
      console.log(response.data);
      setEducation(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEducation();
  }, []);

  return (
    <>
      {education.length &&
        education.map((bootcamp, id) => {
          return (
            <div className="educationInfo" key={id}>
              <div className="educationInfo-school">
                <img
                  className="education-schoolImage"
                  src={bootcamp.schoolImage}
                  alt={bootcamp.schoolName}
                />{" "}
                <h3>{bootcamp.schoolName}</h3>
              </div>
              <p>
                <span className="educationInfo-date">From:</span>{" "}
                {bootcamp.startDate} to {bootcamp.endDate}
              </p>
              {bootcamp.project.length <= 1 ? (
                <p className="projects-separator">Project:</p>
              ) : (
                <p className="projects-separator">Projects:</p>
              )}

              <div
                className={`education-projects ${
                  id < education.length - 1 ? "add-line" : ""
                }`}
              >
                {bootcamp.project.map((project, projectId) => {
                  return (
                    <div className="education-school" key={projectId}>
                      <div
                        className={`${
                          bootcamp.project.length > 1 ? "separator" : ""
                        } ${
                          projectId !== bootcamp.project.length - 1
                            ? "bot-separator"
                            : ""
                        }`}
                        key={projectId}
                      >
                        <NavLink
                          to={project.link}
                          target="_blank"
                          className="project-link"
                        >
                          <div>{project.name}</div>
                          <img
                            className="project-image"
                            src={project.image}
                            alt={project.name}
                          />
                        </NavLink>
                        <div>
                          <ul>Technologies used:</ul>
                          <div className="project-technologies">
                            {project.technology &&
                              project.technology.map((tech, techId) => {
                                return (
                                  <>
                                    {techId === 0 ? "" : "|"}
                                    <li key={techId}>{tech}</li>
                                  </>
                                );
                              })}
                          </div>
                        </div>
                      </div>
                      {projectId < bootcamp.project.length - 1 && (
                        <div className="separator-vert"></div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
    </>
  );
}

export default Education;
