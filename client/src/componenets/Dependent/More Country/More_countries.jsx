import React,{useEffect} from "react";
import { NavLink } from "react-router-dom";
import Getintouchform from "../../Liveproject/Getintouchform";
import Navbar from "../../Navbar";
function More_countries() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, []);
  return (
    <div>
      <Navbar/>
      <div className="About-container">
        <div className="video-overlay"></div>
        <img src="./Immigrationimage/usbuilding.jpg" className="aboutusvideo" alt="US-building_img"/>
        <div className="Aboutus-text">
          <p className="IMMI">DEPENDENT COUNTRIES</p>
          <span className="IMMI"> <NavLink className='navlink' to='/'>Home </NavLink> {">"} Dependent Countries</span>
        </div>

        <div className="Aboutus-description-container">
          <div className="Aboutus-description">
            <div className="More-country-container">
              <NavLink className='navlink' to='/chil_'>
                {" "}
                <img
                  src="./Dependent-img/bolivar.png"
                  className="More-country-image country-card"
                  alt="Chile_img"
                />
                <p>Chile</p>
              </NavLink>

              <NavLink className='navlink' to='/cze'>
                {" "}
                <img
                  src="./Dependent-img/cis.png"
                  className="More-country-image country-card"
                  alt="Czec-Republic_img"
                />
                <p>Czec-Republic</p>
              </NavLink>

             <NavLink className='navlink' to='/denmark'>
                <img
                  src="./Dependent-img/denmark.png"
                  className="More-country-image country-card"
                  alt="Denmark_img"
                />
                <p>Denmark</p>
              </NavLink>
            </div>
            <div className="More-country-container">
              <NavLink className='navlink' to='/gree' >
                {" "}
                <img
                  src="./Dependent-img/greece.png"
                  className="More-country-image country-card"
                  alt="Greece_img"
                />
                <p>Greece</p>
              </NavLink>

              <NavLink className='navlink' to='/italy' >
                {" "}
                <img
                  src="./Dependent-img/italy.png"
                  className="More-country-image country-card"
                  alt="Italy_img"
                />
                <p>Italy</p>
              </NavLink>
              <NavLink className='navlink' to='/germany'>
                {" "}
                <img
                  src="./Dependent-img/germany.png"
                  className="More-country-image country-card"
                  alt="Germany_img"
                />
                <p>Germany</p>
              </NavLink>
        
            </div>
          
          </div>
          <Getintouchform/>
        </div>
      </div>
    </div>
  );
}

export default More_countries;