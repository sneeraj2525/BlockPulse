import React from 'react';
import { motion } from "motion/react"

const Vision = () => {
  const VisionData = {
    vision: {
      id: "vision-001",
      title: "Vision",
      description:
        "To redefine crypto trading by delivering an intelligent, immersive, and globally accessible platform that empowers financial independence."
    },
    mission: {
      id: "mission-001",
      title: "Mission",
      description:
        "Simplify digital asset trading, build trust through transparency, and empower users with innovative tools and a community-driven ecosystem."
    }
  };

  return (
    <div className="row g-3 mt-3">
      <div className="col-md-6" key={VisionData.vision.id}>
        <motion.div className="vision"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "tween",
                stiffness: 100,
                damping: 25,
                delay: 0.3,
                duration: 1.2
              }}
              viewport={{ once: false, amount: 0.5 }}
        >
          <h4>{VisionData.vision.title}</h4>
          <p>{VisionData.vision.description}</p>
        </motion.div>
      </div>

      <div className="col-md-6" key={VisionData.mission.id}>
        <motion.div className="mission"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "tween",
                stiffness: 100,
                damping: 25,
                delay: 0.3,
                duration: 1.3
              }}
              viewport={{ once: false, amount: 0.6 }}>
          <h4>{VisionData.mission.title}</h4>
          <p>{VisionData.mission.description}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Vision;