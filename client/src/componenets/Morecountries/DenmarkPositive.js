import Navbar from "../Navbar";
import React, { useEffect } from "react";
import Getintouchform from "../Liveproject/Getintouchform";
import { NavLink } from "react-router-dom";
function DenmarkPositive() {
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
        <img src="./Immigrationimage/usbuilding.jpg" className="aboutusvideo" alt="US-building_img" />
        <div className="Aboutus-text">
          <p className="IMMI">DENMARK POSITIVE LIST SKILLED WORKERS
          </p>
          <span className="IMMI">
            {" "}<NavLink className='navlink' to='/'>Home</NavLink>{">"}Denmark Immigration Positive List
          </span>
        </div>

        <div className="Aboutus-description-container">
          <div className="Aboutus-description">
            <div className="ica-left">
              <div className="sub-title"><h2>Engineering</h2></div>
              <ul className="points">
                <li><span className="check-icon">✓</span>
                  <b> Mechanical engineer</b>
                  <br />
                  <b>Requirement:</b> Professional Bachelor's degree
                </li>
                <li><span className="check-icon">✓</span>
                  <b> Building engineer</b>
                  <br />
                  <b>Requirement:</b> Professional Bachelor`s degree
                </li>
                <li><span className="check-icon">✓</span>
                  {" "}
                  <b>Environmental engineer</b>
                  <br />
                  <b>Requirement:</b> Professional Bachelor's degree
                </li>
                <li><span className="check-icon">✓</span>
                  {" "}
                  <b>Energy engineer</b>
                  <br />
                  <b>Requirement:</b> Professional Bachelor's degree
                </li>
                <li><span className="check-icon">✓</span>
                  <b> Electric engineer</b>
                  <br />
                  <b>Requirement:</b> Professional Bachelor`s degree
                </li>
                <li><span className="check-icon">✓</span>
                  <b> IT engineer</b>
                  <br />
                  <b>Requirement:</b> Professional Bachelor`s degree
                </li>
                <div className="sub-title"><h2>Doctor, dentist and veterinarian</h2></div>
                <li><span className="check-icon">✓</span>
                  <b>Medical doctor</b>
                  <br />
                  <b>Requirement:</b> Master`s degree + Danish authorisation*
                </li>
                <li><span className="check-icon">✓</span>
                  <b>Medical consultant</b>
                  <br />
                  <b>Requirement:</b> Master`s degree + Danish authorisation*
                </li>
                <li><span className="check-icon">✓</span>
                  <b>Consultant doctor/chief physician</b>
                  <br />
                  <b>Requirement:</b> Master`s degree + Danish authorisation*
                </li>
                <li><span className="check-icon">✓</span>
                  <b>Hospital doctor</b>
                  <br />
                  <b>Requirement:</b> Master`s degree + Danish authorisation*
                </li>
                <li><span className="check-icon">✓</span>
                  <b>Dentist</b>
                  <br />
                  <b>Requirement:</b> Master`s degree + Danish authorisation*
                </li>
                <div className="sub-title"><h2>Other Academic Work</h2></div>
                <li><span className="check-icon">✓</span>
                  <b>Land surveyor</b>
                  <br />
                  <b>Requirement:</b> Master's degree + Danish authorisation
                </li>
                <li><span className="check-icon">✓</span>
                  <b>Pharmacist</b>
                  <br />
                  <b>Requirement:</b> Master's degree + Danish authorisation
                </li>
                <li><span className="check-icon">✓</span>
                  <b>Pharmacologist</b>
                  <br />
                  <b>Requirement:</b> Master's degree
                </li>
                <li><span className="check-icon">✓</span>
                  <b>Auditor</b>
                  <br />
                  <b>Requirement:</b> Master's degree
                </li>
                <li><span className="check-icon">✓</span>
                  <b>Business controller</b>
                  <br />
                  <b>Requirement:</b> At least three years` education at
                  university level or business school level
                </li>
                <li><span className="check-icon">✓</span>
                  <b>Financial controller</b>
                  <b>Requirement:</b> At least three years` education at
                  university level or business school level
                </li>
                <li><span className="check-icon">✓</span>
                  <b>Business analyst</b>
                  <br />
                  <b>Requirement:</b> At least three years’ education at
                  university level or business school level
                </li>
                <li><span className="check-icon">✓</span>
                  <b>Attorney</b>
                  <br />
                  <b>Requirement:</b> Danish Bachelor's and Master's degree +
                  Danish official recognition*
                </li>
                <li><span className="check-icon">✓</span>
                  <b>Legal counselor</b>
                  <br />
                  <b>Requirement:</b> Master's degree
                </li>
                <li><span className="check-icon">✓</span>
                  <b>Psychologist</b>
                  <br />
                  <b>Requirement:</b> Master's degree + Danish official
                  recognition*
                </li>
                <div className="sub-title"><h2>IT and Telecommunication</h2></div>
                <li><span className="check-icon">✓</span>
                  <b>IT architect</b>
                  <br />
                  <b>Requirement:</b> At least three years` IT education
                </li>
                <li><span className="check-icon">✓</span>
                  <b>IT consultant</b>
                  <br />
                  <b>Requirement:</b>At least three years` IT education
                </li>
                <li><span className="check-icon">✓</span>
                  <b>Programmer and systems developer</b>
                  <br />
                  <b>Requirement:</b> At least three years` IT education
                </li>
                <div className="sub-title"><h2>Educational work</h2></div>
                <li><span className="check-icon">✓</span>
                  <b>Pedagogue</b>
                  <br />
                  <b>Requirement:</b> Professional Bachelor`s degree
                </li>
                <li><span className="check-icon">✓</span>
                  <b>Social pedagogue</b>
                  <br />
                  <b>Requirement:</b> Professional Bachelor`s degree
                </li><span className="check-icon">✓</span>
                <div className="sub-title"><h2>
                  Health, Healthcare and Personal Care</h2>
                </div>
                <li><span className="check-icon">✓</span>
                  <b>Anaesthetic nurse</b>
                  <br />
                  <b>Requirement:</b> Professional Bachelor`s degree + Danish
                  authorization
                </li>
                <li><span className="check-icon">✓</span>
                  <b>Surgical nurse</b>
                  <br />
                  <b>Requirement:</b> Professional Bachelor`s degree + Danish
                  authorization *
                </li>
                <li><span className="check-icon">✓</span>
                  <b>Nurse</b>
                  <br />
                  <b>Requirement:</b> Professional Bachelor`s degree + Danish
                  authorization *
                </li>
                <li><span className="check-icon">✓</span>
                  <b>Radiographer</b>
                  <br />
                  <b>Requirement:</b> Professional Bachelor`s degree + Danish
                  authorization *
                </li>
                <li><span className="check-icon">✓</span>
                  <b>Medical laboratory technologist</b>
                  <br />
                  <b>Requirement:</b> Professional Bachelor`s degree + Danish
                  authorization*
                </li>
                <div className="sub-title"><h2>Teaching in elementary schools</h2></div>
                <li><span className="check-icon">✓</span>
                  <b>Primary and lower secondary school teacher</b>
                  <br />
                  <b>Requirement:</b> Professional Bachelor's degree + Danish
                  authorisation
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

export default DenmarkPositive;
