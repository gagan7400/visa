import React, { useEffect } from "react";
import Getintouchform from "../../Liveproject/Getintouchform";
import { NavLink } from "react-router-dom";
import Navbar from "../../Navbar";

function Italy() {
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
                    <p className="IMMI">ITALY FAMILY REUNION VISA - APPLY FOR ITALY FAMILY REUNIFICATION VISA</p>
                    <span className="IMMI"><NavLink className='navlink' to='/'> Home</NavLink> {">"}Italy Family Reunion Visa</span>
                </div>

                <div className="Aboutus-description-container">
                    <div className="Aboutus-description">
                        <div className="ica-left">
                            <p>Family reunion visas are intended to reunite family members i.e (Spouse) husbands/wives, children and parents economically dependent on the sponsors. It is a long term (type D) visa.</p>
                            <div className="sub-title fs-4">Following applicants will be considered as family members :</div>
                            <ul className="points"><li><span className="check-icon">✓</span>The registered spouse married under civil law (Note:- religious marriages, of any kind, and polygamy are not recognized by the Italian laws),</li>
                                <li><span className="check-icon">✓</span> The children under 21 years can apply ,In case of adopted children, they must have been lawfully adopted in accordance with the laws of Nigeria;</li></ul>
                            <div className="sub-title fs-4">There are two types of family reunion visas:</div>
                            <ul className="ul-num">
                                <li><span className="check-icon">✓</span>The family members who wishes to join the spouse/parents/children that are lawfully residing in Italy;</li>
                                <li><span className="check-icon">✓</span>The family members who wishes to settle in Italy at the same time when the family member who is going to obtain an authorization to work or study in Italy.</li>
                                <li><span className="check-icon">✓</span>Their natural /or adopted single children under the age of 18 years.</li></ul>
                            <p><div>Visa Fees:</div>
                                Type D category visa:- 116 Euro </p>
                        </div>
                    </div>
                    <Getintouchform />
                </div>
            </div>
        </div>
    );
}

export default Italy;