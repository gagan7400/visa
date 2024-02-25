import Navbar from "../Navbar";
import React, { useEffect } from "react";
import Getintouchform from "../Liveproject/Getintouchform";
import { NavLink } from "react-router-dom";
function Contactus() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
         <Navbar/>
      <div className="About-container">
        <div className="video-overlay"></div>
        <img src="./Immigrationimage/usbuilding.jpg" className="aboutusvideo" alt="US-building_img"/>
        <div className="Aboutus-text">
          <p className="IMMI">ABROAD WORK VISA CONSULTANTS</p>
          <span className="IMMI"><NavLink className='navlink' to='/'>Home</NavLink>{">"}Work Abroad</span>
        </div>

        <div className="Aboutus-description-container d-flex justify-content-evenly mt-5 flex-wrap">
          <div className="Aboutus-description pt-2">
            <div className="ica-left">
              <div  >
              <h3 style={{color:"red"}}> Head Office</h3>
               
                <p style={{fontSize:"20px",fontWeight:"600"}}>
                  GLs Avenue 51 sec 92 gurugram haryana
                </p>
                <br />
                <p></p>
              </div>
              <div className="sub-contact">
               <h3 style={{color:"red"}}> Phone</h3>
             
                <a href="tel:(+91)-97202 91267">
                  <i className="fa fa-phone" style={{color:"black",fontSize:"20px"}}></i><span style={{fontSize:"20px",fontWeight:"600",listStyle:"none"}} > +91-97202 91267</span>
                </a>
                <br />
              
              </div>
              <br />
              <div className="sub-contact">
              <h3 style={{color:"red"}}>  Email</h3>
            
                <a href=" aplusadventureholidays@gmail.com ">
                  <i className="fa fa-envelope" style={{color:"black",fontSize:"20px"}}></i> 
                  <span style={{fontSize:"20px",fontWeight:"600"}}>   aplusadventureholidays@gmail.com     </span>
                </a>
              </div>
              <br />
             
              
            </div>
          </div>
          <Getintouchform />
        </div>
      </div>
    </div>
  );
}

export default Contactus;
