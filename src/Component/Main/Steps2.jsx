import React from 'react'
import img2 from '../../../public/images/reg5.png'
import { motion } from "motion/react"

const Steps2 = () => {

const slideInOut = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 25,
      delay: 0.3,
      duration: 1.2,
    },
  },
  exit: {
    opacity: 0,
    x: 50,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 20,
      duration: 1,
    },
  },
};



  return (
    <>
            <div className="row g-3 justify-content-around align-items-center ">
                
                <div className="col-md-7 d-lg-block d-md-block d-none">
                    <div className="steps-signup-img">
                        <motion.img className="img-fluid" src={img2} 
                            variants={slideInOut}
                            initial="hidden"
                            whileInView="visible"
                            exit="exit"
                            viewport={{ once: false, amount: 0.3 }}

                        />
                    </div>
                </div>
                <div className="col-md-5 ">
                    <motion.div className="steps-signup" 
                    initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                            delay: 0.3,
                            duration: 0.8,
                          }}
                        exit="exit"
                        viewport={{ once: false, amount: 0.3 }}>
                        <span>02</span>
                        <h2>Fund Your Wallet</h2>
                        <h6>Add fiat or crypto assets</h6>
                    </motion.div>
                </div>
            </div>
        </>
  )
}

export default Steps2