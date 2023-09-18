import React from 'react';
import { Link} from 'react-router-dom';
import"../App.css";

function Card() {
    const cards=[
        {
            name: "Kavi Sewdayal",
            job: "Relationship Manager",
            company: "Future Skills Academy",
            email: "kavi@futureskills.co.nz",
            mobile: "0272324483",
            website: "www.futureskills.co.nz",
            linkedin: "kavi.sewdayal",
            id: 1
        }
    ]

 return (
 <div className='card-container'>
    <h2 className="main-heading main-content">Digital Business Card</h2>
    <div className='dbc-card'>
        {cards.map(card=>     
            <div>        
                <h2>{card.name}</h2>
                <h3>{card.job}</h3>
                <h3>{card.company}</h3>
                <h4>{card.email}</h4>
                <h4>{card.mobile}</h4>
                <h4>{card.website}</h4>
                <h4>{card.linkedin}</h4>
            </div>       
        )};
    </div>
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





