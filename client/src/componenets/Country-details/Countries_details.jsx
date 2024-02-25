import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import { NavLink } from 'react-router-dom';
const Countries_details = () => {



  return (
    <>
     <div className="auto-container ps-5 pe-5 w-100" style={{ backgroundImage: `url("pattern-3.jpg")`, paddingBottom: "4rem", paddingTop: "4rem", }}>
        <div className='container'>
          <div className="sec-title text-center pb-5">
            <span className="sub-title " style={{ color: ' #1e56ff' }}><b>COUNTRIES YOU CAN VISIT</b></span>
            <h1 style={{ fontWeight: "700" }}>Countries we're supporting <br />for the <span className="color3" style={{ color: "#fa8714" }}>Aplusadventure</span></h1>
            <h1 style={{ textAlign: "center" }}>
              <div className='custom-hr' />
            </h1>
          </div>
          <div>
            <Swiper
              spaceBetween={30}
              autoplay={{
                delay: 5500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper pt-5 pb-5 pe-3 ps-3"
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                520: {
                  slidesPerView: 3,
                },
                950: {
                  slidesPerView: 4,
                },
                1150: {
                  slidesPerView: 5,
                },
              }}
            >

              <SwiperSlide style={{ height: '200px' }} className='country-section rounded-4'>
                <div className=''>
                  <div className='country-img d-flex justify-content-center mb-3'>
                    <img className=' overflow-hidden' style={{ width: "100px" ,borderRadius:"50%",borderStyle:'none'}} src='/flag/flag-4.png' alt="" />

                  </div>
                  <NavLink to='/russia_details' className=' bg-light text-decoration-none text-dark mt-3 ps-4 pe-4 pt-2 pb-2 rounded-5 fs-5' style={{ fontWeight: "600" }}>
                  Russia
                  </NavLink>
                </div>
              </SwiperSlide>
              <SwiperSlide style={{ height: '200px' }} className='country-section rounded-4'>
                <div className=''>
                  <div className='country-img d-flex justify-content-center mb-3'>
                    <img className=' overflow-hidden' style={{ width: "100px" ,borderRadius:"50%",borderStyle:'none'}} src='/flag/flag-16.png' alt="" />

                  </div>
                  <NavLink to='/thailand_details' className=' bg-light text-decoration-none text-dark mt-3 ps-4 pe-4 pt-2 pb-2 rounded-5 fs-5' style={{ fontWeight: "600" }}>
                    Thailand
                  </NavLink>
                </div>
              </SwiperSlide>
              <SwiperSlide style={{ height: '200px' }} className='country-section rounded-4'>
                <div className=''>
                  <div className='country-img d-flex justify-content-center mb-3'>
                    <img style={{ width: "90px" }} src='/flag/flag-1.png' alt="" />

                  </div>
                  <NavLink to='/aus_details' className=' bg-light text-decoration-none text-dark mt-3 ps-4 pe-4 pt-2 pb-2 rounded-5 fs-5' style={{ fontWeight: "600" }}>
                  Australia
                  </NavLink>
                </div>
              </SwiperSlide>
              <SwiperSlide style={{ height: '200px' }} className='country-section rounded-4'>
                <div className=''>
                  <div className='country-img d-flex justify-content-center mb-3'>
                    <img className=' overflow-hidden' style={{ width: "90px",borderRadius:"50%",borderStyle:'none' }} src='/flag/flag-2.png' alt="" />

                  </div>
                  <NavLink to='/germany_details' className=' bg-light text-decoration-none text-dark mt-3 ps-4 pe-4 pt-2 pb-2 rounded-5 fs-5' style={{ fontWeight: "600" }}>
                  Germany
                  </NavLink>
                </div>
              </SwiperSlide>
              <SwiperSlide style={{ height: '200px' }} className='country-section rounded-4'>
                <div className=''>
                  <div className='country-img d-flex justify-content-center mb-3'>
                    <img className=' overflow-hidden' style={{ width: "100px" ,borderRadius:"50%",borderStyle:'none'}} src='/flag/flag-3.png' alt="" />

                  </div>
                  <NavLink to='/braxil_details' className=' bg-light text-decoration-none text-dark mt-3 ps-4 pe-4 pt-2 pb-2 rounded-5 fs-5' style={{ fontWeight: "600" }}>
                  Brazil
                  </NavLink>
                </div>
              </SwiperSlide>
              <SwiperSlide style={{ height: '200px' }} className='country-section rounded-4'>
                <div className=''>
                  <div className='country-img d-flex justify-content-center mb-3'>
                    <img className=' overflow-hidden' style={{ width: "100px" ,borderRadius:"50%",borderStyle:'none'}} src='/flag/flag-18.png' alt="" />

                  </div>
                  <NavLink to='/canada_details' className=' bg-light text-decoration-none text-dark mt-3 ps-4 pe-4 pt-2 pb-2 rounded-5 fs-5' style={{ fontWeight: "600" }}>
                  Canada
                  </NavLink>
                </div>
              </SwiperSlide>
              <SwiperSlide style={{ height: '200px' }} className='country-section rounded-4'>
                <div className=''>
                  <div className='country-img d-flex justify-content-center mb-3'>
                    <img style={{ width: "90px" }} src='/flag/france-flag1.png' alt="" />

                  </div>
                  <NavLink to='/france_details' className=' bg-light text-decoration-none text-dark mt-3 ps-4 pe-4 pt-2 pb-2 rounded-5 fs-5' style={{ fontWeight: "600" }}>
                  France
                  </NavLink>
                </div>
              </SwiperSlide>
              <SwiperSlide style={{ height: '200px' }} className='country-section rounded-4'>
                <div className=''>
                  <div className='country-img d-flex justify-content-center mb-3'>
                    <img className=' overflow-hidden' style={{ width: "90px",borderRadius:"50%",borderStyle:'none' }} src='/flag/Malesia-flag1.png' alt="" />

                  </div>
                  <NavLink to='/malesia_details' className=' bg-light text-decoration-none text-dark mt-3 ps-4 pe-4 pt-2 pb-2 rounded-5 fs-5' style={{ fontWeight: "600" }}>
                  Malesia
                  </NavLink>
                </div>
              </SwiperSlide>
              <SwiperSlide style={{ height: '200px' }} className='country-section rounded-4'>
                <div className=''>
                  <div className='country-img d-flex justify-content-center mb-3'>
                    <img className=' overflow-hidden' style={{ width: "90px",borderRadius:"50%",borderStyle:'none' }} src='/flag/UAE1.png' alt="" />

                  </div>
                  <NavLink to='/uae_details' className=' bg-light text-decoration-none text-dark mt-3 ps-4 pe-4 pt-2 pb-2 rounded-5 fs-5' style={{ fontWeight: "600" }}>
                  UAE
                  </NavLink>
                </div>
              </SwiperSlide>
              <SwiperSlide style={{ height: '200px' }} className='country-section rounded-4'>
                <div className=''>
                  <div className='country-img d-flex justify-content-center mb-3'>
                    <img className=' overflow-hidden' style={{ width: "90px",borderRadius:"50%",borderStyle:'none' }} src='/flag/singore-flag.png' alt="" />

                  </div>
                  <NavLink to='/singapore_details' className=' bg-light text-decoration-none text-dark mt-3 ps-4 pe-4 pt-2 pb-2 rounded-5 fs-5' style={{ fontWeight: "600" }}>
                  Singapore
                  </NavLink>
                </div>
              </SwiperSlide>
              <SwiperSlide style={{ height: '200px' }} className='country-section rounded-4'>
                <div className=''>
                  <div className='country-img d-flex justify-content-center mb-3'>
                    <img className=' overflow-hidden' style={{ width: "90px",borderRadius:"50%",borderStyle:'none' }} src='/flag/Italy-flag1.png' alt="" />

                  </div>
                  <NavLink to='/italy_details' className=' bg-light text-decoration-none text-dark mt-3 ps-4 pe-4 pt-2 pb-2 rounded-5 fs-5' style={{ fontWeight: "600" }}>
                  Italy
                  </NavLink>
                </div>
              </SwiperSlide>
              <SwiperSlide style={{ height: '200px' }} className='country-section rounded-4'>
                <div className=''>
                  <div className='country-img d-flex justify-content-center mb-3'>
                    <img style={{ width: "90px" }} src='/flag/flag-5.png' alt="" />

                  </div>
                  <NavLink to='/england_details' className=' bg-light text-decoration-none text-dark mt-3 ps-4 pe-4 pt-2 pb-2 rounded-5 fs-5' style={{ fontWeight: "600" }}>
                  England
                  </NavLink>
                </div>
              </SwiperSlide>
              <SwiperSlide style={{ height: '200px' }} className='country-section rounded-4'>
                <div className=''>
                  <div className='country-img d-flex justify-content-center mb-3'>
                    <img className=' overflow-hidden' style={{ width: "90px",borderRadius:"50%",borderStyle:'none' }} src='/flag/USA-flag1.png' alt="" />

                  </div>
                  <NavLink to='/usa_details' className=' bg-light text-decoration-none text-dark mt-3 ps-4 pe-4 pt-2 pb-2 rounded-5 fs-5' style={{ fontWeight: "600" }}>
                  USA
                  </NavLink>
                </div>
              </SwiperSlide>
              <SwiperSlide style={{ height: '200px' }} className='country-section rounded-4'>
                <div className=''>
                  <div className='country-img d-flex justify-content-center mb-3'>
                    <img className=' overflow-hidden' style={{ width: "90px",borderRadius:"50%",borderStyle:'none' }} src='/flag/China-flag.png' alt="" />

                  </div>
                  <NavLink to='/china_details' className=' bg-light text-decoration-none text-dark mt-3 ps-4 pe-4 pt-2 pb-2 rounded-5 fs-5' style={{ fontWeight: "600" }}>
                  China
                  </NavLink>
                </div>
              </SwiperSlide>
              <SwiperSlide style={{ height: '200px' }} className='country-section rounded-4'>
                <div className=''>
                  <div className='country-img d-flex justify-content-center mb-3'>
                    <img style={{ width: "90px" }} src='/flag/flag-6.png' alt="" />

                  </div>
                  <NavLink to='/india_details' className=' bg-light text-decoration-none text-dark mt-3 ps-4 pe-4 pt-2 pb-2 rounded-5 fs-5' style={{ fontWeight: "600" }}>
                  India
                  </NavLink>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

      </div>
    </>
  );
}

export default Countries_details;
