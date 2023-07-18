import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

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

import data from "./assets/homes.json";
import projectService from "./services/project.service";

function App() {
  const [menu, setMenu] = useState(false);
  const [activeContent, setActiveContent] = useState("home");
  const [showContent, setShowContent] = useState(true);
  const [contacts, setContacts] = useState([]);
  const [jsonData, setJsonData] = useState(data);
  /* const getContacts = async () => {
    try {
      const response = await projectService.getContacts();
      console.log(response.data);
      setContacts(response.data);
    } catch (error) {
      console.log(error);
    }
  }; */

  useEffect(() => {
    /* getContacts(); */
    console.log(jsonData);
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

      {showContent && (
        <>
          <div className="home-content">
            <Routes>
              <Route
                path="/"
                element={<Home activeContent="home" contacts={jsonData} />}
              />
            </Routes>
          </div>
          <div className="content">
            <Routes>
              <Route
                path="/projects"
                element={
                  <>
                    <Title activeContent={activeContent} />
                    <Projects />
                  </>
                }
              />
              <Route
                path="/contacts"
                element={
                  <>
                    <Title activeContent={activeContent} />
                    <Contacts contacts={contacts} />
                  </>
                }
              />
              <Route
                path="/education"
                element={
                  <>
                    <Title activeContent={activeContent} />
                    <Education />
                    <Footer
                      activeContent={activeContent}
                      menu={menu}
                      setMenu={setMenu}
                      showContent={showContent}
                      setShowContent={setShowContent}
                      setActiveContent={setActiveContent}
                    />
                  </>
                }
              />
              <Route
                path="/experience"
                element={
                  <>
                    <Title activeContent={activeContent} />
                    <Experience />
                    <Footer
                      activeContent={activeContent}
                      menu={menu}
                      setMenu={setMenu}
                      showContent={showContent}
                      setShowContent={setShowContent}
                      setActiveContent={setActiveContent}
                    />
                  </>
                }
              />
              <Route
                path="/interests"
                element={
                  <>
                    <Title activeContent={activeContent} />
                    <Interests />
                    <Footer
                      activeContent={activeContent}
                      menu={menu}
                      setMenu={setMenu}
                      showContent={showContent}
                      setShowContent={setShowContent}
                      setActiveContent={setActiveContent}
                    />
                  </>
                }
              />
            </Routes>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
