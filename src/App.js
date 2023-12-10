import React from 'react';
import './App.css';
import Create from './components/Create';
import { Link } from 'react-router-dom';
import Authentication from './authentication/Authentication';


function App() {
  return(
    <>
    <div className='main-container2'>
            <div>
              <h1 className='welcome'>WELCOME</h1>
              <h4 className='slogan'>FSA BizCard <br></br>"Go Digital, Connect in Style!</h4>
            </div>
    <div className='form-one-button'>
        <button className='submit-button'><Link to='/create' className='link create' element={<Create />}>Create New Card</Link></button>
      </div>
       <div className='form-one-button'>
        <button className='submit-button'><Link to='/authentication' className='link update' element={<Authentication />}>Login to View Card</Link></button>
      </div>
      <div>

      </div>
 </div>
    
</>
  );
}

export default App;
