import React from 'react'
import WelcomeSection from '../Components/WelcomeSection'
import Testimonials from '../Components/Testimonials'
import Ourservices from '../Components/Ourservices'
import Ourmenu from '../Components/Ourmenu'
import Map from '../Components/Map'
import Footer from '../Components/Footer'


function Home() {
    return (
        <>
            <WelcomeSection />
            <Testimonials />
            <Ourservices />
            <Ourmenu />
        </>
    )
}

export default Home