import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Create from './components/Create';
import Edit from './components/Edit';
import Card from './components/Card';
import {BrowserRouter,Routes, Route } from "react-router-dom";
import Signin from './authentication/Signin';
import Authentication from './authentication/Authentication';
import GenerateQR from "./components/GenerateQR"
import Dashboard from './components/Dashboard';
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from './authentication/ProtectedRoute';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <BrowserRouter>
      <UserAuthContextProvider>
        <Routes>
        <Route exact path='/dbc' element={<App />}/>          
          <Route path='/dbc/create' element={<Create />}/>           
          <Route path='/dbc/signin'element={<Signin />}/>
          <Route path='/dbc/card/:id'element={<Card />}/>
          <Route path='/dbc/card/qrcode/:id'element={<GenerateQR />}/>      
          <Route path='/dbc/authentication'element={<Authentication />}/>
          <Route path='/dbc/dashboard/:id' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />                
          <Route path='/dbc/edit/:id' element={<ProtectedRoute><Edit /></ProtectedRoute>}/>            
        </Routes>
        </UserAuthContextProvider>
      </BrowserRouter>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

