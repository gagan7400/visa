import React, { useEffect } from "react";
import Navbar from "../Navbar";
import Getintouchform from "../Liveproject/Getintouchform.js";
import { NavLink } from 'react-router-dom';

function MoreCountirestourist() {
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
        <img   src="./Immigrationimage/usbuilding.jpg" className="aboutusvideo" alt="US-building_img" />
        <div className="Aboutus-text">
          <p className="IMMI">TOURIST VISA FOR INDIAN</p>
          <span className="IMMI"> <NavLink className='navlink' to='/'>Home</NavLink>{">"} Tourist</span>
        </div>

        <div className="Aboutus-description-container">
          <div className="Aboutus-description">
            <div className="More-country-container">
              <div>
                {" "}
                <NavLink className='navlink' to='/southkorea'><img
                  alt="img not found " src="./Tourist/Southkorea.jpg"
                  className="More-country-image country-card"

                />
                  <p>SOUTH KOREA</p> </NavLink>
              </div>

              <div  >
                <NavLink className='navlink' to='/japan'>
                  <img
                    alt="img not found " src="./Tourist/japann.jpg"
                    className="More-country-image country-card"
                  />
                  <p>JAPAN</p></NavLink>
              </div>

              <div   >
                <NavLink className='navlink' to='/nzland'>
                  <img
                    alt="img not found " src="./Tourist/NEWzalnd.jpg"
                    className="More-country-image country-card"
                  />
                  <p>NEWZELAND</p></NavLink>
              </div>
            </div>
            <div className="More-country-container">
              <div  >
                {" "}
                <NavLink className='navlink' to='/laos'>  <img
                  alt="img not found " src="./Tourist/Laos.jpg"
                  className="More-country-image country-card"
                />
                  <p>LOAS</p></NavLink>
              </div>

              <div c >
                {" "}
                <NavLink className='navlink' to='/usa'>
                  <img
                    alt="img not found " src="./Tourist/USS.jpg"
                    className="More-country-image country-card"
                  />
                  <p>USA</p></NavLink>
              </div>

              <div    >
                <NavLink className='navlink' to='/egypt'>
                  <img
                    alt="img not found " src="./Tourist/Egyptt.jpg"
                    className="More-country-image country-card"
                  />
                  <p>EGYPT</p></NavLink>
              </div>
            </div>
            <div className="More-country-container">
              <div  >
                <NavLink className='navlink' to='/russia'>
                  {" "}
                  <img
                    alt="img not found " src="./Tourist/Russiaa.jpg"
                    className="More-country-image country-card"
                  />
                  <p>RUSSIA</p></NavLink>
              </div>

              <div  >
                {" "}  <NavLink className='navlink' to='/sa'>
                  <img
                    alt="img not found " src="./Tourist/Southafricaa.jpg"
                    className="More-country-image country-card"
                  />
                  <p>SOUTH AFRICA</p></NavLink>
              </div>

              <div   >  <NavLink className='navlink' to='/mexico'>
                <img
                  alt="img not found " src="./Tourist/Mexicoo.jpg"
                  className="More-country-image  country-card"
                />
                <p>MEXICO</p></NavLink>
              </div>
            </div>
          </div>
          <Getintouchform />
        </div>
      </div>
    </div>
  )
}

export default MoreCountirestourist
