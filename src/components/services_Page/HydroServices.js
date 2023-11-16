import React from 'react'
import { Link } from 'react-router-dom'
import HeadComponent from '../HeadComponent'
import FooterComponent from '../FooterComponent'


const HydroServices = () => {
  return (
    <div>
        <HeadComponent />
        <br/>
        <br/>
        <br/>
        <br/>
        <section
                    className="why-us section-bg"
                    data-aos="fade-up"
                    date-aos-delay={200}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 video-box">
                                <img src="assets\img\homeimg.jpg" className="img-fluid" alt="" />
                                <a
                                    href="assets\img\homeimg.jpg"
                                />
                            </div>
                            <div className="col-lg-6 d-flex flex-column justify-content-center p-5">
                                <div className="icon-box">
                                    <div className="icon">
                                        <i className="bi bi-buildings" />
                                    </div>
                                    <h4 className="title">
                                        <a href="">INDUSTRIAL</a>
                                    </h4>
                                    <p className="description">
                                    Permission to Abstract Groundwater for Industrial Use
                                    </p>
                                </div>
                                <div className="icon-box">
                                    <div className="icon">
                                        <i className="bi bi-building-gear" />
                                    </div>
                                    <h4 className="title">
                                        <a href="">INFRASTRUCTURE</a>
                                    </h4>
                                    <p className="description">
                                    Permission to Abstract/Dewatering Groundwater for Infrastructure Projects 
                                    </p>
                                </div>
                                
                                <div className="icon-box">
                                    <div className="icon">
                                        <i className="bi bi-minecart-loaded" />
                                    </div>
                                    <h4 className="title">
                                        <a href="">MINING</a>
                                    </h4>
                                    <p className="description">
                                    Permission to Abstract/Dewatering Groundwater for Mining Industry

                                    </p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </section>
         <div className="facts section-bg text-center" data-aos="fade-up">
            <h1>HydroGeological Services</h1>
    
      <div className="container">
        <div className="row counters">
          <div className="col-lg-4 col-md-4 col-sm-12  text-center">
            <span
              data-purecounter-start={0}
              data-purecounter-end={232}
              data-purecounter-duration={1}
              className="purecounter"
            />
              </div>
      </div>
    
    </div>
            </div>
             
        <main id="main">
          {/* ======= Our Portfolio Section ======= */}
          <section className="breadcrumbs">
            <div className="container">
              <div className="d-flex justify-content-between align-items-center">
              <h2> CGWA NOC For Withdrawal of Groundwater (NOCAP)</h2>
                <ol>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/Services">Services</Link>
                  </li>

                </ol>
              </div>
            </div>
          </section>
          {/* End Our Portfolio Section */}
          {/* ======= Portfolio Details Section ======= */}
          <section id="portfolio-details" className="portfolio-details">
            <div className="container">
              <div className="row gy-4">
                <div className="col-lg-5">
                  <div className="portfolio-details-slider swiper">
                    <div className="swiper-wrapper align-items-center">
                      <div className="swiper-slide">
                        <img src="assets/img/service-details-1.jpg" alt="" />
                        <br/>
                        <br/>
                        <br/>
                        <img src="assets/img/hydro.jpg" alt="" />
                        <br/>
                        <br/>
                        <br/>
                        <img src="assets/img/hydro1.jpg" alt="" />
                        
                      </div>
                      <div className="swiper-slide">
                        <img src="assets/img/portfolio/eTrex30x.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        <img src="assets/img/portfolio/oregon750.jpg" alt="" />
                      </div>
                    </div>
                    <div className="swiper-pagination" />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="portfolio-info">
                    <h3>We are one of the Accredited Institute by CGWA, Govt of India to carry out the Impact Assessment/Comprehensive Hydrogeological Studies, Groundwater Survey along with Rainwater Harvesting.  We are a service providing company to various mines and Industry in the area of Comprehensive Hydrogeological Survey, Rainwater Harvesting plan for obtaining the NOC to Abstract Ground Water/Dewatering (NOCAP) from CGWA, Ministry of Jal Shakti and Ganga Rejuvenation, Government of India for the following categories: </h3>
                    <ul>
                      <li>
                        <strong>Industrial:</strong>  Permission to Abstract Groundwater for Industrial Use
                      </li>
                      <li>
                        <strong>Infrastructure:</strong> Permission to Abstract/Dewatering Groundwater for Infrastructure Projects
                      </li>
                      <li>
                        <strong>Mining</strong> Permission to Abstract/Dewatering Groundwater for Mining Industry

                      </li>
                      
                    </ul>
                  </div>
                  <h2>This service will have followings features / scope of work:</h2>
                  <p className="card-text">
                  
Preparation of Groundwater Availability & Rain Water Harvesting report for ground water abstraction by visit and survey the industrial/Infrastructure/Mining areas as per the Guidelines of CGWA
Site visit / field survey of the project area as per the Guidelines of CGWA
Preparation of Recharge proposal / report for ground water abstraction by Land use plan / details of the existing/proposed Industrial unit premises
Online submission of report to CGWA (Central Ground Water Authority)
Response to queries, if any raised by CGWB/ CGWA
Response to queries or presentation of entire work to CGWA, New Delhi if required for getting the approval and NOC.

                </p>
                  <div className="portfolio-description">
                    <h2>We also carry out the following works.</h2>
                    <p>
                    Preparation of Groundwater availability report
Compliance of NOC
Implementation of Rain Water Harvesting Structures as per the guidelines of CGWA
Dug well/Borewell Recharge
Drainage Plan for the area (River/ nala, etc)
Study of Sources of availability of surface water for Industrial use, if any
Preparation / Details of water requirement /recycled water usage (STP/ ETP)
Supply and Installation of Digital Water Meter
Constructions of Piezo meters
Supply and lnstallation of DWLR (Digital Water Level Recorder)
Renewal of NOC
Construction of Rainwater Harvesting Structure
	Our team consists of competent professionals with extensive experience in their respective disciplines. Their expertise ensures quality service and support.


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
          </div>
      
  )
}

export default HydroServices