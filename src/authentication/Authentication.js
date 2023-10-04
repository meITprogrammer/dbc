import React from 'react'
import AuthDetails from './AuthDetails'
import Signin from './Signin'
import { Link } from 'react-router-dom'

function Authentication() {
  return (
    <div  className='main-container'>
        <Signin>
          <AuthDetails />
        </Signin>
        

        <div className="form-one-button">
                <button className="submit-button"><Link to='/dbc/' className="link backToMain">Back to Main Page</Link></button>
        </div>
        
    </div>
  )
}

export default Authentication