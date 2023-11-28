import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from "../fb-config";
import '../App.css';
import logo from '../images/logo_fsa.png';
import { Link, useNavigate } from 'react-router-dom';

function ResetEmail() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState();
    const navigate = useNavigate();

    const triggerResetEmail = async (e) => {
        e.preventDefault();
        await sendPasswordResetEmail(auth, email);
        console.log("Password reset email sent")
        alert("Password reset email sent")
        navigate("/signin")
      }


  return (
    <div className='main-container'>
    
        <div>
            <img className="fsa-logo" alt="fsa_logo" src={logo} />
            <h2 className="main-heading main-content">
                Welcome to FSA BizCard
            </h2>
        </div>
        <form onSubmit={triggerResetEmail}>
            <div className='form-group'>
                <input 
                    className="input-name" 
                    type="email" 
                    placeholder='Enter your email' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                ></input>
            </div>
        
            <div className='form-one-button'>
                <button className='submit-button'>Reset Password</button>
            </div>
    </form>
            <div className='form-one-button'>
                <button className="submit-button"><Link to="/signin" className="link backToMain">Back</Link></button>
            </div>
</div>
    
)
  
}

export default ResetEmail