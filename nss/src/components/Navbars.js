import React from "react";
import logo from "../Images/nss-logo.png";
import csvtu from "../Images/csvtulogo.jpg";

function Navbars() {
  return (
    <>
      <nav class="navbar navbar-expand-lg ">
        <a class="navbar-brand" href="#">
          <img
            id="nsslogo"
            src={logo}
            alt="NSS-LOGO"
            width="30"
            height="30"
            class="d-inline-block align-top"
          />
          National Service Secheme
          <br />
          <span>Chhattishgarh Swami Vivekanand University</span>
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="mr-auto"></div>
          <ul class="navbar-nav my-2 my-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
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
                Profile
              </a>
              <div
                class="dropdown-menu dropdown-menu-lg-right"
                aria-labelledby="navbarDropdown"
              >
                <h6 class="dropdown-header">Dropdown header</h6>
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbars;
