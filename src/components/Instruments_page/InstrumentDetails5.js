import React from 'react'
import HeadComponent from '../HeadComponent'
import FooterComponent from '../FooterComponent'
import { Link } from 'react-router-dom'

const InstrumentDetails5 = () => {
  return (
    <div>
      <>
        <HeadComponent />
        <main id="main">
          <section className="breadcrumbs">
            <div className="container">
              <div className="d-flex justify-content-between align-items-center">
                <h2> SP-60 </h2>
                <ol>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/Instruments">Instruments</Link>
                  </li>
                  <li> SP-60 detail </li>
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
                        <img src="assets/img/portfolio/sp-60.png" alt="" />
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
                    <h3>SP-60 information</h3>
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
                        <strong>Instrument Name</strong>: SP-60
                      </li>
                    </ul>
                  </div>
                  <div className="portfolio-description">
                    <h2>SP-60 GNSS RECEIVER detail</h2>
                    <p>
                    The Spectra Geospatial SP60 is a new generation GNSS receiver <br/>
offering a high level of flexibility to cover any demand from GIS<br/>
all the way up to sophisticated RTK and Trimble RTX™ capable<br/>
solutions. <br/>
<br/>

Combining the unique all-signals-tracking and processing Z-Blade <br/>
GNSS-centric technology and L-band capability for satellitedelivered Trimble RTX correction services, the SP60 receiver <br/>
provides the most reliable measurements and the highest <br/>
possible accuracy under any conditions anywhere in the world.<br/>
<br/>
KEY FEATURES:<br/>
• Extended scalability<br/>
• Z-Blade GNSS-centric technology<br/>
• 240-channel 6G ASIC<br/>
• Anti-theft technology<br/>
• Long Range Bluetooth<br/>
• Trimble RTX correction services<br/>
                    


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

export default InstrumentDetails5