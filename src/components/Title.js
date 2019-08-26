import React, { Component } from 'react'

export default class Title extends Component {
    render() {
        return (
            <div className="section-title">
                <h4>{this.props.title}</h4>
                <div></div>
            </div>
        )
    }
}
