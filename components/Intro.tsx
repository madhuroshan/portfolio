import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { LinkedinIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Intro = () => {
  return (
    <div className="flex flex-col max-w-[1024px] p-4 mx-auto mt-4">
      <h1 className="text-3xl font-bold ">Madhu Roshan</h1>
      <div className="flex max-sm:flex-col gap-2 items-start justify-between">
        <div>
          <p className="text-gray-500">Full Stack Web Developer</p>
          <p className="text-sm text-gray-500">
            I develop web applications using modern technologies and best
            practices.
          </p>
        </div>
        <div className="flex gap-3">
          <Link href={"https://www.linkedin.com/in/madhuroshan"}>
            <LinkedinIcon className="size-6" />
          </Link>
          <Link href={"https://github.com/madhuroshan"}>
            <GitHubLogoIcon className="size-6" />
          </Link>
          <Link href={"https://x.com/madhuroshann"}>
            <TwitterLogoIcon className="size-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Intro;
