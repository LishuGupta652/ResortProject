import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
                <footer>
                    <div>
                        <i className="fa fa-copyright" aria-hidden="true"></i> Dwarf Company 2019
                      
                        <div className="footer-icons">
                            <i className="fa fa-facebook" aria-hidden="true"></i>
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                            <i className="fa fa-twitch" aria-hidden="true"></i>
                            <i className="fa fa-whatsapp" aria-hidden="true"></i>
                            <i className="fa fa-instagram" aria-hidden="true"></i>
                        </div>
                    </div>
                </footer>
        )
    }
}
