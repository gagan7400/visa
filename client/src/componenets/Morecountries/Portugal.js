import Navbar from "../Navbar";
import React, { useEffect } from "react";
import Getintouchform from "../Liveproject/Getintouchform";
import { NavLink } from "react-router-dom";
function Portugal() {
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
          <p className="IMMI">
            PORTUGUESE VISITOR & TOURIST VISA - TRAVEL VISA TO PORTUGAL
          </p>
          <span className="IMMI"><NavLink className='navlink' to='/'>Home</NavLink> {">"}  Portuguese Visitor & Tourist Visa - Travel Visa To Portugal</span>
        </div>

        <div className="Aboutus-description-container">
          <div className="Aboutus-description">
            <div className="ica-left">
              <p className="left-top-text">
                There are several reasons why Portugal, a country located in the
                southern part of the continent, is so famous. Surfing and
                golfing are popular pastimes in this tropical paradise
              </p>
              <p>
                Visiting Portugal is a great idea for many reasons. The
                following are among them:
              </p>
              <ul className="points">
                <li><span className="check-icon">✓</span>There are a lot of old castles to see.</li>
                <li><span className="check-icon">✓</span>
                  Several festivals are conducted practically every month,
                  showcasing colorful floats, live music, and mouthwatering
                  food.
                </li>
                <li><span className="check-icon">✓</span>
                  Figueirinha and Comporta are two of the area's most
                  picturesque beaches, among more than 100.
                </li>
                <li><span className="check-icon">✓</span>Aveiro's canals are charming.</li>
              </ul>
              <p>
                To get a Portugal tourist visa, you'll need to know the visa
                requirements.
              </p>
              <p>
                For a 90-day stay in Portugal, you'll require a short-term visa.
                For a limited time, holders of a Schengen visa can travel freely
                within Schengen countries. It is possible that you are already
                aware that a Schengen visa can be used to enter any European
                country that is a member of the Schengen agreement. Portugal is
                eligible for visa-free travel because it is a member of the
                Schengen Area Agreement.
              </p>
              <p>
                Portugal, as well as the other 26 Schengen countries, are only
                accessible through the use of a Schengen tourist visa.
              </p>
              <h2>
                Requirements For Applying For Portugal Tourist Visa For Indians:
              </h2>
              <ul className="points">
                <li><span className="check-icon">✓</span>
                  A valid passport with a validity term of three months greater
                  than the duration of the visa you are looking for is required
                  for the visa application.
                </li>
                <li><span className="check-icon">✓</span>
                  You should bring two photographs the size of passports with
                  you if you have any old passports.
                </li>
                <li><span className="check-icon">✓</span>
                  a copy of your application form, which has been completed and
                  signed
                </li>
                <li><span className="check-icon">✓</span>
                  Proof of accommodation and flight reservations and a detailed
                  schedule of your activities for the duration of your stay in
                  Poland are all required.
                </li>
                <li><span className="check-icon">✓</span>
                  Documentation demonstrating that you have sufficient cash to
                  cover your journey and stay in the country.
                </li>
                <li><span className="check-icon">✓</span>
                  A valid medical insurance policy with a 30,000-pound limit is
                  required.
                </li>
                <li><span className="check-icon">✓</span>
                  Cover letter stating the objective of your visit to Portugal
                  as well as your travel plans in Portugal.
                </li>
                <li><span className="check-icon">✓</span>
                  It is necessary to provide proof of housing for the duration
                  of the visit.
                </li>
                <li><span className="check-icon">✓</span>
                  Documentation for civil status like marriage certificate,
                  birth certificate of children.
                </li>
                <li><span className="check-icon">✓</span>last six months’ bank statements required.</li>
              </ul>
              <p>
                Make certain that you fulfill all of the Portugal visit
                immigration rules and have all necessary travel documents before
                applying for a tourist visa.
              </p>
              <p>Ascertain that you have made all needful visa payments.</p>
              <h2>WHAT THE APLUS ADVENTURE CAN DO FOR YOU</h2>
              <p>Here are the steps for the Portugal tourist visa process:</p>
              <ul className="points">
                <li><span className="check-icon">✓</span>
                  First, provide you with guidance on the necessary
                  documentation.
                </li>
                <li><span className="check-icon">✓</span>Advise you on the money that must be shown.</li>
                <li><span className="check-icon">✓</span>Complete all of the necessary application forms.</li>
                <li><span className="check-icon">✓</span>
                  Examine the supporting papers you've submitted with your visa
                  application.
                </li>
              </ul>
              <p>
                To find out more about how we can help you get your Portugal
                Visit Visa, please call us right away!
              </p>
            </div>
          </div>
          <Getintouchform />
        </div>
      </div>
    </div>
  );
}

export default Portugal;
