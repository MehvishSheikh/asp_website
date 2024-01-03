import React from 'react'
import HeadComponent from '../HeadComponent'
import FooterComponent from '../FooterComponent'
import { Link } from 'react-router-dom'

const SercvicesComponent = () => {
  return (
    <div className='SercvicesComponent'>
        <>
  <HeadComponent />
  {/* End Header */}
  <main id="main">
    <section className="breadcrumbs">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h2>Our Services</h2>
          <ol>
            <li>
              <a href="\">Home</a>
            </li>
            <li>Our Services</li>
          </ol>
        </div>
      </div>
    </section>    
    <section className="services">
      <div className="container">
        <div className="row">
          <div
            className="col-md-6 col-lg-3 d-flex align-items-stretch"
            data-aos="fade-up"
          >
            <div className="icon-box icon-box-blue">
              <div className="icon">
                <i className="bi bi-moisture" />
              </div>
              <h4 className="title">
                <a href="">Hydrogeological Services</a>
              </h4>
              <p className="description">
              Experts in hydrogeological services and groundwater assessments.
              </p>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-3 d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="icon-box icon-box-pink">
              <div className="icon">
                <i className="bi bi-pc-display" />
              </div>
              <h4 className="title">
                <a href="">IT Services</a>
              </h4>
              <p className="description">
              Leading IT services provider, for seamless digital transformation.
              </p>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-3 d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="icon-box icon-box-green">
              <div className="icon">
                <i className="bi bi-robot" />
              </div>
              <h4 className="title">
                <a href="">Instruments</a>
              </h4>
              <p className="description">
              Cutting-edge instruments for precise data collection and analysis.
              </p>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-3 d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="icon-box icon-box-cyan">
              <div className="icon">
                <i className="bi bi-globe" />
              </div>
              <h4 className="title">
                <a href="">Other Services</a>
              </h4>
              <p className="description">
              Comprehensive services tailored to diverse project needs, ensuring optimal outcomes and client satisfaction.
              </p>
            </div>
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

export default SercvicesComponent