import React, { useEffect } from "react";
import Getintouchform from "../Liveproject/Getintouchform";
// import Getintouchform from "../Getintouchform";
import { NavLink } from "react-router-dom";
import Navbar from "../Navbar";
function Turkey_de_visa() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, []);
    return (
        <div>
            <Navbar />
            <div className="About-container">
                <div className="video-overlay"></div>
                <img
                    src="./Immigrationimage/usbuilding.jpg"
                    alt="US-building_img"
                    className="aboutusvideo"
                />
                <div className="Aboutus-text">
                    <p>TURKEY DEPPENDENT VISA - SPOUSE VISA TURKEY REQUIREMENTS</p>
                    <span> <NavLink className='navlink' to='/'>Home</NavLink> {">"} turkey Dependent Visa - Spouse Visa Turkey Requirements </span>
                </div>

                <div className="Aboutus-description-container">
                    <div className="Aboutus-description">
                        <div className="ica-left">
                            <h2>Turkey dependent visa for Indian</h2>
                            <p className="left-top-text">A Turkey dependent visa is a document that enables a person to remain in Turkey for the purposes of settling down, working, or attending school. This can be done if the Turkish government gives the go-ahead. This permission lasts six months.</p>
                            <p>You can live in Turkey, study there, get married there, change your foreign driver's license to a Turkish one, obtain a tax number, open a bank account there, buy property there, and make investments there, among many other things, if you have a residency permit.</p>
                            <p>For those who intend to make Turkey their permanent home for employment, only a work permit, which doubles as a residency permit, is required.</p>
                            <h2>Documents must be submitted for a turkey spouse visa application</h2>
                            <ul className="points"><li><span className="check-icon">✓</span>Individuals who are married to a Turkish national and who have completed and submitted the Application for Residence Permit.</li>
                                <li><span className="check-icon">✓</span>Passport or other required paperwork in its original form or a copy.</li>
                                <li><span className="check-icon">✓</span>Four (4) photographs</li>
                                <li><span className="check-icon">✓</span>The document proving their marriage</li>
                                <li><span className="check-icon">✓</span>A copy of the sponsor's identification card as well as the original</li>
                                <li><span className="check-icon">✓</span>The evidence of the sponsor's sufficient and consistent income where they will reside.</li>
                                <li><span className="check-icon">✓</span>All candidates must have medical insurance coverage that covers all members of the family and is valid for the duration of their stay in Turkey.</li>
                                <li><span className="check-icon">✓</span>Following bilateral social security accords, a document proving foreigners' eligibility for medical treatment in Turkey.</li>
                                <li><span className="check-icon">✓</span>Social Security Administration's provisional record.</li>
                                <li><span className="check-icon">✓</span>Social Security Administration document indicating an application for universal health care coverage.</li>
                                <li><span className="check-icon">✓</span>Criminal record (could be obtained from the country's law enforcement agencies or the Turkish legal system if the person has been in our country for the past five years.)</li>
                                <li><span className="check-icon">✓</span>Evidence that non-citizens are registered with the Address Registration System</li></ul>
                            <div className="sub-title fs-4">Who Needs to Obtain a Residence Visa Permit in Turkey and Why?</div>
                            <p>Upon arrival, anyone moving to the nation must obtain a Turkey Residence Permit to stay longer than three months. Without a valid residence permit, your stay in Turkey is illegal.</p>
                            <p>If you fulfil any one of the qualifications listed below, you are excluded from the application of this criterion:</p>
                            <ul className="points"><li><span className="check-icon">✓</span>You have a "registration certificate" for an international protection application.</li>
                                <li><span className="check-icon">✓</span>You are excused from obtaining a residence permit based on reciprocal or multilateral agreements to which the Republic of Turkey is also a signatory.</li>
                                <li><span className="check-icon">✓</span>You are a consular or diplomatic officer with an office in Turkey.</li>
                                <li><span className="check-icon">✓</span>You are employed by the Turkish branches of many multinational firms.</li>
                                <li><span className="check-icon">✓</span>Your identity card will have either "international protection applicant," "international protection status," or "statelessness" written on it. </li>
                                <li><span className="check-icon">✓</span>You possess a valid permit to work.</li></ul>
                            <h3>How Aplusadventure May Benefit You In Dependent Visa For Turkey From India</h3>
                            <ul className="points"><li><span className="check-icon">✓</span>Inform you about the papers required for the visa;</li>
                                <li><span className="check-icon">✓</span>Inform you on how to demonstrate the necessary funds for the visa.</li>
                                <li><span className="check-icon">✓</span>Your visa application papers will be reviewed by our staff.</li>
                                <p>Aplusadventure has the best Turkey visa agents in Delhi. Also we have experienced team members. However, you can always approach our qualified immigration consultants in India for help. </p>
                            </ul></div>
                    </div>

                    <Getintouchform />

                </div>
            </div>
        </div>
    );
}

export default Turkey_de_visa;