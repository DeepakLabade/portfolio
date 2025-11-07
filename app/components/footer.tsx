import Link from "next/link";
import React from "react";
import Container from "./container";

const Footer = () => {
  return (
    <div className="fixed top-0 left-0 w-full -z-50 h-screen bg-black">
      <Container>
        <div className="text-white flex justify-end py-5 tracking-tighter ">
          <div className="flex gap-10">
            <Link href={""}>LinkedIn</Link>
            <Link href={""}>Twitter</Link>
            <Link href={""}>Github</Link>
          </div>
        </div>
        <div>
          <div className="text-5xl bg-linear-to-r from-neutral-100 font-medium to-black bg-clip-text text-transparent tracking-tighter mt-30 leading-14 ">
            <span>Curious about what we can create together?</span>
            <br />
            <span>Let’s bring something extraordinary to life!</span>
          </div>
          <div className="flex col-3 items-center mt-10 gap-10">
            <button className="text-black  py-5 font-medium px-10 bg-white tracking-tighter">
              Get in Touch
            </button>
            <div className="text-white flex items-center gap-4">
              <div className="h-2.5 w-2.5 rounded-full bg-white "></div>{" "}
              Available For Work
            </div>
          </div>
        </div>
        <div className="mt-34 flex justify-between">
          <div className="w-lg flex justify-between">
            <p className="text-white">deepaklabade001@gmail.com</p>
            <div className="text-white">
              Developed by <br />
              Deepak Labade
            </div>
          </div>
          <div className="text-white">
            All rights reserved,
            <br />
            DL &copy; 2025
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
