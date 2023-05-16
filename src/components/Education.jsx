import React, { useState, useEffect } from "react";

import projectService from "../services/project.service";

function Education() {
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    try {
      const response = await projectService.getProjects();
      console.log(response.data);
      setProjects(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      <div>teste</div>
      {projects.length && projects[0].name}
    </>
  );
}

export default Education;
