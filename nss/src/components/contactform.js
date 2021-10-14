import React from "react";

function Contactform() {
  return (
    <div>
      {/* <!--page title starts--> */}
      <section class="pagetitle text-left">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2 class="text-white">Contact Us</h2>
            </div>
          </div>
        </div>
      </section>
      {/* <!--page title ends--> */}

      <section class="aboutw">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h2>Get In Touch With Us</h2>

              <div class="underline"></div>
              <br />
              <h3>HAVE ANY QUERIES | SEND IT TO US</h3>
              <div class="form-content text-white">
                <p>
                  Morbi leo felis, consequat et fringilla vel, sollicitudin vel
                  lorem. Nulla facilisi. Vivamus egestas, magna quis blandit
                  facilisis, neque nunc bibendum tellus, a feugiat erat sapien
                  non tortor. Nullam at lobortis turpis, vitae aliquet ipsum.
                  Proin id maximus risus. Vivamus vel varius urna.{" "}
                </p>
                <p>
                  <strong>phone no:</strong> +91-9898787888
                </p>
                <p>
                  <strong>Or email us At :</strong> Webmakers@gmail.com
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <form>
                <div class="form-row">
                  <div class="form-group col-md-12">
                    <label class="name">Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputname"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-12">
                    <label class="name">E-mail</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputemail"
                      placeholder="E-mail"
                    />
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label class="name">Subject</label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputsubject"
                        placeholder="Subject"
                      />
                    </div>
                    <div class="form-group col-md-12">
                      <label class="message">Your feedback</label>
                      <textarea
                        class="form-control"
                        id="yourfeedback"
                        rows="5"
                        placeholdetr="your feedback"
                      ></textarea>
                    </div>
                    <button type="submit" class="btn btn-dark">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <!--about contact ends--> */}
    </div>
  );
}

export default Contactform;
