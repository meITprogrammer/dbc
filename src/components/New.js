import { Link } from 'react-router-dom';
import"../App.css";
import React, { useEffect, useState } from "react";
import { db } from "../fb-config";
import { addDoc, collection, getDocs, updateDoc, doc, deleteDoc} from "firebase/firestore";


function New() {
    const [cards, setCards] = useState([]);

    const [newID, setNewID] = useState("");
    const [newName, setNewName] = useState("");
    const [newJob, setNewJob] = useState("");
    const [newCompany, setNewCompany] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newMobile, setNewMobile] = useState("");
    const [newWebsite,setNewWebsite] = useState("");
    const [newLinkedin, setNewLinkedin] = useState("");
    
    const cardCollectionRef = collection(db,"cards");
    
    const getCards = async () => {
      const data = await getDocs(cardCollectionRef);
      setCards(data.docs.map((doc)=> ({...doc.data(), id: doc.id})));
      console.log(data);
    } 
    
    useEffect(()=> {
        getCards();
      }, []);
  
    const createCard = async () => {

      if(newID.length < 1)
      {  
        await addDoc(cardCollectionRef, {
            name:newName,
            job:newJob,
            company:newCompany,
            email:newEmail,
            mobile:newMobile,
            website:newWebsite,
            linkedin:newLinkedin
        });
    }
    else {
        //Update Card

        const cardDoc = doc(db, "cards", newID);

        const newFields = {
            name:newName,
            job:newJob,
            company:newCompany,
            email:newEmail,
            mobile:newMobile,
            website:newWebsite,
            linkedin:newLinkedin
        };
        await updateDoc(cardDoc, newFields);
    }

    setTimeout(getCards, 1000);

    setNewID("");
    setNewName("");
    setNewJob("");
    setNewCompany("");
    setNewEmail("");
    setNewMobile("");
    setNewWebsite("");
    setNewLinkedin("");  
};

    const updateCard = (card) => {
        setNewID(card.id);
        setNewName(card.name);
        setNewJob(card.job);
        setNewCompany(card.company);
        setNewEmail(card.email);
        setNewMobile(card.mobile);
        setNewWebsite(card.website);
        setNewLinkedin(card.linkedin);
    };

    const deleteCard = async (id) => {
        const cardDeleteDoc = doc(db, "cards", id);
        await deleteDoc(cardDeleteDoc);

        setTimeout(getCards, 1000);
    }

    return (
      <div className='main-container'>
        <h1>Business Cards</h1>
        <div>
        <form onSubmit={createCard}>
                <div className="form-group">
                    <label htmlFor="name"></label>
                    <input type="text" name="name" className="input-name" placeholder="Name*" value={newName} 
                    onChange={(event) => {setNewName(event.target.value);
                    }}/>
                </div>
                <div className="form-group">
                    <label htmlFor="job"></label>
                    <input type="text" name="job" className="input-job" placeholder="Job Title*" value={newJob} 
                    onChange={(event) => {setNewJob(event.target.value);
                    }} />
                </div>
                <div className="form-group">
                    <label htmlFor="company"></label>
                    <input type="text" name="company" className="input-company" placeholder="Company*" value={newCompany}
                    onChange={(event) => {setNewCompany(event.target.value);
                    }} />
                </div>
                <div className="form-group">
                    <label htmlFor="email"></label>
                    <input type="text" name="email" className="input-email" placeholder="Email Address*" value={newEmail}
                    onChange={(event) => {setNewEmail(event.target.value);
                    }} />
                </div>
                <div className="form-group">
                    <label htmlFor="mobile"></label>
                    <input type="text" name="mobile" className="input-mobile" placeholder="Mobile Number*" value={newMobile}
                    onChange={(event) => {setNewMobile(event.target.value);
                    }}/>
                </div>
                <div className="form-group">
                    <label htmlFor="website"></label>
                    <input type="text" name="website" className="input-website" placeholder="Website" value={newWebsite}
                    onChange={(event) => {setNewWebsite(event.target.value);
                    }}/>
                </div>
                <div className="form-group">
                    <label htmlFor="linkedin"></label>
                    <input type="text" name="linkedin" className="input-linkedin" placeholder="LinkedIn" value={newLinkedin}
                    onChange={(event) => {setNewLinkedin(event.target.value);
                    }}/>
                </div>
                <div className="form-one-button"><button className="submit-button">Submit</button></div>            
            </form>
        </div>
         {cards.map((card) => {
          return (
            <div className='card-details'>
            <h4>{card.name}</h4>
            <h4>{card.job}</h4>
            <h4>{card.email}</h4>
            <h4>{card.website}</h4>
            <h4>{card.company}</h4>
            <h4>{card.linkedin}</h4>
            <h4>{card.mobile}</h4>
            <button onClick={() => {
                updateCard(card);
            }}
            >Edit Card</button>
            <button onClick={() => {
                deleteCard(card.id);
            }}
            >Delete Card</button>


            </div>
          );
         })}  
        
        
        </div>
        
      
    )
  };
export default New;

