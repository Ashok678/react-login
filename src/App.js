
import React from 'react';
import './App.css';
import Login from './login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tempapp from './component/temp';


function App() {
  return (
   <BrowserRouter>
       <Routes>
        <Route path='/' element ={<Login />} /> 
        <Route path='Tempapp' element ={< Tempapp />} /> 
       </Routes>
    </BrowserRouter>
  );
}

export default App;

