import React from 'react'
import HeadComponent from '../HeadComponent'
import FooterComponent from '../FooterComponent'

import ContactForm from './ContactReact'
import { Link } from 'react-router-dom'


const ContactComponent = () => {
  return (
    <div className="Contact">
        <>
        <HeadComponent/>
  <main id="main">
    {/* ======= Contact Section ======= */}
    <section className="breadcrumbs">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h2>Contact</h2>
          <ol>
            <li>
              <Link to="/">Home </Link> 
            </li>
            <li>Contact</li>
          </ol>
        </div>
      </div>
    </section>
    
    <section
      className="contact"
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-duration={500}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-md-12">
                <div className="info-box">
                  <i className="bx bx-map" />
                  <h3>Address</h3>
                  <p>Plot No. 44, Chhatrapati Nagar , 
                                    Wardha Road , 
                                    Nagpur - 440 015 <br/>
                                    
                                    Maharashtra (India) <br />
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box">
                  <i className="bx bx-envelope" />
                  <h3>Email Us</h3>
                  <p>
                  aspcspl22@gmail.com<br/>
                  skc@aspcspl.com<br/>
                  pravin@aspcspl.com<br/>
                  
                  
                  
                  </p>
                </div>
                <div className="info-box">
                 
                  <h3>Support</h3>
                  <p>
                  support@aspcspl.com
          
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box">
                  <i className="bx bx-phone-call" />
                  <h3>Call Us</h3>
                  <br/>
                  <p>
                  +91 7972657590 


                    <br />
                    +91  8830763438
                  </p>
                </div>
                <div className="info-box">
                 
                  <h3>Accounts</h3>
                  <p>
                  accounts@aspcspl.com<br/>
          
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                
              </div>
            </div>
          </div>
          <div className="col-lg-6">
          <ContactForm/>
          
          </div>
        </div>
      </div>
    </section>
  </main>
  <FooterComponent/>
</>

    </div>
  )
}

export default ContactComponent