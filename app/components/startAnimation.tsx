"use client";
import { motion } from "motion/react";

const StartAnimation = () => {
  return (
    <motion.div
    initial={{
        opacity: 1
    }}
    animate={{
        opacity: 0
    }}
    transition={{
        delay: 2.8
    }}
    className="bg-black flex items-center justify-center h-screen w-full overflow-hidden fixed top-0 left-0">
        <motion.div className="h-screen w-full bg-white absolute overflow-hidden"
        initial={{
            y: '120%',
        }}
        animate={{
            y: 0,
        }}
        transition={{
            duration: 0.4,
            ease: 'easeIn',
            delay: 2.2,
        }}
        >

        </motion.div>
      <motion.div
        initial={{
          // x:350,
          scale: 0.5,
        }}
        animate={{
          scale: 0.75,
        }}
        transition={{
           delay: 1.7,
    duration: 0.8,
    type: "spring",
    stiffness: 60,
    damping: 10,
    mass: 0.6,
        }}
        className="relative flex overflow-hidden tracking-[-0.08em] text-[12rem] leading-44 font-medium text-white "
      >
        Deepak Labade
        <motion.div
          initial={{
            x: 0,
          }}
          animate={{
            x: "100%",
          }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.77, 0, 0.175, 1],
          }}
          className="absolute w-full h-full bg-black opacity-90"
        ></motion.div>
      </motion.div>
    </motion.div>
  );
};

export default StartAnimation;
