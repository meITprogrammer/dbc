import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState} from 'react'
import { auth } from "../fb-config";
import { Link, useNavigate } from 'react-router-dom';

function AuthDetails() {
    const [authUser, setAuthUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
      const listen = onAuthStateChanged(auth, (user) => {
        if (user) {
            setAuthUser(user);
        } else {
            setAuthUser(null);
            
            
        }
      });

      return () => {
        listen();
      }
    }, []);
    
    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('sign out successful')
        }).catch(error => console.log(error))
    };
  return (
    <div>
        {authUser ? (
            <>
                <p className='form-one-button'>{`Signed In as ${authUser.email}`}</p>
                <div className='form-one-button'>
                <Link to={`/dbc/card/${authUser.email}`}>
                  <button className='submit-button'>View BizCard</button></Link>
                </div>
                <div className='form-one-button'>
                <button className='submit-button' onClick={userSignOut}>Sign Out</button>
                </div>
                
                
            </>
        ) : ( 
            <p className='form-one-button'>Login to View Card</p>
        )}
            
    </div>
  );
};

export default AuthDetails;