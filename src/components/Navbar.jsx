import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-warning navbar-warning py-3 fixed-top">
        <div className="container">
          <a href="a" className="navbar-brand">
            Frontend BootCamp
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="#learn" className="nav-link">
                  What You'll Learn
                </a>
              </li>
              <li className="nav-item">
                <a href="#questions" className="nav-link">
                  Questions
                </a>
              </li>
              <li className="nav-items">
                <a href="#instructions" className="nav-link">
                  Instructions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
