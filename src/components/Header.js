import React from "react";
import logo from "../images/logo.jpg"


export default function Header() {
    return(
        <div className="header-contatiner">
            <img className="img-logo" src={logo} alt="" 
            width="200px" height="200px"/>
        </div>
    )
}