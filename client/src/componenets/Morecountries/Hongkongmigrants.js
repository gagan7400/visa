import Navbar from "../Navbar";
import React, { useEffect } from "react";
import Getintouchform from "../Liveproject/Getintouchform";
import { NavLink } from "react-router-dom";
function Hongkongmigrants() {
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
          <p className="IMMI">Requirements for QMAS are as follows:</p>
          <span className="IMMI"> <NavLink className='navlink' to='/'>Home</NavLink>{">"} Quality Migrant Admission Scheme</span>
        </div>

        <div className="Aboutus-description-container">
          <div className="Aboutus-description">
            <div className="ica-left">
              <p className="left-text-top">
                Immigrant aspirers to Hong Kong must make themselves aware of
                the Quality Migrant Admission Scheme which is now governed by
                Chinese government. The scheme was launched and announced in
                2006 and since then there have been numerous applicants and
                successful immigrants to Hong Kong for permanent residency.
              </p>
              <p>
                Hong Kong immigration was never so simpler. Many consider this
                scheme as a hurdle to enter Hong Kong, but as professionals and
                experienced immigrant advisors, we assure you that this is not a
                roadblock. Rather QMAS is an opportunity for talented people to
                permanently settle down in Hong Kong.
              </p>
              <div className="sub-title"><h2>Requirements for QMAS are as follows:</h2></div>
              <p>
                <b>Age:</b> 18-50 years
                <br />
              </p>
              <p>
                <b>Financial requirement:</b> The applicant must not be
                dependent on anybody else must be self sufficient to support
                himself and his family
              </p>
              <p>
                <b>Good moral character</b>
              </p>
              <p>
                Should be proficient in Chinese (Mandarin or Cantonese) or
                English;
                <br />
                Basic educational qualifications
              </p>
              <p>
                <b>Nationality:</b> Nationals of Afghanistan, Cambodia, Cuba,
                Laos, North Korea, Nepal and Vietnam may not apply under QMAS.
              </p>
              <p>
                As an Indian applicant, you have an obvious edge over the
                others. Indians have generally strong educational background and
                are dedicated in their working. The applicants are given points
                based on their achievements in personal and professional lives.
                Recently, their criteria were liberalized. Applicants were given
                points for knowledge of languages besides Chinese and English.
                The age limit was also relaxed. Due to overwhelming response for
                the program, the government has constantly tried to assure that
                guidelines should be followed and there cannot be any issues or
                discrepancies in the selection process. As your agents, we could
                help you to get desired marks for permanent residency and help
                you in achievement of your goals.{" "}
              </p>
            </div>
          </div>
          <Getintouchform />
        </div>
      </div>
    </div>
  );
}

export default Hongkongmigrants;
