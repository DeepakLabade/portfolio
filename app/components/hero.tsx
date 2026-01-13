import Image from "next/image";
import Container from "./container";
import Dot from "./dot";

const Hero = () => {
  return (
    <div className="pt-10">
        <div className="text-neutral-100 flex gap-6 items-end">
          <div className="border border-neutral-700 flex rounded-full max-w-30">    
            <Image
              src={"/photo.png"}
              alt="/avatar.png"
              width={120}
              height={120}
              className="rounded-full border-2"
            />
          </div>
          <div className="flex-1 mt-3 flex flex-col gap-0.5 mb-1">
            <h1 className="text-neutral-200 font-bold text-4xl">Deepak Labade</h1>
            <p className="text-xs text-neutral-400 font-mono flex center gap-2">20 <Dot /> Engineer <Dot /> Developer <Dot /> Builder</p>
            <div className="flex gap-3 mt-1.5">
              <Image width={15} height={15} src={"/logos/Gmail-Logo.svg"} alt="/gmail_icon.svg" />
              <Image width={15} height={15} src={"/logos/linkedin-Logo.svg"} alt="/linkedin_logo.svg" />
              <Image width={15} height={15} src={"/logos/github-logo.svg"} alt="/github_logo.svg" />
            </div>
          </div>
        </div>
    </div>
  );
};

export default Hero;
