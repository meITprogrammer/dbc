import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import"../App.css";

function Card() {
//     const [name, setName] = useState();
//     const[key, setKey] = useState();
//     const params = useParams();

// useEffect(()=> {
//     setKey(params.id)
// })

 return (
 <div align="center">
    <h1>Digital Business Card</h1>
    

    <button><Link to='/dbc/' className='link backToMain'>Return to Main Page</Link></button>
 
 </div>
 );
};
export default Card;





