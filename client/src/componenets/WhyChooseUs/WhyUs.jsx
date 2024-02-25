import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
function WhyUs() {
    const [counterOn, setCounterOn] = useState(false);
    return (
        <div className='Why-Choose-us '>
            <div className='container'>
                <div className="sec-title text-center pb-5">
                    <span className="sub-title" style={{ color: ' #1e56ff' }}><i className="fa-solid fa-paper-plane" style={{ marginRight: "10px" }}></i><b>WHY CHOOSE US</b></span>
                    <h1 style={{ fontWeight: "700" }}>We ensure prompt services
                        <br />for visa & <span className="color3" style={{ color: "#fa8714" }}>Immigration</span></h1>
                    <div style={{ textAlign: "center" }}>
                        <h1 className='custom-hr' > </h1>
                    </div>
                </div>
                <div className='WhyUs-main-area pt-4'>



                    <div className='whyus-card' >
                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                            <p style={{ marginTop: "-30px" }}>CREATING GREAT OPPORTUNITIES</p>
                            <h1>We help Making your dream into Reality</h1>
                            <h2>
                                {counterOn && <CountUp start={0} end={4} duration={2} delay={0} />}.
                                {counterOn && <CountUp start={0} end={6} duration={2} delay={0} />}
                            </h2>
                            <p style={{ color: "#00255C" }}>CREATING GREAT OPPORTUNITIES</p>
                        </ScrollTrigger>
                        <div className='whyUs-icon-star'>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star-half-stroke"></i>
                        </div>
                        <p style={{ marginTop: "-1px" }}>Score on App Store</p>
                    </div>
                    <div className='whyus-textareas'>
                        <div className='WhyText1'>
                            <i className="fa-solid fa-people-group"></i>
                            <h4>Competent and Profession</h4>
                            <p>Our team has years of expertise and a track record of success with all visa procedures.</p>
                        </div>

                        <div className='WhyText2'>
                            <i className="fa-solid fa-ranking-star"></i>
                            <h4 className=''>High Rate of Success</h4>
                            <p>Aplusadventure has assisted thousands of candidates in filing their visa applications successfully.</p>
                        </div>

                        <div className='WhyText3'>
                            <i className="fa-solid fa-handshake-angle"></i>
                            <h4>Dedicated Assistance</h4>
                            <p>You will be allocated a Aplusadventure counsellor to assist you during the process.</p>
                        </div>

                        <div className='WhyText4'>
                            <i className="fa-solid fa-book"></i>
                            <h5>More Rapid Documentation</h5>
                            <p>Our centralized document repository securely maintains all your documents in one location, expediting the visa application process.</p>
                        </div>

                        <div className='why-us-lines'>
                            <div className="cross-container">
                                <div className="horizontal-line"></div>
                                <div className="vertical-line"></div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default WhyUs