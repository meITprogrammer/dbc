import React from "react";
import logo from "../images/logo_fsa.png"

function Create() {
    return(
    <div>
        <img src={logo} />
        <div className="main-container">
            <h2 className="main-heading main-content">
                Create a New Business Card
            </h2>
            <h4 className="main-content">
                Name    
                <input className="input-name" placeholder="Enter your full name here"></input>
            </h4>
            <h4 className="main-content">
                Job Title     
                <input className="input-jobtitle" placeholder=""></input>
            </h4>
            <h4 className="main-content">
                Company Name    
                <input className="input-company" placeholder=""></input>
            </h4>
            <h4 className="main-content">
                Email Address    
                <input className="input-email" placeholder="eg hello@futureskills.co.nz"></input>
            </h4>
            <h4 className="main-content">
                Add Profile Photo 
                <button>Select File</button>
            </h4>
            <h4 className="main-content">
                Add Company Logo 
                <button>Select File</button>
            </h4>
            <h4 className="main-content">
                Password 
                <input className="input-password" placeholder=""></input>
            </h4>

            <button className="form-one-next">Submit</button>

        </div>
    </div>
    )
}

export default Create;