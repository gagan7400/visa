import Navbar from "../Navbar";
import React, { useEffect } from "react";
import Getintouchform from "./Getintouchform";
import { NavLink } from "react-router-dom";
 

function Testimonial() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
     <>
        <Navbar/>
      <div className="Testimonial-image">
        <img src="./Testimonialimage/Testimonialimage.jpg" alt="Testimonial_image"/>
        <div className="Testimonial-image-text">
          <p>TESTIMONIALS - APLUSADVENTURE</p>
          <span><NavLink className='navlink' to='/'>Home</NavLink>{">"} Testimonial</span>
        </div>
      </div>
      <br />
      <br />
   
      <div className="Testimonial-clients-container">
        <div className="Testimonial-clients">
          <div className="clients-container">
            <div className="client">
              <div className="client-image">
                <img src="./Testimonialimage/canadiangirl.jpg" alt="client-img"/>
              </div>
              <p>
                "I have applied for Canada PR visas, Aplusadventure
                guided us with every step, We are happy with the service
                provided by them."
              </p>
              <span className="client-name" data-hover-text="CANADA VISA">
                RITIKA
              </span>
            </div>
            <br />
            <br />
            <br />
            <div className="client">
              <div className="client-image">
                <img src="./Testimonialimage/europegirl.jpg" alt="client-img"/>
              </div>
              <p>
                "Thank you so much Saavi, Neeti and the whole CICS team for
                assisting me throughout my Visa process. I really appreciate
                your efforts for giving the application the required time,
                patience and professional touch up. Thanks a lot again!"
              </p>
              <span className="client-name" data-hover-text="EUROPE VISA">
                SINORA BHARDWAJ
              </span>
            </div>
            <br />
            <br />
            <br />
            <div className="client">
              <div className="client-image">
                <img src="./Testimonialimage/nzgirl.jpg" alt="client-img"/>
              </div>
              <p>
                "It is an excellent agency. People are really helpful. They are
                co-operative. Highly recommended!!
              </p>
              <span className="client-name" data-hover-text="New Zealand Visa">
                ANAND VARSHA
              </span>
            </div>
            <br />
            <br />
            <br />
            <div className="client">
              <div className="client-image">
                <img src="./Testimonialimage/us.jpg" alt="client-img"/>
              </div>
              <p>
                "I wanted US visa urgently. Niti from Aplusadventure
                Consultancy she helped me so well.They are very professional,
                responsive and are available for any queries anytime. I
                certainly recommend them for any kind of Visa needs. All the
                Best!"
              </p>
              <span className="client-name" data-hover-text="U.S VISA ">
             ARJUN
              </span>
            </div>
          </div>
<div style={{marginTop:"-2%"}}>
          <Getintouchform/>
</div>
        </div>
      </div>
   </>
  );
}

export default Testimonial;
