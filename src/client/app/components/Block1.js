import React, { Component } from 'react';
import Listing from '../../../../assets/listings';

export default class Block1 extends Component {
    render() {
        let block1Style = {
            width: "100%",
            padding: "20px",
            fontFamily: "Arial",
            paddingTop: '60px'
        }
        return (
            <div style={block1Style}>
                <h1>{Listing.title}</h1>
                <p>{Listing.description}
                </p>
                <p>{Listing.pricing}<strong><em>{Listing.disclaimer}</em></strong></p>

            </div>
        )
    }
}
