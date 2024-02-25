import React, { useEffect } from "react";
import Getintouchform from "../../Liveproject/Getintouchform";
import { NavLink } from "react-router-dom";
import Navbar from "../../Navbar";

function Greece() {
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
                    autoPlay
                    muted
                    loop
                    className="aboutusvideo"
                    alt="US-building_img"
                />
                <div className="Aboutus-text">
                    <p className="IMMI">GREECE FAMILY REUNION VISA</p>
                    <span className="IMMI"> <NavLink className='navlink' to='/'>Home</NavLink> {">"} Greece Family Reunion Visa </span>
                </div>

                <div className="Aboutus-description-container">
                    <div className="Aboutus-description">
                        <div className="ica-left">
                            <p>The family members of a third country national may enter into Greece on family reunification are, according to Greek legislation (Article 4, Presidential Decree 131/2006) the following:</p>
                            <div className="sub-title fs-4">There are the two following possibilities:</div>
                            <ol className="ul-num">
                                <li><span className="check-icon">✓</span>The spouse must be over 18 years of age.</li>
                                <li><span className="check-icon">✓</span>Any other natural and/or adopted children of under 18 years of age of the sponsor or his/her spouse, provided he/she has been provided their custody.</li>
                                <li><span className="check-icon">✓</span>Their natural /or adopted single children under the age of 18 years.</li>
                                <li><span className="check-icon">✓</span>In the case of polygamy, if the sponsor has a spouse living with him/her in Greece, then family reunion with any other spouse shall not be permitted.
                                </li></ol>
                            <div className="sub-title fs-4">The Embassy of Greece will examine the case into two stages</div>
                            <ol className="points">
                                <li><span className="check-icon">✓</span>1st stage: examination of applications for verification of family relationship</li>
                                <li><span className="check-icon">✓</span>2nd stage: examination of applications for a long-term visa</li>
                                <li><span className="check-icon">✓</span>Visa Fees:</li>
                                <li><span className="check-icon">✓</span>Family Reunion Visa Fees 90 euro.</li>
                                <li><span className="check-icon">✓</span> PROCESSING TIME: Processing time for Long Stay Visa depends solely up to the Embassy discretion. </li></ol>
                        </div>
                    </div>
                    <Getintouchform />
                </div>
            </div>
        </div>
    );
}

export default Greece;