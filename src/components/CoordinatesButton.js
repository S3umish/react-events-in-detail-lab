// Code CoordinatesButton Component H

import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

    handleClick = event =>{
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    };
    render() {
        return (
            <div>
                return<button onClick={this.handleClick}>Coords</button>
            </div>
        )
    }
}



