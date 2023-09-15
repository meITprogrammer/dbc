import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";


function Homepage() {
 return (
 <div align="center">
    <h1> Welcome to FSA Biz Card</h1>
    <button><Link to='/dbc/Create' className='link create'>Create New Card</Link></button>
    <button><Link to='/dbc/Update' className='link update'>Update Card</Link></button>
 </div>
 );
};
export default Homepage;

