import React from 'react'
import { Link } from 'react-router-dom'

const FooterComponent = () => {
    return (
        <div className='FooterComponent'>
            
            <footer
                id="footer"
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-duration={500}
            >

                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 footer-links">
                            
                           
                           
         
                                <h4>Useful Links</h4>
                                
                                <ul>
                                    <li>
                                        <i className="bx bx-chevron-right" /> <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" /> <Link to="/About">About us</Link>
                                    </li>                                   
                                    
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                <li>
                                        <i className="bx bx-chevron-right" />{" "}
                                        <Link to="/IT-Services">IT Services</Link>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" /> <Link to="/HydroServices">Hydrogeological Services</Link> 
                                    </li>
                                    
                                    <li>
                                        <i className="bx bx-chevron-right" />{" "}
                                        <Link to="/Instruments">Instruments</Link>
                                    </li>
                                    {/* <li>
                                        <i className="bx bx-chevron-right" /> <a href="#">Marketing</a>
                                    </li> */}
                                    {/* <li>
                                        <i className="bx bx-chevron-right" />{" "}
                                        <a href="#">Comming Soon</a>
                                    </li> */}
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-contact">
                            <Link to="/Contact"><h4>Contact Us</h4></Link>
                                <p>
                                    Plot No. 44, Chhatrapati Nagar , <br />
                                    Wardha Road , <br/>
                                    Nagpur - 440 015 <br/>
                                    

                                    <br />
                                    Maharashtra (India) <br />
                                    <br />
                                    <strong>Phone:</strong> +91 7972657590 / 8830763438
                                    <br />
                                    <strong>Email:</strong> aspcspl22@gmail.com
                                    <br />
                                </p>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-info">
                            <img src="assets\img\fimage.png" className="img-fluid" alt="" />
                            <br/>
                            <br/>
                                <Link to="/About">
                                <h3>About ASP</h3></Link>
                                <p>
                                    ASP Consultancy Services is your partner for success,seemlessly combining expertise and innovation to deliver enduring solutions that stand the test of time.
                                </p>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default FooterComponent