import Navbar from "../Navbar";
import React, { useEffect } from "react";
import Getintouchform from "../Liveproject/Getintouchform";
import { NavLink } from "react-router-dom";


function PrivacyPolicy() {
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
                    <p className="IMMI">PRIVACY POLICY</p>
                    <span className="IMMI"> <NavLink className='navlink' to='/'>Home</NavLink>{">"} Privacy Policy </span>
                </div>

                <div className="Aboutus-description-container">
                    <div className="Aboutus-description">
                        <div className="ica-left">
                            <p className="left-top-text">Aplusadventure stringently complies to the obligation of safeguarding its client's personal information with a fraudulent security policy and ensures to cater to the complaints of the clients, in case of any: </p>
                            <div className="sub-title"><h3>Terms and Conditions</h3></div>
                            <p>Aplusadventure is committed to safeguard your privacy. The privacy policy for the company describes the privacy practices for visa permits.</p>
                            <div className="sub-title"><h3>Information Collected by Us!</h3></div>
                            <p>When you register or fill the form on our site, we collection the following information from you:</p>
                            <ul className="points">
                                <li><span className="check-icon">✓</span> First name and last name</li>
                                <li><span className="check-icon">✓</span> Requirements purpose</li>
                                <li><span className="check-icon">✓</span> Contact information, Email ID</li>
                                <li><span className="check-icon">✓</span> Services you need for travelling overseas, immigration</li></ul>
                            <div className="sub-title"><h3>Collected Information uses!</h3></div>
                            <p>The information submitted by you, helps us to understand your requirements and offer a better service. We use your info for the particular reasons:</p>
                            <ul className="points">
                                <li><span className="check-icon">✓</span> To send emails and provide details for market research</li>
                                <li><span className="check-icon">✓</span> To customise the experience of our website as per your interest.</li>
                                <li><span className="check-icon">✓</span> To enhance our services and amenities as per your requirement</li>
                                <li><span className="check-icon">✓</span> To send emails about our latest offerings, and deals which could be great, if you collect on your email ID only</li></ul>
                            <div className="sub-title"><h3>Security of the Collected Information!</h3></div>
                            <p>For prevention of unauthorised access or disclosure of information of our clients, we have electronic and safety managerial processes to save and protect these info.</p>
                            <div className="sub-title"><h3>Use of Cookies</h3></div>
                            <p>Cookies and IP Addresses We may collect data about your computer, this is numerical data regarding your internet actions to know you individually. The info includes your IP address, browser used by you, OS for specific system administration. We may also collection about the general usage regarding cookie files stored on the hard drive of our system. The cookies have info that is transmitted to the hard drive of your computer. With this information, you can improve our site to provide you with better and more customised facility.</p>
                            <p>On your part, you can decline to go for cookies, but then you may lose access to few portions of our website. You can do this by opting for setting on your browser which permits you to refuse for the cookies. Cookie is rather a small file which is placed in your hard drive. It allows sites to answer you back as an individual. Aplusadventures takes the privacy of the clients, their details and transaction info very seriously. It complies with the industrial processes and professional norms of conducting the operations of our payment system. We make use of high- standard security amenities and multiple levels of security to assure that all your data is safe and secure.</p>
                            <div className="sub-title"><h3>Links to other websites</h3></div>
                            <p>The sites may have links that provide you access to other sites of your interest. We are not responsible in any way for the security and privacy of your information which you submit while accessing other sites; for instance sites that are do not have any privacy statement. Promotions and Events We only take our personal information to keep you informed about the developments of our site including the newly launched and existing actions of our site, guidance amenities and services, new letters, promotions, pre-departure information, university and college data and more.</p>
                        </div>
                    </div>
                    <Getintouchform />
                </div>
            </div>
        </div>
    );
}

export default PrivacyPolicy;