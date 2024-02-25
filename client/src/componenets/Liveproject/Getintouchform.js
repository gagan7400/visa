import React, { useState } from 'react'

function Getintouchform() {
  const [show, setShow] = useState(false)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [countrycode, setCountrycode] = useState("+91");
  const [country, setCountry] = useState("");
  const [visacountry, setVisaCountry] = useState("");
  const [number, setNumber] = useState("");
  const [whatsupcountrycode, setWhatsupcountrycode] = useState("");
  const [whatsupnumber, setWhatsupnumber] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState({ error: false, msg: "" });

  let submithandler = async (e) => {
    e.preventDefault()
    let btn = document.getElementById("model");
    try {
      await fetch("http://localhost:4567/api/contact", {
        method: "POST",
        body: JSON.stringify({ name,date:new Date().toLocaleString(), email, country, countrycode, visacountry, whatsupcountrycode, whatsupnumber, message, number }),
        headers: {
          "Content-Type": "application/json"
        }
      }).then((e) => e.json()).then((r) => {
        setError({ error: false, msg: "Thank you for contacting us " });
        btn.click()
      })
    } catch (error) {
      setError({ error: true, msg: "Please Provide Valid Details" });
      btn.click()

    }
  }
  const showw = (e) => {
    e.preventDefault()
    setShow(!show);
  };
  return (
    <>
      {console.log(error)}
      <button type="button" id="model" style={{ display: "none" }} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">{error.error ? "Invalid Details" : "Details Submiting Successfully"}</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {error.msg}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

            </div>
          </div>
        </div>
      </div>
      <form className='' onSubmit={submithandler}>
        <div className="get-in-touch form-group">
          <p>GET IN TOUCH</p>

          <div>
            <div className="input">
              <div>
                <input className='form-control' value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Your Name" />
                <hr />
              </div>
              <div>
                <input className='form-control' placeholder="Email Address" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <hr />
              </div>
            </div>
            <br />
            <div className="input">
              <div>
                {/* country code  */}
                <select className="select-box form-control" value={countrycode} onChange={(e) => { setCountrycode(e.target.value) }} >
                  <option defaultValue="selected" value="India">
                    IND (+91)
                  </option>
                  <option value="Andorra">AND (+376)</option>
                  <option value="Afghanistan">AFG (+93)</option>
                  <option value="Antigua and Barbuda">ATG (+1)</option>
                  <option value='?"Anguilla"'>AIA (+1)</option>
                  <option value="Albania">ALB (+355)</option>
                  <option value="Armenia">ARM (+374)</option>
                  <option value="Netherlands Antilles">ANT (+599)</option>
                  <option value="Angola">AGO (+244)</option>
                  <option value="Antarctica">ATA (+672)</option>
                  <option value="Argentina">ARG (+54)</option>
                  <option value="American Samoa">ASM (+1)</option>
                  <option value="Austria">AUT (+43)</option>
                  <option value="Australia">AUS (+61)</option>
                  <option value="Aruba">ABW (+297)</option>
                  <option value="Åland Islands">ALA (+358)</option>
                  <option value="Azerbaijan">AZE (+994)</option>
                  <option value="Bosnia and Herzegovina">BIH (+387)</option>
                  <option value="Barbados">BRB (+1)</option>
                  <option value="Bangladesh">BGD (+880)</option>
                  <option value="Belgium">BEL (+32)</option>
                  <option value="Burkina Faso">BFA (+226)</option>
                  <option value="Bulgaria">BGR (+359)</option>
                  <option value="Bahrain">BHR (+973)</option>
                  <option value="Burundi">BDI (+257)</option>
                  <option value="Benin">BEN (+229)</option>
                  <option value="Saint Barthélemy">BLM (+590)</option>
                  <option value="Bermuda">BMU (+1)</option>
                  <option value="Brunei Darussalam">BRN (+673)</option>
                  <option value="Bolivia">BOL (+591)</option>
                  <option value="Bonaire, Sint Eustatius and Saba">
                    BES (+599)
                  </option>
                  <option value="Brazil">BRA (+55)</option>
                  <option value="Bahamas">BHS (+1)</option>
                  <option value="Bhutan">BTN (+975)</option>
                  <option value="Bouvet Island">BVT (+)</option>
                  <option value="Botswana">BWA (+267)</option>
                  <option value="Belarus">BLR (+375)</option>
                  <option value="Belize">BLZ (+501)</option>
                  <option value="Canada">CAN (+1)</option>
                  <option value="Cocos (Keeling) Islands">CCK (+61)</option>
                  <option value="Congo, The Democratic Republic Of The">
                    COD (+243)
                  </option>
                  <option value="Central African Republic">CAF (+236)</option>
                  <option value="Congo">COG (+242)</option>
                  <option value="Switzerland">CHE (+41)</option>
                  <option value="Côte D Ivoire">CIV (+225)</option>
                  <option value="Cook Islands">COK (+682)</option>
                  <option value="Chile">CHL (+56)</option>
                  <option value="Cameroon">CMR (+237)</option>
                  <option value="China">CHN (+86)</option>
                  <option value="Colombia">COL (+57)</option>
                  <option value="Costa Rica">CRI (+506)</option>
                  <option value="Cuba">CUB (+53)</option>
                  <option value="Cape Verde">CPV (+238)</option>
                  <option value="Curaçao">CUW (+599)</option>
                  <option value="Christmas Island">CXR (+61)</option>
                  <option value="Cyprus">CYP (+357)</option>
                  <option value="Czech Republic">CZE (+420)</option>
                  <option value="Germany">DEU (+49)</option>
                  <option value="Djibouti">DJI (+253)</option>
                  <option value="Denmark">DNK (+45)</option>
                  <option value="Dominica">DMA (+1)</option>
                  <option value="Dominican Republic">DOM (+1)</option>
                  <option value="Algeria">DZA (+213)</option>
                  <option value="Ecuador">ECU (+593)</option>
                  <option value="Estonia">EST (+372)</option>
                  <option value="Egypt">EGY (+20)</option>
                  <option value="Western Sahara">ESH (+212)</option>
                  <option value="Eritrea">ERI (+291)</option>
                  <option value="Spain">ESP (+34)</option>
                  <option value="Ethiopia">ETH (+251)</option>
                  <option value="Finland">FIN (+358)</option>
                  <option value="Fiji">FJI (+679)</option>
                  <option value="Falkland Islands (Malvinas)">
                    FLK (+500)
                  </option>
                  <option value="Micronesia, Federated States Of">
                    FSM (+691)
                  </option>
                  <option value="Faroe Islands">FRO (+298)</option>
                  <option value="France">FRA (+33)</option>
                  <option value="Gabon">GAB (+241)</option>
                  <option value="United Kingdom">GBR (+44)</option>
                  <option value="Grenada">GRD (+1)</option>
                  <option value="Georgia">GEO (+995)</option>
                  <option value="French Guiana">GUF (+594)</option>
                  <option value="Guernsey">GGY (+44)</option>
                  <option value="Ghana">GHA (+233)</option>
                  <option value="Gibraltar">GIB (+350)</option>
                  <option value="Greenland">GRL (+299)</option>
                  <option value="Gambia">GMB (+220)</option>
                  <option value="Guinea">GIN (+224)</option>
                  <option value="Guadeloupe">GLP (+590)</option>
                  <option value="Equatorial Guinea">GNQ (+240)</option>
                  <option value="Greece">GRC (+30)</option>
                  <option value="South Georgia and the South Sandwich Islands">
                    SGS (+500)
                  </option>
                  <option value="Guatemala">GTM (+502)</option>
                  <option value="Guam">GUM (+1)</option>
                  <option value="Guinea-Bissau">GNB (+245)</option>
                  <option value="Guyana">GUY (+592)</option>
                  <option value="Hong Kong">HKG (+852)</option>
                  <option value="Heard and McDonald Islands">HMD (+)</option>
                  <option value="Honduras">HND (+504)</option>
                  <option value="Croatia">HRV (+385)</option>
                  <option value="Haiti">HTI (+509)</option>
                  <option value="Hungary">HUN (+36)</option>
                  <option value="Indonesia">IDN (+62)</option>
                  <option value="Ireland">IRL (+353)</option>
                  <option value="Israel">ISR (+972)</option>
                  <option value="Isle of Man">IMN (+44)</option>
                  <option defaultValue="selected" value="India">
                    IND (+91)
                  </option>
                  <option value="British Indian Ocean Territory">
                    IOT (+246)
                  </option>
                  <option value="Iraq">IRQ (+964)</option>
                  <option value="Iran, Islamic Republic Of">IRN (+98)</option>
                  <option value="Iceland">ISL (+354)</option>
                  <option value="Italy">ITA (+39)</option>
                  <option value="Jersey">JEY (+44)</option>
                  <option value="Jamaica">JAM (+1)</option>
                  <option value="Jordan">JOR (+962)</option>
                  <option value="Japan">JPN (+81)</option>
                  <option value="Kenya">KEN (+254)</option>
                  <option value="Kyrgyzstan">KGZ (+996)</option>
                  <option value="Cambodia">KHM (+855)</option>
                  <option value="Kiribati">KIR (+686)</option>
                  <option value="Comoros">COM (+269)</option>
                  <option value="Saint Kitts And Nevis">KNA (+1)</option>
                  <option value="Korea, Democratic Peoples Republic Of">
                    PRK (+850)
                  </option>
                  <option value="Korea, Republic of">KOR (+82)</option>
                  <option value="Kuwait">KWT (+965)</option>
                  <option value="Cayman Islands">CYM (+1)</option>
                  <option value="Kazakhstan">KAZ (+7)</option>
                  <option value="Lao Peoples Democratic Republic">
                    LAO (+856)
                  </option>
                  <option value="Lebanon">LBN (+961)</option>
                  <option value="Saint Lucia">LCA (+1)</option>
                  <option value="Liechtenstein">LIE (+423)</option>
                  <option value="Sri Lanka">LKA (+94)</option>
                  <option value="Liberia">LBR (+231)</option>
                  <option value="Lesotho">LSO (+266)</option>
                  <option value="Lithuania">LTU (+370)</option>
                  <option value="Luxembourg">LUX (+352)</option>
                  <option value="Latvia">LVA (+371)</option>
                  <option value="Libya">LBY (+218)</option>
                  <option value="Morocco">MAR (+212)</option>
                  <option value="Monaco">MCO (+377)</option>
                  <option value="Moldova, Republic of">MDA (+373)</option>
                  <option value="Montenegro">MNE (+382)</option>
                  <option value="Saint Martin">MAF (+590)</option>
                  <option value="Madagascar">MDG (+261)</option>
                  <option value="Marshall Islands">MHL (+692)</option>
                  <option value="Macedonia, the Former Yugoslav Republic Of">
                    MKD (+389)
                  </option>
                  <option value="Mali">MLI (+223)</option>
                  <option value="Myanmar">MMR (+95)</option>
                  <option value="Mongolia">MNG (+976)</option>
                  <option value="Macao">MAC (+853)</option>
                  <option value="Northern Mariana Islands">MNP (+1)</option>
                  <option value="Martinique">MTQ (+596)</option>
                  <option value="Mauritania">MRT (+222)</option>
                  <option value="Montserrat">MSR (+1)</option>
                  <option value="Niue">NIU (+683)</option>
                  <option value="Malta">MLT (+356)</option>
                  <option value="Mauritius">MUS (+230)</option>
                  <option value="Maldives">MDV (+960)</option>
                  <option value="Malawi">MWI (+265)</option>
                  <option value="Mexico">MEX (+52)</option>
                  <option value="Malaysia">MYS (+60)</option>
                  <option value="Mozambique">MOZ (+258)</option>
                  <option value="Namibia">NAM (+264)</option>
                  <option value="New Caledonia">NCL (+687)</option>
                  <option value="Niger">NER (+227)</option>
                  <option value="Norfolk Island">NFK (+672)</option>
                  <option value="Nigeria">NGA (+234)</option>
                  <option value="Nicaragua">NIC (+505)</option>
                  <option value="Netherlands">NLD (+31)</option>
                  <option value="Norway">NOR (+47)</option>
                  <option value="Nepal">NPL (+977)</option>
                  <option value="Nauru">NRU (+674)</option>

                  <option value="New Zealand">NZL (+64)</option>
                  <option value="Oman">OMN (+968)</option>
                  <option value="Panama">PAN (+507)</option>
                  <option value="Peru">PER (+51)</option>
                  <option value="French Polynesia">PYF (+689)</option>
                  <option value="Papua New Guinea">PNG (+675)</option>
                  <option value="Philippines">PHL (+63)</option>
                  <option value="Pakistan">PAK (+92)</option>
                  <option value="Poland">POL (+48)</option>
                  <option value="Saint Pierre And Miquelon">
                    SPM (+508)
                  </option>
                  <option value="Pitcairn">PCN (+)</option>
                  <option value="Puerto Rico">PRI (+1)</option>
                  <option value="Palestinian Territory, Occupied">
                    PSE (+970)
                  </option>
                  <option value="Portugal">PRT (+351)</option>
                  <option value="Palau">PLW (+680)</option>
                  <option value="Paraguay">PRY (+595)</option>
                  <option value="Qatar">QAT (+974)</option>
                  <option value="Réunion">REU (+262)</option>
                  <option value="Romania">ROU (+40)</option>
                  <option value="Serbia">SRB (+381)</option>
                  <option value="Russian Federation">RUS (+7)</option>
                  <option value="Rwanda">RWA (+250)</option>
                  <option value="Saudi Arabia">SAU (+966)</option>
                  <option value="Solomon Islands">SLB (+677)</option>
                  <option value="Seychelles">SYC (+248)</option>
                  <option value="Sudan">SDN (+249)</option>
                  <option value="Sweden">SWE (+46)</option>
                  <option value="Singapore">SGP (+65)</option>
                  <option value="Saint Helena">SHN (+290)</option>
                  <option value="Slovenia">SVN (+386)</option>
                  <option value="Svalbard And Jan Mayen">SJM (+47)</option>
                  <option value="Slovakia">SVK (+421)</option>
                  <option value="Sierra Leone">SLE (+232)</option>
                  <option value="San Marino">SMR (+378)</option>
                  <option value="Senegal">SEN (+221)</option>
                  <option value="Somalia">SOM (+252)</option>
                  <option value="Suriname">SUR (+597)</option>
                  <option value="South Sudan">SSD (+211)</option>
                  <option value="Sao Tome and Principe">STP (+239)</option>
                  <option value="El Salvador">SLV (+503)</option>
                  <option value="Sint Maarten">SXM (+1)</option>
                  <option value="Syrian Arab Republic">SYR (+963)</option>
                  <option value="Swaziland">SWZ (+268)</option>
                  <option value="Turks and Caicos Islands">TCA (+1)</option>
                  <option value="Chad">TCD (+235)</option>
                  <option value="French Southern Territories">ATF (+)</option>
                  <option value="Togo">TGO (+228)</option>
                  <option value="Thailand">THA (+66)</option>
                  <option value="Tajikistan">TJK (+992)</option>
                  <option value="Tokelau">TKL (+690)</option>
                  <option value="Timor-Leste">TLS (+670)</option>
                  <option value="Turkmenistan">TKM (+993)</option>
                  <option value="Tunisia">TUN (+216)</option>
                  <option value="Tonga">TON (+676)</option>
                  <option value="Turkey">TUR (+90)</option>
                  <option value="Trinidad and Tobago">TTO (+1)</option>
                  <option value="Tuvalu">TUV (+688)</option>
                  <option value="Taiwan, Republic Of China">
                    TWN (+886)
                  </option>
                  <option value="Tanzania, United Republic of">
                    TZA (+255)
                  </option>
                  <option value="United Arab Emirates">UAE (+971)</option>
                  <option value="Ukraine">UKR (+380)</option>
                  <option value="Uganda">UGA (+256)</option>
                  <option value="United States Minor Outlying Islands">
                    UMI (+)
                  </option>
                  <option value="United States">USA (+1)</option>
                  <option value="Uruguay">URY (+598)</option>
                  <option value="Uzbekistan">UZB (+998)</option>
                  <option value="Holy See (Vatican City State)">
                    VAT (+39)
                  </option>
                  <option value="Saint Vincent And The Grenedines">
                    VCT (+1)
                  </option>
                  <option value="Venezuela, Bolivarian Republic of">
                    VEN (+58)
                  </option>
                  <option value="Virgin Islands, British">VGB (+1)</option>
                  <option value="Virgin Islands, U.S.">VIR (+1)</option>
                  <option value="Vietnam">VNM (+84)</option>
                  <option value="Vanuatu">VUT (+678)</option>
                  <option value="Wallis and Futuna">WLF (+681)</option>
                  <option value="Samoa">WSM (+685)</option>
                  <option value="Yemen">YEM (+967)</option>
                  <option value="Mayotte">MYT (+262)</option>
                  <option value="South Africa">ZAF (+27)</option>

                  <option value="Zambia">ZMB (+260)</option>
                  <option value="Zimbabwe">ZWE (+263)</option>
                </select>

                <hr />
              </div>
              <div>
                <input className='form-control' type="number" placeholder="Phone NUmber" value={number} onChange={(e) => { setNumber(e.target.value) }} />
                <hr />
              </div>
            </div>

            <p style={{ fontSize: "18px" }}>
              Use this as Whatsapp number:  <button
                className={`toggle-btn ${show ? 'no' : 'yes'}`}
                onClick={showw}
              >
                {show ? "no" : 'yes'}
              </button>
            </p>

            {!show && <div className="input">
              <div>
                <select className="select-box form-control" onChange={(e) => { setWhatsupcountrycode(e.target.value) }}>
                  <option defaultValue="selected" value="+91">
                    IND (+91)
                  </option>
                  <option value="Andorra">AND (+376)</option>
                  <option value="Afghanistan">AFG (+93)</option>
                  <option value="Antigua and Barbuda">ATG (+1)</option>
                  <option value='?"Anguilla"'>AIA (+1)</option>
                  <option value="Albania">ALB (+355)</option>
                  <option value="Armenia">ARM (+374)</option>
                  <option value="Netherlands Antilles">ANT (+599)</option>
                  <option value="Angola">AGO (+244)</option>
                  <option value="Antarctica">ATA (+672)</option>
                  <option value="Argentina">ARG (+54)</option>
                  <option value="American Samoa">ASM (+1)</option>
                  <option value="Austria">AUT (+43)</option>
                  <option value="Australia">AUS (+61)</option>
                  <option value="Aruba">ABW (+297)</option>
                  <option value="Åland Islands">ALA (+358)</option>
                  <option value="Azerbaijan">AZE (+994)</option>
                  <option value="Bosnia and Herzegovina">BIH (+387)</option>
                  <option value="Barbados">BRB (+1)</option>
                  <option value="Bangladesh">BGD (+880)</option>
                  <option value="Belgium">BEL (+32)</option>
                  <option value="Burkina Faso">BFA (+226)</option>
                  <option value="Bulgaria">BGR (+359)</option>
                  <option value="Bahrain">BHR (+973)</option>
                  <option value="Burundi">BDI (+257)</option>
                  <option value="Benin">BEN (+229)</option>
                  <option value="Saint Barthélemy">BLM (+590)</option>
                  <option value="Bermuda">BMU (+1)</option>
                  <option value="Brunei Darussalam">BRN (+673)</option>
                  <option value="Bolivia">BOL (+591)</option>
                  <option value="Bonaire, Sint Eustatius and Saba">
                    BES (+599)
                  </option>
                  <option value="Brazil">BRA (+55)</option>
                  <option value="Bahamas">BHS (+1)</option>
                  <option value="Bhutan">BTN (+975)</option>
                  <option value="Bouvet Island">BVT (+)</option>
                  <option value="Botswana">BWA (+267)</option>
                  <option value="Belarus">BLR (+375)</option>
                  <option value="Belize">BLZ (+501)</option>
                  <option value="Canada">CAN (+1)</option>
                  <option value="Cocos (Keeling) Islands">CCK (+61)</option>
                  <option value="Congo, The Democratic Republic Of The">
                    COD (+243)
                  </option>
                  <option value="Central African Republic">CAF (+236)</option>
                  <option value="Congo">COG (+242)</option>
                  <option value="Switzerland">CHE (+41)</option>
                  <option value="Côte D Ivoire">CIV (+225)</option>
                  <option value="Cook Islands">COK (+682)</option>
                  <option value="Chile">CHL (+56)</option>
                  <option value="Cameroon">CMR (+237)</option>
                  <option value="China">CHN (+86)</option>
                  <option value="Colombia">COL (+57)</option>
                  <option value="Costa Rica">CRI (+506)</option>
                  <option value="Cuba">CUB (+53)</option>
                  <option value="Cape Verde">CPV (+238)</option>
                  <option value="Curaçao">CUW (+599)</option>
                  <option value="Christmas Island">CXR (+61)</option>
                  <option value="Cyprus">CYP (+357)</option>
                  <option value="Czech Republic">CZE (+420)</option>
                  <option value="Germany">DEU (+49)</option>
                  <option value="Djibouti">DJI (+253)</option>
                  <option value="Denmark">DNK (+45)</option>
                  <option value="Dominica">DMA (+1)</option>
                  <option value="Dominican Republic">DOM (+1)</option>
                  <option value="Algeria">DZA (+213)</option>
                  <option value="Ecuador">ECU (+593)</option>
                  <option value="Estonia">EST (+372)</option>
                  <option value="Egypt">EGY (+20)</option>
                  <option value="Western Sahara">ESH (+212)</option>
                  <option value="Eritrea">ERI (+291)</option>
                  <option value="Spain">ESP (+34)</option>
                  <option value="Ethiopia">ETH (+251)</option>
                  <option value="Finland">FIN (+358)</option>
                  <option value="Fiji">FJI (+679)</option>
                  <option value="Falkland Islands (Malvinas)">
                    FLK (+500)
                  </option>
                  <option value="Micronesia, Federated States Of">
                    FSM (+691)
                  </option>
                  <option value="Faroe Islands">FRO (+298)</option>
                  <option value="France">FRA (+33)</option>
                  <option value="Gabon">GAB (+241)</option>
                  <option value="United Kingdom">GBR (+44)</option>
                  <option value="Grenada">GRD (+1)</option>
                  <option value="Georgia">GEO (+995)</option>
                  <option value="French Guiana">GUF (+594)</option>
                  <option value="Guernsey">GGY (+44)</option>
                  <option value="Ghana">GHA (+233)</option>
                  <option value="Gibraltar">GIB (+350)</option>
                  <option value="Greenland">GRL (+299)</option>
                  <option value="Gambia">GMB (+220)</option>
                  <option value="Guinea">GIN (+224)</option>
                  <option value="Guadeloupe">GLP (+590)</option>
                  <option value="Equatorial Guinea">GNQ (+240)</option>
                  <option value="Greece">GRC (+30)</option>
                  <option value="South Georgia and the South Sandwich Islands">
                    SGS (+500)
                  </option>
                  <option value="Guatemala">GTM (+502)</option>
                  <option value="Guam">GUM (+1)</option>
                  <option value="Guinea-Bissau">GNB (+245)</option>
                  <option value="Guyana">GUY (+592)</option>
                  <option value="Hong Kong">HKG (+852)</option>
                  <option value="Heard and McDonald Islands">HMD (+)</option>
                  <option value="Honduras">HND (+504)</option>
                  <option value="Croatia">HRV (+385)</option>
                  <option value="Haiti">HTI (+509)</option>
                  <option value="Hungary">HUN (+36)</option>
                  <option value="Indonesia">IDN (+62)</option>
                  <option value="Ireland">IRL (+353)</option>
                  <option value="Israel">ISR (+972)</option>
                  <option value="Isle of Man">IMN (+44)</option>
                  <option defaultValue="selected" value="+91">
                    IND (+91)
                  </option>
                  <option value="British Indian Ocean Territory">
                    IOT (+246)
                  </option>
                  <option value="Iraq">IRQ (+964)</option>
                  <option value="Iran, Islamic Republic Of">IRN (+98)</option>
                  <option value="Iceland">ISL (+354)</option>
                  <option value="Italy">ITA (+39)</option>
                  <option value="Jersey">JEY (+44)</option>
                  <option value="Jamaica">JAM (+1)</option>
                  <option value="Jordan">JOR (+962)</option>
                  <option value="Japan">JPN (+81)</option>
                  <option value="Kenya">KEN (+254)</option>
                  <option value="Kyrgyzstan">KGZ (+996)</option>
                  <option value="Cambodia">KHM (+855)</option>
                  <option value="Kiribati">KIR (+686)</option>
                  <option value="Comoros">COM (+269)</option>
                  <option value="Saint Kitts And Nevis">KNA (+1)</option>
                  <option value="Korea, Democratic Peoples Republic Of">
                    PRK (+850)
                  </option>
                  <option value="Korea, Republic of">KOR (+82)</option>
                  <option value="Kuwait">KWT (+965)</option>
                  <option value="Cayman Islands">CYM (+1)</option>
                  <option value="Kazakhstan">KAZ (+7)</option>
                  <option value="Lao Peoples Democratic Republic">
                    LAO (+856)
                  </option>
                  <option value="Lebanon">LBN (+961)</option>
                  <option value="Saint Lucia">LCA (+1)</option>
                  <option value="Liechtenstein">LIE (+423)</option>
                  <option value="Sri Lanka">LKA (+94)</option>
                  <option value="Liberia">LBR (+231)</option>
                  <option value="Lesotho">LSO (+266)</option>
                  <option value="Lithuania">LTU (+370)</option>
                  <option value="Luxembourg">LUX (+352)</option>
                  <option value="Latvia">LVA (+371)</option>
                  <option value="Libya">LBY (+218)</option>
                  <option value="Morocco">MAR (+212)</option>
                  <option value="Monaco">MCO (+377)</option>
                  <option value="Moldova, Republic of">MDA (+373)</option>
                  <option value="Montenegro">MNE (+382)</option>
                  <option value="Saint Martin">MAF (+590)</option>
                  <option value="Madagascar">MDG (+261)</option>
                  <option value="Marshall Islands">MHL (+692)</option>
                  <option value="Macedonia, the Former Yugoslav Republic Of">
                    MKD (+389)
                  </option>
                  <option value="Mali">MLI (+223)</option>
                  <option value="Myanmar">MMR (+95)</option>
                  <option value="Mongolia">MNG (+976)</option>
                  <option value="Macao">MAC (+853)</option>
                  <option value="Northern Mariana Islands">MNP (+1)</option>
                  <option value="Martinique">MTQ (+596)</option>
                  <option value="Mauritania">MRT (+222)</option>
                  <option value="Montserrat">MSR (+1)</option>
                  <option value="Niue">NIU (+683)</option>
                  <option value="Malta">MLT (+356)</option>
                  <option value="Mauritius">MUS (+230)</option>
                  <option value="Maldives">MDV (+960)</option>
                  <option value="Malawi">MWI (+265)</option>
                  <option value="Mexico">MEX (+52)</option>
                  <option value="Malaysia">MYS (+60)</option>
                  <option value="Mozambique">MOZ (+258)</option>
                  <option value="Namibia">NAM (+264)</option>
                  <option value="New Caledonia">NCL (+687)</option>
                  <option value="Niger">NER (+227)</option>
                  <option value="Norfolk Island">NFK (+672)</option>
                  <option value="Nigeria">NGA (+234)</option>
                  <option value="Nicaragua">NIC (+505)</option>
                  <option value="Netherlands">NLD (+31)</option>
                  <option value="Norway">NOR (+47)</option>
                  <option value="Nepal">NPL (+977)</option>
                  <option value="Nauru">NRU (+674)</option>

                  <option value="New Zealand">NZL (+64)</option>
                  <option value="Oman">OMN (+968)</option>
                  <option value="Panama">PAN (+507)</option>
                  <option value="Peru">PER (+51)</option>
                  <option value="French Polynesia">PYF (+689)</option>
                  <option value="Papua New Guinea">PNG (+675)</option>
                  <option value="Philippines">PHL (+63)</option>
                  <option value="Pakistan">PAK (+92)</option>
                  <option value="Poland">POL (+48)</option>
                  <option value="Saint Pierre And Miquelon">
                    SPM (+508)
                  </option>
                  <option value="Pitcairn">PCN (+)</option>
                  <option value="Puerto Rico">PRI (+1)</option>
                  <option value="Palestinian Territory, Occupied">
                    PSE (+970)
                  </option>
                  <option value="Portugal">PRT (+351)</option>
                  <option value="Palau">PLW (+680)</option>
                  <option value="Paraguay">PRY (+595)</option>
                  <option value="Qatar">QAT (+974)</option>
                  <option value="Réunion">REU (+262)</option>
                  <option value="Romania">ROU (+40)</option>
                  <option value="Serbia">SRB (+381)</option>
                  <option value="Russian Federation">RUS (+7)</option>
                  <option value="Rwanda">RWA (+250)</option>
                  <option value="Saudi Arabia">SAU (+966)</option>
                  <option value="Solomon Islands">SLB (+677)</option>
                  <option value="Seychelles">SYC (+248)</option>
                  <option value="Sudan">SDN (+249)</option>
                  <option value="Sweden">SWE (+46)</option>
                  <option value="Singapore">SGP (+65)</option>
                  <option value="Saint Helena">SHN (+290)</option>
                  <option value="Slovenia">SVN (+386)</option>
                  <option value="Svalbard And Jan Mayen">SJM (+47)</option>
                  <option value="Slovakia">SVK (+421)</option>
                  <option value="Sierra Leone">SLE (+232)</option>
                  <option value="San Marino">SMR (+378)</option>
                  <option value="Senegal">SEN (+221)</option>
                  <option value="Somalia">SOM (+252)</option>
                  <option value="Suriname">SUR (+597)</option>
                  <option value="South Sudan">SSD (+211)</option>
                  <option value="Sao Tome and Principe">STP (+239)</option>
                  <option value="El Salvador">SLV (+503)</option>
                  <option value="Sint Maarten">SXM (+1)</option>
                  <option value="Syrian Arab Republic">SYR (+963)</option>
                  <option value="Swaziland">SWZ (+268)</option>
                  <option value="Turks and Caicos Islands">TCA (+1)</option>
                  <option value="Chad">TCD (+235)</option>
                  <option value="French Southern Territories">ATF (+)</option>
                  <option value="Togo">TGO (+228)</option>
                  <option value="Thailand">THA (+66)</option>
                  <option value="Tajikistan">TJK (+992)</option>
                  <option value="Tokelau">TKL (+690)</option>
                  <option value="Timor-Leste">TLS (+670)</option>
                  <option value="Turkmenistan">TKM (+993)</option>
                  <option value="Tunisia">TUN (+216)</option>
                  <option value="Tonga">TON (+676)</option>
                  <option value="Turkey">TUR (+90)</option>
                  <option value="Trinidad and Tobago">TTO (+1)</option>
                  <option value="Tuvalu">TUV (+688)</option>
                  <option value="Taiwan, Republic Of China">
                    TWN (+886)
                  </option>
                  <option value="Tanzania, United Republic of">
                    TZA (+255)
                  </option>
                  <option value="United Arab Emirates">UAE (+971)</option>
                  <option value="Ukraine">UKR (+380)</option>
                  <option value="Uganda">UGA (+256)</option>
                  <option value="United States Minor Outlying Islands">
                    UMI (+)
                  </option>
                  <option value="United States">USA (+1)</option>
                  <option value="Uruguay">URY (+598)</option>
                  <option value="Uzbekistan">UZB (+998)</option>
                  <option value="Holy See (Vatican City State)">
                    VAT (+39)
                  </option>
                  <option value="Saint Vincent And The Grenedines">
                    VCT (+1)
                  </option>
                  <option value="Venezuela, Bolivarian Republic of">
                    VEN (+58)
                  </option>
                  <option value="Virgin Islands, British">VGB (+1)</option>
                  <option value="Virgin Islands, U.S.">VIR (+1)</option>
                  <option value="Vietnam">VNM (+84)</option>
                  <option value="Vanuatu">VUT (+678)</option>
                  <option value="Wallis and Futuna">WLF (+681)</option>
                  <option value="Samoa">WSM (+685)</option>
                  <option value="Yemen">YEM (+967)</option>
                  <option value="Mayotte">MYT (+262)</option>
                  <option value="South Africa">ZAF (+27)</option>
                  <option value="Zambia">ZMB (+260)</option>
                  <option value="Zimbabwe">ZWE (+263)</option>
                </select>

                <hr />
              </div>
              <div>
                <input className='form-control' type="number" placeholder="Whatsapp Number" value={whatsupnumber} onChange={(e) => { setWhatsupnumber(e.target.value) }} />
                <hr />
              </div>
            </div>}
            <div className="input">
              <div>

                <select className="select-box form-control" value={country} onChange={(e) => { setCountry(e.target.value) }}>
                  <option value="">Select Country</option>
                  <option value="Afghanistan">Afghanistan</option>
                  <option value="Algeria">Algeria</option>
                  <option value="Antarctica">Antarctica</option>
                  <option value="Angola">Angola</option>
                  <option value="Azerbaijan">Azerbaijan</option>
                  <option value="Austria">Austria</option>
                  <option value="Aruba">Aruba</option>
                  <option value="Antigua and Barbuda">
                    Antigua and Barbuda
                  </option>
                  <option value="Andorra">Andorra</option>
                  <option value="American Samoa">American Samoa</option>
                  <option value="Anguilla">Anguilla</option>
                  <option value="Ã…land Islands">Ã…land Islands</option>
                  <option value="Albania">Albania</option>
                  <option value="Argentina">Argentina</option>
                  <option value="Armenia">Armenia</option>
                  <option value="Australia">Australia</option>
                  <option value="Austria">Austria</option>
                  <option value="Bahamas">Bahamas</option>
                  <option value="Bahrain">Bahrain</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Barbados">Barbados</option>
                  <option value="Belarus">Belarus</option>
                  <option value="Belgium">Belgium</option>
                  <option value="Belize">Belize</option>
                  <option value="Benin">Benin</option>
                  <option value="Bermuda">Bermuda</option>
                  <option value="Bhutan">Bhutan</option>
                  <option value="Bolivia">Bolivia</option>
                  <option value="Bosnia and Herzegovina">
                    Bosnia and Herzegovina
                  </option>
                  <option value="Botswana">Botswana</option>
                  <option value="Bouvet Island">Bouvet Island</option>
                  <option value="Brazil">Brazil</option>
                  <option value="British Indian Ocean Territory">
                    British Indian Ocean Territory
                  </option>
                  <option value="Brunei Darussalam">Brunei Darussalam</option>
                  <option value="Bulgaria">Bulgaria</option>
                  <option value="Burkina Faso">Burkina Faso</option>
                  <option value="Burundi">Burundi</option>
                  <option value="Cambodia">Cambodia</option>
                  <option value="Cameroon">Cameroon</option>
                  <option value="Canada">Canada</option>
                  <option value="Cape Verde">Cape Verde</option>
                  <option value="Cayman Islands">Cayman Islands</option>
                  <option value="Central African Republic">
                    Central African Republic
                  </option>
                  <option value="Chad">Chad</option>
                  <option value="Chile">Chile</option>
                  <option value="China">China</option>
                  <option value="Christmas Island">Christmas Island</option>
                  <option value="Cocos (Keeling) Islands">
                    Cocos (Keeling) Islands
                  </option>
                  <option value="Colombia">Colombia</option>
                  <option value="Comoros">Comoros</option>
                  <option value="Congo">Congo</option>
                  <option value="Congo, The Democratic Republic of The">
                    Congo, The Democratic Republic of The
                  </option>
                  <option value="Cook Islands">Cook Islands</option>
                  <option value="Costa Rica">Costa Rica</option>
                  <option value="Cote D'ivoire">Cote D'ivoire</option>
                  <option value="Croatia">Croatia</option>
                  <option value="Cuba">Cuba</option>
                  <option value="Cyprus">Cyprus</option>
                  <option value="Czech Republic">Czech Republic</option>
                  <option value="Denmark">Denmark</option>
                  <option value="Djibouti">Djibouti</option>
                  <option value="Dominica">Dominica</option>
                  <option value="Dominican Republic">
                    Dominican Republic
                  </option>
                  <option value="Dr Congo">Dr Congo</option>
                  <option value="Ecuador">Ecuador</option>
                  <option value="Egypt">Egypt</option>
                  <option value="El Salvador">El Salvador</option>
                  <option value="Equatorial Guinea">Equatorial Guinea</option>
                  <option value="Eritrea">Eritrea</option>
                  <option value="Estonia">Estonia</option>
                  <option value="Ethiopia">Ethiopia</option>
                  <option value="Falkland Islands (Malvinas)">
                    Falkland Islands (Malvinas)
                  </option>
                  <option value="Faroe Islands">Faroe Islands</option>
                  <option value="Fiji">Fiji</option>
                  <option value="Finland">Finland</option>
                  <option value="France">France</option>
                  <option value="French Guiana">French Guiana</option>
                  <option value="French Polynesia">French Polynesia</option>
                  <option value="French Southern Territories">
                    French Southern Territories
                  </option>
                  <option value="Gabon">Gabon</option>
                  <option value="Gambia">Gambia</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Germany">Germany</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Gibraltar">Gibraltar</option>
                  <option value="Greece">Greece</option>
                  <option value="Greenland">Greenland</option>
                  <option value="Grenada">Grenada</option>
                  <option value="Guadeloupe">Guadeloupe</option>
                  <option value="Guam">Guam</option>
                  <option value="Guatemala">Guatemala</option>
                  <option value="Guernsey">Guernsey</option>
                  <option value="Guinea">Guinea</option>
                  <option value="Guinea-bissau">Guinea-bissau</option>
                  <option value="Guyana">Guyana</option>
                  <option value="Haiti">Haiti</option>
                  <option value="Heard Island and Mcdonald Islands">
                    Heard Island and Mcdonald Islands
                  </option>
                  <option value="Holy See (Vatican City State)">
                    Holy See (Vatican City State)
                  </option>
                  <option value="Honduras">Honduras</option>
                  <option value="Hong Kong">Hong Kong</option>
                  <option value="Hungary">Hungary</option>
                  <option value="Iceland">Iceland</option>
                  <option value="India">India</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Iran">Iran</option>
                  <option value="Iraq">Iraq</option>
                  <option value="Ireland">Ireland</option>
                  <option value="Isle of Man">Isle of Man</option>
                  <option value="Israel">Israel</option>
                  <option value="Italy">Italy</option>
                  <option value="Jamaica">Jamaica</option>
                  <option value="Japan">Japan</option>
                  <option value="Jersey">Jersey</option>
                  <option value="Jordan">Jordan</option>
                  <option value="Kazakhstan">Kazakhstan</option>
                  <option value="kenya">Kenya</option>
                  <option value="Kiribati">Kiribati</option>
                  <option value="Korea, Democratic People's Republic of">
                    Korea, Democratic People's Republic of
                  </option>
                  <option value="Korea, Republic of">
                    Korea, Republic of
                  </option>
                  <option value="Kuwait">Kuwait</option>
                  <option value="Kyrgyzstan">Kyrgyzstan</option>
                  <option value="Lao People's Democratic Republic">
                    Lao People's Democratic Republic
                  </option>
                  <option value="Latvia">Latvia</option>
                  <option value="Lebanon">Lebanon</option>
                  <option value="Lesotho">Lesotho</option>
                  <option value="Liberia">Liberia</option>
                  <option value="Libyan Arab Jamahiriya">
                    Libyan Arab Jamahiriya
                  </option>
                  <option value="Liechtenstein">Liechtenstein</option>
                  <option value="Lithuania">Lithuania</option>
                  <option value="Luxembourg">Luxembourg</option>
                  <option value="Macao">Macao</option>
                  <option value="Macedonia, The Former Yugoslav Republic of">
                    Macedonia, The Former Yugoslav Republic of
                  </option>
                  <option value="Madagascar">Madagascar</option>
                  <option value="Malawi">Malawi</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Maldives">Maldives</option>
                  <option value="Mali">Mali</option>
                  <option value="Malta">Malta</option>
                  <option value="Marshall Islands">Marshall Islands</option>
                  <option value="Martinique">Martinique</option>
                  <option value="Mauritania">Mauritania</option>
                  <option value="Mauritius">Mauritius</option>
                  <option value="Mayotte">Mayotte</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Micronesia">Micronesia</option>
                  <option value="Moldova, Republic of">
                    Moldova, Republic of
                  </option>
                  <option value="Monaco">Monaco</option>
                  <option value="Mongolia">Mongolia</option>
                  <option value="Montenegro">Montenegro</option>
                  <option value="Montserrat">Montserrat</option>
                  <option value="Morocco">Morocco</option>
                  <option value="Mozambique">Mozambique</option>
                  <option value="Myanmar">Myanmar</option>
                  <option value="Namibia">Namibia</option>
                  <option value="Nauru">Nauru</option>
                  <option value="Nepal">Nepal</option>
                  <option value="Netherlands">Netherlands</option>
                  <option value="Netherlands Antilles">
                    Netherlands Antilles
                  </option>
                  <option value="New Caledonia">New Caledonia</option>
                  <option value="New Zealand">New Zealand</option>
                  <option value="Nicaragua">Nicaragua</option>
                  <option value="Niger">Niger</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Niue">Niue</option>
                  <option value="Norfolk Island">Norfolk Island</option>
                  <option value="Northern Mariana Islands">
                    Northern Mariana Islands
                  </option>
                  <option value="Norway">Norway</option>
                  <option value="Oman">Oman</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="Palau">Palau</option>
                  <option value="Palestinian Territory, Occupied">
                    Palestinian Territory, Occupied
                  </option>
                  <option value="Panama">Panama</option>
                  <option value="Papua New Guinea">Papua New Guinea</option>
                  <option value="Paraguay">Paraguay</option>
                  <option value="Peru">Peru</option>
                  <option value="Philippines">Philippines</option>
                  <option value="Pitcairn">Pitcairn</option>
                  <option value="Poland">Poland</option>
                  <option value="Portugal">Portugal</option>
                  <option value="Puerto Rico">Puerto Rico</option>
                  <option value="Qatar">Qatar</option>
                  <option value="Reunion">Reunion</option>
                  <option value="Romania">Romania</option>
                  <option value="Russian Federation">
                    Russian Federation
                  </option>
                  <option value="Rwanda">Rwanda</option>
                  <option value="Saint Helena">Saint Helena</option>
                  <option value="Saint Kitts and Nevis">
                    Saint Kitts and Nevis
                  </option>
                  <option value="Saint Lucia">Saint Lucia</option>
                  <option value="Saint Pierre and Miquelon">
                    Saint Pierre and Miquelon
                  </option>
                  <option value="Saint Vincent and The Grenadines">
                    Saint Vincent and The Grenadines
                  </option>
                  <option value="Samoa">Samoa</option>
                  <option value="San Marino">San Marino</option>
                  <option value="Sao Tome and Principe">
                    Sao Tome and Principe
                  </option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="Senegal">Senegal</option>
                  <option value="Serbia">Serbia</option>
                  <option value="South Korea">South Korea</option>
                  <option value="Seychelles">Seychelles</option>
                  <option value="Sierra Leone">Sierra Leone</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Slovakia">Slovakia</option>
                  <option value="Slovenia">Slovenia</option>
                  <option value="Solomon Islands">Solomon Islands</option>
                  <option value="Somalia">Somalia</option>
                  <option value="South Africa">South Africa</option>
                  <option value="South Georgia and The South Sandwich Islands">
                    South Georgia and The South Sandwich Islands
                  </option>
                  <option value="Spain">Spain</option>
                  <option value="Sri Lanka">Sri Lanka</option>
                  <option value="Sudan">Sudan</option>
                  <option value="Suriname">Suriname</option>
                  <option value="Svalbard and Jan Mayen">
                    Svalbard and Jan Mayen
                  </option>
                  <option value="Swaziland">Swaziland</option>
                  <option value="Sweden">Sweden</option>
                  <option value="Switzerland">Switzerland</option>
                  <option value="Syrian Arab Republic">
                    Syrian Arab Republic
                  </option>
                  <option value="Taiwan, Province of China">
                    Taiwan, Province of China
                  </option>
                  <option value="Tajikistan">Tajikistan</option>
                  <option value="Tanzania">Tanzania</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Timor-leste">Timor-leste</option>
                  <option value="Togo">Togo</option>
                  <option value="Tokelau">Tokelau</option>
                  <option value="Tonga">Tonga</option>
                  <option value="Trinidad and Tobago">
                    Trinidad and Tobago
                  </option>
                  <option value="Tunisia">Tunisia</option>
                  <option value="Turkey">Turkey</option>
                  <option value="Turkmenistan">Turkmenistan</option>
                  <option value="Turks and Caicos Islands">
                    Turks and Caicos Islands
                  </option>
                  <option value="Tuvalu">Tuvalu</option>
                  <option value="Uganda">Uganda</option>
                  <option value="Ukraine">Ukraine</option>
                  <option value="United Arab Emirates">
                    United Arab Emirates
                  </option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="United States">United States</option>
                  <option value="United States Minor Outlying Islands">
                    United States Minor Outlying Islands
                  </option>
                  <option value="Uruguay">Uruguay</option>
                  <option value="Uzbekistan">Uzbekistan</option>
                  <option value="Vanuatu">Vanuatu</option>
                  <option value="Venezuela">Venezuela</option>
                  <option value="Viet Nam">Viet Nam</option>
                  <option value="Virgin Islands, British">
                    Virgin Islands, British
                  </option>
                  <option value="Virgin Islands, U.S.">
                    Virgin Islands, U.S.
                  </option>
                  <option value="Wallis and Futuna">Wallis and Futuna</option>
                  <option value="Western Sahara">Western Sahara</option>
                  <option value="Yemen">Yemen</option>
                  <option value="Zambia">Zambia</option>
                  <option value="Zimbabwe">Zimbabwe</option>
                </select>
                <hr />
              </div>

              <div>
                <select className="select-box form-control" value={visacountry} onChange={(e) => { setVisaCountry(e.target.value) }}>
                  <option value="">Visa Category</option>
                  <option value="Study Abroad">Study Abroad</option>
                  <option value="Investor Visa">Investor Visa</option>
                  <option value="Toursit Visa">Tourist Visa</option>
                  <option value="Work Permi">Work Permit</option>
                  <option value="Transit">Transit</option>
                  <option value="E-Visa">E-Visa</option>
                  <option value="Seamen">Seamen</option>
                  <option value="Visit">Visit</option>
                  <option value="Permanent Residency">
                    Permanent Residency
                  </option>
                  <option value="Business Visa">Business Visa</option>
                  <option value="Dependent Visa">Dependent Visa</option>
                  <option value="Internship">Internship </option>
                  <option value="Attestation">Attestation</option>
                  <option value="Work Visa">Work Visa</option>
                  <option value="Translation">Translation</option>
                  <option value="Visa Stamping">Visa Stamping</option>
                  <option value="Insurance">Insurance</option>
                </select>
                <hr />
              </div>
            </div>

            <div className="input">
              <div style={{ width: "100%" }}>   <textarea className="form-control" rows="3" placeholder="Message" value={message} onChange={(e) => { setMessage(e.target.value) }} />

                <hr /></div>
            </div>
            <div className='getin-btn-main'>
              <button type='submit' className="btn get-button" >Book Your Free Consultation</button>
            </div>
          </div>
        </div>

      </form>
    </>
  )
}

export default Getintouchform;
