import Navbar from "../Navbar";
import React, { useEffect } from "react";
import Getintouchform from "../Liveproject/Getintouchform";
import { NavLink } from "react-router-dom";

function TermsAndConditions() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <Navbar />
      <div className="About-container">
        <div className="video-overlay"></div>
        <img
          src="./Immigrationimage/usbuilding.jpg"
          autoPlay
          muted
          loop
          className="aboutusvideo"
          alt="US-building_img"
        />
        <div className="Aboutus-text">
          <p className="IMMI">TERMS & CONDITIONS - APLUS ADVENTURE</p>
          <span className="IMMI"> <NavLink className='navlink' to='/'>Home</NavLink>{">"} Terms And Conditions </span>
        </div>

        <div className="Aboutus-description-container">
          <div className="Aboutus-description">
            <div className="ica-left">
              <p className="left-top-text">
                <h3>Terms & Conditions:</h3>
              </p>
              <ul>
                <li>
                  {" "}
                  We cannot guarantee visa approval or influence the issuing
                  authorities' decisions. Visa approval is solely at the
                  discretion of the issuing authorities.
                </li>
                <li>
                  {" "}
                  Although our team takes very special care in updating visa
                  requirements on our website, the possibility of human errors
                  cannot be ruled out.
                </li>
                <li>
                  {" "}
                  Many times, Embassies/Consulates change the visa requirements
                  without any prior notice or publications and we come across
                  such changes only after we apply for the respective visas.
                  Hence, there may be some delay in website updates for such
                  cases.
                </li>
                <li>
                  {" "}
                  In case of any discrepancy in visa requirements on our
                  website, we request you to please highlight and oblige us.
                  Partners like you are the most critical component of our
                  success.
                </li>
                <li>
                  {" "}
                  You are responsible for the accuracy of the information you
                  provide in your documents.
                </li>
                <li>
                  {" "}
                  Once the application for visa is submitted, visa fee and our
                  service fee is non-refundable.
                </li>
              </ul>
            </div>
          </div>
          <Getintouchform />
        </div>
      </div>
    </div>
  );
}

export default TermsAndConditions;
