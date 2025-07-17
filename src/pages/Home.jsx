import React from 'react'
import Header from '../component/UI/Header/Header'
import ServicesSection from '../component/UI/SERVICES/ServicesSection'
import RoomChoice from '../component/UI/RoomChoice/RoomChoice'

const Home = () => {
    return (
        <main>
            <Header />
            <RoomChoice />
            <ServicesSection />
        </main>
    )
}

export default Home
