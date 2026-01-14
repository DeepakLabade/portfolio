import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const ProjectCard = () => {
  return (
    <div>
      <div className="bg-neutral-900 w-full flex rounded-2xl p-3 gap-4 border border-neutral-800">
        <div className="w-60 h-36 overflow-auto relative">
          <Image
            src={"/synapse.png"}
            alt="/synapse.png"
            className="rounded-xl object-cover "
            fill
          />
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex justify-between">
            <h1 className="font-bold text-lg">Synapse</h1>
            <div className="flex gap-1">
              <button className="flex items-center justify-center gap-1 text-xs border border-neutral-800 hover:border-neutral-700 hover:text-neutral-100 cursor-pointer rounded-lg text-neutral-400 bg-neutral-950 px-1.5 py-0.5">
                <ExternalLink className="w-3 h-3" />
                Live
              </button>
              <button className="flex items-center justify-center gap-1 text-xs border border-neutral-800 hover:text-neutral-100 hover:border-neutral-700 cursor-pointer rounded-lg text-neutral-400 bg-neutral-950 px-1.5 py-0.5">
                <Github className="w-3 h-3" />
                Github
              </button>
            </div>
          </div>
          <div className="">
            <p className="text-neutral-400 text-sm">
                Full-stack productivity platform for saving URLs, notes, and
                insights.
            </p>
          </div>
          <div className="flex gap-1">
            <Icon text={"Next.js"} />
            <Icon text={"PostgreSQL"} />
            <Icon text={"Prisma"} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Icon = ({text}: {text:String}) => {
    return (
        <span className="text-xs px-2 cursor-pointer py-0.5 rounded-lg border border-neutral-700 bg-neutral-800">
            <Link href={"/"}>
            {text}
            </Link>
        </span>
    )
}


export default ProjectCard;
