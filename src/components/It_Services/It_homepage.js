import React from 'react'
import FooterComponent from '../FooterComponent'
import HeadComponent from '../HeadComponent'
import {Button,Card,Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'

const It_homepage = () => {
  return (
    <div className='itservices'>
        <HeadComponent />
<br/>
<br/>
<br/>
<br/>
<Row>
        {/* First Card */}
        <Col md={6}>
<Card style={{color:"00h"}}>
<Card.Body>
          <Card.Title>WE TURN DATA <br/>
INTO INFORMATION</Card.Title>
<Card.Img src="assets\img\zp1.jpeg"></Card.Img>
          <Card.Text>
          True to our motto
“PROVIDING SOLUTIONS WITH PASSION ”<br/>
We create sustainable, individual solutions and accompany <br/>
 you in the implementation of high-quality information<br/> systems around  SAP ANALYTICS. 
          </Card.Text>
          <Button>View More</Button>
        </Card.Body>
        {/* <Image src="path/to/your/image.jpg" alt="Card Image" /> */}

</Card>
</Col>
<Col>

<Card style={{color:"00h"}}>
<Card.Body>
<div className="col-lg-4">
          <Card.Text>
          <h3 className="sidebar-title">Categories</h3>
              <div className="sidebar-item categories">
                <ul>
                  <li>
                  <Link to="/IT-1">
                            
                            <span>SAP Datasphere</span> <i className="bi bi-chevron-down" />
                    
                        </Link>
                  </li>
                  <li>
                  <Link to="/IT-2">
                            
                            <span>SAP Analytics</span> <i className="bi bi-chevron-down" />
                    
                        </Link>
                  </li>
                  <li>
                  <Link to="/IT-3">
                            
                            <span>SAP S/4 HANA</span> <i className="bi bi-chevron-down" />
                    
                        </Link>
                  </li>
                  <li>
                  <Link to="/IT-4">
                            
                            <span>SAP Architectural Planning</span> <i className="bi bi-chevron-down" />
                    
                        </Link>
            
                  </li>
                </ul>
              </div>
          </Card.Text>
          </div>
          
        </Card.Body>
        {/* <Image src="path/to/your/image.jpg" alt="Card Image" /> */}

</Card>
</Col>
</Row>
<br/>
<br/>
<br/>
<div className="container">
                    <div className="section-title">
                            <h2>Services</h2>
                            
                        </div>
                        </div>
<section className="services">
                    <div className="container">
                        <div className="row">
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
                                        <a href="">SAP Analytics Implementation Consulting </a>
                                    </h4>
                                    {/* <p className="description">
                                    
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
                                        <a href="">SAP Analytics Strategy Consulting</a>
                                    </h4>
                                    
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
                                        <a href="">SAP Analytics Process Consulting</a>
                                    </h4>
                                    {/* <p className="description">
                                    Cutting-edge instruments for precise data collection and analysis.
                                    
                                    </p> */}
                                </div>
                            </div>
                            {/* <div
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
                            </div> */}
                        </div>
                    </div>
                </section>

<section className="features">
                    <div className="container">
                    <div className="section-title">
                            <h2>Focus</h2>
                            <p>
                            In order to meet the challenges of the constantly changing SAP BI landscape, we as ZPARTNER have set ourselves priorities that we are convinced will play a major role in the future. All ZPARTNERs work internally on one of these focal points and build up the corresponding know-how so that we can use this in the future as part of our customer projects.
                            </p>
                        </div>
                        
                        <div className="row" data-aos="fade-up">
                            <div className="col-md-5">
                                <img src="assets\img\zp2.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-md-7 pt-4">
                                <h3>
                                    Technology
                                </h3>
                                {/* <p className="fst-italic">
                                Technology
                                 </p> */}
                                <ul>
                                    <li>
                                        <i className="bi bi-check" />
SAP BW on/4 HANA

                                    </li>
                                    <li>
                                        <i className="bi bi-check" /> SAP Analytics Cloud (SAC) Reporting & Planning</li>
                                        <li>
                                        <i className="bi bi-check" /> SAP Datasphere</li>
                                        <li>
                                        <i className="bi bi-check" /> SAP Data Warehouse Cloud (DWC)</li>
                                        <li>
                                        <i className="bi bi-check" /> S4/HANA Reporting & Planning</li>
                                        <li>
                                        <i className="bi bi-check" /> SAP Data Intelligence</li>
                                        <li>
                                        <i className="bi bi-check" /> SAP BI IP & BPC Embedded</li>
                                        <li>
                                        <i className="bi bi-check" /> HANA Native Reproduction</li>






                                </ul>
                            </div>
                        </div>
                        <div className="row" data-aos="fade-up">
                            <div className="col-md-5 order-1 order-md-2">
                                <img src="assets\img\zp2.jpg" className="img-fluid" alt="" />
                            </div>
                            {/* <div className="col-md-7 pt-4"></div> */}
                            <div className="col-md-7 pt-4">
                                <h3>Lifecycle Management</h3>

                                <li> <i className="bi bi-check" /> SAP Analytics Project Management</li>
                                <li> <i className="bi bi-check" /> SAP Analytics Performance Optimization</li>
                                <li> <i className="bi bi-check" /> SAP Analytics Development Guidelines Processes</li>
                                <li> <i className="bi bi-check" /> SAP Analytics documentation</li>
                                <li> <i className="bi bi-check" /> SAP Analytics Housekeeping</li>
                                {/* <p className="fst-italic">
                                From precise data analysis to advanced mapping, our services are designed to enhance decision-making 
                                    processes and drive sustainable outcomes. 
                                </p>
                                <p>
                                With a dedicated team of 
                                    professionals, we are committed to delivering exceptional results, 
                                    ensuring client satisfaction, and contributing positively to projects 
                                    of all scales.
                                </p> */}


                            </div>
                        </div>
                        <div className="row" data-aos="fade-up">
                            <div className="col-md-5">
                                <img src="assets\img\zp2.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-md-7 pt-5">
                                <h3>
                                    Innovation
                                </h3>
                                {/* <p>
                                These cutting-edge tools enable accurate geoscientific research 
                                    and efficient water resource management.Our instruments guarantee
                                    precision, reliability, and efficiency.
                                </p> */}
                                <ul>
                                    <li>
                                        <i className="bi bi-check" /> Tailor-made solutions (Web Dynpro, UI5, ABAP 00)

                                    </li>
                                    <li>
                                        <i className="bi bi-check" /> SAC Application Designer

                                    </li>
                                    <li>
                                        <i className="bi bi-check" /> KPI definition and integration


                                    </li>
                                    <li>
                                        <i className="bi bi-check" /> Integration of marketing data
                                    </li>

                                    <li>
                                        <i className="bi bi-check" /> Integration of social media data
                                    </li>
                                </ul>
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