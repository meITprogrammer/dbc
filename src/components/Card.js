import React, { useEffect, useState } from "react";
import { db } from "../fb-config";
import { Link, useParams, useNavigate } from 'react-router-dom';
import { collection, query, where, getDocs, deleteDoc } from "firebase/firestore";
import { getAuth, deleteUser } from "firebase/auth";
import QRCode from 'react-qr-code';

function  Card () {
  const [name, setName] = useState();
  const [job, setJob] = useState('');
  const [company,setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [website, setWebsite] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [password, setPassword] = useState('');

  const [qrcode, setQrcode] = useState('');
  const [url, setUrl] = useState('');
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
                setPassword(doc.data().password);

            });
            
        } catch (err) {
        }};

 const deleteCard = async () => {
    try {
    let deleteEmail = params.id;
    const q = query(collection(db, "cards"), where("email", "==", deleteEmail));
            const querySnapshot = await getDocs(q);
                querySnapshot.forEach(async(doc) => {
                    await deleteDoc(doc.ref);
                })
                console.log("Document(s) deleted successfully");
                deleteUserAccount();
                navigate(`/dbc/`);
            }catch(error) {
                console.error("Error deleting document(s):", error);
            }
        };

 const deleteUserAccount = async () => {
    try {
        const auth = getAuth();
        const user = auth.currentUser;
        if (user) {
            await deleteUser(user);
            console.log("User account deleted successfully!");
        } else {
            console.log("No user is currently signed in.");
        }
    } catch(error){
        console.error("Error deleting user account:", error);
    }
 };

 const generateQRCode = () => {
    QRCode.toDataURL(url, {
    width: 800,
    margin: 1   
    },(err, url) => {
      if(err) return console.error(err)
      console.log(url)
      setQrcode(url)
    })
  }
 
    return (
      <div className="main-container">
        <div>
            <h1>Digital Business Card</h1>
        </div>
      <div>
        <div className="card-details">
            <div>
            <h4>{name}</h4>
            <h4>{job}</h4>
            <h4>{company}</h4>
            <h4>{mobile}</h4>
            <h4>{website}</h4>
            <h4>{linkedin}</h4>
            <h4>{email}</h4>
            <QRCode className="qr-code" value={generateQRCode}></QRCode>
            </div>
                
          <div className='form-one-button'>
            <button  className="submit-button"><Link to={`/dbc/edit/${email}`} className='link update'>Edit</Link></button>
            </div>
          <div className='form-one-button'>
            <button onClick={deleteCard} className="submit-button">Delete</button>
            </div>
        <div className="form-one-button">
                <button className="submit-button"><Link to='/dbc/' className="link backToMain">Back to Main Page</Link></button>
            </div>
            
        </div>
      </div>
    </div>
    );
  
}
export default Card;