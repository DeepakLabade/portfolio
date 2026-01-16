'use client'
import Link from "next/link";
import Container from "./container";
import { cn } from "../lib/utils";
import { usePathname } from "next/navigation";

const Header = () => {

  const pathname = usePathname()

  return (
    <div>
      <Container classname={"pt-8 border-x border-neutral-800"}>
        <div className="flex justify-between">
            <div className="flex gap-5">
          <Link href={"/"}>
            <p className={cn(`text-sm tracking-wider font-medium text-neutral-500 hover:text-neutral-100`, pathname == "/" && "underline text-neutral-100 underline-offset-4 decoration-2")}>Home</p>
          </Link>
          <Link href={"/projects"}>
          <p className={cn(`text-sm tracking-wider font-medium text-neutral-500 hover:text-neutral-100`, pathname == "/projects" && "underline text-neutral-100 underline-offset-4 decoration-2")}>Projects</p>
          </Link>
            </div>

{/* <div>
    Mode
</div> */}

        </div>
      </Container>
    </div>
  );
};

export default Header;
