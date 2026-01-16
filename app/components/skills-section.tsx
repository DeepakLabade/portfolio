import React from "react";
import { skills } from "../constants/skills";

const SkillsSection = () => {
  return (
    <div className="text-neutral-100 my-10 ">
      <div>
        <div className="max-w-full">
          <div>
            <h1 className="text-xl font-bold mb-3">Skills</h1>
          </div>
          <div className="flex gap-2 flex-wrap">
            {skills.map((skill) => (
              <Icon text={skill.text} key={skill.text} Icon={skill.icon} />
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
