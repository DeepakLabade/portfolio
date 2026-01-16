import Image from "next/image";
import Dot from "./dot";
import GithubSvg from "../svg/github";
import LinkedinSvg from "../svg/linkedin";
import GmailSvg from "../svg/gmail";
import Link from "next/link";
import { motion } from "motion/react";
import { BasicVariants } from "../variants/basic-variant";

const Hero = () => {
  return (
    <div className="pt-10">
      <div className="text-neutral-100  flex gap-6 items-end">
        <motion.div
          variants={BasicVariants}
          initial="hidden"
          animate="show"
          transition={{duration: 0.3}}
          className="border border-neutral-700 flex rounded-full max-w-40"
        >
          <Image
            src={"/photo.png"}
            alt="/avatar.png"
            width={140}
            height={140}
            className="rounded-full border-2"
          />
        </motion.div>
        <div className="flex-1 mt-3 flex gap-0.5 mb-1 justify-between items-end">
          <div className="">
            <motion.h1
              variants={BasicVariants}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.1, duration: 0.3 }}
              className="text-neutral-200 font-bold text-4xl"
            >
              Deepak Labade
            </motion.h1>
            <motion.p
              variants={BasicVariants}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.2, duration: 0.3 }}
              className="text-xs text-neutral-400 font-mono flex center gap-2"
            >
              21 <Dot /> Engineer <Dot /> Developer <Dot /> Builder
            </motion.p>
            <div className="flex gap-3 mt-1.5">
              <motion.div 
              variants={BasicVariants}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.3, duration: 0.3 }}
              >
                <Link href={"mailto:deepaklabade001@gmail.com"}>
                  <GmailSvg />
                </Link>
              </motion.div>
              <motion.div
              variants={BasicVariants}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.4, duration: 0.3 }}
              >
                <Link
                  href={"https://www.linkedin.com/in/deepaklabade/"}
                  target="_blank"
                >
                  <LinkedinSvg />
                </Link>
              </motion.div>
              <motion.div 
              variants={BasicVariants}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.5, duration: 0.3 }}
              >
                <Link
                  href={"https://www.github.com/deepaklabade"}
                  target="_blank"
                >
                  <GithubSvg />
                </Link>
              </motion.div>
            </div>
          </div>
          <motion.div className="text-neutral-400"
          variants={BasicVariants}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.6, duration: 0.3 }}
          >
            <Link
              href={
                "https://drive.google.com/file/d/1lVrxvqhQWXL3J87n7OfZQW1aqkQKg3qm/view"
              }
              target="_blank"
            >
              <button className="border border-neutral-600 rounded-md px-2 py-px cursor-pointer text-sm hover:text-neutral-200 hover:border-neutral-500 hover:shadow-gray-50 hover:shadow-2xl">
                Resume / CV
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
