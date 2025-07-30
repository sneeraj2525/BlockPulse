import React from 'react'
import about from "../../../public/images/ab3.png";
import Vision from './Vision';
import { motion } from "motion/react"



const About = () => {
const slideInOut = {
  hidden: { opacity: 0, x: -100 },
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
    x: 100,
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
        <section className='padding--tb position-relative'>
          <div className="container">
            <div className="row">

              <div className="col-md-7">
                <motion.div className="about"  >

                  <motion.span className='welbadge mb-3' >
                    About BlockPulseX
                  </motion.span>

                  <motion.h2 className='about--title'
                    variants={slideInOut}
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                    viewport={{ once: false, amount: 0.3 }}
                    >
                    Empowering Every Crypto Move with Precision, Speed, and Trust
                  </motion.h2>

                  <motion.p className="about-disc" 
                    variants={slideInOut}
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                    viewport={{ once: false, amount: 0.4 }}
                    >
                      BlockPulseX was born out of a passion to make crypto trading intuitive, secure, and empowering for every user — whether you're exploring digital assets for the first time or you're a seasoned trader scanning the charts. We blend cutting-edge technology with a user-centric approach, offering lightning-fast transactions, transparent market data, and a seamless interface. Our platform is engineered to remove complexity and bring clarity to the world of blockchain finance, making sure opportunity never slips through your fingers.
                  </motion.p>

                  <motion.p className="about-disc"
                    variants={slideInOut}
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                    viewport={{ once: false, amount: 0.5 }}
                    >
                      Beyond trading, BlockPulseX is committed to building a global community of informed, confident investors. Through smart tools, educational resources, and live market signals, we help users elevate their strategy and maximize growth. We believe in financial freedom powered by knowledge, security, and trust — and we’re here to make sure every crypto move counts.
                  </motion.p>

                  
                    <Vision />
                  
                </motion.div>
              </div>

              <div className="col-md-5">
                <div className="text-center about--img"  >
                    <motion.img className="img-fluid rounded-3" src={about} width={650}
                      initial={{ opacity: 0, x: -100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 25,
                        delay: 0.5,
                        duration: 1.2
                      }}
                      viewport={{ once: false, amount: 0.5 }}

                    />
                </div>
              </div>

            </div>
          </div>
        </section>
    </>
  )
}

export default About