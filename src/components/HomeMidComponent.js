import React from 'react'

const HomeMidComponent = () => {
    return (
        <div className='HomeMidComponent'>
            <main id="main">
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
                {/* ======= Features Section ======= */}
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
                                <img src="assets/img/features-1.svg" className="img-fluid" alt="" />
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
                                <img src="assets/img/features-2.svg" className="img-fluid" alt="" />
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
                                <img src="assets/img/features-3.svg" className="img-fluid" alt="" />
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
                                <img src="assets/img/features-4.svg" className="img-fluid" alt="" />
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
                {/* End Features Section */}
            </main>
        </div>
    )
}

export default HomeMidComponent