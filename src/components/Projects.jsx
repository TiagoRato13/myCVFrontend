import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

/* COMPONENTS */
import projectService from "../services/project.service";

function Projects() {
  const [projects, setProjects] = useState([]);

  const getProject = async () => {
    try {
      const response = await projectService.getProject();
      console.log(response.data);
      setProjects(response.data.reverse());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProject();
  }, []);

  return (
    <section className="projects">
      {projects.length &&
        projects.map((project, projectId) => {
          return (
            <div className="project-box">
              <img src={project.image} alt={project.name} />
              <h3>{project.name}</h3>
              <h6 className="tech-used">Technologies used:</h6>
              <p>
                <br />
                {project.technology.map((tech, techId) => {
                  return (
                    <>
                      {techId !== 0 ? ", " : ""}{" "}
                      <span className={techId % 2 === 0 ? "even" : "odd"}>
                        {tech}
                      </span>
                    </>
                  );
                })}
              </p>
              <NavLink
                to={project.link}
                className="tech-link"
                target="_blank"
                key={projectId}
              >
                {">>>"} Click here to check project {"<<<"}
              </NavLink>
            </div>
          );
        })}
    </section>
  );
}

export default Projects;
