import React from "react";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">
            Tiago Rato
          </a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Interests
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
