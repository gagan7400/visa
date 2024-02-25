import Navbar from "../Navbar";
import React, { useEffect } from "react";
import Getintouchform from "../Liveproject/Getintouchform";
import { NavLink } from "react-router-dom";


function FAQ() {
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
                <img
                    src="./Immigrationimage/usbuilding.jpg"
                    autoPlay
                    muted
                    loop
                    className="aboutusvideo"
                    alt="US-building_img"
                />
                <div className="Aboutus-text">
                    <p className="IMMI">FREQUENTLY ASKED QUESTION - ASK ABOUT VISAS</p>
                    <span className="IMMI"> <NavLink className='navlink' to='/'>Home</NavLink>{">"}  FAQ </span>
                </div>

                <div className="Aboutus-description-container">
                    <div className="Aboutus-description">
                        <div className="ica-left">
                            <div className="sub-title"><h3>What Is a Visa?</h3></div>
                            <p>A visa is a travel document that allows you to enter a foreign country for a specific period of time. In most cases, you have to apply for a visa before travelling, either at an embassy, consulate, or online. Sometimes you can also obtain a visa on arrival. Visas are usually affixed onto your passport and state how long you can stay.
                                Most countries impose visa requirements for foreign nationals as a security measure: to keep track of who enters and to stop illegal immigration. Visas are also used as a defensive effort, stopping security risks from entering a country.</p>
                            <div className="sub-title"><h3>What is spouse, common-law partner or conjugal partner?</h3></div>
                            <p className="left-top-text"><b>Spouse -</b> A spouse is defined as a life partner in a committed relationship who is of the opposite or same sex/gender. This person is married to you and the marriage is legally recognized both in Canada and in the country where it took place. CIC (Citizenship and Immigration Canada) has begun recognizing same-sex marriages in processing immigration applications. It only applies to couples where one spouse is a Canadian citizen/permanent resident and to those who marry in Canada.</p>
                            <p><b>Common-law partner - </b>A common-law partner is defined as a life partner in a committed relationship who has been continuously living together for at least one year. This person can be either opposite or same sex/gender. This is often referred as a domestic partner or civil partner in certain countries.</p>
                            <p><b>Conjugal partner -</b> A conjugal partner is defined as a life partner in a committed relationship for at least one year. No cohabitation is required but a relationship must be interdependent in physical, financial, emotional, and social aspects. This person can be either opposite or same sex/gender. Conjugal partner sponsorship is used to sponsor a foreigner who is unable to either get married or live with a sponsor for at least one year due to a visa requirement. In other words, a foreign partner cannot be from a visitor visa exemption country. Examples of conjugal partners can be same-sex couples who are legally barred from getting married or opposite-sex couples where one of them is legally married and unable to get divorced. Opposite-sex couples who can get married are most likely unable to apply as conjugal partners.</p>
                            <div className="sub-title"><h3>Who is a dependent child?</h3></div>
                            <p><b>Dependent child -</b> A dependent child is a blood-related child or adopted child under 22 years old. The only exceptions are physically or mentally disabled children, or full-time college/university students who are financially dependent on their parents.</p>
                            <div className="sub-title"><h3>What is sponsorship eligibility?</h3></div>
                            <p>In order to sponsor a foreign national, a sponsor (Canadian citizen/permanent resident of Canada) must:-</p>
                            <ul className="points">
                                <li><span className="check-icon">✓</span> be 18+ years old.</li>
                                <li><span className="check-icon">✓</span> be a Canadian citizen living in Canada or abroad.</li>
                                <li><span className="check-icon">✓</span> be a permanent resident (formally called landed immigrant) of Canada living in Canada</li>
                                <li><span className="check-icon">✓</span> sign an undertaking agreement to support a sponsored person (foreign national), and have sufficient income to provide basic requirements for a sponsored person.</li>
                                <li><span className="check-icon">✓</span> not be receiving social assistance for any reason other than disability and/or short-term unemployment benefits.</li>
                                <li><span className="check-icon">✓</span> not be in default of any financial undertaking, immigration loan performance bond, or family support payments.</li>
                                <li><span className="check-icon">✓</span> not be in undischarged bankruptcy.</li>
                                <li><span className="check-icon">✓</span> not have been convicted of a sexual offence or an offence involving family violence (unless you were granted a pardon or five years have passed since the completion of your sentence.)</li>
                                <li><span className="check-icon">✓</span> not be under a removal order.</li>
                                <li><span className="check-icon">✓</span> not be detained in a penitentiary, jail reformatory, or prison.</li>
                                <li><span className="check-icon">✓</span> not have been convicted of a serious criminal offence (punishable by a maximum term of imprisonment of at least 10 years).</li>
                                <li><span className="check-icon">✓</span> not have provided false information to CIC (Citizenship and Immigration Canada).</li>
                                <div className="sub-title"><h3>What is LICO?</h3></div>
                                <p>LICO stands for Low Income Cut-Off. You don't have to meet LICO if you sponsor your spouse/common-law partner/conjugal partner and/or dependent child. However, you do need to meet LICO in order to sponsor your parents, grandparents, grandchildren, orphan brother/sister under 18 years old, orphan niece/nephew under 18 years old, or any blood related relative regardless of the age if you have no relative in Canada.</p>
                                <div className="sub-title"><h3>Size of Family Unit Minimum Necessary Income</h3></div>
                                <ul className="ul-num">
                                    <li>1. person (the sponsor) $22,637</li>
                                    <li>2. persons $28,182</li>
                                    <li>3. persons $36,646</li>
                                    <li>4. persons $42,065</li>
                                    <li>5. persons $47,710</li>
                                    <li>6. persons $53,808</li>
                                    <li>7. persons $59,907</li></ul>
                                <p>For each additional person $6,099</p>
                                <div className="sub-title"><h3>Can I sponsor my sibling (brother/sister)?</h3></div>
                                <p>If your sibling is an orphan under 18 years (unmarried and not in a common-law union relationship), you can sponsor your sibling (if you are eligible). If your sibling is older than 18 years old, your sibling can try to immigrate based on their own merit as a Skilled Worker/(Independent) or other business categories such as Entrepreneur, Investor, or Self-employed. If your sibling applies as a skilled worker/independent or self-employed, they receive five bonus points for having a relative in Canada under Adaptability.</p>
                                <div className="sub-title"><h3>Can I obtain a fiance visa and come to Canada?</h3></div>
                                <p>There is no fiance visa category in the Immigration Refugee Protection Act and Regulations. The only categories available are spouse, common-law partner and conjugal partner.</p>
                                <div className="sub-title"><h3>What kind of relationship documents should I submit? </h3></div>
                                <p>You should submit your marriage certificate, domestic partnership registration, joint house ownership/apartment lease, joint mortgage statement, joint bank account statement, joint credit card statement, joint phone and utility bills, joint recreational memberships, joint health insurance, life insurance, Will, Power of Attorney, pictures, letters from your family and friends stating the relationship, proof of taking trips together such as boarding passes, etc. Please keep in mind that each and every relationship is unique and different, so you may not have everything that is listed above, but you may have other documents that are equally appropriate for documenting your relationship. </p>
                            </ul></div>
                    </div>
                    <Getintouchform />
                </div>
            </div>
        </div>
    );
}

export default FAQ;