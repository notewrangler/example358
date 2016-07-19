import React, { Component } from 'react';
import Links from "../../../../assets/links";

let footerStyle = {
    background: "#68BAE4",
    width: "100%",
    padding: "20px",
    fontFamily: "Arial"
}
let linkDivStyle = {
    display: "block",
    marginLeft: '4em'
}
let linkStyle = {
    textDecoration: "none",
    fontSize: "0.7rem"
}
let ulStyle = {
    display: "inline-block",
    listStyle: "none",
    marginRight: "70px"
}
let liStyle = {
    padding: "10px"
}

export default class Footer extends Component {
    render() {
        return (
            <div style={footerStyle}>
                <div style={linkDivStyle}>
                    {Links.map(function(link){
                        return <ul style={ulStyle}>
                            {link.map(function(lk) {
                                return <li style={liStyle} key={lk.url}><a style={linkStyle} href={lk.url}>{lk.name}</a></li>;
                            })}
                        </ul>
                    })}
                </div>
            </div>
        )
    }
}
