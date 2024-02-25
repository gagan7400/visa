import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
const Clients_review = () => {
  return (
    <div
      className="ps-5 pe-5"
      style={{
        backgroundImage: `url("dotted-map-2.png")`,
        paddingBottom: "7rem",
        paddingTop: "4rem",
      }}
    >
      <div className="container">
        <div className="sec-title text-center pb-5">
          <span className="sub-title" style={{ color: " #1e56ff" }}>
            <b>CLIENTS REVIEW</b>
          </span>
          <h1 style={{ fontWeight: "700" }}>
            Our Lovely Clients Get Helped From Our <br />
            for the{" "}
            <span className="color3" style={{ color: "#fa8714" }}>
              Company
            </span>
          </h1>
          <div style={{ textAlign: "center" }}>
            <h1 className="custom-hr" />
          </div>
        </div>
        <div>
          <Swiper
            spaceBetween={30}
            autoplay={{
              delay: 5500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper review-pairent"
          >
            <SwiperSlide className="review-section rounded-4 p-4 position-relative">
              <div className="review-child">
                <div className="d-flex justify-content-center">
                  <p className="size-text1">
                    "Extending heartfelt thanks to Aplusadventure, particularly
                    Hansa and Monika, for their exceptional support in securing
                    my UK visa. Despite challenges, their expertise and
                    professionalism ensured a successful outcome. Highly
                    recommend their services for a seamless visa application
                    process."
                  </p>
                  <p className="size-text2">
                    "Grateful for Aplusadventure's exceptional UK visa guidance;
                    their thorough assistance with documents made the process
                    easier. Appreciate their exemplary services. Thank you!"
                  </p>
                </div>
                <div
                  className=" mt-3 ps-4 pe-4 pt-2 pb-2 rounded-5 fs-5"
                  style={{ fontWeight: "600" }}
                >
                  <div
                    className="position-absolute d-flex gap-4"
                    style={{ top: "10%", left: "16%" }}
                  >
                    <img
                      className=""
                      style={{ width: "50px ", height: "50px", borderRadius: "50%" }}
                      src="review_img1.jpg"
                      alt="person-review_img1"
                    />
                    <div className="fs-6">
                      Vivek Patel
                      <div className="text-secondary">( CANADA VISA )</div>
                    </div>
                  </div>
                  <div
                    className="text-warning position-absolute Starclass"

                  >
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="review-section rounded-4 p-4 position-relative">
              <div className="review-child">
                <div className="country-img d-flex justify-content-center">
                  <p className="size-text2">
                    "Planning a trip to the USA and Canada in June-July, I
                    sought visa assistance from Aplusadventure. Their sincere
                    guidance and help made the visa process smoother. Grateful
                    for their support!"
                  </p>
                  <p className="size-text1">
                    Hello, I approached Aplusadventure for getting my visa for
                    UK. "Appreciative of Aplusadventure's excellent support in
                    obtaining USA and Canada visas. Their sincere guidance made
                    the process seamless, facilitating a stress-free trip
                    planning experience for my visit in June-July. Thank you for
                    your invaluable assistance and continued dedication."
                  </p>
                </div>
                <div
                  className=" mt-3 ps-4 pe-4 pt-2 pb-2 rounded-5 fs-5"
                  style={{ fontWeight: "600" }}
                >
                  <div
                    className="position-absolute d-flex gap-4"
                    style={{ top: "10%", left: "16%" }}
                  >
                    <img
                      style={{ width: "50px ", height: "50px", borderRadius: "50%" }}
                      src="review_img2.jpg"
                      alt="person-review_img2"
                    />
                    <div className="fs-6">
                      Sarah Albert
                      <div className="text-secondary">( UK VISA )</div>
                    </div>
                  </div>
                  <div
                    className="text-warning position-absolute Starclass"

                  >
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="review-section rounded-4 p-4 position-relative">
              <div className="review-child">
                <div className="country-img d-flex justify-content-center">
                  <p className="size-text2">
                    "Seeking assistance from Aplusadventure for my Australia visa was a wise decision, as their support was exceptional. Their expertise made the process stress-free, much like their assistance with visas for New Zealand and Japan. Thanks to Aplusadventure, I eagerly anticipate my September visit. Grateful
                    for a seamless experience!"
                  </p>
                  <p className="size-text1">
                    "Hello, I recently reached out to Aplusadventure for help with my Australia visa, and I'm incredibly grateful for their exceptional support. Their invaluable guidance for visas to New Zealand and Japan made the process seamless and stress-free. With their professionalism, I eagerly anticipate my September visit Down Under. Thank you, Aplusadventure, for your outstanding service."
                  </p>
                </div>
                <div
                  className=" mt-3 ps-4 pe-4 pt-2 pb-2 rounded-5 fs-5"
                  style={{ fontWeight: "600" }}
                >
                  <div
                    className="position-absolute d-flex gap-4"
                    style={{ top: "10%", left: "16%" }}
                  >
                    <img
                      style={{ width: "50px ", height: "50px", borderRadius: "50%" }}
                      src="review_img3.jpg"
                      alt="person-review_img3"
                    />
                    <div className="fs-6">
                      Manpreet kaur
                      <div className="text-secondary">( USA VISA )</div>
                    </div>
                  </div>
                  <div
                    className="text-warning position-absolute Starclass"

                  >
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="review-section rounded-4 p-4 position-relative">
              <div className="review-child">
                <div className="d-flex justify-content-center">
                  <p className="size-text1">
                    "Extending heartfelt thanks to Aplusadventure, particularly
                    Hansa and Monika, for their exceptional support in securing
                    my UK visa. Despite challenges, their expertise and
                    professionalism ensured a successful outcome. Highly
                    recommend their services for a seamless visa application
                    process."
                  </p>
                  <p className="size-text2">
                    "Grateful for Aplusadventure's exceptional UK visa guidance;
                    their thorough assistance with documents made the process
                    easier. Appreciate their exemplary services. Thank you!"
                  </p>
                </div>
                <div
                  className=" mt-3 ps-4 pe-4 pt-2 pb-2 rounded-5 fs-5"
                  style={{ fontWeight: "600" }}
                >
                  <div
                    className="position-absolute d-flex gap-4"
                    style={{ top: "10%", left: "16%" }}
                  >
                    <img
                      className=""
                      style={{ width: "50px ", height: "50px", borderRadius: "50%" }}
                      src="review_img1.jpg"
                      alt="person-review_img1"
                    />
                    <div className="fs-6">
                      Vivek Patel
                      <div className="text-secondary">( CANADA VISA )</div>
                    </div>
                  </div>
                  <div
                    className="text-warning position-absolute Starclass"

                  >
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="review-section rounded-4 p-4 position-relative">
              <div className="review-child">
                <div className="country-img d-flex justify-content-center">
                  <p className="size-text2">
                    "Planning a trip to the USA and Canada in June-July, I
                    sought visa assistance from Aplusadventure. Their sincere
                    guidance and help made the visa process smoother. Grateful
                    for their support!"
                  </p>
                  <p className="size-text1">
                    Hello, I approached Aplusadventure for getting my visa for
                    UK. "Appreciative of Aplusadventure's excellent support in
                    obtaining USA and Canada visas. Their sincere guidance made
                    the process seamless, facilitating a stress-free trip
                    planning experience for my visit in June-July. Thank you for
                    your invaluable assistance and continued dedication."
                  </p>
                </div>
                <div
                  className=" mt-3 ps-4 pe-4 pt-2 pb-2 rounded-5 fs-5"
                  style={{ fontWeight: "600" }}
                >
                  <div
                    className="position-absolute d-flex gap-4"
                    style={{ top: "10%", left: "16%" }}
                  >
                    <img
                      style={{ width: "50px ", height: "50px", borderRadius: "50%" }}
                      src="review_img2.jpg"
                      alt="person-review_img2"
                    />
                    <div className="fs-6">
                      Sarah Albert
                      <div className="text-secondary">( UK VISA )</div>
                    </div>
                  </div>
                  <div
                    className="text-warning position-absolute Starclass"

                  >
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="review-section rounded-4 p-4 position-relative">
              <div className="review-child">
                <div className="country-img d-flex justify-content-center">
                  <p className="size-text2">
                    "Seeking assistance from Aplusadventure for my Australia visa was a wise decision, as their support was exceptional. Their expertise made the process stress-free, much like their assistance with visas for New Zealand and Japan. Thanks to Aplusadventure, I eagerly anticipate my September visit. Grateful
                    for a seamless experience!"
                  </p>
                  <p className="size-text1">
                    "Hello, I recently reached out to Aplusadventure for help with my Australia visa, and I'm incredibly grateful for their exceptional support. Their invaluable guidance for visas to New Zealand and Japan made the process seamless and stress-free. With their professionalism, I eagerly anticipate my September visit Down Under. Thank you, Aplusadventure, for your outstanding service."
                  </p>
                </div>
                <div
                  className=" mt-3 ps-4 pe-4 pt-2 pb-2 rounded-5 fs-5"
                  style={{ fontWeight: "600" }}
                >
                  <div
                    className="position-absolute d-flex gap-4"
                    style={{ top: "10%", left: "16%" }}
                  >
                    <img
                      style={{ width: "50px ", height: "50px", borderRadius: "50%" }}
                      src="review_img3.jpg"
                      alt="person-review_img3"
                    />
                    <div className="fs-6">
                      Manpreet kaur
                      <div className="text-secondary">( USA VISA )</div>
                    </div>
                  </div>
                  <div
                    className="text-warning position-absolute Starclass"

                  >
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Clients_review;
