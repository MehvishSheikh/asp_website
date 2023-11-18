import React from 'react'
import FooterComponent from '../FooterComponent'
import HeadComponent from '../HeadComponent'
// import {Button,Card,Row,Col} from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

const It_homepage = () => {
    return (
        // <div className='itservices'>
        //     <HeadComponent />
        //     <br />
        //     <br />
        //     <br />
        //     <br />
        //     <Row>
        //         {/* First Card */}
        //         <Col md={6}>
        //             <Card style={{ color: "00h" }}>
        //                 <Card.Body>
        //                     <Card.Title>WE TURN DATA <br />
        //                         INTO INFORMATION</Card.Title>
        //                     <Card.Img src="assets\img\zp1.jpeg"></Card.Img>
        //                     <Card.Text>
        //                         True to our motto
        //                         “PROVIDING SOLUTIONS WITH PASSION ”<br />
        //                         We create sustainable, individual solutions and accompany <br />
        //                         you in the implementation of high-quality information<br /> systems around  SAP ANALYTICS.
        //                     </Card.Text>
        //                     <Button>View More</Button>
        //                 </Card.Body>
        //                 {/* <Image src="path/to/your/image.jpg" alt="Card Image" /> */}

        //             </Card>
        //         </Col>
        //         <Col>

        //             <Card style={{ color: "00h" }}>
        //                 <Card.Body>
        //                     <div className="col-lg-4">
        //                         <Card.Text>
        //                             <h3 className="sidebar-title">Categories</h3>
        //                             <div className="sidebar-item categories">
        //                                 <ul>
        //                                     <li>
        //                                         <Link to="/IT-1">

        //                                             <span>SAP Datasphere</span> <i className="bi bi-chevron-down" />

        //                                         </Link>
        //                                     </li>
        //                                     <li>
        //                                         <Link to="/IT-2">

        //                                             <span>SAP Analytics</span> <i className="bi bi-chevron-down" />

        //                                         </Link>
        //                                     </li>
        //                                     <li>
        //                                         <Link to="/IT-3">

        //                                             <span>SAP S/4 HANA</span> <i className="bi bi-chevron-down" />

        //                                         </Link>
        //                                     </li>
        //                                     <li>
        //                                         <Link to="/IT-4">

        //                                             <span>SAP Architectural Planning</span> <i className="bi bi-chevron-down" />

        //                                         </Link>

        //                                     </li>
        //                                 </ul>
        //                             </div>
        //                         </Card.Text>
        //                     </div>

        //                 </Card.Body>
        //                 {/* <Image src="path/to/your/image.jpg" alt="Card Image" /> */}

        //             </Card>
        //         </Col>
        //     </Row>
        //     <br />
        //     <br />
        //     <br />
        //     <div className="container">
        //         <div className="section-title">
        //             <h2>Services</h2>

        //         </div>
        //     </div>
        //     <section className="services">
        //         <div className="container">
        //             <div className="row">
        //                 <div
        //                     className="col-md-6 col-lg-3 d-flex align-items-stretch"
        //                     data-aos="fade-up"
        //                 >
        //                     <div className="icon-box icon-box-blue">
        //                         <div className="icon">
        //                             {/* <i className="bi bi-house-door" /> Bootstrap house door icon */}
        //                             <i className="bi bi-moisture" /> {/* Bootstrap water droplet icon */}
        //                         </div>
        //                         <h4 className="title">
        //                             <a href="">SAP Analytics Implementation Consulting </a>
        //                         </h4>
        //                         {/* <p className="description">
                                    
        //                             </p> */}
        //                     </div>
        //                 </div>
        //                 <div
        //                     className="col-md-6 col-lg-3 d-flex align-items-stretch"
        //                     data-aos="fade-up"
        //                     data-aos-delay={100}
        //                 >
        //                     <div className="icon-box icon-box-pink">
        //                         <div className="icon">
        //                             <i className="bi bi-pc-display" />
        //                         </div>
        //                         <h4 className="title">
        //                             <a href="">SAP Analytics Strategy Consulting</a>
        //                         </h4>

        //                     </div>
        //                 </div>
        //                 <div
        //                     className="col-md-6 col-lg-3 d-flex align-items-stretch"
        //                     data-aos="fade-up"
        //                     data-aos-delay={200}
        //                 >
        //                     <div className="icon-box icon-box-green">
        //                         <div className="icon">
        //                             <i className="bi bi-robot" />
        //                         </div>
        //                         <h4 className="title">
        //                             <a href="">SAP Analytics Process Consulting</a>
        //                         </h4>
        //                         {/* <p className="description">
        //                             Cutting-edge instruments for precise data collection and analysis.
                                    
        //                             </p> */}
        //                     </div>
        //                 </div>
        //                 {/* <div
        //                         className="col-md-6 col-lg-3 d-flex align-items-stretch"
        //                         data-aos="fade-up"
        //                         data-aos-delay={200}
        //                     >
        //                         <div className="icon-box icon-box-cyan">
        //                             <div className="icon">
        //                                 <i className="bi bi-globe" />
        //                             </div>
        //                             <h4 className="title">
        //                                 <a href="">Other Services</a>
        //                             </h4>
        //                             <p className="description">
        //                             Comprehensive services tailored to diverse project needs, ensuring optimal outcomes and client satisfaction.
        //                             </p>
        //                         </div>
        //                     </div> */}
        //             </div>
        //         </div>
        //     </section>

        //     <section className="features">
        //         <div className="container">
        //             <div className="section-title">
        //                 <h2>Focus</h2>
        //                 <p>
        //                     In order to meet the challenges of the constantly changing SAP BI landscape, we as ZPARTNER have set ourselves priorities that we are convinced will play a major role in the future. All ZPARTNERs work internally on one of these focal points and build up the corresponding know-how so that we can use this in the future as part of our customer projects.
        //                 </p>
        //             </div>

        //             <div className="row" data-aos="fade-up">
        //                 <div className="col-md-5">
        //                     <img src="assets\img\zp2.jpg" className="img-fluid" alt="" />
        //                 </div>
        //                 <div className="col-md-7 pt-4">
        //                     <h3>
        //                         Technology
        //                     </h3>
        //                     {/* <p className="fst-italic">
        //                         Technology
        //                          </p> */}
        //                     <ul>
        //                         <li>
        //                             <i className="bi bi-check" /> SAP BW on/4 HANA

        //                         </li>
        //                         <li>
        //                             <i className="bi bi-check" /> SAP Analytics Cloud (SAC) Reporting & Planning</li>
        //                         <li>
        //                             <i className="bi bi-check" /> SAP Datasphere</li>
        //                         <li>
        //                             <i className="bi bi-check" /> SAP Data Warehouse Cloud (DWC)</li>
        //                         <li>
        //                             <i className="bi bi-check" /> S4/HANA Reporting & Planning</li>
        //                         <li>
        //                             <i className="bi bi-check" /> SAP Data Intelligence</li>
        //                         <li>
        //                             <i className="bi bi-check" /> SAP BI IP & BPC Embedded</li>
        //                         <li>
        //                             <i className="bi bi-check" /> HANA Native Reproduction</li>






        //                     </ul>
        //                 </div>
        //             </div>
        //             <div className="row" data-aos="fade-up">
        //                 <div className="col-md-5 order-1 order-md-2">
        //                     <img src="assets\img\zp2.jpg" className="img-fluid" alt="" />
        //                 </div>
        //                 {/* <div className="col-md-7 pt-4"></div> */}
        //                 <div className="col-md-7 pt-4">
        //                     <h3>Lifecycle Management</h3>

        //                     <li> <i className="bi bi-check" /> SAP Analytics Project Management</li>
        //                     <li> <i className="bi bi-check" /> SAP Analytics Performance Optimization</li>
        //                     <li> <i className="bi bi-check" /> SAP Analytics Development Guidelines Processes</li>
        //                     <li> <i className="bi bi-check" /> SAP Analytics documentation</li>
        //                     <li> <i className="bi bi-check" /> SAP Analytics Housekeeping</li>
        //                     {/* <p className="fst-italic">
        //                         From precise data analysis to advanced mapping, our services are designed to enhance decision-making 
        //                             processes and drive sustainable outcomes. 
        //                         </p>
        //                         <p>
        //                         With a dedicated team of 
        //                             professionals, we are committed to delivering exceptional results, 
        //                             ensuring client satisfaction, and contributing positively to projects 
        //                             of all scales.
        //                         </p> */}


        //                 </div>
        //             </div>
        //             <div className="row" data-aos="fade-up">
        //                 <div className="col-md-5">
        //                     <img src="assets\img\zp2.jpg" className="img-fluid" alt="" />
        //                 </div>
        //                 <div className="col-md-7 pt-5">
        //                     <h3>
        //                         Innovation
        //                     </h3>
        //                     {/* <p>
        //                         These cutting-edge tools enable accurate geoscientific research 
        //                             and efficient water resource management.Our instruments guarantee
        //                             precision, reliability, and efficiency.
        //                         </p> */}
        //                     <ul>
        //                         <li>
        //                             <i className="bi bi-check" /> Tailor-made solutions (Web Dynpro, UI5, ABAP 00)

        //                         </li>
        //                         <li>
        //                             <i className="bi bi-check" /> SAC Application Designer

        //                         </li>
        //                         <li>
        //                             <i className="bi bi-check" /> KPI definition and integration


        //                         </li>
        //                         <li>
        //                             <i className="bi bi-check" /> Integration of marketing data
        //                         </li>

        //                         <li>
        //                             <i className="bi bi-check" /> Integration of social media data
        //                         </li>
        //                     </ul>
        //                 </div>
        //             </div>

        //         </div>
        //     </section>
        //     <br />
        //     <br />
        //     <br />
        //     <FooterComponent />
        // </div>
      <div>
        <HeadComponent />
        <main id="main">
    {/* ======= Blog Section ======= */}
    <section className="breadcrumbs">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h2> <b>IT-Service</b></h2>
          <ol>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>Blog</li>
          </ol>
        </div>
      </div>
    </section>
    {/* End Blog Section */}
    {/* ======= Blog Section ======= */}
    <section id="blog" className="blog">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-8 entries">
            <article className="entry">
              <div className="entry-img">
                <img
                  src="assets/img/blog/blog-1.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <h2 className="entry-title">
                <a href="blog-single.html">
                  Dolorum optio tempore voluptas dignissimos cumque fuga qui
                  quibusdam quia
                </a>
              </h2>
              <div className="entry-meta">
                <ul>
                  <li className="d-flex align-items-center">
                    <i className="bi bi-person" />{" "}
                    <a href="blog-single.html">John Doe</a>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="bi bi-clock" />{" "}
                    <a href="blog-single.html">
                      <time dateTime="2020-01-01">Jan 1, 2020</time>
                    </a>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="bi bi-chat-dots" />{" "}
                    <a href="blog-single.html">12 Comments</a>
                  </li>
                </ul>
              </div>
              <div className="entry-content">
                <p>
                  Similique neque nam consequuntur ad non maxime aliquam quas.
                  Quibusdam animi praesentium. Aliquam et laboriosam eius aut
                  nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est
                  ea dolorem doloremque deleniti aperiam unde soluta. Est cum et
                  quod quos aut ut et sit sunt. Voluptate porro consequatur
                  assumenda perferendis dolore.
                </p>
                <div className="read-more">
                  <a href="blog-single.html">Read More</a>
                </div>
              </div>
            </article>
            {/* End blog entry */}
            <article className="entry">
              <div className="entry-img">
                <img
                  src="assets/img/blog/blog-2.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <h2 className="entry-title">
                <a href="blog-single.html">
                  Nisi magni odit consequatur autem nulla dolorem
                </a>
              </h2>
              <div className="entry-meta">
                <ul>
                  <li className="d-flex align-items-center">
                    <i className="bi bi-person" />{" "}
                    <a href="blog-single.html">John Doe</a>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="bi bi-clock" />{" "}
                    <a href="blog-single.html">
                      <time dateTime="2020-01-01">Jan 1, 2020</time>
                    </a>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="bi bi-chat-dots" />{" "}
                    <a href="blog-single.html">12 Comments</a>
                  </li>
                </ul>
              </div>
              <div className="entry-content">
                <p>
                  Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint
                  ullam quis illum voluptatum et. Quo libero rerum voluptatem
                  pariatur nam. Ad impedit qui officiis est in non aliquid
                  veniam laborum. Id ipsum qui aut. Sit aliquam et quia
                  molestias laboriosam. Tempora nam odit omnis eum corrupti qui
                  aliquid excepturi molestiae. Facilis et sint quos sed
                  voluptas. Maxime sed tempore enim omnis non alias odio quos
                  distinctio.
                </p>
                <div className="read-more">
                  <a href="blog-single.html">Read More</a>
                </div>
              </div>
            </article>
            {/* End blog entry */}
            <article className="entry">
              <div className="entry-img">
                <img
                  src="assets/img/blog/blog-3.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <h2 className="entry-title">
                <a href="blog-single.html">
                  Possimus soluta ut id suscipit ea ut. In quo quia et soluta
                  libero sit sint.
                </a>
              </h2>
              <div className="entry-meta">
                <ul>
                  <li className="d-flex align-items-center">
                    <i className="bi bi-person" />{" "}
                    <a href="blog-single.html">John Doe</a>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="bi bi-clock" />{" "}
                    <a href="blog-single.html">
                      <time dateTime="2020-01-01">Jan 1, 2020</time>
                    </a>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="bi bi-chat-dots" />{" "}
                    <a href="blog-single.html">12 Comments</a>
                  </li>
                </ul>
              </div>
              <div className="entry-content">
                <p>
                  Aut iste neque ut illum qui perspiciatis similique recusandae
                  non. Fugit autem dolorem labore omnis et. Eum temporibus
                  fugiat voluptate enim tenetur sunt omnis. Doloremque est saepe
                  laborum aut. Ipsa cupiditate ex harum at recusandae nesciunt.
                  Ut dolores velit.
                </p>
                <div className="read-more">
                  <a href="blog-single.html">Read More</a>
                </div>
              </div>
            </article>
            {/* End blog entry */}
            <article className="entry">
              <div className="entry-img">
                <img
                  src="assets/img/blog/blog-4.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <h2 className="entry-title">
                <a href="blog-single.html">
                  Non rem rerum nam cum quo minus. Dolor distinctio deleniti
                  explicabo eius exercitationem.
                </a>
              </h2>
              <div className="entry-meta">
                <ul>
                  <li className="d-flex align-items-center">
                    <i className="bi bi-person" />{" "}
                    <a href="blog-single.html">John Doe</a>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="bi bi-clock" />{" "}
                    <a href="blog-single.html">
                      <time dateTime="2020-01-01">Jan 1, 2020</time>
                    </a>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="bi bi-chat-dots" />{" "}
                    <a href="blog-single.html">12 Comments</a>
                  </li>
                </ul>
              </div>
              <div className="entry-content">
                <p>
                  Aspernatur rerum perferendis et sint. Voluptates cupiditate
                  voluptas atque quae. Rem veritatis rerum enim et autem. Saepe
                  atque cum eligendi eaque iste omnis a qui. Quia sed sunt. Ea
                  asperiores expedita et et delectus voluptates rerum. Id saepe
                  ut itaque quod qui voluptas nobis porro rerum. Quam quia
                  nesciunt qui aut est non omnis. Inventore occaecati et quaerat
                  magni itaque nam voluptas. Voluptatem ducimus sint id earum ut
                  nesciunt sed corrupti nemo.
                </p>
                <div className="read-more">
                  <a href="blog-single.html">Read More</a>
                </div>
              </div>
            </article>
            {/* End blog entry */}
            <div className="blog-pagination">
              <ul className="justify-content-center">
                <li>
                  <a href="#">1</a>
                </li>
                <li className="active">
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
              </ul>
            </div>
          </div>
          {/* End blog entries list */}
          <div className="col-lg-4">
            <div className="sidebar">
              <h3 className="sidebar-title">Search</h3>
              <div className="sidebar-item search-form">
                <form action="">
                  <input type="text" />
                  <button type="submit">
                    <i className="bi bi-search" />
                  </button>
                </form>
              </div>
              {/* End sidebar search formn*/}
              <h3 className="sidebar-title">Categories</h3>
              <div className="sidebar-item categories">
                <ul>
                  <li>
                    <a href="#">
                      General <span>(25)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Lifestyle <span>(12)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Travel <span>(5)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Design <span>(22)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Creative <span>(8)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Educaion <span>(14)</span>
                    </a>
                  </li>
                </ul>
              </div>
              {/* End sidebar categories*/}
              <h3 className="sidebar-title">Recent Posts</h3>
              <div className="sidebar-item recent-posts">
                <div className="post-item clearfix">
                  <img src="assets/img/blog/blog-recent-1.jpg" alt="" />
                  <h4>
                    <a href="blog-single.html">
                      Nihil blanditiis at in nihil autem
                    </a>
                  </h4>
                  <time dateTime="2020-01-01">Jan 1, 2020</time>
                </div>
                <div className="post-item clearfix">
                  <img src="assets/img/blog/blog-recent-2.jpg" alt="" />
                  <h4>
                    <a href="blog-single.html">Quidem autem et impedit</a>
                  </h4>
                  <time dateTime="2020-01-01">Jan 1, 2020</time>
                </div>
                <div className="post-item clearfix">
                  <img src="assets/img/blog/blog-recent-3.jpg" alt="" />
                  <h4>
                    <a href="blog-single.html">
                      Id quia et et ut maxime similique occaecati ut
                    </a>
                  </h4>
                  <time dateTime="2020-01-01">Jan 1, 2020</time>
                </div>
                <div className="post-item clearfix">
                  <img src="assets/img/blog/blog-recent-4.jpg" alt="" />
                  <h4>
                    <a href="blog-single.html">
                      Laborum corporis quo dara net para
                    </a>
                  </h4>
                  <time dateTime="2020-01-01">Jan 1, 2020</time>
                </div>
                <div className="post-item clearfix">
                  <img src="assets/img/blog/blog-recent-5.jpg" alt="" />
                  <h4>
                    <a href="blog-single.html">
                      Et dolores corrupti quae illo quod dolor
                    </a>
                  </h4>
                  <time dateTime="2020-01-01">Jan 1, 2020</time>
                </div>
              </div>
              {/* End sidebar recent posts*/}
              <h3 className="sidebar-title">Tags</h3>
              <div className="sidebar-item tags">
                <ul>
                  <li>
                    <a href="#">App</a>
                  </li>
                  <li>
                    <a href="#">IT</a>
                  </li>
                  <li>
                    <a href="#">Business</a>
                  </li>
                  <li>
                    <a href="#">Mac</a>
                  </li>
                  <li>
                    <a href="#">Design</a>
                  </li>
                  <li>
                    <a href="#">Office</a>
                  </li>
                  <li>
                    <a href="#">Creative</a>
                  </li>
                  <li>
                    <a href="#">Studio</a>
                  </li>
                  <li>
                    <a href="#">Smart</a>
                  </li>
                  <li>
                    <a href="#">Tips</a>
                  </li>
                  <li>
                    <a href="#">Marketing</a>
                  </li>
                </ul>
              </div>
              {/* End sidebar tags*/}
            </div>
            {/* End sidebar */}
          </div>
          {/* End blog sidebar */}
        </div>
      </div>
    </section>
    {/* End Blog Section */}
  </main>
          <FooterComponent />
          </div>

    )
}

export default It_homepage