import React, { useState } from 'react'
import CountUp from 'react-countup'
import { NavLink } from 'react-router-dom';
import ScrollTrigger from 'react-scroll-trigger'
function AboutUs() {
    const [counterOn, setCounterOn] = useState(false);
    return (
        <>
            <div className='About-Us'>
                <div className='container'>
                    <div className="About-content-container">
                        <div className="About-content-text">
                            <h2>About Us</h2>
                            <p>
                                Aplusadventure helps people get visas for the UK, Canada, the US, Australia, and New Zealand, among other places. Our immigration services have worked well for years, and our clients like how open and honest we are. Visa rules are different for every country and province, but we have a team of experts who can keep you up to date on these rules.
                            </p>
                            <p>
                                We're happy that Aplusadventure is now the most sought-after visa and immigration consulting agency among talented visa applicants. At Aplusadventure, every client is treated with respect and given good services and clear instructions.
                            </p>
                        </div>
                        <div className="About-image-container">
                            <img src="./AboutUs images/Us.jpg" alt="AboutUs-business-team_img" />
                        </div>
                        <div className='About-icon'>
                            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                <div className='About-icon-one'>
                                    <img src="./AboutUs images/countries-icon1.png" alt='countries-img' />
                                    <h1>
                                        {counterOn && <CountUp start={0} end={247} duration={2} delay={0} />}
                                    </h1>
                                    <p>Countries We Deal</p>
                                </div>
                                <div className='About-icon-two'>
                                    <img src="./AboutUs images/clients-icon.png" alt='clients-img' />
                                    <h1>
                                        {counterOn && <CountUp start={0} end={10000} duration={2} delay={0} />}+
                                    </h1>
                                    <p>Successfull Clients</p>
                                </div>
                                <div className='About-icon-three'>
                                    <img src="./AboutUs images/experience-icon.png" alt='experience-img' />
                                    <h1>
                                        {counterOn && <CountUp start={0} end={10} duration={2} delay={0} />}
                                    </h1>
                                    <p>Years Experience</p>
                                </div>
                                <div className='About-icon-four'>
                                    <img src="./AboutUs images/consultant.png" alt='consultant_img' />
                                    <h1>
                                        {counterOn && <CountUp start={0} end={30} duration={2} delay={0} />}
                                    </h1>
                                    <p>Immigration Expert</p>
                                </div>
                            </ScrollTrigger>

                        </div>
                        <div className='AboutUS-btn'>
                            <NavLink to='/about' className='about-btn-1 navlink'>Learn More</NavLink>
                            <NavLink to='/contactus' className='about-btn-2 navlink  '>Contact Us</NavLink>
                        </div>
                    </div >
                </div>
            </div>
        </>
    )
}

export default AboutUs;