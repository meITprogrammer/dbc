// import React, { useEffect, useState } from 'react';
// import FBDataService from "../services/fbServices"; 
// import { Link, useParams, useNavigate } from 'react-router-dom';

// function Main() {
//     const [name, setName] = useState();
//     const [job, setJob] = useState();
//     const [company, setCompany] = useState();
//     const [email, setEmail] = useState();
//     const [mobile, setMobile] = useState();
//     const [website,setWebsite] = useState();
//     const [linkedin, setLinkedin] = useState();
//     const [profilePhoto, setProfilePhoto] = useState();
//     const [companyLogo, setCompanyLogo] = useState();
//     const [password, setPassword] = useState();
//     const [key, setKey] = useState();
//     const params = useParams();
//     const navigate = useNavigate();

//     useEffect(() => {
//         setKey(params.id)
//         //console.log("Message from Context"+value);
//         console.log("Use effect exectuted show.js key"+params.id);
//         getCards();
//     }, []);

//     const getCards = async () => {
//         console.log ("Get board executed" + key);
//         try {
//             const docSnap = await FBDataService.getData(params.id);
//             console.log("the record is :", docSnap.data());
//             setName(docSnap.data().name);
//             setJob(docSnap.data().job);
//             setCompany(docSnap.data().company);   
//             setEmail(docSnap.data().email);
//             setMobile(docSnap.data().mobile);
//             setWebsite(docSnap.data().website);
//             setLinkedin(docSnap.data().linkedin);
//             setProfilePhoto(docSnap.data().profilePhoto);
//             setCompanyLogo(docSnap.data().companyLogo);      
//             setPassword(docSnap.data().password);
//         }   catch (err) {

//         }
//     }

//   return (
//     <div className='dbc-card'>
//         <div className='card-details'>        
//                 <h2>{name}</h2>
//                 <h4>{job}</h4>
//                 <h5>{company}</h5>
//                 <h5>{email}</h5>
//                 <h5>{mobile}</h5>
//                 <h5>{website}</h5>
//                 <h5>{linkedin}</h5>
//             </div>       
//     </div>
//   )
// }

// export default Main