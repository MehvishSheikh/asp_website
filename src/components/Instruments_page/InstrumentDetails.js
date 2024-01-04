import React from 'react'
import HeadComponent from '../HeadComponent'
import FooterComponent from '../FooterComponent'
import { Link } from 'react-router-dom'

const InstrumentDetails = () => {
  return (
    <div>
      <>
        <HeadComponent />
        <main id="main">
          <section className="breadcrumbs">
            <div className="container">
              <div className="d-flex justify-content-between align-items-center">
                <h2>eTrex-22x Details</h2>
                <ol>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/Instruments">Instruments</Link>
                  </li>
                  <li> eTrex-22x  </li>
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
                        <img src="assets/img/portfolio/etrex22.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        <img src="assets/img/portfolio/etrex22.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        <img src="assets/img/portfolio/oregon750.jpg" alt="" />
                      </div>
                    </div>
                    <div className="swiper-pagination" />
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="portfolio-info">
                    <h3>eTrex-22x information</h3>
                    <ul>
                      <li>
                        <strong>Category</strong>: Global Positioning System
                      </li>
                      <li>
                        <strong>Company</strong>: Garmin
                      </li>
                      <li>
                        <strong>Instrument Type</strong>: Hand Held GPS
                      </li>
                      <li>
                        <strong>Instrument</strong>: eTrex 22x
                      </li>
                    </ul>
                  </div>
                  <div className="portfolio-description">
                    <h2>eTrex 22x detail</h2>
                    <p>
                    2.2” sunlight-readable color display with 240 x 320 display pixels for improved readability<br/>
Preloaded with TopoActive maps with routable roads and trails for cycling and hiking<br/></p>
<p>
Support for GPS and GLONASS satellite systems allows for tracking in more challenging environments than GPS alone<br/>
8 GB of internal memory plus a microSD™ card slot<br/></p>
<p>
eTrex 32x adds a 3-axis compass and barometric altimeter<br/>
</p>
<p>
Battery life: up to 25 hours in GPS mode with 2 AA batteries<br/>

                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Portfolio Details Section */}
        </main>
        {/* End #main */}
        <FooterComponent />
      </>

    </div>
  )
}

export default InstrumentDetails