import React from 'react'
import './App.css'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

import Home from './componenets/Home'
import Footer from './componenets/Footer'
import HeaderNav from './componenets/HeaderNav'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Country_details from './componenets/Country_details.jsx'
import Uk_de_visa from './componenets/Dependent/Uk_de_visa.jsx'
import Usa_de_visa from './componenets/Dependent/Usa_de_visa.jsx'
import Canada_de_visa from './componenets/Dependent/Canada_de_visa.jsx'
import Germ_de_visa from './componenets/Dependent/Germ_de_visa.jsx'
import Aus_de_visa from './componenets/Dependent/Aus_de_visa.jsx'
import Southafrica_de_visa from './componenets/Dependent/Southafrica_de_visa.jsx'
import Turkey_de_visa from './componenets/Dependent/Turkey_de_visa.jsx'
import Mexico_de_visa from './componenets/Dependent/Mexico_de_visa.jsx'
import Phill_de_visa from './componenets/Dependent/Phill_de_visa.jsx'
import Ireland_de_visa from './componenets/Dependent/Ireland_de_visa.jsx'
import About from './componenets/Liveproject/About.js'

import Australiatouristvisa from './componenets/Tourist/Australiatouristvisa.js'
import Canadatouristvisa from './componenets/Tourist/Canadatouristvisa.js'
import Francetouristvias from './componenets/Tourist/Francetouristvisa.js'
import Italytouristvisa from './componenets/Tourist/Italytouristvisa.js'
import MoreCountirestourist from './componenets/Tourist/MoreCountirestourist.js'
import Spaintouristvisa from './componenets/Tourist/Spaintoursitvisa.js'
import UKtouristvisa from './componenets/Tourist/UKtourisvisa.js'
import UStouristvisa from './componenets/Tourist/UStouristvisa.js'
import Bussinesvisa from './componenets/Bussinesvisa/Bussinesvisa.js'
import Southkorea from './componenets/Tousristmorecountries/Southkorea.js'
import Japan from './componenets/Tousristmorecountries/Japan.js'
import LAos from './componenets/Tousristmorecountries/LAos.js'
import Mexico from './componenets/Tousristmorecountries/Mexico.js'
import Newzeland from './componenets/Tousristmorecountries/Newzeland.js'
import Russia from './componenets/Tousristmorecountries/Russia.js'
import Southafrica from './componenets/Tousristmorecountries/Southafrica.js'
import US from './componenets/Tousristmorecountries/US.js'
import Egypt from './componenets/Tousristmorecountries/Egypt.js'
import Contactus from './componenets/Contactus/Contactus.js';
import Testimonial from './componenets/Liveproject/Testimonial.js'
import CancellationPolicy from './componenets/Footers Components/CancellationPolicy.jsx';
import Faq from './componenets/Footers Components/Faq.jsx';
import Privacypolicy from './componenets/Footers Components/PrivacyPolicy.jsx';
import RefundPolicy from './componenets/Footers Components/RefundPolicy.jsx';
import TermsAndConditions from './componenets/Footers Components/TermsAndConditions.jsx';

import ChileDependent from './componenets/Dependent/More Country/ChileDependent.jsx'
import CzecDependent from './componenets/Dependent/More Country/Czec-Republic.jsx'
import Denmark from './componenets/Dependent/More Country/Denmark.jsx'
import Greece from './componenets/Dependent/More Country/Greece.jsx'
import Germany from './componenets/Dependent/More Country/Germany.jsx'
import Italy from './componenets/Dependent/More Country/Italy.jsx'
import More_countries from './componenets/Dependent/More Country/More_countries.jsx'

import England from './componenets/Country-details/England.jsx'
import Germany_details from './componenets/Country-details/Germany_details.jsx'
import India from './componenets/Country-details/India.jsx'
import Braxil_details from './componenets/Country-details/Braxil_details.jsx'
import Aus_details from './componenets/Country-details/Aus_details.jsx'
import Russia_details from './componenets/Country-details/Russia_details.jsx'
import Usa_details from './componenets/Country-details/Usa_details.jsx'
import Uae_details from './componenets/Country-details/Uae_details.jsx'
import Italy_details from './componenets/Country-details/Italy_details.jsx'
import Singapore_details from './componenets/Country-details/Singapore_details.jsx'
import Malesia_details from './componenets/Country-details/Malesia_details.jsx'
import Thailand_details from './componenets/Country-details/Thailand_details.jsx'
import France_details from './componenets/Country-details/France_details.jsx'
import Canada_details from './componenets/Country-details/Canada_details.jsx'
import China_details from './componenets/Country-details/China_details.jsx'
import LoginAdmin from './componenets/Admin/LoginAdmin.js'
import Admindashboard from './componenets/Admin/Admindashboard.jsx'
import Cookies from 'js-cookie';
import ProtectedRoute from './componenets/Admin/Protectedroute.jsx'


