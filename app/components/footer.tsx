"use client"

import { useEffect, useState } from "react";
import Separator from "./separator";

const Footer = () => {

  const [time, setTime] = useState<string>(new Date().toLocaleTimeString("en-IN", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            }))

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTime(new Date().toLocaleTimeString("en-IN", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            }))
    }, 1000);

    return () => clearInterval(timeInterval)
  }, [])

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
            {time}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
