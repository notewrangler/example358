import React, { Component } from 'react';
import Block1 from './Block1';
import PhotoBlock from './PhotoBlock';
import Footer from './Footer';

export default class PageBody extends Component {
    render() {
        const pageBodyStyle = {
            width: '80%',
            margin: 'auto',
            height: '2000px',
            marginTop: '5em'
        }
        return (
            <div id="container" style={pageBodyStyle}>
                <Block1 />
                <PhotoBlock />
                <Footer />
            </div>

        )
    }
}
