import React from 'react'
import Create from '../components/Create';
import { Link } from 'react-router-dom';
import Signin from '../authentication/Signin';


function Navigation() {
    
  return (
    <div>
        <div className='form-one-button'>
        <button className='submit-button'><Link to='/dbc/Create' className='link create' element={<Create />}>New Card</Link></button>
      </div>
       <div className='form-one-button'>
        <button className='submit-button'><Link to='/dbc/signin' className='link update' element={<Signin />}>Login</Link></button>
      </div>
     

    </div>
  )
}

export default Navigation