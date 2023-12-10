import React, { useEffect, useState } from "react";
import { db } from "../fb-config";
import { Link, useParams, useNavigate } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";




function  Show () {
  
  const [dataList, setDataList] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State for the search term
  const [searchByCompany, setSearchByCompany] = useState(""); // State for search by company
  const params = useParams();
  const navigate = useNavigate();

   //const value = useContext(UserContext);

   useEffect(() => {  
    //setKey(params.id)
    //console.log("Message from Context"+value);
    
    getCard(params.id);
  }, [params.id]);
  
  const getCard = async () => {
    
    
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

      const handleSearch = (event) => {
        setSearchTerm(event.target.value);
      };
    
      const handleSearchByCompany = (event) => {
        setSearchByCompany(event.target.value);
      };

      const filteredData = dataList.filter((item) => {
        return (
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          item.company.toLowerCase().includes(searchByCompany.toLowerCase())
        );
      });

     
  const previousPage = () => {
    navigate(-1)
  };

    return (
      <div class="main-container">
        <div class="panel-heading">
        <button onClick={previousPage} className="submit-button-card">Back</button>
        <h2 className="main-heading main-content">
            Client List
            </h2>
        </div>
        <input
        type="text"
        placeholder="Search by name..."
        onChange={handleSearch}
        value={searchTerm}
        list="dataList"
      />
      <datalist id="dataList">
        {dataList.map((item) => (
          <option key={item.id} value={item.name} />
        ))}
      </datalist>
      {/* Search input for searching by company */}
      <input
        type="text"
        placeholder="Search by company..."
        onChange={handleSearchByCompany}
        value={searchByCompany}
      />
      <p />
        <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Company</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
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