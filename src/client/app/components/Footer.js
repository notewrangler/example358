import React, { Component } from 'react';
import Links from "../../../../assets/links";

let footerStyle = {
    display: "flex",
    justifyContent: "space-around",
    background: "#68BAE4",
    width: "100%",
    fontFamily: "Arial"
}
// let linkDivStyle = {
//     display: "block",
//     textAlign: "left"
// }
let linkStyle = {
    textDecoration: "none",
    fontSize: "0.7rem"
}
let ulStyle = {
    listStyle: "none",
    marginRight: "60px"
}
// let liStyle = {
//     // padding: "10px"
// }

export default class Footer extends Component {
    render() {
        return (
            <div style={footerStyle}>
                    {Links.map(function(link){
                        return <ul key={link[0].name} style={ulStyle}>
                            {link.map(function(lk) {
                                return <li key={lk.url}><a style={linkStyle} href={lk.url}>{lk.name}</a></li>;
                            })}
                        </ul>
                    })}
            </div>
        )
    }
}
