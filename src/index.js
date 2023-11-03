import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Create from './components/Create';
import Edit from './components/Edit';
import Card from './components/Card';
import {BrowserRouter,Routes, Route } from "react-router-dom";
import Signup from './authentication/Signup';
import Signin from './authentication/Signin';
import Authentication from './authentication/Authentication';
import AuthDetails from './authentication/AuthDetails';
import GenerateQR from "./components/GenerateQR"
import Dashboard from './components/Dashboard';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <BrowserRouter>
        <Routes>
        <Route exact path='/dbc' element={<App />}/>          
          <Route path='/dbc/edit/:id' element={<Edit />}/>            
          <Route path='/dbc/create' element={<Create />}/>           
          <Route path='/dbc/card/:id'element={<Card />}/>
          <Route path='/dbc/authentication'element={<Authentication />}/>
          <Route path='/dbc/signup'element={<Signup />}/>
          <Route path='/dbc/signin'element={<Signin />}/>
          <Route path='/dbc/authdetails'element={<AuthDetails />}/>      
          <Route path='/dbc/card/qrcode/:id'element={<GenerateQR />}/>      
          <Route path='/dbc/dashboard'element={<Dashboard />}/>      
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

