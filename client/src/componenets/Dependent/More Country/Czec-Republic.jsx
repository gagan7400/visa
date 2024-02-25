import React, { useEffect } from "react";
import Getintouchform from "../../Liveproject/Getintouchform";
import { NavLink } from "react-router-dom";
import Navbar from "../../Navbar";

function CzecDependent() {
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
                    <p className="IMMI">CZECH REPUBLIC FAMILY REUNIFICATION VISA</p>
                    <span className="IMMI"> <NavLink className='navlink ' to='/'>Home</NavLink>{">"} CZECH REPUBLIC FAMILY REUNIFICATION VISA </span>
                </div>

                <div className="Aboutus-description-container">
                    <div className="Aboutus-description">
                        <div className="ica-left">
                            <div className="sub-title fs-4">This application is done in the following cases:</div>
                            <ul className="ul-num">
                                <li><span className="check-icon">✓</span>Child/ren, spouse, parent/s are intending to join his/her family member in Czech Republic with a long term visa.</li>
                                <li><span className="check-icon">✓</span> Each family member must apply separately and fulfill all requirements for the visa. There is no application fee for children under 15.</li>
                                <li><span className="check-icon">✓</span> Long stay visa for the purpose of family reunification</li></ul>
                            <div className="sub-title" fs-4>IMPORTANT ACKNOWLEDGMENTS:</div>
                            <p>Each family member applying for visa must submit the application separately and fulfill all the visa requirements.</p>
                            <div className="sub-title" fs-4>PROCESSING TIME:</div>
                            <p>The processing time is approximately 90 days from the date the Consulate receives the complete application. In exceptional complicated cases, the procedure may take upto120 days. </p>
                        </div>
                    </div>
                    <Getintouchform />
                </div>
            </div>
        </div>
    );
}

export default CzecDependent;