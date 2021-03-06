import React, { Component } from 'react';
import Listing from '../../../../assets/listings';

export default class Block1 extends Component {
    render() {
        let block1Style = {
            width: "100%",
            boxSizing: "border-box",
            padding: "20px",
            fontFamily: "Arial",
            paddingTop: '60px'
        }
        return (
            <div style={block1Style}>
                <h1>{Listing.title}</h1>
                <p>{Listing.description}</p>
                <p>{Listing.pricing}</p>
                <p>{Listing.disclaimer}</p>
            </div>
        )
    }
}
