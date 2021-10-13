import React from "react";
import president from "../Images/presidentAward.jpg";
import Announcement from "./announcement";
import logo from "../Images/nss-logo.png";

function Carousel() {
  return (
    <div>
      {/* <!--Hero Section--> */}
      <section
        id="hero"
        className="d-flex justify-content-center align-items-center col-xl-9 col-xs-12 "
      >
        <div
          id="heroCarousel"
          className="container carousel carousel-fade"
          data-ride="carousel"
        >
          {/* <!--Slide-1--> */}
          <div className="carousel-item active">
            <img src={logo} style={{ opacity: "80%" }} />

            <div className="carousel-container">
              <h2 className="animate__animated animate__backInDown">
                NOT ME <span>BUT YOU</span>
              </h2>
              <p className="animate__animated animate__fadeInUp">
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
                    <!--Slide-1--> */}
          <div className="carousel-item">
            <div className="carousel-container">
              <img src="./Images/presidentAward.jpg" />

              <h2 className="animate__animated animate__backInDown">
                Lorem Ipsum-1
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
          {/* <!--End of Slide-1-->
                     <!--Slide-2--> */}
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
          {/* <!--End of Slide-2--> */}
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
        </div>
        <Announcement />
      </section>

      {/* <Announcement /> */}
    </div>
  );
}

export default Carousel;
