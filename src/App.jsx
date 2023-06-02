import React, { useState, useEffect } from "react";

import "./App.css";
import MenuBox from "./components/MenuBox";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Interests from "./components/Interests";
import Title from "./components/Title";
import Footer from "./components/Footer";

import projectService from "./services/project.service";

function App() {
  const [menu, setMenu] = useState(false);
  const [activeContent, setActiveContent] = useState("home");
  const [showContent, setShowContent] = useState(true);
  const [contacts, setContacts] = useState([]);

  const getContacts = async () => {
    try {
      const response = await projectService.getContacts();
      console.log(response.data);
      setContacts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div className="App">
      <MenuBox
        menu={menu}
        setMenu={setMenu}
        showContent={showContent}
        setShowContent={setShowContent}
        activeContent={activeContent}
        setActiveContent={setActiveContent}
      />

      <div className={` ${activeContent !== "home" ? "title" : "titleHome"}`}>
        {showContent && activeContent !== "home" && (
          <Title activeContent={activeContent} />
        )}
        {showContent && activeContent === "home" && <Title activeContent=" " />}
      </div>
      <div className="home-content">
        {showContent && activeContent === "home" && (
          <Home activeContent={activeContent} contacts={contacts} />
        )}
      </div>
      <div className="content">
        {showContent && activeContent === "projects" && <Projects />}
        {showContent && activeContent === "contacts" && (
          <Contacts contacts={contacts} />
        )}
        {showContent && activeContent === "education" && <Education />}
        {showContent && activeContent === "experience" && <Experience />}
        {showContent && activeContent === "interests" && <Interests />}
      </div>
      <div>
        {showContent && activeContent !== "home" && (
          <Footer
            activeContent={activeContent}
            menu={menu}
            setMenu={setMenu}
            showContent={showContent}
            setShowContent={setShowContent}
            setActiveContent={setActiveContent}
          />
        )}
      </div>
    </div>
  );
}

export default App;
