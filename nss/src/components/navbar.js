import React from "react";
import logo from "../Images/nss-logo.png";
import csvtu from "../Images/csvtulogo.jpg";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light nav-bg  py-2"
      id="mainNav"
    >
      <div className="container">
        <a href="#">
          <img id="nsslogo" src={logo} alt="NSS-LOGO" />
        </a>
        <a href="#">
          <img id="csvtu-logo" src={csvtu} alt="CSVTU-LOGO" />
        </a>

        <a className="navbar-brand text-white" href="#">
          National Service Scheme
          <br />
          <span>Chhattishgarh Swami Vivekanand University</span>
        </a>

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
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="navbar-nav ml-auto my-2 my-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
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
                class="dropdown-menu dropdown-menu-lg-right"
                aria-labelledby="navbarDropdown"
              >
                <h6 class="dropdown-header">ORGANIZATION</h6>
                <a class="dropdown-item" href="#">
                  About Us
                </a>
                <a class="dropdown-item" href="#">
                  Aim and Objective
                </a>
                <a class="dropdown-item" href="#">
                  Organization Chart
                </a>
                <a class="dropdown-item" href="#">
                  Administrative Structure
                </a>
                <a class="dropdown-item" href="#">
                  Training Centers
                </a>
                <a class="dropdown-item" href="#">
                  Programme Co-Ordinator
                </a>
                <a class="dropdown-item" href="#">
                  FAQ
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Announcement
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Docs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Awards
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i class="fa fa-search" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
