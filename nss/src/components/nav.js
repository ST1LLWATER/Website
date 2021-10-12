import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import logo from "../Images/nss-logo.png";
import csvtu from "../Images/csvtulogo.jpg";
import { BrowserRouter as Router, Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="App">
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="xl"
        bg="primary"
        variant="light"
      >
        <ReactBootStrap.Navbar.Brand href="/">
          <a href="#">
            <img
              id="nsslogo"
              src={logo}
              alt="NSS-LOGO"
              height="100"
              float="left"
            />
          </a>
          <a href="#">
            <img
              id="csvtu-logo"
              src={csvtu}
              alt="CSVTU-LOGO"
              height="100"
              float="left"
            />
          </a>
          <p>NATIONAL SERVICE SCHEME</p>
          <p>Chhattisgarh Swami Vivekanand University</p>
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav ">
          <ReactBootStrap.Nav className="mr-auto main-nav">
            <Link to="/">
              <ReactBootStrap.Nav.Link href="/">Home</ReactBootStrap.Nav.Link>
            </Link>
            <ReactBootStrap.NavDropdown
              title="Organization"
              id="collasible-nav-dropdown"
            >
              <ReactBootStrap.NavDropdown.Item href="about">
                About Us
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href="aimobjective">
                Aim and Objective
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href="organizationchart">
                Organization Chart
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href="admin">
                Administrative Structure
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href="admin">
                Training Centers
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href="admin">
                Programme Co-ordinator
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href="faq">
                FAQ
              </ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>
            <ReactBootStrap.NavDropdown
              title="Awards"
              id="collasible-nav-dropdown"
            >
              <ReactBootStrap.NavDropdown.Item href="nationallevel">
                National Level
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href="statelevel">
                State Level
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href="districtlevel">
                District Level
              </ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>
            <ReactBootStrap.NavDropdown
              title="Docs"
              id="collasible-nav-dropdown"
            >
              <ReactBootStrap.NavDropdown.Item href="minutesofmeetingSW">
                Minutes of meeting
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href="aimobjective">
                Strength of volunteer
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href="organizationchart">
                NSS Manual
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href="organizationchart">
                Download
              </ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>
            <ReactBootStrap.NavDropdown
              title="Events"
              id="collasible-nav-dropdown"
            >
              <ReactBootStrap.NavDropdown.Item href="regular">
                Regular Events
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href="special">
                Special Events
              </ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>
            <Link to="/latestnews">
              <ReactBootStrap.Nav.Link href="Announcement">
                Announcement
              </ReactBootStrap.Nav.Link>
            </Link>

            <Link to="/programofficer">
              <ReactBootStrap.Nav.Link href="ProgramOfficers">
                Programme Officers
              </ReactBootStrap.Nav.Link>
            </Link>
            <Link to="/contact">
              <ReactBootStrap.Nav.Link eventKey={2} href="#Contact-Us">
                Contact Us
              </ReactBootStrap.Nav.Link>
            </Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </div>
  );
}

export default NavBar;

// import React from "react";
// import * as ReactBootStrap from "react-bootstrap";
// function NavBar() {
//   return (
//     <div>
//       <ReactBootStrap.Navbar bg="primary" expand="xl" variant="dark">
//         <ReactBootStrap.Container fluid>
//           <ReactBootStrap.Navbar.Brand href="#">
//             Navbar Offcanvas
//           </ReactBootStrap.Navbar.Brand>
//           <ReactBootStrap.Navbar.Toggle aria-controls="offcanvasNavbar" />
//           <ReactBootStrap.Navbar.Offcanvas
//             id="offcanvasNavbar"
//             aria-labelledby="offcanvasNavbarLabel"
//             placement="end"
//           >
//             <ReactBootStrap.Offcanvas.Header closeButton>
//               <ReactBootStrap.Offcanvas.Title id="offcanvasNavbarLabel">
//                 Offcanvas
//               </ReactBootStrap.Offcanvas.Title>
//             </ReactBootStrap.Offcanvas.Header>
//             <ReactBootStrap.Offcanvas.Body>
//               <ReactBootStrap.Nav className="justify-content-end flex-grow-1 pe-3">
//                 <ReactBootStrap.Nav.Link href="#action1">
//                   Home
//                 </ReactBootStrap.Nav.Link>
//                 <ReactBootStrap.Nav.Link href="#action2">
//                   Link
//                 </ReactBootStrap.Nav.Link>
//                 <ReactBootStrap.NavDropdown
//                   title="Dropdown"
//                   id="offcanvasNavbarDropdown"
//                 >
//                   <ReactBootStrap.NavDropdown.Item href="#action3">
//                     Action
//                   </ReactBootStrap.NavDropdown.Item>
//                   <ReactBootStrap.NavDropdown.Item href="#action4">
//                     Another action
//                   </ReactBootStrap.NavDropdown.Item>
//                   <ReactBootStrap.NavDropdown.Divider />
//                   <ReactBootStrap.NavDropdown.Item href="#action5">
//                     Something else here
//                   </ReactBootStrap.NavDropdown.Item>
//                 </ReactBootStrap.NavDropdown>
//               </ReactBootStrap.Nav>
//             </ReactBootStrap.Offcanvas.Body>
//           </ReactBootStrap.Navbar.Offcanvas>
//         </ReactBootStrap.Container>
//       </ReactBootStrap.Navbar>
//     </div>
//   );
// }

// export default NavBar;
