import React from 'react'
import { Link } from 'react-router-dom'
import HeadComponent from '../HeadComponent'
import FooterComponent from '../FooterComponent'

const ItSap4 = () => {
  return (
    <div className='SAP4'>
    <HeadComponent />
    <br />
    <br />
    <br />
   

    <section className="breadcrumbs">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h2> <b> SAP PLANNING ARCHITECTURES </b> </h2>
          <ol>
            <li>
              <Link to='IT-Services'> IT-Services </Link>
            </li>
            <li> SAP PLANNING </li>
          </ol>
        </div>
      </div>
    </section>


    <section
      className="why-us section-bg"
      data-aos="fade-up"
      date-aos-delay={200}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-4 video-box">
            <img src="assets\img\homeimg.jpg" className="img-fluid" alt="" />
            <a
              href="assets\img\homeimg.jpg"
            />
          </div>
          <div className="col-lg-8 d-flex flex-column justify-content-center p-5">
            <div className="icon-box">
              <div className="icon">
                <i className="bi bi-buildings" />
              </div>
              <h2 className="title">
                <Link to="/IT-2">SAP PLANNING ARCHITECTURES</Link>
              </h2>
              <p className="description">
                <b>SAP Planning : </b> 
                We put different  SAP planning architectures  to the test – SAC Native, S/4 Native, BPC  Live Connection or, in the future, planning with DWC. Our extensive demo landscape is available to us. <br/> <br/>

We bring clarity to the SAP “planning jungle” and work with you to find the right architectures and processes for your individual requirements. <br/> <br/> 

In addition to reviewing the architecture of your current SAP planning landscape, we also pay attention to the processes within your organization <br/> <br/>
              </p>

            </div>

            {/* <div className="icon-box">
                                  <div className="icon">
                                      <i className="bi bi-minecart-loaded" />
                                  </div>
                                  <h4 className="title">
                                      <a href="">MINING</a>
                                  </h4>
              
                              </div> */}

          </div>
        </div>
      </div>
    </section>

    <section className="services">
      <div className="container">
        <div className="row">
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
                <Link to='/IT-0'>Services and priorities</Link>
              </h4>
              {/* <p className="description">
                Comprehensive services tailored to diverse project needs, ensuring optimal outcomes and client satisfaction.
              </p> */}
            </div>
          </div>

          <div
            className="col-md-6 col-lg-3 d-flex align-items-stretch"
            data-aos="fade-up"
          >
            <div className="icon-box icon-box-blue">
              <div className="icon">
                {/* <i className="bi bi-house-door" /> Bootstrap house door icon */}
                <i className="bi bi-moisture" /> {/* Bootstrap water droplet icon */}
              </div>
              <h4 className="title">
              <Link to='/IT-1'>SAP Datasphere (formerly DWC)</Link>
              </h4>
              {/* <p className="description">
                Experts in hydrogeological services and groundwater assessments.
              </p> */}
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
              <Link to='/IT-2'>SAP Analytics Cloud (SAC)</Link>
              </h4>
              {/* <p className="description">
                Leading IT services provider, for seamless digital transformation.
              </p> */}
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
              <Link to='/IT-4'>SAP S/4 Hana - Embedded Analytics</Link>
              </h4>
              {/* <p className="description">
                Cutting-edge instruments for precise data collection and analysis.
              </p> */}
            </div>
          </div>
          
        </div>
      </div>

     
    </section>
    <br/>
      <div className="section-title">
                            <h2>Focus</h2>
                            <p>
                            "Our company stands out with its state-of-the-art technology, 
                            ensuring precision in data collection and analysis. We pride 
                            ourselves on expert consultations, timely project delivery, 
                            and a commitment to sustainable practices, making us the trusted 
                            choice for geoscientific solutions."
                            </p>
                        </div>
                        <br/>
                        <br/>
                        

    <FooterComponent />
  </div>
  )
}

export default ItSap4