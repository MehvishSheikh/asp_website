import React from 'react'
import HeadComponent from '../HeadComponent'
import FooterComponent from '../FooterComponent'
import { Link } from 'react-router-dom'

const Instrumentsgps = () => {
  return (
    <div className="Instruments">
      <>
     
        <HeadComponent />
        <main id="main">
          <section className="breadcrumbs">
            <div className="container">
              <div className="d-flex justify-content-between align-items-center">
                <h2>Our Instruments</h2>
                <ol>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Our Instruments</li>
                </ol>
              </div>
            </div>
          </section>
          <section className="portfolio">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <ul id="portfolio-flters">
                   <Link to="/Instruments"> <li data-filter="*" > All </li></Link>
                   <Link to="/Instrugps"><li data-filter=".filter-app" className="filter-active">GPS</li></Link>
                   <Link to="/Instrudgps"><li data-filter=".filter-card">DGPS</li></Link>
                   <Link to="/InstrumentDetails7"><li data-filter=".filter-web">CRM</li></Link>
                   <Link to="/InstrumentDetails8"><li data-filter=".filter-web">DWLR</li></Link>
                   <Link to="/InstrumentDetails9"><li data-filter=".filter-web">Telemetry</li></Link>
                   <Link to="/InstrumentDetails10"><li data-filter=".filter-web">EWLI</li></Link>
                  </ul>
                </div>
              </div>
              <div
                className="row portfolio-container"
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-duration={500}
              >
                <div className="col-lg-4 col-md-6 portfolio-wrap filter-app">
                <Link to="/InstrumentDetails">

                  <div className="portfolio-item">
                    <img
                      src="assets/img/portfolio/etrex22.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="portfolio-info">
                      <h3>eTrex 22x</h3>
                      
                    </div>
                  </div>
                  </Link>
                </div>
               

                <div className="col-lg-4 col-md-6 portfolio-wrap filter-app">
                <Link to="/InstrumentDetails2">
                  <div className="portfolio-item">
                    <img
                      src="assets/img/portfolio/etrex32.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="portfolio-info">
                      <h3>eTrex 32x</h3>
                      
                    </div>
                  </div>
                  </Link>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-wrap filter-app">
                <Link to="/InstrumentDetails3">
                  <div className="portfolio-item">
                    <img
                      src="assets/img/portfolio/oregon750.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="portfolio-info">
                      <h3>OREGON 750</h3>
                      
                    </div>
                  </div>
                  </Link>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-wrap filter-web">
                <Link to="/InstrumentDetails4">
                  <div className="portfolio-item">
                    <img
                      src="assets/img/portfolio/montana680.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="portfolio-info">
                      <h3>MONTANA 680</h3>
                      
                    </div>
                  </div>
                  </Link>
                </div>

                

                

               
              

               

                
              </div>
            </div>
          </section>
        </main>
        <FooterComponent />

        <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </a>
      </>

    </div>

  )
}

export default Instrumentsgps