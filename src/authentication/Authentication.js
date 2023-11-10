import React from 'react'
import Signin from './Signin'
import { Link } from 'react-router-dom'
import Dashboard from '../components/Dashboard'

function Authentication() {
  return (
    <div  className='main-container'>
        <Signin>
          <Dashboard />
        </Signin>
        

        <div className="form-one-button">
                <button className="submit-button"><Link to='/dbc/' className="link backToMain">Back to Main Page</Link></button>
        </div>
        
    </div>
  )
}

export default Authentication