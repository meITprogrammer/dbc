import React, { useEffect, useState } from "react";
import { db } from "../fb-config";
import { Link, useParams, useNavigate } from 'react-router-dom';
import { collection, query, where, getDocs} from "firebase/firestore";
import phoneicon from "../images/phone_icon.png"
import emailicon from "../images/Mail.png"
import websiteicon from "../images/web_icon.png"
import linkedinicon from "../images/linkedin_icon.png"

function  Card () {
  const [name, setName] = useState();
  const [job, setJob] = useState('');
  const [company,setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [website, setWebsite] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [profilePhoto, setProfilePhoto] = useState();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {  
    getCard(params.id);
  }, [params.id]);

  const getCard = async () => {
    console.log("Get board executed"+params.id);
        try {
            let userEmail = params.id;
            const q = query(collection(db, "cards"), where("email", "==", userEmail));
            const querySnapshot = await getDocs(q);
            if (querySnapshot.empty) {
              // Handle the case when the email does not exist
              console.log("Record does not exist");
              alert ("Record does not exist")
              navigate("/");
              // You might set some default values for the user data here
            } else {
              querySnapshot.forEach((doc) => {
                // Access the data and set state or perform other operations
                const userData = doc.data();
                setName(userData.name);
                setJob(userData.job);
                setCompany(userData.company);
                setMobile(userData.mobile);
                setWebsite(userData.website);
                setLinkedin(userData.linkedin);
                setEmail(userData.email);
                setProfilePhoto(userData.profilePhoto);
                // setCompanyLogo(userData.companyLogo);
              });
            }
          } catch (error) {
            // Handle any potential errors that might occur during the data fetching process
            console.error("Error occurred while fetching user data:", error);
          }
         };


 const generateQRCode = () => {
    navigate(`/card/qrcode/${email}`);
 }
 
//  const previousPage = () => {
//   navigate(-1)
// };
    return (
      <div>
        {profilePhoto ? (
           <div className="card-container">
           <div>
            <div className="card-details">
               <div>
                <img src={profilePhoto} className="profile-photo" alt="bizcard"></img>
               </div>
                <div>
                  <h2 className="profile-name">{name}</h2>
                  <h4 className="profile-name">{job}</h4>
                  <h3 className="profile-name">{company}</h3>
                  <h4 className="profile-details"><img className="card-icon" alt="phone-icon" src={phoneicon} /><a href={`tel:${mobile}`} className="text-decoration-off">  {mobile}</a></h4>
                  <h4 className="profile-details"><img className="card-icon" alt="phone-icon" src={websiteicon} /> <a href={website} target="_blank" rel="noopener noreferrer" className="text-decoration-off"> {website}</a></h4>
                  <h4 className="profile-details"><img className="card-icon" alt="phone-icon" src={linkedinicon} /><a href={`https://www.linkedin.com/in/${linkedin}/`} className="text-decoration-off">  {linkedin}</a></h4>
                  <h4 className="profile-details"><img className="card-icon" alt="phone-icon" src={emailicon} /><a href={`mailto:${email}`} className="text-decoration-off">{email}</a> </h4>
                
                </div>
    
                   
              <div className='form-one-button'>
              <button  onClick={generateQRCode} className="submit-button-card">Generate QR</button>
                <button className="submit-button-card"><Link to={`/dashboard/${email}`} className="link backToMain">Dashboard</Link></button>
              </div>
               
            </div>
          </div>
        </div>
        ): (
          <div className="card-container2">
          <div>
           <div className="card-details">
               <div>
                 <h2 className="profile-name">{name}</h2>
                 <h4 className="profile-name">{job}</h4>
                 <h4 className="profile-name">{company}</h4>
                 <h4 className="profile-details"><img className="card-icon" alt="phone-icon" src={phoneicon} /><a href={`tel:${mobile}`} className="text-decoration-off">  {mobile}</a></h4>
                  <h4 className="profile-details"><img className="card-icon" alt="phone-icon" src={websiteicon} /> <a href={website} target="_blank" rel="noopener noreferrer" className="text-decoration-off"> {website}</a></h4>
                  <h4 className="profile-details"><img className="card-icon" alt="phone-icon" src={linkedinicon} /><a href={`https://www.linkedin.com/in/${linkedin}/`} className="text-decoration-off">  {linkedin}</a></h4>
                  <h4 className="profile-details"><img className="card-icon" alt="phone-icon" src={emailicon} /><a href={`mailto:${email}`} className="text-decoration-off">{email}</a> </h4>
                
               </div>
   
             <div className='form-one-button'>
               <button  onClick={generateQRCode} className="submit-button-card">Generate QR</button>
               <button className="submit-button-card"><Link to={`/dashboard/${email}`} className="link backToMain">Dashboard</Link></button>
             </div>
            
           </div>
         </div>
       </div>
        )}
     
    </div>
    );
  
}
export default Card;