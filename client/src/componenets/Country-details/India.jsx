import React, { useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'

import Navbar from '../Navbar'
import Countries_details from './Countries_details';

const India = () => {
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

                <div className='parent-container pt-0 mt-0' style={{ position: 'relative' }}>
                    <img className=' z-1' src="visa.jpeg" alt="" />
                    <h1>{id}</h1>

                    <div className='overlay z-4' style={{ backgroundColor: "#010206", height: '100%', position: 'absolute', top: 0, left: 0, width: '100%', opacity: '55%' }}>
                        <h1 className='title_text' style={{ fontWeight: "600" }}>India Details</h1>
                        <div className='  subChild_title' style={{}}>
                            <NavLink to='/' className='text-decoration-none'> Home </NavLink><i className="bi bi-chevron-right"></i> <NavLink className='text-decoration-none'> Pages </NavLink><i className="bi bi-chevron-right"></i><span>Country</span>
                        </div>

                    </div>
                </div>

            </div>
            <div className='text-center w-75 m-auto text-secondary' style={{ fontSize: '2rem', fontWeight: '700', paddingTop: '8rem' }}>
                India, officially known as the Republic of India, is a country located in South Asia.
            </div>
            <section className="country-details pb-5" style={{ paddingTop: '3rem' }}>
                <div className="container">

                    <div className="row">
                        <div className="col-lg-6 col-md-12 pt-3">
                            <div className="country-details__img">
                                <img className='country-img' style={{ height: "340px", height: '370px' }} src="/Dependent-img/india.jpg" alt="" /> </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="country-content">
                                <h1 className='country-title'>India</h1>
                                <p className='fs-5 text-secondary country-text' style={{ fontWeight: '500' }}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are gossage of Lorem Ipsum, you nee there</p>

                                <table className="table pt-5 mt-4">
                                    <tbody className=''>
                                        <tr className=''>
                                            <th scope="row">Country</th>
                                            <td>India</td>
                                        </tr>
                                        <tr className=''>
                                            <th scope="row">Languages Spoken</th>
                                            <td>Hindi & English</td>
                                        </tr>
                                        <tr className=''>
                                            <th scope="row">Visa Requirements</th>
                                            <td>Valid Passport, Visa for Non-EU Citizens</td>
                                        </tr>
                                        <tr className=''>
                                            <th scope="row">Area</th>
                                            <td>1.269 million square miles</td>
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

export default India;