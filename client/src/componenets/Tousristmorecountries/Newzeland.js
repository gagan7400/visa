import React, { useEffect } from "react";
import Navbar from "../Navbar";
import Getintouchform from "../Liveproject/Getintouchform";
import { NavLink } from "react-router-dom";
function Newzeland() {
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
            NEW ZEALAND VISA CONSULTANTS - NEW ZEALAND TOURIST VISA FOR INDIANS
          </p>
          <span className="IMMI">
            {" "}<NavLink className='navlink' to='/'>Home</NavLink>{">"} New Zealand Visa Consultants - New Zealand Tourist Visa
            For Indians
          </span>
        </div>

        <div className="Aboutus-description-container">
          <div className="Aboutus-description">
            <div className="ica-left">
              <p className="left-top-text">
                New Zealand is one of the world's purest countries and is home
                to stunning scenery. When this stunning scenery is paired with
                the country's cutting-edge culture and convenient
                transportation, New Zealand makes an unforgettable travel
                destination. Evidence of this is the approximately three million
                annual visitors. A tourist visa is required to thoroughly enjoy
                what the country offers, even if the destination is on your
                list.
              </p>
              <p>
                <a href="https://continentalimmigration.co.in/tourist-visa.html">
                  Tourist visas
                </a>{" "}
                are available for anyone who wish to visit New Zealand only for
                that purpose. With this pass, you can visit the country, see
                places, go to shows, and do other fun things. This visa usually
                lets you stay for 3 months and can be used only once or more
                than once. The duration of most visas is 12 months; however,
                this varies per visa category. Even though you have a visa, you
                can still enter the country. If the people at the border
                checkpoint find something wrong with your pass or with you, they
                can stop you from getting in.
              </p>
              <h2>New Zealand tourist visa requirements from India</h2>
              <p>
                · The original passport must have at least six months' worth of
                validity remaining after the date of departure.
              </p>
              <p>· A covering letter containing all of the specified info.</p>
              <p>
                · Photographs with color according to the photo specifications.
              </p>
              <p>· Income Tax Returns as Evidence.</p>
              <p>· Evidence of lodging, such as a hotel reservation.</p>
              <p>· Flight reservations have been confirmed.</p>
              <p>
                · Evidence of ample funds, such as a bank statement or an
                equivalent document.
              </p>
              <p>· Medical Certificate.</p>
              <p>
                · Documentation of the visit's official purpose, like an
                invitation letter or a permit to a conference or exhibition.
              </p>
              <h2>
                The processing time for the New Zealand tourist visa for Indian
                nationals.
              </h2>
              <p>
                The processing period for a New Zealand tourist visa is
                approximately 20 days for offline applications and 72 hours for
                online applications. Time will still vary based on variables
                such as the volume of work at the embassy office, the
                availability of personnel, and whether or not all of the
                required documents have been submitted. These parameters affect
                the time by increasing and decreasing it.
              </p>
              <h3>
                How to Check the Status of an Online Application for a New
                Zealand Tourist Visa?
              </h3>
              <p>
                The New Zealand High Commission has a webpage where you may
                check the status of your tourist visa online. You can check the
                state of your mobile visa this way. You can contact the High
                Commission to inquire about your visa status, or you can get
                your agent for information regarding your visa processing.
              </p>
              <h3>How do Indian tourists extend their stay in New Zealand?</h3>
              <p>
                Before you can get your pass extended, you need a good reason to
                do so. You can ask New Zealand Immigration online to develop a
                tourist visa for New Zealand. You will have to pay the fee, and
                then your request will be taken care of, and the extension will
                be given.
              </p>
              <h3>Visa Fees for New Zealand Tourists</h3>
              <p>
                A New Zealand tourist visa costs depend on the traveller's
                country of origin. New Zealand has a system that categorises
                visitors into three groups based on their nationality. Band A is
                for New Zealand residents who wish to register for a tourist
                visa, Band B is for citizens of Pacific nations, and Band C is
                for citizens of all other countries.
              </p>
              <h4>
                When my tourist visa for New Zealand expires, how long may I
                stay there?
              </h4>
              <p>
                When the visa expires, you can no longer remain in the country.
                If you must remain in New Zealand for humanitarian reasons, the
                government may extend your visa. However, if you cannot depart
                the country after your visa expires, you may be subject to
                criminal charges, deportation, and even a ban on re-entry. If
                you must remain, you may extend your visa for valid reasons
                within the allotted time frame.
              </p>
              <p>
                We are the best New Zealand visa consultants in Delhi. At
                Aplusadventure, we ensure that all submitted documents
                are current and faultless. To avoid future complications or
                last-minute problems, clients can rely on our expert advice and
                Visa Assistance, as we keep them abreast of the latest changes
                in documentation, Visa fees, and any other documents required by
                the Consulate.
              </p>
            </div>
          </div>
          <Getintouchform />
        </div>
      </div>
    </div>
  );
}

export default Newzeland;