const App = () => {
  const storedcokkies = Cookies.get('token');
 
  return (
    <BrowserRouter>

      <HeaderNav />

      <Routes>

        <Route path='*' element={<Home />} />
        <Route path='/adminlogin' element={<LoginAdmin />} />
        <Route path='/admindashboard' element={<ProtectedRoute component={Admindashboard} />} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />

        <Route path='/country_details' element={<Country_details />} />

        {/*###################  tourist   ################## */}
        <Route path='/australia' element={<Australiatouristvisa />} />
        <Route path='/canada' element={<Canadatouristvisa />} />
        <Route path='/france' element={<Francetouristvias />} />
        <Route path='/italy' element={<Italytouristvisa />} />
        <Route path='/spain' element={<Spaintouristvisa />} />
        <Route path='/uk' element={<UKtouristvisa />} />
        <Route path='/us' element={<UStouristvisa />} />
        <Route path='/morecountry' element={<MoreCountirestourist />} />

        {/*###################  Dependent   ################## */}
        <Route path='/usa_de_visa' element={<Usa_de_visa />} />
        <Route path='/aus_de_visa' element={<Aus_de_visa />} />
        <Route path='/uk_de_visa' element={<Uk_de_visa />} />
        <Route path='/canada_de_visa' element={<Canada_de_visa />} />
        <Route path='/germ_de_visa' element={<Germ_de_visa />} />
        <Route path='/southafrica_de_visa' element={<Southafrica_de_visa />} />
        <Route path='/turkey_de_visa' element={<Turkey_de_visa />} />
        <Route path='/ireland_de_visa' element={<Ireland_de_visa />} />
        <Route path='/phill_de_visa' element={<Phill_de_visa />} />
        <Route path='/mexico_de_visa' element={<Mexico_de_visa />} />
        <Route path='/more_countries' element={<More_countries />} />

        {/*###################  more country Dependent   ################## */}
        <Route path='/chil_' element={<ChileDependent />} />
        <Route path='/cze' element={<CzecDependent />} />
        <Route path='/denmark' element={<Denmark />} />
        <Route path='/gree' element={<Greece />} />
        <Route path='/germany' element={<Germany />} />
        <Route path='/italy' element={<Italy />} />

        {/*###################   country - Details  ################## */}
        <Route path='/england_details' element={<England />} />
        <Route path='/germany_details' element={<Germany_details />} />
        <Route path='/india_details' element={<India />} />
        <Route path='/braxil_details' element={<Braxil_details />} />
        <Route path='/aus_details' element={<Aus_details />} />
        <Route path='/russia_details' element={<Russia_details />} />
        <Route path='/usa_details' element={<Usa_details />} />
        <Route path='/uae_details' element={<Uae_details />} />
        <Route path='/italy_details' element={<Italy_details />} />
        <Route path='/singapore_details' element={<Singapore_details />} />
        <Route path='/malesia_details' element={<Malesia_details />} />
        <Route path='/canada_details' element={<Canada_details />} />
        <Route path='/thailand_details' element={<Thailand_details />} />
        <Route path='/france_details' element={<France_details />} />
        <Route path='/china_details' element={<China_details />} />

        {/* -------------------------------- */}
        <Route path='/bussines' element={<Bussinesvisa />} />

        {/* --------------- Toursitmorecountry------------------------ */}
        <Route path='/southkorea' element={<Southkorea />} />
        <Route path='/japan' element={<Japan />} />
        <Route path='/laos' element={<LAos />} />
        <Route path='/mexico' element={<Mexico />} />
        <Route path='/nzland' element={<Newzeland />} />
        <Route path='/russia' element={<Russia />} />
        <Route path='/sa' element={<Southafrica />} />
        <Route path='/usa' element={<US />} />
        <Route path='/egypt' element={<Egypt />} />

        {/* ======================Footerusefullink ===================================== */}

        <Route path='/about' element={<About />} />
        <Route path="/contactus" element={<Contactus />} />
        {/* =========================== Footer  ==================================================== */}
        <Route path='/testimonial' element={<Testimonial />} />
        <Route path='/faq' element={<Faq />} />
        <Route path="/refundpolicy" element={<RefundPolicy />} />
        <Route path="privacypolicy" element={<Privacypolicy />} />
        <Route path="termandconditions" element={<TermsAndConditions />} />
        <Route path="cancellationpolicy" element={<CancellationPolicy />} />



      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App