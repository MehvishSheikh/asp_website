import React from 'react'
import HeadComponent from '../HeadComponent'
import FooterComponent from '../FooterComponent'
import { Link } from 'react-router-dom'

const SercvicesComponent = () => {
  return (
    <div className='SercvicesComponent'>
        <>
  {/* ======= Header ======= */}
  <HeadComponent />
  {/* End Header */}
  <main id="main">
    {/* ======= Our Services Section ======= */}
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
    {/* End Our Services Section */}
    {/* ======= Services Section ======= */}
    <section className="services">
      <div className="container">
        <div className="row">
          <div
            className="col-md-6 col-lg-3 d-flex align-items-stretch"
            data-aos="fade-up"
          >
            <div className="icon-box icon-box-pink">
              <div className="icon">
                <i className="bx bxl-dribbble" />
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
            <div className="icon-box icon-box-cyan">
              <div className="icon">
                <i className="bx bx-file" />
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
                <i className="bx bx-tachometer" />
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
            <div className="icon-box icon-box-blue">
              <div className="icon">
                <i className="bx bx-world" />
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
    {/* End Services Section */}
    {/* ======= Why Us Section ======= */}
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
                                        <i className="bx bx-fingerprint" />
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
                                        <i className="bx bx-fingerprint" />
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
                                        <i className="bx bx-gift" />
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
    {/* End Why Us Section */}
    {/* ======= Service Details Section ======= */}
    <section className="service-details">
      <div className="container">
        <div className="row">
          <div
            className="col-md-6 d-flex align-items-stretch"
            data-aos="fade-up"
          >
            <div className="card">
              <div className="card-img">
                <img src="assets/img/service-details-1.jpg" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <a href="#">Hydrogeological Services</a>
                </h5>
                <p className="card-text">
                Specializing in hydrogeological services, we offer in-depth groundwater assessments and modeling, guiding sustainable water resource management. Our expertise ensures accurate analysis, enabling informed decision-making and effective solutions for complex hydrogeological challenges
                </p>
                <div className="read-more">
                  <a href="#">
                    <i className="bi bi-arrow-right" /> 
                    <h3><Link to="/HydroServices">Read More</Link></h3>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 d-flex align-items-stretch"
            data-aos="fade-up"
          >
            <div className="card">
              <div className="card-img">
                <img src="assets/img/service-details-2.gif" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <a href="#">IT Services</a>
                </h5>
                <p className="card-text">
                Our IT services cater to diverse needs, providing comprehensive solutions for businesses seeking digital transformation. We specialize in custom software development, cybersecurity, cloud computing, and IT consulting. With a focus on innovation and efficiency, we empower our clients with scalable and secure technology solutions.
                </p>
                <div className="read-more">
                  <a href="#">
                    <i className="bi bi-arrow-right" /> 
                    <h3><Link to="/HydroServices">Read More</Link></h3>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 d-flex align-items-stretch"
            data-aos="fade-up"
          >
            <div className="card">
              <div className="card-img">
                <img src="assets/img/service-details-3.jpg" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <a href="#">Other Services</a>
                </h5>
                <p className="card-text">
                In addition to our advanced instruments, we offer a comprehensive
                 suite of services aimed at enhancing geoscientific research and water resource management. Our expert team provides tailored consultancy services, precise data analysis, geophysical surveys, and groundwater modeling.
                </p>
                <div className="read-more">
                  <a href="#">
                    <i className="bi bi-arrow-right" /> 
                    <h3><Link to="/Instruments">Read More</Link></h3>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 d-flex align-items-stretch"
            data-aos="fade-up"
          >
            <div className="card">
              <div className="card-img">
                <img src="assets/img/service-details-4.jpg" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <a href="#">Instruments</a>
                </h5>
                <p className="card-text">
                At our institute, we offer an extensive array of cutting-edge instruments designed to elevate scientific research and industry practices. From precision measurement tools to advanced data analysis devices, our instruments ensure accurate and reliable results. Whether you require geospatial mapping, groundwater analysis, or environmental monitoring, our state-of-the-art equipment is tailored to meet diverse needs. 
                </p>
                <div className="read-more">
                  <a href="#">
                    <i className="bi bi-arrow-right" /> 
                    <h3><Link to="/Instruments">Read More</Link></h3>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Service Details Section */}
    {/* ======= Pricing Section ======= */}
    {/* <section className="pricing section-bg" data-aos="fade-up">
      <div className="container">
        <div className="section-title">
          <h2>Pricing</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
        <div className="row no-gutters">
          <div className="col-lg-4 box">
            <h3>Free</h3>
            <h4>
              $0<span>per month</span>
            </h4>
            <ul>
              <li>
                <i className="bx bx-check" /> Quam adipiscing vitae proin
              </li>
              <li>
                <i className="bx bx-check" /> Nec feugiat nisl pretium
              </li>
              <li>
                <i className="bx bx-check" /> Nulla at volutpat diam uteera
              </li>
              <li className="na">
                <i className="bx bx-x" />{" "}
                <span>Pharetra massa massa ultricies</span>
              </li>
              <li className="na">
                <i className="bx bx-x" />{" "}
                <span>Massa ultricies mi quis hendrerit</span>
              </li>
            </ul>
            <a href="#" className="get-started-btn">
              Get Started
            </a>
          </div>
          <div className="col-lg-4 box featured">
            <h3>Business</h3>
            <h4>
              $29<span>per month</span>
            </h4>
            <ul>
              <li>
                <i className="bx bx-check" /> Quam adipiscing vitae proin
              </li>
              <li>
                <i className="bx bx-check" /> Nec feugiat nisl pretium
              </li>
              <li>
                <i className="bx bx-check" /> Nulla at volutpat diam uteera
              </li>
              <li>
                <i className="bx bx-check" /> Pharetra massa massa ultricies
              </li>
              <li>
                <i className="bx bx-check" /> Massa ultricies mi quis hendrerit
              </li>
            </ul>
            <a href="#" className="get-started-btn">
              Get Started
            </a>
          </div>
          <div className="col-lg-4 box">
            <h3>Developer</h3>
            <h4>
              $49<span>per month</span>
            </h4>
            <ul>
              <li>
                <i className="bx bx-check" /> Quam adipiscing vitae proin
              </li>
              <li>
                <i className="bx bx-check" /> Nec feugiat nisl pretium
              </li>
              <li>
                <i className="bx bx-check" /> Nulla at volutpat diam uteera
              </li>
              <li>
                <i className="bx bx-check" /> Pharetra massa massa ultricies
              </li>
              <li>
                <i className="bx bx-check" /> Massa ultricies mi quis hendrerit
              </li>
            </ul>
            <a href="#" className="get-started-btn">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section> */}
    {/* End Pricing Section */}
  </main>
  {/* End #main */}
  {/* ======= Footer ======= */}
  <FooterComponent />
  {/* End Footer */}
  <a
    href="#"
    className="back-to-top d-flex align-items-center justify-content-center"
  >
    <i className="bi bi-arrow-up-short" />
  </a>
  {/* Vendor JS Files */}
  {/* Template Main JS File */}
</>

    </div>
  )
}

export default SercvicesComponent