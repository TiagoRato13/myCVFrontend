import React, { useState, useEffect } from "react";

import projectService from "../services/project.service";

function Home() {
  const [home, setHome] = useState([]);

  const getHome = async () => {
    try {
      const response = await projectService.getHome();
      /* console.log(response.data); */
      setHome(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHome();
  }, []);

  return (
    <>
      {home && (
        <>
          <section className="home_section_one">
            <img src={home.picture} alt="" className="home_picture" />
            <div>
              {home.info &&
                home.info.map((info, id) => {
                  return <p key={id}>{info}</p>;
                })}
            </div>
          </section>
        </>
      )}
      <section>{home.linkedin}</section>
      <section>{home.github}</section>
      <section>{home.email}</section>
      <section>{home.phone}</section>
    </>
  );
}

export default Home;
