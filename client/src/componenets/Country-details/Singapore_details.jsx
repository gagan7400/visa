import React, { useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'

import Navbar from '../Navbar'
import Countries_details from './Countries_details';

const Singapore_details = () => {
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
                        <h1 className='title_text' style={{ fontWeight: "600" }}>Singapore Details</h1>
                        <div className='  subChild_title' style={{}}>
                            <NavLink to='/' className='text-decoration-none'> Home </NavLink><i className="bi bi-chevron-right"></i> <NavLink className='text-decoration-none'> Pages </NavLink><i className="bi bi-chevron-right"></i><span>Country</span>
                        </div>

                    </div>
                </div>

            </div>
            <div className='text-center w-75 m-auto text-secondary' style={{ fontSize: '2rem', fontWeight: '700', paddingTop: '8rem' }}>
                Situated at the southern tip of the Malay Peninsula, Singapore is bordered by Malaysia to the north and the Singapore Strait to the south
            </div>
            <section className="country-details pb-5 " style={{ paddingTop: '3rem' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="country-details__img">
                                <img className='country-img' style={{ height: "380px" }} src="/Dependent-img/singapore.jpg" alt="" /> </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="country-content">
                                <h1 className='country-title'>Singapore</h1>
                                <p className='fs-5 text-secondary country-text' style={{ fontWeight: '500' }}>
                                    Singapore, a vibrant island nation in Southeast Asia, boasts a diverse culture, bustling economy, and modern skyline. Known for its efficiency and innovation, it offers a dynamic blend of heritage, culinary delights, and world-class attractions.
                                </p>

                                <table className="table pt-5 mt-4">
                                    <tbody >
                                        <tr >
                                            <th scope="row">Country</th>
                                            <td>Singapore</td>
                                        </tr>
                                        <tr >
                                            <th scope="row">Languages Spoken</th>
                                            <td> English, Malay, Mandarin Chinese</td>
                                        </tr>
                                        <tr >
                                            <th scope="row">Visa Requirements</th>
                                            <td>Varies by nationality</td>
                                        </tr>
                                        <tr >
                                            <th scope="row">Area (km2)</th>
                                            <td>734.3 km²</td>
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

export default Singapore_details;