import React from "react";
import { cn } from "../lib/utils";

const Dot = ({ classname }: { classname?: string }) => {
  return (
    <span className="flex items-center justify-center" aria-hidden="true">
      <span
        className={cn(
          "w-[3px] h-[3px] bg-neutral-400 rounded-full ",
          classname
        )}
      ></span>
    </span>
  );
};

export default Dot;
