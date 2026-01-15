import React from "react";
import Separator from "./separator";

const Footer = () => {
  return (
    <div className="my-15">
        <Separator />
      <div className="text-neutral-100 flex justify-between">
        <div className="">
          <p className="text-xs text-neutral-400">
            Developed by{" "}
            <span className="text-neutral-100 font-bold tracking-wide">
              Deepak
            </span>
          </p>
        </div>
        <div>
          <p className="text-xs text-neutral-400 font-mono">
            Chht. Sambhajinagar, India,{" "}
            {new Date().toLocaleTimeString("en-IN", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
