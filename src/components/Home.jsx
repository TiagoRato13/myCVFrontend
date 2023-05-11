import React, { useState, useEffect } from "react";

import projectService from "../services/project.service";

function Home() {
  const [info, setInfo] = useState([]);

  const getHome = async () => {
    try {
      const response = await projectService.getHome();
      console.log(response.data);
      setInfo(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHome();
  }, []);

  return (
  <section className="teste">
    <div>Secção Home</div>
    <div>{info.info}</div>
    <img src={info.picture} alt="" />
    <div>{info.github}</div>
    <div>{info.linkedin}</div>
    <div>{info.phone}</div>
    <div>{info.email}</div>
  </section>
    );
}

export default Home;
