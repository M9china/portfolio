// components/ProjectCard.tsx
export const ProjectCard = () => {
  return (
    <div className="rounded-2xl border dark:border-[#30363d] p-6 flex flex-col gap-6 hover:shadow-md transition">
      <div className="h-48 bg-gray-100 rounded-xl" />

      <h3 className="text-xl font-semibold">
        EduGlory Platform
      </h3>

      <p className="text-sm text-muted-foreground">
        A full-stack platform designed to showcase academic excellence and curated learning resources.
      </p>

      <p className="text-sm font-medium">
        Next.js • TypeScript • Prisma
      </p>
    </div>
  )
}
