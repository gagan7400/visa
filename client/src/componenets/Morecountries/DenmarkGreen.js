import Navbar from "../Navbar";
import React, { useEffect } from "react";
import Getintouchform from "../Liveproject/Getintouchform";
import { NavLink } from "react-router-dom";
function DenmarkGreen() {
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
          <p className="IMMI">DENMARK GREEN CARD FROM INDIA</p>
          <span className="IMMI"> <NavLink className='navlink' to='/'>Home</NavLink> {">"} Denmark Green Card Scheme</span>
        </div>

        <div className="Aboutus-description-container">
          <div className="Aboutus-description">
            <div className="ica-left">
              <p className="left-text-top">
                Danish immigration department tightened the laws of immigration
                ever since 2002. Before that, the immigration department was
                really lenient on the immigrants and visa conversion rate was
                pretty high. However, post 09/11; the conditions of European
                nations have undergone many changes. Green Card Scheme is the
                point based system and in order to qualify applicants seeking
                permanent residence or long term visa in Denmark. They examine
                the applicant and points are given on different criteria. Some
                of the most important ones have been listed as under:
              </p>
              <p>
                <b>Age:</b> Extra points if the applicant is under 40 years of
                age 2. Minimum bachelors degree required but higher
                qualifications get higher points 3. Minimum one year experience
                required and higher experience means better points 4. The
                applicant should be well versed with any of the following
                languages:
              </p>
              <ul className="points">
                <li> <span className="check-icon">✓</span>English</li>
                <li><span className="check-icon">✓</span>German</li>
                <li><span className="check-icon">✓</span>Danish</li>
                <li><span className="check-icon">✓</span>Swedish</li>
                <li> <span className="check-icon">✓</span>Norwegian</li>
              </ul>
              <p>
                Minimum required score is 100 out of the above given aspects.
                One of the prime issues with the applicants in Denmark
                immigration is the fact that they don't understand their marking
                criteria. Rejection is never a good sign in visa applications
                and could hurt long term chances of the applicant to permanently
                reside in the nation. Denmark immigration is not very difficult
                and procuring Green Card could be dream for any person aspiring
                to enter the nation. We as your immigration agents make the
                process relatively simpler. We help in conducting mock tests and
                explain the whole process of marking to the clients in lucid
                manner so that they could easily score when it really matters.
                However the applicant is are required to show they can support
                themselves and their dependents for the first year in Denmark.{" "}
              </p>
            </div>
          </div>
          <Getintouchform />
        </div>
      </div>
    </div>
  );
}

export default DenmarkGreen;
