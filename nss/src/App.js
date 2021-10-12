import "./App.css";
import "./components/navbar";
import "./components/carousel";
import "./components/aboutus";
import "./components/stories";
import "./components/project";
import "./components/counter";
import "./components/team";
import "./components/announcement";

import Navbar from "./components/navbar";
import Carousel from "./components/carousel";
import Aboutus from "./components/aboutus";
import Stories from "./components/stories";
import Project from "./components/project";
import Counters from "./components/counter";
import Team from "./components/team";
import Announcement from "./components/announcement";
import Navbars from "./components/Navbars";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Navbars />
      <Carousel />
      <Announcement />
      <Aboutus />
      <Team />
      <Counters data={99786} name={"Number of colleges"} />
      {/* <Counters data={99786} name={"Number of volunteer"} />
      <Counters data={99786} name={"Number of Programme Officers"} /> */}
      <Stories />
      <Project />
      <a
        id="scrollUp"
        href="#top"
        style={{position:"fixed", display: "none"}}
      > up
        <i class="zmdi zmdi-chevron-up"></i>
      </a>
      {/* navbar
      carousal 
      announcement | about us 
      team
      volunteers
      Achievements
      recent events
      upcoming events
      contact us
      footer */}
    </>
  );
}
export default App;
