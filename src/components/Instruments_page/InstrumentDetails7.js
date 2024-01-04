import React from 'react'
import HeadComponent from '../HeadComponent'
import FooterComponent from '../FooterComponent'
import { Link } from 'react-router-dom'

const InstrumentDetails7 = () => {
  return (
    <div>
      <>
        <HeadComponent />
        <main id="main">
          <section className="breadcrumbs">
            <div className="container">
              <div className="d-flex justify-content-between align-items-center">
                <h2> Resistivity Meter </h2>
                <ol>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/Instruments">Instruments</Link>
                  </li>
                  <li> Resistivity Meter detail </li>
                </ol>
              </div>
            </div>
          </section>
          <section id="portfolio-details" className="portfolio-details">
            <div className="container">
              <div className="row gy-4">
                <div className="col-lg-4">
                  <div className="portfolio-details-slider swiper">
                    <div className="swiper-wrapper align-items-center">
                      <div className="swiper-slide">
                        <img src="assets/img/portfolio/Aquameter.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        <img src="assets/img/portfolio/montana680.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        <img src="assets/img/portfolio/UD.jpg" alt="" />
                      </div>
                    </div>
                    <div className="swiper-pagination" />
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="portfolio-info">
                    <h3>Resistivity Meter information</h3>
                    <ul>
                      <li>
                        <strong>Category</strong>: Resistivity Meter
                      </li>
                      <li>
                        <strong>Purpose</strong>: Aquameter CRM Auto-D for Geophysical Resistivity Survey
                      </li>
                      <li>
                        <strong>Instrument Type</strong>: Aquameter
                      </li>
                      <li>
                        <strong>Instrument Name</strong>: Aquameter CRM Auto-D
                      </li>
                    </ul>
                  </div>
                  <div className="portfolio-description">
                    <h2>Aquameter CRM Auto-D</h2>
                    <p>
                      Resistivity (geo-electrical) surveying is one of the most versatile and
                      successful geophysical prospecting methods for ground water prospecting
                      mineral prospecting, ground resistance measurements, geological and geo-technical
                      mapping, bedrock studies, certain civil engineering applications.
                      <br />
                      <br />
                      Specification Transmitter
                      <br/>
                      <br />
                      •  Power Output :                     40W<br />
                      •  Constant Current                  1mA to 500mA in     14 Steps<br />
                      •  Maximum Voltage                 400V<br />
                      •  Peak to Peak Voltage	800V<br />
                      •  Current Selection	Automatic Selection of Current as per Ground Conditions Receiver<br />
                      •  Input Impedance	10MΩ<br />
                      •  Input Voltage Range	0.1mV to 200V<br />
                      •  Precision	                        0.05 mV<br />
                      •  Accuracy	                        ± 1.0 %<br />
                      •  Noise Rejection	95 dB at 50 Hz<br />
                      •  Self Potential Cancellation	Automatic<br />
                      •  Resistance Measuring Range	1 mΩ to 100 KΩ
                      <br />
                      Input Power Source
                      <br />
                      • Rechargeable Battery Pack	12V and 12 Ah Capacity<br />
                      •  Measuring Capacity	200 Readings at 500 mA<br />
                      • Option for External Battery Source Connection  Provision for External Battery Connection System Data<br />
                      •  Cycle Time	                8 - 12 Seconds<br />
                      •  Data Averaging            1/4/16/64 Cycles    Selectable<br />
                      •  Diagnostic Display         09 Codes<br />
                      •  Operating Temperature  0 - 60 Degree C Output<br />
                      •  Display	                 Survey Code, Date, Time, Electrode Spacing, Resistance, Apparent Resistivity.<br />
                      •  Display Unit	                20 X 4 Alphanumeric Liquid Crystal Display, Clearly Visible in Intense Sun - Light<br />
                      •  Data Transfer	The Data can be transferred directly to any Window - based PC through SD<br />
                     
                      •  Storage Capacity         16 GB Data sufficient to store 1000 survey readings<br /> <br/>
                      Interaction with the System        User friendly menu operation with 4 X 4 feather- touch Key - Pad and 20 X 4
                      Alphanumeric Liquid Crystal Display.<br />
                      System Protection     Inbuilt protection of circuit provided against overload or surge voltage
                      Depth of Penetration	Under favorable Geological / Field condition, the System is capable of probing 600 m.
                      GPS	             Provision of GPS connection available<br />



                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <FooterComponent />
      </>

    </div>
  )
}

export default InstrumentDetails7