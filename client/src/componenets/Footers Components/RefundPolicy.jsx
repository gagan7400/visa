import Navbar from "../Navbar";
import React, { useEffect } from "react";
import Getintouchform from "../Liveproject/Getintouchform";
import { NavLink } from "react-router-dom";

function RefundPolicy() {
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
        <img
          src="./Immigrationimage/usbuilding.jpg"
          autoPlay
          muted
          loop
          className="aboutusvideo"
          alt="US-building_img"
        />
        <div className="Aboutus-text">
          <p className="IMMI">REFUND POLICY - APLUS ADVENTURE</p>
          <span className="IMMI"><NavLink className='navlink' to='/'>Home</NavLink>{">"} Refund Policy </span>
        </div>

        <div className="Aboutus-description-container">
          <div className="Aboutus-description">
            <div className="ica-left">
              <p className="left-top-text">
                Aplusadventure doesn't provide any assurance, pledge or advice
                on work support or employment assurance, after a permit
                approval, and after landing for the overseas nation. No
                reimbursement process can be claimed of advisory charges
                provided by Aplusadventure by the client on the basis of the
                opportunities that Aplusadventure has failed to provide a job
                guarantee overseas.
              </p>
              <p>
                The applicant has to sit for the IELTS Exam and accomplish a
                lowest individual in aggregate group provided in the four
                options - read, write, speak and listen - as suitable for the
                client decide previously with Aplusadventure. The client
                realises and corresponds that the pledge cannot be passed
                subtracting the required IELTS sum and no compensation of the
                consulting fee provided to Aplusadventure will be outstanding,
                when a person fails to attain the necessary IELTS marks.
              </p>
              <p>
                It is important to show the funds for the applications as
                required by the company, when the company fails to show the
                funds, then the company is under no obligation for refund.
              </p>
              <p>
                The client must provide every detail, form and paper that will
                make it easier for the immigration consultancy to pledge for
                skills assessment with the suitable appraisal community. If the
                client fails to do this, then no compensation or refund of the
                consulting fee will be provided by Aplusadventure
              </p>
              <p>
                We work as a Private Limited Company and we hold no authority to
                grant the people a visa of any type. We can only render help and
                advice to people who wish to travel to their chosen destination.
                Please consider the deciding decision for all visa application
                lies with the government section of the respective nation.
              </p>
              <p>
                The applicant has noticed all the provisions mentioned above in
                a detailed manner and agrees to abide by the terms and
                conditions on agreeing and signing this agreement.
              </p>
              <div className="sub-title">
                <h3>
                  In case, the visa has been rejected in the following cases, no
                  refund or compensation will be made:
                </h3>
              </div>
              <ul className="points">
                <li>
                  <span className="check-icon">✓</span>If the client doesn't
                  shows up for his visa interview
                </li>
                <li>
                  <span className="check-icon">✓</span>If the client doesn't
                  obey the Embassy or Consulting board requirements
                </li>
                <li>
                  <span className="check-icon">✓</span>Lack of medical by the
                  applicant or his family members provided in the form
                </li>
                <li>
                  <span className="check-icon">✓</span>Noavailability of
                  original Police Clearance Certificate, just 3months old.
                </li>
              </ul>
              <div className="sub-title">
                <h3>Submission of fake or bogus documents</h3>
              </div>
              <ul className="points">
                <li>
                  <span className="check-icon">✓</span>Violation of any visa law
                  or immigration law, previously done by the applicant or his
                  family member.
                </li>
                <li>
                  <span className="check-icon">✓</span>Late compliance of an
                  essential document required by the Embassy or consulate in a
                  later period.
                </li>
                <li>
                  <span className="check-icon">✓</span>The applicant fails to
                  get the minimum score in IELTS as required by the Company
                  Consultant
                </li>
                <li>
                  <span className="check-icon">✓</span>In case, the applicant
                  withdraws the visa process in between, we shall not be liable
                  to offer any compensation or refund.
                </li>
                <li>
                  <span className="check-icon">✓</span>If the cap closes and
                  your application gets on hold, we are not liable
                </li>
                <li>
                  <span className="check-icon">✓</span>There is no compensation
                  if the client fails to pass the qualification credential
                </li>
              </ul>
              <p>
                The application fee made to the visa company is completely the
                liability of the applicant and will not be a part of
                Aplusadventure.
              </p>
              <div className="sub-title">
                <h3>If refunding, the service tax is nonrefundable</h3>
              </div>
              <p>
                The applicant agrees that the Australian immigration procedure
                is solely the decision of the authorities concerned and Company
                has no control on the decision made the client claiming for
                refund, is eligible for refund will receive the refund in 90
                days, once the refund form is filled Applicant also agrees that
                no compensation or refund of Aplusadventure will be made in
                favour of friends or relative, if the client abandons her
                application or drops out, when the application is in process.
              </p>
              <p>
                If, in case, you have signed up for Aplusadventure facility
                under the EMI mode, or you have made a partly deposit and the
                immigration law changes after you have signed up, during the
                preceding of your application, but because of the change, now
                you are not allowed to go for the facilities you have signed up
                for. In such case, the company shall not be liable to pay any
                refund paid in the first part payment or instalment.
              </p>
            </div>
          </div>
          <Getintouchform />
        </div>
      </div>
    </div>
  );
}

export default RefundPolicy;
