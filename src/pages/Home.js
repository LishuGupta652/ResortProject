import React from 'react'
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";

const Home = () => {
    return (
        <>
            <Hero hero="defaultHero">
                <Banner title="Delhi Based Paying Guest" subtitle="Affordable Rooms Starting at 1999 per month">
                    <Link to="/rooms" className="btn-primary">
                        our rooms
                    </Link>
                </Banner>
            </Hero>     

            <FeaturedRooms/>
            <Services />
            
        </>
    )
}

export default Home
