import React from 'react'
import HeadComponent from '../HeadComponent'
import FooterComponent from '../FooterComponent'
import { Link } from 'react-router-dom'

const InstrumentDetails6 = () => {
  return (
    <div>
      <>
        <HeadComponent />
        <main id="main">
          <section className="breadcrumbs">
            <div className="container">
              <div className="d-flex justify-content-between align-items-center">
                <h2> PARTH_1000 (GNSS RECIEVER) </h2>
                <ol>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/Instruments">Instruments</Link>
                  </li>
                  <li> PARTH_1000 (GNSS RECIEVER) details </li>
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
                        <img src="assets/img/portfolio/parth.png" alt="" />
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
                    <h3>PARTH-1000 (GNSS RECIEVER)</h3>
                    <ul>
                      <li>
                        <strong>Category</strong>: DGPS (Differential Global Positioning System)
                      </li>
                      <li>
                        <strong>Purpose</strong>: GNSS Survey
                      </li>
                      <li>
                        <strong>Instrument Type</strong>: DGPS
                      </li>
                      <li>
                        <strong>Instrument Name</strong>: PARTH_1000
                      </li>
                    </ul>
                  </div>
                  <div className="portfolio-description">
                    <h2>PARTH-1000</h2>
                    <p>
                      

                      • IRNSS enable<br/>
                      • 965 channels <br/>
                      • GPS L1/L2/L5, BeiDou B1/B2/B3, <br/>
                      • BeiDou Global B1C/B2a, <br/>
                      • GLONASS L1/L2, Galileo E1/E5a/E5b and SBAS <br/>
                      • Advanced QUANTUMTM Technology WIFI/UHF/4G Module <br/>
                      • Tilt Compensation<br/>
                      • Smart Battery Design(Hot SwapBattery)<br/>
                      • Low Power Consumption<br/>
                      
                      


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

export default InstrumentDetails6


































