import Navbar from "../Navbar";
import React, { useEffect } from "react";
import Getintouchform from "../Liveproject/Getintouchform";
import { NavLink } from "react-router-dom";

function Hongkong() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <Navbar />
      <div className="About-container">
        <div className="video-overlay"></div>
        <img src="./Immigrationimage/usbuilding.jpg" className="aboutusvideo" alt="US-building_img" />
        <div className="Aboutus-text">
          <p className="IMMI">
            GET ALL HONG KONG VISA FOR INDIANS HERE - IMMIGRATION HONG KONG

          </p>
          <span className="IMMI">
            {" "}<NavLink className='navlink' to='/'>Home</NavLink>{">"}  IMMIGRATION TO HONG KONG

          </span>
        </div>

        <div className="Aboutus-description-container">
          <div className="Aboutus-description">
            <div className="ica-left">
              <p className="left-top-text">
                Hong Kong is the ultimate immigration destination for Indians
                indulged in financial sector, capital market or any other
                businesses. Hong Kong is rightly termed as the centre of finance
                of South Asia and is governed by China. Apart from having scenic
                natural and artificial beauty, which mesmerizes the travellers
                from across the globe, Hong Kong also has too much to offer for
                every section of society. In the past few years, Hong Kong has
                become extremely popular destination among Indians who go there
                for permanent residency and for long term projects. The area
                offers high income to finance professionals and other sections
                too.
              </p>
              <p>
                Indians also prefer Hong Kong due to its nearness to the nation.
                Hong Kong immigration is also way simpler than any other
                European or western world nation due to closeness of the two
                nations. Putting politics away, India and China have always been
                strategic partners and their corporate worlds are interdependent
                on each other. Chinese government has been extremely fair in
                granting visas and permanent residencies to Indians in Hong
                Kong.
              </p>
              <p>
                High skilled applicants and wealthy investors hardly find any
                difficulties in going through statutory compliances of the Hong
                Kong immigration process. Besides that, thanks to the
                immigration agents like us, even for a middle class aspirant,
                the dream to reach Hong Kong is never far from reality.
              </p>
              <p>
                As your agents, we can assist you in several manners. First of
                all, General Points Test (GPT) is taken by their government,
                which is not different from the tests taken by Australian and
                British governments. We prepare our clients for such tests.
                These days, to restrict the number of illegal immigrants in the
                nation, the government has restricted the number of visas to
                1000 per year. In such case, importance of having experienced
                professionals who have enormous experience in this field is
                really crucial.{" "}
              </p>
            </div>
          </div>
          <Getintouchform />
        </div>
      </div>
    </div>
  );
}

export default Hongkong;
