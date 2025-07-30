import React from 'react';
import { motion } from "motion/react"

const servicesData = [
  {
    id: "service-001",
    title: "Spot & Margin Trading",
    description: "Execute lightning-fast trades with precision pricing and access leverage options to amplify your crypto strategies."
  },
  {
    id: "service-002",
    title: "Secure Crypto Wallet",
    description: "Store digital assets with multi-layer encryption, biometric access, and seamless portfolio management tools."
  },
  {
    id: "service-003",
    title: "Referral Rewards System",
    description: "Grow your earnings by inviting others and earn POL through transparent, performance-based referral structures."
  },
  {
    id: "service-004",
    title: "Learn & Earn Modules",
    description: "Engage with tutorials, quizzes, and live webinars that reward users with POL tokens for every milestone achieved."
  },
  {
    id: "service-005",
    title: "AI Trading Bots",
    description: "Automate your trading strategies with intelligent bots that adapt to market trends and optimize performance in real-time."
  },
  {
    id: "service-006",
    title: "Real-Time Market Analytics",
    description: "Make informed decisions with live data feeds, predictive charts, and custom alerts designed to sharpen your trading edge."
  }
];

const Service = () => {

  return (
        <>
        <section className='padding--tb bg-theme'>
        
            <div className="container">
                <div className="row mb-3">
                    <div className="col-md-6 mx-auto">
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
                          viewport={{ once: false, amount: 0.3 }}
                          >
                          Our Core Offerings at BlockPulseX
                        </motion.h2>
                        <motion.p className='service-disc' 
                          initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                            delay: 0.4,
                            duration: 0.8,
                          }}
                          viewport={{ once: false, amount: 0.3 }}
                          >Delivering secure wallets, lightning-fast trades, automated bots, real-time insights, and community-driven tools for smart, seamless crypto empowerment worldwide.</motion.p>
                    </div>
                </div>
                <div className="row g-5">
                    {servicesData.map(service => (
                    <div className="col-md-4" key={service.id}>
                        <motion.div className="bg-service"
                        initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                            delay: 0.4,
                            duration: 0.8,
                          }}
                          viewport={{ once: false, amount: 0.3 }}
                          >
                            <h2>{service.title}</h2>
                            <p>{service.description}</p>
                        </motion.div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    </>
  );
};

export default Service;