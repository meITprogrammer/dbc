import React, { useEffect, useState } from "react";
import { db } from "../fb-config";
import { Link, useParams, useNavigate } from 'react-router-dom';
import { collection, query, where, getDocs, deleteDoc } from "firebase/firestore";
import Table from 'react-bootstrap/Table';


function  Show () {
  
  const [name, setName] = useState();
  const [job, setJob] = useState('');
  const [company,setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [website, setWebsite] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [password, setPassword] = useState('');
  //const [companyLogo, setCompanyLogo] = useState();
  const [profilePhoto, setProfilePhoto] = useState();
  const [error, setError] = useState();
  const [dataList, setDataList] = useState([]);
  const [qrcode, setQrcode] = useState('');
  const [url, setUrl] = useState('');
  const [key, setKey] = useState();
  const params = useParams();
  const navigate = useNavigate();

   //const value = useContext(UserContext);

   useEffect(() => {  
    setKey(params.id)
    //console.log("Message from Context"+value);
    console.log("Use effect executed show.js key"+params.id);
    getCard();
  }, []);
  
  const getCard = async () => {
    
    console.log("Get board executed"+key);
    try {
      const querySnapshot = await getDocs(collection(db, "cards"));
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({id:doc.id, ...doc.data()});
      }); 
        setDataList(data);
      } catch(error) {
        console.log("error")
      }};
  const previousPage = () => {
    navigate(-1)
  };

    return (
      <div class="main-container">
        <div class="panel-heading">
        <button onClick={previousPage} className="submit-button-card">Back</button>
          <h3 class="panel-title">
            Client List
            </h3>
        </div>
        <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Company</th>
              <th>Click to View</th>
            </tr>
          </thead>
          <tbody>
            {dataList.map((item, index) => (
            <tr key={index}>
             <td>{item.name}</td>
             <td>{item.company}</td>
             <td><Link to={`/card/${item.email}`}><button>View</button></Link></td>
            </tr>
          ))}
          </tbody>
        </table>
        </div>
    </div>
    );
  
}

export default Show;