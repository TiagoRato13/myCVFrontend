import React, { useState, useEffect } from "react";
import projectService from "../services/project.service";

function Interests() {
  const [interests, setInterests] = useState([]);

  const getInterests = async () => {
    try {
      const response = await projectService.getInterests();
      console.log(response.data);
      setInterests(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInterests();
  }, []);

  return (
    <section className="interests">
      {interests.length &&
        interests.map((interest) => {
          return (
            <div className="indInterest">
              <h2>{interest.name}</h2>
              <div className="interest-box">
                <div
                  className="interest-textBox"
                  style={{
                    backgroundImage: `url(${interest.picture})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <div className="interest-description">
                    {interest.aditionalInfo &&
                      interest.aditionalInfo.map((info) => {
                        return <p>{info}</p>;
                      })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </section>
  );
}

export default Interests;
