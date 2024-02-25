import Navbar from "../Navbar";
import React, { useEffect } from "react";
import Getintouchform from "../Liveproject/Getintouchform";
import { NavLink } from "react-router-dom";


function CancellationPolicy() {
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
                    <p className="IMMI">CANCELLATION POLICY - APLUS ADVENTURE</p>
                    <span className="IMMI"> <NavLink className='navlink' to='/'>Home</NavLink>{">"} Cancellation Policy </span>
                </div>

                <div className="Aboutus-description-container">
                    <div className="Aboutus-description">
                        <div className="ica-left">
                            <p className="left-top-text">Aplusadventure CONSULTANCY SERVICES PVT LTD believes in helping our customers and has an easy-going cancellation and refund policy. We make sure that all services given are 100% genuine.</p>
                            <div className="sub-title"><h3>Cancellation Policy:</h3></div>
                            <p>You can cancel your Visa Application after taking our services or after submitting your Visa documents to us. Hence, there will be no refund for cancellation by CICS Pvt. Ltd.</p>
                            <p>We are authorized to cancel your visa application before submitting it to Consulate or Embassy if we find any fraudulent or false documents submitted by you.</p>
                            <div className="sub-title"><h3>Cancellations by the customer:</h3></div>
                            <p>If the customer cancelled his travel plan on the same day of payment before taking the invoice receipt and the checklist was not being sent by the visa team. Then he can claim a full refund.</p>
                            <p>If the customer cancelled his plan after receiving the invoice receipt and checklist, then his total amount paid to us is non-refundable.</p>
                            <p>Certain charges like courier, Insurance cancellation, embassy fees are applicable to pay for customers. These will not be refunded from us.</p>
                            <p>The company is not responsible for any delay caused by the Embassy/Visa Outcome. Due to Covid-19, there is a delay in the result of the embassy outcome. Therefore, clients cannot claim a refund of service charges.</p>
                            <p>The client will inform Aplusadventure Consultancy Services Pvt. Ltd about any information involving a change in address, education, or any other police case/unlawful case. In such conditions, without information, no refund will be made.</p>
                            <p>Expenditure incurred by the client for third-party services such as IELTS, ECA, and Government application fees are not included in our service charges and should be borne by the client.</p>
                            <p>Changes in immigration rules are unpredictable and solely depend on a nation's ruling political party. If an unforeseen change affects the current program eligibility or prospects, Aplusadventure consultancy services Pvt Ltd is not responsible for any refund in case a program becomes void. Though this is very unlikely, the possibility cannot be ruled out.</p>
                        </div>
                    </div>
                    <Getintouchform />
                </div>
            </div>
        </div>
    );
}

export default CancellationPolicy;