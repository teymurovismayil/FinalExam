import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { TiThMenuOutline } from "react-icons/ti";

function NavBarSection() {
    return (
        <>

            <section id='navigator'>
                <div className="slogan">
                <h1>Special Dish.
                    By Chef Francis Smith</h1>
                </div>
                <div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-2 logo p-3">
                                <h2 className='logo__text'>Pulse</h2>
                                <span>.</span>
                            </div>
                            <div className="col-6">
                                <div className='list p-3'>
                                    <ul>
                                        <Link to='/'><li style={{ color: '#F0B916'}}>Home</li></Link>
                                        <li>About Us</li>
                                        <li>Restaurant</li>
                                        <li>News</li>
                                        <li>Contact</li>
                                        <Link to='/admin'><li>Admin Panel</li></Link>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-3 contact">
                                <p>
                                    <span>Reservations</span>
                                    <FaPhoneAlt style={{ color: '#FFFFFF' }} />
                                    <a href="#"> 652-345 3222 11</a>
                                </p>
                               
                            </div>
                            <div className="col d-flex align-items-center justify-content0center">
                            <TiThMenuOutline  className='menuIcon'/>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default NavBarSection