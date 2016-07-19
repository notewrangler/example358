import React, { Component } from 'react';
import Links from "../../../../assets/links";

let footerStyle ={
    background: "#68BAE4",
    width: "100%",
    padding: "20px",
    fontFamily: "Arial",
    // border: '1px solid black'
}
let linkStyle = {
    textDecoration: "none"
}
let ulStyle = {
    display: "inline-block",
    listStyle: "none",
    marginRight: "30px"
}
let liStyle = {
    padding: "10px"
}

export default class Footer extends Component {
    render() {


        return (
            <div style={footerStyle}>
                {Links.map(function(link){
                    return <ul style={ulStyle}>
                        {link.map(function(lk) {
                            console.log(lk.name);
                            return <li style={liStyle} key={lk.name}><a style={linkStyle} href={lk.url}>{lk.name}</a></li>;
                        })}
                    </ul>
                })}
            </div>
        )
    }
}
