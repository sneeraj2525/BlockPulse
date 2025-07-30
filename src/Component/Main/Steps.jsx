import React from 'react'
import Steps1 from './Steps1'
import Steps2 from './Steps2'
import Steps3 from './Steps3'
import { motion } from "motion/react"


const Steps = () => {
  return (
    
    <>
        <section className='padding--tb bg-theme'>
            <div className="container">
                <div className="row mb-3">
                    <div className="col-md-10 mx-auto">
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
                          viewport={{ once: false, amount: 0.3 }}>Start Your Crypto Journey</motion.h2>
                        <motion.p className='service-disc' initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                            delay: 0.5,
                            duration: 0.9,
                          }}
                          viewport={{ once: false, amount: 0.3 }}>Register your free BlockPulseX account, verify identity, connect wallet, explore tools, track real-time crypto assets, join thriving community, access smart contracts, and unleash powerful features for secure, decentralized growth and innovation.</motion.p>
                    </div>
                </div>
                    <Steps1/>
                    <Steps2/>
                    <Steps3/>
                
            </div>
        </section>
    </>

  )
}

export default Steps