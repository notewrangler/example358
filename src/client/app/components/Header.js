import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        let divStyle = {
            color: 'white',
            fontFamily: "Arial",
            background: 'black',
            position: 'fixed',
            top: '0',
            height: '5em',
            width: '100%',
            paddingLeft: '1em',
            marginBottom: 0,
            zIndex: 2
        }
        return (
            <div style={divStyle}>
                <h1>Example358</h1>
            </div>
        )
    }
}
