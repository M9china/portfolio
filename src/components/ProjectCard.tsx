import Image from "next/image";
import { projectData } from "./project/projectStatic";

export const ProjectCard = () => {
  return (
    <>
      {projectData.map((project) => (
        <div
          key={project.id}
          className="rounded-2xl border border-[#30363d] p-6 flex flex-col gap-6 hover:shadow-md transition"
        >
          <Image src={project.imageUrl} alt={project.title} width={1300} height={1200} className="h-48  w-auto object-cover rounded-xl" />

          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-[#c9d1d9]">
              {project.title}
            </h3>

            <p className="text-sm text-[#c9d1d9]">{project.description}</p>

            <p className="text-sm font-medium text-[#58a6ff]">
              {project.techStack.join(" • ")}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};
