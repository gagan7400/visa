import React, { useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'

import Navbar from '../Navbar'
import Countries_details from './Countries_details';

const Malesia_details = () => {
    let { id } = useParams();
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
            <div className='pt-0'>

                <div className='parent-container' style={{ position: 'relative' }}>
                    <img className=' z-1' src="visa.jpeg" alt="" />
                    <h1>{id}</h1>

                    <div className='overlay z-4' style={{ backgroundColor: "#010206", height: '100%', position: 'absolute', top: 0, left: 0, width: '100%', opacity: '55%' }}>
                        <h1 className='title_text' style={{ fontWeight: "600" }}>Malesia Details</h1>
                        <div className='  subChild_title' style={{}}>
                            <NavLink to='/' className='text-decoration-none'> Home </NavLink><i className="bi bi-chevron-right"></i> <NavLink className='text-decoration-none'> Pages </NavLink><i className="bi bi-chevron-right"></i><span>Country</span>
                        </div>

                    </div>
                </div>

            </div>
            <div className='text-center w-75 m-auto text-secondary' style={{ fontSize: '2rem', fontWeight: '700', paddingTop: '8rem' }}>
                Malaysia is a federal constitutional monarchy that consists of 13 states and three federal territories
            </div>
            <section className="country-details pb-5 " style={{ paddingTop: '3rem' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="country-details__img mt-3">
                                <img className='country-img' style={{ height: "380px" }} src="/Dependent-img/Malesia1.jpg" alt="loding" /> </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="country-content">
                                <h1 className='country-title'>Malesia</h1>
                                <p className='fs-5 text-secondary country-text' style={{ fontWeight: '500' }}>
                                    Malaysia, a vibrant Southeast Asian nation, enthralls with diverse landscapes, bustling cities, and rich cultural heritage. From tropical rainforests to stunning beaches, it offers a tapestry of flavors and traditions, drawing visitors from around the globe.
                                </p>

                                <table className="table pt-5 mt-4">
                                    <tbody >
                                        <tr >
                                            <th scope="row">Country</th>
                                            <td>Malesia</td>
                                        </tr>
                                        <tr >
                                            <th scope="row">Languages Spoken</th>
                                            <td>Malay</td>
                                        </tr>
                                        <tr >
                                            <th scope="row">Visa Requirements</th>
                                            <td>Varies by nationality</td>
                                        </tr>
                                        <tr >
                                            <th scope="row">Area (km2)</th>
                                            <td>330,803 km2</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Countries_details />
        </div>
    )
}

export default Malesia_details;