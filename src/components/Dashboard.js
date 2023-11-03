import { Link, useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import logo from '../images/logo_fsa.png'
import { collection, query, where, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from '../fb-config';
import Authentication from '../authentication/Authentication';

function Dashboard() {
  const [name, setName] = useState();
  const [job, setJob] = useState('');
  const [company,setCompany] = useState('');
  const [mobile, setMobile] = useState('');
  const [website, setWebsite] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [email, setEmail] = useState('');
  

  const [key, setKey] = useState();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
      
    setKey(params.id)
    //console.log("Message from Context"+value);
    console.log("Use effect exectuted show.js key"+params.id);
    getCard();
  }, []);

  const getCard = async () => {
    console.log("Get board executed"+params.id);
        try {
            let userEmail = params.id;
            const q = query(collection(db, "cards"), where("email", "==", userEmail));
            const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                //console.log(doc.id, " => ", doc.data());
                setName(doc.data().name);
                setJob(doc.data().job);
                setCompany(doc.data().company);
                setMobile(doc.data().mobile);
                setWebsite(doc.data().website);
                setLinkedin(doc.data().linkedin);
                setEmail(doc.data().email);
                
            });
            
        } catch (err) {
        }};
    
  return (
    <div className='dashboard-container'>
        <div>
        <h1 className='welcome-dashboard'>
            BizCard Dashboard            
        </h1> 
        </div>
        <div>
        <div className='form-one-button'>
               <Link to={`/dbc/card/${email}`}><button  className="dashboard-button view">View My BizCard</button></Link>
               <button  className="dashboard-button contact">My Contact List</button>
               </div>      
             <div className='form-one-button'>
               <button className="dashboard-button scanqr">Scan QR code</button>
               <button className="dashboard-button"><Link to='/dbc/' className="link backToMain">Back to Main</Link></button>
             </div>
        </div>
    </div>
  )
}

export default Dashboard