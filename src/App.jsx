import React, { useState } from "react";

import "./App.css";
import MenuBox from "./components/MenuBox";
import Home from "./components/Home";
import About from "./components/About";
import CV from "./components/CV";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Interests from "./components/Interests";

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
      {showContent && activeContent === "home" && <Home />}
      {showContent && activeContent === "about" && <About />}
      {showContent && activeContent === "cv" && <CV />}
      {showContent && activeContent === "education" && <Education />}
      {showContent && activeContent === "experience" && <Experience />}
      {showContent && activeContent === "interests" && <Interests />}
    </div>
  );
}

export default App;
