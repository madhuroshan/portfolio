import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="max-w-[1000px] mx-auto flex-col p-4">
      <div className="mt-10">
        <Intro />
      </div>
      <div className="mt-12 p-2 max-W-[75%] mx-auto">
        <Skills />
      </div>
      // Add this code snippet``
      <div className="mt-12 p-2 max-W-[75%] mx-auto">
        <Projects />
      </div>
    </div>
  );
}
