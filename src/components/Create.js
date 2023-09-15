import React, { useState } from "react";
import logo from "../images/logo_fsa.png"
import { Link } from "react-router-dom";
import "../App.css";

function Create() {
    const [name, setName] = useState();
    const [job, setJob] = useState();
    const [company, setCompany] = useState();
    const [email, setEmail] = useState();
    const [profilePhoto, setProfilePhoto] = useState();
    const [companyLogo, setCompanyLogo] = useState();
    const [password, setPassword] = useState();

    return(
    <div>
        <div className="main-container">
            <img src={logo} />
            <h2 className="main-heading main-content">
                Create a New Business Card
            </h2>
            <form>
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" name="name" className="input-name" placeholder={name}/>
                </div>
                <div class="form-group">
                    <label for="job">Job Title:</label>
                    <input type="text" name="job" className="input-job" placeholder={job}/>
                </div>
                <div class="form-group">
                    <label for="company">Company:</label>
                    <input type="text" name="company" className="input-company" placeholder={company}/>
                </div>
                <div class="form-group">
                    <label for="email">Email Address:</label>
                    <input type="text" name="email" className="input-email" placeholder={email}/>
                </div>
                <div class="form-group">
                    <label for="profilePhoto">Profile Photo: </label>
                    <button type="text" name="profilePhoto" className="input-profile-photo" placeholder={profilePhoto}>Select Photo</button>
                </div>
                <div class="form-group">
                    <label for="companyLogo">Company Logo:</label>
                    <button type="text" name="companyLogo" className="input-company-logo" placeholder={companyLogo}>Select Logo</button>
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="text" name="password" className="input-password" placeholder={password}/>
                </div>
                <div><button className="form-one-next">Submit</button></div>            
            </form>            
            <div>
                <button><Link to='/dbc/' className="link backToMain">Back to Main Page</Link></button>
            </div>
        </div>
    </div>
    )
}

export default Create;