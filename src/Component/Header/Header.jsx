import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../../../public/images/logo/logo.png";
import  './Header.css';
import { IoMenu } from "react-icons/io5";
import { motion , useScroll } from "motion/react"

const Header = () => {

const [sticky , setSticky] = useState(false)

const { scrollYProgress } = useScroll()

useEffect(() =>{
  const handleScroll =()=>{
    setSticky(window.scrollY > 50)
  };
  window.addEventListener("scroll" ,handleScroll);
  return () => removeEventListener('scroll', handleScroll)
},[])
  
return (
<>
<section className='h-container'>
    <nav className={`navbar navbar-expand-lg navbar-light bg--nav ${sticky ? 'sticky-scroll' : ''}`}>
    <motion.div className="topBorder" style={{ scaleX: scrollYProgress }}></motion.div>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} width={"150px"} />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <IoMenu />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/service">Service</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/faq">Faqs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Access PDF</Link>
            </li>
          </ul>
          <div className="d-flex ">
            <Link className="btn btn-theme mx-1" to='/login'>Login</Link>
            <Link className="btn btn-theme mx-1" to='/register'>Register</Link>
          </div>
        </div>
      </div>
    </nav>
     
  </section>
 
</>
)
}

export default Header