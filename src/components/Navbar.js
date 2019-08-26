import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

export default class Navbar extends Component {
    state = {
        isOpen: false
    }
    
    handleToggle = () => {
        this.setState({isOpen : !this.state.isOpen})
    }

    render() {
        return (
            <>
            <nav>
                <div className="container">

                    <div onClick={this.handleToggle} className={this.state.isOpen ? "menu-bars cancel" : "menu-bars"} id="nav-button">
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>

                    <Link to="/">
                        {/* <img className="menu-icon" src={logo} alt="logo" /> */}
                        <div className="menu-icon" >LOGO</div>
                    </Link>
                    <div className="menu">
                        <ul id="nav-ul" className={this.state.isOpen ? "nav-mobile" : ""}>
                            <Link to="/"><li>Home</li></Link>
                            <Link to="/Rooms"><li>Rooms</li></Link>
                            <Link to="/About"><li>About</li></Link>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="nav-fix"></div>
            </>
        )
    }
}
