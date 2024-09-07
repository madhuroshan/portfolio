import { Globe, Code } from "lucide-react";
import { Badge } from "./ui/badge";
import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { projects } from "@/lib/constants";
import Link from "next/link";

const Projects = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-center">Projects</h2>
      <div className="flex flex-wrap gap-2 items-center justify-center">
        {projects.map((project) => (
          <Card
            key={project.name}
            className="transition-all duration-300 hover:shadow-md w-[300px] max-sm:w-full max-sm:h-fit
            h-[300px]"
          >
            <CardContent className="p-4 flex flex-col items-start justify-around">
              <div>
                <h3 className="font-semibold mb-2">{project.name}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex space-x-2">
                <Button size="sm" asChild className="flex-1">
                  <Link
                    href={project.liveSite}
                    className="flex items-center justify-center"
                  >
                    <Globe className="h-4 w-4 mr-1" /> Live Site
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild className="flex-1">
                  <Link
                    href={project.githubRepo}
                    className="flex items-center justify-center"
                  >
                    <Code className="h-4 w-4 mr-1" /> Code
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
