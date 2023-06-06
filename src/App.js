import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Dashboard from '../src/pages/Dashboard';
import Login from '../src/pages/Login';
import Register from '../src/pages/Register';
import Header from './components/Header';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
   <Router>
    <div className='container'>
      <Header/>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/" element ={<Login/>}/>
        <Route path="/register" element ={<Register/>}/>
      </Routes>
    </div>
   </Router>
   <ToastContainer/>
   </>
  );
}

export default App;
