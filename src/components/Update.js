import React from 'react';
import { Link } from 'react-router-dom';
import"../App.css";

function Update() {
 return (
 <div className='main-container'>
    <h1> Update Your FSA Biz Card</h1>
    <div className='form-one-button'>
      <button className='submit-button'><Link to='/dbc/' className='link backToMain'>Return to Main Page</Link></button>
    </div>
    
 
 </div>
 );
};
export default Update;

