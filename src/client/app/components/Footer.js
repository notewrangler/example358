import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        const footerStyle ={
            height: "100px",
            background: "#68BAE4",
            width: "100%",
            padding: "20px",
            fontFamily: "Arial",
            // border: '1px solid black'
        }
        return (
            <div style={footerStyle}>
                <h1>Footer</h1>
            </div>
        )
    }
}
