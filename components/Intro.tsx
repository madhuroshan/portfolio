import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Intro = () => {
  return (
    <section className="space-y-4 text-center">
      <h1 className="text-4xl font-bold">Madhu Roshan</h1>
      <p className="text-xl text-gray-600">Full-Stack Developer</p>
      <div className="flex justify-center space-x-4">
        <Button variant="outline" size="icon">
          <Link href="https://github.com/madhuroshan">
            <GitHubLogoIcon className="h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" size="icon">
          <Link href={"https://www.linkedin.com/in/madhuroshan"}>
            <Linkedin className="h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" size="icon">
          <Link href={"https://x.com/madhuroshann"}>
            <TwitterLogoIcon className="h-4 w-4" />
          </Link>
        </Button>
      </div>
      <p className="max-w-lg mx-auto text-gray-600">
        I create efficient, user-friendly web applications, focusing on clean
        code and intuitive design.
      </p>
    </section>
  );
};

export default Intro;
