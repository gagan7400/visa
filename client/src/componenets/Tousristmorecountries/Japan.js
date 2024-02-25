import React, { useEffect } from "react";
import Getintouchform from "../Liveproject/Getintouchform";
import Navbar from "../Navbar";
import { NavLink } from "react-router-dom";
function Japan() {
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
            JAPAN TOURIST VISA FOR INDIANS CITIZENS - JAPAN VISA AGENTS
          </p>
          <span className="IMMI">
            {" "}<NavLink className='navlink' to='/'>Home</NavLink> {">"} Japan Tourist Visa For Indians Citizens - Japan Visa
            Agents
          </span>
        </div>

        <div className="Aboutus-description-container">
          <div className="Aboutus-description">
            <div className="ica-left">
              <p className="left-top-text">
                If you plan to travel to Japan for tourism, you will likely
                require a Japan{" "}
                <a href="https://continentalimmigration.co.in/tourist-visa.html">
                  Tourist Visa
                </a>
                .
              </p>
              <p>
                Millions of tourists visit Japan yearly to see the country's
                fascinating mix of ancient traditions, cutting-edge technology,
                and breathtaking natural beauty.
              </p>
              <p>
                Many of these tourists were required to register for a Japan
                tourist visa before travelling to Japan, although this is not
                the case for everyone.
              </p>
              <h2>Who Needs a Japan Tourist Visa?</h2>
              <p>
                Let's say you want to visit Japan for leisurely reasons that
                don't include earning money, like sightseeing, family visits, or
                a quick vacation. In such a situation, a Japan Tourist Visa is
                required.
              </p>
              <p>
                Tourist visas for Japan are required for citizens of most
                countries. However, citizens of a select group of nations may
                visit Japan for up to 90 days without obtaining a visa. Tourists
                and short-term visitors from certain countries (which includes
                the European Union, the United States, Australia, the United
                Kingdom, etc.) do not require a visa to enter Japan.
              </p>
              <h2>Japan tourist visa documents for Indian</h2>
              <p>
                You must submit several supporting documents when applying for a
                Japan tourist visa for Indians. These are the Japan tourist visa
                requirements:
              </p>
              <p>· Form for a Japan Tourist Visa, completed and signed.</p>
              <p>
                · Your visa must have two blank visa pages and your passport
                must have a validity of at least six more months than the
                duration of your intended stay.
              </p>
              <p>
                · If you have a job right now, your employer has to sign a
                letter of employment or a no-objection certificate before you
                may submit your application.
              </p>
              <p>
                · Certificates of civil status, including but not limited to
                birth certificates, marriage licences, and the like.
              </p>
              <p>
                · The route that an aeroplane will take. Include your name, a
                flight reservation number, the date of your arrival and
                departure, and any other information that may be relevant.
              </p>
              <p>
                · The routine of each day. You are required to provide a
                day-by-day itinerary of your activities in Japan. On the website
                of the Ministry of Foreign Affairs of Japan (which can be
                accessed here), there is an example itinerary that may be used
                to apply for a Japan visa.
              </p>
              <p>
                · Copies of your most recent federal income tax returns or a
                letter stating why you do not have an ITR if you do not have a
                federal income tax return.
              </p>
              <p>
                · A Residence Certificate if the individual does not currently
                call Japan home.
              </p>
              <p>
                · If you are paying for your travel: Statements from the
                previous three months
              </p>
              <p>
                · Include substantiation of your relationship if you visit a
                friend or family member.
              </p>
              <h3>Japan Tourist Visa Processing Time</h3>
              <p>
                A Japanese Tourist Visa takes five working days to process,
                starting from the moment your application is received by the
                Embassy or Consulate. This period may be extended if they are
                required to submit your application to the Ministry of Foreign
                Affairs for further review or if they request additional
                documentation.
              </p>
              <h3>Can a Japan Tourist Visa be Extended?</h3>
              <p>
                In most instances, the answer is no. Japan's Immigration Offices
                do not typically extend Tourist Visas past their expiration
                date. Tourist Visa extensions would only be granted in
                exceptional circumstances, such as an abrupt illness or an
                accident.
              </p>
              <p>
                Obtaining a Japan Visa Extension for visas issued for lengthy
                periods is only possible.
              </p>
              <h3>Can I Work with a Tourist Visa for Japan?</h3>
              <p>
                No, you cannot. You are prohibited from engaging in any
                remunerated activity while on a Tourist Visa in Japan. This visa
                form is issued solely for tourism, visits, and recreation.
              </p>
            </div>
          </div>
          <Getintouchform />
        </div>
      </div>
    </div>
  );
}

export default Japan;
