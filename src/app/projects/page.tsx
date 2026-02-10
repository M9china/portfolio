import { ProjectCard } from "@/components";

export default function Projects() {
  return (
    <main className="container min-h-screen px-8 pt-32 py-16 bg-[#0d1117]">
      <h1 className="text-3xl font-bold mb-8 text-[#c9d1d9] font-semibold">{`These are some of the projects I've worked on`}</h1>
      <p className="text-lg text-[#c9d1d9] mb-12">
        {`Here are some of the projects I've worked on. Click on each project to learn more about it.`}
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <ProjectCard />
      </div>
    </main>
  );
}