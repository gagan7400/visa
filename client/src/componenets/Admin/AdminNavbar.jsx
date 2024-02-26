import React from 'react';
import { NavLink, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
const AdminNavbar = () => {
    let logout = () => {
        Cookies.set('token', "false")
        window.location.reload()
    }
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
                                    <a to='/irish_pr_visa' className="dropbtn" style={{ fontWeight: 600 }}>
                                        HOME
                                    </a>

                                </NavLink>


                                <div className='fs-3 align-content-center ' style={{ fontWeight: "100", color: "#081a32" }}>|</div>

                                <span className="dropdown admin-drop" onClick={logout}>
                                    <a className="dropbtn" style={{ fontWeight: 600, alignItems: "center" }}>
                                        Logout
                                    </a>

                                </span>

                            </ul>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default AdminNavbar;


