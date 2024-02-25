import React, { useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Countries from './Countries';
import Navbar from './Navbar'
// import {} from 'react-router-dom'
const Country_details = () => {
    let { id } = useParams();
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, []);
    return (
        <div className=''>
            <Navbar />
            <div className='pt-0'>
                <h1>{id}</h1>

                <div className='parent-container' style={{ position: 'relative' }}>
                    <img className=' z-1' src="visa.jpeg" alt="Visa_image" />

                    <div className='overlay z-4' style={{ backgroundColor: "#010206", height: '100%', position: 'absolute', top: 0, left: 0, width: '100%', opacity: '55%' }}>
                        <h1 className='title_text' style={{ fontWeight: "600" }}>Country Details</h1>
                        <div className='  subChild_title' style={{}}>
                            <NavLink to='/' className='text-decoration-none'> Home </NavLink><i className="bi bi-chevron-right"></i> <NavLink className='text-decoration-none'> Pages </NavLink><i className="bi bi-chevron-right"></i><span>Country</span>
                        </div>

                    </div>
                </div>

            </div>
            <Swiper

                spaceBetween={30}
                autoplay={{
                    delay: 5500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper review-pairent"

            >

                <SwiperSlide>
                    <section className="country-details pb-5 " style={{ paddingTop: '13rem' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <div className="country-details__img">
                                        <img className='country-img' style={{ height: "440px" }} src="/Dependent-img/aus1.jpg" alt="England_image" /> </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="country-content">
                                        <h1 className='country-title'>England</h1>
                                        <p className='fs-5 text-secondary country-text' style={{ fontWeight: '500' }}>England, steeped in history and culture, invites exploration with its iconic landmarks and charming countryside. From the historic streets of London to the rolling hills of the Cotswolds, England offers a captivating blend of tradition and modernity. Indulge in afternoon tea, visit historic castles, and immerse yourself in the timeless charm of this captivating country.</p>

                                        <table className="table pt-5 mt-4">
                                            <tbody className=''>
                                                <tr className=''>
                                                    <th scope="row">Country</th>
                                                    <td>England</td>
                                                </tr>
                                                <tr className=''>
                                                    <th scope="row">Languages Spoken</th>
                                                    <td>English</td>
                                                </tr>
                                                <tr className=''>
                                                    <th scope="row">Visa Requirements</th>
                                                    <td>Valid Passport, Visa for Non-EU Citizens</td>
                                                </tr>
                                                <tr className=''>
                                                    <th scope="row">Area (km2)</th>
                                                    <td>130,395 km2</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide >
                    <section className="country-details pb-5 " style={{ paddingTop: '13rem' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <div className="country-details__img">
                                        <img className='country-img' style={{ height: "440px" }} src="/Dependent-img/Braxil.jpg" alt="Brazil-image" /> </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="country-content">
                                        <h1 className='country-title'>Brazil</h1>
                                        <p className='fs-5 text-secondary country-text' style={{ fontWeight: '500' }}>
                                            Discover the vibrant culture and diverse landscapes of Brazil. From the Amazon rainforest to the lively streets of Rio de Janeiro, Brazil offers a unique blend of nature and urban experiences.
                                        </p>

                                        <table className="table pt-5 mt-4">
                                            <tbody className=''>
                                                <tr className=''>
                                                    <th scope="row">Country</th>
                                                    <td>Brazil</td>
                                                </tr>
                                                <tr className=''>
                                                    <th scope="row">Languages Spoken</th>
                                                    <td>Portuguese</td>
                                                </tr>
                                                <tr className=''>
                                                    <th scope="row">Visa Requirements</th>
                                                    <td>Varies by nationality</td>
                                                </tr>
                                                <tr className=''>
                                                    <th scope="row">Area (km2)</th>
                                                    <td>8,515,767 km2</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                </SwiperSlide>

                <SwiperSlide >
                    <section className="country-details pb-5" style={{ paddingTop: '13rem' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <div className="country-details__img">
                                        <img className='country-img' style={{ height: "440px" }} src="/Dependent-img/aus1.jpg" alt="Australia_image" /> </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="country-content">
                                        <h1 className='country-title'>Australia</h1>
                                        <p className='fs-5 text-secondary country-text' style={{ fontWeight: '500' }}>
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are gossage of Lorem Ipsum, you need to be sure there.
                                        </p>

                                        <table className="table pt-5 mt-4">
                                            <tbody className=''>
                                                <tr className=''>
                                                    <th scope="row">Country</th>
                                                    <td>Australia</td>
                                                </tr>
                                                <tr className=''>
                                                    <th scope="row">Languages Spoken</th>
                                                    <td>English</td>
                                                </tr>
                                                <tr className=''>
                                                    <th scope="row">Visa Requirements</th>
                                                    <td>Personal Documents Required</td>
                                                </tr>
                                                <tr className=''>
                                                    <th scope="row">Area (km2)</th>
                                                    <td>7,692,024 km2</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide >
                    <section className="country-details pb-5 " style={{ paddingTop: '13rem' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <div className="country-details__img">
                                        <img className='country-img' style={{ height: "440px" }} src="/Dependent-img/Russia.jpg" alt="Russia_image" /> </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
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
                </SwiperSlide>


            </Swiper>

            <Countries />
        </div>
    )
}

export default Country_details