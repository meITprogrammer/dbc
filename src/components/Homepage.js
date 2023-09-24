import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";


function Homepage() {
 return (
 <div className='main-container'>
  <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
            <div>
              <h1 className='welcome'> Welcome to FSA BizCard</h1>
              <h4 className='slogan'>"Go Digital, Connect in Style!</h4>
            </div>
    <div className='form-one-button'>
        <button className='submit-button'><Link to='/dbc/Create' className='link create'>Create New Card</Link></button>
      </div>
      <div className='form-one-button'>
        <button className='submit-button'><Link to='/dbc/Update' className='link update'>Update Card</Link></button>
      </div>
      {/* <div>
        <ul className='homepage-list'>
          <li><a className="about-us" href='About Us'>About Us</a></li>
          <li><h4>Version 1.0</h4></li>
          <li><a className="share-app" href='Share App'>Share App</a></li>
        </ul>       
      </div> */}

 </div>
 );
};
export default Homepage;

