import React, { useEffect } from "react";
import Getintouchform from "../Liveproject/Getintouchform";
import Navbar from "../Navbar";
import { NavLink } from "react-router-dom";
function LAos() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div><Navbar />
      <div className="About-container">
        <div className="video-overlay"></div>
        <img src="./Immigrationimage/usbuilding.jpg" className="aboutusvideo" alt="US-building_img" />
        <div className="Aboutus-text">
          <p className="IMMI">LAOS VISA FOR INDIANS - LAOS VISA AGENT</p>
          <span className="IMMI"> <NavLink className='navlink' to='/'>Home</NavLink>{">"} Laos Tourist Visa</span>
        </div>

        <div className="Aboutus-description-container">
          <div className="Aboutus-description">
            <div className="ica-left">
              <p className="left-top-text">
                {" "}
                The Aplusadventure provide laos island visa Services in
                Delhi. We provide laos island best tourist visa consultant in
                Delhi to bring you immigration solution customized to your
                needs. Our Visa agents for laos island in Delhi provide clear
                and practical solutions to apply for laos island tourist Visa
              </p>
              <br />
              <p>
                {" "}
                The Land of many lives,laos island is one of the most
                geographically and culturally diverse country in the world. One
                must apply for laos island visa to visit the historical Bogota
                or to the eternal spring of Medellin, for a trek in Andes ant
                the Amazon, to immerse yourself in the exuberance of Cali or old
                city Cartagena
              </p>
              <br />
              <p>
                We provide personal services at every step of the passport and
                visa services. We provide a team of trained and professional
                visa agents for laos in Delhi, who understand the complex visa
                procedure and will guide you the detail paper work required to
                fill the application form that includes all documents like
                identity proof, residence proof and passport to qualify visa.
              </p>
            </div>
          </div>
          <Getintouchform />
        </div>
      </div>
    </div>
  );
}

export default LAos;
