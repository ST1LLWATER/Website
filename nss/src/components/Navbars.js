import React from "react";
import logo from "../Images/nss-logo.png";
import csvtu from "../Images/csvtulogo.jpg";

function Navbars() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="nav-logos">
          <a className="navbar-brand" href="#">
            <img
              id="nsslogo"
              src={logo}
              alt="NSS-LOGO"
              width="100"
              height="100"
              className="d-inline-block align-top"
            />
            <img
              id="csvtu-logo"
              src={csvtu}
              alt="CSVTU-LOGO"
              width="100"
              height="100"
              className="d-inline-block align-top"
            />
            National Service Secheme
            <br />
            <span className="csvtu-header">
              Chhattishgarh Swami Vivekanand University
            </span>
          </a>
        </div>
        <button
          className="navbar-toggler navbar-toggler-left"
          type="button"
          data-toggle="collapse"
          data-target="#myNavbar"
          aria-controls="myNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="mr-auto"></div>
          <ul className="navbar-nav my-2 my-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-display="static"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Organization
              </a>
              <div
                className="dropdown-menu dropdown-menu-lg-right"
                aria-labelledby="navbarDropdown"
              >
                <h6 className="dropdown-header">ORGANIZATION</h6>
                <a className="dropdown-item" href="#">
                  About Us
                </a>
                <a className="dropdown-item" href="#">
                  Aim and Objective
                </a>
                <a className="dropdown-item" href="#">
                  Organization Chart
                </a>
                <a className="dropdown-item" href="#">
                  Administrative Structure
                </a>
                <a className="dropdown-item" href="#">
                  Training Centers
                </a>
                <a className="dropdown-item" href="#">
                  Programme Co-Ordinator
                </a>
                <a className="dropdown-item" href="#">
                  FAQ
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Announcement
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-display="static"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Events
              </a>
              <div
                className="dropdown-menu dropdown-menu-lg-right"
                aria-labelledby="navbarDropdown"
              >
                <h6 className="dropdown-header">EVENTS</h6>
                <a className="dropdown-item" href="#">
                  Regular Events
                </a>
                <a className="dropdown-item" href="#">
                  Special Events
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-display="static"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Docs
              </a>
              <div
                className="dropdown-menu dropdown-menu-lg-right"
                aria-labelledby="navbarDropdown"
              >
                <h6 className="dropdown-header">DOCUMENTS</h6>
                <a className="dropdown-item" href="#">
                  Minutes of Meeting
                </a>
                <a className="dropdown-item" href="#">
                  Strength of Volunteer
                </a>
                <a className="dropdown-item" href="#">
                  NSS Manual
                </a>
                <a className="dropdown-item" href="#">
                  Downloads
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-display="static"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Awards
              </a>
              <div
                className="dropdown-menu dropdown-menu-lg-right"
                aria-labelledby="navbarDropdown"
              >
                <h6 className="dropdown-header">AWARDS</h6>
                <a className="dropdown-item" href="#">
                  National Level
                </a>
                <a className="dropdown-item" href="#">
                  State Level
                </a>
                <a className="dropdown-item" href="#">
                  District Level
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbars;
