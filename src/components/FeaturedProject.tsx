import { ProjectCard } from "./ProjectCard"

export const FeaturedProjects = () => {
  return (
    <section className="flex flex-col gap-12">
      <h2 className="text-3xl text-[#c9d1d9] pt-[3rem] font-semibold">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <ProjectCard />
      </div>
    </section>
  )
}
