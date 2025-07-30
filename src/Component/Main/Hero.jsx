import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "motion/react"

const Hero = () => {
return (
<>
  <section className='hero'>
    <div className='container'>
      <div className="row mt-5">
        <div className="col-md-6 ms-auto ">
          <div className="mt-5">
           <motion.h5
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.3,
              duration: 0.8,
            }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.span className='welbadge'>
              Welcome to BlockPulseX
            </motion.span>
          </motion.h5>

            <motion.h1 className='hero-title' 
                initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    delay: 0.4,
                    duration: 0.8,
                  }}
                  viewport={{ once: false, amount: 0.3 }}>
                          
                  <span>BlockPulseX </span> Trade Beyond Boundaries
                  </motion.h1>
            <motion.h6 className='text-white'
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    delay: 0.5,
                    duration: 0.9,
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                >Unlock dynamic crypto trading with real-time insights, rapid execution, precision
              tools, secure access, and bold confidence across global markets.</motion.h6>
            <motion.div className="mt-4" 
            initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    delay: 0.5,
                    duration: 1,
                  }}
                  viewport={{ once: false, amount: 0.3 }}>
              <Link className="btn btn-hero mx-1" to='/login'>Login</Link>
              <Link className="btn btn-hero mx-1" to='/login'>Join Now</Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>
)
}

export default Hero