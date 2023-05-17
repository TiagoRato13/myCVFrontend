import React, { useState, useEffect } from "react";

import projectService from "../services/project.service";

function Education() {
  const [projects, setProjects] = useState([]);
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

  const getProjects = async () => {
    try {
      const response = await projectService.getProjects();
      /* console.log(response.data); */
      setProjects(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEducation();
    getProjects();
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
                    <div className="separator" key={projectId}>
                      {project}
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
