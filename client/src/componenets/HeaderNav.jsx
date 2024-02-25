import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderNav = () => {
  return (
    <div className='Header_section '>
      <div className='container'>
        <div className='bg-light'>
          <div className='headernav-first'>
            <div className=' d-flex justify-content-evenly p-lg-2  pt-0 pb-0 '>
              <div className='col-6  pt-0 pb-0 ps-5 headernav-email-number'>
                <span className='header-nav-col text-decoration-none' style={{ fontWeight: '600' }}>
                  <a href="tel:87662 47483" style={{ textDecoration: "none", }}><i className="bi bi-telephone-fill pe-1"></i>(+91)-87662 47483</a>
                </span>
                <span className='ms-5 header-nav-col text-decoration-none' style={{ fontWeight: '600' }}>
                  <a href="mailto:aplusadventureholidays@gmail.com" style={{ textDecoration: "none", }}> <i className="bi bi-envelope-fill pe-1"></i>aplusadventureholidays@gmail.com</a>
                </span>
              </div>
              <div className='header-news-section col-6  pt-0 pb-0'>
                <div className='header-news-child2' >
                  <a href="https://www.instagram.com/aplusadventure1?igsh=bnN4NmJ4Z3Z5Nmo%3D" target='_blank' ><i className="bi bi-instagram head-i1 me-3"></i></a>
                  <a href="https://www.facebook.com/royalpandit9720?mibextid=ZbWKwL" target='_blank'><i className="bi bi-facebook head-i2 me-3"></i></a>
                  <a href="https://x.com/aplusadventure1?t=aXDepMCQnHFtQkTKYmZYTg&s=08" target='_blank'><i className="bi bi-twitter head-i2 me-3"></i></a>
                  <a href="https://www.linkedin.com/in/aplus-adventure-8620392b7"><i className="bi bi-linkedin head-i2 me-3"></i></a>
                  <a href="https://youtube.com/@AplusAdventurevisa?si=uMd2nlq3_sE4V5UY"><i className="bi bi-youtube head-i3 me-5"></i></a>

                </div>
              </div>
              <hr className='p-0 m-0 text-secondary' />
            </div>
          </div>
          <div className=' d-flex justify-content-between pe-lg-5 ps-lg-5 pt-2 pb-2 bg-white'>
            <NavLink to="/" className="navbar-brand p-0 pe-5 text-danger" style={{ marginLeft: "0px" }}>
              <img height={"60px"} src="/Aboutimage/logo.png" alt="Logo" />
            </NavLink>

            <form className="d-flex" role="search">
              <div className="btn  mb-3 mt-2 head-btn" style={{ color: "white" }}>
                <a href="tel:+918766247483" style={{ textDecoration: "none", color: "white" }}><i className="bi bi-telephone-fill pe-1 ps-1" ></i><span className='header-call'>(+91)-87662 47483</span></a>
              </div>
              <div className="btn  ps-2 ms-2 mb-3 mt-2 head-btn" style={{ color: "white" }}>
                <a href="https://wa.me/+918766247483" style={{ textDecoration: "none", color: "white" }}   > <i className="bi bi-whatsapp pe-1 ps-1"></i><span className='header-call'>(+91)-87662 47483</span></a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
