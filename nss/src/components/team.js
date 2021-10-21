import React from "react";
import "../css/team.css";
import pc from "../Images/pp.jfif";
import ASK from "../Images/ASKabir.jfif";
import SS from "../Images/SS.jpg";
import MKV from "../Images/MKVerma.jfif";

function Team() {
  return (
    <div>
      <section class="team-area gray-bg pt-120 pb-90">
        <div class="container">
          <div
            class="section-title text-center aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="bg-title">
              <h1>Team</h1>
            </div>
            <h5>Our Team</h5>
            {/* <h2>Our Leaders</h2> */}
          </div>
          <div class="row d-flex justify-content-center">
            <div class="col-xl-4 col-lg-4 col-md-6 d-flex justify-content-center my-2">
              <div
                class="team-single text-center mb-30 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div class="team-top">
                  <div className="d-flex justify-content-center">
                    <div class="team-thumb ">
                      <img src={MKV} alt="" />
                    </div>
                  </div>
                </div>
                <div class="team-text">
                  <h3>
                    <a href="team-details.html">Dr. M K Verma</a>
                  </h3>
                  <span>Vice Chancellor , CSVTU</span>
                </div>
              </div>
              <div className="connections d-flex flex-column">
                <a href="#">
                  <i class="fab fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fas fa-envelope"></i>
                </a>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 d-flex justify-content-center my-2">
              <div
                class="team-single text-center mb-30 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div class="team-top">
                  <div className="d-flex justify-content-center">
                    <div class="team-thumb">
                      <img src={ASK} alt="" />
                    </div>
                  </div>
                </div>
                <div class="team-text">
                  <h3>
                    <a href="team-details.html">Shri A. S. Kabir</a>
                  </h3>
                  <span>Regional Director, MP-CG, Bhopal</span>
                </div>
              </div>
              <div className="connections d-flex flex-column">
                <a href="#">
                  <i class="fab fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fas fa-envelope"></i>
                </a>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>

            <div class="col-xl-4 col-lg-4 col-md-6 d-flex justify-content-center my-2">
              <div
                class="team-single text-center mb-30 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div class="team-top">
                  <div className="d-flex justify-content-center">
                    <div class="team-thumb">
                      <img src={SS} alt="Dr Samrendra Singh" />
                    </div>
                  </div>
                </div>
                <div class="team-text">
                  <h3>
                    <a href="team-details.html">Dr. Samrendra Singh </a>
                  </h3>
                  <span>State NSS Officer , Chhattisgarh</span>
                </div>
              </div>
              <div className="connections d-flex flex-column">
                <a href="#">
                  <i class="fab fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fas fa-envelope"></i>
                </a>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 d-flex justify-content-center my-2">
              <div
                class="team-single text-center mb-30 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div class="team-top">
                  <div className="d-flex justify-content-center">
                    <div class="team-thumb">
                      <img src={pc} alt="" />
                    </div>
                  </div>
                </div>
                <div class="team-text">
                  <h3>
                    <a href="team-details.html">Dr. D S Raghuwanshi</a>
                  </h3>
                  <span>Programme Coordinator, CSVTU</span>
                </div>
              </div>
              <div className="connections d-flex flex-column">
                <a href="#">
                  <i class="fab fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fas fa-envelope"></i>
                </a>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 d-flex justify-content-center my-2">
              <div
                class="team-single text-center mb-30 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div class="team-top">
                  <div className="d-flex justify-content-center">
                    <div class="team-thumb">
                      <img src={pc} alt="" />
                    </div>
                  </div>
                </div>
                <div class="team-text">
                  <h3>
                    <a href="team-details.html">Dr. D S Raghuwanshi</a>
                  </h3>
                  <span>Programme Coordinator, CSVTU</span>
                </div>
              </div>
              <div className="connections d-flex flex-column">
                <a href="#">
                  <i class="fab fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fas fa-envelope"></i>
                </a>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            {/* <div class="col-xl-4 col-lg-4 col-md-6">
              <div
                class="team-single text-center mb-30 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div class="team-top">
                  <div class="team-thumb mb-30">
                    <img src={pc} alt="" />
                  </div>
                  <ul class="team-social">
                    <li>
                      <a href="#">
                        <i class="fab fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fas fa-envelope"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="team-text">
                  <h3>
                    <a href="team-details.html">Dr. D S Raghuwanshi</a>
                  </h3>
                  <span>Programme Coordinator, CSVTU</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;
