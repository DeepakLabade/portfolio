"use client";

import { useEffect, useState } from "react";
import Separator from "./separator";
import {motion} from "motion/react"
import { BasicVariants } from "../variants/basic-variant";

const Footer = () => {
  const [time, setTime] = useState<string>(
    new Date().toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
  );

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    }, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  return (
    <div className="my-15">
      <Separator />
      <div className="text-neutral-100 flex justify-between">
        <div className="">
          <motion.p
          variants={BasicVariants}
          initial="hidden"
          whileInView="show"
          viewport={{once: true}}
          transition={{duration: 0.3, delay: 0.2}}
          className="text-xs text-neutral-400">
            Developed by{" "}
            <motion.span
            variants={BasicVariants}
            initial="hidden"
            whileInView="show"
            viewport={{once: true}}
            transition={{duration: 0.3, delay: 0.3}}
            className="text-neutral-100 font-bold tracking-wide">
              Deepak
            </motion.span>
          </motion.p>
        </div>
        <div>
          <motion.p
          variants={BasicVariants}
          initial="hidden"
          whileInView="show"
          viewport={{once: true}}
          transition={{duration: 0.3, delay: 0.4}}
          className="text-xs text-neutral-400 font-mono">
            Chht. Sambhajinagar, India, {time}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
