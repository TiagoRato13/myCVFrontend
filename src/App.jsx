import React, { useState } from "react";
import { NavLink } from "react-router-dom";

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

function App() {
  const [menu, setMenu] = useState(false);
  const [activeContent, setActiveContent] = useState("home");
  const [showContent, setShowContent] = useState(true);

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
        {showContent && activeContent === "home" && <Home activeContent={activeContent}/>}
      </div>
      <div className="content">
        {showContent && activeContent === "projects" && <Projects />}
        {showContent && activeContent === "contacts" && <Contacts />}
        {showContent && activeContent === "education" && <Education />}
        {showContent && activeContent === "experience" && <Experience />}
        {showContent && activeContent === "interests" && <Interests />}
      </div>
      <div>
        {showContent && activeContent !== "home" && (
          <Footer activeContent={activeContent} />
        )}
      </div>
    </div>
  );
}

export default App;
