import React, { useEffect } from "react";
import Getintouchform from "../Liveproject/Getintouchform";
import Navbar from "../Navbar";
import { NavLink } from "react-router-dom";
function Southkorea() {
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
            SOUTH KOREA VISA AGENT IN INDIA - TOURIST VISA FOR SOUTH KOREA FROM INDIA
          </p>
          <span className="IMMI"> <NavLink className='navlink' to='/'>Home</NavLink> {">"} Southkorea Tourist Visa</span>
        </div>

        <div className="Aboutus-description-container">
          <div className="Aboutus-description">
            <div className="ica-left">
              <h2>The process for obtaining a tourist visa for South Korea</h2>
              <p className="left-top-text">
                {" "}
                One must first obtain a{" "}
                <b>South Korean tourist visa for Indian</b> if one wishes to
                enter this land of culture and intellect. It may sound simple,
                but if you don't know the fundamentals, it's actually rather
                difficult. As a result, we have arrived to offer our assistance
                in overcoming it. This tutorial will illustrate how simple it is
                for Indians to obtain a <b>South Korean a tourist visa </b>if
                they understand the essentials, as they cannot visit South Korea
                without visa.
              </p>
              <h2>Instructions for Obtaining a Visa to Visit South Korea</h2>
              <p>
                Before applying for a South Korean{" "}
                <a href=" https://continentalimmigration.co.in/tourist-visa.html">
                  {" "}
                  tourist visa
                </a>
                , it's a good idea to research how long it takes for the visa to
                be processed and issued. When you have collected all of the
                necessary information for the application, you can move forward
                with the steps below.
              </p>
              <ul>
                <li>
                  <strong>Step 1: Obtain a visa application.</strong>
                </li>
                <p>
                  The South Korean Embassy where you now reside will be able to
                  provide you with the necessary visa application form, or you
                  can request one online.{" "}
                </p>
                <li>
                  <strong>Step 2: get a visa application.</strong>
                </li>
                <p>
                  When filling out the application, we ask that you be as
                  specific as possible. Make sure to put your signature on the
                  application when you're done.
                </p>
                <li>
                  <strong>
                    Step 3: Gather the necessary paperwork for the visa
                    application.
                  </strong>
                </li>
                <p>
                  Write out everything you'll need to attach to your
                  application. Collect the necessary paperwork and have it
                  handy.
                </p>
                <li>
                  <strong>Step 4: affix a recent photograph.</strong>
                </li>
                <p>
                  If you're applying for a visa, don't forget to enclose a
                  recent, colour photo of yourself. Make sure the photo you
                  intend to use for your visa application complies with all
                  applicable regulations. Regardless, your photo can't be any
                  newer than 6 months.
                </p>
                <li>
                  <strong>Step 5: Calculate the Visa Application Fee</strong>
                </li>
                <p>
                  Research the costs you might expect to pay for your visa. Be
                  prepared to send the fee together with your visa application.
                  Remember to check the mode of payment approved by the South
                  Korean Embassy in your place of residency for visa
                  applications.
                </p>
                <li>
                  <strong>Step 6: Put in an application for a visa</strong>
                </li>
                <p>
                  If you want to visit South Korea, you'll need to apply for a
                  visa at the South Korean Embassy in your country.
                </p>
                <li>
                  <strong>Step 7: submit the visa application fee</strong>
                </li>
                <p>Submit your application and visa cost together </p>
                <li>
                  <strong>Step 8: Pick up your visa</strong>
                </li>
                <p>
                  Embassy consultants will inform you either via email or
                  message on your mobile about your visa acceptance. Pick up
                  your visa on schedule.
                </p>
              </ul>
              <h3>
                What are the documents required for a South Korea tourist visa?
              </h3>
              <ul className="points">
                <li><span className="check-icon">✓</span>
                  At least six months remaining on the passport's expiration
                  date and three blank pages, without counting visa or unused
                  pages;
                </li>
                <li><span className="check-icon">✓</span> Form for Requesting a Visa;</li>
                <li><span className="check-icon">✓</span> 2 current, full-color images;</li>
                <li><span className="check-icon">✓</span>
                  a cover letter detailing your qualifications (for regular
                  jobs, use plain paper, for contract jobs, use company
                  letterhead);
                </li>
                <li><span className="check-icon">✓</span> Original, Up-to-Date Bank Statement (Last 6 Months);</li>
                <li><span className="check-icon">✓</span>
                  Federal and state income tax returns (Form 16) for the past
                  two years;
                </li>
                <li><span className="check-icon">✓</span> It's official: you have round-trip airline tickets;</li>
                <li><span className="check-icon">✓</span> Proof of stay in South Korea</li>
              </ul>
              <h3>
                How much does a south Korean visa cost for Indian citizens?
              </h3>
              <p>
                The visa fee might be very expensive, depending on the sort of
                visa you need. There are two types of{" "}
                <b>South Korean tourist visa for Indians: </b>single-entry and
                multiple-entry. A single entry visa for up to ninety days will
                cost approximately INR 2800, and a visa for more than ninety
                days would cost approximately INR 4200. It costs around INR 6300
                for multiple entrance visas. In addition, if the objective of
                the visit necessitates a double-entry visa, the visa fee rises
                to INR 4900.
              </p>
            </div>
          </div>
          <Getintouchform />
        </div>
      </div>
    </div>
  );
}

export default Southkorea;
