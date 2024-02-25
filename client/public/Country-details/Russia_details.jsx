import React, { useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'

import Navbar from '../Navbar'
import Countries_details from './Countries_details';

const Russia_details = () => {
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
                <h1>{id}</h1>

                <div className='parent-container' style={{ position: 'relative' }}>
                    <img className=' z-1' src="visa.jpeg" alt="" />

                    <div className='overlay z-4' style={{ backgroundColor: "#010206", height: '100%', position: 'absolute', top: 0, left: 0, width: '100%', opacity: '55%' }}>
                        <h1 className='title_text' style={{ fontWeight: "600" }}>Russia Details</h1>
                        <div className='  subChild_title' style={{}}>
                            <NavLink to='/' className='text-decoration-none'> Home </NavLink><i className="bi bi-chevron-right"></i> <NavLink className='text-decoration-none'> Pages </NavLink><i className="bi bi-chevron-right"></i><span>Country</span>
                        </div>

                    </div>
                </div>

            </div>
            <div className='text-center w-75 m-auto text-secondary' style={{ fontSize: '2rem', fontWeight: '700', paddingTop: '8rem' }}>
                Russia, the largest country in the world, spans Eastern Europe and Northern Asia.</div>


            <section className="country-details pb-5 " style={{ paddingTop: '3rem' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="country-details__img">
                                <img className='country-img' style={{ height: "380px" }} src="/Dependent-img/Russia.jpg" alt="" /> </div>
                        </div>
                        <div className="col-lg-6 col-md-12 ps-4">
                            <div className="country-content">
                                <h1 className='country-title'>Russia</h1>
                                <p className='fs-5 text-secondary country-text' style={{ fontWeight: '500' }}>
                                    Russia, the largest country in the world, is known for its rich history and diverse culture. Explore the vast landscapes and experience the unique traditions that make Russia a fascinating destination.
                                </p>

                                <table className="table pt-5 mt-4">
                                    <tbody className=''>
                                        <tr className=''>
                                            <th scope="row">Country</th>
                                            <td>Russia</td>
                                        </tr>
                                        <tr className=''>
                                            <th scope="row">Official Language</th>
                                            <td>Russian</td>
                                        </tr>
                                        <tr className=''>
                                            <th scope="row">Visa Requirements</th>
                                            <td>Varies by nationality</td>
                                        </tr>
                                        <tr className=''>
                                            <th scope="row">Total Area (km2)</th>
                                            <td>17,098,242 km2</td>
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

export default Russia_details;