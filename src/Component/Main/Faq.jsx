import React, { useState } from 'react';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';
import { motion } from "motion/react"

const faqs = [
  {
    id:1,
    question: "Is BlockPulseX beginner-friendly?",
    answer: "Yes — it offers guided onboarding, demo accounts, and tutorials for new users."
  },
  {
    id:2,
    question: "Can I trade with INR or fiat?",
    answer: "Absolutely. BlockPulseX supports fiat on-ramps via UPI and bank transfers."
  },
  {
    id:3,
    question: "Is the platform available on mobile?",
    answer: "Yes, it's fully responsive and available on Android, iOS, and browser."
  },
  {
    id:4,
    question: "What type of referral rewards are available?",
    answer: "You earn POL through transparent, performance-based referral structures. Invite, engage, and grow your crypto network."
  }

];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (

    <>
        <section className='padding--tb bg-theme'>
            <div className="container">
                <div className="row mb-3">
                    <div className="col-md-8 mx-auto">
                        <motion.h2 className='service-title'
                          initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                            delay: 0.3,
                            duration: 0.8,
                          }}
                          viewport={{ once: false, amount: 0.3 }}>
                          Curious Minds, Clear Crypto Answers
                          </motion.h2>
                        <motion.p className='service-disc'
                        initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                            delay: 0.5,
                            duration: 0.9,
                          }}
                          viewport={{ once: false, amount: 0.3 }}>
                            At BlockPulseX, we understand that navigating the world of cryptocurrency can feel overwhelming — especially for newcomers stepping into the decentralized frontier.
                        </motion.p>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-10 mx-auto">
                        <div className="faq-container">
                            {faqs.map((faq, index) => (
                              <motion.div key={index} className="faq-item" initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                            delay: 0.7,
                            duration: 1,
                          }}
                          viewport={{ once: false, amount: 0.3 }}>
                                <div className="faq-header" onClick={() => toggleAccordion(index)}>
                                
                                  <span className="faq-question"><span>{faq.id}.</span> {faq.question}</span>
                                  <span className="faq-icon">
                                    {openIndex === index ? <FiChevronDown /> : <FiChevronRight />}
                                  </span>
                                </div>
                                {openIndex === index && (
                                  <div className="faq-answer">{faq.answer}</div>
                                )}
                              </motion.div>
                            ))}

                        </div>
                    </div>
                </div>
    
            </div>
        </section>
    </>

    
  );
};

export default Faq;