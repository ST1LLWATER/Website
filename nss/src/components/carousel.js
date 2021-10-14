import React from "react";
import president from "../Images/presidentAward.jpg";
import Announcement from "./announcement";
import logo from "../Images/nss-logo.png";
import flag from "../Images/flag.jfif";
import hand from "../Images/hand.jfif";

function Carousel() {
  return (
    <div>
      {/* <!--Hero Section--> */}
      <section
        id="hero"
        className="d-flex justify-content-center align-items-center col-xl-12 col-xs-12 "
      >
        <div
          id="heroCarousel"
          className="container carousel carousel-fade"
          data-ride="carousel"
        >
          {/* <!--Slide-1--> */}
          <div className="carousel-item active">
            <img src={hand} style={{ opacity: "80%", width: "100%" }} />

            <div className="carousel-container">
              <h2 className="animate__animated animate__backInDown">
                NOT ME <span>BUT YOU</span>
              </h2>
              <p className="motto animate__animated animate__fadeInUp">
                The Motto of NSS "Not Me But You", reflects the essence of
                democratic living and upholds the need for self-less service.
              </p>
              <a
                href=" "
                className="btn hero-btn animate__animated animate__backInUp"
              >
                Read More
              </a>
            </div>
          </div>
          {/* <!--End of Slide-1-->
                    <!--Slide-2--> */}
          <div className="carousel-item">
            <div className="carousel-container">
              <img src={logo} height="100px" />

              <h2 className="animate__animated animate__backInDown">
                NSS LOGO
              </h2>
              <p className="animate__animated animate__fadeInUp">
                The symbol of the NSS is based on the ‘Rath’ wheel of the Konark
                Sun Temple situated in Orissa. These giant wheels of the Sun
                Temple portray the cycle of creation, preservation and release,
                and signify the movement in life across time and space.
              </p>
              <a
                href=" "
                className="btn hero-btn animate__animated animate__backInUp"
              >
                Read More
              </a>
            </div>
          </div>
          {/* <!--End of Slide-2-->
                     <!--Slide-3--> */}
          <div className="carousel-item">
            <div className="carousel-container">
              <img src="./Images/presidentAward.jpg" />
              <h2 className="animate__animated animate__backInDown">
                Lorem Ipsum-2
              </h2>
              <p className="animate__animated animate__fadeInUp">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                iure beatae alias quod, ducimus explicabo. adipisicing elit.
              </p>
              <a
                href=" "
                className="btn hero-btn animate__animated animate__backInUp"
              >
                Read More
              </a>
            </div>
          </div>
          {/* <!--End of Slide-3--> */}
          <a
            className="carousel-control-prev"
            href="#heroCarousel"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon fas fa-chevron-left"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#heroCarousel"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon fas fa-chevron-right"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
          {/* <Announcement /> */}
        </div>
        <div>
          <Announcement />
        </div>
      </section>

      {/* <Announcement /> */}
    </div>
  );
}

export default Carousel;
