import React from "react";
import "../App.css"
import banner from "../images/futureskills.jpg"
import noprofile from "../images/noprofile.jpg"


export default function Header() {
    return(
        <div className="heading">
            <div>
                <img alt="fsa_logo" src={banner} className="company-logo" />
            </div>
                   <div className="profile-container">
                <img alt="profile_photo" src={noprofile} className="profile-photo" />
            </div>
        </div>
        
    )
}