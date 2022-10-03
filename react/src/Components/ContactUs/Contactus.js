import React from "react";
import { Link } from "react-router-dom";
import "../ContactUs/Contactus.css";

export default function ContactUs() {
  return (
    <>
      {/* Back Button */}
      <div>
        <Link to="/">
          <button className="btn btn-light" align="right">
            🔙Back
          </button>
        </Link>
      </div>

      {/* Contact us */}
      <div class="container animated fadeIn">
        <div class="row">
          <h1 class="header-title"> Contact Us </h1>
          <hr></hr>

          <div className="col-md-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238130.11877753257!2d78.93242246773603!3d21.161028196591193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf13%3A0x19b37d06d0bb3e2b!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1657258478821!5m2!1sen!2sin"
              style={{ width: "100%", height: "320px", border: "0" }}
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="col-md-6">
            <form action="form.php" class="contact-form" method="post">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  name="nm"
                  placeholder="Name"
                  required=""
                  autofocus=""
                />
              </div>

              <div class="form-group form_left">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  name="em"
                  placeholder="Email"
                  required=""
                />
              </div>

              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="phone"
                  onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                  maxlength="10"
                  placeholder="Mobile No."
                  required=""
                />
              </div>
              <div class="form-group">
                <textarea
                  class="form-control textarea-contact"
                  rows="5"
                  id="comment"
                  name="FB"
                  placeholder="Type Your Message/Feedback here..."
                  required=""
                ></textarea>
                <br />
                <button class="btn btn-info btn-send">
                  {" "}
                  <span class="glyphicon glyphicon-send"></span> Send{" "}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div class="container second-portion">
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-lg-3">
              <div class="box">
                <div class="icon">
                  <div class="image">
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                  </div>
                  <div class="info">
                    {/* <h3 class="title">MAIL & WEBSITE</h3> */}
                    <p>
                      <i class="fa fa-envelope" aria-hidden="true"></i> &nbsp;
                      roshnimanmode07@gmail.com
                      <br />
                      <br />
                      <i class="fa fa-globe" aria-hidden="true"></i> &nbsp;
                      www.ecommerce.com
                    </p>
                  </div>
                </div>
                <div class="space"></div>
              </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-lg-3">
              <div class="box">
                <div class="icon">
                  <div class="image">
                    <i class="fa fa-mobile" aria-hidden="true"></i>
                  </div>
                  <div class="info">
                    <h3 class="title"></h3>
                    <p>
                      <i class="fa fa-mobile" aria-hidden="true"></i> &nbsp;
                      (+91)-9624XXXXX
                      <br />
                      <br />
                      <i class="fa fa-mobile" aria-hidden="true"></i> &nbsp;
                      (+91)-756706XXXX
                    </p>
                  </div>
                </div>
                <div class="space"></div>
              </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-lg-3">
              <div class="box">
                <div class="icon">
                  <div class="image">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                  </div>
                  <div class="info">
                    <h3 class="title"></h3>
                    <p>
                      <i class="fa fa-map-marker" aria-hidden="true"></i> &nbsp;
                      House no. 691 Hansapuri Choti Khadan, CA Road ,Nagpur, 440018
                    </p>
                  </div>
                </div>
                <div class="space"></div>
              </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-lg-3">
              <div class="box">
                <div class="icon">
                  <div class="image">
                    <i class="fa-solid fa-handshake" aria-hidden="true"></i>
                  </div>
                  <div class="info">
                    <h3 class="title"></h3>
                    <p>
                    <i class="fa-solid fa-handshake" aria-hidden="true"></i> &nbsp;
                      {/* <i class="fa fa-map-marker" aria-hidden="true"></i> &nbsp; */}
                      1)S&R Car Rental Services<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(+91)-9624XXXXX<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2)Anime Pranali<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(+91)-9624XXXXX
                    </p>
                  </div>
                </div>
                <div class="space"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}