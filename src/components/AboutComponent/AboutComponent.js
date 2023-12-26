import React from 'react'
import FooterComponent from '../FooterComponent'
import HeadComponent from '../HeadComponent'
import { Link } from 'react-router-dom'

const AboutComponent = () => {
  return (
    <div className="About">
        <>
      <HeadComponent/>
     
  <main id="main">
   
    <section className="breadcrumbs">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h2>About Us</h2>
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>About Us</li>
          </ol>
        </div>
      </div>
    </section>
   
    <section className="about" data-aos="fade-up">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img src="assets\img\about.jpg" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <br/>
            <br/>
            <h3>
            Welcome to ASP Consultancy Services
           

            </h3>
            <br/>
            
            <p className="fst-italic">
            
            
           
            
  

            </p>
            <ul>
              <li>
                <i className="bi bi-check2-circle" /> At ASP Consultancy Services, we specialize in two major categories:
             Hydrogeological Services and Information Technology (IT) Services. 
             Our commitment to excellence, precision and innovation sets us 
             apart as a leading consultancy firm dedicated to delivering impactful solutions.
              </li>
              <br/>
              <li>
                <i className="bi bi-check2-circle" /> At ASP Consultancy Services, we are more than consultants; we are
                 partners in your success. Our commitment to client satisfaction, sustainability, and technological 
                 excellence defines who we are. Join us on a journey of innovation and responsible business practices.

              </li>
             
            </ul>
            <p>
            </p>
          </div>
        </div>
      </div>
    </section>

    <section
                className="why-us section-bg1"
                data-aos="fade-up"
                date-aos-delay={200}
            >
                <div className="container">
                    <div className="row">

                        <div className="col-lg-12 d-flex flex-column justify-content-center p-5">
                            <div className="icon-box">
                                <div className="icon">
                                    <i className="bi bi-moisture" />
                                </div>
                                <h2 className="title">
                                    <Link to="/HydroServices">Hydrogeological Services</Link>
                                </h2>
                                <br/>
                                <p className="description">
                                  <div className="about" data-aos="fade-up">
                                <ul>
              <li>
                <i className="bi bi-check2-circle" /> <b>
 Groundwater Studies for Industries , Infrastructure and Mining Projects : </b>
Harnessing the power of sustainable water resources, we conduct comprehensive hydrogeological studies to support industries and mining projects. Our expertise ensures effective water management for optimal project outcomes.
              </li>
              
              <li>
                <i className="bi bi-check2-circle" /> 
                <b>Rain-Water Harvesting Plan and Structures : </b>
We design and implement rainwater harvesting plans and structures to maximize water utilization and conservation. Our solutions promote environmental responsibility while meeting the unique needs of each project.

              </li>
              <li>
                <i className="bi bi-check2-circle" /> 
                <b>Geophysical Survey for Groundwater Exploration : </b>
Using advanced geophysical survey methods, we explore groundwater resources to provide valuable insights for sustainable development. Our commitment to precision and reliability ensures informed decision-making in groundwater exploration.
</li>
              </ul>
              </div>

                                </p>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section
                className="why-us section-bg1"
                data-aos="fade-up"
                date-aos-delay={200}
            >
                <div className="container">
                    <div className="row">

                        <div className="col-lg-12 d-flex flex-column justify-content-center p-5">
                            <div className="icon-box">
                                <div className="icon">
                                    <i className="bi bi-pc-display" />
                                </div>
                                <h2 className="title">
                                    <Link to="/HydroServices">IT Services</Link>
                                </h2>
                                <br/>
                                <p className="description">
                                  <p>Leveraging cutting-edge technology, our IT services focus on delivering strategic solutions for businesses. With a dedicated team, precise data analysis, and advanced mapping capabilities, we contribute positively to projects of all scales.</p>
                                  <div className="about" data-aos="fade-up">
                                <ul>
              <li>
                <i className="bi bi-check2-circle" /> <b>
                SAP Datasphere:</b>Unlock the power of data with our SAP Datasphere services, driving efficiency and innovation in your business processes.

</li>
              
              <li>
                <i className="bi bi-check2-circle" /> 
                <b>Data Analytics:</b>
                Transform raw data into actionable insights through our SAP Analytics solutions, empowering you to make informed decisions.

              </li>
              <li>
                <i className="bi bi-check2-circle" /> 
                <b>SAP S/4 HANA Architectural Planning:</b>
                 Our expertise in SAP S/4 HANA ensures seamless architectural planning, optimizing your IT infrastructure for enhanced performance.
</li>
              </ul>
              </div>

                                </p>

                            </div>

                        </div>
                    </div>
                </div>
            </section>





    <section className="facts section-bg text-center" data-aos="fade-up">
    <p>  </p>
      <div className="container">
        <div className="row counters">
          <p>At ASP Consultancy Services, we are not just consultants; we are orchestrators of transformative solutions.<br/> 
            Join us on a journey where "Each project is a Canvas" and "Each solution is a Brushstroke that paints a picture of distinctive possibilities."</p>
          
        </div>
      </div>
    </section>
    <section className="testimonials" data-aos="fade-up">
      <div className="container">
        <div className="section-title">
          <h2>Testimonials</h2>
          <p>
          Our clients speak volumes about our exceptional services.
          Discover the testimonials that reflect our commitment 
          to excellence and client satisfaction.Exceptional team and
          outstanding services! The company's ability to solve complex challenges
          have greatly benefited our projects.
          </p>
          <p>
                {/* <i className="bx bxs-quote-alt-left quote-icon-left" /> */}
                " We encourage each of you to embrace challenges as opportunities,
                 innovate fearlessly, and foster a collaborative to achieve remarkable milestones."
                {/* <i className="bx bxs-quote-alt-right quote-icon-right" /> */}
              </p>
        </div>
        <div className="testimonials-carousel swiper">
          <div className="swiper-wrapper">
            <div className="testimonial-item swiper-slide">
              
              
            </div>
         
          </div>
          <div className="swiper-pagination" />
        </div>
      </div>
    </section>
    
  </main>
 
  <FooterComponent/>
  
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

export default AboutComponent