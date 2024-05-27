import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { GiHotMeal } from "react-icons/gi";

function Ourmenu() {

    const [info, setinfo] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/prod')
        .then(res => setinfo(res.data))

    }, [])
    
    return (
        <>

            <section id='ourmenu'>
                <div className='text-center  p-5 mt-5 '>
                    <GiHotMeal style={{ fontSize: '76px', color: '#F0B916' }} />
                    <h2>Our Menu</h2>
                </div>

                <div className="container">
                    <div className="row">
                        {
                            info.map((el) => {
                                return (
                                    <div className="col-12 col-md-6 d-flex justify-content-between mt-4">
                                        <div>
                                            <h5>{el.name}</h5>
                                            <p>{el.about}</p>
                                        </div>
                                        <div><p className='mt-4'>{el.price}</p></div>
                                    </div>
                                )
                            })
                        }
                        
                     

                    </div>
                    <div className='d-flex justify-content-center'><button className='menuButton'>See More</button></div>
                </div>


            </section>

        </>
    )
}

export default Ourmenu