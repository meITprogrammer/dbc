import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import logo from '../images/logo_fsa.png'
import { auth, colRef } from '../fb-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc } from 'firebase/firestore';
import { storage } from '../fb-config';
import { v4 as uuidv4 } from 'uuid';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import "firebase/compat/storage";

function Create(){
    const [name, setName] = useState('');
    const [job, setJob] = useState('');
    const [company,setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [website, setWebsite] = useState('');
    const [linkedin, setLinkedin] = useState('');
    //const [companyLogo, setCompanyLogo] = useState();
    const [profilePhoto, setProfilePhoto] = useState();
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate();
       
    const createCard=(e)=> {
        e.preventDefault();
        console.log('Name : '+ name +' Email: ' +email +' password' +password);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
       // Signed up 
            const user = userCredential.user;
       // ...
                })
                .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                });
        
        saveCard();
      }

    const saveCard = async() => {       
        console.log('Save Name : '+name + ' Email: ' +email);
        const newData = profilePhoto ? {
          name,
          job,
          company,
          mobile,
          website,
          linkedin,
          email,
          password,
          profilePhoto
          //companyLogo,
               
        } :
        {
          name,
          job,
          company,
          mobile,
          website,
          linkedin,
          email,
          password      
        }
        ;
        try{         
          await addDoc(colRef, newData);         
          console.log("Data added " + name + email);
          navigate(`/dbc/card/${newData.email}`)
        }catch(err){         
          console.log(err.message)
        }
     };  

    const handleUploadPhoto = (event) => {setProfilePhoto(event.target.files[0]);
      if (!profilePhoto) return;
      console.log(event.target.files[0]);
      let uuid = uuidv4();
      const storageRef = ref(storage);
      const imageRef = ref(storageRef, `profilePhoto/${uuid}/${profilePhoto.name}`);
      uploadBytes(imageRef, profilePhoto).then((snapshot) =>{
        getDownloadURL(snapshot.ref).then((url)=> {
          console.log(url);
          setProfilePhoto([url]);
        });
        
      } );
    }
    
    // const handleUploadLogo = (e) => {setCompanyLogo(e.target.files[0]);
    //   //console.log(e.target.files[0]);
    //   let uuid = uuidv4();
    //   const storageRef = ref(storage);
    //   const imageRef = ref(storageRef, `companyLogo/${uuid}/${companyLogo.name}`);
    //   uploadBytes(imageRef, companyLogo).then((snapshot) =>{
    //     getDownloadURL(snapshot.ref).then((url)=> {
    //       console.log(url);
    //       setCompanyLogo(url);
    //     });
        
    //   } );
    // }
     
    return (
        <div className="main-container">
          <div>
            <div>
                <img className="fsa-logo" alt="fsa_logo" src={logo} />
                <h2 className="main-heading main-content">
                    Create a New Business Card
                </h2>
            </div>
            <div className="panel-body">
              <form onSubmit={createCard}>
                <div className="form-group">   
                    <input type="text" name="name" className="input-name" placeholder="Name*" value={name} 
                    onChange={(event) => {setName(event.target.value);
                    }}/>
                </div>
                <div className="form-group">
                    <label htmlFor="job"></label>
                    <input type="text" name="job" className="input-job" placeholder="Job Title*" value={job} 
                    onChange={(event) => {setJob(event.target.value);
                    }} />
                </div>
                <div className="form-group">
                    <label htmlFor="company"></label>
                    <input type="text" name="company" className="input-company" placeholder="Company*" value={company}
                    onChange={(event) => {setCompany(event.target.value);
                    }} />
                </div>
                <div className="form-group">
                    <label htmlFor="mobile"></label>
                    <input type="text" name="mobile" className="input-mobile" placeholder="Mobile Number*" value={mobile}
                    onChange={(event) => {setMobile(event.target.value);
                    }}/>
                </div>
                <div className="form-group">
                    <label htmlFor="website"></label>
                    <input type="text" name="website" className="input-website" placeholder="Website" value={website}
                    onChange={(event) => {setWebsite(event.target.value);
                    }}/>
                </div>
                <div className="form-group">
                    <label htmlFor="linkedin"></label>
                    <input type="text" name="linkedin" className="input-linkedin" placeholder="LinkedIn" value={linkedin}
                    onChange={(event) => {setLinkedin(event.target.value);
                    }}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">  
                    <input type="text" name="email" className="input-name" placeholder="Email*" value={email} 
                    onChange={(event) => {setEmail(event.target.value);
                    }}/>
                    </label> 
                </div>
                <div className="form-group">
                    <label htmlFor="password">   
                    <input type="text" name="password" className="input-name" placeholder="Password*" value={password} 
                    onChange={(event) => {setPassword(event.target.value);
                    }}/>
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="profilePhoto">
                    <label htmlFor="profilePhoto">Profile Photo: </label>
                    <input type="file" onChange={(event) => {handleUploadPhoto(event)}} />
                    </label>
                </div>
                {/* <div className="form-group">
                     <label htmlFor="companyLogo">Company Logo:</label>
                    <input type="file" onChange={(e) => handleUploadLogo(e)} ></input>
                </div> 
                <div>
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    <label className="container">No profile photo and company logo
                    </label>
                </div>*/}
                <div className="form-one-button"><button className="submit-button">Submit</button></div>
              </form>
              <div className="form-one-button">
                <button className="submit-button"><Link to='/dbc/' className="link backToMain">Back to Main Page</Link></button>
            </div>
            </div>
          </div>
        </div>
      );
}

export default Create;