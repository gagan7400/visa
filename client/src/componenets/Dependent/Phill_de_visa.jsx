import React, { useEffect } from "react";
import Getintouchform from "../Liveproject/Getintouchform";
import { NavLink } from "react-router-dom";
import Navbar from "../Navbar";
// import Getintouchform from "../Getintouchform";

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
                    <p>PHILIPPINES DEPENDENT VISA FOR SPOUSE & FAMILY</p>
                    <span> <NavLink className='navlink' to='/'>Home</NavLink> {">"} Philippines Dependent Visa For Spouse & Family </span>
                </div>

                <div className="Aboutus-description-container">
                    <div className="Aboutus-description">
                        <div className="ica-left">
                            <h2>Philippines Dependent Visa</h2>
                            <p>You can either apply for a Philippine Spouse Visa at a Philippine Embassy or Consulate in your home country, or you can enter the Philippines with a Tourist Visa and convert it to a Spouse Visa at the Immigration Bureau.</p>
                            <h2>Requirements for a Philippines spouse visa</h2>
                            <p>In person or by mail, requirements may be submitted. Once the papers have been evaluated and determined to be complete, the Philippine Embassy will contact the applicant to schedule an interview; travel plans should not be made until contacted by the Embassy. Visas will be provided to qualified applicants ten business days after the interview.</p>
                            <ul className="points"><li><span className="check-icon">✓</span>Form of application-two with original signatures</li>
                                <li><span className="check-icon">✓</span>One original and one copy of the joint letter request to the Bureau of Immigration Commissioner from the applicant and the petitioner's Filipino spouse</li>
                                <li><span className="check-icon">✓</span>Original and two photocopies of the data page of the applicant's passport, along with the most recent immigration admittance stamp in the Philippines.</li>
                                <li><span className="check-icon">✓</span>The original, together with two photocopies, of the data page of the petitioner spouse's passport, which must have at least one year of validity remaining at the time the application is submitted.</li>
                                <li><span className="check-icon">✓</span>Four passport-sized pictures measuring 4.5 x 3.5 cm are required. The applicant must be appropriately attired and have a colour photograph taken no more than six months before the visa application (attached to the application). Photos that are blurry, of poor quality, or scanned are not acceptable.</li>
                                <li><span className="check-icon">✓</span>In addition to the Filipino spouse's birth certificate, the Philippine Statistics Authority (PSA) supplied two photocopies of the SECPA-printed birth certificate (PSA).</li>
                                <li><span className="check-icon">✓</span>Two photocopies of the marriage certificate that have been printed on secure paper and issued by the Philippine Statistics Authority (PSA) (SECPA).</li></ul>
                            <ul className="ul-num">
                                <li><span className="check-icon">✓</span>Marriage Report that has been properly authenticated by the Philippine Statistics Authority (PSA) or registered by the Philippine Embassy in Oslo, Norway, or Marriage Report that has been properly authenticated by the Philippine Statistics Authority (PSA).</li>
                                <li><span className="check-icon">✓</span>A foreign marriage certificate is Apostillized by the nation of marriage's competent authority </li></ul>
                            <ul className="points"><li><span className="check-icon">✓</span>A clearance from the police, written in English and legalized by the appropriate authority in the individual's country of residency; the original, together with two photocopies </li>
                                <li><span className="check-icon">✓</span>Medical Examination Form - Two medical forms need to be properly filled out and signed by a practitioner in the nation in which the individual belongs.</li>
                                <li><span className="check-icon">✓</span>A three-month bank statement, an employment certificate from the employer stating the job and income, or stock certificates are all acceptable forms of proof of financial ability to live in the Philippines.</li></ul>
                            <h3>How Aplusadventure May Benefit You In Philippines Spouse Visa From India</h3>
                            <p>The Philippines visa application procedure might be intimidating. Aplusadventure will assist you throughout the entire procedure. We are the best Philippines visa agents in Delhi. Aplusadventure consultants are knowledgeable and seasoned in the complexities of Philippines immigration procedures. </p>
                        </div>
                    </div>

                    <Getintouchform />

                </div>
            </div>
        </div>
    );
}

export default Turkey_de_visa;