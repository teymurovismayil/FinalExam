import React from 'react'
import { PiIceCream } from "react-icons/pi";

function Testimonials() {
    return (
        <>

            <section id="testimonials">
                <div className='text-center  p-5 mt-5 '>
                    <PiIceCream style={{ fontSize: '76px' }} />
                    <h2>Testimonials</h2>
                </div>

                <div className='container'>
                    <div className="row g-5">
                        <div className="col-12">
                           <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero incidunt molestiae, porro error cumque sed eius, ex est, aliquid reprehenderit perspiciatis ipsa eaque? Voluptatum fuga temporibus delectus itaque exercitationem quae.</h4>
                        </div>
                        <div className="col-12 d-flex justify-content-center">
                            <h3 className='artur'>Ted Chapman,<span style={{color:'#FFFFFF'}}>Client</span></h3>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Testimonials