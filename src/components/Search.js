//import React, { useState } from 'react'
import { collection, query, where, getDocs } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { db } from "../fb-config";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      const fetchData = async () => {
        try {
          const q = await query(collection(db, "cards"), where("name", "==", searchTerm));
          // const querySnapshot = await db.collection("cards").where("name", "==", searchTerm).get();
          // const results = [];
          // querySnapshot.forEach((doc) => {
          //   results.push(doc.data());
          // });
          const querySnapshot = await getDocs(q);
            if (querySnapshot.empty) {
              // Handle the case when the email does not exist
              console.log("Record does not exist");
              
              // You might set some default values for the user data here
            } else {
              querySnapshot.forEach((doc) => {
                // Access the data and set state or perform other operations
                const userData = doc.data();
          setSearchResults(userData);
        });
      }
        } catch (error) {
          console.error("Error occurred while searching: ", error);
        }
      };
      fetchData();
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by name"
      />
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
