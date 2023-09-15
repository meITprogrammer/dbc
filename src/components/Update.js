import React from 'react';
import { Link } from 'react-router-dom';
import"../App.css";

function Update() {
 return (
 <div align="center">
    <h1> Update Your FSA Biz Card</h1>
    <button><Link to='/dbc/' className='link backToMain'>Return to Main Page</Link></button>
 
 </div>
 );
};
export default Update;

