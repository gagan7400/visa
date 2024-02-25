import React  from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Countries from './Countries';
import Clients_review from './Clients_review';
import Navbar from './Navbar';
import ServicesCards from './Cards/ServicesCards';
import AboutUs from './About Us/AboutUs';
import WhyUs from './WhyChooseUs/WhyUs';
import Form from './Liveproject/Form';
import Cookies from 'js-cookie';
// import { Navigate } from 'react-router-dom';

export default function Home() {
 
  return (
    <div >
      <Navbar />
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 9500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >

        <SwiperSlide className='home_sliders1'>
          <img src="home_slider1.png" alt="Visa_slider-img-1" />

        </SwiperSlide >
        <SwiperSlide className='home_sliders2'>

          <img src="home_slider111.png" alt="Visa_slider-img-111" />

        </SwiperSlide >

        <SwiperSlide className='home_sliders1'>
          <img src="home_slider2.png" alt="Visa_slider-img-2" />

        </SwiperSlide>
        <SwiperSlide className='home_sliders2'>

          <img src="home_slider22.png" alt="Visa_slider-img-22" />
        </SwiperSlide>
        <SwiperSlide className='home_sliders1'>
          <img src="home_slider3.png" alt="Visa_slider-img-3" />
        </SwiperSlide>
        <SwiperSlide className='home_sliders2'>
          <img src="home_slider33.png" alt="Visa_slider-img-33" />
        </SwiperSlide>

      </Swiper >

      <Countries />
      <ServicesCards />
      <AboutUs />
      <WhyUs />
      <Clients_review />

      <Form />

    </div >
  );
}
