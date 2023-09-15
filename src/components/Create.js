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

    const handleSubmit=(e)=> {
        e.preventDefault();
        console.log('Name: ' +name+' Job Title: '+job+' Company: '+company+'Email Address: '+email+' Profile Photo: '+profilePhoto+' Company Logo: '+companyLogo+' Password: '+password)
    }
        

    return(
    <div>
        <div className="main-container">
            <img alt="fsa_logo" src={logo} />
            <h2 className="main-heading main-content">
                Create a New Business Card
            </h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" className="input-name" placeholder={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="job">Job Title:</label>
                    <input type="text" name="job" className="input-job" placeholder={job} onChange={(e) => setJob(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="company">Company:</label>
                    <input type="text" name="company" className="input-company" placeholder={company} onChange={(e) => setCompany(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address:</label>
                    <input type="text" name="email" className="input-email" placeholder={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="profilePhoto">Profile Photo: </label>
                    <input type="file" name="profilePhoto" onChange={(e) => setProfilePhoto (e.target.files)}></input>
                </div>
                <div className="form-group">
                     <label htmlFor="companyLogo">Company Logo:</label>
                    <input type="file" name="companyLogo" onChange={(e) => setCompanyLogo (e.target.files)} ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="text" name="password" className="input-password" placeholder={password} onChange={(e) => setPassword(e.target.value)}/>
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