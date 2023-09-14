import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";


function MainPage() {
 return (
 <div align="center">
 <h1> Welcome to FSA Biz Card</h1>
 <button><Link to='/Create' className='link create'>Create New Card</Link></button>
 <button><Link to='/Update' className='link create'>Update Card</Link></button>
 <br/><br/>
 </div>
 );
};
export default MainPage;

