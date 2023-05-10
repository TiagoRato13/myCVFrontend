import React, { useState, useEffect } from "react";

/* COMPONENTS */
import projectService from "../services/project.service";

function Interests() {
  /* const [visible, setVisible] = useState(false); */
  const [interestId, setInterestId] = useState(null)
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


  const handleToggleInterest = (id) => {
    /* setVisible(true) */
    {id === interestId ? setInterestId(null) : setInterestId(id)}
  }

  return (
    <>
      
      {interests.length &&
        interests.map((interest) => {
          return (
            <section className="interest" key = {interest._id} onClick={() => handleToggleInterest(interest._id)}>
              <img src={interest.icon} alt={interest.name} />
              <h3 className="interest_section">{interest.name}</h3>
              {interestId === interest._id  && <p>{interest.adicionalInfo}</p>}
              
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
