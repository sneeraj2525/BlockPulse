import React, { useState } from 'react';

import logo from "../../public/images/logo/logo.png";
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import { motion } from "motion/react"

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);


  return (
    <>
      <section className='login-page'>
        <div className="container">
            <div className="row">
              <div className="col-md-4 mx-auto">
                  <motion.div className="loginbg " 
                      initial={{ opacity: 0, y: 75 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                        delay: 0.3,
                        duration: 0.8,
                      }}
                      viewport={{ once: false, amount: 0.3 }}>

                      <div className="text-center mb-3">
                          <motion.img src={logo} alt="logo" 
                          initial={{ opacity: 0, y: 75 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            type: "tween",
                            stiffness: 100,
                            damping: 20,
                            delay: 0.5,
                            duration: 0.9,
                          }}
                          viewport={{ once: false, amount: 0.3 }}/>
                          <motion.h4 className='mt-3 mb-4 text-white' 
                          initial={{ opacity: 0, y: 75 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            type: "tween",
                            stiffness: 100,
                            damping: 20,
                            delay: 0.7,
                            duration: 1,
                          }}
                          viewport={{ once: false, amount: 0.3 }}
                          >Login to BlockPulseX</motion.h4>
                      </div>

                        <Form>
                            <Form.Group className="mb-3" controlId="loginEmail">
                              <Form.Label>Email address</Form.Label>
                              <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-2" controlId="loginPassword">
                              <Form.Label>Password</Form.Label>
                              <div className="d-flex">
                                <Form.Control
                                  type={showPassword ? 'text' : 'password'}
                                  placeholder="Password"
                                />
                                <Button
                                  variant="outline-secondary"
                                  onClick={() => setShowPassword(!showPassword)}
                                  className="ms-2"
                                >
                                  {showPassword ? 'Hide' : 'Show'}
                                </Button>
                              </div>
                            </Form.Group>


                            <div className="text-end mb-3">
                              <Link to="/forgot" className="text-decoration-none text-primary">Forgot Password?</Link>
                            </div>

                             <Button type="submit" className="w-100 btn btn-log">Login</Button>

                            <div className="text-center mt-3">
                              <span className='text-white'>New to BlockPulseX? </span>
                              <Link to="/register" className="text-decoration-none fw-bold text-primary">Join Now</Link>
                            </div>


                        </Form>
                  </motion.div>
              </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Login