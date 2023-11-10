import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from "../fb-config";
import '../App.css';
import logo from '../images/logo_fsa.png';
import { Link, useNavigate } from 'react-router-dom';

function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

<<<<<<< HEAD
    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then ((userCredential) => {
            console.log(userCredential);
            navigate(`/dbc/dashboard/${email}`)
        }).catch((error) => {
            console.log("error");
        })
=======
    const signIn = async(e) => {
        e.preventDefault();
        setError("");
        try{
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/Welcome");
            } catch(error)  {
            setError(error.message);     
            
            console.log("error");
        }
>>>>>>> b8eb005da4a721bc2ab57ef7daaae8cd401d39a4


    }
  return (
    <div className='main-container'>
        <form onSubmit={signIn}>
            <div>
                <img className="fsa-logo" alt="fsa_logo" src={logo} />
                <h2 className="main-heading main-content">
                    Welcome to FSA BizCard
                </h2>
            </div>
    
            <div className='form-group'>
            {error && <p>{error}</p>}
            <input 
                className="input-name" 
                type="email" 
                placeholder='Enter your email' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            ></input>
            </div>
            <div className='form-group'>
            <input 
                type="password" 
                placeholder='Enter your password' 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            ></input>
            </div>
            <div className='form-one-button'>
<<<<<<< HEAD
                <button className='submit-button'>Login</button>
            </div>
            <div className='form-one-button'>
                <button className="submit-button"><Link to="/dbc" className="link backToMain">Back to Main</Link></button>
=======
               <button className='submit-button' type="Submit">Login</button>
>>>>>>> b8eb005da4a721bc2ab57ef7daaae8cd401d39a4
            </div>
        </form>
    </div>
        
  )
}


export default Signin