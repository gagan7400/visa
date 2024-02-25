import Navbar from "../Navbar";
import React, { useEffect } from "react";
import Aboutusbackgroundvideo from "../video/Aboutusbackgroundvideo.mp4";
import Getintouchform from "./Getintouchform";
import { NavLink } from "react-router-dom";

function About() {
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
      <div className="About-container pt-1">
        <div className="video-overlay"></div>
        <video
          src={Aboutusbackgroundvideo}
          autoPlay
          muted
          loop
          className="aboutusvideo"
          alt="Aboutus_background_video"
        />
        <div className="Aboutus-text">
          <p>ABOUT US</p>
          <span><NavLink className='navlink' to='/'>Home</NavLink> {">"} About Us </span>
        </div>

        <div className="Aboutus-description-container" style={{fontSize:"24px"}}>
          <div className="Aboutus-description">
            <p>
              Welcome to Aplusadventure, one of the best consultants
              for the visa in Delhi right now. We support candidates who want to
              go to other countries. Our teams are very professional people who
              do a lot of hard work for us.
            </p>

            <p>
              Aplusadventure has a well-known name for its years of
              experience as a provider of visa consultants in Delhi. A tourist,
              visitor, or business visa is usually stamped in the applicant's
              passport or another travel document to let a non-immigrant
              temporarily visit their country. The candidate must leave their
              country before the time allowed runs out.
            </p>

            <p>
              We have been applying for tourist visas, visitor visas, and
              business visas for people all over the world for 30 years. We can
              help you get a tourist visa for Australia, New Zealand, Canada,
              the United Kingdom, Schengen, Singapore, Malaysia, China,
              Thailand, and other places worldwide. As a tourist visa expert in
              Delhi, we perform this service for a nominal price. You can talk
              to our experts to get more information and help make the process
              of getting a tourist, visitor, or business visa easy and smooth.
            </p>

            <p>
              Our visa services include tourist visas, spouse visas, visa
              approval, work visa, student visa, and visitor's visa. In short,
              our visa agents in Delhi can handle any visa. We also make sure
              that the complex process of getting a visa is smooth and easy for
              everyone. People in Delhi say that we are the best visa
              consultants.
            </p>

            <p>
              We, at Aplusadventure, are the market leader in visa
              consulting for our clients. Our professional team is well-versed
              in various visa-obtention procedures for numerous nations. Our
              staff provides comprehensive help before, during, and after our
              clients' visa application processes. Customer satisfaction is our
              organization's top priority. Contact us right now!
            </p>
          </div>
          <Getintouchform />
        </div>
      </div>
    </div>
  );
}

export default About;
