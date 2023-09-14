import React from "react"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage"
import Create from "./components/Create"
import Update from "./components/Update";

export default function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Homepage />}/>
          <Route path='/Create' element={<Create />}/>
          <Route path='/Update' element={<Update />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


