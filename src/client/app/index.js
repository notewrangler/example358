import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './components/Header';
import PageBody from './components/PageBody';

let appStyle = {
    background: "url(../../../assets/water_sky.jpg ) repeat center fixed",
    backgroundSize: "cover"
}

class App extends Component {
    render () {
        return <div style={appStyle}>
                    <Header />
                    <PageBody />
                </div>

    }
}

render(<App/>, document.getElementById('app'));
