import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import contact from "../../../public/images/contact.png";
import { motion } from "motion/react"

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Integrate EmailJS, Formspree, or backend API here
  };

  return (

    <>
        <section className='padding--tb bg-theme'>
            <div className="container">
                <div className="row">
                    <div class="col-md-10 mx-auto">
                        <motion.h2 class="service-title" 
                        initial={{ opacity: 0, y: 75 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                            delay: 0.3,
                            duration: 0.8,
                          }}
                          viewport={{ once: false, amount: 0.3 }}>Let's Connect: Questions, Feedback, or Collaboration Welcome</motion.h2>
                    </div>
                </div>
                
                <div className="row align-items-center justify-content-center g-3 mt-5">
                    <div className='col-md-4 offset-md-2'>
                        <motion.div className='contact-page' 
                        initial={{ opacity: 0, x: -50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                            delay: 0.3,
                            duration: 0.8,
                          }}
                          viewport={{ once: false, amount: 0.3 }}>
                        <h2 className='text-white'>Send a Message</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formName" className="mb-3">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                required
                            />
                            </Form.Group>

                            <Form.Group controlId="formEmail" className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                required
                            />
                            </Form.Group>

                            <Form.Group controlId="formMessage" className="mb-3">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Type your message"
                                required
                            />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="btn btn-theme w-100">
                            Send Message
                            </Button>
                        </Form>
                        </motion.div>
                    </div>
                    <div className='col-md-6'>
                        <motion.img className="img-fluid d-lg-block d-md-block d-none" src={contact} 
                            initial={{ opacity: 0, x: 50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                            delay: 0.3,
                            duration: 0.8,
                          }}
                          viewport={{ once: false, amount: 0.3 }}
                        />
                    </div>
                </div>
                
            </div>
        </section>
    </>


  );
};

export default Contact;