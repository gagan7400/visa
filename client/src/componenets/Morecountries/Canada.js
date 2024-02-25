import Navbar from "../Navbar";
import React, { useEffect } from "react";
import Getintouchform from "../Liveproject/Getintouchform";
import { NavLink } from "react-router-dom";
function Canada() {
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
            APPLYING TO WORK IN CANADA
          </p>
          <span className="IMMI">
            {" "}<NavLink className='navlink' to='/'>Home</NavLink>{">"} Canada Work Permit Visa
            Portugal
          </span>
        </div>

        <div className="Aboutus-description-container">
          <div className="Aboutus-description">
            <div className="ica-left">
              <p className="left-text-top">
                Mali, a land of many cultures and credos; a scurry of heritage,
                life and action that’s squashed in between the rolling Sahel and
                the everlasting dunes of Sahara Desert. Mali is blessed by an
                astonishing amount of beauty, talents, wonders and knowledge
                famous for salt-caked outposts of Taoudenni, throbbing market
                town of Sikasso, the lion-spotted reaches of Boucle de Baoulé
                and much more.
              </p>
              <p>
                The Aplusadventures bequeath with information on
                procedures applicable to foreign nationals and Indian citizens
                who wish to apply for visa to travel to Mali. Indian applicants
                who wish to explore Mali need visa that can be applied from
                Malian diplomatic missions.
              </p>
              <p>
                The Applicants should have valid passport for at least 3 months,
                a covering letter from applicant mentioning the purpose of
                visit, duration of stay etc, return journey ticket, hotel
                confirmation and proof of fund support your visit. Our Mali
                Tourist Visa Consultants in Delhi will guide you the detail
                paper work required to fill the application form.
              </p>
              <p>
                With the help of our Mali Tourist Visa for Indian, one can apply
                for Mali tourist visa for tourism, visit with friends or
                relative, medical treatment, participation in social events
                hosted by fraternal, service organization. Like other nation in
                the world you are not endorsed to work on a tourist visa. The
                Aplusadventures have the best Mali Tourist Visa Agents
                in Delhi, with its dedicated client service, years of experience
                in immigration industry and a team of certified migration
                experts whose ambition is to make the visa process care free and
                smooth for applicants.{" "}
              </p>
            </div>
          </div>
          <Getintouchform />
        </div>
      </div>
    </div>
  );
}

export default Canada;
