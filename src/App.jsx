import React from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Header from './Component/Header/Header'
import Main from './Component/Main/Main'
import Login from './Component/Login'
import Register from './Component/Register'
import Footer from './Component/Footer/Footer';
import './App.css'
import Forget from './Component/Forget.jsx';
import About from './Component/Main/About.jsx';
import Service from './Component/Main/Service.jsx';
import Faq from './Component/Main/Faq.jsx';
import Contact from './Component/Main/Contact.jsx';

const App = () => {
  return (
    <>
        <Router>
          
          <Header/>
          
          <Routes>
              <Route path="/" element={<Main />}></Route>
              <Route path="/about" element={<About/>}></Route>
              <Route path="/service" element={<Service/>}></Route>
              <Route path="/faq" element={<Faq/>}></Route>
              <Route path="/contact" element={<Contact/>}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<Register/>}></Route>
              <Route path="/forgot" element={<Forget/>}></Route>
          </Routes>
          
         
             
          <Footer/>
            
        </Router>
    </>
  )
}

export default App