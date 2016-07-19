import React, { Component } from 'react';

let styles = {
    photoBlock: {
        position: "relative",
        width: "100%",
        left: 0,
        top: 0,
        padding: 0,
        marginBottom: "30px",
        height: "405px",
        zIndex: 1
    },
    ph1: {
        position: "absolute",
        width: '50%',
        padding: 0,
        margin: 0,
        left: 0,
        height: "400px",
        zIndex: 1
    },
    ph2: {
        position: "absolute",
        width: '50%',
        padding: 0,
        margin: 0,
        right: 0,
        marginRight: "-2.8%",
        height: "400px",
        zIndex: 1
    }
};

export default class PhotoBlock extends Component {
    render() {


        return (
            <div className="photos" style={styles.photoBlock}>
                <div >
                    <img style={styles.ph1} src="http://r.rdcpix.com/v02/c96da1300-r1xd-w480_h480_q80.jpg"/>
                </div>
                <div  >
                    <img style={styles.ph2} src="http://www.backstepfirefighter.com/wp-content/uploads/sites/43/2015/12/LasVegasSquatters.jpg"/>
                </div>
            </div>
        )
    }
}
