import React from 'react'

function ServicesCards() {
    return (
        <div className='mt-5 pt-5 Sevices-main-container'>
            <div className='container'>
                <div className="sec_title text-center pb-5 m-auto " >
                    <div >
                    <span className="sub-title" style={{ color: ' #1e56ff' }}><i className="fa-solid fa-paper-plane" style={{ marginRight: "10px" }}></i><b>OUR SERVICES</b></span>        
                        <h2 style={{ fontWeight: "700" }}>To navigate the  <span className="color3" style={{ color: "#fa8714" }}>immigration</span> process and arrive at one's final destination requires <span className="color3" style={{ color: "#fa8714" }}>expert guidance</span></h2>
                        <p className='fs-6 text-secondary pe-5 ps-5'>We will make obtaining a visa as easy and stress-free as possible.</p>

                    </div>
                </div>
                <div className='main-card-services'>

                    <div className="card-Services">
                        <div className='card-Services-images'>
                            <img src="./Services images/immigration-img.jpg" alt='immigration-girl_img'/>
                        </div>

                        <div className="card-Services-body">
                            <div className="custom-icon-wrapper">
                                <i className="fa-solid fa-gear"></i>
                            </div>
                            <h2>Immigration Services</h2>

                            <div className="animated-line-container">
                                <div className="animated-line">
                                    <div className="dotted-line"></div>
                                </div>
                            </div>

                            <div className='airplane'>
                                <i className="fa-solid fa-plane"></i>
                            </div>
                            <p>We are renowned for providing our clients with the finest immigration services.</p>
                        </div>
                    </div>
                    <div className="card-Services">
                        <div className='card-Services-images'>
                            <img src="./Services images/family-img.jpg" alt='family_img'/>
                        </div>


                        <div className="card-Services-body">
                            <div className="custom-icon-wrapper">
                                <i className="fa-solid fa-address-card"></i>
                            </div>
                            <h2>Dependent Visa</h2>

                            <div className="animated-line-container">
                                <div className="animated-line">
                                    <div className="dotted-line"></div>
                                </div>
                            </div>

                            <div className='airplane'>
                                <i className="fa-solid fa-plane"></i>
                            </div>
                            <p>Our expert consultants will make your dreams into reality by providing Dependent Visa Service.</p>
                        </div>
                    </div>
                    <div className="card-Services">
                        <div className='card-Services-images'>
                            <img src="./Services images/Books-img.jpg" alt='Books_img'/>
                        </div>

                        <div className="card-Services-body">
                            <div className="custom-icon-wrapper">
                                <i className="fa-solid fa-graduation-cap"></i>
                            </div>
                            <h2>Study Abroad</h2>

                            <div className="animated-line-container">
                                <div className="animated-line">
                                    <div className="dotted-line"></div>
                                </div>
                            </div>

                            <div className='airplane'>
                                <i className="fa-solid fa-plane"></i>
                            </div>
                            <p>We are one of the best Study Abroad visa assistance providers and offer prompt services at affordable charges.</p>
                        </div>
                    </div>
                    <div className="card-Services">
                        <div className='card-Services-images'>
                            <img src="./Services images/world-map.jpg" alt='world-map_img'/>
                        </div>

                        <div className="card-Services-body">
                            <div className="custom-icon-wrapper">
                                <i className="fa-solid fa-map-location-dot"></i>
                            </div>
                            <h2>Tourist Visa</h2>

                            <div className="animated-line-container">
                                <div className="animated-line">
                                    <div className="dotted-line"></div>
                                </div>
                            </div>

                            <div className='airplane'>
                                <i className="fa-solid fa-plane"></i>
                            </div>
                            <p>Visiting a foreign country? The Tourist visa process can be tedious, but our assistance will make it simpler for you.</p>
                        </div>
                    </div>
                    <div className="card-Services">
                        <div className='card-Services-images'>
                            <img src="./Services images/business-man.jpg" alt='business-man_img'/>
                        </div>

                        <div className="card-Services-body">
                            <div className="custom-icon-wrapper">
                                <i className="fa-solid fa-briefcase"></i>
                            </div>
                            <h2>Business Visa</h2>

                            <div className="animated-line-container">
                                <div className="animated-line">
                                    <div className="dotted-line"></div>
                                </div>
                            </div>

                            <div className='airplane'>
                                <i className="fa-solid fa-plane"></i>
                            </div>
                            <p>Our team provides complete and practical guidance to our clients during their Business Visa process.</p>
                        </div>
                    </div>
                    <div className="card-Services">
                        <div className='card-Services-images'>
                            <img src="./Services images/other-services.jpg" alt='other-services_img'/>
                        </div>

                        <div className="card-Services-body">
                            <div className="custom-icon-wrapper">
                                <i className="fa-solid fa-list"></i>
                            </div>
                            <h2>Other Services</h2>

                            <div className="animated-line-container">
                                <div className="animated-line">
                                    <div className="dotted-line"></div>
                                </div>
                            </div>

                            <div className='airplane'>
                                <i className="fa-solid fa-plane"></i>
                            </div>
                            <p>Our team helps our clients with also their stamping, translation, and more.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesCards