import React, { useEffect } from "react";
import Getintouchform from "../Liveproject/Getintouchform";
// import Getintouchform from "../Getintouchform";
import { NavLink } from "react-router-dom";
import Navbar from "../Navbar";
function Turkey_de_visa() {
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
            <div className="About-container">
                <div className="video-overlay"></div>
                <img
                    src="./Immigrationimage/usbuilding.jpg"
                    alt="US-building_img"
                    className="aboutusvideo"
                />
                <div className="Aboutus-text">
                    <p>SOUTH AFRICA DEPENDENT VISA</p>
                    <span> <NavLink className='navlink' to='/'>Home</NavLink>{">"} South Africa Dependent Visa </span>
                </div>

                <div className="Aboutus-description-container">
                    <div className="Aboutus-description">
                        <div className="ica-left">
                            <h1>South Africa dependent visa</h1>
                            <p className="left-top-text">The Republic of South Africa offers awe-inspiring activities, gorgeous scenery, beautiful beaches, and a 24-hour urban lifestyle, and has long been regarded as the ideal retirement location for working professionals. The Relative's Visa guarantees that the family will not miss out on either opportunity. </p>
                            <div className="sub-title fs-4">What are the Various Types of Dependent Visas for South Africa</div>
                            <p>Your relative in South Africa may be:</p>
                            <ul className="ul-ab">
                                <li><span className="check-icon">✓</span>A native </li>
                                <li><span className="check-icon">✓</span>A legal citizen</li>
                                <li><span className="check-icon">✓</span>Holder of a work or study permit</li></ul>
                            <ul className="points">
                                <li><span className="check-icon">✓</span>The Relative's Visa is considered to come under the category of "Permanent Residence Permit" (PRP), which is reserved for family members who already have citizenship or permanent residence in South Africa.</li>
                                <li><span className="check-icon">✓</span>The Temporary Residence Visa category includes the Relative's Visa, which is granted to members of the family who already have a work or study visa in South Africa (TRV).</li></ul>
                            <h2>South Africa family reunion visa</h2>
                            <p>This family reunion visa is offered to the citizen's spouse, child, or parent in the event that they wish to visit South Africa. A foreign person who has established permanent residence in Argentina may apply for a family reunification visa for their foreign spouse, parent, or child who is under the age of 18 (or older if the kid has a disability) and who is also a foreign national.</p>
                            <h3>Who is Entitled for a dependent visa for South Africa from India?</h3>
                            <p>Dependents of South African citizens, permanent residents, work permits, and student permits may enter the country on a Relative visa.</p>
                            <div className="sub-title fs-4">What Documents Must Be submitted for a Dependent Visa to South Africa?</div>
                            <p>The following are the South Africa spouse visa requirement:</p>
                            <ul className="points">
                                <li><span className="check-icon">✓</span>Two Recent passport sizes Photographs with a mat finish and a valid passport of a female relative</li>
                                <li><span className="check-icon">✓</span>Documents proving a relationship:</li></ul>
                            <ul className="ul-num">
                                <li><span className="check-icon">✓</span>Dependent spouse's marriage certificate</li>
                                <li><span className="check-icon">✓</span>Dependent children's birth certificates</li>
                                <li><span className="check-icon">✓</span>Child custody paperwork, if appropriate</li>
                                <li><span className="check-icon">✓</span>If relevant, the child's adoption documents.</li>
                                <li><span className="check-icon">✓</span>Photocopies of family members' employment or student visas</li>
                                <li><span className="check-icon">✓</span>Receipt of payment for your Relative's Visa application.</li></ul>
                            <div className="sub-title fs-4">South Africa's Dependent Visa Permit Application Process</div>
                            <p>Step 1: Make sure you have all the necessary documents, including two current passport-sized photos, a current passport, a statement of intent (if applicable), and a govt ID card.</p>
                            <p>Step 2: Collect Passport size matt finish photos as per South African Visa Guidelines.</p>
                            <p>Step 3: Fill out the application forms: </p>
                            <p>Step 4: Plan a meeting with the embassy or consulate with the below details:</p>
                            <ul className="ul-num">
                                <li><span className="check-icon">✓</span>You must bring all required documentation to your local embassy or consulate.</li>
                                <li><span className="check-icon">✓</span>You must provide your visa type.</li></ul>
                            <p>Step 5: Await the outcome. After applying, immigration services, the embassy, or consulate will notify you. If granted, South Africa's immigration agency will provide the relative's visa. </p>
                            <div className="sub-title fs-4">What is the purpose of having a South Africa dependent visa?</div>
                            <p>The "South Africa Relative's Visa" is another name for the South African Dependent Visa. It permits you to visit and remain with a family member who is living, working, or attending school in South Africa. Continue reading to learn more.</p>
                            <h4>South Africa dependent visa processing time</h4>
                            <p>A Relative's Visa for South Africa might be approved or denied in 7 to 90 days. </p>
                            <div className="sub-title fs-4">What kind of assistance can you expect from Aplusadventure?</div>
                            <p>Aplusadventure is India's top South Africa visa agents in Delhi. We served various clients and has various cases. Therefore, if you are interested in moving to South Africa, you should get in touch with Aplusadventure to receive expert assistance in submitting an application. </p>
                        </div>
                    </div>

                    <Getintouchform />

                </div>
            </div>
        </div>
    );
}

export default Turkey_de_visa;