import React from 'react';
import { Link } from 'react-router-dom';



const HeadComponent = () => {
    return (
        <div className='HeadComponent'>
            <header
                id="header"
                className="fixed-top d-flex align-items-center header-transparent"
            >
                <div className="container d-flex justify-content-between align-items-center">
                    <div className="logo">
                        <h1 className="text-light">
                            <a href="index.html">
                                <span> <h1><b>ASP</b></h1></span>
                            </a>
                        </h1>
                        {/* Uncomment below if you prefer to use an image logo */}
                        {/* <a href="index.html"><img src="assets/img/about.jpg" alt="" class="img-fluid"> </a> */}
                    </div>
                    <nav id="navbar" className="navbar">
                        <ul>
                            <li className="active ">
                                
                                    <Link to="/"> Home </Link>
                                
                            </li>
                            <li>
                                <Link to="/About"> About </Link>
                            </li>

                            <li className="dropdown" >
                                <Link to="/IT-Services">

                                    <span>IT Services</span> <i className="bi bi-chevron-down" />

                                </Link>
                                <ul>
                                    <li>
                                        <a href="#">Services and Priorities</a>
                                    </li>
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
                            </li>
                            <li>
                                <Link to="/HydroServices" > Hydrogeological Services </Link>
                            </li>
                            <li>
                                <Link to="/Instruments" >Instruments</Link>
                            </li>



                            <li>
                                <Link to="/Portfolio" >Blog</Link>
                            </li>


                            <li>
                                <Link to="/Contact">Contact Us</Link>
                            </li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle" />
                    </nav>
                    {/* .navbar */}
                </div>
            </header>

        </div>
    )
}

export default HeadComponent
