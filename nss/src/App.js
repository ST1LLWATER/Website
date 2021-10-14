import "./App.css";
import "./components/navbar";
import "./components/carousel";
import "./components/aboutus";
import "./components/stories";
import "./components/project";
import "./components/counter";
import "./components/team";
import "./components/announcement";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/nav";
import "./components/header";
import "./components/contactform";
// import "./assets/main.css";

import Navbar from "./components/navbar";
import Carousel from "./components/carousel";
import Aboutus from "./components/aboutus";
import Stories from "./components/stories";
import Project from "./components/project";
import Counters from "./components/counter";
import Team from "./components/team";
import Announcement from "./components/announcement";
import Navbars from "./components/Navbars";
import Footer from "./components/Footer";
import NavBar from "./components/nav";
import Header from "./components/header";
import Contactform from "./components/contactform";

//import pages
import About from "./pages/About";
import Administrativestructure from "./pages/Administrativestructure";
import AimObjective from "./pages/AimObjective";
import Contact from "./pages/Contact";
import Districtlevel from "./pages/Districtlevel";
import Download from "./pages/Download";
import Faq from "./pages/Faq";
import Institutions from "./pages/Institutions";
import Latestnews from "./pages/Latestnews";
import Minutesofmeeting from "./pages/Minutesofmeeting";
import Nationaklevel from "./pages/Nationallevel";
import Nssmanual from "./pages/Nssmanual";
import Organizationchart from "./pages/Organisationchart";
import Programcoordinator from "./pages/Programcoordinator";
import Regular from "./pages/Regular";
import Special from "./pages/Special";
import Statelevel from "./pages/Statelevel";
import Strengthofvolunteer from "./pages/Strengthofvolunteer";
import Trainingcenter from "./pages/Trainingcenter";
import Programofficer from "./pages/Programofficer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch />
        <Route path="/about">
          <About />
        </Route>
        <Route path="/admin">
          <Administrativestructure />
        </Route>
        <Route path="/aimobjective">
          <AimObjective />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/districtlevel">
          <Districtlevel />
        </Route>
        <Route path="/download">
          <Download />
        </Route>
        <Route path="/faq">
          <Faq />
        </Route>
        <Route path="/institutions">
          <Institutions />
        </Route>
        <Route path="/latestnews">
          <Latestnews />
        </Route>
        <Route path="/minutesofmeeting">
          <Minutesofmeeting />
        </Route>

        <Route path="/nationallevel">
          <Nationaklevel />
        </Route>
        <Route path="/nssmanual">
          <Nationaklevel />
        </Route>
        <Route path="/organizationchart">
          <Organizationchart />
        </Route>
        <Route path="/programcoordinator">
          <Programcoordinator />
        </Route>
        <Route path="/regular">
          <Regular />
        </Route>
        <Route path="/special">
          <Special />
        </Route>
        <Route path="/statelevel">
          <Statelevel />
        </Route>
        <Route path="/strengthofvolunteer">
          <Strengthofvolunteer />
        </Route>
        <Route path="/trainingcenter">
          <Trainingcenter />
        </Route>
        <Route path="/programofficer">
          <Programofficer />
        </Route>

        <Route exact path="/">
          <Header />
        </Route>
        {/* <Route exact path="/">
          <Carousel />
        </Route> */}

        <Route exact path="/">
          <Aboutus />
        </Route>
        <Route exact path="/">
          <Team />
        </Route>
        <Route exact path="/">
          <Counters data={99786} name={"Number of colleges"} />
        </Route>
        <Route exact path="/">
          <Stories />
        </Route>
        <Route exact path="/">
          <Project />
        </Route>
        <Route exact path="/">
          <Contactform />
        </Route>
        <Footer />
        <a
          id="scrollUp"
          href="#top"
          style={{ position: "fixed", display: "none" }}
        >
          <i class="far fa-chevron-up"></i>
        </a>
        <Switch />
      </Router>
    </>
  );
}
export default App;
{
  /* <Counters data={99786} name={"Number of volunteer"} />
      <Counters data={99786} name={"Number of Programme Officers"} /> */
}
{
  /* <a
        id="scrollUp"
        href="#top"
        style={{ position: "fixed", display: "none" }}
      >
        {" "}
        up
        <i class="far fa-chevron-up"></i>
      </a> */
}
{
  /* navbar
      carousal 
      announcement | about us 
      team
      volunteers
      Achievements
      recent events
      upcoming events
      contact us
      footer */
}
