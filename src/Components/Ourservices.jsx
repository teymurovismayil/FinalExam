import React from 'react'
import { GiHotMeal } from "react-icons/gi";


function Ourservices() {
    return (
        <>

            <section id='ourservices'>
                <div className='text-center  p-5 mt-5 '>
                    <GiHotMeal style={{ fontSize: '76px' , color:'#F0B916' }} />
                    <h2>Our Services</h2>
                </div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12 col-md-3 d-flex flex-column align-items-center" >
                            <GiHotMeal style={{ fontSize: '35px' , color:'#F0B916' }} />
                            <h3>Breakfast</h3>
                            <p>
                                In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum.
                            </p>
                        </div>
                        <div className="col-12 col-md-3 d-flex flex-column align-items-center">
                            <GiHotMeal style={{ fontSize: '35px' , color:'#F0B916' }} />
                            <h3>Brunch</h3>
                            <p>
                                Scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis.
                            </p>
                        </div>
                        <div className="col-12 col-md-3 d-flex flex-column align-items-center">
                            <GiHotMeal style={{ fontSize: '35px' , color:'#F0B916' }} />
                            <h3>Lunch</h3>
                            <p>
                                In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum.
                            </p>
                        </div>
                        <div className="col-12 col-md-3 d-flex flex-column align-items-center">
                            <GiHotMeal style={{ fontSize: '35px' , color:'#F0B916' }} />
                            <h3>Dinner</h3>
                            <p>
                                Aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendreri.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Ourservices