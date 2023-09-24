import React from 'react';
import { Link} from 'react-router-dom';
import"../App.css";
import Header from '../components2/Header';
import Main from '../components2/Main';

function Card() {
   

 return (
 <div className='card-container'>
    <Header />
    <Main />
    
    <div className='main-footer'>
        <div className='form-one-button'>
            <button className='submit-button'>Share</button>
        </div>
        <div className='form-one-button'>
            <button className='submit-button'>QR Code</button>
        </div>
        <div className='form-one-button'>
            <button className='submit-button'><Link to='/dbc/' className='link backToMain'>Return to Main Page</Link></button>
        </div>
    </div>
 
 </div>
 );
};
export default Card;





