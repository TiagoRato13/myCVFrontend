import React, { useState, useEffect } from "react";

/* COMPONENTS */
import projectService from "../services/project.service";

function Interests() {
  /* const [visible, setVisible] = useState(false); */
  const [interestId, setInterestId] = useState(null);
  const [interests, setInterests] = useState([]);

  const getInterests = async () => {
    try {
      const response = await projectService.getInterests();
      /* console.log(response.data); */
      setInterests(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInterests();
  }, []);

  const handleToggleInterest = (id) => {
    const newInterestId = id === interestId ? null : id;
    setInterestId(newInterestId);
    setTimeout(() => {
      const element = document.getElementById(newInterestId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };

  return (
    <>
      {interests.length &&
        interests.map((interest, id) => {
          return (
            <section
              key={id}
              id={interest._id}
              onClick={() => handleToggleInterest(interest._id)}
            >
              <div className="interest">
                <img src={interest.icon} alt={interest.name} />
                <h3 className="interest_section">{interest.name}</h3>
              </div>
              <div>
                {interestId === interest._id && (
                  <>
                    {interest.aditionalInfo.map((info, id) => {
                      return (
                        <p className="interest_adicionalInfo" key={id}>
                          <span className="paragraph"></span>
                          {info}
                          <br />
                          <br />
                        </p>
                      );
                    })}
                    <section className="interest_pictures">
                      {interest.pictures.map((picture, id) => {
                        return (
                          <img src={picture} alt={interest.name} key={id} />
                        );
                      })}
                    </section>
                  </>
                )}
              </div>
            </section>
          );
        })}
    </>
  );
}

export default Interests;

/* <li className="interest">
        <img src={Temporary} alt="dogs" />
        <h3 className="interest_section">Dogs</h3>
      </li>
      {visible && <>teste</>}
      <li className="interest">
        <img src={Temporary} alt="dogs" />
        <h3 className="interest_section">Travel</h3>
      </li>
      <li className="interest">
        <img src={Temporary} alt="dogs" />
        <h3 className="interest_section">Movies</h3>
      </li>
      <li className="interest">
        <img src={Temporary} alt="dogs" />
        <h3 className="interest_section">Scuba Diving</h3>
      </li>
      <li className="interest">
        <img src={Temporary} alt="dogs" />
        <h3 className="interest_section">Music</h3>
      </li>
      <li className="interest">
        <img src={Temporary} alt="dogs" />
        <h3 className="interest_section">Board Games</h3>
      </li> */