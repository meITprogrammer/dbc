import React from "react";
import logo from "../images/logo_fsa.png";
import "../App.css"


export default function Header() {
    return(
        <div className="header-contatiner">
            <img className="logo" src={logo} alt="" 
            width="300px" height="250px"/>
        </div>
    )
}