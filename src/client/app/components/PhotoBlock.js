import React, { Component } from 'react';
import pics from "../../../../assets/pics";



let styles = {
    photoBlock: {
        width: "100%",
        left: 0,
        top: 0,
        padding: 0,
        marginBottom: "30px",
        height: "405px",
        zIndex: 1,
        display: 'flex',
        justifyContent:'space-between'
    },
    ph1: {
        width: '48%',
        padding: 0,
        margin: 0,
        left: 0,
        height: "400px",
        zIndex: 1
    },
    ph2: {

        width: '48%',
        padding: 0,
        margin: 0,
        height: "400px",
        zIndex: 1
    }
};

export default class PhotoBlock extends Component {
    render() {
            console.log(pics);

        return (
            <div className="photos" style={styles.photoBlock}>
                    <img style={styles.ph1} src={pics[0].url}/>
                    <img style={styles.ph2} src={pics[1].url}/>
            </div>
        )
    }
}
