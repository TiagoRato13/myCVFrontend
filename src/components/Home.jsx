import React, { useState, useEffect } from "react";

/* COMPONENTS */
import Cv from "./Cv";
import EmailButton from "./EmailButton";
/* END COMPONENTS */

function Home({ activeContent, contacts }) {
  useEffect(() => {
    console.log(contacts);
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
          {/* <section className="home-contact">
            {contacts.email && (
              <>
                <NavLink
                  to="mailto:tiagorato13@hotmail.com"
                  className="home-email-box"
                >
                  <BootstrapTooltip
                    title="That's the spirit 😎!"
                    placement="right-end"
                    arrow
                    TransitionComponent={Zoom}
                  >
                    <div
                      className="home-email"
                      onMouseOver={() => handleMouseOver("email")}
                      onMouseOut={() => handleMouseOut("email")}
                    >
                      <img
                        src={
                          activeIcons["email"]
                            ? contacts.email.image.active
                            : contacts.email.image.inactive
                        }
                        alt={contacts.email.name}
                      />

                      <p>Contact me</p>
                    </div>
                  </BootstrapTooltip>
                </NavLink>
              </>
            )}
          </section> */}

          <Cv activeContent={activeContent} />
        </>
      )}
    </>
  );
}

export default Home;
