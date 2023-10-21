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
                        {/* <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
                    </div>
                    <nav id="navbar" className="navbar">
                        <ul>
                            <li>
                                <a className="active ">
                                    <Link to="/"> Home </Link>
                                </a>
                            </li>
                            <li>
                                <Link to="/About"> About </Link>
                            </li>
                            <li>
                                <Link to="/Services" > Services </Link>
                            </li>
                            <li>
                                <Link to="/Instruments" >Instruments</Link>
                            </li>
                            <li>
                                <Link to="/Portfolio" >Portfolio</Link>
                            </li>
                            <li>
                                <Link to="/Services" >Team</Link>
                            </li>

                            <li className="dropdown">
                                <a href="#">
                                    <span>Drop Down</span> <i className="bi bi-chevron-down" />
                                </a>
                                <ul>
                                    <li>
                                        <a href="#">Drop Down 1</a>
                                    </li>
                                    <li className="dropdown">
                                        <a href="#">
                                            <span>Deep Drop Down</span>{" "}
                                            <i className="bi bi-chevron-right" />
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="#">Deep Drop Down 1</a>
                                            </li>
                                            <li>
                                                <a href="#">Deep Drop Down 2</a>
                                            </li>
                                            <li>
                                                <a href="#">Deep Drop Down 3</a>
                                            </li>
                                            <li>
                                                <a href="#">Deep Drop Down 4</a>
                                            </li>
                                            <li>
                                                <a href="#">Deep Drop Down 5</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Drop Down 2</a>
                                    </li>
                                    <li>
                                        <a href="#">Drop Down 3</a>
                                    </li>
                                    <li>
                                        <a href="#">Drop Down 4</a>
                                    </li>
                                </ul>
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
