import React from "react";
import { skills } from "../constants/skills";
import {motion} from "motion/react"
import { BasicVariants } from "../variants/basic-variant";

const SkillsSection = () => {
  return (
    <div className="text-neutral-100 my-10 ">
      <div>
        <div className="max-w-full">
          <div>
            <motion.h1
            variants={BasicVariants}
            initial="hidden"
            whileInView="show"
            viewport={{once: true}}
            transition={{duration: 0.3, delay: 0.2}}
            className="text-xl font-bold mb-3">Skills</motion.h1>
          </div>
          <div className="flex gap-2 flex-wrap">
            {skills.map((skill, idx) => (
              <motion.div
              variants={BasicVariants}
              initial="hidden"
              whileInView="show"
              viewport={{once: true}}
              transition={{duration: 0.3, delay: 0.3 + (0.05 * idx)}}
              >
                <Icon text={skill.text} key={skill.text} Icon={skill.icon} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Icon = ({
  text,
  Icon,
}: {
  text: String;
  Icon: React.ComponentType<{ className?: string }>;
}) => {
  return (
    <div>
      <div className="flex w-fit cursor-pointer border border-neutral-700 gap-1.5 bg-neutral-950 px-2 py-1 rounded-lg text-sm items-center justify-center">
        <Icon className="w-4 h-4" />
        {text}
      </div>
    </div>
  );
};

export default SkillsSection;
