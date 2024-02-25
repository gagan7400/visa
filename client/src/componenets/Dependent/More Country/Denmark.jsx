import React, { useEffect } from "react";
import Getintouchform from "../../Liveproject/Getintouchform";
import { NavLink } from "react-router-dom";
import Navbar from "../../Navbar";

function Denmark() {
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
                    <p className="IMMI">DENMARK DEPENDENT VISA REQUIREMENTS, PROCESS & MORE DETAILS</p>
                    <span className="IMMI"> <NavLink className='navlink' to='/'>Home</NavLink> {">"} Denmark Family Reunion Visa </span>
                </div>

                <div className="Aboutus-description-container">
                    <div className="Aboutus-description">
                        <div className="ica-left">
                            <div className="sub-title fs-4">FAMILY REUNION VISA</div>
                            <ul className="ul-num">
                                <li><span className="check-icon">✓</span>If you wish to stay with a close family member who is already in the Denmark, you can apply for a residence permit.</li>
                                <li><span className="check-icon">✓</span> If you meet the condition required,reunification can be granted to:</li>
                                <li><span className="check-icon">✓</span>Spouses and cohabiting partners;</li>
                                <li><span className="check-icon">✓</span>Children ,Other family members.</li>
                                <li><span className="check-icon">✓</span> If you are receive a residence permit, initially it will be a temporary one with a possibility for extension, provided that you still meet the requirements. After few years, you can apply for a permanent residence permit</li>
                                <li><span className="check-icon">✓</span>This visa allows you to give right to work in denmark.</li>
                            </ul>
                        </div>
                    </div>
                    <Getintouchform />
                </div>
            </div>
        </div>
    );
}

export default Denmark;