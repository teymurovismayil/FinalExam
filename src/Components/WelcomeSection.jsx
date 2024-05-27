import React from 'react'
import { IoCafeOutline } from "react-icons/io5";

function WelcomeSection() {
    return (
        <>
            <section id='welcome'>

                <div className='text-center  p-5 mt-5 '>
                    <IoCafeOutline style={{ fontSize: '76px' }} />
                    <h2>Welcome</h2>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <h3>2002</h3>
                            <p>
                                In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.
                            </p>
                        </div>
                        <div className="col-12 col-md-4">
                            <h3>2010</h3>
                            <p>
                                Stpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat. Maecenas sollicitudin est in libero pretium.
                            </p>
                        </div>
                        <div className="col-12 col-md-4">
                            <h3>2018</h3>
                            <p>
                                In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.
                            </p>
                        </div>
                        <div className='d-flex justify-content-center mt-4'>
                            <div className='imza'>
                                    <img src="https://preview.colorlib.com/theme/pulse/img/sign.png" alt="imza" />
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

export default WelcomeSection