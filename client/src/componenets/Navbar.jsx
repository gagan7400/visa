import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (

    <div className=' navbar_section '>
      <nav className="navbar  navbar_section-child navbar-expand-lg">
        <div className='container'>

          <div className="container-fluid ">
            <div
              className="navbar-toggler "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="text-white"></span><i className="bi bi-list text-warning"></i><span className='ps-2 text-white' style={{ fontWeight: '600' }}>Menu</span>
            </div>
            <div className="collapse navbar-collapse navbar_droptown_bg" id="navbarSupportedContent" style={{ zIndex: '4' }}>
              <ul className="navbar-nav align-content-center   UL_nav">

                <NavLink to='/' className="dropdown HOme">
                  <a to='/irish_pr_visa' className="dropbtn  " style={{ fontWeight: 600 }}>
                    HOME
                  </a>

                </NavLink>
                <div className='fs-3 align-content-center ' style={{ fontWeight: "100", color: "#081a32" }}>|</div>
                <NavLink to='/about' className="dropdown">
                  <a to='/irish_pr_visa' className="dropbtn" style={{ fontWeight: 600 }}>
                    ABOUT US
                  </a>

                </NavLink>

                <div className='fs-3 align-content-center ' style={{ fontWeight: "100", color: "#081a32" }}>|</div>
                <NavLink className="dropdown">
                  <a to='/irish_pr_visa' className="dropbtn " style={{ fontWeight: 600 }}>
                    DEPENDENT
                  </a>
                  <div className="dropdown-content ">
                    <NavLink to='/usa_de_visa'>USA DEPENDENT VISA</NavLink>
                    <NavLink to='/uk_de_visa'>UK DEPENDENT VISA</NavLink>
                    <NavLink to='/aus_de_visa'>AUSTRALIA DEPENDENT VISA</NavLink>
                    <NavLink to='/canada_de_visa'>CANADA DEPENDENT VISA</NavLink>
                    <NavLink to='/germ_de_visa'>GERMANY DEPENDENT VISA</NavLink>
                    <NavLink to='/southafrica_de_visa'>SOUTHAFRICA DEPENDENT VISA</NavLink>
                    <NavLink to='/turkey_de_visa'>TURKEY DEPENDENT VISA</NavLink>
                    <NavLink to='/ireland_de_visa'>IRELAND DEPENDENT VISA</NavLink>
                    <NavLink to='/mexico_de_visa'>MEXICO DEPENDENT VISA</NavLink>
                    <NavLink to='/phill_de_visa'>PHILLIPINES DEPENDENT  VISA</NavLink>
                    <NavLink to='/more_countries'>MORE COUNTRIES</NavLink>
                  </div>
                </NavLink>
                <div className='fs-3 align-content-center ' style={{ fontWeight: "100", color: "#081a32" }}>|</div>
                <NavLink className="dropdown">
                  <a to='/irish_pr_visa' className="dropbtn " style={{ fontWeight: 600 }}>
                    TOURIST
                  </a>
                  <div className="dropdown-content">
                    <NavLink to='/us'>USA TOURIST VISA</NavLink>
                    <NavLink to='/canada'>CANADA TOURIST VISA</NavLink>
                    <NavLink to='/uk'>UK TOURIST VISA</NavLink>
                    <NavLink to='/australia'>AUSTRALIA TOURIST VISA</NavLink> n
                    <NavLink to='/italy'>ITALY TOURIST VISA</NavLink>
                    <NavLink to='/spain'>SPAIN TOURIST VISA</NavLink>
                    <NavLink to='/france'>FRANCE TOURIST VISA</NavLink>

                    <NavLink to='/morecountry'>MORE COUNTRIES</NavLink>
                  </div>
                </NavLink>
                <div className='fs-3 align-content-center ' style={{ fontWeight: "100", color: "#081a32" }}>|</div>
                <NavLink className="dropdown">
                  <a to='/irish_pr_visa' className="dropbtn" style={{ fontWeight: 600 }}>
                    BUSINESS VISA
                  </a>
                  <div className="dropdown-content">
                    <NavLink to='/bussines'>IRAN BUSINESS VISA</NavLink>

                  </div>
                </NavLink>


              </ul>

            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;


