import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import education from "../assets/educations.json";
import projectService from "../services/project.service";

function Education() {
  /* const [education, setEducation] = useState([]); */
  const [jsonEducation, setJsonEducation] = useState(education);
  /* const getEducation = async () => {
    try {
      const response = await projectService.getEducation();
      console.log(response.data);
      setEducation(response.data);
    } catch (error) {
      console.log(error);
    }
  }; */

  useEffect(() => {
    /* getEducation(); */
  }, []);

  return (
    <>
      {jsonEducation.length &&
        jsonEducation.map((bootcamp, id) => {
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
            </div>
          );
        })}
    </>
  );
}

export default Education;
