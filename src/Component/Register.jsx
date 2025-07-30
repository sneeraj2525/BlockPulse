import React, { useState } from 'react';
import logo from "../../public/images/logo/logo.png";
import { Form, Button} from 'react-bootstrap';
import { motion } from "motion/react"
import { Link } from 'react-router-dom';

const Register = () => {

const [showPassword, setShowPassword] = useState(false);
const [showConfirm, setShowConfirm] = useState(false);

return (
<>
  <section className='login-page'>
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
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
                                        viewport={{ once: false, amount: 0.3 }}
                                        />
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
                          >Create Your BlockPulseX Account</motion.h4>
            </div>

            <Form>
              <div className="row">
                <div className="col-md-6">
                  <Form.Group className="mb-3" controlId="sponsorId">
                    <Form.Label>Sponsor ID</Form.Label>
                    <Form.Control type="text" placeholder="Enter Sponsor ID" />
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group className="mb-3" controlId="sponsorName">
                    <Form.Label>Sponsor Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Sponsor Name" />
                  </Form.Group>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <Form.Group className="mb-3" controlId="userId">
                    <Form.Label>User ID</Form.Label>
                    <Form.Control type="text" placeholder="Choose a User ID" />
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group className="mb-3" controlId="userName">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Full Name" />
                  </Form.Group>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group className="mb-3" controlId="phone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="tel" placeholder="Enter phone number" />
                  </Form.Group>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <div className="d-flex">
                      <Form.Control type={showPassword ? 'text' : 'password' } placeholder="Create password" />
                      <Button variant="outline-secondary" onClick={()=> setShowPassword(!showPassword)}
                        className="ms-2"
                        >
                        {showPassword ? 'Hide' : 'Show'}
                      </Button>
                    </div>
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group className="mb-4" controlId="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <div className="d-flex">
                      <Form.Control type={showConfirm ? 'text' : 'password' } placeholder="Repeat password" />
                      <Button variant="outline-secondary" onClick={()=> setShowConfirm(!showConfirm)}
                        className="ms-2"
                        >
                        {showConfirm ? 'Hide' : 'Show'}
                      </Button>
                    </div>
                  </Form.Group>
                </div>
              </div>

              <Button  type="submit" className="w-100 btn btn-log">Register</Button>

              <div className="text-center mt-3">
                <span className='text-white'>Already Joined? </span>
                <Link to="/login" className="text-decoration-none fw-bold text-primary">Click here</Link>
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

export default Register