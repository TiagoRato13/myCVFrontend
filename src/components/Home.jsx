import React, { useEffect } from "react";

/* COMPONENTS */
import Cv from "./Cv";
import EmailButton from "./EmailButton";
/* END COMPONENTS */

function Home({ activeContent, contacts }) {
  useEffect(() => {
    /* console.log(contacts); */
  }, []);

  return (
    <>
      {contacts && contacts.email && (
        <>
          <section className="home-section">
            <h1>
              Hey, I'm Tiago<span>.</span>
            </h1>
            <h3>
              I'm a <span>Full Stack Developer</span>
            </h3>
            {contacts.info &&
              contacts.info.map((info, infoId) => {
                return (
                  <p className="" key={infoId}>
                    {info}
                  </p>
                );
              })}
          </section>
          <EmailButton contacts={contacts} page={"home"} />

          <Cv activeContent={activeContent} />
        </>
      )}
    </>
  );
}

export default Home;
