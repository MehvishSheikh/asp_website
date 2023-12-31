import React from 'react';
import { Link } from 'react-router-dom';

const MobileNav = () => {
  return (
    <div className="navbar-mobile">
      <div className="container d-flex justify-content-between align-items-center">
      <ul id="navbar" className="navbar">
       


        
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
                                        <Link to='/IT-0'>Services and Priorities</Link>
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
                                <Link to="/Contact">Contact Us</Link>
                            </li>
                       
            


      </ul>
    </div>
    </div>
  );
};

export default MobileNav;