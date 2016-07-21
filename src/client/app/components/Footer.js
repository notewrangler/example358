import React, { Component } from 'react';
import Links from "../../../../assets/links";

let footerStyle = {
    display: "flex",
    justifyContent: "center",
    background: "#68BAE4",
    width: "100%",
    fontFamily: "Arial"
}

let linkStyle = {
    textDecoration: "none",
    fontSize: "0.8rem"
}
let ulStyle = {
    listStyle: "none",
    marginRight: "60px"
}
const t = ""

export default class Footer extends Component {
    render() {
        return (
            <div style={footerStyle}>
                    {Links.map((link) => {
                        return <ul key={link[0].name} style={ulStyle}>
                            {link.map((lk) => {
                                return <li key={lk.url}><a style={linkStyle} href={lk.url} target="_blank">{lk.name}</a></li>;
                            })}
                        </ul>
                    })}
            </div>
        )
    }
}
