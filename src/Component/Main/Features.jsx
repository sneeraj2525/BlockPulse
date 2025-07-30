import React, { useState } from 'react';
import feature from "../../../public/images/service-shape.png";
import { motion } from "motion/react"

const TabContent = {
"Multi-layer Security": "BlockPulseX prioritizes user safety with advanced multi-layer protection. It includes biometric authentication, two-factor login, encrypted asset storage, and real-time security monitoring. These measures ensure users' digital wallets and personal data remain shielded from unauthorized access, cyber threats, and breaches. With ongoing system audits and resilient backend architecture, traders enjoy peace of mind while navigating fast-moving crypto markets securely.",
"Live Market Insights": "Stay ahead of the curve with BlockPulseX’s live market insights. Real-time price feeds, predictive analytics, and dynamic trading signals empower users to make timely, data-driven decisions. Interactive charts backed by AI-powered analysis reveal trends, volatility, and entry-exit points. The platform’s alert system keeps traders informed, even on the go, helping them seize opportunities and mitigate risks with precision.",
"Mobile Friendly": "Trade anytime, anywhere with BlockPulseX’s mobile-friendly ecosystem. The responsive UI adapts flawlessly across devices, from desktops to smartphones. With dedicated Android and iOS apps, users enjoy full trading functionality, secure access, and real-time notifications on the move. Whether monitoring portfolios or executing orders, the mobile interface offers a seamless experience optimized for speed and usability.",
"Fiat Integration": "BlockPulseX bridges the gap between crypto and traditional finance through robust fiat integration. Users can effortlessly deposit or withdraw funds using INR, USD, and other major currencies via UPI and bank transfers. The process is secure, fast, and intuitive, making onboarding simple for new users. With transparent rates and local support, BlockPulseX ensures smooth transitions between fiat and digital assets."
};

const Features = () => {
const [activeTab, setActiveTab] = useState("Multi-layer Security");

const tabNames = Object.keys(TabContent);

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
                          viewport={{ once: false, amount: 0.3 }}
                          >Core Features That Drive Your Crypto Success</motion.h2>
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
                          viewport={{ once: false, amount: 0.3 }}>
                            Experience cutting-edge security, real-time analytics, automation tools, and seamless mobile integration — all engineered for powerful crypto performance and growth.
                    </motion.p>
                </div>
            </div>
            
            <div className="row mb-3">
                <div className="col-md-10 mx-auto">
                    <motion.div className="tabs-container" initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                            delay: 0.3,
                            duration: 0.8,
                          }}
                          viewport={{ once: false, amount: 0.3 }}>
                        <div className="tab-buttons text-center">
                            {tabNames.map((tab) => (
                            <button key={tab} className={`tab-btn btn btn-theme mx-3 ${activeTab===tab ? 'active' : '' }`} onClick={()=> setActiveTab(tab)} >
                                {tab}
                            </button>
                            ))}
                        </div>

                        <div className="tab-content">
                            <div className="row align-items-center">
                                <motion.div className="col-md-8" 
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
                                    <h3>{activeTab}</h3>
                                    <p>{TabContent[activeTab]}</p>
                                </motion.div>
                                <motion.div className="col-md-4" 
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
                                    <img className="img-fluid" src={feature} />
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

        </div>
    </section>
</>
);
};

export default Features;