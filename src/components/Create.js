import React, { useState } from "react"
import logo from "../images/logo_fsa.png"
import { Link, useNavigate } from "react-router-dom"
import "../App.css";

function Create() {
    const [name, setName] = useState();
    const [job, setJob] = useState();
    const [company, setCompany] = useState();
    const [email, setEmail] = useState();
    const [mobile, setMobile] = useState();
    const [website,setWebsite] = useState();
    const [linkedin, setLinkedin] = useState();
    const [profilePhoto, setProfilePhoto] = useState();
    const [companyLogo, setCompanyLogo] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit=(e)=> {
        e.preventDefault();
        console.log('Name: ' +name+' Job Title: '+job+' Company: '+company+'Email Address: '+email+'Mobile #: '+mobile+'Website '+website+' Profile Photo: '+profilePhoto+' Company Logo: '+companyLogo+'LinkedIn: '+linkedin+' Password: '+password);
        navigate ("/dbc/Card");  
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
                    <label htmlFor="name"></label>
                    <input type="text" name="name" className="input-name" placeholder="Name*" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="job"></label>
                    <input type="text" name="job" className="input-job" placeholder="Job Title*" onChange={(e) => setJob(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="company"></label>
                    <input type="text" name="company" className="input-company" placeholder="Company*" onChange={(e) => setCompany(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email"></label>
                    <input type="text" name="email" className="input-email" placeholder="Email Address*" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="mobile"></label>
                    <input type="text" name="mobile" className="input-mobile" placeholder="Mobile Number*" onChange={(e) => setMobile(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="website"></label>
                    <input type="text" name="website" className="input-website" placeholder="Website" onChange={(e) => setWebsite(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="linkedin"></label>
                    <input type="text" name="linkedin" className="input-linkedin" placeholder="LinkedIn" onChange={(e) => setLinkedin(e.target.value)}/>
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
                    <label htmlFor="password"></label>
                    <input type="text" name="password" className="input-password" placeholder="Password*" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="form-one-button"><button className="submit-button">Submit</button></div>            
            </form>           
            <div className="form-one-button">
                <button className="submit-button"><Link to='/dbc/' className="link backToMain">Back to Main Page</Link></button>
            </div>
        </div>
    </div>
    )
}

export default Create;