import React from "react";
import Loginform from "./Loginform";

function Form() {
  return (
    <div className="Form-container">
        <div className="background-container">
          <img src="./Aboutimage/team.jpg" className="team-image" alt="Team_image" />
          <div className="background-cotainer-text text-light text-center">
            <p> Leading Visa & Immigration Consultancy for All Countries visas</p>
            <div className="background-cotainer-text-in">
              Get your visa from most trusted Visa & Immigration consultant.
              Dedicated and <br /> experienced team member working hard to reach
              your dream destination.
            </div>
          </div>
        </div>
        <div className="Form">
          <div className="Form-image-container">
            <img src="./Aboutimage/Girl2.jpg" className="Form-image" alt="Girl_image" />
            <div className="formsize">
              <Loginform />
            </div>
          </div>
      </div>
    </div>
  );
}

export default Form;
