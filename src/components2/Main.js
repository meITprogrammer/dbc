import React from 'react'

function Main() {
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
    <div className='dbc-card'>
        {cards.map(card=>     
            <div className='card-details'>        
                <h2>{card.name}</h2>
                <h4>{card.job}</h4>
                <h5>{card.company}</h5>
                <h5>{card.email}</h5>
                <h5>{card.mobile}</h5>
                <h5>{card.website}</h5>
                <h5>{card.linkedin}</h5>
            </div>       
        )};
    </div>
  )
}

export default Main