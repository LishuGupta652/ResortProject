import React, { Component } from 'react'
import Title from "./Title"
import { FaCocktail, FaHiking , FaShuttleVan ,FaBeer } from "react-icons/fa";

export default class Services extends Component {
    state = {
        services : [
            {
                icon: <FaCocktail/>,
                title: "Free Service", 
                info: "lorem ipsum lorem ipsum ipasu ipsumm loreim sicksa lo sackin"
            },
            {
                icon: <FaHiking/>,
                title: "Easy Booking", 
                info: "lorem ipsum lorem ipsum ipasu ipsumm loreim sicksa lo sackin"
            },
            {
                icon: <FaShuttleVan/>,
                title: "No Login", 
                info: "lorem ipsum lorem ipsum ipasu ipsumm loreim sicksa lo sackin"
            },
            {
                icon: <FaBeer/>,
                title: "Speedy Checkout", 
                info: "lorem ipsum lorem ipsum ipasu ipsumm loreim sicksa lo sackin"
            }
        ]
    }

    render() {
        return (
            <section className="services">
                <Title title="services"/>
                <div className="services-center">
                    {
                        this.state.services.map((item , index) => {
                        return (
                            <article key={index} className="services">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>    
                        )
                    })}
                </div>
            </section>
        )
    }
}
