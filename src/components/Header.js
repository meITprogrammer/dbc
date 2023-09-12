import React from "react";
import logo from "../images/logo.jpg";
import "../App.css"


export default function Header() {
    return(
        <div className="header-contatiner">
            <img src={logo} alt="" 
            width="200px" height="200px"/>
        </div>
    )
}