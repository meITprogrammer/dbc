import React from "react";

export default function Main() {
    return(
        <div className="main-container">
            <h3 className="main-heading main-content">
                Creat a New Business Card
            </h3>
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

            <button className="form-one-next">Submit</button>

        </div>
    )
}