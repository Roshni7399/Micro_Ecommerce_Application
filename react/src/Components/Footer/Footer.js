import React from "react";
import "../Footer/Footer.css";

export default function Footer() {
  return (
    <>
      {/* Footer start */}
      <footer class="footer-bs mt-4">
        <div class="row">
          <div class="col-md-3 footer-brand animated fadeInLeft">
            <h2>Logo</h2>
            <p>
              {" "}
              Art is a visual object or experience consciously created through
              an expression of skill or imagination.{" "}
            </p>
            <p>© 2022 | All rights reserved</p>
          </div>
          <div class="col-md-4 footer-nav animated fadeInUp">
            <h4>Menu —</h4>
            <div class="col-md-6">
              <ul class="pages">
                <li>
                  <a href="#">Login</a>
                </li>
                <li>
                  <a href="#">Sign Up</a>
                </li>
                {/* <li>
                  <a href="#">Admin Login</a>
                </li> */}
              </ul>
            </div>
            <div class="col-md-6">
              <ul class="list">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Contacts</a>
                </li>
                <li>
                  <a href="#">Terms & Condition</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-2 footer-social animated fadeInDown">
            <h4>Follow Us</h4>
            <ul>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">RSS</a>
              </li>
            </ul>
          </div>
          <div class="col-md-3 footer-ns animated fadeInRight">
            <h4>Newsletter</h4>
            <p>A rover wearing a fuzzy suit doesn’t alarm the real penguins</p>
            <p>
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search for..."
                />
                <span class="input-group-btn">
                  <button class="btn btn-default" type="button">
                    <span class="glyphicon glyphicon-envelope"></span>
                  </button>
                </span>
              </div>
            </p>
          </div>
        </div>
      </footer>
      {/* footer end */}
    </>
  );
}
