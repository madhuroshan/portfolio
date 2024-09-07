import { skills } from "@/lib/constants";
import { Badge } from "./ui/badge";

import React from "react";

const Skills = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-center">Skills</h2>
      <div className="flex flex-wrap justify-center gap-2">
        {skills.map((skill) => (
          <Badge
            key={skill}
            variant={"secondary"}
            className="text-sm py-1 px-2"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  );
};

export default Skills;
