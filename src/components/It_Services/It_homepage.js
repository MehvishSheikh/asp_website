import React from 'react'
import FooterComponent from '../FooterComponent'
import HeadComponent from '../HeadComponent'

const It_homepage = () => {
  return (
    <div className='itservices'>
        <HeadComponent />
<br/>
<br/>
<br/>
<br/>

<section className="features">
                    <div className="container">
                    <div className="section-title">
                            <h2>Features</h2>
                            <p>
                            "Our company stands out with its state-of-the-art technology, 
                            ensuring precision in data collection and analysis. We pride 
                            ourselves on expert consultations, timely project delivery, 
                            and a commitment to sustainable practices, making us the trusted 
                            choice for geoscientific solutions."
                            </p>
                        </div>
                        
                        <div className="row" data-aos="fade-up">
                            <div className="col-md-5">
                                <img src="assets/img/features-1.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-md-7 pt-4">
                                <h3>
                                    Hydrogeological Services
                                </h3>
                                <p className="fst-italic">
                                We are one of the Accredited Institute by CGWA, Govt of India to carry out following.
                                 </p>
                                <ul>
                                    <li>
                                        <i className="bi bi-check" /> Impact Assessment/Comprehensive Hydrogeological Studies.
                                    </li>
                                    <li>
                                        <i className="bi bi-check" /> Groundwater Survey along with Rainwater Harvesting
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row" data-aos="fade-up">
                            <div className="col-md-5 order-1 order-md-2">
                                <img src="assets/img/features-2.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-md-7 pt-5 order-2 order-md-1">
                                <h3>IT Services</h3>
                                <p className="fst-italic">
                                From precise data analysis to advanced mapping, our services are designed to enhance decision-making 
                                    processes and drive sustainable outcomes. 
                                </p>
                                <p>
                                With a dedicated team of 
                                    professionals, we are committed to delivering exceptional results, 
                                    ensuring client satisfaction, and contributing positively to projects 
                                    of all scales.
                                </p>
                            </div>
                        </div>
                        <div className="row" data-aos="fade-up">
                            <div className="col-md-5">
                                <img src="assets/img/features-3.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-md-7 pt-5">
                                <h3>
                                    Instruments that we provide are:
                                </h3>
                                <p>
                                These cutting-edge tools enable accurate geoscientific research 
                                    and efficient water resource management.Our instruments guarantee
                                    precision, reliability, and efficiency.
                                </p>
                                <ul>
                                    <li>
                                        <i className="bi bi-check" /> Garmin’s Hand Held GPS (Global Positioning System)

                                    </li>
                                    <li>
                                        <i className="bi bi-check" /> DGPS (Differential Global Positioning System) – GNSS Survey

                                    </li>
                                    <li>
                                        <i className="bi bi-check" /> Resistivity Meter

                                    </li>
                                    <li>
                                        <i className="bi bi-check" /> Digital Water Level Recorder
                                    </li>
                                    <li>
                                        <i className="bi bi-check" /> And many more.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row" data-aos="fade-up">
                            <div className="col-md-5 order-1 order-md-2">
                                <img src="assets/img/features-4.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-md-7 pt-5 order-2 order-md-1">
                                <h3>
                                    Other Services
                                </h3>
                                <p className="fst-italic">
                                In addition to our advanced instruments, we offer a 
                                    comprehensive suite of services aimed at enhancing 
                                    geoscientific research and water resource management.
                                    
                                    
                                </p>
                                <p>
                                Our expert team provides tailored consultancy services,
                                    precise data analysis, geophysical surveys, and groundwater
                                    modeling to  to optimize processes. 
                                   
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
<br/>
<br/>
<br/>
       <FooterComponent />
    </div>
  )
}

export default It_homepage