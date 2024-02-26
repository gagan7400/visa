import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Footer extends Component {
  render() {
    const shapeStyle = {
      visibility: "visible",
      animationDuration: "1s",
      animationDelay: "0.3s",
      animationName: "fadeInLeft",
    };

    return (
      <div className="footer ">
        {/*#263238 */}
        <div
          className="footer-top-wrap  mt-0"
          style={{
            paddingTop: "44px",
          }}
        >
          <div className="container">
            <div className="footer-widgets-wrap">
              <div className="row">
                <div className="col-lg-5">
                  <div className="footer-widget">
                    <div className="footer-about">
                      <div className="footer-logo logo">
                        <img
                          src="./Aboutimage/logofooter.png"
                          alt=""
                          width={"280px"}
                        />
                      </div>
                      <div className="footer-text mt-4 w-75">
                        <p style={{ fontWeight: "700" }}>
                          APLUS ADVENTURE a renowned and registered Visa
                          Consultant in haryana and has assisted thousands of
                          clients to get their Visa.
                        </p>
                      </div>
                      <div className="footer-social-icons">
                        <a
                          href="https://www.instagram.com/aplusadventure1?igsh=bnN4NmJ4Z3Z5Nmo%3D"
                          target="_blank"
                        >
                          <i className="bi bi-instagram ps-2 pe-2  me-3 btn i-2"></i>
                        </a>
                        <a
                          href="https://www.facebook.com/royalpandit9720?mibextid=ZbWKwL"
                          target="_blank"
                        >
                          <i className="bi bi-facebook ps-2 pe-2  me-3 btn i-1"></i>
                        </a>
                        <a
                          href="https://x.com/aplusadventure1?t=aXDepMCQnHFtQkTKYmZYTg&s=08"
                          target="_blank"
                        >
                          <i className="bi bi-twitter ps-2 pe-2  me-3 btn i-1"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/aplus-adventure-8620392b7" target="_blank">
                          <i className="bi bi-linkedin ps-2 pe-2  me-3 btn i-1"></i>
                        </a>
                        <a href="https://youtube.com/@AplusAdventurevisa?si=uMd2nlq3_sE4V5UY" target="_blank">
                          <i className="bi bi-youtube ps-2 pe-2  me-5 btn i-3"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="footer-widget">
                    <h3
                      className="fw-title pb-4 "
                      style={{ fontWeight: "600" }}
                    >
                      Useful Links
                    </h3>
                    <ul
                      className="list-wrap"
                      style={{ marginLeft: "-33px", fontWeight: "600" }}
                    >
                      <p>
                        <NavLink
                          to="/about"
                          className="text-reset text-decoration-none"
                        >
                          About Us
                        </NavLink>
                      </p>
                      <p>
                        <NavLink
                          to="/testimonial"
                          className="text-reset text-decoration-none"
                        >
                          Testimonial
                        </NavLink>
                      </p>
                      <p>
                        <NavLink
                          to="/faq"
                          className="text-reset text-decoration-none"
                        >
                          FAQ
                        </NavLink>
                      </p>
                      <p>
                        <NavLink
                          to="/contactus"
                          className="text-reset text-decoration-none"
                        >
                          Contact Us
                        </NavLink>

                      </p>
                      <p>
                        <NavLink
                          to="/adminlogin"
                          className="text-reset text-decoration-none"
                        >
                          Admin
                        </NavLink>

                      </p>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="footer-widget">
                    <h3 className="fw-title ">Contacts</h3>
                    <ul
                      className="list-wrap pt-4"
                      style={{ marginLeft: "-33px", fontWeight: "600" }}
                    >

                      <div className="pb-4">
                        GLS Avenue 51 Sec-92 , Gurugram , Haryana
                      </div>
                      <div className="pb-4">
                      (24 x 7) Open
                      </div>
                      <div className="pb-4">
                        {" "}
                        <a href="tel:87662 47483" style={{ textDecoration: "none", fontSize: "16px", color: "white" }}>
                          (+91)-87662 47483
                        </a>

                      </div>
                      <div>
                        <a href="mailto:aplusadventureholidays@gmail.com" style={{ textDecoration: "none", fontSize: "16px", color: "white" }}>
                          aplusadventureholidays@gmail.com
                        </a>
                      </div>

                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="text-center pt-4 pb-2"
                style={{ fontWeight: "600" }}
              >
                <NavLink
                  to="/refundpolicy"
                  className="text-decoration-none"
                  style={{ color: " rgb(231 214 255)" }}
                >
                  <span className="ps-4 ">Refund Policy</span>
                </NavLink>
                <NavLink
                  to="privacypolicy"
                  className="text-decoration-none"
                  style={{ color: " rgb(231 214 255)" }}
                >
                  <span className="ps-4 ">Privacy Policy</span>
                </NavLink>
                <NavLink
                  to="termandconditions"
                  className="text-decoration-none"
                  style={{ color: "rgb(231 214 255)" }}
                >
                  <span className="ps-4 ">Terms and Conditions</span>
                </NavLink>
                <NavLink
                  to="cancellationpolicy"
                  className="text-decoration-none"
                  style={{ color: "rgb(231 214 255)" }}
                >
                  {" "}
                  <span className="ps-4 ">Cancellation Policy</span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <div
          className="copyright-wrap p-4 text-center"
          style={{
            background: "#162842",
            color: "black",
            borderTop: "1px solid #a068f4",
            alignItems: "center",
          }}
        >
          <div className="container text-light" style={{ fontWeight: "600" }}>
            Copyright © 2024 Aplus Adventure Visa. All Rights Reserved.
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
